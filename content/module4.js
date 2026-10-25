/* Module IV — source: CB_MODULE IV.pdf (14 pages) */
(function () {
  'use strict';
  var H = CB.H, P = H.P, pdf = H.pdf, add = H.add, ex = H.ex, tip = H.tip, warn = H.warn, link = H.link,
    more = H.more, table = H.table, terms = H.terms, answer = H.answer, qs = H.qs, ul = H.ul, ol = H.ol, go = H.go;
  var M = 4;
  var topics = [];

  /* ---------------------------------------------------- */
  topics.push({
    id: 'self', title: 'What is self? Self-concept in consumer behaviour', pages: '2',
    lede: 'The “self” and why the beliefs we hold about ourselves decide what we buy.',
    html: `
<h2>Definitions from the slide</h2>
${pdf(M, 2, ul([
  'The term <strong>self</strong> refers to a person’s <strong>essential identity, inner consciousness, and unique set of non-physical characteristics</strong> (such as personality, values and abilities) that distinguish them from others.',
  '<strong>Self-concept</strong> in consumer behaviour is <strong>the collection of beliefs, attitudes and perceptions that a person holds about themselves</strong>, which directly shapes <strong>what they buy and the brands they support</strong>.'
]))}
${add(`<h3>Why self-concept matters to marketers</h3>
${ul([
  '<strong>Products are symbols.</strong> Consumers buy products not only for what they do, but for what they say about the buyer.',
  '<strong>Consumption expresses identity.</strong> Clothes, phones, bikes and even food choices tell others (and ourselves) who we are.',
  '<strong>Consumption maintains or enhances the self.</strong> People buy things that protect self-esteem or move them toward who they want to be.',
  '<strong>Brand choice follows match.</strong> People prefer brands whose image fits their self-image (self-image congruence, two topics ahead).'
])}
<p>Module II introduced self-concept as self-image, self-esteem and ideal self (CB_Module II.pdf, pp. 20–21). Module IV extends the idea to six types of self, congruence theory, and the cultural forces that shape the self.</p>`)}
${D.flow({ title: 'From self-concept to brand choice', src: '<span class="tag add">Additional Explanation</span>', items: [
  { t: 'Beliefs about myself', tone: 'teal', d: '“I am adventurous, practical and independent.”' },
  { t: 'Brand image perceived', tone: 'lilac', d: 'The consumer reads the brand’s personality from ads, users, price and design: “This bike brand is rugged and independent.”' },
  { t: 'Match check', tone: 'amber', d: 'Does the brand fit who I am, or who I want to be? A close fit creates attraction; a mismatch creates rejection.' },
  { t: 'Purchase & display', tone: 'accent', d: 'Buying and using the brand reinforces the self-concept and signals it to others.' }
] })}
${ex(`<p>A first-job graduate who sees herself as a serious professional may buy formal handbags, a laptop sleeve and a smartwatch — not because each is essential, but because together they express and reinforce the new “professional” self.</p>`)}
${link('Connects to', `<p>${go('m2', 'self-concept', 'Self-concept in Module II')}: self-image, self-esteem, ideal self.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'types-of-self', title: 'Types of self', pages: '3',
    lede: 'Six versions of the self that consumers try to express, protect or reach through products.',
    html: `
<h2>The six types</h2>
${pdf(M, 3, `<p>The slide <strong>Concept of Self-Types</strong> lists six types: <strong>Actual Self, Ideal Self, Social Self (Public Self), Ideal Social Self, Extended Self, Situational Self</strong>.</p>`)}
${D.grid({ title: 'Six types of self — select one', src: P(M, 3), min: '9.5rem', items: [
  { t: 'Actual self', s: 'who I think I am', tone: 'teal', d: 'How a person realistically sees themselves now. Consumers buy brands that feel “like me” for everyday comfort. <em>Example:</em> a practical person buys a reliable, no-frills hatchback.' },
  { t: 'Ideal self', s: 'who I would like to be', tone: 'lilac', d: 'The person one aspires to be. Aspirational brands target the gap between actual and ideal self. <em>Example:</em> buying premium fitness gear while aiming to become fit.' },
  { t: 'Social (public) self', s: 'how I think others see me', tone: 'accent', d: 'How a person believes others see them. Drives choices for visible, socially consumed products. <em>Example:</em> choosing a respectable brand of clothing for office.' },
  { t: 'Ideal social self', s: 'how I want others to see me', tone: 'rose', d: 'The image one would like others to hold. Drives status and conspicuous consumption. <em>Example:</em> carrying a luxury handbag or posting a holiday on Instagram.' },
  { t: 'Extended self', s: 'possessions as part of me', tone: 'amber', d: 'Possessions that become part of one’s identity — a car, home, heirloom jewellery, a collection. Losing them feels like losing part of oneself. Concept associated with Russell Belk (1988).' },
  { t: 'Situational self', s: 'who I am in this context', tone: 'teal', d: 'The self-image a person adopts in a particular situation — at a wedding, a job interview, a college fest, a business meeting. <em>Example:</em> buying ethnic wear for a family wedding though one usually dresses casually.' }
] })}
${add(table(['Type', 'Question it answers', 'Product category where it matters most', 'Marketing appeal'], [
  ['Actual self', 'Who am I?', 'Everyday necessities, routine brands', '“Made for people like you”'],
  ['Ideal self', 'Who do I want to be?', 'Education, fitness, grooming, premium goods', 'Aspiration, transformation, “become”'],
  ['Social self', 'How do others see me?', 'Clothing, phones, cars, gifts', 'Social acceptance, respectability'],
  ['Ideal social self', 'How do I want others to see me?', 'Luxury, fashion, travel, social media', 'Status, admiration, exclusivity'],
  ['Extended self', 'What do I own that is “me”?', 'Homes, vehicles, jewellery, collections', 'Pride of ownership, heritage, personalisation'],
  ['Situational self', 'Who am I here and now?', 'Occasion wear, event products', 'Occasion-based targeting']
]))}
${ex(`<ul><li><strong>Extended self:</strong> Indian families often treat gold jewellery passed down generations as part of family identity, not just as an asset.</li><li><strong>Situational self:</strong> wedding-wear brands such as Manyavar target the self men want to present at weddings and festivals.</li><li><strong>Ideal social self:</strong> premium phone buyers often care how the phone looks to others as much as how it performs.</li></ul>`)}
${warn('Common mistake', `<p>Students often merge social self and ideal social self. Social self = how I <em>believe</em> others see me now; ideal social self = how I <em>want</em> others to see me.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'self-image-congruence', title: 'Self-image congruence theory', pages: '4',
    lede: 'People buy identity, not just objects.',
    html: `
<h2>What the slide says</h2>
${pdf(M, 4, `${ul([
  'People are drawn to <strong>brands and products that match their self-concept</strong>.',
  'Self-image congruence <strong>connects psychology to the marketing mix</strong>.',
  'It gives a real reason beyond price or features: <strong>people buy identity, not just objects</strong>.'
])}
<p>The slide closes by noting that the theory explains <strong>why a campaign works, why a consumer rejects a product, or why a brand builds a very specific personality instead of appealing to everyone</strong>.</p>`)}
${D.flow({ title: 'Self-image congruence', src: P(M, 4), items: [
  { t: 'Consumer self-concept', tone: 'teal', d: 'Actual, ideal, social or ideal social self (previous topic).' },
  { t: 'Brand image / user image', tone: 'lilac', d: 'The personality the consumer attributes to the brand and its typical user.' },
  { t: 'High congruence', s: 'match', tone: 'accent', d: 'The brand fits the self. Result: attraction, preference, purchase, loyalty — “this is so me”.' },
  { t: 'Low congruence', s: 'mismatch', tone: 'rose', d: 'The brand clashes with the self. Result: rejection, even if the price and features are good — “that’s not me”.' }
] })}
${add(`<p>The theory is most associated with <strong>M. Joseph Sirgy</strong> (1982), who called it <em>self-congruity</em>. Researchers distinguish four forms, mirroring the types of self:</p>
${table(['Form of congruity', 'Match between brand and…', 'Motive served'], [
  ['Actual self-congruity', 'How I see myself', 'Self-consistency'],
  ['Ideal self-congruity', 'How I would like to see myself', 'Self-esteem'],
  ['Social self-congruity', 'How I think others see me', 'Social consistency'],
  ['Ideal social self-congruity', 'How I would like others to see me', 'Social approval']
])}
<h3>How it connects to the marketing mix</h3>
${table(['P', 'Congruence application'], [
  ['Product', 'Design and features that express the target’s identity (rugged, minimalist, traditional)'],
  ['Price', 'Premium price can be part of the identity signal; too low a price can clash with an aspirational self-image'],
  ['Place', 'Store environment and channel must fit the identity (exclusive showroom vs discount outlet)'],
  ['Promotion', 'Show users the target identifies with; brand personality must be specific']
])}
<h3>Why brands choose a specific personality</h3>
<p>Trying to appeal to everyone gives a brand a vague image that matches no one strongly. A sharp personality creates high congruence with a defined segment, even if it repels others — which is acceptable and often intended.</p>`)}
${ex(`<ul><li><strong>Tata Nano (launched 2009):</strong> widely positioned and discussed as the world’s cheapest car. Many analysts argue that the “cheapest” image clashed with buyers’ ideal social self — a car is a status purchase in India — contributing to weak sales despite its low price.</li><li><strong>Royal Enfield:</strong> sells an identity of independence, touring and heritage; riders often identify strongly with the brand community.</li><li><strong>Brand rejection:</strong> some consumers avoid brands seen as “too flashy” because they clash with a modest actual self.</li></ul>`)}
${tip('Exam tip', `<p>Quote “people buy identity, not just objects”, explain congruence and incongruence, and use the Tata Nano as a case of incongruence. This structure fits a 10-mark answer well.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'psychographics', title: 'Psychographics and AIO', pages: '5',
    lede: 'The “why” behind choices: measuring lifestyles through attitudes, interests and opinions.',
    html: `
<h2>What the slide says</h2>
${pdf(M, 5, `<p>Psychographics is <strong>the “why” behind human choices and consumer behaviour</strong>. It is measured using <strong>AIO</strong>: <strong>Attitude, Interest, Opinions</strong>.</p>`)}
${D.grid({ title: 'AIO dimensions', src: P(M, 5), min: '10rem', items: [
  { t: 'A — Attitude (slide) / Activities', tone: 'teal', d: 'The slide lists <strong>Attitude</strong>: how a consumer evaluates things. Most textbooks use <strong>Activities</strong> here: how people spend their time — work, hobbies, sports, shopping, social events, vacations.' },
  { t: 'I — Interests', tone: 'lilac', d: 'What people find important or pay attention to — family, home, fashion, food, media, technology, community.' },
  { t: 'O — Opinions', tone: 'amber', d: 'What people think about themselves and the world — social issues, politics, business, education, products, the future, culture.' }
] })}
${warn('Know both versions', `<p>Your slide expands AIO as <strong>Attitude, Interest, Opinions</strong>. The standard version in most textbooks, from William Wells and Douglas Tigert (1971), is <strong>Activities, Interests, Opinions</strong>. Write the slide’s version and add the textbook version in brackets so the examiner sees you know both.</p>`)}
${add(`<h3>Psychographics vs demographics</h3>
${table(['Basis', 'Demographics', 'Psychographics'], [
  ['Describes', 'Who the consumer is', 'Why the consumer buys'],
  ['Variables', 'Age, gender, income, education, occupation', 'Lifestyle, values, personality, AIO'],
  ['Data', 'Objective, easy to collect', 'Subjective, collected with attitude statements and rating scales'],
  ['Example', '25–34, urban, ₹10 lakh income', 'Health-conscious, values experiences over possessions, follows fitness creators']
])}
<p>Two people with the same demographics can have opposite lifestyles; psychographics explains the difference.</p>
<h3>How AIO data is collected</h3>
<p>Through questionnaires with many agree–disagree statements (e.g. “I like to try new restaurants”, “I prefer to stay home on weekends”). Responses are grouped statistically to create lifestyle segments.</p>
<h3>VALS — a well-known psychographic system</h3>
<p>Developed at SRI International (Arnold Mitchell, late 1970s; revised later), VALS groups consumers by primary motivation (ideals, achievement, self-expression) and resources into eight types: Innovators, Thinkers, Believers, Achievers, Strivers, Experiencers, Makers and Survivors.</p>
<h3>Uses</h3>
${ul(['Lifestyle segmentation and targeting', 'Message tone, imagery and media selection', 'Product development around lifestyle needs', 'Building consumer profiles and personas (Module I)'])}`)}
${ex(`<p>Two 30-year-old software engineers in Bengaluru earn the same salary. One spends weekends trekking and buys outdoor gear; the other spends them at home gaming and orders food in. Same demographics, different psychographics — and very different targets for Decathlon versus a gaming-console brand.</p>`)}
${link('Connects to', `<p>Psychographic is one of the five components of a ${go('m1', 'consumer-profile', 'consumer profile (Module I)')}; lifestyle is a personal factor in ${go('m1', 'psychological-personal-factors', 'Module I')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'culture', title: 'Culture and the socio-cultural environment', pages: '6–7',
    lede: 'A shared system of perceptions and values — and the ten elements of the environment marketers must read.',
    html: `
<h2>Definition of culture</h2>
${pdf(M, 6, `<p class="quote-def">“culture is a <strong>shared</strong> system of perceptions and values, or a <strong>group of people who share</strong> a certain system of perceptions and values”</p><p>The slide highlights the words <em>shared</em> and <em>group of people who share</em>.</p>`)}
${add(`<p>The emphasis on <em>sharing</em> is the key: culture is not individual taste but a common set of meanings that a group learns, practises and passes on. Characteristics often listed:</p>
${ul(['<strong>Learned</strong> through socialisation, not inherited biologically', '<strong>Shared</strong> by members of a society', '<strong>Transmitted</strong> across generations through family, religion, schools and media', '<strong>Satisfies needs</strong> by providing rules for behaviour', '<strong>Dynamic</strong> — evolves, but slowly', '<strong>Largely invisible</strong> to its own members (the iceberg idea, next topic)'])}`)}

<h2>Socio-cultural environment</h2>
${pdf(M, 7, `<p>The slide lists ten elements of the <strong>socio-cultural environment</strong>: <strong>Language, Colours, Customs and Taboos, Values, Aesthetics, Time, Business Norms, Religious Beliefs, Level of Education, Customer Preferences</strong>.</p>`)}
${D.grid({ title: 'Ten elements of the socio-cultural environment', src: P(M, 7), min: '8.5rem', items: [
  { t: 'Language', tone: 'rose', d: 'Words, idioms, scripts and tone. Brand names and slogans may translate badly; regional-language ads connect better. Indian brands increasingly run Hindi, Tamil, Telugu, Bengali and other regional campaigns.' },
  { t: 'Colours', tone: 'amber', d: 'Colours carry cultural meaning: red is auspicious and bridal in India; white can signal mourning; saffron and green carry religious and national meanings.' },
  { t: 'Customs and taboos', tone: 'lilac', d: 'Accepted practices and forbidden behaviours: avoiding beef in many Indian menus, using the right hand to give and receive, removing footwear in homes and temples.' },
  { t: 'Values', tone: 'teal', d: 'Deep beliefs about what is good or important: family orientation, respect for elders, thrift, education.' },
  { t: 'Aesthetics', tone: 'accent', d: 'Ideas of beauty and good taste in design, music, colour and form — ornate vs minimalist packaging, preferred jewellery styles.' },
  { t: 'Time', tone: 'rose', d: 'Attitudes to punctuality, planning and pace. Some cultures treat time as fixed and linear; others as flexible. Also auspicious timings (muhurat) for purchases.' },
  { t: 'Business norms', tone: 'amber', d: 'Expected ways of doing business — relationship-building before deals, negotiation styles, gift-giving, formality of address.' },
  { t: 'Religious beliefs', tone: 'lilac', d: 'Shape food, dress, festivals and purchase timing: vegetarian and fasting menus during Navratri, halal products, Diwali and Eid shopping peaks.' },
  { t: 'Level of education', tone: 'teal', d: 'Affects how information is processed: product labels, instructions and ads must suit literacy levels — icons and visuals help where literacy is lower.' },
  { t: 'Customer preferences', tone: 'accent', d: 'Culture-shaped tastes — spice levels, pack sizes, flavours, preferred shopping formats (kirana vs supermarket).' }
] })}
${ex(`<ul><li><strong>Religious beliefs and customs:</strong> fast-food chains in India introduce vegetarian and Navratri-special menus and keep vegetarian and non-vegetarian kitchens separate.</li><li><strong>Customer preferences:</strong> global snack brands launch India-specific flavours such as masala and chaat variants.</li><li><strong>Time:</strong> jewellery and automobile sales spike on auspicious dates such as Dhanteras and Akshaya Tritiya.</li><li><strong>Values:</strong> the 2020 Tanishq “Ekatvam” advertisement on an inter-faith family drew strong online reaction and was withdrawn, showing how sensitive values can be in communication.</li></ul>`)}
${link('Connects to', `<p>Cultural factors (culture, sub-culture, social class) in ${go('m1', 'cultural-social-factors', 'Module I')}; colour psychology in ${go('m3', 'branding', 'Module III')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'cultural-iceberg', title: 'The iceberg concept of culture', pages: '8–9',
    lede: 'What you can see of a culture is a small part; the values driving it lie beneath the surface.',
    html: `
<h2>The iceberg concept (AFS model)</h2>
${pdf(M, 8, `<p>The slide shows <strong>The iceberg concept of culture</strong> (credited on the slide to AFS Intercultural Programs Inc., 2010). It divides culture into two parts:</p>
${table(['Part', 'Elements shown on the slide'], [
  ['Primarily in awareness (above the waterline)', 'Fine arts, literature, drama, classical music, popular music, folk-dancing, games, cooking, dress'],
  ['Primarily out of awareness (below the waterline)', 'Notions of modesty; conception of beauty; ideals governing child raising; rules of descent; cosmology; relationship to animals; patterns of superior/subordinate relations; definition of sin; courtship practices; conception of justice; incentives to work; notions of leadership; tempo of work; patterns of group decision-making; conception of cleanliness; attitudes to the dependent; theory of disease; approaches to problem solving; conception of status mobility; eye behaviour; roles in relation to status by age, sex, class, occupation, kinship, etc.; definition of insanity; nature of friendship; conception of “self”; patterns of visual perception; body language; facial expressions; notions about logic and validity; patterns of handling emotions; conversational patterns in various social contexts; conception of past and future; ordering of time; preference for competition or co-operation; social interaction rate; notions of adolescence; arrangement of physical space; etc.']
])}`)}

${D.iceberg({ title: 'Iceberg concept of culture (after the AFS diagram)', src: P(M, 8), tipLabel: 'Primarily in awareness', deepLabel: 'Primarily out of awareness', waterLabel: 'Awareness line',
  tip: [{ t: 'Visible culture', s: 'arts, food, dress', tone: 'teal', w: '44%', d: 'The small visible tip: fine arts, literature, drama, classical and popular music, folk-dancing, games, cooking and dress. Easy to notice, easy to copy — and the part tourists and marketers see first.' }],
  tipChips: ['Fine arts', 'Literature', 'Drama', 'Music', 'Folk-dancing', 'Games', 'Cooking', 'Dress'],
  deep: [{ t: 'Hidden culture', s: 'norms, beliefs, values', tone: 'lilac', w: '78%', d: 'The much larger hidden part: ideas of modesty, beauty, cleanliness, leadership, justice, time, friendship, the self, emotions, family roles and group decision-making. These drive behaviour without people consciously noticing them.' }],
  deepChips: ['Modesty', 'Beauty', 'Child raising', 'Leadership', 'Cleanliness', 'Concept of self', 'Ordering of time', 'Body language', 'Group decisions', 'Friendship', 'Justice', 'Competition vs co-operation', 'Status by age, sex, class', '…and more']
})}

<h2>The cultural iceberg: three layers</h2>
${pdf(M, 9, `<p>The second iceberg slide divides culture into three layers and shows forces that shape it:</p>
${table(['Layer', 'Visibility', 'Description on the slide'], [
  ['Behaviors &amp; Practices', 'Observable', 'Characteristics which are apparent to the casual observer'],
  ['Interpretations', 'Not observable', 'How the core values are reflected in specific situations in daily life such as working or socializing'],
  ['Core Values', 'Not observable', 'Learned ideas of what is considered good or bad, desirable or undesirable, acceptable or unacceptable']
])}
<p>Arrows around the iceberg show the forces that shape it: <strong>religion, family, history, the media, educational systems and economics</strong>.</p>`)}
${D.iceberg({ title: 'The cultural iceberg — select a layer', src: P(M, 9), tipLabel: 'Observable', deepLabel: 'Not observable', waterLabel: 'Observable / not observable',
  tip: [{ t: 'Behaviours & practices', tone: 'teal', w: '48%', d: 'What a casual observer can see: how people greet, dress, eat, shop and celebrate. <em>Consumer example:</em> touching elders’ feet, buying sweets for Diwali, eating with hands.' }],
  deep: [
    { t: 'Interpretations', tone: 'accent', w: '70%', d: 'How core values show up in specific everyday situations such as work or socialising. <em>Consumer example:</em> respect for elders (value) becomes letting the eldest family member have the final word on a big purchase (interpretation).' },
    { t: 'Core values', tone: 'lilac', w: '88%', d: 'Learned ideas of what is good or bad, desirable or undesirable, acceptable or unacceptable. <em>Consumer example:</em> the value placed on family and thrift drives preference for durable, shareable, value-for-money products.' }
  ],
  deepChips: ['Shaped by: religion', 'family', 'history', 'the media', 'educational systems', 'economics']
})}

${add(`<p>The iceberg metaphor is commonly traced to the anthropologist <strong>Edward T. Hall</strong> (<em>Beyond Culture</em>, 1976). The point for marketers is that <strong>surface adaptation is not enough</strong>. Changing the language and the models in an ad adapts the tip; the campaign can still fail if it clashes with values below the waterline.</p>
<h3>Implications for marketers</h3>
${ul(['Research the hidden layers: values, decision-making patterns, ideas of modesty and family roles.', 'Expect that what consumers <em>say</em> may differ from the values driving what they <em>do</em> — use observation and ethnography.', 'Test campaigns with local audiences before launch.', 'Recognise that the forces shaping culture (media, education, economics) also change it over time.'])}`)}
${ex(`<p>An ad that shows a daughter-in-law and mother-in-law as friends adapts the surface (Indian setting, clothes, language), but it succeeds or fails depending on deep values about family roles and hierarchy. Indian brands that have handled such themes well usually show change happening <em>within</em> respected family values rather than against them.</p>`)}
${tip('Diagram to practise', `<p>Draw an iceberg with a waterline. Above: behaviours and practices (dress, food, music). Below: interpretations, then core values at the bottom. Add arrows labelled religion, family, history, media, education, economics.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'customs', title: 'Types of customs: imperatives, electives, exclusives', pages: '10–11',
    lede: 'Which local customs a foreign business must follow, may follow, or must stay out of.',
    html: `
<h2>Three types of customs</h2>
${pdf(M, 10, `<p><strong>Cultural Imperatives</strong></p>${ul(['Business customs and expectations that <strong>MUST be met</strong> in order to conduct successful business transactions in other countries/cultures.'])}
<p><strong>Cultural Electives</strong></p>${ul(['Business customs and expectations that are <strong>OPTIONAL</strong>, in which business executives may participate/conform in, but is not required.', 'May help to <strong>establish rapport and respect</strong> when participation occurs.', '<strong>Majority of customs</strong> fall into this category.'])}`)}
${pdf(M, 11, `<p><strong>Cultural Exclusives</strong></p>${ul(['Customs that are <strong>reserved exclusively for the locals</strong>, where foreign participation is excluded.', 'E.g. foreign business people <strong>criticising local politicians or business practices</strong>, where it is acceptable for the local to do so.'])}`)}

${D.columns({ title: 'Must, may, must not', src: P(M, '10–11'), cols: [
  { h: 'Imperatives — must', items: [{ t: 'Cultural imperatives', tone: 'rose', d: 'Non-negotiable. Ignoring them can end the business relationship. <em>Indian examples:</em> respecting religious dietary rules in hospitality and food products; building personal trust before closing deals; respecting elders and seniority in meetings.' }] },
  { h: 'Electives — may', items: [{ t: 'Cultural electives', tone: 'teal', d: 'Optional. Taking part earns goodwill, but staying out causes no harm. <em>Indian examples:</em> greeting with a namaste, trying local food with hands, wearing Indian attire at a client’s festival celebration, saying a few words in the local language.' }] },
  { h: 'Exclusives — must not', items: [{ t: 'Cultural exclusives', tone: 'lilac', d: 'Reserved for locals. A foreigner joining in is seen as offensive. <em>Examples:</em> a foreign executive criticising Indian politicians, religion or caste practices — even when Indians themselves openly debate these.' }] }
] })}
${add(`<p>This classification is widely used in international marketing, notably in Philip Cateora’s <em>International Marketing</em> textbook.</p>
${table(['Basis', 'Imperatives', 'Electives', 'Exclusives'], [
  ['Participation by outsiders', 'Required', 'Optional', 'Not allowed'],
  ['Effect of following', 'Business can proceed', 'Builds rapport and respect', 'Causes offence'],
  ['Effect of ignoring', 'Business may fail', 'Little or no harm', 'Correct behaviour'],
  ['Share of customs', 'Few', 'Majority (per the slide)', 'Few'],
  ['Risk for marketer', 'High', 'Low', 'High if crossed']
])}
<h3>Why it matters for consumer marketing</h3>
${ul(['Product and menu adaptation must respect imperatives (no beef in many Indian menus).', 'Communication can use electives to show warmth (festival greetings in local languages).', 'Brands must avoid exclusives — foreign brands commenting on local politics or religion often face backlash.'])}`)}
${ex(`<p>When foreign brands enter India, conforming to vegetarian and religious food norms is treated as an imperative; joining in Diwali or Holi celebrations through campaigns works as an elective that builds goodwill; publicly commenting on Indian domestic politics is typically avoided as an exclusive.</p>`)}
${warn('Common mistake', `<p>The slide says the <strong>majority</strong> of customs are <strong>electives</strong>, not imperatives. Students often reverse this.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'semiotics', title: 'Semiotics in marketing', pages: '12–13',
    lede: 'Every logo, colour, jingle and pack carries a message — semiotics is how consumers decode it.',
    html: `
<h2>What the slide says</h2>
${pdf(M, 12, ul(['<strong>Signs, symbols and meanings</strong> shape the way we shop, choose and consume.', 'Every <strong>product, logo, jingle, or even the packaging colour</strong> carries a message.', 'Semiotics deals with the <strong>abstract aspects of marketing</strong>.']))}
${pdf(M, 13, `<p>Semiotics is applied in four areas: <strong>Branding, Advertising, Product Design, Packaging</strong>.</p>`)}

${add(`<h3>Basic ideas of semiotics</h3>
<p>Semiotics is the study of signs and how meaning is created. Two founding thinkers:</p>
${ul(['<strong>Ferdinand de Saussure:</strong> a sign has two parts — the <strong>signifier</strong> (the form: a word, image, colour) and the <strong>signified</strong> (the concept it stands for).', '<strong>Charles Sanders Peirce:</strong> a sign links an <strong>object</strong>, a <strong>sign</strong> and an <strong>interpretant</strong> (the meaning in the receiver’s mind), and signs can be <strong>icons</strong> (resemble the object), <strong>indexes</strong> (are physically linked to it, like smoke to fire) or <strong>symbols</strong> (linked only by convention, like a logo).'])}`)}
${D.flow({ title: 'How a sign creates meaning (Peirce’s triad)', src: '<span class="tag add">Additional Explanation</span>', items: [
  { t: 'Sign', s: 'what is shown', tone: 'amber', d: 'The visible or audible form: a green leaf on a shampoo bottle.' },
  { t: 'Object', s: 'what it refers to', tone: 'accent', d: 'Nature, plants, herbal ingredients.' },
  { t: 'Interpretant', s: 'meaning in the mind', tone: 'teal', d: '“This product is natural, gentle and safe.” The meaning depends on the consumer’s culture and experience.' }
] })}

${D.grid({ title: 'Semiotics across four marketing areas', src: P(M, 13), min: '9.5rem', items: [
  { t: 'Branding', tone: 'teal', d: 'Logos, names, mascots and colours as signs. A tick-shaped swoosh signifies movement and speed; a mascot signifies personality. Meanings are built through consistent use.' },
  { t: 'Advertising', tone: 'rose', d: 'Ads use cultural codes — a diya and rangoli signal Diwali and family warmth; a white coat signals medical authority; slow-motion water splash signals freshness.' },
  { t: 'Product design', tone: 'lilac', d: 'Shape, material, weight and finish communicate quality: heavy metal suggests premium; minimalist design suggests sophistication; rugged textures suggest durability.' },
  { t: 'Packaging', tone: 'amber', d: 'Colour, imagery, typography and material signal category and price tier: green and leaves = natural; black and gold = luxury; transparent windows = honesty about contents.' }
] })}
${add(table(['Sign', 'Typical meaning in India', 'Where it is used'], [
  ['Turmeric, sandalwood, neem leaf imagery', 'Purity, Ayurveda, tradition', 'Skincare and soap packaging'],
  ['Diya, rangoli, marigold', 'Festivity, auspiciousness, family', 'Festive ads and gift packs'],
  ['Saffron and green with a leaf', 'Natural, Indian, herbal', 'Ayurvedic and herbal brands'],
  ['Doctor in white coat or dentist’s chair', 'Scientific authority, safety', 'Toothpaste and health ads'],
  ['Gold foil, deep colours, heavy boxes', 'Premium, gift-worthy', 'Sweets, dry fruits, chocolates during festivals'],
  ['Cricket imagery', 'Passion, national pride, togetherness', 'Sponsorships and ad campaigns']
]))}
${ex(`<p><strong>Amul’s topical ads</strong> rely on semiotic shorthand: the polka-dotted Amul girl, the wordplay and a single visual reference to a current event let readers decode the joke in seconds. <strong>Ayurvedic brands</strong> use leaves, earthy colours and Sanskrit-styled fonts to signal tradition and naturalness before the consumer reads a word.</p>`)}
${warn('Signs depend on culture', `<p>The same sign can mean different things in different cultures (the iceberg again). An owl, for instance, is associated with wisdom in many Western contexts but with foolishness in common Hindi usage. Always test symbols with the target culture.</p>`)}
${link('Connects to', `<p>Colour psychology and shape symbolism in ${go('m3', 'branding', 'Module III')}; interpretation stage of perception in ${go('m2', 'perception', 'Module II')}; anthropology’s study of symbols in ${go('m1', 'economics-anthropology', 'Module I')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'exam', kind: 'exam', title: 'Exam preparation: Module IV',
    lede: 'Answer frameworks, important questions and common mistakes for Module IV.',
    html: `
<h2>5-mark answer frameworks</h2>
${answer(5, 'Explain the types of self.', `${ol(['Define self and self-concept (p. 2).', 'Six types (p. 3), one line + example each.', 'One line on marketing use.'])}`)}
${answer(5, 'What is psychographics? Explain AIO.', `${ol(['Definition: the “why” behind choices (p. 5).', 'AIO as on the slide (Attitude, Interest, Opinions) + textbook version (Activities).', 'Contrast with demographics.', 'Example.'])}`)}
${answer(5, 'Distinguish between cultural imperatives, electives and exclusives.', `${ol(['Definitions (pp. 10–11).', 'Comparison table.', 'Indian example for each.'])}`)}
${answer(5, 'Write a note on semiotics in marketing.', `${ol(['Definition (p. 12).', 'Signifier–signified or Peirce’s triad.', 'Four areas (p. 13) with an example each.'])}`)}

<h2>10-mark answer frameworks</h2>
${answer(10, 'Explain self-image congruence theory with examples.', `${ol(['Self-concept definition.', 'Theory points from p. 4; quote “people buy identity, not just objects”.', 'Sirgy’s four forms of congruity.', 'Connection to the marketing mix (4Ps table).', 'Examples: congruence (Royal Enfield) and incongruence (Tata Nano).', 'Why brands build specific personalities.'])}`)}
${answer(10, 'Explain the socio-cultural environment and its influence on consumer behaviour.', `${ol(['Definition of culture (p. 6).', 'Ten elements (p. 7) with Indian examples.', 'Link to cultural imperatives.', 'Conclusion on adaptation.'])}`)}
${answer(10, 'Explain the iceberg concept of culture and its relevance to marketers.', `${ol(['Meaning of the metaphor.', 'AFS iceberg: in awareness vs out of awareness (p. 8).', 'Three-layer iceberg: behaviours, interpretations, core values; shaping forces (p. 9).', 'Implications for marketers.', 'Diagram.'])}`)}

<h2>15-mark answer frameworks</h2>
${answer(15, 'Discuss the role of self-concept and psychographics in consumer behaviour.', `${ol(['Self and self-concept (p. 2).', 'Six types of self with appeals (p. 3).', 'Self-image congruence theory (p. 4).', 'Psychographics and AIO (p. 5), VALS.', 'How brands combine them: personas and positioning.', 'Indian examples and conclusion.'])}`)}
${answer(15, 'Culture is the most fundamental influence on consumer behaviour. Discuss.', `${ol(['Definition and characteristics of culture (p. 6).', 'Socio-cultural environment — ten elements (p. 7).', 'Iceberg concept — both models (pp. 8–9) with diagram.', 'Types of customs (pp. 10–11).', 'Semiotics as the language of culture in marketing (pp. 12–13).', 'Indian cases: menu adaptation, festive marketing, Tanishq 2020.', 'Conclusion.'])}`)}

<h2>Important questions for revision</h2>
${qs([
  ['Define self-concept. How does it influence consumer behaviour?', '5'],
  ['Explain the six types of self with examples.', '10'],
  ['Explain self-image congruence theory.', '10'],
  ['What is psychographics? Explain AIO.', '5'],
  ['Distinguish psychographics from demographics.', '5'],
  ['Define culture. Explain the socio-cultural environment.', '10'],
  ['Explain the iceberg concept of culture.', '10'],
  ['Explain cultural imperatives, electives and exclusives.', '5'],
  ['What is semiotics? Explain its use in branding, advertising, product design and packaging.', '10'],
  ['Explain the extended self with examples.', '5']
])}

<h2>Common mistakes to avoid</h2>
${warn('Watch out for these', ul([
  'Confusing social self with ideal social self.',
  'Expanding AIO only as Activities without mentioning the slide’s “Attitude”.',
  'Saying most customs are imperatives (the slide says most are electives).',
  'Drawing the iceberg with values above the waterline.',
  'Defining semiotics only as “logos” — it covers all signs, including colours, sounds and design.'
]))}

<h2>Interconnections to mention</h2>
${ul(['Self-concept (Modules II and IV) ↔ brand personality (Module II) ↔ materialism (Module V).', 'Psychographics (Module IV) ↔ consumer profile and lifestyle (Module I).', 'Culture (Module IV) ↔ cultural factors (Module I) ↔ anthropology (Module I).', 'Semiotics (Module IV) ↔ colour psychology and symbolism (Module III).'])}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'revision', kind: 'rev', title: 'Revision notes: Module IV',
    lede: 'Summary, key terms and quick-recall points.',
    html: `
<h2>Module summary</h2>
<p>The <strong>self</strong> is a person’s essential identity and unique set of non-physical characteristics; <strong>self-concept</strong> is the collection of beliefs, attitudes and perceptions people hold about themselves, which shapes what they buy (p. 2). There are six types of self: actual, ideal, social (public), ideal social, extended and situational (p. 3). <strong>Self-image congruence theory</strong> says people are drawn to brands that match their self-concept — they buy identity, not just objects (p. 4). <strong>Psychographics</strong>, measured through AIO, is the “why” behind choices (p. 5).</p>
<p><strong>Culture</strong> is a shared system of perceptions and values (p. 6). The socio-cultural environment includes language, colours, customs and taboos, values, aesthetics, time, business norms, religious beliefs, level of education and customer preferences (p. 7). The <strong>iceberg</strong> models show that visible culture is small; most of it — interpretations and core values — lies out of awareness, shaped by religion, family, history, media, education and economics (pp. 8–9). Customs are imperatives (must), electives (optional; the majority) or exclusives (locals only) (pp. 10–11). <strong>Semiotics</strong> studies the signs and symbols in branding, advertising, product design and packaging (pp. 12–13).</p>

<h2>Key terminology</h2>
${terms([
  ['Self', 'Essential identity and non-physical characteristics that distinguish a person.'],
  ['Self-concept', 'Beliefs, attitudes and perceptions a person holds about themselves.'],
  ['Extended self', 'Possessions that become part of identity (Belk).'],
  ['Situational self', 'Self-image adopted in a particular context.'],
  ['Self-image congruence', 'Match between self-concept and brand image.'],
  ['Psychographics', 'Study of lifestyle, values and AIO — the “why”.'],
  ['AIO', 'Attitude (or Activities), Interests, Opinions.'],
  ['Culture', 'A shared system of perceptions and values.'],
  ['Cultural iceberg', 'Visible behaviours above; interpretations and core values below.'],
  ['Cultural imperatives', 'Customs that must be followed.'],
  ['Cultural electives', 'Optional customs; the majority.'],
  ['Cultural exclusives', 'Customs reserved for locals.'],
  ['Semiotics', 'Study of signs, symbols and meanings.'],
  ['Signifier / signified', 'The form of a sign / the concept it stands for.']
])}

<h2>Quick-recall points</h2>
${ul([
  '<strong>Self types (6):</strong> Actual, Ideal, Social (Public), Ideal Social, Extended, Situational.',
  '<strong>Congruence:</strong> people buy identity, not just objects.',
  '<strong>AIO:</strong> Attitude, Interest, Opinions (textbook: Activities).',
  '<strong>Socio-cultural (10):</strong> Language, Colours, Customs &amp; Taboos, Values, Aesthetics, Time, Business Norms, Religious Beliefs, Education, Customer Preferences.',
  '<strong>Iceberg layers (3):</strong> Behaviours &amp; Practices (observable) → Interpretations → Core Values.',
  '<strong>Shaping forces (6):</strong> religion, family, history, media, educational systems, economics.',
  '<strong>Customs (3):</strong> Imperatives (must), Electives (may; majority), Exclusives (locals only).',
  '<strong>Semiotics (4 areas):</strong> Branding, Advertising, Product Design, Packaging.'
])}
${tip('Mnemonic for the six selves', `<p><strong>“All Indians Sing In Every Situation”</strong> — Actual, Ideal, Social, Ideal social, Extended, Situational.</p>`)}
`});

  CB.addModule({
    id: 'm4', n: 4, num: 'IV', file: 'CB_MODULE IV.pdf', pages: 14,
    title: 'Self-Concept',
    navTitle: 'Self-Concept, Culture & Semiotics',
    blurb: 'Types of self, self-image congruence, psychographics and AIO, culture, the cultural iceberg, types of customs and semiotics.',
    lede: 'How people’s sense of who they are, and the culture they belong to, shape the brands they choose and the meanings they read into products.',
    objectives: [
      'Define self and self-concept and explain their role in buying.',
      'Describe the six types of self with examples.',
      'Explain self-image congruence theory and its link to the marketing mix.',
      'Explain psychographics and AIO, and contrast them with demographics.',
      'Define culture and explain the ten elements of the socio-cultural environment.',
      'Explain both iceberg models of culture and their implications.',
      'Distinguish cultural imperatives, electives and exclusives.',
      'Explain semiotics and its use in branding, advertising, product design and packaging.'
    ],
    topics: topics
  });

  CB.addTerms('m4', [
    ['Self', 'self', 'A person’s essential identity, inner consciousness and unique non-physical characteristics.'],
    ['Self-concept (consumer behaviour)', 'self', 'Beliefs, attitudes and perceptions about oneself that shape buying.'],
    ['Actual self', 'types-of-self', 'How a person realistically sees themselves.'],
    ['Ideal self', 'types-of-self', 'How a person would like to see themselves.'],
    ['Social (public) self', 'types-of-self', 'How a person believes others see them.'],
    ['Ideal social self', 'types-of-self', 'How a person would like others to see them.'],
    ['Extended self', 'types-of-self', 'Possessions that become part of one’s identity (Belk 1988).'],
    ['Situational self', 'types-of-self', 'Self-image adopted in a specific situation.'],
    ['Self-image congruence theory', 'self-image-congruence', 'People prefer brands that match their self-concept; people buy identity (Sirgy).'],
    ['Self-congruity', 'self-image-congruence', 'Sirgy’s term; actual, ideal, social and ideal social forms.'],
    ['Psychographics', 'psychographics', 'The “why” behind choices, measured through AIO.'],
    ['AIO', 'psychographics', 'Attitude (slide) / Activities (textbook), Interests, Opinions.'],
    ['VALS', 'psychographics', 'SRI’s psychographic segmentation into eight consumer types.'],
    ['Culture', 'culture', 'A shared system of perceptions and values, or a group sharing them.'],
    ['Socio-cultural environment', 'culture', 'Language, colours, customs and taboos, values, aesthetics, time, business norms, religion, education, preferences.'],
    ['Iceberg concept of culture', 'cultural-iceberg', 'Visible culture above the waterline; most culture hidden below (AFS; Hall).'],
    ['Core values', 'cultural-iceberg', 'Learned ideas of good/bad, desirable/undesirable, acceptable/unacceptable.'],
    ['Cultural imperatives', 'customs', 'Customs that must be met to do business successfully.'],
    ['Cultural electives', 'customs', 'Optional customs that build rapport; the majority of customs.'],
    ['Cultural exclusives', 'customs', 'Customs reserved for locals; foreign participation excluded.'],
    ['Semiotics', 'semiotics', 'Study of signs, symbols and meanings in consumption.'],
    ['Signifier and signified', 'semiotics', 'Saussure: the form of a sign and the concept it represents.'],
    ['Icon, index, symbol', 'semiotics', 'Peirce’s three kinds of sign.']
  ]);
})();
