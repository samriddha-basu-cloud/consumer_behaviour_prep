/* Module I — source: CB_MODULE I.pdf (29 pages) */
(function () {
  'use strict';
  var H = CB.H, P = H.P, pdf = H.pdf, add = H.add, ex = H.ex, tip = H.tip, warn = H.warn, link = H.link,
    more = H.more, table = H.table, terms = H.terms, answer = H.answer, qs = H.qs, ul = H.ul, ol = H.ol, go = H.go;
  var M = 1;

  var topics = [];

  /* ---------------------------------------------------- */
  topics.push({
    id: 'introduction', title: 'What is consumer behaviour?', pages: '2–4',
    lede: 'The definition, the questions the subject answers, and why it is described as a continuous process rather than a one-time study.',
    html: `
<h2>Meaning of consumer behaviour</h2>
${pdf(M, 2, `<p>Consumer behaviour examines the <strong>thoughts, emotions and actions</strong> that influence how people <strong>choose, buy, use and dispose of</strong> products and services.</p>
<p>The slide frames the subject around three guiding questions:</p>
${ul(['Why do customers prefer one brand over another?', 'How do cultural and social factors shape decisions?', 'What triggers repeat purchases and brand loyalty?'])}
<p>The payoff for a business is shown as a chain: <strong>Predict trends &gt;&gt; Anticipate needs &gt;&gt; Create audience-centric campaigns</strong>.</p>`)}

${D.flow({ title: 'Why firms study consumer behaviour', src: P(M, 2), items: [
  { t: 'Predict trends', tone: 'teal', d: 'Spot shifts in what people want before competitors do — e.g. the move from cooking oil to “healthier” oils, or from feature phones to UPI-enabled smartphones.' },
  { t: 'Anticipate needs', tone: 'accent', d: 'Translate the trend into a specific need: convenience, safety, status, health, saving time.' },
  { t: 'Audience-centric campaigns', tone: 'lilac', d: 'Design the product, price, message and channel around that audience instead of around the product’s features.' }
] })}

${add(`<p>The three components in the definition map neatly onto the classic <strong>ABC</strong> of behaviour that you meet again in Module III:</p>
${table(['Word in the definition', 'What it covers', 'Example'], [
  ['Thoughts (cognition)', 'Beliefs, knowledge, comparisons, reasoning', 'Comparing mileage figures of two scooters'],
  ['Emotions (affect)', 'Feelings, moods, liking, fear, pride', 'Feeling proud while gifting a Tanishq necklace'],
  ['Actions (behaviour)', 'Searching, buying, using, recommending, disposing', 'Selling an old phone on OLX after upgrading']
])}`)}

<h2>Consumer behaviour as a continuous process</h2>
${pdf(M, 3, `<p>Consumer behaviour <strong>is a continual process of valuation, revaluation and analysis which acts as a constant guide to the organization.</strong></p>`)}
${add(`<p>This line means that studying consumers is never “finished”. Tastes, incomes, technology and culture keep changing, so firms must keep re-evaluating:</p>
${ul(['<strong>Valuation</strong> — understanding what consumers value today.', '<strong>Revaluation</strong> — checking whether those values have shifted (for example after a price rise, a pandemic, or a new competitor).', '<strong>Analysis</strong> — converting the findings into decisions on product, price, place and promotion.'])}
<p>Because the findings feed back into strategy, consumer behaviour works as a <em>constant guide</em> for the organisation.</p>`)}

<h2>Definition by Hoyer et al. (2009)</h2>
${pdf(M, 3, `<p class="quote-def">“the reflection of the totality of consumers’ decisions with respect to the acquisition, consumption and disposition of goods, services and activities, experiences, people and ideas by human decision-making units”.</p>`)}
${add(`<p>Break this definition into parts in an exam answer. Examiners reward students who explain each phrase:</p>
${table(['Phrase', 'Meaning', 'Illustration'], [
  ['Totality of decisions', 'Not one purchase, but all the related choices: whether, what, why, how, when, where, how much, how often', 'Choosing to buy a phone, which brand, which store, EMI or full payment'],
  ['Acquisition', 'How the offering is obtained — buying, renting, sharing, trading, receiving as a gift', 'Renting furniture from Furlenco instead of buying'],
  ['Consumption', 'How it is used', 'Using a gym membership only on weekends'],
  ['Disposition', 'How it is got rid of — reselling, recycling, gifting, throwing away', 'Exchanging an old phone during a festive sale'],
  ['Goods, services, activities, experiences, people, ideas', 'Consumer behaviour is not limited to physical products', 'Voting for a candidate, joining a cause, booking a concert'],
  ['Human decision-making units', 'Decisions are often made by groups, not just individuals', 'A family deciding on a car together']
])}
<p>Other widely cited definitions you can add for depth (not in your PDF):</p>
${ul(['<strong>Schiffman &amp; Kanuk:</strong> the behaviour consumers display in searching for, purchasing, using, evaluating and disposing of products and services that they expect will satisfy their needs.', '<strong>Solomon:</strong> the study of the processes involved when individuals or groups select, purchase, use or dispose of products, services, ideas or experiences to satisfy needs and desires.'])}`)}

<h2>What consumer behaviour tries to understand</h2>
${pdf(M, 4, ul(['To understand <strong>how consumers decide</strong> on a particular product and spend their effort and money on the goods.', 'The <strong>activities</strong> that consumers engage in while <strong>searching for, evaluating, selecting, using and disposing</strong> of products.']))}

${D.flow({ title: 'The consumption cycle (activities named on p. 4)', src: P(M, 4), numbered: true, loop: 'Disposal experiences feed back into the next search.', items: [
  { t: 'Searching', d: 'Looking for information: asking friends, reading reviews, watching unboxing videos, visiting stores.' },
  { t: 'Evaluating', d: 'Comparing alternatives on price, features, brand image and reviews.' },
  { t: 'Selecting', d: 'Choosing one brand, seller and payment option.' },
  { t: 'Using', d: 'Actual consumption — this is where satisfaction or disappointment forms.' },
  { t: 'Disposing', d: 'Reselling, exchanging, recycling or discarding. Increasingly important because of e-waste rules and resale apps.' }
] })}

${add(`<h3>Nature and characteristics of consumer behaviour</h3>
${ul([
  '<strong>Process, not an event</strong> — it starts before purchase and continues after it.',
  '<strong>Interdisciplinary</strong> — borrows from psychology, sociology, social psychology, economics and anthropology (covered later in this module).',
  '<strong>Dynamic</strong> — changes with time, income, technology and life stage.',
  '<strong>Varies across individuals</strong> — two people with the same income can buy very differently.',
  '<strong>Influenced by internal and external factors</strong> — motives and perception inside; family, culture and marketing outside.',
  '<strong>Involves many roles</strong> — the person who pays may not be the person who uses (next topic).',
  '<strong>Both rational and emotional</strong> — see the last topic of this module.'
])}`)}

${ex(`<p><strong>Disposal matters too:</strong> smartphone brands and e-commerce platforms run exchange offers during festive sales. They are using the “disposition” stage of the definition to trigger the next purchase — the consumer’s old phone becomes a discount on the new one.</p>`)}

${tip('Exam tip', `<p>For any “Define consumer behaviour” question, write the Hoyer et al. (2009) definition, then explain acquisition, consumption and disposition with one example each. That one move usually earns most of the marks.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'consumer-roles', title: 'Consumer roles: payer, user, buyer', pages: '5',
    lede: 'The person who uses a product is not always the person who pays for it or buys it. Marketers must reach each role.',
    html: `
<h2>Three consumer roles</h2>
${pdf(M, 5, `<p>The slide names three consumer roles: <strong>Payer</strong>, <strong>User</strong> and <strong>Buyer</strong>.</p>`)}

${D.grid({ title: 'Consumer roles', src: P(M, 5), min: '10rem', items: [
  { t: 'Payer', tone: 'amber', d: 'The person who finances the purchase. Cares about price, value for money, EMI options, warranty.' },
  { t: 'User', tone: 'teal', d: 'The person who actually consumes or uses the product. Cares about features, comfort, taste, experience.' },
  { t: 'Buyer', tone: 'lilac', d: 'The person who physically makes the purchase — visits the shop, places the order, completes the transaction. Cares about convenience, availability, ease of buying.' }
] })}

${add(`<h3>Why the distinction matters</h3>
<p>When the three roles sit with different people, each needs a different message. A school bag is a good illustration:</p>
${table(['Role', 'Who', 'What they care about', 'How marketers reach them'], [
  ['User', 'Child', 'Cartoon print, colour, what classmates carry', 'In-store displays at eye level, character licensing'],
  ['Payer', 'Parent', 'Durability, price, warranty', 'Quality claims, back-to-school discounts'],
  ['Buyer', 'Parent or grandparent who visits the store', 'Availability, store convenience', 'Distribution, quick-commerce delivery']
])}
<p>When all three roles are the same person (a college student buying instant noodles with pocket money), one message can reach all of them.</p>
<h3>Extended buying roles</h3>
<p>Many textbooks add further roles in a buying decision. These are not on the slide but help in longer answers:</p>
${table(['Role', 'Meaning', 'Example in a family car purchase'], [
  ['Initiator', 'First suggests buying', 'Teenager says “we need a bigger car”'],
  ['Influencer', 'Shapes the choice with opinions', 'An uncle who works in the auto industry'],
  ['Decider', 'Makes the final call', 'Parents jointly'],
  ['Buyer', 'Completes the transaction', 'Father visits the dealership'],
  ['Payer', 'Finances it', 'Mother’s savings plus a car loan'],
  ['User', 'Uses it', 'Whole family']
])}`)}

${ex(`<ul>
<li><strong>Baby products:</strong> the baby is the user, parents are payers and buyers. Brands like Johnson’s Baby or Himalaya Baby speak to parents’ concern for safety, not to the baby.</li>
<li><strong>Corporate laptops:</strong> employees use them, the finance team pays, and the procurement team buys. Laptop makers sell on total cost and service to procurement, but on performance to users.</li>
<li><strong>Medicines:</strong> the patient uses and pays, but the doctor effectively decides — so pharmaceutical firms market to doctors.</li>
</ul>`)}

${warn('Common mistake', `<p>Students often treat “buyer” and “consumer” as the same. In the slide’s framework the buyer completes the purchase, while the user consumes. Show you understand the difference with one example where they are different people.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'relevance', title: 'Relevance of consumer behaviour', pages: '6',
    lede: 'Nine reasons the slide gives for why consumer behaviour matters to a business.',
    html: `
<h2>The nine areas of relevance</h2>
${pdf(M, 6, `<p>The slide titled <strong>Relevance</strong> lists nine keywords: <strong>Dynamics, Choices, Privileges, Satisfaction, Decisiveness, Retention, Categorization, Acquisition and CRM</strong>.</p>`)}

${D.grid({ title: 'Relevance of consumer behaviour', src: P(M, 6), min: '9rem', items: [
  { t: 'Dynamics', tone: 'rose', d: 'Markets keep changing. Studying consumers helps firms track the dynamics of tastes, technology and competition.' },
  { t: 'Choices', tone: 'lilac', d: 'Explains why consumers choose one brand over another, so firms can design offerings that win the choice.' },
  { t: 'Privileges', tone: 'accent', d: 'Helps design benefits and privileges that loyal or premium customers value — membership tiers, early access, exclusive offers.' },
  { t: 'Satisfaction', tone: 'accent', d: 'Understanding expectations lets firms meet or exceed them, which creates satisfaction.' },
  { t: 'Decisiveness', tone: 'teal', d: 'Knowing how consumers decide lets marketers remove friction and help them decide faster and with confidence.' },
  { t: 'Retention', tone: 'rose', d: 'Keeping existing customers is usually cheaper than finding new ones. Knowing what drives repeat purchase supports retention.' },
  { t: 'Categorization', tone: 'lilac', d: 'Grouping consumers into segments with similar needs — the base for segmentation and targeting.' },
  { t: 'Acquisition', tone: 'accent', d: 'Understanding prospects helps attract and convert new customers efficiently.' },
  { t: 'CRM', tone: 'accent', d: 'Customer Relationship Management: using consumer insight to build long-term, profitable relationships.' }
] })}

${add(`<p><strong>Note on sources:</strong> the slide gives only the nine keywords. The explanations in the diagram and below are interpretive explanations written for these notes.</p>
${table(['Keyword', 'Why it matters', 'Typical business action'], [
  ['Dynamics', 'Consumer preferences shift with income, technology, culture', 'Regular market research, trend tracking'],
  ['Choices', 'Brand choice is the outcome marketers compete for', 'Positioning on attributes consumers value'],
  ['Privileges', 'Special benefits deepen attachment', 'Loyalty tiers, member-only prices'],
  ['Satisfaction', 'Satisfaction = performance meeting expectations', 'Set realistic promises; strong after-sales'],
  ['Decisiveness', 'Confused consumers postpone or abandon purchase', 'Comparison tools, clear return policies, reviews'],
  ['Retention', 'Repeat buyers are cheaper to serve and spread word-of-mouth', 'Subscriptions, reminders, service quality'],
  ['Categorization', 'One product cannot suit everyone', 'Segmentation by demographics, psychographics, behaviour'],
  ['Acquisition', 'Growth needs new customers', 'Targeted digital ads, referral rewards, trial packs'],
  ['CRM', 'Relationships create lifetime value', 'Customer databases, personalised offers']
])}
<h3>Relevance from other viewpoints</h3>
${ul(['<strong>For consumers:</strong> understanding one’s own behaviour leads to wiser buying.', '<strong>For government and policy makers:</strong> designing consumer protection and public campaigns (see Module V).', '<strong>For non-profits:</strong> encouraging behaviours such as blood donation or saving water.'])}`)}

${ex(`<ul>
<li><strong>Privileges and retention:</strong> Amazon Prime and Flipkart’s membership programmes offer faster delivery and early sale access to keep members buying within the platform.</li>
<li><strong>CRM:</strong> banks use transaction data to offer pre-approved loans or credit-card upgrades to customers whose spending patterns suggest they would accept.</li>
<li><strong>Acquisition:</strong> UPI apps grew partly through cash-back and referral rewards that lowered the barrier to trying a new payment habit.</li>
</ul>`)}

${tip('Memory hook', `<p>Group the nine into three triads: <strong>Understand</strong> (Dynamics, Choices, Categorization) → <strong>Win</strong> (Acquisition, Decisiveness, Satisfaction) → <strong>Keep</strong> (Retention, Privileges, CRM).</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'marketing-strategy', title: 'Consumer behaviour and marketing strategy', pages: '7',
    lede: 'Eight areas of marketing strategy that are built on consumer insight.',
    html: `
<h2>From consumer insight to strategy</h2>
${pdf(M, 7, `<p>The slide <strong>Consumer Behaviour &gt;&gt; Marketing Strategy</strong> shows eight strategic areas that draw on consumer behaviour:</p>
${ol(['Market segmentation and targeting', 'Branding and brand positioning', 'Product differentiation and innovation', 'Pricing strategies', 'Integrated marketing communications', 'Customer relationship management', 'Digital and social media marketing', 'Experiential marketing'])}`)}

${D.hub({ title: 'Consumer behaviour feeds every strategic area', src: P(M, 7), core: 'Consumer<br>behaviour insight', items: [
  { t: 'Segmentation & targeting', d: 'Insight into needs and characteristics lets firms divide the market into groups and choose which to serve.' },
  { t: 'Branding & positioning', d: 'Knowing what consumers value and how they perceive competitors lets a brand claim a distinct place in their minds.' },
  { t: 'Differentiation & innovation', d: 'Unmet needs and pain points point to new products and features.' },
  { t: 'Pricing strategies', d: 'Price sensitivity, reference prices and perceived value shape pricing — e.g. ₹10 sachets for low-income buyers.' },
  { t: 'Integrated marketing communications', d: 'Media habits and message preferences decide which channels and appeals to use, all speaking with one voice.' },
  { t: 'CRM', d: 'Purchase history and satisfaction data support long-term relationships and loyalty.' },
  { t: 'Digital & social media', d: 'Online search, review-reading and influencer-following behaviour shape digital campaigns.' },
  { t: 'Experiential marketing', d: 'Consumers value memorable experiences; brands create events, pop-ups and in-store experiences.' }
] })}

${add(table(['Strategic area', 'Consumer-behaviour question it answers', 'Concept you can link'], [
  ['Segmentation & targeting', 'Who are our consumers and how do they differ?', 'Consumer profile (this module), psychographics (Module IV)'],
  ['Branding & positioning', 'How do consumers perceive us and competitors?', 'Perception (Module II), self-image congruence (Module IV)'],
  ['Differentiation & innovation', 'Which needs are unmet?', 'Maslow, pain points, consumer innovativeness (Module II)'],
  ['Pricing', 'How price-sensitive are they; what is “fair”?', 'Utility maximisation; equity theory (Module II)'],
  ['IMC', 'Which media do they use and which appeals persuade them?', 'Attitude change (Module III), persuasion (Module V)'],
  ['CRM', 'What keeps them coming back?', 'Post-purchase behaviour, operant conditioning'],
  ['Digital & social media', 'Whom do they trust online?', 'Reference groups, opinion leaders, social proof'],
  ['Experiential marketing', 'What emotions do they seek?', 'Emotional vs rational buying, emotional branding']
]))}

${ex(`<ul>
<li><strong>Pricing:</strong> shampoo makers sell single-use sachets because many lower-income households prefer small, affordable outlays over buying a full bottle.</li>
<li><strong>Positioning:</strong> Volvo is positioned on safety; Maruti Suzuki has long been associated with fuel efficiency and low running costs.</li>
<li><strong>Experiential marketing:</strong> brand experience centres, test-drive events and pop-up stores let consumers try before they buy.</li>
<li><strong>Digital:</strong> beauty retailers such as Nykaa lean on reviews, tutorials and influencer content because buyers of cosmetics look for social reassurance.</li>
</ul>`)}

${tip('Exam tip', `<p>A 10-mark “role of consumer behaviour in marketing strategy” answer can use all eight areas from this slide as sub-headings, with one line of explanation and one Indian example each.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'three-cs', title: 'The 3Cs framework', pages: '8',
    lede: 'Customer, Competitor, Company — three forces any strategy must balance.',
    html: `
<h2>The three Cs</h2>
${pdf(M, 8, `<p>The <strong>3Cs Framework</strong> slide lists three elements: <strong>Customer</strong>, <strong>Competitor</strong> and <strong>Company</strong>.</p>`)}

${D.hub({ title: '3Cs framework', src: P(M, 8), core: 'Strategy', items: [
  { t: 'Customer', tone: 'teal', d: 'Who are they, what do they need, how do they decide? This is where consumer behaviour plugs in directly.' },
  { t: 'Competitor', tone: 'rose', d: 'Who else serves these customers? What are their strengths, weaknesses and positioning?' },
  { t: 'Company', tone: 'accent', d: 'What are our own capabilities, resources, costs and brand strengths?' }
] })}

${add(`<p>The 3Cs model is associated with the Japanese strategist <strong>Kenichi Ohmae</strong> (<em>The Mind of the Strategist</em>, 1982). His argument is that a strategy succeeds when the company’s strengths match customer needs <em>better than competitors do</em>.</p>
${table(['C', 'Key questions', 'Consumer-behaviour link'], [
  ['Customer', 'Needs, segments, buying process, motives, perceptions', 'The whole of this subject'],
  ['Competitor', 'How customers perceive rivals; switching costs; positioning gaps', 'Perceptual maps, brand choice, evoked set'],
  ['Company', 'Capabilities, costs, brand image, resources', 'Whether the firm can deliver what consumers value']
])}
<p><strong>The strategic sweet spot</strong> is where what customers value, what the company does well, and what competitors do poorly overlap. Consumer behaviour research identifies the first part of that overlap.</p>`)}

${ex(`<p><strong>Reliance Jio (2016):</strong> <em>Customer</em> — Indians wanted affordable mobile data. <em>Competitor</em> — incumbents priced data high. <em>Company</em> — Jio had a new 4G-only network and deep financial backing. Pricing data very low and offering free voice calls matched all three Cs and rapidly changed how Indians used mobile internet.</p>`)}

${warn('Common mistake', `<p>Do not confuse the 3Cs with the 4Ps or the 7Ps. The 3Cs are a <em>strategic analysis</em> framework; the Ps are <em>marketing mix</em> decisions that come after.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'maslow', title: 'Maslow’s hierarchy of needs', pages: '9',
    lede: 'Five levels of needs, from survival to self-fulfilment, and how marketers use them.',
    html: `
<h2>The hierarchy</h2>
${pdf(M, 9, `<p>The slide shows Maslow’s pyramid with five levels, from base to top, and three groupings marked by brackets:</p>
${table(['Level', 'Description on the slide', 'Grouping on the slide'], [
  ['Self-actualisation', 'Achieving one’s full potential, including creative activities', 'Self-fulfilment needs'],
  ['Esteem needs', 'Prestige, feeling of accomplishment', 'Psychological needs'],
  ['Belongingness &amp; love needs', 'Intimate relationships, friends', 'Psychological needs'],
  ['Safety needs', 'Security, safety', 'Basic needs'],
  ['Physiological needs', 'Food, water, warmth, rest', 'Basic needs']
])}`)}

${D.pyramid({ title: 'Maslow’s hierarchy of needs — select a level', src: P(M, 9), hint: 'Select a level for its meaning and marketing use',
  brackets: [{ t: 'Self-fulfilment needs', span: 1.6 }, { t: 'Psychological needs', span: 2 }, { t: 'Basic needs', span: 2 }],
  levels: [
    { t: 'Self-actualisation', s: 'full potential, creativity', c: 'rgba(255,157,179,.38)', d: '<strong>Need:</strong> becoming the best one can be. <strong>Marketing use:</strong> education, hobbies, travel, fitness challenges. <strong>Examples:</strong> online courses (Coursera, upGrad), music classes, marathon registrations, “Be your best” style appeals.' },
    { t: 'Esteem', s: 'prestige, accomplishment', c: 'rgba(199,174,255,.34)', d: '<strong>Need:</strong> respect, status, recognition, self-esteem. <strong>Marketing use:</strong> luxury and premium brands, status symbols. <strong>Examples:</strong> luxury watches, premium cars, credit cards that emphasise exclusivity, “Diamonds” jewellery ads.' },
    { t: 'Belongingness & love', s: 'relationships, friends', c: 'rgba(159,176,255,.34)', d: '<strong>Need:</strong> affection, friendship, acceptance. <strong>Marketing use:</strong> social and family appeals, gifting. <strong>Examples:</strong> Cadbury Dairy Milk’s celebration and sharing themes, festival gifting ads, social media platforms.' },
    { t: 'Safety', s: 'security, safety', c: 'rgba(90,214,202,.32)', d: '<strong>Need:</strong> protection from harm, financial security, stability. <strong>Marketing use:</strong> insurance, health, home security, safety features. <strong>Examples:</strong> LIC policies, Dettol’s germ-protection claims, car ads stressing airbags and crash-test ratings, helmets.' },
    { t: 'Physiological', s: 'food, water, warmth, rest', c: 'rgba(31,140,160,.42)', d: '<strong>Need:</strong> survival — food, water, shelter, sleep, warmth. <strong>Marketing use:</strong> staples, basic housing, affordable packs. <strong>Examples:</strong> Aashirvaad atta, Tata Salt, Bisleri water, affordable housing schemes, mattresses marketed on better sleep.' }
  ] })}

${add(`<h3>Core assumptions</h3>
${ul([
  'Abraham Maslow proposed the theory in 1943 (“A Theory of Human Motivation”) and developed it in <em>Motivation and Personality</em> (1954).',
  '<strong>Needs are arranged in order of priority.</strong> Lower needs must be reasonably satisfied before higher needs become strong motivators.',
  '<strong>A satisfied need no longer motivates.</strong> Once you are full, food ads lose their power over you for a while.',
  'The lower four are often called <strong>deficiency needs</strong> (felt when lacking); self-actualisation is a <strong>growth need</strong>.'
])}
<h3>Uses in marketing</h3>
${ul([
  '<strong>Segmentation:</strong> group consumers by the dominant need a product satisfies.',
  '<strong>Positioning and appeals:</strong> the same product can be positioned at different levels. Water can be sold on thirst (physiological), purity (safety) or as a premium lifestyle brand (esteem).',
  '<strong>Product development:</strong> identify which need is under-served.',
  '<strong>Message design:</strong> choose the emotional appeal (fear, love, pride, achievement) matched to the level.'
])}
<h3>Limitations</h3>
${ul([
  '<strong>Order is not rigid.</strong> People sometimes pursue esteem before safety (e.g. buying an expensive phone on credit).',
  '<strong>Cultural bias:</strong> the hierarchy reflects an individualistic Western view; in collectivist cultures such as India, belonging and family may rank above individual self-actualisation.',
  '<strong>Hard to measure</strong> which level is active for a given consumer.',
  '<strong>One product often satisfies several needs at once</strong> — a family dinner at a restaurant meets hunger, belonging and esteem together.'
])}`)}

${ex(`<p><strong>One category, five levels — housing in India:</strong> low-cost housing schemes meet shelter (physiological); gated communities sell security (safety); township ads show neighbours celebrating festivals together (belonging); luxury towers stress prestige addresses (esteem); “design your dream home” campaigns speak to self-expression (self-actualisation).</p>`)}

${link('Connects to', `<p>Maslow reappears in Module II as a <strong>content theory of motivation</strong>, alongside Herzberg, McClelland and Alderfer. See ${go('m2', 'content-theories', 'Content theories of motivation')}.</p>`)}

${tip('Diagram to practise', `<p>Draw the pyramid with all five levels labelled, the brackets (basic, psychological, self-fulfilment), and one product example beside each level. This diagram is one of the most-asked in consumer behaviour papers.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'psychology', title: 'Psychology and consumer behaviour', pages: '10–12',
    lede: 'Consumer psychology, the five psychological drivers, and where the insights are applied.',
    html: `
<h2>Consumer psychology</h2>
${pdf(M, 10, `${ul([
  'Consumer psychology <strong>“employs theoretical psychological approaches to understanding consumers”</strong>.',
  'Consumer psychology explores <strong>how people’s thoughts and feelings affect their buying choices</strong>.',
  'Consumer psychologists <strong>help businesses understand their customers and improve marketing strategies</strong>.'
])}`)}

${add(`<p>Psychology is the study of the individual mind and behaviour. It contributes the “inside the head” part of consumer behaviour: why a person notices an advert, what motivates them, how they learn brand preferences, and how their attitudes form and change.</p>`)}

<h2>Psychological drivers</h2>
${pdf(M, 11, `<p>The slide lists five <strong>psychological drivers</strong>: <strong>Perception, Motivation, Attitude, Learning and Beliefs</strong>.</p>`)}

${D.grid({ title: 'Five psychological drivers', src: P(M, 11), min: '9rem', items: [
  { t: 'Perception', tone: 'teal', d: 'How a consumer selects, organises and interprets information. Two people can see the same ad and understand it differently. Detailed in Module II.' },
  { t: 'Motivation', tone: 'accent', d: 'The inner drive that pushes a person to act to satisfy a need. Maslow and other motivation theories explain it (Modules I and II).' },
  { t: 'Attitude', tone: 'lilac', d: 'A lasting overall evaluation — favourable or unfavourable — of a product or brand. The ABC model is in Module III.' },
  { t: 'Learning', tone: 'amber', d: 'Changes in behaviour that come from experience: classical, operant and observational learning (Module III).' },
  { t: 'Beliefs', tone: 'rose', d: 'Descriptive thoughts a person holds about something — e.g. “this brand is reliable”. Beliefs form the cognitive part of attitude.' }
] })}

<h2>Implications of consumer psychology</h2>
${pdf(M, 12, `<p>The <strong>Implications</strong> slide names three areas: <strong>Marketing Research</strong>, <strong>Communication</strong> and <strong>Employee Training</strong>.</p>`)}
${add(table(['Area', 'How consumer psychology is applied', 'Example'], [
  ['Marketing research', 'Designing surveys, focus groups, eye-tracking and observation that reveal motives and perceptions, not just stated preferences', 'Testing which pack design shoppers notice first on a crowded kirana shelf'],
  ['Communication', 'Choosing appeals, colours, music and spokespeople that fit how consumers process information', 'Using fear appeals in road-safety ads; warmth in festive ads'],
  ['Employee training', 'Teaching sales and service staff to read customer needs, handle objections and reduce post-purchase doubt', 'Showroom staff trained to reassure buyers after a big purchase']
]))}

${ex(`<p><strong>Communication:</strong> Fevicol’s humorous ads show an exaggerated “unbreakable bond” in everyday situations. The humour grabs attention (perception), and the repeated visual of things that refuse to come apart builds a belief about strength (learning and beliefs).</p>`)}

${link('Connects to', `<p>Each driver is developed later: perception and motivation in ${go('m2', 'perception', 'Module II')}, attitude and learning in ${go('m3', 'abc-model', 'Module III')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'social-psychology', title: 'Social psychology: dissonance, planned behaviour, reference groups', pages: '13–14',
    lede: 'How other people, and our need for consistency, shape what we buy.',
    html: `
<h2>Social psychology in consumer behaviour</h2>
${pdf(M, 13, `<p>The <strong>Social Psychology</strong> slide lists three concepts: <strong>Cognitive Dissonance</strong>, <strong>Theory of Planned Behaviour</strong>, and <strong>Peers and Reference Groups</strong>.</p>`)}
${add(`<p>Social psychology studies how a person’s thoughts and behaviour are influenced by the actual, imagined or implied presence of others. In buying, it explains why we seek approval for choices, copy friends, and feel uneasy after an expensive purchase.</p>`)}

<h2>Cognitive dissonance</h2>
${pdf(M, 14, `<p>The slide describes cognitive dissonance through these points:</p>
${ul(['<strong>Actions not matching beliefs</strong>', '<strong>Contradictory thoughts</strong>', 'It can occur <strong>pre-purchase</strong> and <strong>post-purchase</strong>', 'It is resolved through <strong>affirmation / rationalisation</strong>'])}`)}

${D.flow({ title: 'How cognitive dissonance arises and is resolved', src: P(M, 14), items: [
  { t: 'Contradictory thoughts', tone: 'rose', d: 'Two beliefs clash, or an action clashes with a belief: “I bought the expensive phone” vs “I should save money”.' },
  { t: 'Psychological discomfort', tone: 'amber', d: 'The clash creates tension. The bigger and less reversible the decision, the stronger the discomfort.' },
  { t: 'Affirmation / rationalisation', tone: 'teal', d: 'The consumer reduces the tension: seeks positive reviews, remembers the good features, ignores negatives, asks friends for approval — or returns the product.' }
] })}

${add(`<p><strong>Leon Festinger</strong> proposed cognitive dissonance theory in 1957. People seek consistency among their beliefs, attitudes and behaviour; inconsistency creates an uncomfortable state they are motivated to reduce.</p>
${table(['Stage', 'What it looks like', 'Example'], [
  ['Pre-purchase dissonance', 'Conflict while choosing between attractive options — each has features the other lacks', 'Torn between two laptops: one lighter, one more powerful'],
  ['Post-purchase dissonance (buyer’s remorse)', 'Doubt after buying: “Did I make the right choice?”', 'Seeing your new phone discounted a week later']
])}
<h3>When post-purchase dissonance is strongest</h3>
${ul(['High price or high involvement', 'Decision hard to reverse', 'Several attractive alternatives were rejected', 'The consumer had to choose quickly or under pressure'])}
<h3>How consumers reduce it</h3>
${ul(['Seek information that supports the choice (reading positive reviews <em>after</em> buying)', 'Avoid information that criticises it', 'Change their beliefs (“battery life doesn’t matter that much to me”)', 'Return or exchange the product'])}
<h3>How marketers reduce it</h3>
${ul(['Thank-you messages and follow-up calls that reassure the buyer', 'Warranties, easy returns and money-back guarantees', 'Post-purchase advertising showing satisfied customers', 'Owner communities and service reminders'])}`)}

${ex(`<p>Car makers routinely send welcome kits, service-reminder messages and owner-community invitations shortly after delivery. These reassure new owners that they joined a satisfied group — a direct dissonance-reduction tactic for a high-value, hard-to-reverse purchase.</p>`)}

<h2>Theory of Planned Behaviour</h2>
${add(`<p>The slide only names the theory. It was proposed by <strong>Icek Ajzen (1985, 1991)</strong> as an extension of the Theory of Reasoned Action (Fishbein and Ajzen). It predicts behaviour from <strong>intention</strong>, which depends on three factors:</p>`)}
${D.flow({ title: 'Theory of Planned Behaviour (Ajzen)', src: '<span class="tag add">Additional Explanation</span>', items: [
  { t: 'Attitude toward the behaviour', s: '“Is doing this good?”', tone: 'lilac', d: 'The person’s own positive or negative evaluation of performing the behaviour — e.g. “buying an electric scooter is good for the environment and saves fuel money”.' },
  { t: 'Subjective norms', s: '“What will others think?”', tone: 'teal', d: 'Perceived social pressure from important others — family, friends, colleagues — to perform or not perform the behaviour.' },
  { t: 'Perceived behavioural control', s: '“Can I actually do it?”', tone: 'amber', d: 'How easy or hard the person thinks the behaviour is — affordability, charging points, know-how. It affects intention and can directly affect behaviour.' },
  { t: 'Intention → Behaviour', tone: 'accent', d: 'The stronger the intention, the more likely the behaviour. Intention turns into action when the person has real control.' }
] })}
${add(`<p><strong>Marketing use:</strong> if attitudes are positive but people still don’t buy, look at norms (use testimonials, social proof) or control (EMIs, free trials, easy setup). Electric-vehicle makers, for instance, address control with home-charger installation and battery warranties.</p>`)}

<h2>Peers and reference groups</h2>
${add(`<p>A <strong>reference group</strong> is any person or group a consumer uses as a point of comparison or guide for their own attitudes and behaviour. Peers — friends, classmates, colleagues — are especially strong for visible products like clothing, phones and bikes. Reference groups are covered in detail under ${go('m1', 'cultural-social-factors', 'social factors')} (p. 23 of the PDF).</p>`)}
${ex(`<p>College students often choose the same sneaker brands, phone models or food-delivery apps as their friends — partly for information (“my friend says it’s good”) and partly for acceptance (fitting in).</p>`)}

${warn('Common mistake', `<p>Cognitive dissonance is not the same as dissatisfaction. A buyer can be fully satisfied with a product and still feel dissonance (“was the money worth it?”). Dissonance is about <em>inconsistency between thoughts</em>; dissatisfaction is about <em>performance below expectations</em>.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'economics-anthropology', title: 'Economics and anthropology in consumer behaviour', pages: '15–16',
    lede: 'Two more disciplines that feed the subject: rational choice from economics, culture and ritual from anthropology.',
    html: `
<h2>Economics</h2>
${pdf(M, 15, `<p>The slide asks: <strong>How much does a consumer value each good, and how do their preferences change as their income or the price of the good changes?</strong> It names two tools: <strong>Utility Maximization</strong> and <strong>Indifference Curve</strong>.</p>`)}

${add(`<h3>Utility maximisation</h3>
<p><strong>Utility</strong> is the satisfaction a consumer gets from consuming a good. Economics assumes a rational consumer who wants to get the <strong>maximum total utility from a limited budget</strong>.</p>
${ul([
  '<strong>Law of diminishing marginal utility:</strong> each additional unit of a good gives less extra satisfaction than the one before. The first glass of water on a hot day is worth far more than the fifth.',
  '<strong>Equi-marginal principle:</strong> a consumer is in equilibrium when the marginal utility per rupee is equal across goods: MU<sub>x</sub>/P<sub>x</sub> = MU<sub>y</sub>/P<sub>y</sub>.',
  'If a good becomes cheaper, its MU per rupee rises, so the consumer buys more of it — this is one explanation for the downward-sloping demand curve.'
])}
<h3>Indifference curve</h3>
<p>An <strong>indifference curve</strong> shows all combinations of two goods that give the consumer the <strong>same level of satisfaction</strong>, so the consumer is indifferent between them.</p>
${ul([
  'Curves slope downward: to get more of one good you must give up some of the other.',
  'They are convex to the origin because of a diminishing marginal rate of substitution.',
  'Higher curves represent higher satisfaction; curves never cross.',
  'The consumer’s best choice is where the <strong>budget line</strong> just touches the highest attainable indifference curve.'
])}`)}

<figure class="dgm">
  <figcaption class="dgm-cap"><span class="dt">Indifference curves and the budget line</span><span class="dsrc"><span class="tag add">Additional Explanation</span></span></figcaption>
  <svg viewBox="0 0 420 300" role="img" aria-labelledby="ic-t ic-d" style="width:100%;max-width:520px;display:block;margin:0 auto">
    <title id="ic-t">Indifference curve diagram</title>
    <desc id="ic-d">Three convex indifference curves IC1, IC2 and IC3 rising away from the origin. A straight budget line touches IC2 at point E, the consumer's equilibrium.</desc>
    <g fill="none" stroke="currentColor" style="color:var(--muted)" stroke-width="1.5">
      <path d="M50 20 V260 H400"/>
    </g>
    <g fill="none" stroke-width="2.2">
      <path d="M80 60 Q110 210 300 235" stroke="var(--lilac)"/>
      <path d="M100 40 Q140 175 360 205" stroke="var(--accent)"/>
      <path d="M130 30 Q190 140 395 160" stroke="var(--teal)"/>
      <path d="M60 52 L330 250" stroke="var(--amber)" stroke-dasharray="6 5"/>
    </g>
    <circle cx="170" cy="134" r="5" fill="var(--rose)"/>
    <g font-family="Sora, sans-serif" font-size="12" fill="var(--text)">
      <text x="296" y="230">IC1</text><text x="356" y="200">IC2</text><text x="380" y="152">IC3</text>
      <text x="180" y="128">E (equilibrium)</text>
      <text x="300" y="276">Good X (e.g. movies)</text>
      <text x="12" y="16">Good Y</text>
      <text x="236" y="252" fill="var(--amber)">Budget line</text>
    </g>
  </svg>
  <p class="seq-note">The consumer reaches the highest curve the budget allows. IC3 is preferred but unaffordable; point E on IC2 is the best attainable combination.</p>
</figure>

${add(`<p><strong>Limitation for marketers:</strong> real consumers are not perfectly rational. Habits, emotions, social pressure and limited information all intervene — which is why consumer behaviour also borrows from psychology, sociology and anthropology. Behavioural economics (for example the work of Daniel Kahneman and Richard Thaler) studies these predictable departures from rationality.</p>`)}
${ex(`<ul><li><strong>Income change:</strong> as household incomes rise, many families shift from loose staples to packaged, branded atta, rice and oil — a change in the consumption bundle predicted by economics.</li>
<li><strong>Price change:</strong> when mobile data prices fell sharply after 2016, consumption of video streaming and social media rose dramatically.</li></ul>`)}

<h2>Anthropology</h2>
${pdf(M, 16, `<p>The slide describes anthropology as <strong>Human Science</strong>.</p>`)}
${add(`<p><strong>Anthropology</strong> is the study of humans, their societies and cultures across time and place. It contributes to consumer behaviour by explaining the <strong>cultural meaning</strong> of products — rituals, symbols, myths and traditions — rather than just their function.</p>
${ul([
  '<strong>Rituals:</strong> repeated, symbolic consumption — wedding shopping, Diwali gifting, buying gold on Akshaya Tritiya or Dhanteras.',
  '<strong>Symbols:</strong> products carry meaning — a mangalsutra, a first car, a graduation gift.',
  '<strong>Ethnography:</strong> anthropology’s main research method — observing people in their natural settings (home visits, shop-alongs). Many FMCG companies use in-home observation to see how consumers actually cook, clean and wash clothes.',
  '<strong>Cross-cultural comparison:</strong> explains why the same product must be adapted for different regions.'
])}`)}
${ex(`<p><strong>Akshaya Tritiya and Dhanteras</strong> are considered auspicious for buying gold and metal items, so jewellers and appliance brands plan their biggest campaigns around them. No economic model explains the timing; anthropology does.</p>`)}
${link('Connects to', `<p>Culture, the cultural iceberg and semiotics in ${go('m4', 'culture', 'Module IV')} build directly on this anthropological view.</p>`)}

${tip('Exam tip', `<p>“CB is interdisciplinary” is a common question. Use the structure of this module’s slides: Psychology (p. 10–12), Social psychology (p. 13–14), Economics (p. 15) and Anthropology (p. 16), and add Sociology as an extra discipline.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'consumer-profile', title: 'Consumer profile', pages: '17–18',
    lede: 'A structured description of a target consumer that guides segmentation and advertising.',
    html: `
<h2>Meaning and purpose</h2>
${pdf(M, 17, ul([
  'A consumer profile is a <strong>way of describing a consumer categorically so that they can be grouped for marketing and advertising purposes</strong>.',
  'By <strong>targeting advertising to a specific market segment</strong>, companies and marketers can find more success in selling a particular product and increase profits.',
  'It offers <strong>additional insight into customers</strong> and helps identify and gain a deeper understanding of the target market.',
  'It gives a clear picture of <strong>who your consumers are</strong> and, most importantly, <strong>how they are likely to behave in the future</strong>.'
]))}

<h2>Components of a consumer profile</h2>
${pdf(M, 18, `<p>The slide lists five components: <strong>Demographic, Geographic, Psychographic, Behavioral</strong> and <strong>Pain Points</strong>.</p>`)}

${D.grid({ title: 'Building blocks of a consumer profile', src: P(M, 18), min: '9rem', items: [
  { t: 'Demographic', tone: 'accent', d: 'Measurable population traits: age, gender, income, education, occupation, family size, marital status, religion.' },
  { t: 'Geographic', tone: 'teal', d: 'Where the consumer lives: country, state, city tier (metro, Tier-2, Tier-3), urban or rural, climate, region.' },
  { t: 'Psychographic', tone: 'lilac', d: 'Inner characteristics: lifestyle, values, personality, interests and opinions (AIO — see Module IV).' },
  { t: 'Behavioral', tone: 'amber', d: 'How they act towards the product: usage rate, loyalty status, occasion of use, benefits sought, readiness to buy.' },
  { t: 'Pain points', tone: 'rose', d: 'Specific problems or frustrations the consumer faces that the product can solve — e.g. lack of time, high cost, poor service, confusing choices.' }
] })}

${add(table(['Component', 'Typical variables', 'Sample entry for a fitness-app persona'], [
  ['Demographic', 'Age, gender, income, education, occupation', '26, working professional, ₹8–12 lakh per year'],
  ['Geographic', 'City tier, region, urban/rural', 'Lives in Pune, a metro'],
  ['Psychographic', 'Lifestyle, values, interests', 'Health-conscious, follows fitness creators, values self-improvement'],
  ['Behavioral', 'Usage, loyalty, occasions, benefits sought', 'Works out 3 times a week; switches apps often; wants home workouts'],
  ['Pain points', 'Frustrations and barriers', 'Long working hours, gym too far, loses motivation']
]))}
${add(`<h3>Benefits of a consumer profile</h3>
${ul(['Sharper targeting and lower advertising waste', 'Message and media choices that fit the audience', 'Better product design around real pain points', 'Prediction of future behaviour — the key point on p. 17', 'A shared picture of the customer across teams (often written as a “buyer persona”)'])}
<h3>Limitations</h3>
${ul(['Profiles can stereotype and miss variety within a group', 'They go out of date as consumers change', 'Psychographic data is harder to collect reliably than demographic data', 'Privacy concerns when profiles use personal data — India’s Digital Personal Data Protection Act, 2023 governs consent for such use'])}`)}

${ex(`<p>Quick-commerce apps target urban, time-starved consumers (demographic + geographic) who value convenience (psychographic), order small baskets frequently (behavioural) and are frustrated by planning grocery trips (pain point). The “groceries in minutes” promise is built directly on this profile.</p>`)}

${link('Connects to', `<p>Psychographics and AIO are expanded in ${go('m4', 'psychographics', 'Module IV')}; segmentation is one of the eight strategy areas in ${go('m1', 'marketing-strategy', 'CB and marketing strategy')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'psychological-personal-factors', title: 'Drivers of consumer behaviour: psychological and personal factors', pages: '19–21',
    lede: 'The five families of factors that influence buying, starting with those inside the individual.',
    html: `
<h2>Five drivers of consumer behaviour</h2>
${pdf(M, 19, `<p>The slide <strong>Consumer Behaviour Drivers</strong> shows five groups of factors: <strong>Psychological, Social, Personal, Cultural and Economic</strong>.</p>`)}

${D.hub({ title: 'Factors influencing consumer behaviour', src: P(M, 19), core: 'Consumer<br>buying decision', items: [
  { t: 'Psychological', tone: 'teal', d: 'Factors inside the mind: motivation, involvement, perception, learning, beliefs and attitude (p. 20).' },
  { t: 'Personal', tone: 'accent', d: 'Characteristics of the individual: age, occupation, economic situation, lifestyle, personality (p. 21).' },
  { t: 'Social', tone: 'lilac', d: 'Influence of other people: family, reference groups, roles and status, opinion leaders (pp. 23–24).' },
  { t: 'Cultural', tone: 'rose', d: 'Broad shared values: culture, sub-culture, social class (p. 22).' },
  { t: 'Economic', tone: 'amber', d: 'Money-related conditions: personal and family income, savings, credit, prices, the general state of the economy.' }
] })}

<h2>Psychological factors</h2>
${pdf(M, 20, `<p>The slide lists: <strong>Motivation, Involvement, Perception</strong> (with <strong>selective attention, selective distortion, selective retention</strong>), <strong>Learning</strong>, and <strong>Beliefs and Attitude</strong>.</p>`)}

${add(table(['Factor', 'Meaning', 'Buying example'], [
  ['Motivation', 'An inner state that drives a person to act to satisfy a need. A need becomes a motive when it is strong enough.', 'Hunger after college pushes a student to order food on Swiggy.'],
  ['Involvement', 'The personal relevance or importance of a purchase. High involvement → more search and thought; low involvement → quick, routine buying.', 'A car (high) vs a packet of salt (low).'],
  ['Perception', 'The process of selecting, organising and interpreting information to form a meaningful picture.', 'Two people read different meanings into the same discount ad.'],
  ['Learning', 'Changes in behaviour arising from experience.', 'A good first experience with a brand leads to repeat purchase.'],
  ['Beliefs and attitude', 'A belief is a descriptive thought about something; an attitude is a lasting favourable or unfavourable evaluation.', '“Amul butter is pure” (belief) → liking Amul (attitude).']
]))}

<h3>The three selective processes in perception</h3>
${D.funnel({ title: 'Why consumers notice and remember so little', src: P(M, 20), items: [
  { t: 'All marketing stimuli', d: 'A typical urban consumer is exposed to a huge number of ads, hoardings, notifications and packs every day. They cannot process all of them.' },
  { t: 'Selective attention', tone: 'teal', d: 'People notice only a fraction of stimuli — mostly those related to current needs, those they expect, or those that are unusually large, moving or novel. You suddenly notice phone ads once you plan to buy a phone.' },
  { t: 'Selective distortion', tone: 'lilac', d: 'People interpret information to fit what they already believe. A loyal fan of a brand may read a neutral review as positive and dismiss criticism as biased.' },
  { t: 'Selective retention', tone: 'amber', d: 'People remember information that supports their attitudes and beliefs and forget the rest. A buyer remembers the good points of the brand they chose and forgets the good points of rivals.' }
] })}
${add(`<p><strong>Marketing implication:</strong> because of these filters, brands repeat messages, use contrast and novelty to win attention, and try to fit messages to existing beliefs rather than fight them.</p>`)}

<h2>Personal factors</h2>
${pdf(M, 21, `<p>The slide lists: <strong>Age, Occupation, Economic Situation, Lifestyle, Personality</strong>.</p>`)}
${add(table(['Factor', 'How it influences buying', 'Example'], [
  ['Age (and life-cycle stage)', 'Needs and tastes change with age; family life-cycle stage shapes spending (Module V).', 'Teenagers buy gaming and fashion; retirees spend more on healthcare and travel.'],
  ['Occupation', 'Work shapes needs and what is appropriate to buy.', 'A lawyer buys formal wear; a delivery partner needs a fuel-efficient two-wheeler and a sturdy phone.'],
  ['Economic situation', 'Income, savings, debt and borrowing power affect what can be bought.', 'Buying on EMI or “Buy Now Pay Later” when savings are low.'],
  ['Lifestyle', 'The pattern of living expressed in activities, interests and opinions.', 'A fitness-oriented lifestyle drives purchases of protein snacks and running shoes.'],
  ['Personality', 'Distinctive psychological characteristics that lead to consistent responses (Module II).', 'An adventurous person may prefer a Royal Enfield or a Mahindra Thar.']
]))}

${ex(`<p><strong>Same product, different personal factors:</strong> a 22-year-old first-job employee and a 45-year-old manager may both buy a smartphone. The first may prioritise camera and social features within a tight budget; the second may prioritise a premium brand, security and long battery life for work.</p>`)}

${tip('Exam tip', `<p>“Factors influencing consumer behaviour” is a guaranteed long question. Use the five-driver hub as your answer’s skeleton and list the sub-factors from pp. 20–24. Add a diagram — examiners mark structure and diagrams generously.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'cultural-social-factors', title: 'Cultural, social and economic factors', pages: '19, 22–24',
    lede: 'The factors outside the individual: culture, sub-culture, social class, family, reference groups, roles, opinion leaders and the economy.',
    html: `
<h2>Cultural factors</h2>
${pdf(M, 22, `<p>The slide lists three cultural factors: <strong>Culture, Sub-culture, Social Class</strong>.</p>`)}

${D.flow({ title: 'Cultural factors from broad to narrow', src: P(M, 22), dir: 'v', items: [
  { t: 'Culture', tone: 'rose', d: 'The broadest influence: shared values, beliefs, customs and norms learned from society. In India, the importance of family, festivals and gold are cultural values that shape buying.' },
  { t: 'Sub-culture', tone: 'lilac', d: 'Smaller groups within a culture sharing distinct values — based on religion, region, language, caste or age. Food preferences differ sharply between, for example, Gujarati, Bengali and Kerala households.' },
  { t: 'Social class', tone: 'accent', d: 'Relatively permanent, ordered divisions of society whose members share similar values, interests and behaviour. Determined by a combination of income, occupation, education and wealth.' }
] })}

${add(`<h3>Social class in India</h3>
<p>Indian marketers commonly use the <strong>New Consumer Classification System (NCCS)</strong> of the Market Research Society of India. It classifies households using two variables: the <strong>education of the chief wage earner</strong> and the <strong>number of consumer durables</strong> owned from a defined list. Grades run from <strong>A1</strong> (highest) to <strong>E3</strong>. It replaced the older SEC classification.</p>
<h3>Key features of culture for marketers</h3>
${ul(['Culture is <strong>learned</strong>, not inborn', 'It is <strong>shared</strong> by a group', 'It is <strong>adaptive</strong> and changes slowly', 'It sets <strong>norms</strong> of acceptable behaviour, including what to eat, wear and gift'])}`)}

${ex(`<ul>
<li><strong>Culture:</strong> McDonald’s in India does not serve beef and created vegetarian items such as the McAloo Tikki — an adaptation to cultural and religious values.</li>
<li><strong>Sub-culture:</strong> regional Indian food brands sell different masala blends for different states.</li>
<li><strong>Social class:</strong> the same carmaker sells an entry hatchback to one class and an SUV to another, with very different communication.</li>
</ul>`)}

<h2>Social factors: family and reference groups</h2>
${pdf(M, 23, `<p>The slide lists <strong>Family</strong> and <strong>Reference Groups</strong>, with reference groups divided into <strong>Primary, Secondary, Aspired</strong> and <strong>Disliked</strong>.</p>`)}

${add(`<h3>Family</h3>
<p>The family is the most important consumer-buying unit. Textbooks distinguish the <strong>family of orientation</strong> (parents and siblings, who shape early values and brand habits) from the <strong>family of procreation</strong> (spouse and children, who influence day-to-day buying). In India, joint and extended families often make major purchases collectively, and children increasingly influence choices of food, gadgets and even cars.</p>`)}

${D.matrix({ title: 'Four types of reference groups', src: P(M, 23), cols: ['Member groups (you belong)', 'Non-member groups (you do not belong)'], rows: ['Strong or positive pull', 'Weaker or negative pull'],
  cells: [
    [{ t: 'Primary', s: 'close, frequent, informal', tone: 'teal', d: '<strong>Primary groups</strong> are those we interact with regularly and informally — family, close friends, neighbours, classmates. They have the strongest influence. <em>Example:</em> choosing a phone your close friends recommend.' },
     { t: 'Aspired (aspirational)', s: 'groups we wish to join', tone: 'lilac', d: '<strong>Aspirational groups</strong> are groups a person wishes to belong to — sports stars, film celebrities, successful professionals. <em>Example:</em> buying the cricket bat or sneakers endorsed by a favourite cricketer.' }],
    [{ t: 'Secondary', s: 'formal, less frequent', tone: 'accent', d: '<strong>Secondary groups</strong> are more formal and meet less often — professional bodies, clubs, religious groups, alumni associations. Their influence is real but weaker than primary groups. <em>Example:</em> a doctor following what fellow members of a medical association recommend.' },
     { t: 'Disliked (dissociative)', s: 'groups we avoid', tone: 'rose', d: '<strong>Disliked or dissociative groups</strong> are those whose values or behaviour a person rejects, and so avoids products associated with them. <em>Example:</em> a teenager refusing a brand seen as “what my parents use”.' }]
  ] })}
${add(`<p><strong>Note on the matrix:</strong> the slide simply lists the four types. Arranging them by membership and strength or direction of influence is a study aid: primary and secondary are both groups you belong to and differ by <em>closeness of contact</em>; aspirational and dissociative are groups you do not belong to and differ by <em>whether you want to be like them</em>.</p>
<h3>How reference groups influence buying</h3>
${table(['Type of influence', 'Meaning', 'Example'], [
  ['Informational', 'Accepting information from a group seen as knowledgeable', 'Trusting a tech-savvy friend’s laptop advice'],
  ['Utilitarian (normative)', 'Conforming to win approval or avoid disapproval', 'Wearing what the office group considers appropriate'],
  ['Value-expressive', 'Using products to express identity with a group', 'Buying a Royal Enfield to belong to a riding community']
])}
<p>Reference-group influence is strongest for products that are <strong>publicly visible</strong> and <strong>not owned by everyone</strong> (luxury goods used in public).</p>`)}

<h2>Social factors: roles, status and opinion leaders</h2>
${pdf(M, 24, `<p>The slide adds two more social factors: <strong>Role and Status</strong>, and <strong>Opinion leader</strong>.</p>`)}
${add(table(['Factor', 'Meaning', 'Example'], [
  ['Role', 'The activities a person is expected to perform in a group (parent, manager, student).', 'As a manager one buys formal clothing; as a parent, health insurance.'],
  ['Status', 'The esteem society gives to each role. People often buy products that signal their status.', 'Senior executives choosing premium cars and watches.'],
  ['Opinion leader', 'A person within a reference group who, because of skill, knowledge or personality, influences others’ choices.', 'Tech YouTubers, fitness influencers, a respected elder in a village.']
]))}
${ex(`<p>Brands now run structured influencer programmes. Smartphone launches in India routinely send early units to tech reviewers because their unboxing and review videos shape what millions of buyers consider.</p>`)}

<h2>Economic factors</h2>
${add(`<p>The drivers slide (p. 19) names <strong>Economic</strong> factors but has no detail slide. Standard sub-factors are:</p>
${table(['Economic factor', 'Influence on buying'], [
  ['Personal income (disposable and discretionary)', 'Sets the budget for necessities and for luxuries'],
  ['Family income', 'In joint households, pooled income enables larger purchases'],
  ['Income expectations', 'Expecting a raise or bonus encourages spending now'],
  ['Savings and liquid assets', 'Higher savings support big-ticket buying'],
  ['Consumer credit', 'EMI, credit cards and BNPL make expensive goods reachable'],
  ['Prices and inflation', 'High inflation pushes consumers toward smaller packs, private labels and postponement'],
  ['State of the economy', 'Recessions reduce discretionary spending; booms increase it']
])}`)}
${ex(`<p>When food inflation rises, FMCG firms often keep the price point the same (₹5, ₹10) and reduce pack size — called “grammage reduction” — because consumers are sensitive to the familiar price point.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'buying-process', title: 'The consumer buying process', pages: '25',
    lede: 'The five stages from noticing a need to life after the purchase.',
    html: `
<h2>Five stages</h2>
${pdf(M, 25, `<p>The slide lists the <strong>Consumer Buying Process</strong> as: <strong>Problem Identification → Information Search → Evaluation of Alternatives → Purchase Decision → Post-purchase Decisions</strong>.</p>`)}

${D.flow({ title: 'Consumer buying process', src: P(M, 25), numbered: true, loop: 'Post-purchase experience shapes the next problem identification and information search.', items: [
  { t: 'Problem identification', s: 'need recognition', tone: 'rose', d: 'The consumer recognises a gap between the actual state and the desired state. Triggered by <strong>internal stimuli</strong> (hunger, a phone that keeps hanging) or <strong>external stimuli</strong> (an ad, a friend’s new gadget).' },
  { t: 'Information search', tone: 'amber', d: '<strong>Internal search:</strong> memory of past experience. <strong>External search:</strong> personal sources (family, friends), commercial sources (ads, salespeople, websites), public sources (reviews, consumer forums, media) and experiential sources (trying the product).' },
  { t: 'Evaluation of alternatives', tone: 'lilac', d: 'Brands in the consumer’s <strong>evoked (consideration) set</strong> are compared on attributes that matter — price, features, brand image, reviews. Each consumer weights attributes differently.' },
  { t: 'Purchase decision', tone: 'accent', d: 'The consumer forms a purchase intention and decides brand, dealer, quantity, timing and payment. Two things can still change the decision: <strong>attitudes of others</strong> and <strong>unexpected situational factors</strong> (job loss, stock-out, a better offer).' },
  { t: 'Post-purchase decisions', tone: 'teal', d: 'The consumer compares performance with expectations: <strong>satisfied</strong> (repeat purchase, positive word-of-mouth) or <strong>dissatisfied</strong> (complaint, return, negative reviews). Also includes cognitive dissonance, usage and disposal.' }
] })}

${add(`<h3>Stage-by-stage detail and marketing actions</h3>
${table(['Stage', 'Key concepts', 'What marketers do'], [
  ['Problem identification', 'Actual vs desired state; internal and external triggers', 'Create awareness of the problem; “Is your water really safe?” style ads'],
  ['Information search', 'Internal vs external search; personal, commercial, public, experiential sources', 'Be visible where consumers search: search ads, reviews, comparison sites, salespeople'],
  ['Evaluation of alternatives', 'Total set → awareness set → consideration (evoked) set → choice set; attribute importance', 'Enter the consideration set; stress the attributes consumers weight most'],
  ['Purchase decision', 'Intention vs decision; attitudes of others; situational factors; perceived risk', 'Reduce risk: EMIs, warranties, easy returns, availability'],
  ['Post-purchase', 'Satisfaction = performance vs expectations; dissonance; word-of-mouth; disposal', 'Follow-up, service, loyalty programmes, handle complaints quickly']
])}
<h3>Satisfaction equation</h3>
<p>If <strong>performance &lt; expectations</strong> → disappointment. If <strong>performance = expectations</strong> → satisfaction. If <strong>performance &gt; expectations</strong> → delight. Over-promising in ads therefore damages satisfaction.</p>
<h3>Not every purchase uses all five stages</h3>
<p>For routine, low-involvement purchases (buying the usual toothpaste), consumers often jump from problem recognition straight to purchase. The full process is typical of <strong>high-involvement</strong> purchases. See the next topic.</p>`)}

${ex(`<p><strong>Buying a smartphone in India:</strong></p>
${ol(['<strong>Problem:</strong> the old phone runs out of storage and the camera is poor; a friend’s new phone makes the gap obvious.', '<strong>Search:</strong> YouTube reviews, friends’ advice, e-commerce ratings, a visit to a retail store.', '<strong>Evaluation:</strong> three or four models within ₹20,000–25,000 compared on camera, battery and brand.', '<strong>Decision:</strong> buys online during a festive sale using a bank-card discount and no-cost EMI.', '<strong>Post-purchase:</strong> checks if the price dropped (dissonance), posts a rating, and later exchanges the phone on the next upgrade.'])}`)}

${tip('Diagram to practise', `<p>Draw the five boxes in sequence with an arrow from post-purchase back to the start. Under each box write two keywords (e.g. Search: internal / external). This single diagram supports 5, 10 and 15-mark answers.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'buying-behaviour', title: 'Buying situations and buying patterns', pages: '26–27',
    lede: 'Involvement and brand differences combine into four types of buying behaviour.',
    html: `
<h2>Two dimensions of buying situations</h2>
${pdf(M, 26, `<p>The slide <strong>Consumer Buying Situations</strong> lists four conditions: <strong>High involvement, Low involvement, Significant differences between brands, Few differences between brands</strong>.</p>`)}
${add(`<p><strong>Involvement</strong> is how important and personally relevant a purchase is. It is usually high when the product is expensive, bought rarely, risky, or says something about the buyer’s identity. <strong>Brand differences</strong> refer to how much the consumer perceives competing brands to differ.</p>`)}

<h2>The four buying patterns</h2>
${pdf(M, 27, `<p>The <strong>Buying Patterns</strong> slide arranges the four conditions as a 2 × 2 matrix:</p>
${table(['', 'High involvement', 'Low involvement'], [
  ['Significant differences between brands', 'Complex buying behaviour', 'Variety-seeking buying behaviour'],
  ['Few differences between brands', 'Dissonance-reducing buying behaviour', 'Habitual buying behaviour']
], null, true)}`)}

${D.matrix({ title: 'Buying behaviour matrix — select a quadrant', src: P(M, 27), cols: ['High involvement', 'Low involvement'], rows: ['Significant brand differences', 'Few brand differences'],
  cells: [
    [{ t: 'Complex buying behaviour', tone: 'rose', d: 'Consumer is highly involved and sees big differences between brands, so goes through the full buying process: extensive search, learning about attributes, forming beliefs and attitudes, then a careful choice. <em>Examples:</em> a car, laptop, house, higher-education course. <em>Marketer’s task:</em> educate — detailed brochures, comparison charts, knowledgeable salespeople, demos and test drives.' },
     { t: 'Variety-seeking buying behaviour', tone: 'lilac', d: 'Low involvement but noticeable brand differences. Consumers switch brands often — not out of dissatisfaction, but for change and novelty. <em>Examples:</em> biscuits, chips, chocolates, soft drinks. <em>Market leader’s task:</em> encourage habitual buying by dominating shelf space and frequent reminder ads. <em>Challenger’s task:</em> encourage switching with new flavours, free samples, discounts.' }],
    [{ t: 'Dissonance-reducing buying behaviour', tone: 'amber', d: 'High involvement (expensive, infrequent, risky) but the consumer sees few differences among brands. They shop around, buy fairly quickly based on price or convenience, and then often feel post-purchase doubt. <em>Examples:</em> cement for a home, floor tiles, a ceiling fan, an air-conditioner from similar-looking brands. <em>Marketer’s task:</em> reassure after the sale — warranties, follow-up, testimonials.' },
     { t: 'Habitual buying behaviour', tone: 'teal', d: 'Low involvement and few brand differences. Consumers buy out of habit, not strong loyalty, with little search or evaluation. <em>Examples:</em> salt, sugar, matchboxes, basic detergent. <em>Marketer’s task:</em> price promotions, wide distribution, repetitive short ads that build familiarity (passive learning), eye-catching packs.' }]
  ] })}

${add(`<p>This classification is widely attributed to <strong>Henry Assael</strong> (1987) and is popularised in Kotler’s textbooks.</p>
${table(['Feature', 'Complex', 'Dissonance-reducing', 'Variety-seeking', 'Habitual'], [
  ['Involvement', 'High', 'High', 'Low', 'Low'],
  ['Brand differences', 'Significant', 'Few', 'Significant', 'Few'],
  ['Information search', 'Extensive', 'Moderate', 'Limited', 'Minimal'],
  ['Post-purchase', 'Evaluates carefully', 'Dissonance likely', 'Switches next time', 'Little thought'],
  ['Attitude formation', 'Before purchase', 'After purchase', 'After trial', 'Weak'],
  ['Key marketing tool', 'Information & education', 'Reassurance & service', 'Novelty & promotions', 'Availability & reminders']
])}`)}

${ex(`<ul>
<li><strong>Complex:</strong> buying a first car — Maruti vs Hyundai vs Tata — with test drives, mileage comparisons and family discussion.</li>
<li><strong>Dissonance-reducing:</strong> a family building a house buys cement from a dealer’s recommended brand; later they look for reassurance that it was strong enough.</li>
<li><strong>Variety-seeking:</strong> a shopper tries a new Kurkure or Lay’s flavour just for change.</li>
<li><strong>Habitual:</strong> picking up the same salt brand every month without comparing.</li>
</ul>`)}

${warn('Common mistakes', `<ul><li>Swapping the two low-involvement cells. Remember: <strong>variety-seeking = brand differences exist</strong> (so switching is interesting); <strong>habitual = brands look the same</strong> (so why think?).</li><li>Calling habitual buying “brand loyalty”. Habit is passive repetition; loyalty involves a positive attitude toward the brand.</li></ul>`)}

${link('Connects to', `<p>Involvement levels also decide the order of the ABC components of attitude (C–A–B for high involvement, B–A–C for low) in ${go('m3', 'abc-model', 'Module III')}. Dissonance-reducing behaviour links back to ${go('m1', 'social-psychology', 'cognitive dissonance')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'emotional-rational', title: 'Emotional vs rational buying', pages: '28',
    lede: 'Emotion starts the desire; logic justifies the choice.',
    html: `
<h2>What the slide says</h2>
${pdf(M, 28, ul(['<strong>Emotion often starts the desire to buy, and logic helps the customer justify the choice after paying.</strong>', '<strong>Each decision has its own context and its own blend of rational and emotional drivers.</strong>']))}

${D.flow({ title: 'Emotion starts, logic justifies', src: P(M, 28), items: [
  { t: 'Emotional trigger', tone: 'rose', d: 'A feeling sparks desire: excitement, love, pride, fear of missing out, nostalgia. Seeing a friend’s new bike, or an ad that moves you.' },
  { t: 'Desire to buy', tone: 'amber', d: 'The consumer now wants the product, often before carefully comparing options.' },
  { t: 'Purchase', tone: 'accent', d: 'The decision is made — often with emotion still dominant.' },
  { t: 'Rational justification', tone: 'teal', d: 'The consumer explains the choice with logical reasons: mileage, resale value, warranty, “it was on discount”. This also reduces dissonance.' }
] })}

${add(`<h3>Comparing the two kinds of motive</h3>
${table(['Basis', 'Rational motives', 'Emotional motives'], [
  ['Driven by', 'Logic, facts, economic reasoning', 'Feelings, desires, social and self-image needs'],
  ['Typical criteria', 'Price, quality, durability, efficiency, warranty, convenience', 'Pride, love, prestige, fear, nostalgia, comfort, belonging'],
  ['Information processing', 'Careful, deliberate comparison', 'Quick, intuitive, image-based'],
  ['Ad appeals that work', 'Comparisons, specifications, demonstrations, price offers', 'Stories, music, celebrities, family moments, humour'],
  ['Typical categories', 'Industrial goods, insurance details, appliances', 'Jewellery, fashion, gifts, chocolates, travel']
])}
<p><strong>Why both matter:</strong> research in neuroscience (for example, Antonio Damasio’s studies of patients with damage to emotion-related brain areas) suggests that people with impaired emotional processing struggle to make even simple decisions. Emotion is not the opposite of good decision-making; it is part of it.</p>
<h3>Marketing implications</h3>
${ul(['Lead with emotion to create desire, then supply rational “reasons to believe” the buyer can use to justify the choice.', 'High-priced emotional purchases need strong rational support after the sale (warranty, resale value).', 'Even “rational” B2B buyers respond to trust, relationships and brand reputation.'])}`)}

${ex(`<ul>
<li><strong>Insurance:</strong> ads often open with an emotional story about family security (emotion), then close with claim-settlement ratios and tax benefits (logic).</li>
<li><strong>Jewellery:</strong> Tanishq’s ads focus on weddings and family relationships (emotion), and the brand also stresses purity certification and exchange policies (logic).</li>
<li><strong>Two-wheelers:</strong> a Royal Enfield buyer is often drawn by the sound, heritage and riding culture (emotion) and justifies the purchase with build quality and resale value (logic).</li>
</ul>`)}

${link('Connects to', `<p>The impulse-buying hierarchy (A–B–C) in ${go('m3', 'abc-model', 'Module III')} and emotional branding in ${go('m3', 'branding', 'Branding and CB')} both build on this idea.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'exam', kind: 'exam', title: 'Exam preparation: Module I',
    lede: 'Answer frameworks, important questions and common mistakes for Module I.',
    html: `
<h2>How to use this page</h2>
<p>Each framework below shows a suggested structure, the points to include, and where to draw a diagram. Word counts are a guide: roughly 150–200 words for 5 marks, 350–450 for 10 marks, and 600–800 for 15 marks.</p>

<h2>5-mark answer frameworks</h2>
${answer(5, 'Define consumer behaviour. Explain its scope.', `${ol(['Definition: Hoyer et al. (2009) — quote it exactly.', 'Break down: acquisition, consumption, disposition (one example each).', 'Scope: goods, services, activities, experiences, people, ideas; individuals and decision-making units.', 'One line on why it is a continual process of valuation, revaluation and analysis.'])}<p class="meta">Diagram: the five-step consumption cycle (search → evaluate → select → use → dispose).</p>`)}
${answer(5, 'Explain cognitive dissonance with an example.', `${ol(['Definition: actions not matching beliefs; contradictory thoughts (Festinger, 1957).', 'Pre-purchase vs post-purchase dissonance.', 'How it is resolved: affirmation / rationalisation.', 'Example: buyer’s remorse after a costly phone.', 'Two ways marketers reduce it: warranties, follow-up reassurance.'])}`)}
${answer(5, 'Write a note on the 3Cs framework.', `${ol(['Name: Customer, Competitor, Company (Kenichi Ohmae).', 'One line on each C with the key question.', 'The strategic fit: strengths matched to customer needs better than rivals.', 'Example: Reliance Jio’s 2016 entry.'])}`)}
${answer(5, 'Explain selective attention, distortion and retention.', `${ol(['Context: perception as a psychological factor (p. 20).', 'Define each process with one example.', 'Implication for advertisers: repetition, novelty, fitting existing beliefs.'])}<p class="meta">Diagram: the funnel of selective processes.</p>`)}

<h2>10-mark answer frameworks</h2>
${answer(10, 'Explain Maslow’s hierarchy of needs and its application in marketing.', `${ol(['Introduction: Maslow (1943); needs as motivators.', 'Pyramid diagram with five levels and three groupings (basic, psychological, self-fulfilment).', 'Explain each level with one Indian product example.', 'Assumptions: order of priority; satisfied need does not motivate.', 'Marketing applications: segmentation, positioning, appeals, product development.', 'Limitations: rigid order, cultural bias, multiple needs at once.', 'Conclusion: a useful starting framework, not a precise predictor.'])}`)}
${answer(10, 'Discuss the stages of the consumer buying process.', `${ol(['Introduction: buying as a process, not an act.', 'Diagram of five stages with a feedback loop.', 'Each stage: meaning + key concepts + marketer’s role (use the table in the topic).', 'Note that low-involvement buying skips stages.', 'Example: smartphone purchase walked through all five stages.', 'Conclusion: marketers must influence every stage, not just the purchase.'])}`)}
${answer(10, 'Explain the four types of buying behaviour.', `${ol(['Introduction: involvement and brand differences (Assael).', 'Draw the 2 × 2 matrix exactly as on p. 27.', 'Explain each quadrant: meaning, consumer behaviour, example, marketing strategy.', 'Comparison table.', 'Conclusion: same consumer can show different patterns for different products.'])}`)}
${answer(10, 'What is a consumer profile? Explain its components and importance.', `${ol(['Definition from p. 17.', 'Five components with variables (p. 18).', 'Sample persona table.', 'Benefits: targeting, prediction, product design.', 'Limitations: stereotyping, outdated data, privacy.'])}`)}

<h2>15-mark answer frameworks</h2>
${answer(15, 'Discuss the factors influencing consumer behaviour with suitable examples.', `${ol(['Introduction: CB is shaped by internal and external factors (p. 19).', 'Hub diagram of the five drivers.', 'Psychological: motivation, involvement, perception (three selective processes), learning, beliefs &amp; attitude — example for each.', 'Personal: age, occupation, economic situation, lifestyle, personality.', 'Cultural: culture, sub-culture, social class (mention NCCS).', 'Social: family, reference groups (primary, secondary, aspirational, dissociative), role &amp; status, opinion leaders.', 'Economic: income, savings, credit, prices.', 'Interaction: factors act together — one integrated example (e.g. buying a wedding outfit).', 'Conclusion: implications for segmentation and communication.'])}<p class="meta">Diagrams: driver hub + reference-group matrix + selective-perception funnel.</p>`)}
${answer(15, 'Consumer behaviour is interdisciplinary. Discuss.', `${ol(['Introduction: definition and why one discipline is not enough.', 'Psychology: consumer psychology, five drivers, implications (research, communication, training).', 'Social psychology: cognitive dissonance, Theory of Planned Behaviour (diagram), reference groups.', 'Economics: utility maximisation, indifference curve (diagram), limits of rationality.', 'Anthropology: culture, rituals, ethnography.', 'Sociology (extra): family, social class, groups.', 'Integrated example showing several disciplines in one purchase.', 'Conclusion.'])}`)}
${answer(15, 'How does an understanding of consumer behaviour help in designing marketing strategy?', `${ol(['Introduction: Predict trends → anticipate needs → audience-centric campaigns (p. 2).', 'Relevance: the nine keywords from p. 6 grouped as Understand / Win / Keep.', 'The eight strategic areas from p. 7 with an Indian example each.', '3Cs framework as the strategic lens (p. 8).', 'Role of emotional vs rational drivers in campaign design (p. 28).', 'Conclusion.'])}`)}

<h2>Important questions for revision</h2>
${qs([
  ['Define consumer behaviour and explain the Hoyer et al. (2009) definition.', '5'],
  ['Distinguish between payer, user and buyer with examples.', '5'],
  ['Explain the relevance of consumer behaviour to marketers.', '10'],
  ['How does consumer behaviour influence marketing strategy?', '10'],
  ['Explain Maslow’s hierarchy of needs with marketing examples.', '10'],
  ['What is cognitive dissonance? How can marketers reduce post-purchase dissonance?', '10'],
  ['Explain the Theory of Planned Behaviour.', '5'],
  ['Discuss the contribution of economics and anthropology to consumer behaviour.', '10'],
  ['Explain the components of a consumer profile.', '5'],
  ['Discuss the psychological factors influencing consumer behaviour.', '10'],
  ['Explain cultural and social factors affecting buying behaviour.', '15'],
  ['Describe the types of reference groups.', '5'],
  ['Explain the five-stage consumer buying process.', '10'],
  ['Explain the four types of buying behaviour with a diagram.', '10'],
  ['“Emotion starts the desire; logic justifies it.” Discuss.', '5']
])}

<h2>Common mistakes to avoid</h2>
${warn('Watch out for these', ul([
  'Swapping variety-seeking and habitual buying in the matrix.',
  'Treating cognitive dissonance as the same as dissatisfaction.',
  'Listing Maslow’s levels in the wrong order, or forgetting the three groupings.',
  'Writing only “culture” for cultural factors — the slide expects culture, sub-culture and social class.',
  'Missing the “disposition” part of the definition.',
  'Giving foreign examples only — use at least one Indian example per answer.'
]))}

<h2>Interconnections to mention</h2>
${ul([
  'Maslow (Module I) → content theories of motivation (Module II).',
  'Perception as a psychological factor (Module I) → stages of perception (Module II).',
  'Involvement and buying patterns (Module I) → ABC response hierarchies (Module III).',
  'Psychographic profile (Module I) → AIO and psychographics (Module IV).',
  'Age as a personal factor (Module I) → family life cycle (Module V).'
])}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'revision', kind: 'rev', title: 'Revision notes: Module I',
    lede: 'Summary, key terms and quick-recall points.',
    html: `
<h2>Module summary</h2>
<p>Consumer behaviour studies the thoughts, emotions and actions behind how people choose, buy, use and dispose of products (p. 2). Hoyer et al. (2009) define it as the totality of decisions about acquisition, consumption and disposition by human decision-making units (p. 3). The roles of payer, user and buyer may be held by different people (p. 5). It is relevant across nine areas from dynamics to CRM (p. 6) and feeds eight areas of marketing strategy (p. 7), analysed through the 3Cs (p. 8).</p>
<p>The subject is interdisciplinary: Maslow’s hierarchy explains needs (p. 9); psychology contributes five drivers — perception, motivation, attitude, learning and beliefs (pp. 10–12); social psychology contributes cognitive dissonance, the theory of planned behaviour and reference groups (pp. 13–14); economics contributes utility maximisation and indifference curves (p. 15); anthropology contributes the study of culture (p. 16).</p>
<p>Consumer profiles combine demographic, geographic, psychographic, behavioural and pain-point information (pp. 17–18). Behaviour is driven by psychological, personal, cultural, social and economic factors (pp. 19–24). Buying follows five stages (p. 25), and its pattern depends on involvement and brand differences (pp. 26–27). Finally, emotion usually starts the desire while logic justifies it (p. 28).</p>

<h2>Key terminology</h2>
${terms([
  ['Consumer behaviour', 'Thoughts, emotions and actions behind choosing, buying, using and disposing of products and services.'],
  ['Disposition', 'How a consumer gets rid of a product: resale, exchange, recycling, discarding.'],
  ['Payer / User / Buyer', 'The one who finances / consumes / completes the purchase.'],
  ['3Cs', 'Customer, Competitor, Company — strategic analysis framework (Ohmae).'],
  ['Self-actualisation', 'Highest Maslow need: achieving one’s full potential.'],
  ['Cognitive dissonance', 'Discomfort from contradictory thoughts or actions not matching beliefs; pre- or post-purchase.'],
  ['Theory of Planned Behaviour', 'Attitude + subjective norms + perceived behavioural control → intention → behaviour (Ajzen).'],
  ['Utility maximisation', 'Getting maximum satisfaction from a limited budget.'],
  ['Indifference curve', 'Combinations of two goods giving equal satisfaction.'],
  ['Consumer profile', 'Categorical description of consumers for grouping and targeting.'],
  ['Pain point', 'A specific problem or frustration a consumer faces.'],
  ['Involvement', 'Personal importance and relevance of a purchase.'],
  ['Selective attention / distortion / retention', 'Noticing only some stimuli / interpreting to fit beliefs / remembering what supports beliefs.'],
  ['Reference group', 'Group used as a standard for one’s attitudes and behaviour: primary, secondary, aspirational, dissociative.'],
  ['Opinion leader', 'Person whose expertise or personality influences others’ purchases.'],
  ['Evoked set', 'The brands a consumer actively considers.'],
  ['Habitual buying', 'Low involvement, few brand differences; buying by habit.']
])}

<h2>Quick-recall points</h2>
${ul([
  '<strong>Hoyer et al. 2009</strong> → acquisition, consumption, disposition.',
  '<strong>Relevance (9):</strong> Dynamics, Choices, Privileges, Satisfaction, Decisiveness, Retention, Categorization, Acquisition, CRM.',
  '<strong>Strategy (8):</strong> STP, Branding, Innovation, Pricing, IMC, CRM, Digital, Experiential.',
  '<strong>Maslow (bottom up):</strong> Physiological, Safety, Belonging, Esteem, Self-actualisation.',
  '<strong>Psychological drivers (5):</strong> Perception, Motivation, Attitude, Learning, Beliefs.',
  '<strong>Implications (3):</strong> Marketing research, Communication, Employee training.',
  '<strong>Profile (5):</strong> Demographic, Geographic, Psychographic, Behavioural, Pain points.',
  '<strong>Drivers (5):</strong> Psychological, Social, Personal, Cultural, Economic.',
  '<strong>Reference groups (4):</strong> Primary, Secondary, Aspired, Disliked.',
  '<strong>Buying process (5):</strong> Problem → Search → Evaluate → Purchase → Post-purchase.',
  '<strong>Matrix:</strong> High-Significant = Complex; High-Few = Dissonance-reducing; Low-Significant = Variety-seeking; Low-Few = Habitual.'
])}
${tip('Mnemonic for Maslow (bottom up)', `<p><strong>“Please Save Bread Every Saturday”</strong> — Physiological, Safety, Belonging, Esteem, Self-actualisation.</p>`)}
`});

  CB.addModule({
    id: 'm1', n: 1, num: 'I', file: 'CB_MODULE I.pdf', pages: 29,
    title: 'Consumer Behaviour',
    navTitle: 'Consumer Behaviour (Foundations)',
    blurb: 'Meaning, roles, relevance, Maslow, interdisciplinary roots, factors influencing buying, the buying process and buying patterns.',
    lede: 'The foundations: what consumer behaviour is, why it matters to marketers, the disciplines it draws on, the factors that drive it, and how consumers move through a purchase.',
    objectives: [
      'Define consumer behaviour using the Hoyer et al. (2009) definition and explain its scope.',
      'Distinguish the roles of payer, user and buyer.',
      'Explain the relevance of consumer behaviour and its use in eight areas of marketing strategy and the 3Cs.',
      'Draw and apply Maslow’s hierarchy of needs.',
      'Explain the contributions of psychology, social psychology, economics and anthropology.',
      'Build a consumer profile from five components.',
      'Analyse psychological, personal, cultural, social and economic factors that drive buying.',
      'Describe the five-stage buying process and the four types of buying behaviour.',
      'Explain how emotional and rational drivers combine in a purchase.'
    ],
    topics: topics
  });

  CB.addTerms('m1', [
    ['Consumer behaviour (definition)', 'introduction', 'Thoughts, emotions and actions behind choosing, buying, using and disposing; Hoyer et al. (2009).'],
    ['Hoyer et al. (2009)', 'introduction', 'Defined CB as the totality of decisions on acquisition, consumption and disposition by human decision-making units.'],
    ['Acquisition, consumption, disposition', 'introduction', 'The three phases of consumer decisions in the Hoyer definition.'],
    ['Payer, user, buyer', 'consumer-roles', 'Three consumer roles: who finances, who uses, who purchases.'],
    ['Buying roles (initiator, influencer, decider)', 'consumer-roles', 'Extended roles in group buying decisions.'],
    ['Relevance of consumer behaviour', 'relevance', 'Nine areas: dynamics, choices, privileges, satisfaction, decisiveness, retention, categorization, acquisition, CRM.'],
    ['CRM (Customer Relationship Management)', 'relevance', 'Using customer insight to build long-term, profitable relationships.'],
    ['Marketing strategy and CB', 'marketing-strategy', 'Eight strategy areas built on consumer insight, from segmentation to experiential marketing.'],
    ['Experiential marketing', 'marketing-strategy', 'Creating memorable brand experiences consumers can take part in.'],
    ['3Cs framework', 'three-cs', 'Customer, Competitor, Company (Kenichi Ohmae).'],
    ['Maslow’s hierarchy of needs', 'maslow', 'Five levels: physiological, safety, belongingness, esteem, self-actualisation.'],
    ['Self-actualisation', 'maslow', 'Achieving one’s full potential, including creative activities.'],
    ['Consumer psychology', 'psychology', 'Applies psychological approaches to understand consumers’ thoughts and feelings.'],
    ['Psychological drivers', 'psychology', 'Perception, motivation, attitude, learning and beliefs.'],
    ['Cognitive dissonance', 'social-psychology', 'Discomfort from contradictory thoughts; pre- and post-purchase; resolved by rationalisation (Festinger 1957).'],
    ['Buyer’s remorse', 'social-psychology', 'Everyday name for post-purchase cognitive dissonance.'],
    ['Theory of Planned Behaviour', 'social-psychology', 'Ajzen: attitude, subjective norms and perceived control shape intention and behaviour.'],
    ['Subjective norms', 'social-psychology', 'Perceived social pressure to perform or avoid a behaviour (TPB).'],
    ['Utility maximisation', 'economics-anthropology', 'A rational consumer seeks the highest total satisfaction within a budget.'],
    ['Indifference curve', 'economics-anthropology', 'Combinations of two goods that give equal satisfaction.'],
    ['Diminishing marginal utility', 'economics-anthropology', 'Each extra unit adds less satisfaction than the previous one.'],
    ['Anthropology', 'economics-anthropology', 'The human science of cultures, rituals and symbols; contributes ethnography.'],
    ['Ethnography', 'economics-anthropology', 'Observing consumers in natural settings such as homes and shops.'],
    ['Consumer profile', 'consumer-profile', 'Categorical description of a consumer: demographic, geographic, psychographic, behavioural, pain points.'],
    ['Pain points', 'consumer-profile', 'Problems or frustrations a product can solve.'],
    ['Factors influencing consumer behaviour', 'psychological-personal-factors', 'Psychological, social, personal, cultural and economic drivers.'],
    ['Involvement', 'psychological-personal-factors', 'Personal importance of a purchase; decides how much effort goes into it.'],
    ['Selective attention', 'psychological-personal-factors', 'Noticing only some stimuli, mostly those linked to current needs.'],
    ['Selective distortion', 'psychological-personal-factors', 'Interpreting information to fit existing beliefs.'],
    ['Selective retention', 'psychological-personal-factors', 'Remembering information that supports one’s beliefs.'],
    ['Personal factors', 'psychological-personal-factors', 'Age, occupation, economic situation, lifestyle, personality.'],
    ['Culture, sub-culture, social class', 'cultural-social-factors', 'The three cultural factors influencing buying.'],
    ['NCCS (New Consumer Classification System)', 'cultural-social-factors', 'Indian social-class grading by chief wage earner’s education and durables owned.'],
    ['Reference groups', 'cultural-social-factors', 'Primary, secondary, aspired and disliked groups used as standards for behaviour.'],
    ['Aspirational group', 'cultural-social-factors', 'A group a person wishes to belong to.'],
    ['Dissociative (disliked) group', 'cultural-social-factors', 'A group whose values a person rejects and avoids.'],
    ['Opinion leader', 'cultural-social-factors', 'A person whose knowledge or personality influences others’ buying.'],
    ['Role and status', 'cultural-social-factors', 'Expected activities in a group and the esteem attached to them.'],
    ['Economic factors', 'cultural-social-factors', 'Income, savings, credit, prices and the state of the economy.'],
    ['Consumer buying process', 'buying-process', 'Problem identification, information search, evaluation, purchase decision, post-purchase.'],
    ['Evoked (consideration) set', 'buying-process', 'Brands a consumer actively considers when evaluating alternatives.'],
    ['Post-purchase behaviour', 'buying-process', 'Satisfaction, dissonance, word-of-mouth, repeat purchase and disposal.'],
    ['Complex buying behaviour', 'buying-behaviour', 'High involvement, significant brand differences.'],
    ['Dissonance-reducing buying behaviour', 'buying-behaviour', 'High involvement, few brand differences.'],
    ['Variety-seeking buying behaviour', 'buying-behaviour', 'Low involvement, significant brand differences.'],
    ['Habitual buying behaviour', 'buying-behaviour', 'Low involvement, few brand differences.'],
    ['Assael’s buying behaviour model', 'buying-behaviour', 'The 2 × 2 matrix of involvement and brand differences.'],
    ['Emotional vs rational motives', 'emotional-rational', 'Emotion starts the desire to buy; logic justifies it afterwards.']
  ]);
})();
