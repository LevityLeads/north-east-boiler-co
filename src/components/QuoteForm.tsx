'use client';

import { useState } from 'react';

const propertyTypes = ['House', 'Flat', 'Bungalow', 'Other'];
const boilerTypes = ['Combi', 'System', 'Back Boiler', 'Unknown'];
const bedroomOptions = ['1', '2', '3', '4', '5+'];
const bathroomOptions = ['1', '2', '3+'];
const urgencyOptions = ['Not urgent', 'Within 3 months', 'ASAP - broken boiler'];

export default function QuoteForm() {
  const [step, setStep] = useState(1);
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    propertyType: '',
    boilerType: '',
    bedrooms: '',
    bathrooms: '',
    urgency: '',
    name: '',
    phone: '',
    email: '',
    postcode: '',
    message: '',
  });

  const updateField = (field: string, value: string) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
  };

  const canProceed = () => {
    if (step === 1) return formData.propertyType && formData.boilerType;
    if (step === 2) return formData.bedrooms && formData.bathrooms && formData.urgency;
    if (step === 3) return formData.name && formData.phone && formData.email && formData.postcode;
    return false;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="rounded-lg border border-border bg-white p-8 text-center shadow-sm">
        <div className="mx-auto mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-green-100">
          <svg className="h-8 w-8 text-green-600" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="mb-2 text-xl font-semibold text-navy">Quote Request Received</h3>
        <p className="text-text-muted">
          Thank you, {formData.name}. We will call you within 2 hours to arrange your free, no-obligation survey.
        </p>
      </div>
    );
  }

  return (
    <div className="rounded-lg border border-border bg-white p-6 shadow-sm md:p-8">
      <div className="mb-6">
        <h3 className="mb-3 text-xl font-semibold text-navy">Get Your Free Quote</h3>
        {/* Progress indicator */}
        <div className="flex items-center gap-2">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-2">
              <div
                className={`flex h-8 w-8 items-center justify-center rounded-full text-sm font-semibold transition-colors ${
                  s <= step ? 'bg-orange text-white' : 'bg-bg-alt text-text-muted'
                }`}
              >
                {s}
              </div>
              {s < 3 && (
                <div className={`h-0.5 w-8 transition-colors ${s < step ? 'bg-orange' : 'bg-border'}`} />
              )}
            </div>
          ))}
        </div>
      </div>

      <form onSubmit={handleSubmit}>
        {/* Step 1: Property & Boiler Type */}
        {step === 1 && (
          <div className="space-y-4">
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-text">Property type</legend>
              <div className="grid grid-cols-2 gap-2">
                {propertyTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateField('propertyType', type)}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      formData.propertyType === type
                        ? 'border-orange bg-orange/5 text-orange'
                        : 'border-border text-text hover:border-navy'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-text">Current boiler type</legend>
              <div className="grid grid-cols-2 gap-2">
                {boilerTypes.map((type) => (
                  <button
                    key={type}
                    type="button"
                    onClick={() => updateField('boilerType', type)}
                    className={`rounded-lg border px-4 py-3 text-sm font-medium transition-colors ${
                      formData.boilerType === type
                        ? 'border-orange bg-orange/5 text-orange'
                        : 'border-border text-text hover:border-navy'
                    }`}
                  >
                    {type}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {/* Step 2: Property Size & Urgency */}
        {step === 2 && (
          <div className="space-y-4">
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-text">Number of bedrooms</legend>
              <div className="flex gap-2">
                {bedroomOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('bedrooms', opt)}
                    className={`flex-1 rounded-lg border px-3 py-3 text-sm font-medium transition-colors ${
                      formData.bedrooms === opt
                        ? 'border-orange bg-orange/5 text-orange'
                        : 'border-border text-text hover:border-navy'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-text">Number of bathrooms</legend>
              <div className="flex gap-2">
                {bathroomOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('bathrooms', opt)}
                    className={`flex-1 rounded-lg border px-3 py-3 text-sm font-medium transition-colors ${
                      formData.bathrooms === opt
                        ? 'border-orange bg-orange/5 text-orange'
                        : 'border-border text-text hover:border-navy'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </fieldset>
            <fieldset>
              <legend className="mb-2 text-sm font-medium text-text">How urgent is the replacement?</legend>
              <div className="space-y-2">
                {urgencyOptions.map((opt) => (
                  <button
                    key={opt}
                    type="button"
                    onClick={() => updateField('urgency', opt)}
                    className={`w-full rounded-lg border px-4 py-3 text-left text-sm font-medium transition-colors ${
                      formData.urgency === opt
                        ? 'border-orange bg-orange/5 text-orange'
                        : 'border-border text-text hover:border-navy'
                    }`}
                  >
                    {opt}
                  </button>
                ))}
              </div>
            </fieldset>
          </div>
        )}

        {/* Step 3: Contact Details */}
        {step === 3 && (
          <div className="space-y-4">
            <div>
              <label htmlFor="name" className="mb-1 block text-sm font-medium text-text">Full name</label>
              <input
                id="name"
                type="text"
                required
                value={formData.name}
                onChange={(e) => updateField('name', e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                placeholder="John Smith"
              />
            </div>
            <div>
              <label htmlFor="phone" className="mb-1 block text-sm font-medium text-text">Phone number</label>
              <input
                id="phone"
                type="tel"
                required
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                placeholder="0191 000 0000"
              />
            </div>
            <div>
              <label htmlFor="email" className="mb-1 block text-sm font-medium text-text">Email address</label>
              <input
                id="email"
                type="email"
                required
                value={formData.email}
                onChange={(e) => updateField('email', e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                placeholder="john@example.com"
              />
            </div>
            <div>
              <label htmlFor="postcode" className="mb-1 block text-sm font-medium text-text">Postcode</label>
              <input
                id="postcode"
                type="text"
                required
                value={formData.postcode}
                onChange={(e) => updateField('postcode', e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                placeholder="SR1 1AA"
              />
            </div>
            <div>
              <label htmlFor="message" className="mb-1 block text-sm font-medium text-text">
                Message <span className="font-normal text-text-muted">(optional)</span>
              </label>
              <textarea
                id="message"
                rows={3}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full rounded-lg border border-border px-4 py-3 text-sm text-text placeholder:text-text-muted/60 focus:border-orange focus:outline-none focus:ring-1 focus:ring-orange"
                placeholder="Tell us about your current boiler or any specific requirements..."
              />
            </div>
          </div>
        )}

        {/* Navigation buttons */}
        <div className="mt-6 flex items-center justify-between">
          {step > 1 ? (
            <button
              type="button"
              onClick={() => setStep(step - 1)}
              className="rounded-lg border border-border px-6 py-3 text-sm font-medium text-text transition-colors hover:border-navy"
            >
              Back
            </button>
          ) : (
            <div />
          )}
          {step < 3 ? (
            <button
              type="button"
              disabled={!canProceed()}
              onClick={() => setStep(step + 1)}
              className="rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              Next Step
            </button>
          ) : (
            <button
              type="submit"
              disabled={!canProceed()}
              className="rounded-lg bg-orange px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-dark disabled:cursor-not-allowed disabled:opacity-50"
            >
              Get Free Quote
            </button>
          )}
        </div>
      </form>
    </div>
  );
}
