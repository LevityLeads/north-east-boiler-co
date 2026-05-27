export interface Location {
  slug: string;
  city: string;
  metaTitle: string;
  metaDescription: string;
  heroHeadline: string;
  intro: string;
  housingContext: string;
  sections: { heading: string; content: string }[];
  areas: string[];
  faqs: { question: string; answer: string }[];
}

export const locations: Location[] = [
  {
    slug: 'sunderland',
    city: 'Sunderland',
    metaTitle: 'Boiler Replacement Sunderland | Gas Safe Engineers',
    metaDescription: 'Expert boiler replacement in Sunderland. From Ashbrooke terraces to Washington new builds. Gas Safe registered, free quotes, same-week installation.',
    heroHeadline: 'Boiler Replacement in Sunderland',
    intro: 'Sunderland is home base for us, and it is where the majority of our boiler installations take place. We know this city street by street, from the Victorian terraces climbing the hill behind Wearmouth Bridge to the sprawling estates out towards Washington. That local knowledge matters. Every neighbourhood has its own quirks when it comes to heating, and getting the right boiler fitted properly the first time saves you money for years to come.\n\nWhether your back boiler finally gave up in your Ashbrooke terrace or you want to upgrade the builder-grade combi in a Washington new build, our Gas Safe registered engineers will survey your home, recommend the right system, and get it installed within the week. We cover every SR1 through SR6 postcode, and because we are based locally, our response times are the fastest in the area.\n\nOur boiler replacement service is straightforward: free home survey, written quote with no hidden extras, and professional installation by engineers who have worked in Sunderland homes for over a decade. We fit Vaillant, Worcester Bosch, Baxi, and Ideal boilers, each backed by manufacturer warranties of up to 12 years.',
    housingContext: 'Sunderland has one of the most varied housing stocks in the North East. The city centre and inner suburbs like Hendon, Pallion, and the streets around the Stadium of Light are dominated by Victorian and Edwardian terraces, many of which still have back boilers tucked behind gas fires. These older systems are inefficient and increasingly difficult to get parts for. Moving from a back boiler to a wall-mounted combi is one of the most common jobs we do in Sunderland, and it typically saves homeowners between £200 and £400 a year on gas bills.\n\nFurther out, the picture changes. Silksworth, Farringdon, and Doxford Park have large 1970s and 1980s estates with cavity walls and straightforward pipework runs. Washington is split between similar post-war housing and modern new-build developments where compact combi boilers are standard. Roker and Seaburn bring coastal considerations into play, with salt air affecting external flue terminals on properties within a few streets of the seafront.',
    sections: [
      {
        heading: 'Back Boiler Replacements in Ashbrooke and the City Centre',
        content: 'Ashbrooke is one of Sunderland\'s most desirable residential areas, but its Victorian terraces come with heating challenges. Many properties between Thornhill Park and Ryhope Road still have back boilers behind living room fireplaces. These cast iron units were installed in the 1970s and 1980s, and most are well past their useful life.\nReplacing a back boiler means removing the old unit, capping the fireplace opening or fitting a decorative insert, and installing a new wall-mounted boiler, usually in the kitchen. The pipework route through these solid-walled terraces needs careful planning. Our engineers have done this job hundreds of times in Ashbrooke and the surrounding streets, so they know exactly where to route pipes with minimal disruption to your walls and floors.\nBack boiler replacements in terraced properties typically take a full day. We handle all the building work, including making good the fireplace area, so you are not left with a half-finished job. Our combi boiler installation service is the most popular choice for Ashbrooke terraces with a single bathroom.'
      },
      {
        heading: 'Coastal Properties in Roker and Seaburn',
        content: 'If you live within a few streets of the coast in Roker or Seaburn, your boiler installation needs an extra consideration that most Sunderland homes do not: salt air. The North Sea wind carries salt spray inland, and over time this corrodes standard galvanised steel flue terminals. We have seen flue terminals on seafront properties deteriorate in as little as two years.\nFor every coastal installation, we fit marine-grade stainless steel flue terminals as standard. It is a small additional cost that prevents a much bigger problem down the line. We also position the flue to minimise direct exposure to prevailing onshore winds where the property layout allows.\nRoker and Seaburn have a lovely mix of period properties. The larger villas along Roker Park Road and the streets behind the seafront often suit system boilers paired with unvented cylinders, giving strong hot water pressure to multiple bathrooms. The 1930s semis further back from the coast are well suited to modern combi boilers in the 28-32kW range.'
      },
      {
        heading: 'Washington New Builds and Estate Properties',
        content: 'Washington accounts for a large share of our installation work, and the jobs there tend to be faster and simpler than city centre properties. The new-build developments around Fatfield, Barmston, and Albany have compact combi boilers that are easy to access and straightforward to swap.\nMany Washington new builds were fitted with budget combi boilers by developers. These units do the job for the first few years but often lack the efficiency and output of a quality replacement. Upgrading from a builder-grade boiler to a Vaillant ecoTEC or Worcester Greenstar is one of the best value improvements you can make to a Washington home.\nThe older Washington estates from the new town era, places like Oxclose, Blackfell, and Ayton, have a mix of system and combi boilers. Many of these are reaching 15-20 years old and are due for replacement. The cavity-wall construction and accessible cupboard spaces in these homes make installation straightforward, usually completed in half a day for a like-for-like combi swap.'
      },
      {
        heading: 'ECO4 Grants and Boiler Funding in Sunderland',
        content: 'Sunderland ranks 28th on the Index of Multiple Deprivation, which means a significant number of households qualify for a free or heavily subsidised boiler replacement under the ECO4 scheme. Areas like Pennywell, Hendon, Town End Farm, and parts of Pallion have particularly high eligibility rates.\nThe ECO4 scheme funds boiler replacements for homeowners and private tenants who receive qualifying benefits, including Universal Credit, Pension Credit, Child Tax Credit, and others. If you are eligible, you could receive a brand new A-rated boiler at no cost. We handle the entire application process for you.\nMany households in Sunderland qualify for a free boiler under the ECO4 scheme, and we encourage anyone who is unsure to check their eligibility. Visit our free boiler grants page for full details on who qualifies and how the process works. Even if you do not qualify for a full grant, you may be eligible for partial funding that significantly reduces the cost. Our cost guide breaks down what you can expect to pay for different types of installation.'
      },
    ],
    areas: ['Ashbrooke', 'Roker', 'Seaburn', 'Fulwell', 'Washington', 'Pennywell', 'Silksworth', 'Farringdon', 'Hendon', 'Pallion', 'Doxford Park', 'Herrington', 'Ryhope'],
    faqs: [
      {
        question: 'How quickly can you fit a new boiler in Sunderland?',
        answer: 'Because we are based in Sunderland, we can usually survey your home within 48 hours and schedule installation within five working days. For emergency breakdowns during winter, we carry popular models in stock for next-day installation.',
      },
      {
        question: 'Do you cover all of Sunderland including Washington and Houghton?',
        answer: 'Yes. We cover every SR1 through SR6 postcode, including Washington, Houghton-le-Spring, Hetton-le-Hole, and Seaham. Most of our work is within 15 minutes of the Stadium of Light area, so response times are fast.',
      },
      {
        question: 'What type of boiler suits a Sunderland terrace?',
        answer: 'Most Sunderland terraces with one bathroom work best with a 25-30kW combi boiler. Combis heat water on demand so you do not need a hot water tank, which frees up cupboard space. If you have a loft conversion or two bathrooms, a system boiler with an unvented cylinder may be the better choice.',
      },
      {
        question: 'Do I need a marine-grade flue in Roker or Seaburn?',
        answer: 'We strongly recommend it for any property within about 1km of the seafront. Salt air corrodes standard flue terminals surprisingly fast. Marine-grade stainless steel terminals cost a little more upfront but last the full lifetime of the boiler.',
      },
      {
        question: 'Can I get a free boiler through the ECO4 scheme in Sunderland?',
        answer: 'Potentially, yes. Sunderland has high eligibility rates for ECO4 grants due to its deprivation ranking. If you receive qualifying benefits such as Universal Credit or Pension Credit, you may be entitled to a fully funded replacement. We handle the paperwork for you.',
      },
      {
        question: 'How much does a new boiler cost in Sunderland?',
        answer: 'A straightforward combi boiler replacement in Sunderland typically costs between £1,800 and £3,200 depending on the brand and model. Back boiler replacements and system boiler installations cost more due to the additional work involved. Check our cost guide for a detailed breakdown.',
      },
    ],
  },
  {
    slug: 'durham',
    city: 'Durham',
    metaTitle: 'Boiler Replacement Durham | Gas Safe | Free Quotes',
    metaDescription: 'Boiler replacement in Durham. Victorian terraces, student lets, conservation areas. Gas Safe engineers, free no-obligation quotes.',
    heroHeadline: 'Boiler Replacement in Durham',
    intro: 'Durham is a city of contrasts when it comes to housing. The medieval streets clustered around the Cathedral sit alongside Victorian terraces in Gilesgate, modern estates in Newton Hall, and ex-pit villages like Brandon and Meadowfield scattered through the surrounding countryside. Each brings different heating requirements, and our engineers have the experience to handle all of them.\n\nWe work regularly in Durham, both for homeowners upgrading old boilers and for landlords who need reliable installations in student rental properties. The university creates a rental market unlike anywhere else in the region, and we understand the specific pressures that puts on heating systems. Quick turnarounds between tenancies, durable equipment, and hassle-free installations are what Durham landlords need from us.\n\nOur Durham coverage takes in the DH1 postcode area and the surrounding villages. We offer free home surveys with written quotes, and because we are only 20 minutes from our Sunderland base, there is no additional charge for Durham installations.',
    housingContext: 'Durham city centre is defined by its rows of Victorian and Edwardian terraces. The streets around Gilesgate, Claypath, and Neville\'s Cross were built for the workers and tradespeople who served the Cathedral, the university, and the surrounding coal industry. These properties have solid walls, narrow internal layouts, and many still rely on ageing back boilers or gravity-fed systems that are well overdue for replacement.\n\nOutside the historic core, Durham\'s housing stock shifts considerably. Framwellgate Moor has a substantial stock of 1960s and 1970s semis with cavity walls and straightforward heating layouts. Newton Hall, built mainly in the 1970s and 1980s, is one of the largest private housing estates in the country, and many of its original boilers have now been replaced two or three times. Belmont, Sherburn, and Bowburn are former colliery villages with a mix of older terraces and newer infill development.',
    sections: [
      {
        heading: 'Conservation Areas and Listed Building Constraints',
        content: 'Durham has extensive conservation areas around the Cathedral, the river banks, and the historic city centre. If your property falls within one of these zones, your boiler installation needs to account for planning restrictions on external alterations. Flue terminals visible from the street or from key sightlines may need to be positioned on rear elevations, which can affect where the boiler sits inside.\nWe have completed installations in conservation area properties throughout Durham, including on streets with direct views of Durham Cathedral. Our engineers know which positions work and which will trigger a planning objection. We liaise with Durham County Council\'s conservation team when needed, so you do not have to handle that yourself.\nFor properties that are actually listed, rather than just in a conservation area, there are additional constraints. Listed building consent may be required for any external alterations. We can advise on the likely requirements during your free survey and factor any additional steps into the project timeline.'
      },
      {
        heading: 'Student Let Boiler Installations',
        content: 'Durham University drives one of the largest student rental markets in the North East. Landlords managing terraced houses in Gilesgate, Claypath, Crossgate, and the Viaduct area need boilers that are reliable, efficient, and quick to install. A broken boiler during term time is an emergency. A slow installation during the summer changeover window creates real problems.\nWe work with several Durham letting agents and private landlords to schedule boiler replacements during the gap between tenancies, typically in late June and July. For multi-property landlords, we offer competitive rates and can stagger installations across a portfolio to minimise disruption.\nThe most popular choice for Durham student lets is a mid-range combi boiler in the 28-30kW range. These units provide enough hot water for a shared house of 3-4 students, heat efficiently, and come with warranties that give landlords peace of mind. Our boiler replacement service includes full system flushing and a Benchmark commissioning certificate, which your letting agent will need for compliance records.'
      },
      {
        heading: 'Framwellgate Moor and Newton Hall Estates',
        content: 'Framwellgate Moor and Newton Hall together form a large swathe of suburban housing north of Durham city centre. The housing here is predominantly 1960s through 1980s construction: semis, detached houses, and some bungalows, mostly with cavity walls and accessible boiler locations.\nBoiler replacements in these estates are typically the simplest jobs we do. The existing boiler is usually in a kitchen cupboard or utility room with a short flue run through the external wall. A like-for-like combi swap can often be completed in four to five hours. We replace the boiler, upgrade the controls to a modern programmable thermostat, flush the system, and commission the new unit.\nNewton Hall in particular has a large number of properties now on their third boiler. If yours is over 12-15 years old, it is likely running at 70-80% efficiency compared to the 92-94% of a modern condensing boiler. That difference shows up on your gas bills every quarter. Many households in Newton Hall and Framwellgate Moor qualify for a free boiler under the ECO4 scheme, so it is worth checking eligibility before paying out of pocket. Our grants guide explains the qualifying criteria in full.'
      },
      {
        heading: 'Durham Villages: Brandon, Meadowfield, and Langley Moor',
        content: 'The villages surrounding Durham have their own character and housing stock. Brandon and Meadowfield sit to the south-west, with rows of stone-built former colliery cottages alongside 1950s and 1960s council housing and more recent private development. Langley Moor and Sherburn follow a similar pattern.\nThese villages often have properties where the heating system has not been updated in decades. We regularly remove old floor-standing boilers and gravity-fed systems in these areas, replacing them with modern wall-mounted combis that free up floor space and cut gas bills. The older stone cottages can present challenges with solid walls, but our engineers are experienced in routing pipework through these properties neatly.\nWe cover all the Durham surrounding villages with no additional travel charge. Brandon, Meadowfield, Langley Moor, Bowburn, Sherburn, and Belmont are all within our regular service area. Whether you are in one of the original colliery terraces or a modern estate home, we can survey your property and give you an honest recommendation on the best boiler for your situation.'
      },
    ],
    areas: ['Gilesgate', 'Neville\'s Cross', 'Framwellgate Moor', 'Newton Hall', 'Belmont', 'Meadowfield', 'Brandon', 'Langley Moor', 'Sherburn', 'Bowburn'],
    faqs: [
      {
        question: 'Can you install boilers in Durham conservation areas?',
        answer: 'Yes. We have completed many installations in conservation area properties around the Cathedral and river. We know how to position flues discreetly to meet planning requirements and will handle any necessary council consultations for you.',
      },
      {
        question: 'Do you work with Durham student let landlords?',
        answer: 'We do, and we schedule installations to fit around tenancy changeovers. We offer competitive rates for landlords with multiple properties and provide all the compliance documentation your letting agent will need.',
      },
      {
        question: 'Is there an extra charge for installations in Durham?',
        answer: 'No. Durham is about 20 minutes from our Sunderland base, and we work there regularly. All our quoted prices include travel, so there is no surcharge for Durham postcodes.',
      },
      {
        question: 'What boiler do you recommend for a Durham terrace?',
        answer: 'For a typical two or three bedroom Durham terrace with one bathroom, a 25-28kW combi boiler is usually the right choice. The Vaillant ecoTEC plus and Worcester Greenstar are our most popular models for this property type. Both come with extended warranties when installed by a Gas Safe accredited installer.',
      },
      {
        question: 'Do properties near Durham Marketplace need special considerations?',
        answer: 'Properties in the historic centre around Durham Marketplace and the Prince Bishops area often fall within conservation zones. This affects where flue terminals can be positioned externally. We assess this during your free survey and plan the installation accordingly.',
      },
      {
        question: 'Can I get a boiler grant if I live in a Durham village?',
        answer: 'Many residents in Brandon, Meadowfield, and the surrounding villages qualify for ECO4 funding. Eligibility depends on your benefits status and the energy efficiency of your home. Visit our free boiler grants page to check, or ask during your survey and we will run through the criteria with you.',
      },
    ],
  },
  {
    slug: 'gateshead',
    city: 'Gateshead',
    metaTitle: 'Boiler Replacement Gateshead | Local Engineers',
    metaDescription: 'Boiler replacement in Gateshead. Tyneside flats in Bensham, Low Fell semis, Whickham homes. Gas Safe registered, free quotes.',
    heroHeadline: 'Boiler Replacement in Gateshead',
    intro: 'Gateshead has something no other town in England has: Tyneside flats. These unique two-storey maisonettes, stacked in pairs behind a single front door, are the defining housing type of Bensham, Saltwell, and large parts of central Gateshead. They need specialist knowledge to work on, and our engineers have fitted boilers in hundreds of them.\n\nBut Gateshead is not all Tyneside flats. Low Fell and Chowdene have handsome Edwardian and inter-war semis. Whickham and Sunniside offer modern family homes with straightforward heating layouts. Teams and Dunston have post-war estates where boiler upgrades can make a real difference to energy bills. Whatever your property type, we provide boiler replacements across NE8 through NE11 postcodes with no travel surcharges.\n\nOur Gateshead installations come with the same service as everywhere else: free home survey, written quote, Gas Safe certified installation, and manufacturer-backed warranties. We carry stock of the most popular models so we can usually install within the week.',
    housingContext: 'The housing stock in Gateshead tells the story of the town\'s industrial past. The Tyneside flats of Bensham and Saltwell were built for workers at the factories and engineering works along the south bank of the Tyne. These properties are almost unique to the North East, and most heating engineers from outside the region have never worked on one. The layout, with its shared central wall, narrow rooms, and limited external wall space, creates specific challenges for flue routing and boiler placement.\n\nSouth of the town centre, the housing changes dramatically. Low Fell\'s tree-lined streets have large Edwardian semis with multiple reception rooms and often two or three floors. Further out, Whickham and Sunniside sit higher up and have a mix of 1960s estates and modern developments. Down by the river, Teams and Dunston have significant social housing stock where ageing boilers drive up fuel poverty. Gateshead Council has run several energy efficiency programmes targeting these areas, and ECO4 grants offer another route to funded replacement.',
    sections: [
      {
        heading: 'Tyneside Flat Boiler Installations in Bensham and Saltwell',
        content: 'If you have never lived in one, a Tyneside flat takes some explaining. Two self-contained homes are stacked vertically within what looks from the outside like a standard terrace house. The ground floor flat has its own front door; the upper flat enters through a separate door at the side. The two homes share a central party wall, and neither has direct access to the other.\nThis layout creates three specific challenges for boiler installations. First, flue routing. The external walls suitable for a flue terminal are limited, and the shared party wall cannot be used. Second, boiler position. Kitchens in Tyneside flats are often small, so finding wall space for a modern boiler requires careful measurement. Third, condensate drainage. The boiler\'s condensate pipe needs to reach an external drain, which is simple in the ground floor flat but sometimes requires creative routing in the upper flat.\nOur engineers have fitted combi boilers in Tyneside flats across Bensham, Saltwell, and the streets between Saltwell Park and Gateshead High Street for years. We know which walls work, how to route condensate pipes neatly, and where to position the flue to avoid affecting your neighbour. Our combi boiler installation service is the most popular choice for Tyneside flats, as the compact footprint suits the available space.'
      },
      {
        heading: 'Low Fell and Chowdene: Larger Homes, Bigger Heating Demands',
        content: 'Low Fell is one of Gateshead\'s most popular residential areas, and the housing reflects that. The streets running south from the Durham Road junction have large Edwardian and 1930s semis, many with three or four bedrooms, multiple reception rooms, and period features. These are bigger homes with bigger heating demands.\nA standard 25kW combi boiler often is not enough for a Low Fell semi with two bathrooms. When two showers are running at the same time, a combi cannot keep up. This is where system boilers come into their own. Paired with an unvented hot water cylinder in the airing cupboard or loft, a system boiler stores a ready supply of hot water that can feed multiple taps at full pressure simultaneously.\nChowdene, just south of Low Fell, has a similar mix of larger homes. We also see a good number of 1950s and 1960s detached houses here where the original heating system has been patched and extended over the decades. Sometimes the kindest thing you can do for these properties is strip out the old pipework entirely and start fresh. It sounds drastic, but a clean system with properly sized radiators and a modern boiler will outperform a patched old system every time.'
      },
      {
        heading: 'Whickham, Sunniside, and Modern Estates',
        content: 'Head west from Gateshead town centre and you climb into Whickham and Sunniside, where the housing is newer and the installations are simpler. These areas have substantial 1970s and 1980s developments alongside more recent new builds, and the heating layouts in these homes are designed for easy maintenance and replacement.\nA boiler swap in a modern Whickham home typically takes four to five hours. The existing boiler is usually accessible in a kitchen cupboard or utility room, the flue runs straight through the wall behind it, and the pipework connections are standardised. These are the jobs where we can often offer same-week installation, because there is nothing unusual to plan around.\nSunniside and the surrounding area, including Marley Hill and Byermoor, have a mix of property ages. The older stone cottages in the villages sometimes need more thought, but the majority of homes here are straightforward replacements. We cover the full NE16 postcode area with no extra travel charges. For homeowners in these areas considering a new boiler, our cost guide gives a clear breakdown of pricing by boiler type and property.'
      },
      {
        heading: 'Energy Efficiency and Grants in Gateshead',
        content: 'Gateshead has some of the highest fuel poverty rates in England, particularly in the wards around Teams, Dunston, Felling, and Wrekenton. Gateshead Council has historically been proactive about energy efficiency programmes, and the ECO4 scheme now provides another pathway for eligible households to get a free or subsidised boiler replacement.\nIf you receive benefits such as Universal Credit, Pension Credit, or Child Tax Credit, and your boiler is old or inefficient, you may qualify for a fully funded replacement. The scheme is specifically designed for homes that would benefit most from improved heating efficiency, which includes many of the older properties in central and east Gateshead.\nMany households in Gateshead qualify for a free boiler under the ECO4 scheme. We process grant applications as part of our service, handling the paperwork and liaising with the scheme administrators on your behalf. There is no cost for the application itself, and if you are not eligible, we will give you an honest quote for the work instead. Details of the qualifying criteria are on our free boiler grants page, and our grants guide walks you through the process step by step.\nBeyond grants, every boiler replacement improves your home\'s energy efficiency. Replacing a G-rated boiler from the 1990s with a modern A-rated condensing boiler can cut gas usage by 20-30%. In a draughty Bensham Tyneside flat where the heating runs hard through winter, that adds up to a meaningful reduction in your bills.'
      },
    ],
    areas: ['Low Fell', 'Bensham', 'Saltwell', 'Whickham', 'Sunniside', 'Chowdene', 'Teams', 'Dunston', 'Felling', 'Birtley', 'Wrekenton'],
    faqs: [
      {
        question: 'Can you install a combi boiler in a Tyneside flat?',
        answer: 'Yes, and we have done it hundreds of times. Combi boilers are the standard choice for Tyneside flats because of their compact size. The key is getting the flue route and condensate drainage right, particularly in upper flats. Our engineers know these properties inside out.',
      },
      {
        question: 'What size boiler does a Low Fell semi need?',
        answer: 'A three-bedroom Low Fell semi with one bathroom usually works well with a 28-30kW combi. If you have two bathrooms or an en-suite shower, we would typically recommend a system boiler with an unvented cylinder for proper multi-point hot water.',
      },
      {
        question: 'Is parking a problem for installations in Bensham?',
        answer: 'Bensham streets are tight, but we know the area well. Our engineers plan parking in advance and will let you know if they need a space saved near your property. Permit zones and narrow streets are not a problem for us.',
      },
      {
        question: 'Do you cover Birtley and Wrekenton?',
        answer: 'Yes. We cover all of Gateshead from the Quayside to Birtley, including Wrekenton, Felling, and all NE8 through NE11 postcodes. There is no additional charge for any Gateshead area.',
      },
      {
        question: 'How do I know if I qualify for a boiler grant in Gateshead?',
        answer: 'Eligibility for the ECO4 scheme depends on your benefits status and the current energy rating of your home. If you receive Universal Credit, Pension Credit, or similar qualifying benefits, there is a good chance you are eligible. We can check for you during your free survey.',
      },
      {
        question: 'Do you need to inform my neighbour if I get a new boiler in a Tyneside flat?',
        answer: 'You do not legally need your neighbour\'s permission, but we always recommend letting them know. The flue terminal will be visible on the external wall, and installation involves some noise during the day. We are respectful of shared spaces and keep disruption to a minimum.',
      },
    ],
  },
  {
    slug: 'south-shields',
    city: 'South Shields',
    metaTitle: 'Boiler Replacement South Shields | Gas Safe | Quotes',
    metaDescription: 'Boiler replacement in South Shields. Coastal properties, Westoe terraces, Cleadon homes. Marine-grade flue terminals. Free quotes.',
    heroHeadline: 'Boiler Replacement in South Shields',
    intro: 'South Shields sits where the Tyne meets the North Sea, and that geography shapes everything about heating in this town. The salt-laden wind that blows off the water does real damage to exposed metalwork over time, including the flue terminals that vent your boiler through the wall. It is a consideration that does not apply anywhere else in our coverage area to the same degree, and it is one reason you want a local engineer who understands coastal installations.\n\nFrom the grand Victorian villas above Marsden Bay to the tight terraces of Westoe, the family estates around Harton, and the larger detached homes of Cleadon, South Shields has a housing stock that keeps our engineers busy with varied and interesting work. We also cover Hebburn, Jarrow, and the Boldons, bringing our full range of boiler replacement services to the whole NE33 and NE34 postcode area.\n\nEvery South Shields installation includes a free home survey, a written quote with no pressure to commit, and professional fitting by Gas Safe registered engineers. For coastal properties, we specify marine-grade components as standard, because experience has taught us the cost of not doing so.',
    housingContext: 'South Shields divides roughly into three zones when it comes to housing. The coastal strip from Marsden to the mouth of the Tyne has a mix of Victorian and Edwardian villas, 1930s properties, and some post-war development. These homes face the harshest weather conditions in the area, and external building components deteriorate faster here than anywhere else we work. Salt air corrosion on flue terminals is a genuine and common problem.\n\nInland, the picture softens. Westoe has handsome rows of Victorian terraces, many with original features including, unfortunately, original back boilers that should have been replaced years ago. The streets around Arbeia Roman Fort and The Leas have a mix of periods and styles. Harton and Simonside are predominantly inter-war and post-war estates with conventional heating layouts. Cleadon sits slightly apart, a residential village with larger detached and semi-detached homes where system boilers are often the right choice. East Boldon and Boldon Colliery round out the area with a mix of older and newer housing.',
    sections: [
      {
        heading: 'Marine-Grade Installations for Coastal Properties',
        content: 'Standard galvanised steel flue terminals corrode in salt air. We have inspected properties along South Shields seafront where the flue terminal has rusted through in under three years, creating a safety hazard that requires an immediate callout. It is an entirely avoidable problem.\nFor any property in Marsden, along the seafront, or within roughly 1km of the coast, we fit marine-grade stainless steel flue terminals as standard. We also position the flue to reduce direct exposure to onshore winds where the building layout permits. In some cases this means moving the boiler position slightly from where the old one sat, but the long-term reliability is worth it.\nThe Marsden area has some beautiful Victorian and Edwardian villas, many with sea views and large rooms that need adequate heating output. These properties often benefit from system boilers rather than combis, particularly where there are multiple bathrooms across two or three floors. The salt air consideration applies to every external component, not just the flue. We use stainless steel fixings for any external pipework or brackets on coastal installations.\nIf you live near the seafront and your current boiler is approaching 10-15 years old, it is worth having the flue terminal inspected even if the boiler itself is running fine. We check external components as part of our free survey.'
      },
      {
        heading: 'Westoe Terraces and Back Boiler Replacements',
        content: 'Westoe is to South Shields what Ashbrooke is to Sunderland: a sought-after area of Victorian terraces with real character and real heating challenges. The streets between Westoe Road and Imeary Street have some of the finest period terraces in South Tyneside, and a surprising number still have back boilers tucked behind their living room fireplaces.\nReplacing a back boiler in a Westoe terrace involves removing the old unit from behind the fire surround, making good the fireplace area, and fitting a new wall-mounted boiler in the kitchen or an adjacent cupboard. The pipework routing through solid walls needs careful planning to keep it neat and unobtrusive, especially in properties where owners have invested in restoring period features.\nThese are full-day jobs, but the result speaks for itself: reliable hot water, noticeably lower gas bills, and a living room freed from the rumble of an old back boiler. Our combi boiler installation service handles the majority of Westoe terrace replacements, though larger properties with two bathrooms may benefit from our system boiler options. We discuss both during your free survey and recommend whichever genuinely suits the property.'
      },
      {
        heading: 'Cleadon and East Boldon: Larger Homes',
        content: 'Cleadon village and neighbouring East Boldon are residential areas with a notably different housing stock from the rest of South Shields. The properties here tend to be larger: detached and semi-detached homes from the 1930s onwards, many with four or five bedrooms, multiple bathrooms, and the kind of square footage that a small combi boiler simply cannot serve properly.\nFor these homes, we typically recommend system boilers in the 25-30kW range paired with unvented hot water cylinders. This combination delivers mains-pressure hot water to every tap in the house simultaneously. No more weak showers when someone turns on the kitchen tap. The cylinder is usually installed in an airing cupboard or loft space, connected to the boiler via a sealed system.\nCleadon homes often have existing system boiler setups that just need updating. If your current system boiler and cylinder are 15-plus years old, replacing both together is more cost-effective than replacing one and trying to make it work with ageing components. We supply and fit complete system boiler packages including the cylinder, controls, and a full system flush to remove the sludge that builds up in older pipework. Our cost guide has specific pricing for system boiler installations in larger homes.'
      },
      {
        heading: 'Hebburn, Jarrow, and the Boldon Estates',
        content: 'Heading west along the river from South Shields, Hebburn and Jarrow have large areas of inter-war and post-war housing where boiler replacements are straightforward but urgently needed. Many properties in these areas still have boilers from the late 1990s or early 2000s that are running well below modern efficiency standards.\nHebburn\'s housing is a mix of 1930s semis and post-war estates, with some newer development around the riverside. Jarrow follows a similar pattern, with older terraces near the town centre and council-built estates on the outskirts. Boldon Colliery sits between these towns and South Shields, with housing from the mining era alongside modern infill.\nThese areas have some of the highest eligibility rates in our coverage area for ECO4 boiler grants. South Tyneside Council has also historically supported energy efficiency improvements through local programmes. Many households in Hebburn, Jarrow, and the Boldons qualify for a free boiler under the ECO4 scheme. We encourage residents in these areas to check their eligibility before paying for a replacement. Our free boiler grants page has full details on qualifying criteria.\nFor those not eligible for grant funding, a combi boiler replacement in these areas is one of the more affordable installation types we offer. The properties are well laid out for access, the pipework is usually straightforward, and a standard installation can be completed in under a day. Check our areas we cover page for full postcode coverage details.'
      },
    ],
    areas: ['Marsden', 'Cleadon', 'Westoe', 'Harton', 'Boldon Colliery', 'Hebburn', 'Jarrow', 'Whitburn', 'East Boldon', 'Simonside'],
    faqs: [
      {
        question: 'Do coastal properties in South Shields need special flue terminals?',
        answer: 'Yes. Salt air corrodes standard galvanised steel flue terminals much faster than you would expect. For any property within about 1km of the seafront, we fit marine-grade stainless steel terminals as standard. The cost difference is small compared to the cost of a premature failure.',
      },
      {
        question: 'Do you cover Hebburn and Jarrow?',
        answer: 'Yes, we cover Hebburn, Jarrow, Boldon Colliery, East Boldon, and Whitburn as part of our South Shields service area. All NE33 and NE34 postcodes are included, and there is no additional travel charge.',
      },
      {
        question: 'What boiler is best for a large Cleadon house?',
        answer: 'Larger Cleadon homes with four or more bedrooms and multiple bathrooms usually suit a system boiler paired with an unvented hot water cylinder. This setup delivers strong, consistent hot water to all taps simultaneously, which a combi boiler cannot manage in a home of that size.',
      },
      {
        question: 'How much does a boiler replacement cost in South Shields?',
        answer: 'A straightforward combi swap in South Shields costs between £1,800 and £3,200 depending on the model. Coastal installations with marine-grade components are at the higher end. Back boiler replacements and system boiler installations cost more. Our cost guide has a full breakdown.',
      },
      {
        question: 'Are there boiler grants available in South Tyneside?',
        answer: 'Yes. The ECO4 scheme funds boiler replacements for households receiving qualifying benefits. South Tyneside has strong eligibility rates, particularly in Hebburn, Jarrow, and parts of central South Shields. We handle the full application process at no cost to you.',
      },
      {
        question: 'Can you replace a back boiler in a Westoe terrace?',
        answer: 'Absolutely. We replace back boilers regularly in Westoe and similar terraced areas. The job involves removing the old unit, making good the fireplace, and fitting a new wall-mounted boiler in the kitchen. It is a full-day job, but you will notice the difference in comfort and bills immediately.',
      },
    ],
  },
];

export function getLocationBySlug(slug: string): Location | undefined {
  return locations.find((l) => l.slug === slug);
}
