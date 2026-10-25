/* Module V — source: CB_MODULE V.pdf (8 pages) */
(function () {
  'use strict';
  var H = CB.H, P = H.P, pdf = H.pdf, add = H.add, ex = H.ex, tip = H.tip, warn = H.warn, link = H.link,
    more = H.more, table = H.table, terms = H.terms, answer = H.answer, qs = H.qs, ul = H.ul, ol = H.ol, go = H.go;
  var M = 5;
  var topics = [];

  /* ---------------------------------------------------- */
  topics.push({
    id: 'family-life-cycle', title: 'Family life cycle', pages: '1',
    lede: 'The module’s title topic. The PDF names it on the title slide only, so the explanation below is supplementary.',
    html: `
<h2>What the PDF contains</h2>
${pdf(M, 1, `<p>The title slide reads <strong>FAMILY LIFE CYCLE — MODULE V</strong>. The remaining slides cover consumer materialism, consumption and persuasion, principles of persuasion, and public policy. There is no separate slide explaining the family life cycle itself.</p>`)}
${warn('Read this first', `<p>Because the family life cycle appears only as the module title, everything else on this page is <strong>Additional Explanation</strong> drawn from standard consumer-behaviour textbooks. Check with your syllabus or lecturer how much depth is expected; it is included here because a module title is commonly examined.</p>`)}

<h2>Meaning</h2>
${add(`<p>The <strong>family life cycle (FLC)</strong> describes the stages a family passes through over time — from young single adults to marriage, children, children leaving home, retirement and widowhood. Each stage has typical financial positions, needs and buying patterns, so marketers use FLC as a <strong>segmentation variable</strong> that combines age, marital status and presence and age of children.</p>`)}

<h2>Traditional stages (Wells and Gubar, 1966)</h2>
${D.timeline({ title: 'Traditional family life cycle — select a stage', src: '<span class="tag add">Additional Explanation</span>', items: [
  { t: 'Bachelor stage', s: 'young, single, not at home', d: '<strong>Financial position:</strong> few burdens, moderate income. <strong>Buys:</strong> fashion, gadgets, eating out, travel, two-wheelers, rented flats, fitness. <em>India:</em> young professionals in metros, often in shared PGs or flats.' },
  { t: 'Newly married', s: 'young, no children', d: '<strong>Financial position:</strong> often two incomes, better off than in later stages. <strong>Buys:</strong> furniture, appliances, holidays, first car, home loans, insurance.' },
  { t: 'Full nest I', s: 'youngest child under 6', d: '<strong>Financial position:</strong> home purchases peak, liquid savings low. <strong>Buys:</strong> baby food, diapers, child healthcare, washing machines, larger homes, child insurance.' },
  { t: 'Full nest II', s: 'youngest child 6 or over', d: '<strong>Financial position:</strong> improving. <strong>Buys:</strong> school fees, tuition and coaching, bicycles, family-pack groceries, music or sports classes.' },
  { t: 'Full nest III', s: 'older couple, dependent children', d: '<strong>Financial position:</strong> better still; children may earn. <strong>Buys:</strong> replacement durables, higher education, second car, better furniture, children’s weddings (a major expense in India).' },
  { t: 'Empty nest I', s: 'no children at home, still working', d: '<strong>Financial position:</strong> home ownership high, comfortable. <strong>Buys:</strong> travel, home improvements, luxury items, pilgrimages, gifts for grandchildren.' },
  { t: 'Empty nest II', s: 'retired', d: '<strong>Financial position:</strong> income falls. <strong>Buys:</strong> healthcare, medicines, health insurance, products for comfort and sleep.' },
  { t: 'Solitary survivor', s: 'widowed (working or retired)', d: '<strong>Financial position:</strong> varies; if retired, income is lower. <strong>Needs:</strong> healthcare, security, companionship, assisted living and care services.' }
] })}

${add(`<h3>Modern and non-traditional households</h3>
<p>The traditional model assumes marriage, children and staying married. Later researchers (for example Murphy and Staples, 1979) modernised it to include divorced and single-parent households, couples without children, and remarriage. Today marketers also track:</p>
${ul(['<strong>DINKs</strong> — dual income, no kids: high disposable income, spend on travel and premium experiences.', '<strong>Single-parent households</strong>: time-poor, value convenience.', '<strong>Live-in and late-marriage households</strong> in metros.', '<strong>Boomerang adults</strong> who return to live with parents.'])}
<h3>The Indian context</h3>
${ul(['<strong>Joint and multigenerational families</strong> mean several life-cycle stages live under one roof; big purchases are often collective decisions.', '<strong>The “sandwich generation”</strong> supports both children and ageing parents — spending on school fees and on parents’ healthcare at the same time.', '<strong>Weddings</strong> are a major spending event in the Full nest III stage — jewellery, clothing, events, gifts.', '<strong>Children’s influence</strong> (“pester power”) is high for food, gadgets and even family car choices.'])}`)}

<h2>Family decision-making</h2>
${add(`${table(['Decision type', 'Who decides', 'Typical products'], [
  ['Husband-dominant', 'Mainly the husband', 'Traditionally insurance, cars (changing fast)'],
  ['Wife-dominant', 'Mainly the wife', 'Groceries, kitchenware, children’s clothing'],
  ['Joint (syncratic)', 'Both together', 'Housing, holidays, furniture, children’s education'],
  ['Autonomic', 'Either one, independently', 'Personal care, everyday items']
], 'Family decision roles (Davis and Rigaux, 1974)')}
<p>Remember also the buying roles from Module I — initiator, influencer, decider, buyer, payer, user — which are often spread across family members.</p>`)}
${ex(`<ul><li><strong>Baby-care brands</strong> target Full nest I with hospital tie-ups and parenting content.</li><li><strong>Senior-living communities and health insurers</strong> target Empty nest II and solitary survivors.</li><li><strong>Ed-tech and coaching brands</strong> target parents in Full nest II, especially around board exams and entrance tests.</li></ul>`)}
${link('Connects to', `<p>Age and life-cycle stage as a personal factor, and family as a social factor, in ${go('m1', 'psychological-personal-factors', 'Module I')} and ${go('m1', 'cultural-social-factors', 'Module I social factors')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'materialism', title: 'Consumer materialism', pages: '2',
    lede: 'When possessions become central to identity and life satisfaction.',
    html: `
<h2>What the slide says</h2>
${pdf(M, 2, ul([
  'Materialism is a <strong>value orientation in which individuals regard the acquisition and display of possessions as central to their identity and life satisfaction</strong>.',
  'Consumer behaviour dynamics influenced by materialism encompass the <strong>motivations, emotions and decision processes</strong> that lead people to seek, evaluate and consume goods and services.',
  'Understanding this interplay is crucial for <strong>marketers</strong> aiming to address consumer needs responsibly, <strong>policymakers</strong> seeking sustainable consumption frameworks, and <strong>practitioners</strong> developing interventions to promote well-being.'
]))}

${D.grid({ title: 'Three dimensions of materialism (Richins & Dawson, 1992)', src: '<span class="tag add">Additional Explanation</span>', min: '10rem', items: [
  { t: 'Acquisition centrality', tone: 'amber', d: 'Acquiring things is central to life; shopping and owning give life meaning. <em>Example:</em> constantly planning the next purchase.' },
  { t: 'Acquisition as the pursuit of happiness', tone: 'rose', d: 'Belief that more possessions will bring more happiness. <em>Example:</em> “I’d be happier if I had a bigger car.”' },
  { t: 'Possession-defined success', tone: 'lilac', d: 'Judging one’s own and others’ success by what they own. <em>Example:</em> measuring a relative’s success by their house or car.' }
] })}

${add(`<h3>Why it matters for consumer behaviour</h3>
${table(['Area', 'Typical behaviour of highly materialistic consumers'], [
  ['Motivation', 'Status, esteem and power needs; ideal social self (Module IV)'],
  ['Emotions', 'Excitement before purchase; short-lived satisfaction after; envy of others’ possessions'],
  ['Decision process', 'More brand-conscious, more responsive to status and luxury appeals, more likely to buy on credit'],
  ['Display', 'Conspicuous consumption — visible, branded goods; sharing purchases on social media'],
  ['Well-being', 'Research (for example Tim Kasser’s work) generally finds that strong materialistic values are associated with lower life satisfaction']
])}
<h3>Related ideas</h3>
${ul(['<strong>Conspicuous consumption</strong> — Thorstein Veblen (1899): buying to display wealth and status.', '<strong>Hedonic treadmill</strong> — the boost from a new purchase fades as people adapt, prompting the next purchase.', '<strong>Extended self</strong> — possessions become part of identity (Module IV).', '<strong>Materialism as a consumer trait</strong> — Module II, p. 15.'])}
<h3>Responsible marketing</h3>
${ul(['Avoid messages that link self-worth only to ownership, especially to children.', 'Promote durability, repair, resale and experiences.', 'Be transparent about credit and EMI costs.'])}`)}
${ex(`<ul><li><strong>Festive and wedding spending:</strong> social expectations around display — jewellery, clothing, gifts — can push families into heavy spending or debt.</li><li><strong>Social media display:</strong> unboxing and “haul” culture rewards visible acquisition.</li><li><strong>Counter-trend:</strong> rental and resale platforms for furniture, clothing and phones appeal to consumers who prefer access over ownership.</li></ul>`)}
${link('Connects to', `<p>${go('m2', 'trait-theory', 'Materialism as a specific consumer trait (Module II)')}; ${go('m4', 'types-of-self', 'extended self and ideal social self (Module IV)')}; Maslow’s esteem needs (${go('m1', 'maslow', 'Module I')}).</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'persuasion', title: 'Consumption and persuasion', pages: '3',
    lede: 'Marketers persuade; consumers recognise and resist — the persuasion knowledge model.',
    html: `
<h2>What the slide says</h2>
${pdf(M, 3, ul([
  'Consumption and persuasion interact when <strong>marketing, media and social cues shape what, how and why people buy</strong>.',
  'Advertisers use <strong>psychological triggers</strong> to guide consumer choices, while individuals rely on personal awareness known as <strong>persuasion knowledge</strong> to evaluate or resist these tactics.'
]))}

${D.columns({ title: 'Two sides of persuasion', src: P(M, 3), cols: [
  { h: 'The marketer (agent)', items: [
    { t: 'Psychological triggers', tone: 'rose', d: 'Scarcity, social proof, authority, reciprocity, emotional stories, celebrity endorsement, framing (“₹99 only”), urgency timers.' },
    { t: 'Marketing, media, social cues', tone: 'amber', d: 'Ads, influencer posts, store design, notifications, reviews, word-of-mouth — all shape what, how and why people buy.' }
  ] },
  { h: 'The consumer (target)', items: [
    { t: 'Persuasion knowledge', tone: 'teal', d: 'The consumer’s learned understanding of how marketers try to persuade — recognising a sponsored post, doubting a “limited stock” claim.' },
    { t: 'Evaluate or resist', tone: 'lilac', d: 'Once a tactic is recognised, consumers may discount the message, become sceptical of the brand, or deliberately resist — but they can also accept persuasion they judge fair and useful.' }
  ] }
] })}
${add(`<h3>The Persuasion Knowledge Model</h3>
<p>Proposed by <strong>Marian Friestad and Peter Wright (1994)</strong>. Consumers build up knowledge over their lives about persuasion attempts — from ads, experience, friends and media. Key ideas:</p>
${ul(['When consumers recognise a message as a persuasion attempt, the <strong>“change of meaning”</strong> principle applies: they reinterpret the message as a tactic, often reducing its effect.', 'Persuasion knowledge grows with age and experience — children have less of it, which is why advertising to children is regulated more strictly.', 'Consumers also use <strong>agent knowledge</strong> (what they know about the brand) and <strong>topic knowledge</strong> (what they know about the product).'])}
<h3>Two routes to persuasion: the Elaboration Likelihood Model</h3>
${table(['Route', 'When it is used', 'What persuades', 'Durability of attitude change'], [
  ['Central route', 'High involvement, high ability and motivation to think', 'Strong arguments, facts, evidence', 'Long-lasting, resistant'],
  ['Peripheral route', 'Low involvement or low ability', 'Cues: celebrities, music, attractive visuals, number of reviews', 'Short-lived, easier to change']
], 'Petty and Cacioppo (1986)')}`)}
${ex(`<ul><li><strong>Disclosure rules:</strong> India’s Advertising Standards Council (ASCI) guidelines require influencers to clearly label paid content (for example “#ad” or “Sponsored”), which helps consumers apply persuasion knowledge.</li><li><strong>Scepticism:</strong> many shoppers now ignore “Only 2 left!” messages on travel and shopping sites because they recognise the tactic.</li></ul>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'principles-of-persuasion', title: 'Principles of persuasion', pages: '4',
    lede: 'Five psychological triggers that marketers use — and how to use them ethically.',
    html: `
<h2>The five principles on the slide</h2>
${pdf(M, 4, `<p>The slide lists: <strong>Reciprocity; Social Proof; Scarcity &amp; Urgency; Authority &amp; Liking; Commitment &amp; Consistency</strong>.</p>`)}
${D.grid({ title: 'Principles of persuasion — select one', src: P(M, 4), min: '9.5rem', items: [
  { t: 'Reciprocity', tone: 'amber', d: 'People feel obliged to return a favour. <em>Marketing:</em> free samples, free trials, free gifts, useful free content. <em>Example:</em> in-store tasting counters; free tier of an app before upgrade prompts.' },
  { t: 'Social proof', tone: 'teal', d: 'People follow what others like them do, especially when unsure. <em>Marketing:</em> ratings, reviews, “bestseller” tags, user counts, testimonials. <em>Example:</em> “10 lakh+ downloads”, star ratings on e-commerce listings.' },
  { t: 'Scarcity & urgency', tone: 'rose', d: 'Things seem more valuable when rare or available only for a short time. <em>Marketing:</em> limited editions, flash sales, countdown timers, “only a few left”. <em>Example:</em> festive sale lightning deals.' },
  { t: 'Authority & liking', tone: 'lilac', d: '<strong>Authority:</strong> people follow credible experts (doctors, certifications, “recommended by dentists”). <strong>Liking:</strong> people say yes to those they like — attractive, similar or friendly sources, celebrities and relatable influencers.' },
  { t: 'Commitment & consistency', tone: 'accent', d: 'Once people make a small commitment, they act consistently with it. <em>Marketing:</em> small first steps (free sign-up, wishlist, saved cart), then larger asks. <em>Example:</em> “Add to wishlist” → price-drop alert → purchase.' }
] })}
${add(`<p>These principles come from <strong>Robert Cialdini’s</strong> <em>Influence: The Psychology of Persuasion</em> (1984), which identified six principles: reciprocity, commitment and consistency, social proof, authority, liking and scarcity. Your slide combines authority with liking and adds urgency to scarcity. Cialdini later added a seventh, <strong>unity</strong> (shared identity), in <em>Pre-Suasion</em> (2016).</p>
${table(['Principle', 'Psychology behind it', 'Ethical use', 'Unethical use'], [
  ['Reciprocity', 'Social norm of repaying', 'Genuinely useful free samples', 'Gifts that hide conditions'],
  ['Social proof', 'Uncertainty → copy others', 'Real, verified reviews', 'Fake reviews, inflated counts'],
  ['Scarcity & urgency', 'Fear of missing out; loss aversion', 'Real limited stock or deadline', 'Fake countdown timers (false urgency)'],
  ['Authority & liking', 'Trust in experts; affinity', 'Qualified endorsers, disclosed sponsorship', 'Fake experts, undisclosed paid endorsements'],
  ['Commitment & consistency', 'Desire to act consistently', 'Easy first step, easy exit', 'Subscription traps, hard cancellation']
])}`)}
${warn('Dark patterns in India', `<p>The Central Consumer Protection Authority (CCPA) issued <strong>Guidelines for Prevention and Regulation of Dark Patterns, 2023</strong>, listing practices such as <strong>false urgency</strong>, <strong>basket sneaking</strong> (adding items without consent), <strong>confirm shaming</strong>, <strong>subscription traps</strong> and <strong>drip pricing</strong>. Several of these are misuses of the principles above. <span class="tag add">Additional Explanation</span></p>`)}
${ex(`<p>A typical festive-sale flow combines all five: a free delivery coupon (reciprocity), “bestseller” badges and ratings (social proof), lightning-deal timers (scarcity &amp; urgency), a celebrity ad and “certified” tags (authority &amp; liking), and wishlist reminders (commitment &amp; consistency).</p>`)}
${tip('Memory hook', `<p><strong>“Real Shoppers Scan All Comments”</strong> — Reciprocity, Social proof, Scarcity &amp; urgency, Authority &amp; liking, Commitment &amp; consistency.</p>`)}
${link('Connects to', `<p>Social proof ↔ reference groups (${go('m1', 'cultural-social-factors', 'Module I')}); authority and liking ↔ observational learning (${go('m3', 'attitude-formation', 'Module III')}); commitment ↔ cognitive dissonance (${go('m1', 'social-psychology', 'Module I')}).</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'public-policy', title: 'Consumer behaviour knowledge for public policy', pages: '5–7',
    lede: 'How governments use consumer insight: protective laws, financial incentives and behavioural nudges.',
    html: `
<h2>Consumerism and its critics</h2>
${pdf(M, 5, ul([
  '<strong>Consumerism</strong> suggests that increasing market-driven consumption <strong>improves happiness and well-being</strong> by acquiring goods and services.',
  '<strong>Economists</strong> often view it as <strong>vital for economic growth</strong>, while <strong>critics</strong> highlight issues such as <strong>social anxiety, environmental impact and overconsumption</strong>.'
]))}
${add(`<p><strong>Note:</strong> “consumerism” has two meanings. The slide uses it as an <em>ideology</em> — more consumption means more well-being. In marketing textbooks (for example Kotler) “consumerism” also means the <em>consumer movement</em> — organised efforts to protect buyers’ rights. Both meanings connect to public policy.</p>
${table(['View', 'Argument', 'Policy concern'], [
  ['Economists (pro)', 'Consumption drives demand, production, jobs and growth', 'Keep demand healthy; consumer confidence'],
  ['Critics (con)', 'Overconsumption causes social anxiety, debt, waste, pollution and resource depletion', 'Protect consumers; promote sustainable consumption']
])}`)}

<h2>Key public policy mechanisms</h2>
${pdf(M, 6, `<p>The slide lists three mechanisms: <strong>Protective Legislation; Economic Incentives &amp; Disincentives; Behavioural Interventions</strong>.</p>`)}
${D.columns({ title: 'Three policy tools', src: P(M, 6), cols: [
  { h: 'Protective legislation', items: [{ t: 'Laws and rules', tone: 'teal', d: 'Rules that protect consumers from unsafe products, unfair practices and misleading information, and give them ways to seek redress.' }] },
  { h: 'Incentives & disincentives', items: [{ t: 'Prices, taxes, subsidies', tone: 'amber', d: 'Changing the cost of choices: subsidies make desirable behaviour cheaper; taxes and charges make harmful behaviour costlier.' }] },
  { h: 'Behavioural interventions', items: [{ t: 'Nudges and information', tone: 'lilac', d: 'Changing how choices are presented — defaults, warnings, reminders, simplified labels, social norms — without banning options or changing prices much.' }] }
] })}

${add(`<h3>1. Protective legislation — Indian examples</h3>
${table(['Law or rule', 'What it does for consumers'], [
  ['Consumer Protection Act, 2019', 'Defines consumer rights; set up the Central Consumer Protection Authority (CCPA); covers product liability, unfair trade practices, misleading ads and e-commerce; three-tier consumer commissions and mediation'],
  ['Consumer Protection (E-Commerce) Rules, 2020', 'Seller details, return and refund policies, grievance officers on e-commerce platforms'],
  ['CCPA Dark Patterns Guidelines, 2023', 'Prohibit manipulative online design such as false urgency and basket sneaking'],
  ['Legal Metrology (Packaged Commodities) Rules', 'Mandatory MRP, net quantity, manufacturer details and date on packages'],
  ['Food Safety and Standards Act, 2006 (FSSAI)', 'Food safety standards, labelling, recalls'],
  ['Digital Personal Data Protection Act, 2023', 'Consent and rights over personal data used in marketing'],
  ['ASCI Code (self-regulation)', 'Industry code against misleading or harmful advertising; influencer disclosure guidelines']
])}
<h3>2. Economic incentives and disincentives</h3>
${table(['Type', 'Example', 'Behaviour targeted'], [
  ['Incentive (subsidy)', 'Purchase incentives for electric vehicles under schemes such as FAME and its successor PM E-DRIVE', 'Shift to cleaner transport'],
  ['Incentive', 'LPG connections for poor households under PM Ujjwala Yojana', 'Shift from smoky solid fuels to clean cooking fuel'],
  ['Incentive', 'Tax deductions on insurance premiums and certain savings', 'Encourage saving and protection'],
  ['Disincentive (tax)', 'Higher GST and cess on tobacco products and sugary aerated drinks', 'Reduce harmful consumption'],
  ['Disincentive (ban / charge)', 'Ban on identified single-use plastic items from July 2022; charges for carry bags in stores', 'Reduce plastic waste']
])}
<h3>3. Behavioural interventions</h3>
<p>Based on behavioural economics — Richard Thaler and Cass Sunstein’s <em>Nudge</em> (2008). A nudge changes the “choice architecture” to make the better option easier, without removing choices.</p>
${table(['Intervention', 'Example'], [
  ['Warnings', 'Large pictorial health warnings covering most of the surface of tobacco packs'],
  ['Information campaigns', '“Jago Grahak Jago” consumer-awareness campaign; Swachh Bharat cleanliness messaging'],
  ['Simplified labels', 'Star energy-efficiency labels by the Bureau of Energy Efficiency on appliances'],
  ['Defaults', 'Making the desirable option automatic (for example, auto-renewal reminders or opt-out savings schemes)'],
  ['Social norms', 'Messages telling people that most others in their community already do the desired behaviour']
])}`)}
${ex(`<p><strong>BEE star labels</strong> show how consumer-behaviour knowledge helps policy: rather than asking buyers to compare kilowatt-hours, a simple 1–5 star scale (a heuristic) makes energy efficiency easy to judge at the point of purchase, and manufacturers compete to earn more stars.</p>`)}

<h2>Reference links listed in the PDF</h2>
${pdf(M, 7, ul([
  '<a href="https://www.nature.com/nature-index/topics/l4/materialism-and-consumer-behavior-dynamics" target="_blank" rel="noopener">Nature Index — materialism and consumer behaviour dynamics</a>',
  '<a href="https://www.apa.org/news/press/releases/2017/08/persuasion-consumers" target="_blank" rel="noopener">American Psychological Association (2017) — persuasion and consumers</a>',
  '<a href="https://www.linkedin.com/pulse/persuasion-knowledge-consumers-defense-against-marketing-hopper/" target="_blank" rel="noopener">LinkedIn — persuasion knowledge: consumers’ defence against marketing</a>',
  '<a href="https://theintactone.com/2025/02/26/consumer-behaviour-and-public-policy/" target="_blank" rel="noopener">The Intact One (2025) — consumer behaviour and public policy</a>'
]))}
${tip('Exam tip', `<p>For “Role of consumer behaviour in public policy”, use the three mechanisms from p. 6 as headings and give one Indian example under each. Open with the consumerism debate from p. 5.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'exam', kind: 'exam', title: 'Exam preparation: Module V',
    lede: 'Answer frameworks, important questions and common mistakes for Module V.',
    html: `
<h2>5-mark answer frameworks</h2>
${answer(5, 'What is consumer materialism?', `${ol(['Definition (p. 2).', 'Richins &amp; Dawson’s three dimensions.', 'Effects on decisions and well-being.', 'Why marketers and policymakers care (p. 2, point 3).'])}`)}
${answer(5, 'Explain persuasion knowledge.', `${ol(['Consumption and persuasion interact (p. 3).', 'Psychological triggers vs persuasion knowledge.', 'Friestad &amp; Wright’s model and the change-of-meaning idea.', 'Example: influencer disclosure.'])}`)}
${answer(5, 'Explain the stages of the family life cycle.', `${ol(['Meaning of FLC (note: title only in the PDF).', 'Wells &amp; Gubar stages listed.', 'Buying pattern for two or three stages.', 'One line on modern / Indian households.'])}`)}

<h2>10-mark answer frameworks</h2>
${answer(10, 'Explain the principles of persuasion used by marketers.', `${ol(['Introduction: persuasion and consumption (p. 3).', 'Five principles (p. 4): meaning, psychology, example each.', 'Cialdini as the source; unity as the seventh principle.', 'Ethical vs unethical use table; dark patterns.', 'Conclusion: persuasion knowledge limits manipulation.'])}`)}
${answer(10, 'How can knowledge of consumer behaviour help in framing public policy?', `${ol(['Consumerism debate (p. 5).', 'Three mechanisms (p. 6) with Indian examples.', 'Behavioural insights: nudges, labels, defaults.', 'Conclusion.'])}`)}
${answer(10, 'Discuss the family life cycle as a basis of market segmentation.', `${ol(['Meaning and variables combined (age, marital status, children).', 'Traditional stages with buying patterns (timeline diagram).', 'Modern FLC and Indian joint family context.', 'Family decision roles.', 'Merits and limitations as a segmentation base.'])}`)}

<h2>15-mark answer frameworks</h2>
${answer(15, 'Discuss the interplay of materialism, persuasion and public policy in consumer behaviour.', `${ol(['Materialism: definition and dimensions (p. 2).', 'How persuasion feeds materialistic consumption (p. 3).', 'Five principles of persuasion (p. 4).', 'Consumerism: growth vs overconsumption (p. 5).', 'Policy responses: legislation, incentives, interventions (p. 6).', 'Indian examples: CCPA dark-patterns guidelines, plastic ban, tobacco warnings, EV incentives.', 'Conclusion: responsible marketing.'])}`)}
${answer(15, 'Family is the most important consumer buying unit. Discuss with reference to the family life cycle.', `${ol(['Family as a social factor (Module I).', 'FLC stages and buying patterns.', 'Modern and Indian households.', 'Decision roles and children’s influence.', 'Marketing implications by stage.', 'Conclusion.'])}`)}

<h2>Important questions for revision</h2>
${qs([
  ['Explain the family life cycle and its marketing implications.', '10'],
  ['Define consumer materialism and explain its impact on consumer behaviour.', '5'],
  ['How do consumption and persuasion interact?', '5'],
  ['What is persuasion knowledge?', '5'],
  ['Explain the five principles of persuasion with examples.', '10'],
  ['Explain consumerism and its criticisms.', '5'],
  ['Discuss the key public-policy mechanisms based on consumer behaviour.', '10'],
  ['What are behavioural interventions? Give examples.', '5'],
  ['Explain the role of consumer behaviour knowledge in public policy.', '15']
])}

<h2>Common mistakes to avoid</h2>
${warn('Watch out for these', ul([
  'Claiming the PDF explains the family life cycle in detail — it only names it on the title slide.',
  'Listing Cialdini’s six principles without noting that the slide groups them into five.',
  'Treating consumerism only as the consumer-rights movement; the slide uses it as an ideology of consumption.',
  'Giving policy answers without Indian examples.'
]))}

<h2>Interconnections to mention</h2>
${ul(['Materialism (Module V) ↔ consumer trait (Module II) ↔ extended self (Module IV) ↔ esteem needs (Module I).', 'Persuasion principles (Module V) ↔ learning and attitude change (Module III).', 'Social proof (Module V) ↔ reference groups and opinion leaders (Module I).', 'Family life cycle (Module V) ↔ age and family as factors (Module I).'])}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'revision', kind: 'rev', title: 'Revision notes: Module V',
    lede: 'Summary, key terms and quick-recall points.',
    html: `
<h2>Module summary</h2>
<p>Module V is titled <strong>Family Life Cycle</strong> (p. 1); the life-cycle stages themselves are supplementary material. <strong>Materialism</strong> is a value orientation in which acquiring and displaying possessions is central to identity and life satisfaction; it shapes motivations, emotions and decisions, and matters to marketers, policymakers and practitioners (p. 2). <strong>Consumption and persuasion</strong> interact through marketing, media and social cues; advertisers use psychological triggers, and consumers use persuasion knowledge to evaluate or resist them (p. 3). The <strong>principles of persuasion</strong> are reciprocity, social proof, scarcity &amp; urgency, authority &amp; liking, and commitment &amp; consistency (p. 4).</p>
<p><strong>Consumerism</strong> holds that more consumption brings more well-being; economists see it as vital to growth, while critics point to social anxiety, environmental impact and overconsumption (p. 5). Policymakers respond with <strong>protective legislation, economic incentives and disincentives, and behavioural interventions</strong> (p. 6).</p>

<h2>Key terminology</h2>
${terms([
  ['Family life cycle', 'Stages a family passes through, each with distinct needs and spending.'],
  ['Full nest / empty nest', 'Stages with dependent children at home / after children leave.'],
  ['DINK', 'Dual income, no kids.'],
  ['Materialism', 'Acquisition and display of possessions as central to identity and satisfaction.'],
  ['Conspicuous consumption', 'Buying to display wealth and status (Veblen).'],
  ['Persuasion knowledge', 'Consumers’ awareness of persuasion tactics, used to evaluate or resist them.'],
  ['Reciprocity', 'Obligation to return a favour.'],
  ['Social proof', 'Following what others do.'],
  ['Scarcity', 'Rare or time-limited items seem more valuable.'],
  ['Consumerism', 'Idea that more consumption improves well-being (also: consumer-rights movement).'],
  ['Nudge', 'Change in choice presentation that steers behaviour without forbidding options.'],
  ['Dark patterns', 'Manipulative online design practices; regulated by CCPA guidelines (2023).']
])}

<h2>Quick-recall points</h2>
${ul([
  '<strong>FLC (Wells &amp; Gubar):</strong> Bachelor → Newly married → Full nest I, II, III → Empty nest I, II → Solitary survivor.',
  '<strong>Materialism (Richins &amp; Dawson):</strong> centrality, happiness, success.',
  '<strong>Persuasion (5 on slide):</strong> Reciprocity, Social Proof, Scarcity &amp; Urgency, Authority &amp; Liking, Commitment &amp; Consistency.',
  '<strong>Policy tools (3):</strong> Protective Legislation, Economic Incentives &amp; Disincentives, Behavioural Interventions.',
  '<strong>Consumerism:</strong> growth (economists) vs anxiety, environment, overconsumption (critics).'
])}
`});

  CB.addModule({
    id: 'm5', n: 5, num: 'V', file: 'CB_MODULE V.pdf', pages: 8,
    title: 'Family Life Cycle',
    navTitle: 'Family Life Cycle, Persuasion & Policy',
    blurb: 'Family life cycle, consumer materialism, consumption and persuasion, principles of persuasion and public policy.',
    lede: 'The PDF is titled “Family Life Cycle”. Its slides cover materialism, persuasion and public policy; the life-cycle stages are added from standard textbooks and clearly marked as supplementary.',
    objectives: [
      'Explain the family life cycle and its use in segmentation (supplementary to the PDF).',
      'Define consumer materialism and describe its effects on buying and well-being.',
      'Explain how consumption and persuasion interact, including persuasion knowledge.',
      'Explain and apply the five principles of persuasion, including ethical limits.',
      'Discuss consumerism and the three public-policy mechanisms with Indian examples.'
    ],
    topics: topics
  });

  CB.addTerms('m5', [
    ['Family life cycle', 'family-life-cycle', 'Stages a family passes through; used to segment markets (Wells & Gubar 1966).'],
    ['Full nest and empty nest', 'family-life-cycle', 'Family stages with dependent children / after children leave home.'],
    ['DINK', 'family-life-cycle', 'Dual income, no kids household.'],
    ['Family decision roles', 'family-life-cycle', 'Husband-dominant, wife-dominant, joint (syncratic), autonomic.'],
    ['Consumer materialism', 'materialism', 'Acquisition and display of possessions as central to identity and life satisfaction.'],
    ['Richins & Dawson materialism scale', 'materialism', 'Acquisition centrality, pursuit of happiness, possession-defined success.'],
    ['Conspicuous consumption', 'materialism', 'Buying to display wealth and status (Veblen 1899).'],
    ['Persuasion knowledge', 'persuasion', 'Consumers’ awareness of persuasion tactics used to evaluate or resist them.'],
    ['Persuasion Knowledge Model', 'persuasion', 'Friestad & Wright (1994); recognising a tactic changes its meaning.'],
    ['Elaboration Likelihood Model', 'persuasion', 'Central vs peripheral routes to persuasion (Petty & Cacioppo).'],
    ['Principles of persuasion', 'principles-of-persuasion', 'Reciprocity, social proof, scarcity & urgency, authority & liking, commitment & consistency.'],
    ['Cialdini', 'principles-of-persuasion', 'Author of Influence (1984); six principles, later unity.'],
    ['Social proof', 'principles-of-persuasion', 'Following what others do, especially under uncertainty.'],
    ['Scarcity and urgency', 'principles-of-persuasion', 'Limited availability or time increases perceived value.'],
    ['Dark patterns', 'principles-of-persuasion', 'Manipulative online designs; CCPA guidelines 2023.'],
    ['Consumerism', 'public-policy', 'Idea that more consumption improves well-being; debated by economists and critics.'],
    ['Protective legislation', 'public-policy', 'Laws protecting consumers, e.g. Consumer Protection Act 2019.'],
    ['Economic incentives and disincentives', 'public-policy', 'Subsidies and taxes used to steer consumption.'],
    ['Behavioural interventions (nudges)', 'public-policy', 'Changing choice presentation to steer behaviour (Thaler & Sunstein).'],
    ['Consumer Protection Act, 2019', 'public-policy', 'Indian law establishing consumer rights and the CCPA.']
  ]);
})();
