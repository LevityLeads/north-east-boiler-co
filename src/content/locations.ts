export interface Location {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  housingContext: string;
  areas: string[];
  faqs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: 'sunderland',
    city: 'Sunderland',
    metaTitle: 'Boiler Replacement Sunderland | Local Gas Safe Engineers',
    metaDescription: 'Expert boiler replacement in Sunderland. From Ashbrooke terraces to Washington new builds, we fit the right boiler for your home. Free quotes, Gas Safe registered.',
    heroHeadline: 'Boiler Replacement in Sunderland',
    intro: 'We are based in Sunderland and it is where the majority of our installations take place. Whether you live in a Victorian terrace in Ashbrooke, a semi in Farringdon, or a new build in Washington, we understand the specific heating requirements of Sunderland homes.\n\nOur engineers know the local housing stock inside out. From the solid-walled terraces near the city centre that need careful flue routing, to the cavity-walled estates in Silksworth and Pennywell where a straightforward combi swap is often all that is needed.',
    housingContext: 'Sunderland has a diverse mix of housing that each presents different heating challenges. The Ashbrooke and Roker areas are known for larger Victorian and Edwardian terraces, many with back boilers still in place. Seaburn and Fulwell have a mix of 1930s semis and post-war bungalows. Washington has extensive 1960s-80s estates alongside modern new-build developments. The city centre has seen significant apartment development in recent years, where compact combi boilers are the standard choice.',
    areas: ['Ashbrooke', 'Roker', 'Seaburn', 'Fulwell', 'Washington', 'Pennywell', 'Silksworth', 'Farringdon', 'Hendon', 'Pallion'],
    faqs: [
      { question: 'How quickly can you install a new boiler in Sunderland?', answer: 'As we are based locally, we can usually complete a survey within 48 hours and schedule installation within a week. For emergencies, we offer next-day installation on stocked models.' },
      { question: 'Do you cover all of Sunderland?', answer: 'Yes, we cover every area of Sunderland including Washington, Houghton-le-Spring, and Hetton-le-Hole. Most of our installations are within a 15-minute drive of our base.' },
      { question: 'What type of boiler is best for Sunderland terraces?', answer: 'Most Sunderland terraces with one bathroom work best with a 25-30kW combi boiler. If you have a loft conversion or multiple bathrooms, we may recommend a system boiler instead.' },
    ],
  },
  {
    slug: 'durham',
    city: 'Durham',
    metaTitle: 'Boiler Replacement Durham | Gas Safe Engineers | Free Quotes',
    metaDescription: 'Boiler replacement in Durham city and county. Victorian terraces, student lets, and listed buildings. Gas Safe registered engineers. Free no-obligation quotes.',
    heroHeadline: 'Boiler Replacement in Durham',
    intro: 'Durham presents unique heating challenges, from the narrow Victorian terraces near the viaduct to the conservation area properties that need sensitive flue installations. Our engineers have extensive experience working in Durham homes and understand the specific requirements of the local building stock.\n\nWe also work with a number of Durham landlords who manage student let properties, where reliable boilers and quick turnaround times are essential between tenancies.',
    housingContext: 'Durham city is characterised by rows of Victorian and Edwardian terraces, particularly in areas like Gilesgate, Neville\'s Cross, and the streets around the railway station. Many of these properties still have original back boilers or ageing system boilers. Framwellgate Moor and Newton Hall have more modern housing stock, including 1970s-90s estates where combi boiler replacements are straightforward. The conservation areas around the cathedral and river require extra care with flue positioning to meet planning requirements.',
    areas: ['Gilesgate', 'Neville\'s Cross', 'Framwellgate Moor', 'Newton Hall', 'Belmont', 'Meadowfield', 'Brandon', 'Langley Moor'],
    faqs: [
      { question: 'Can you install boilers in Durham conservation areas?', answer: 'Yes. We have experience working within conservation area regulations and know how to route flues discreetly to satisfy planning requirements. We handle any necessary consultations with the council.' },
      { question: 'Do you offer boiler installations for Durham student lets?', answer: 'Yes, we work with several Durham landlords and letting agents. We can schedule installations between tenancies and offer competitive rates for multiple-property contracts.' },
      { question: 'How far is Durham from your base?', answer: 'Durham is about 20 minutes from our Sunderland base, so we cover the area regularly. There is no additional charge for Durham installations.' },
    ],
  },
  {
    slug: 'gateshead',
    city: 'Gateshead',
    metaTitle: 'Boiler Replacement Gateshead | Local Heating Engineers',
    metaDescription: 'Boiler replacement in Gateshead. Tyneside flats, Low Fell semis, and Whickham properties. Gas Safe registered engineers, free quotes available.',
    heroHeadline: 'Boiler Replacement in Gateshead',
    intro: 'Gateshead has some of the most varied housing in the North East, and each type needs a different approach to heating. From the famous Tyneside flats in Bensham and Saltwell to the larger semis and detached homes in Low Fell and Whickham, we tailor every installation to the property.\n\nTyneside flats in particular need careful consideration because of shared flue walls, restricted access, and the compact layout typical of these unique North East homes. Our engineers have fitted hundreds of boilers in Tyneside flats and know exactly how to handle them.',
    housingContext: 'Bensham and Saltwell are dominated by Tyneside flats, a housing type almost unique to the North East. These properties have specific requirements for flue positioning and boiler placement due to their layout and shared walls. Low Fell and Chowdene offer larger Edwardian and inter-war semis where system boilers are often the better choice. Whickham and Sunniside have a mix of 1960s-80s estates and newer developments, while Teams and Dunston have extensive post-war social housing where boiler upgrades can make a significant difference to energy bills.',
    areas: ['Low Fell', 'Bensham', 'Saltwell', 'Whickham', 'Sunniside', 'Chowdene', 'Teams', 'Dunston', 'Felling', 'Birtley'],
    faqs: [
      { question: 'Can you install a combi boiler in a Tyneside flat?', answer: 'Yes, combi boilers are the most common choice for Tyneside flats. We have extensive experience with the specific flue routing and pipework requirements these properties need.' },
      { question: 'Do you cover Whickham and Sunniside?', answer: 'Yes, we cover all of Gateshead including Whickham, Sunniside, Rowlands Gill, and Birtley. These areas are all within easy reach of our base.' },
      { question: 'Is there parking for your van in Bensham?', answer: 'We know the Bensham streets well. Our engineers plan their parking in advance and will let you know if they need you to save a space. Permit zones are not a problem.' },
    ],
  },
  {
    slug: 'south-shields',
    city: 'South Shields',
    metaTitle: 'Boiler Replacement South Shields | Gas Safe | Free Quotes',
    metaDescription: 'Boiler replacement in South Shields. Coastal properties in Marsden, Cleadon homes, and Westoe terraces. Gas Safe registered, free no-obligation quotes.',
    heroHeadline: 'Boiler Replacement in South Shields',
    intro: 'South Shields sits right on the coast, which means boilers here work harder against the North Sea weather. Coastal properties in Marsden and along the seafront face salt air exposure that can affect external flue components, so we always specify marine-grade terminals for properties near the water.\n\nFrom the period terraces in Westoe to the family homes in Cleadon and Harton, we provide boiler replacements tailored to the local housing stock and the specific challenges that come with living on the North East coast.',
    housingContext: 'South Shields has a distinctive split between the coastal areas and the inland estates. Marsden and the seafront have a mix of Victorian villas and 1930s properties where corrosion-resistant flue components are essential. Westoe and Laygate have rows of Victorian terraces, many with original back boilers still in service. Cleadon is a popular residential area with larger detached and semi-detached homes that often benefit from system boilers. Harton, Boldon Colliery, and Hebburn are characterised by inter-war and post-war estates where straightforward combi replacements are the norm.',
    areas: ['Marsden', 'Cleadon', 'Westoe', 'Harton', 'Boldon Colliery', 'Hebburn', 'Jarrow', 'Whitburn', 'East Boldon'],
    faqs: [
      { question: 'Do coastal properties in South Shields need special boiler considerations?', answer: 'Yes. Properties near the coast are exposed to salt air which can corrode standard flue terminals. We always fit marine-grade stainless steel terminals for properties within 1km of the seafront.' },
      { question: 'Do you cover Hebburn and Jarrow as well?', answer: 'Yes, Hebburn and Jarrow are both within our regular coverage area. There is no additional charge for these locations.' },
      { question: 'What boiler is best for a large Cleadon house?', answer: 'Larger Cleadon properties with 4+ bedrooms and multiple bathrooms usually suit a system boiler paired with an unvented hot water cylinder. This provides strong, consistent hot water to all bathrooms simultaneously.' },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
