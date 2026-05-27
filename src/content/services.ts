export interface Service {
  slug: string;
  title: string;
  shortTitle: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  heroSubheadline: string;
  intro: string;
  benefits: string[];
  process: { step: string; description: string }[];
  faqs: { question: string; answer: string }[];
  priceFrom?: string;
}

export const services: Service[] = [
  {
    slug: 'combi-boiler-installation',
    title: 'Combi Boiler Installation Sunderland',
    shortTitle: 'Combi Boiler Installation',
    metaTitle: 'Combi Boiler Installation Sunderland | From £1,895 | Gas Safe',
    metaDescription: 'Professional combi boiler installation in Sunderland from £1,895. Gas Safe registered engineers, next-day fitting available. Free no-obligation quotes.',
    heroHeadline: 'Combi Boiler Installation in Sunderland',
    heroSubheadline: 'Compact, efficient hot water on demand. Fitted from £1,895 by Gas Safe registered engineers.',
    intro: 'A combi boiler heats water directly from the mains when you turn on a tap, so there is no need for a hot water cylinder or cold water tank in the loft. This makes them ideal for smaller properties across Sunderland, from Roker terraces to Washington new builds.\n\nOur Gas Safe registered engineers fit all major brands including Worcester Bosch, Vaillant, and Baxi. Every installation includes a full system flush, magnetic filter, and up to 10 years manufacturer warranty.',
    benefits: [
      'Hot water on demand with no storage tank required',
      'Compact size, perfect for Sunderland terraces and flats',
      'Reduced energy bills compared to older boiler systems',
      'Up to 10 years manufacturer warranty included',
      'Next-day installation available for urgent replacements',
      'All installations include a MagnaClean filter and system flush',
    ],
    process: [
      { step: 'Free Survey', description: 'We visit your home to assess your heating needs, check the flue route, and recommend the right size boiler for your property.' },
      { step: 'Fixed Price Quote', description: 'You receive a written quote with no hidden costs. We explain every line item so you know exactly what you are paying for.' },
      { step: 'Installation Day', description: 'Our engineers arrive on time, protect your home, remove the old boiler, and fit your new system. Most installations complete in one day.' },
      { step: 'Handover & Registration', description: 'We walk you through your new boiler controls, register your warranty, and complete the Gas Safe notification.' },
    ],
    faqs: [
      { question: 'How long does a combi boiler installation take?', answer: 'A straightforward swap typically takes 4 to 6 hours. If we need to move the boiler position or upgrade pipework, it may take a full day or extend into a second morning.' },
      { question: 'What size combi boiler do I need?', answer: 'For a typical 2-3 bedroom Sunderland terrace with one bathroom, a 25-30kW combi is usually sufficient. Larger properties with multiple bathrooms may need a 35kW or above.' },
      { question: 'Will I lose hot water during the installation?', answer: 'Yes, your heating and hot water will be off during the installation. We aim to have everything back on before we leave, usually by late afternoon.' },
      { question: 'Do you offer finance on combi boiler installations?', answer: 'Yes, we offer 0% interest finance over 12 months and longer-term options up to 10 years. See our boiler finance page for details.' },
    ],
    priceFrom: '£1,895',
  },
  {
    slug: 'system-boiler-installation',
    title: 'System Boiler Installation Sunderland',
    shortTitle: 'System Boiler Installation',
    metaTitle: 'System Boiler Installation Sunderland | Gas Safe Engineers',
    metaDescription: 'System boiler installation in Sunderland for larger homes. Hot water to multiple bathrooms simultaneously. Gas Safe registered, free quotes.',
    heroHeadline: 'System Boiler Installation in Sunderland',
    heroSubheadline: 'Powerful heating for larger homes. Hot water to multiple bathrooms at the same time.',
    intro: 'System boilers work with a hot water cylinder to store heated water, making them the right choice for larger Sunderland homes with two or more bathrooms. Unlike a combi, a system boiler can supply hot water to multiple taps simultaneously without losing pressure.\n\nWe install system boilers from Worcester Bosch, Vaillant, and Ideal, paired with high-quality unvented cylinders. Our engineers size the system to match your household demands, so you never run out of hot water during the morning rush.',
    benefits: [
      'Hot water to multiple bathrooms simultaneously',
      'Compatible with solar thermal panels for lower energy bills',
      'Stronger water pressure than gravity-fed systems',
      'No cold water tank needed in the loft',
      'Ideal for 4+ bedroom properties across Sunderland',
      'Paired with high-quality unvented hot water cylinders',
    ],
    process: [
      { step: 'Home Assessment', description: 'We survey your property to understand your hot water demands, check mains pressure, and recommend the right boiler and cylinder combination.' },
      { step: 'Detailed Quotation', description: 'A clear, itemised quote with all costs included. No surprises on installation day.' },
      { step: 'Professional Installation', description: 'Our team installs the boiler and cylinder, connects all pipework, and carries out a full system flush. Most installations take 1-2 days.' },
      { step: 'Testing & Handover', description: 'We test every radiator, check flow rates, commission the boiler, and register your warranty with the manufacturer.' },
    ],
    faqs: [
      { question: 'Is a system boiler better than a combi for my home?', answer: 'If you have two or more bathrooms and a busy household, a system boiler will give you a much better experience. Combis can struggle to supply hot water to multiple outlets at once.' },
      { question: 'How much space does a system boiler need?', answer: 'The boiler itself is similar in size to a combi, but you will also need space for a hot water cylinder, typically in an airing cupboard. We can discuss options during the survey.' },
      { question: 'Can I keep my existing hot water cylinder?', answer: 'In some cases yes, but we usually recommend upgrading to an unvented cylinder for better performance and pressure. We will advise during the survey.' },
    ],
  },
  {
    slug: 'back-boiler-replacement',
    title: 'Back Boiler Replacement Sunderland',
    shortTitle: 'Back Boiler Replacement',
    metaTitle: 'Back Boiler Replacement Sunderland | Upgrade Your Heating',
    metaDescription: 'Replace your old back boiler in Sunderland with a modern efficient system. Gas Safe engineers, full removal and disposal included. Free quotes.',
    heroHeadline: 'Back Boiler Replacement in Sunderland',
    heroSubheadline: 'Upgrade from your old back boiler to a modern, efficient system and cut your energy bills.',
    intro: 'Back boilers were common in Sunderland homes built from the 1960s to the 1980s, tucked behind a gas fire in the living room. While they were a clever use of space, they are now well past their expected lifespan. Most run at just 55-65% efficiency compared to over 90% for a modern condensing boiler.\n\nReplacing a back boiler is more involved than a standard swap because we need to safely remove the old unit, cap the fire opening, and route new pipework to the boiler\'s new position. Our engineers have replaced hundreds of back boilers across Sunderland and know exactly how to handle the job with minimal disruption.',
    benefits: [
      'Cut energy bills by up to 30% with a modern condensing boiler',
      'Full removal and safe disposal of the old back boiler',
      'No more relying on a fire you cannot control independently',
      'Modern thermostatic controls for room-by-room comfort',
      'Improve your property value with an updated heating system',
      'All work completed by Gas Safe registered engineers',
    ],
    process: [
      { step: 'Survey & Planning', description: 'We assess your back boiler setup, plan the best position for the new boiler, and map out the pipework route.' },
      { step: 'Fixed Price Quote', description: 'You receive a comprehensive quote covering removal, installation, pipework, controls, and making good.' },
      { step: 'Removal & Installation', description: 'We safely disconnect and remove the back boiler, cap the fireplace opening, install your new boiler in a kitchen or utility room, and connect all pipework. This typically takes 2 days.' },
      { step: 'Completion', description: 'Full system test, controls setup, warranty registration, and Gas Safe notification.' },
    ],
    faqs: [
      { question: 'How long does a back boiler replacement take?', answer: 'Most back boiler replacements take 2 days. Day one involves removal and pipework, day two is fitting the new boiler and testing.' },
      { question: 'What happens to the fireplace after the back boiler is removed?', answer: 'We cap and seal the fireplace opening. You can then choose to fit a decorative fire, leave it closed, or have a builder create a feature. We can advise on options.' },
      { question: 'Is it worth replacing my back boiler?', answer: 'Absolutely. A modern boiler will be at least 25-30% more efficient, saving you hundreds of pounds a year on gas bills. Plus, back boilers are increasingly difficult to get parts for when they break down.' },
    ],
  },
  {
    slug: 'boiler-conversion',
    title: 'Boiler Conversion Sunderland',
    shortTitle: 'Boiler Conversion',
    metaTitle: 'Boiler Conversion Sunderland | System to Combi & More',
    metaDescription: 'Boiler conversion in Sunderland. Switch from system to combi, regular to combi, or upgrade your setup. Gas Safe registered engineers. Free quotes.',
    heroHeadline: 'Boiler Conversion in Sunderland',
    heroSubheadline: 'Switch your boiler type to match how your home uses heating and hot water today.',
    intro: 'Your heating needs change over time. Children move out, loft conversions add bathrooms, or you simply want to reclaim the space taken up by a hot water cylinder. A boiler conversion changes your system type, for example from a regular boiler with tanks to a compact combi, or from a combi to a system boiler for better multi-bathroom performance.\n\nOur engineers assess your property and recommend the right conversion for your situation. We handle all the pipework modifications, remove redundant tanks and cylinders, and leave you with a system that matches how your household actually uses heating and hot water.',
    benefits: [
      'Free up cupboard and loft space by removing tanks and cylinders',
      'Match your heating system to your current household size',
      'Improve water pressure throughout your home',
      'Reduce energy waste from heating water you do not use',
      'All pipework modifications included in the price',
      'Expert advice on the best system type for your property',
    ],
    process: [
      { step: 'Consultation', description: 'We discuss how your household uses heating and hot water, then survey your existing system to plan the conversion.' },
      { step: 'Recommendation & Quote', description: 'We recommend the best boiler type and provide a clear quote covering the full conversion, including removal of redundant components.' },
      { step: 'Conversion Work', description: 'Our team carries out the conversion, which typically takes 1-2 days depending on the complexity of pipework changes.' },
      { step: 'System Commissioning', description: 'Full testing, controls setup, and warranty registration. We explain how your new system works before we leave.' },
    ],
    faqs: [
      { question: 'Can I convert from a system boiler to a combi?', answer: 'Yes, this is one of the most common conversions. We remove the hot water cylinder and connect the combi directly to the mains. It works well for homes with one bathroom.' },
      { question: 'Will a conversion affect my radiators?', answer: 'Usually not. Your existing radiators and pipework are typically compatible with the new boiler. We may recommend adding a couple of radiators if you have extended your home since the original installation.' },
      { question: 'How much does a boiler conversion cost?', answer: 'Costs vary depending on the type of conversion and how much pipework needs modifying. We provide a fixed-price quote after surveying your property, so there are no surprises.' },
    ],
  },
  {
    slug: 'emergency-boiler-replacement',
    title: 'Emergency Boiler Replacement Sunderland',
    shortTitle: 'Emergency Replacement',
    metaTitle: 'Emergency Boiler Replacement Sunderland | Same-Day Response',
    metaDescription: 'Emergency boiler replacement in Sunderland. Boiler broken beyond repair? Same-day response, next-day installation available. Call 0191 000 0000.',
    heroHeadline: 'Emergency Boiler Replacement in Sunderland',
    heroSubheadline: 'Boiler broken beyond repair? We offer same-day response and can install a new boiler as early as tomorrow.',
    intro: 'When your boiler fails in the middle of a North East winter, waiting days for a replacement is not an option. Our emergency service prioritises households without heating or hot water, with same-day assessments and next-day installation available on common boiler models that we keep in stock.\n\nWe carry popular Worcester Bosch and Vaillant models on our vans, so if your old boiler is beyond economic repair, we can often have a new one fitted within 24 hours of your call. No need to spend nights in a cold house.',
    benefits: [
      'Same-day response when your boiler fails',
      'Next-day installation available on stocked models',
      'Popular boiler models carried on our vans',
      'Temporary heating solutions if installation cannot happen immediately',
      'No premium pricing for emergency work',
      'Available 7 days a week during the heating season',
    ],
    process: [
      { step: 'Call Us', description: 'Ring our emergency line and we will arrange a same-day visit to assess your boiler and advise on the best replacement option.' },
      { step: 'Quick Assessment', description: 'Our engineer checks whether repair is viable. If not, we recommend a replacement and provide an instant quote.' },
      { step: 'Fast Installation', description: 'If we have your boiler in stock, we can install as early as the next morning. For less common models, we aim for 2-3 working days.' },
      { step: 'Back Up & Running', description: 'Full installation, testing, and commissioning. Your heating and hot water are restored as quickly as possible.' },
    ],
    faqs: [
      { question: 'How quickly can you replace my boiler in an emergency?', answer: 'We aim for next-day installation if we have your boiler in stock. In most cases, you will have heating and hot water back within 24 to 48 hours of your initial call.' },
      { question: 'Do you charge more for emergency replacements?', answer: 'No. Our boiler prices and installation costs are the same whether it is a planned replacement or an emergency. We do not add emergency premiums.' },
      { question: 'What if I cannot afford a new boiler right now?', answer: 'We offer finance options including 0% interest over 12 months. We can also check whether you qualify for a free boiler grant under the ECO4 scheme.' },
    ],
  },
  {
    slug: 'free-boiler-grants',
    title: 'Free Boiler Replacement Grants Sunderland',
    shortTitle: 'Free Boiler Grants',
    metaTitle: 'Free Boiler Replacement Grants Sunderland | ECO4 2026',
    metaDescription: 'Check if you qualify for a free boiler replacement grant in Sunderland under the ECO4 scheme. Income-based and benefit-based eligibility. Apply today.',
    heroHeadline: 'Free Boiler Grants in Sunderland',
    heroSubheadline: 'The ECO4 scheme can fund a complete boiler replacement at no cost. Check if you qualify in 60 seconds.',
    intro: 'The Energy Company Obligation (ECO4) scheme requires large energy suppliers to fund energy efficiency improvements for eligible households. If you receive certain benefits or have a low household income, you could qualify for a brand new boiler installed completely free of charge.\n\nWe are an approved ECO4 installer covering Sunderland and the wider North East. Our team handles the entire application process, from checking your eligibility to completing the installation and filing all the paperwork. There is no catch and no hidden costs for qualifying households.',
    benefits: [
      'Completely free boiler replacement for qualifying households',
      'We handle the full ECO4 application process for you',
      'No upfront costs and no hidden charges',
      'Available to homeowners and private tenants',
      'Covers full installation including pipework and controls',
      'Quick eligibility check with no obligation',
    ],
    process: [
      { step: 'Eligibility Check', description: 'Fill in our short form or call us. We check your benefits and household income against the ECO4 criteria in minutes.' },
      { step: 'Application', description: 'If you qualify, we submit the funding application on your behalf. This typically takes 5-10 working days to process.' },
      { step: 'Approval & Survey', description: 'Once approved, we survey your property and recommend the best boiler for your home.' },
      { step: 'Free Installation', description: 'We install your new boiler at no cost. You get a modern, efficient heating system with a full manufacturer warranty.' },
    ],
    faqs: [
      { question: 'Who qualifies for a free boiler grant?', answer: 'You may qualify if you receive benefits such as Universal Credit, Pension Credit, Child Tax Credits, or Income Support. Low-income households not on benefits may also qualify through the LA Flex pathway. We can check your eligibility quickly.' },
      { question: 'Is the boiler really free?', answer: 'Yes. The ECO4 scheme is funded by energy companies as a legal obligation. There are no hidden costs, no monthly payments, and no catch. You receive a brand new boiler with a manufacturer warranty at zero cost.' },
      { question: 'Can private tenants get a free boiler?', answer: 'Yes, but you will need your landlord to agree to the installation. We can provide a letter explaining the scheme to your landlord if needed.' },
      { question: 'How long does the ECO4 application take?', answer: 'From initial enquiry to installation usually takes 2-4 weeks, depending on how quickly the funding application is processed.' },
    ],
  },
  {
    slug: 'boiler-finance',
    title: 'Boiler Finance Sunderland',
    shortTitle: 'Boiler Finance',
    metaTitle: 'Boiler Finance Sunderland | 0% Interest Available',
    metaDescription: 'Spread the cost of a new boiler in Sunderland with 0% interest finance. Monthly payments from £30. No deposit required. Apply online today.',
    heroHeadline: 'Boiler Finance in Sunderland',
    heroSubheadline: 'Spread the cost of your new boiler with 0% interest finance over 12 months, or choose longer terms to suit your budget.',
    intro: 'A new boiler is an investment in your home, but we understand that finding the full amount upfront is not always practical. That is why we offer flexible finance options that let you spread the cost into affordable monthly payments, starting from as little as £30 per month.\n\nOur 0% interest option over 12 months means you pay exactly the same as you would upfront, just in smaller, manageable chunks. For those who prefer lower monthly payments, we offer longer terms up to 10 years with competitive interest rates.',
    benefits: [
      '0% interest finance available over 12 months',
      'Longer terms up to 10 years for lower monthly payments',
      'No deposit required on most finance plans',
      'Quick online application with instant decision',
      'Monthly payments from as little as £30',
      'Spread the cost of any boiler installation or conversion',
    ],
    process: [
      { step: 'Get a Quote', description: 'We survey your property and provide a fixed-price quote for your new boiler installation.' },
      { step: 'Choose Your Plan', description: 'Pick the finance term that suits your budget. We will show you the monthly cost for each option.' },
      { step: 'Quick Application', description: 'Complete a short online application. Most decisions are instant, so you will know within minutes.' },
      { step: 'Installation', description: 'Once approved, we schedule your installation. Your first payment is not due until a month after the boiler is fitted.' },
    ],
    faqs: [
      { question: 'Is the 0% finance really interest-free?', answer: 'Yes. Our 12-month 0% plan has no interest and no fees. You pay the same total as you would if paying upfront, just spread over 12 monthly payments.' },
      { question: 'Do I need a deposit?', answer: 'No deposit is required on most of our finance plans. The full cost is spread across your monthly payments.' },
      { question: 'What credit score do I need?', answer: 'Finance is subject to status and affordability checks. We work with multiple lenders, so we can often find an option even if your credit is not perfect.' },
      { question: 'Can I pay off the finance early?', answer: 'Yes. You can settle your finance early at any time with no early repayment fees.' },
    ],
  },
];

export function getServiceBySlug(slug: string): Service | undefined {
  return services.find((s) => s.slug === slug);
}
