/* Module II — source: CB_Module II.pdf (25 pages) */
(function () {
  'use strict';
  var H = CB.H, P = H.P, pdf = H.pdf, add = H.add, ex = H.ex, tip = H.tip, warn = H.warn, link = H.link,
    more = H.more, table = H.table, terms = H.terms, answer = H.answer, qs = H.qs, ul = H.ul, ol = H.ol, go = H.go;
  var M = 2;
  var topics = [];

  /* ---------------------------------------------------- */
  topics.push({
    id: 'motivation-overview', title: 'Motivation: process and content theories', pages: '2–3, 8–9',
    lede: 'Two families of motivation theory: one explains how people get motivated, the other explains what they are motivated by.',
    html: `
<h2>What motivation means</h2>
${add(`<p><strong>Motivation</strong> is the driving force within individuals that impels them to action. It arises when an unfulfilled need creates tension, and the person acts — often by buying something — to reduce that tension. In consumer behaviour, motivation explains <em>why</em> people buy.</p>`)}
${D.flow({ title: 'The motivation process', src: '<span class="tag add">Additional Explanation</span>', items: [
  { t: 'Unfulfilled need', tone: 'rose', d: 'A gap between the current state and the desired state — hunger, wanting recognition, wanting to learn.' },
  { t: 'Tension', tone: 'amber', d: 'The gap creates psychological or physical discomfort.' },
  { t: 'Drive', tone: 'lilac', d: 'The tension becomes a drive to act.' },
  { t: 'Goal-directed behaviour', tone: 'accent', d: 'The person searches for and buys a product that they believe will satisfy the need.' },
  { t: 'Need fulfilled → tension reduced', tone: 'teal', d: 'If the purchase works, tension drops. Learning from this shapes future motivation.' }
] })}

<h2>Process theories of motivation</h2>
${pdf(M, 2, `<p>Process theories of motivation focus on the <strong>“hows” of motivation</strong>. Instead of focusing on what people need, these models focus on the <strong>psychological and behavioural processes</strong> that humans follow. By understanding these processes it is possible to understand the <strong>actions, interactions and contexts</strong> that motivate individuals’ behaviours.</p>`)}
${pdf(M, 3, `<p>The models of process theory listed are: <strong>Skinner’s Reinforcement Theory, Vroom’s Expectancy Theory, Adams’ Equity Theory, and Locke’s Goal-Setting Theory</strong>.</p>`)}

<h2>Content theories of motivation</h2>
${pdf(M, 8, ul([
  'Content models of motivation focus on the <strong>“whats” of motivation</strong>.',
  'More specifically, they focus on the <strong>different things that people may feel they need</strong> in their lives.',
  'The theory is that people’s motivations will be based on <strong>acquiring the things that they think they need</strong>.',
  'By understanding their wants and needs, you can understand <strong>why and how people are motivated</strong>.'
]))}
${pdf(M, 9, `<p>The models of content theory listed are: <strong>Maslow’s Hierarchy of Needs, Herzberg’s Two-Factor Theory, McClelland’s Theory of Needs, and Alderfer’s ERG Theory</strong>.</p>`)}

${D.columns({ title: 'Two families of motivation theory', src: P(M, '3, 9'), cols: [
  { h: 'Content theories — what motivates', items: [
    { t: 'Maslow', s: 'hierarchy of needs', tone: 'teal', d: 'Five levels of needs satisfied broadly from the bottom up: physiological, safety, belongingness, esteem, self-actualisation.' },
    { t: 'Herzberg', s: 'two-factor theory', tone: 'teal', d: 'Hygiene factors prevent dissatisfaction; motivators create satisfaction.' },
    { t: 'McClelland', s: 'theory of needs', tone: 'teal', d: 'Learned needs for achievement, affiliation and power; one usually dominates.' },
    { t: 'Alderfer', s: 'ERG theory', tone: 'teal', d: 'Existence, Relatedness, Growth; several needs can act at once; frustration–regression.' }
  ] },
  { h: 'Process theories — how motivation works', items: [
    { t: 'Skinner', s: 'reinforcement theory', tone: 'accent', d: 'Behaviour is shaped by its consequences: rewarded behaviour is repeated (operant conditioning).' },
    { t: 'Vroom', s: 'expectancy theory', tone: 'accent', d: 'Motivation = expectancy × instrumentality × valence.' },
    { t: 'Adams', s: 'equity theory', tone: 'accent', d: 'People compare their outcome-to-input ratio with others and want it to be fair.' },
    { t: 'Locke', s: 'goal-setting theory', tone: 'accent', d: 'Specific, appropriate goals plus feedback raise motivation.' }
  ] }
] })}
${add(`${table(['Basis', 'Content theories', 'Process theories'], [
  ['Core question', 'What motivates people?', 'How does motivation happen?'],
  ['Focus', 'Needs and wants inside the person', 'Thought processes, expectations, comparisons, consequences'],
  ['Nature', 'Relatively static lists or hierarchies of needs', 'Dynamic, explains choices between options'],
  ['Theories (slides)', 'Maslow, Herzberg, McClelland, Alderfer', 'Skinner, Vroom, Adams, Locke'],
  ['Marketing use', 'Which need should the product and message address?', 'How do rewards, expectations, fairness and goals shape buying and loyalty?'],
  ['Example', 'Positioning a car on safety (safety need)', 'A loyalty tier that seems achievable and worth it (Vroom)']
])}`)}
${warn('Common mistake', `<p>Skinner is sometimes listed under learning rather than motivation. Your slides place <strong>Skinner’s reinforcement theory under process theories</strong> (p. 3). Use that classification in this paper, and mention the link to operant conditioning in Module III.</p>`)}
${tip('Memory hook', `<p>Process = <strong>“S-V-A-L”</strong> (Skinner, Vroom, Adams, Locke). Content = <strong>“M-H-M-A”</strong> (Maslow, Herzberg, McClelland, Alderfer).</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'process-theories', title: 'Process theories: Skinner, Vroom, Adams, Locke', pages: '4–7',
    lede: 'Four explanations of how motivation works, and how each shows up in buying and loyalty.',
    html: `
<h2>Skinner’s reinforcement theory</h2>
${pdf(M, 4, ul([
  'Reinforcement theory says that <strong>the way we respond to an individual’s actions and behaviours has the ability to change their behaviours in the future</strong>.',
  '<strong>Operant conditioning</strong>',
  '<strong>Stimulus response</strong>'
]))}
${add(`<p><strong>B. F. Skinner</strong> argued that behaviour is a function of its consequences. Behaviour that is rewarded tends to be repeated; behaviour that is not rewarded or is punished tends to fade. This is <strong>operant conditioning</strong>: the person “operates” on the environment, and the consequence shapes what they do next.</p>
${table(['Type of consequence', 'What happens', 'Effect on behaviour', 'Consumer example'], [
  ['Positive reinforcement', 'A pleasant outcome is added', 'Behaviour increases', 'Cashback after paying through an app'],
  ['Negative reinforcement', 'An unpleasant state is removed', 'Behaviour increases', 'A pain-relief balm removes a headache, so you buy it again'],
  ['Punishment', 'An unpleasant outcome is added', 'Behaviour decreases', 'A late-payment fee on a credit card'],
  ['Extinction', 'Reinforcement stops', 'Behaviour gradually fades', 'A shopper stops visiting once the loyalty programme ends']
])}
<h3>Schedules of reinforcement</h3>
${ul(['<strong>Continuous:</strong> reward every time — fast learning, fast extinction (a free gift with every purchase).', '<strong>Fixed ratio:</strong> reward after a set number of actions (“buy 9 coffees, get the 10th free”).', '<strong>Variable ratio:</strong> reward after an unpredictable number of actions — the most resistant to extinction (scratch cards, lucky draws).', '<strong>Fixed / variable interval:</strong> rewards tied to time (monthly bonus points; surprise weekend offers).'])}`)}
${D.flow({ title: 'Stimulus → response → reinforcement', src: P(M, 4), loop: 'Reinforced responses become more likely next time the stimulus appears.', items: [
  { t: 'Stimulus', tone: 'amber', d: 'A cue in the environment: an app notification, a store display, a discount banner.' },
  { t: 'Response', tone: 'accent', d: 'The consumer acts: opens the app, buys, pays with a particular wallet.' },
  { t: 'Consequence', tone: 'teal', d: 'A reward (points, cashback, satisfaction) or a cost (fee, disappointment).' },
  { t: 'Future behaviour', tone: 'lilac', d: 'Rewarded responses are repeated; unrewarded ones fade.' }
] })}
${ex(`<p>Payment apps in India popularised <strong>scratch-card rewards</strong> after transactions. The unpredictable size of the reward is a variable-ratio schedule, which keeps users transacting even when many cards give little or nothing.</p>`)}

<h2>Vroom’s expectancy theory</h2>
${pdf(M, 5, ul([
  'An individual’s motivation is affected by <strong>their expectations about the future</strong>.',
  'Vroom says that an individual’s motivation is affected by: how much they <strong>value any reward</strong> associated with an action (<strong>Valence</strong>); how much they believe that by putting effort into something they will be able to generate good results (<strong>Expectancy</strong>); and how much they believe that generating good results will result in a reward (<strong>Instrumentality</strong>).'
]))}
${D.flow({ title: 'Vroom: Motivation = Expectancy × Instrumentality × Valence', src: P(M, 5), ops: ['=', '×', '×'], items: [
  { t: 'Motivation', s: 'force to act', tone: 'accent', d: 'The overall motivational force. Because the three parts are <strong>multiplied</strong>, if any one of them is zero, motivation is zero.' },
  { t: 'Expectancy', s: 'effort → performance', tone: 'teal', d: '“If I try, will I succeed?” The belief that effort will produce the required result. <em>Consumer:</em> “If I follow this diet plan, I will actually lose weight.”' },
  { t: 'Instrumentality', s: 'performance → reward', tone: 'lilac', d: '“If I succeed, will I really get the reward?” <em>Consumer:</em> “If I reach Gold tier, will the airline really give me lounge access?”' },
  { t: 'Valence', s: 'value of the reward', tone: 'amber', d: '“Do I want that reward?” The personal value of the outcome. Lounge access means a lot to a frequent flyer and nothing to someone who rarely flies.' }
] })}
${add(`<p><strong>Victor Vroom</strong> proposed the theory in <em>Work and Motivation</em> (1964). Although developed for the workplace, it maps well onto consumer decisions about effortful purchases and loyalty programmes.</p>
<h3>Marketing applications</h3>
${ul(['<strong>Raise expectancy:</strong> make success feel achievable — beginner-friendly products, tutorials, “results in 4 weeks” with evidence.', '<strong>Raise instrumentality:</strong> make rewards credible — clear terms, no hidden conditions, guarantees.', '<strong>Raise valence:</strong> offer rewards the target segment actually values — personalise offers.'])}
<h3>Limitations</h3>
${ul(['Assumes people calculate rationally; many purchases are impulsive.', 'Hard to measure the three components precisely.', 'Ignores emotions and habits.'])}`)}
${ex(`<p>A credit card offering “5% back on travel” only motivates if the customer believes they will spend enough (expectancy), trusts the points will actually be credited (instrumentality), and travels often enough to value the reward (valence). Complex redemption rules can drop instrumentality to nearly zero.</p>`)}

<h2>Adams’ equity theory</h2>
${pdf(M, 6, ul([
  'Adams’ Equity Theory of Motivation says that <strong>the relationship between an individual’s inputs (contribution) and their benefits (reward)</strong> is important for their <strong>sense of fairness and equity</strong>, and thus for their motivation.',
  'Adams’ theory says that individuals <strong>want a fair relationship between inputs and outputs</strong>.'
]))}
${D.equity({ title: 'Equity comparison — choose a situation', src: '<span class="tag add">Additional Explanation</span> · interactive' })}
${add(`<p><strong>J. Stacy Adams</strong> (1963) proposed that people compare the ratio of their <strong>outcomes to inputs</strong> with the ratio of a <strong>referent other</strong>. Equal ratios feel fair; unequal ratios create tension that people try to reduce.</p>
${table(['In a consumer setting', 'Examples'], [
  ['Inputs', 'Price paid, time spent, effort, loyalty over years, personal data shared'],
  ['Outcomes', 'Product quality, service, discounts, recognition, convenience'],
  ['Referent others', 'Other customers, friends, new customers offered better deals']
])}
<h3>How consumers react to perceived inequity</h3>
${ul(['Complain, demand refunds or post negative reviews', 'Reduce their inputs (buy less, stop being loyal)', 'Switch brands', 'Change the comparison (“they bought during a sale; that’s different”)'])}
<h3>Marketing applications</h3>
${ul(['<strong>Price fairness:</strong> avoid offering new customers much better deals than loyal ones without a reason.', '<strong>Dynamic and surge pricing</strong> must be explained to feel fair.', '<strong>Service recovery:</strong> compensation after a failure restores equity.', '<strong>Loyalty rewards</strong> recognise the extra inputs of long-term customers.'])}`)}
${ex(`<p>Telecom and OTT subscribers often feel short-changed when new users receive introductory offers that existing users cannot access — a classic equity complaint. Ride-hailing surge pricing during rain draws similar criticism when riders feel the price does not match the service.</p>`)}

<h2>Locke’s goal-setting theory</h2>
${pdf(M, 7, ul([
  '<strong>Locke and Latham</strong> worked both independently and collaboratively in their efforts to study goal-setting.',
  'In <strong>1968</strong>, Locke published their findings.',
  'These findings showed that individuals are motivated by both <strong>appropriate goals</strong> and by <strong>feedback</strong>.'
]))}
${D.grid({ title: 'Principles of effective goals (Locke & Latham)', src: '<span class="tag add">Additional Explanation</span>', min: '8.5rem', items: [
  { t: 'Clarity', tone: 'teal', d: 'Specific goals (“walk 8,000 steps a day”) motivate more than vague ones (“be healthier”).' },
  { t: 'Challenge', tone: 'rose', d: 'Difficult but attainable goals lead to higher performance than easy goals.' },
  { t: 'Commitment', tone: 'lilac', d: 'People must accept the goal; public pledges and self-set goals raise commitment.' },
  { t: 'Feedback', tone: 'accent', d: 'Regular progress feedback lets people adjust effort — the second key point on the slide.' },
  { t: 'Task complexity', tone: 'amber', d: 'Very complex goals need to be broken into smaller steps.' }
] })}
${add(`<p>Edwin Locke’s 1968 paper (“Toward a Theory of Task Motivation and Incentives”) launched the theory; Locke and Gary Latham later summarised decades of research in <em>A Theory of Goal Setting and Task Performance</em> (1990).</p>
<h3>Consumer applications</h3>
${ul(['Fitness bands and apps set daily step or calorie goals with progress rings (goal + feedback).', 'Savings apps let users set a goal amount and show a progress bar.', 'Language apps use daily streaks to keep commitment.', 'Loyalty programmes show “₹500 more to reach Gold” — a specific, near goal that increases spending.'])}`)}
${ex(`<p>E-commerce apps often display “Add ₹149 more for free delivery”. The clear, nearby goal with instant feedback nudges shoppers to increase basket size.</p>`)}

${table(['Theory', 'Core idea', 'Key terms', 'Consumer application'], [
  ['Skinner (reinforcement)', 'Consequences shape future behaviour', 'Operant conditioning, stimulus–response, reinforcement schedules', 'Rewards, cashback, loyalty points'],
  ['Vroom (expectancy)', 'Motivation = E × I × V', 'Expectancy, instrumentality, valence', 'Achievable, credible, valued rewards'],
  ['Adams (equity)', 'Fair ratio of inputs to outcomes vs others', 'Inputs, outcomes, referent other', 'Price fairness, service recovery'],
  ['Locke (goal-setting)', 'Appropriate goals + feedback motivate', 'Clarity, challenge, commitment, feedback', 'Progress bars, streaks, tier targets']
], 'Comparison of the four process theories')}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'content-theories', title: 'Content theories: Maslow, Herzberg, McClelland, Alderfer', pages: '8–9',
    lede: 'Four views of what people need, and how each guides product design and messaging.',
    html: `
<h2>The four content models</h2>
${pdf(M, 9, `<p>The slide lists four content models: <strong>Maslow’s Hierarchy of Needs, Herzberg’s Two-Factor Theory, McClelland’s Theory of Needs and Alderfer’s ERG Theory</strong>.</p>`)}

<h2>Maslow’s hierarchy of needs</h2>
${add(`<p>Covered in detail in ${go('m1', 'maslow', 'Module I')} (CB_MODULE I.pdf, p. 9): physiological, safety, belongingness, esteem and self-actualisation needs, satisfied broadly in order from the bottom up.</p>`)}

<h2>Herzberg’s two-factor theory</h2>
${add(`<p><strong>Frederick Herzberg</strong> (1959, <em>The Motivation to Work</em>, with Mausner and Snyderman) found that the factors causing satisfaction are different from those causing dissatisfaction.</p>
${table(['', 'Hygiene factors (dissatisfiers)', 'Motivators (satisfiers)'], [
  ['Effect when absent', 'Cause dissatisfaction', 'No dissatisfaction, just no delight'],
  ['Effect when present', 'Only prevent dissatisfaction', 'Create satisfaction and motivation'],
  ['Workplace origin', 'Salary, working conditions, policies, job security', 'Achievement, recognition, growth, the work itself'],
  ['Consumer translation', 'Basic expectations: cleanliness, safety, working features, on-time delivery', 'Delighters: personalised touches, surprise upgrades, unique features']
])}
<p><strong>Marketing lesson:</strong> getting the basics right does not create loyalty by itself — it only prevents complaints. Delight comes from motivators. This idea is close to the Kano model of product features (must-be vs attractive qualities).</p>`)}
${ex(`<p>In a hotel, clean rooms and working Wi-Fi are hygiene factors — nobody praises them, but everybody complains if they fail. A handwritten welcome note or a free room upgrade acts as a motivator that earns five-star reviews.</p>`)}

<h2>McClelland’s theory of needs</h2>
${add(`<p><strong>David McClelland</strong> (<em>The Achieving Society</em>, 1961) argued that people acquire three needs through life experience, and one usually dominates:</p>`)}
${D.grid({ title: 'McClelland’s three acquired needs', src: '<span class="tag add">Additional Explanation</span>', min: '10rem', items: [
  { t: 'Need for achievement (nAch)', tone: 'teal', d: 'Desire to excel, master challenges and reach goals. <em>Consumer appeal:</em> self-improvement, performance, skill-building — online certifications, high-performance sports gear, “push your limits” ads.' },
  { t: 'Need for affiliation (nAff)', tone: 'lilac', d: 'Desire for friendly relationships and acceptance. <em>Consumer appeal:</em> sharing, togetherness, belonging — family-pack foods, social apps, group travel, festival gifting.' },
  { t: 'Need for power (nPow)', tone: 'rose', d: 'Desire to influence, control or impress others. <em>Consumer appeal:</em> status, dominance, prestige — powerful SUVs, luxury brands, premium memberships.' }
] })}

<h2>Alderfer’s ERG theory</h2>
${add(`<p><strong>Clayton Alderfer</strong> (1969) compressed Maslow’s five levels into three:</p>
${table(['ERG level', 'Meaning', 'Maslow equivalent', 'Consumer example'], [
  ['Existence', 'Material and physical needs', 'Physiological + safety', 'Food, housing, insurance'],
  ['Relatedness', 'Relationships with others', 'Belongingness + external esteem', 'Gifts, social media, clubs'],
  ['Growth', 'Personal development', 'Internal esteem + self-actualisation', 'Courses, hobbies, travel']
])}
<h3>How ERG differs from Maslow</h3>
${ul(['<strong>Several needs can operate at the same time</strong> — no strict order.', '<strong>Frustration–regression:</strong> if a higher need is blocked, people regress to over-satisfying a lower one. A person frustrated in career growth may spend more on comfort food or shopping.', 'Only three levels, so easier to apply.'])}`)}

<h2>Comparing the four content theories</h2>
${table(['Basis', 'Maslow', 'Herzberg', 'McClelland', 'Alderfer'], [
  ['Year', '1943', '1959', '1961', '1969'],
  ['Number of needs', '5 levels', '2 sets of factors', '3 needs', '3 levels'],
  ['Order', 'Hierarchical', 'Two independent dimensions', 'No order; one dominant', 'Flexible; many at once'],
  ['Key idea', 'Lower needs first', 'Hygiene vs motivators', 'Needs are learned', 'Frustration–regression'],
  ['Marketing use', 'Match product to need level', 'Get basics right; add delighters', 'Appeal to dominant need', 'Address multiple needs together']
])}
${warn('Common mistake', `<p>Do not describe Herzberg’s hygiene factors as “things that motivate”. They only prevent dissatisfaction. Only <em>motivators</em> create satisfaction.</p>`)}
${link('Connects to', `<p>Need-based segmentation and appeals in ${go('m1', 'marketing-strategy', 'Module I strategy')}; the need for power and achievement links to materialism in ${go('m5', 'materialism', 'Module V')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'personality', title: 'Personality: meaning and nature', pages: '10–11',
    lede: 'Two slide definitions of personality and why it matters for brand choice.',
    html: `
<h2>Definitions from the slides</h2>
${pdf(M, 10, ul(['Personality signifies <strong>the inner psychological characteristics that reflect how a person reacts to his environment</strong>.', 'Personality traits are <strong>crucial in consumer decision-making processes</strong>.']))}
${pdf(M, 11, ul(['Personality refers to an individual’s <strong>unique set of characteristics, traits, and patterns of thought, emotion and behaviour</strong> that influence their interactions with the marketplace.', 'It encompasses both <strong>enduring qualities and situational factors</strong> that shape consumer preferences, decision-making processes and brand choices.']))}

${add(`<h2>Nature of personality</h2>
${table(['Feature', 'Meaning', 'Marketing implication'], [
  ['Reflects individual differences', 'No two people have the same combination of traits', 'Segment by traits shared by many people, not by individuals'],
  ['Consistent and enduring', 'Personality is fairly stable over time', 'Useful for predicting broad brand preferences'],
  ['Can change', 'Major life events (marriage, parenthood, job loss) and maturity can shift it', 'Re-target consumers at life transitions'],
  ['Interacts with the situation', 'The same person behaves differently in different contexts (the slide’s “situational factors”)', 'Personality predicts better for some categories than others'],
  ['Inner characteristics', 'Includes traits, attributes, factors and mannerisms', 'Brands give themselves a “personality” to attract consumers with matching traits']
])}
<h3>Brand personality</h3>
<p>Brands are given human characteristics so consumers can relate to them. <strong>Jennifer Aaker (1997)</strong> identified five dimensions of brand personality: <strong>sincerity, excitement, competence, sophistication and ruggedness</strong>. Consumers tend to prefer brands whose personality matches their own or their ideal self (see self-concept).</p>`)}
${ex(`<ul><li><strong>Ruggedness:</strong> Mahindra Thar and Royal Enfield.</li><li><strong>Sincerity:</strong> Amul’s wholesome, honest image.</li><li><strong>Excitement:</strong> energy-drink and youth-fashion brands.</li><li><strong>Competence:</strong> Tata’s reputation for trust and reliability.</li></ul>`)}
${tip('Exam tip', `<p>Start any personality answer with one of the two slide definitions, then name the three theories from p. 12 (trait, Freudian, Neo-Freudian) before explaining them.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'trait-theory', title: 'Trait theory, consumer traits and the Big Five', pages: '12–16',
    lede: 'Measuring personality as a set of stable traits — including five traits that matter specifically to marketers.',
    html: `
<h2>Theories of personality</h2>
${pdf(M, 12, `<p>The slide lists three theories: <strong>the Trait Theory, the Freudian Theory and the Neo-Freudian Theory</strong>.</p>`)}

<h2>The trait theory</h2>
${pdf(M, 13, ul(['People have <strong>different traits that account for their personality</strong>.', 'Traits are <strong>characteristics aiming to predict how individuals might perform in various situations</strong> such as work, school or relationships.']))}
${pdf(M, 14, `<p>The concepts of trait theory: <strong>Stable Characteristics, Individual Differences, Quantitative Measurement</strong>.</p>`)}
${D.grid({ title: 'Three concepts of trait theory', src: P(M, 14), min: '10rem', items: [
  { t: 'Stable characteristics', tone: 'teal', d: 'Traits are relatively enduring — a sociable person tends to be sociable across situations and over time. This stability is what makes prediction possible.' },
  { t: 'Individual differences', tone: 'lilac', d: 'People differ in how much of each trait they have. Everyone has some level of extraversion; the amount varies.' },
  { t: 'Quantitative measurement', tone: 'amber', d: 'Traits can be measured with standardised questionnaires (personality inventories) that give scores — e.g. rating scales from “strongly disagree” to “strongly agree”.' }
] })}
${add(`<p>Trait theorists include <strong>Gordon Allport</strong> (cardinal, central and secondary traits), <strong>Raymond Cattell</strong> (16 personality factors) and <strong>Hans Eysenck</strong> (extraversion, neuroticism, psychoticism). For marketers, the trait approach is the most practical because it produces numbers that can be linked to buying.</p>
<p><strong>Limitation:</strong> general personality traits are often only weak predictors of specific brand choices. That is why researchers developed consumer-specific traits (next section).</p>`)}

<h2>Specific consumer traits</h2>
${pdf(M, 15, `<p>The slide lists five consumer-specific traits: <strong>Consumer Innovativeness, Dogmatism, Materialism, Need for Cognition, Consumer Ethnocentrism</strong>.</p>`)}
${D.grid({ title: 'Five consumer-specific traits', src: P(M, 15), min: '9.5rem', items: [
  { t: 'Consumer innovativeness', tone: 'teal', d: 'How receptive a person is to new products, services and practices. Innovators are early adopters and opinion leaders for new launches. <em>Use:</em> target innovators first with new tech, then use them to spread word-of-mouth.' },
  { t: 'Dogmatism', tone: 'rose', d: 'Rigidity in thinking — the degree to which a person is closed-minded toward unfamiliar ideas. High-dogmatic consumers prefer established brands and respond to authority figures; low-dogmatic ones are open to new products and comparative ads.' },
  { t: 'Materialism', tone: 'amber', d: 'The importance a person places on possessions. Highly materialistic consumers value acquisition and display, link possessions to happiness and success. Detailed in Module V.' },
  { t: 'Need for cognition', tone: 'accent', d: 'How much a person enjoys thinking and effortful information processing. High NFC consumers respond to detailed, fact-based ads; low NFC consumers respond to visual cues, celebrities and music.' },
  { t: 'Consumer ethnocentrism', tone: 'lilac', d: 'The belief that buying domestic products is right and buying foreign products is wrong or unpatriotic. High-ethnocentric consumers respond to “Made in India” and local-pride appeals.' }
] })}
${add(table(['Trait', 'High-scoring consumer', 'How marketers respond', 'Source of the concept'], [
  ['Consumer innovativeness', 'Tries new products early', 'Launch offers, beta programmes, tech-forward messaging', 'Diffusion of innovation research (Rogers)'],
  ['Dogmatism', 'Sticks to familiar brands', 'Authority endorsements; stress heritage and reliability', 'Rokeach’s dogmatism scale'],
  ['Materialism', 'Defines success by possessions', 'Status and display appeals', 'Richins & Dawson (1992)'],
  ['Need for cognition', 'Enjoys detailed information', 'Spec sheets, comparisons, long-form content', 'Cacioppo & Petty (1982)'],
  ['Consumer ethnocentrism', 'Prefers domestic products', '“Make in India”, local-origin labels', 'Shimp & Sharma’s CETSCALE (1987)']
]))}
${ex(`<ul><li><strong>Ethnocentrism:</strong> Patanjali built much of its early growth on a Swadeshi (home-grown) positioning against multinational FMCG brands, and the “Vocal for Local” campaign encouraged buying Indian products.</li><li><strong>Need for cognition:</strong> smartphone launch pages provide detailed spec tables for high-NFC buyers while TV ads for the same phones focus on celebrities and visuals for low-NFC viewers.</li></ul>`)}

<h2>The Big Five (OCEAN) model</h2>
${pdf(M, 16, `<p>The slide lists the five factors: <strong>Openness to Experience, Conscientiousness, Extraversion, Agreeableness, Neuroticism</strong>.</p>`)}
${D.grid({ title: 'Big Five (OCEAN) — select a trait', src: P(M, 16), min: '8.5rem', items: [
  { t: 'Openness to experience', tone: 'teal', d: 'Curious, imaginative, likes variety. <em>Buying:</em> tries new cuisines, travel destinations, novel products; responds to creative, unusual ads.' },
  { t: 'Conscientiousness', tone: 'accent', d: 'Organised, careful, disciplined. <em>Buying:</em> researches thoroughly, plans purchases, values reliability, warranties, health and savings products.' },
  { t: 'Extraversion', tone: 'amber', d: 'Sociable, energetic, seeks stimulation. <em>Buying:</em> enjoys social experiences, visible and trendy products, events, group activities; influenced by social media.' },
  { t: 'Agreeableness', tone: 'lilac', d: 'Cooperative, trusting, kind. <em>Buying:</em> responds to cause-related and ethical marketing, trusts recommendations, less likely to complain.' },
  { t: 'Neuroticism', tone: 'rose', d: 'Prone to anxiety and emotional instability. <em>Buying:</em> more sensitive to perceived risk; values reassurance, guarantees, comfort products; may engage in compensatory or impulse buying.' }
] })}
${add(`<p>The Big Five emerged from decades of research; it is especially associated with <strong>Paul Costa and Robert McCrae</strong> (NEO personality inventory) and <strong>Lewis Goldberg</strong>. Each factor is a continuum — people score high or low, not “have” or “don’t have” it. Mnemonic: <strong>OCEAN</strong> (or CANOE).</p>`)}
${warn('Common mistake', `<p>Neuroticism in the Big Five means emotional instability and anxiety, not a clinical disorder. Describe it as “tendency to experience negative emotions”.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'freudian-theories', title: 'Freudian and Neo-Freudian theories', pages: '12, 17–19',
    lede: 'Unconscious drives and social relationships as explanations of what we buy.',
    html: `
<h2>The Freudian theory</h2>
${pdf(M, 17, `<p>The slide shows the three parts of personality in Freud’s theory: <strong>Id, Ego, Super Ego</strong>.</p>`)}
${D.triad({ title: 'Freud’s structure of personality', src: P(M, 17), bridges: ['ego mediates →', '← ego mediates'], items: [
  { t: 'Id', s: 'pleasure principle', tone: 'rose', d: 'The primitive, unconscious part seeking <strong>immediate gratification</strong> of urges — hunger, pleasure, desire. It wants it <em>now</em>. <em>Consumer:</em> the urge to buy that dessert or gadget on impulse.' },
  { t: 'Ego', s: 'reality principle', tone: 'accent', d: 'The conscious, rational part that <strong>balances</strong> the id’s desires against the superego’s rules and reality. <em>Consumer:</em> “I’ll buy it, but on EMI and only after checking reviews” — a compromise.' },
  { t: 'Super ego', s: 'moral conscience', tone: 'teal', d: 'The internalised <strong>moral and social standards</strong> learned from parents and society. It creates guilt when we break rules. <em>Consumer:</em> feeling guilty about overspending or about eating junk food.' }
] })}
${add(`<p><strong>Sigmund Freud</strong> argued that human behaviour is largely driven by <strong>unconscious needs and drives</strong>, especially biological urges, and that personality develops through the conflict between the id and the superego, managed by the ego.</p>
<h3>Applications in consumer behaviour</h3>
${ul([
  '<strong>Products as symbols:</strong> consumers may buy products that satisfy unconscious needs; the stated reason may not be the real one.',
  '<strong>Motivational research:</strong> Ernest Dichter applied Freudian ideas in the 1950s, using depth interviews and projective techniques (word association, sentence completion, picture interpretation) to uncover hidden motives.',
  '<strong>Messaging:</strong> ads often appeal to the id (indulgence, pleasure) while giving the superego a reason to approve (“guilt-free”, “made with real fruit”, “you deserve it”).'
])}
<h3>Criticisms</h3>
${ul(['Hard to test scientifically', 'Built mostly on clinical observations', 'Over-emphasises sexual and biological drives'])}`)}
${ex(`<p>Chocolate and ice-cream ads in India often show indulgence (id) paired with a socially acceptable reason such as celebration or sharing with family (superego), letting the ego approve the purchase. “Guilt-free” and “no added sugar” labels do the same job.</p>`)}

<h2>The Neo-Freudian theory</h2>
${pdf(M, '18–19', `<p>Slides 18 and 19 (titled “The non Freudian theory”; both slides carry identical content) list three personality types: <strong>Compliant Personalities, Aggressive Personalities, Detached Personalities</strong>. Slide 12 names this approach the <strong>Neo-Freudian Theory</strong>.</p>`)}
${D.grid({ title: 'Horney’s CAD typology', src: P(M, '18–19'), min: '10rem', items: [
  { t: 'Compliant', s: 'moving toward people', tone: 'teal', d: 'Want to be loved, wanted and appreciated. Prefer well-known, popular brands and products that help them fit in. <em>Marketing:</em> social approval appeals, “India’s most trusted brand”, family-acceptance themes.' },
  { t: 'Aggressive', s: 'moving against people', tone: 'rose', d: 'Want to excel, win admiration and have power. Prefer products that signal distinction and success. <em>Marketing:</em> competitive, achievement and status appeals — performance bikes, premium cars, “be the best”.' },
  { t: 'Detached', s: 'moving away from people', tone: 'lilac', d: 'Want independence, self-sufficiency and freedom from obligations. Less brand-loyal, less influenced by social pressure. <em>Marketing:</em> individuality, privacy, self-reliance appeals.' }
] })}
${add(`<p>Neo-Freudians kept Freud’s idea of unconscious motivation but argued that <strong>social relationships</strong> matter more than biological drives in forming personality.</p>
${ul([
  '<strong>Karen Horney</strong> proposed the three orientations above, now known as the <strong>CAD typology</strong>. Joel Cohen (1967) built a CAD scale and found, for example, that compliant people tended to prefer known brands of products like mouthwash and soap, aggressive people preferred razors over electric shavers, and detached people showed the least brand awareness.',
  '<strong>Alfred Adler</strong> emphasised the striving for superiority and overcoming feelings of inferiority.',
  '<strong>Harry Stack Sullivan</strong> emphasised that people continually try to build relationships to reduce tension and anxiety.'
])}`)}
${table(['Basis', 'Freudian', 'Neo-Freudian', 'Trait'], [
  ['Main driver', 'Unconscious biological drives', 'Social relationships', 'Measurable stable traits'],
  ['Key concepts', 'Id, ego, superego', 'Compliant, aggressive, detached', 'Big Five, consumer-specific traits'],
  ['Method', 'Depth interviews, projective techniques', 'CAD scale, qualitative study', 'Personality inventories, rating scales'],
  ['Marketing use', 'Symbolism, hidden motives', 'Social-orientation appeals', 'Segmentation by measured traits'],
  ['Weakness', 'Hard to test', 'Simplifies people into three types', 'Weak link to specific brand choice']
], 'Comparing the three theories of personality')}
${warn('Watch the naming', `<p>Your PDF uses both “Neo-Freudian” (p. 12) and “non Freudian” (pp. 18–19) for the same content. Use <strong>Neo-Freudian</strong> in the exam — it is the standard textbook term — and mention Karen Horney.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'self-concept', title: 'Self-concept (introduction)', pages: '20–21',
    lede: 'How we see ourselves, and how that shapes what we buy. Module IV develops this further.',
    html: `
<h2>What self-concept is</h2>
${pdf(M, 20, ul([
  'Self-concept is the <strong>multidimensional perception of who we are</strong>, including self-esteem and self-image.',
  'It <strong>evolves through experiences</strong>, especially in childhood and adolescence, influenced by social and environmental factors.',
  'Self-concept affects <strong>communication, achievement and behaviour</strong>, with activities like journaling aiding its growth.'
]))}

<h2>Components of self-concept</h2>
${pdf(M, 21, `<p>The slide shows three components: <strong>Self-Image, Self-Esteem, Ideal Self</strong>.</p>`)}
${D.grid({ title: 'Three components of self-concept', src: P(M, 21), min: '10rem', items: [
  { t: 'Self-image', tone: 'teal', d: 'How we see ourselves right now — our mental picture of our appearance, abilities and personality. It need not match reality.' },
  { t: 'Self-esteem', tone: 'amber', d: 'How much we value ourselves — the evaluative, feeling part of self-concept. High self-esteem buyers may be less dependent on brands for confidence; low self-esteem buyers may use products to feel better.' },
  { t: 'Ideal self', tone: 'lilac', d: 'The person we would like to be. Aspirational advertising targets the gap between self-image and ideal self.' }
] })}
${add(`<p>This three-part model comes from the humanistic psychologist <strong>Carl Rogers</strong>. When self-image and ideal self are close, the person feels <em>congruent</em>; a large gap creates discomfort that consumers often try to close through products — fitness, fashion, education, grooming.</p>
<h3>Marketing applications</h3>
${ul(['Brands that match the actual self feel comfortable and authentic.', 'Brands that match the ideal self feel aspirational.', 'Products can boost self-esteem: grooming, fashion, fitness.', 'Messaging that threatens self-esteem (“Are you embarrassed by…?”) uses the gap — but must be handled ethically.'])}`)}
${ex(`<p>Fairness-cream advertising long played on the gap between self-image and an “ideal” appearance. Changing social values led Hindustan Unilever to rename Fair &amp; Lovely as <strong>Glow &amp; Lovely</strong> in 2020 and drop “fair” language — showing how self-concept appeals must respect evolving values.</p>`)}
${link('Continues in Module IV', `<p>Six types of self, the extended self and self-image congruence theory are covered in ${go('m4', 'types-of-self', 'Module IV: Self-concept')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'perception', title: 'Perception and its stages', pages: '22–24',
    lede: 'How consumers form opinions and beliefs about a brand: exposure, attention, interpretation, retention.',
    html: `
<h2>Customer perception</h2>
${pdf(M, 22, ul([
  'Customer perception is <strong>the opinions, feelings and beliefs customers have about your brand</strong>.',
  'It plays an important role in building <strong>customer loyalty and retention</strong> as well as <strong>brand reputation and awareness</strong>.'
]))}
${add(`<p>More generally, <strong>perception</strong> is the process by which a person <strong>selects, organises and interprets</strong> information to create a meaningful picture of the world. Consumers act on their perceptions, not on objective reality — so in marketing, <em>perception is reality</em>.</p>`)}

<h2>Stages of perception</h2>
${pdf(M, 23, `<p>The slide shows four stages in sequence: <strong>Exposure → Attention → Interpretation → Retention</strong>.</p>`)}
${D.flow({ title: 'Stages of perception', src: P(M, 23), numbered: true, items: [
  { t: 'Exposure', tone: 'rose', d: 'The stimulus comes within range of the consumer’s senses — they see the hoarding, hear the jingle, scroll past the ad. Exposure can be deliberate (searching) or accidental. Consumers also avoid exposure: skipping ads, ad-blockers.' },
  { t: 'Attention', tone: 'amber', d: 'The consumer allocates mental capacity to the stimulus. Attention is selective (Module I, p. 20). It is drawn by size, colour, contrast, movement, novelty, and relevance to current needs.' },
  { t: 'Interpretation', tone: 'lilac', d: 'The consumer gives meaning to the stimulus, using past experience, expectations and context. Different consumers can interpret the same ad differently (selective distortion).' },
  { t: 'Retention', tone: 'teal', d: 'The interpreted meaning is stored in memory and can be recalled at the time of purchase. Consumers retain information that supports their beliefs (selective retention).' }
] })}
${add(table(['Stage', 'What helps the marketer', 'What gets in the way'], [
  ['Exposure', 'Right media placement, search ads, wide distribution', 'Ad-avoidance, clutter, skipping'],
  ['Attention', 'Contrast, colour, movement, surprise, personal relevance, celebrities', 'Information overload, low involvement'],
  ['Interpretation', 'Clear messages, familiar symbols, consistent branding', 'Ambiguity, cultural misreading, prior negative beliefs'],
  ['Retention', 'Repetition, jingles, mnemonics, emotional stories', 'Forgetting, competitor messages, interference']
]))}

${more('More perceptual concepts often asked in exams', add(`${table(['Concept', 'Meaning', 'Example'], [
  ['Absolute threshold', 'The minimum level of a stimulus a person can detect', 'A roadside hoarding too small to read at driving speed is below threshold.'],
  ['Differential threshold (JND)', 'The smallest change in a stimulus that people notice; described by <strong>Weber’s law</strong> — the stronger the initial stimulus, the bigger the change needed to notice it', 'Brands reduce pack size slightly (below JND) rather than raise a familiar price; logos are refreshed in small steps.'],
  ['Subliminal perception', 'Perception of stimuli below conscious awareness; its effect on buying is widely debated and generally considered weak', 'Claims about hidden messages in ads.'],
  ['Gestalt organisation', 'People see wholes rather than parts: figure–ground, grouping, closure', 'Logos with missing parts that the mind “closes”.'],
  ['Perceived risk', 'Uncertainty about consequences: functional, financial, physical, social, psychological, time', 'Free returns and warranties reduce perceived risk online.'],
  ['Price–quality inference', 'Using price as a signal of quality when other information is lacking', 'Assuming a costlier wine or perfume is better.']
])}`))}

${ex(`<ul>
<li><strong>Attention:</strong> Amul’s topical hoardings comment on current events with the Amul girl mascot. The novelty and humour win attention, and the consistent mascot helps interpretation and retention.</li>
<li><strong>Interpretation:</strong> the same “50% off” banner may signal a bargain to one shopper and poor quality to another.</li>
<li><strong>Retention:</strong> jingles and sonic logos are designed to be remembered and recalled in the store.</li>
</ul>`)}

<h2>Reference links listed in the PDF</h2>
${pdf(M, 24, `<p>The module’s reference slide lists two further-reading links on customer perception:</p>
${ul(['<a href="https://www.zendesk.com/in/blog/customer-experience/loyalty/simple-guide-customer-perception/" rel="noopener" target="_blank">Zendesk — a simple guide to customer perception</a>', '<a href="https://pulseairesearch.com/pulse-shift/blogs/23/perception_in_consumer_behaviour_meaning_process_examples_impact" rel="noopener" target="_blank">Pulse AI Research — perception in consumer behaviour</a>'])}`)}

${link('Connects to', `<p>The selective processes (attention, distortion, retention) are listed as psychological factors in ${go('m1', 'psychological-personal-factors', 'Module I')}. Colour and shape psychology in ${go('m3', 'branding', 'Module III')} and semiotics in ${go('m4', 'semiotics', 'Module IV')} are applications of perception.</p>`)}
${tip('Diagram to practise', `<p>Draw the four-stage arrow (Exposure → Attention → Interpretation → Retention) and write one factor that helps marketers under each box.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'exam', kind: 'exam', title: 'Exam preparation: Module II',
    lede: 'Answer frameworks, important questions and common mistakes for Module II.',
    html: `
<h2>5-mark answer frameworks</h2>
${answer(5, 'Distinguish between process and content theories of motivation.', `${ol(['Define both (“how” vs “what”) — pp. 2, 8.', 'List the four models of each — pp. 3, 9.', 'Comparison table: focus, nature, marketing use, example.'])}`)}
${answer(5, 'Explain Vroom’s expectancy theory.', `${ol(['Core idea: motivation depends on expectations about the future.', 'Formula M = E × I × V with each term defined.', 'Multiplicative point: any zero → no motivation.', 'Consumer example: a loyalty programme.'])}<p class="meta">Diagram: E × I × V chain.</p>`)}
${answer(5, 'Write a note on consumer ethnocentrism.', `${ol(['Definition: preference for domestic products, belief that buying foreign is wrong.', 'Shimp &amp; Sharma’s CETSCALE (1987).', 'Indian example: Swadeshi positioning, “Vocal for Local”.', 'Marketing implication for domestic and foreign brands.'])}`)}
${answer(5, 'Explain the stages of perception.', `${ol(['Definition of customer perception (p. 22).', 'Four stages (p. 23) with one line each.', 'One example running through all four stages.'])}`)}

<h2>10-mark answer frameworks</h2>
${answer(10, 'Explain the process theories of motivation and their relevance to consumer behaviour.', `${ol(['Introduction: process theories focus on “how” (p. 2).', 'Skinner: reinforcement, operant conditioning, stimulus–response, schedules; example.', 'Vroom: E × I × V with diagram; example.', 'Adams: input–outcome ratio, referent other; example of price fairness.', 'Locke: goals + feedback, five principles; example of progress bars.', 'Comparison table and conclusion.'])}`)}
${answer(10, 'Discuss the content theories of motivation.', `${ol(['Introduction (p. 8).', 'Maslow (brief, refer to pyramid).', 'Herzberg: hygiene vs motivators table.', 'McClelland: achievement, affiliation, power with appeals.', 'Alderfer: ERG, frustration–regression.', 'Comparison table and conclusion.'])}`)}
${answer(10, 'Explain the trait theory of personality and specific consumer traits.', `${ol(['Definition of personality (pp. 10–11).', 'Trait theory and its three concepts (pp. 13–14).', 'Five consumer traits with implications (p. 15).', 'Big Five with buying behaviour (p. 16).', 'Limitations.'])}`)}
${answer(10, 'Explain Freudian and Neo-Freudian theories of personality with marketing applications.', `${ol(['Freud: id, ego, superego (diagram), unconscious motives.', 'Applications: symbolism, motivational research, guilt-free appeals.', 'Neo-Freudian: Horney’s CAD types with marketing appeals; Cohen’s findings.', 'Comparison and criticisms.'])}`)}

<h2>15-mark answer frameworks</h2>
${answer(15, 'What is personality? Critically discuss the theories of personality and their relevance to marketers.', `${ol(['Two definitions (pp. 10–11) and nature of personality.', 'Three theories (p. 12).', 'Trait theory: concepts, consumer traits, Big Five.', 'Freudian theory: structure, applications, criticism.', 'Neo-Freudian: CAD typology.', 'Comparison table.', 'Brand personality (Aaker) as an application.', 'Critical evaluation: personality predicts category preferences better than specific brands.', 'Conclusion.'])}`)}
${answer(15, 'Motivation is the key to understanding consumer behaviour. Discuss with reference to content and process theories.', `${ol(['Motivation process diagram.', 'Content theories (four) with one consumer application each.', 'Process theories (four) with one consumer application each.', 'Integrated example: why a person joins a gym and stays (Maslow esteem, Vroom E × I × V, Locke goals, Skinner rewards, Adams fairness of fee).', 'Conclusion.'])}`)}
${answer(15, 'Explain the role of perception and self-concept in consumer decision-making.', `${ol(['Perception definition and importance (p. 22).', 'Four stages with marketing actions (p. 23).', 'Selective processes and thresholds.', 'Self-concept definition and components (pp. 20–21).', 'How perception of a brand interacts with self-image and ideal self.', 'Indian examples and conclusion.'])}`)}

<h2>Important questions for revision</h2>
${qs([
  ['Differentiate between process and content theories of motivation.', '5'],
  ['Explain Skinner’s reinforcement theory with consumer examples.', '5'],
  ['Explain Vroom’s expectancy theory. How can marketers use it?', '10'],
  ['Discuss Adams’ equity theory in the context of pricing.', '5'],
  ['Explain Locke’s goal-setting theory.', '5'],
  ['Compare Maslow’s and Alderfer’s theories.', '5'],
  ['Explain Herzberg’s two-factor theory with marketing implications.', '5'],
  ['Explain McClelland’s theory of needs.', '5'],
  ['Define personality and explain its nature.', '5'],
  ['Discuss the trait theory of personality.', '10'],
  ['Explain specific consumer traits.', '10'],
  ['Explain the Big Five model.', '5'],
  ['Explain Freud’s psychoanalytic theory in consumer behaviour.', '10'],
  ['Explain Horney’s CAD theory.', '5'],
  ['What is self-concept? Explain its components.', '5'],
  ['Explain the stages of perception.', '10']
])}

<h2>Common mistakes to avoid</h2>
${warn('Watch out for these', ul([
  'Mixing up instrumentality and expectancy. Expectancy = effort → performance; instrumentality = performance → reward.',
  'Adding Vroom’s terms instead of multiplying them.',
  'Saying hygiene factors motivate.',
  'Listing Big Five traits without consumer implications.',
  'Confusing the ego with “egoism”. In Freud, ego is the rational mediator.',
  'Writing only “Freudian” and forgetting the Neo-Freudian CAD types.'
]))}

<h2>Interconnections to mention</h2>
${ul(['Skinner (Module II) ↔ operant conditioning in attitude formation (Module III).', 'Maslow appears in both Module I and Module II.', 'Self-concept (Module II) → types of self and self-image congruence (Module IV).', 'Materialism as a consumer trait (Module II) → consumer materialism (Module V).', 'Perception stages (Module II) ↔ selective processes (Module I) ↔ semiotics (Module IV).'])}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'revision', kind: 'rev', title: 'Revision notes: Module II',
    lede: 'Summary, key terms and quick-recall points.',
    html: `
<h2>Module summary</h2>
<p>Motivation theories come in two families. <strong>Process theories</strong> explain how motivation works (p. 2): Skinner’s reinforcement (operant conditioning, stimulus–response), Vroom’s expectancy (valence, expectancy, instrumentality), Adams’ equity (fair ratio of inputs to outputs) and Locke’s goal-setting (appropriate goals plus feedback, 1968) (pp. 3–7). <strong>Content theories</strong> explain what motivates (p. 8): Maslow, Herzberg, McClelland and Alderfer (p. 9).</p>
<p><strong>Personality</strong> is the set of inner psychological characteristics that shape how a person reacts to the environment and the marketplace (pp. 10–11). It is explained by trait, Freudian and Neo-Freudian theories (p. 12). Trait theory relies on stable characteristics, individual differences and quantitative measurement (pp. 13–14), and includes five consumer traits (p. 15) and the Big Five (p. 16). Freud describes id, ego and superego (p. 17); Neo-Freudians describe compliant, aggressive and detached personalities (pp. 18–19).</p>
<p><strong>Self-concept</strong> is our multidimensional perception of who we are, made of self-image, self-esteem and ideal self (pp. 20–21). <strong>Perception</strong> is customers’ opinions, feelings and beliefs about a brand, formed through exposure, attention, interpretation and retention (pp. 22–23).</p>

<h2>Key terminology</h2>
${terms([
  ['Process theories', 'Explain how motivation happens.'],
  ['Content theories', 'Explain what needs motivate.'],
  ['Operant conditioning', 'Learning through consequences of one’s actions.'],
  ['Valence', 'The value a person places on a reward.'],
  ['Expectancy', 'Belief that effort leads to good results.'],
  ['Instrumentality', 'Belief that good results lead to a reward.'],
  ['Equity', 'A fair balance between inputs and outcomes compared with others.'],
  ['Hygiene factors', 'Absence causes dissatisfaction; presence only prevents it.'],
  ['ERG', 'Existence, Relatedness, Growth.'],
  ['Personality', 'Inner psychological characteristics reflecting how a person reacts to the environment.'],
  ['Dogmatism', 'Rigidity toward the unfamiliar.'],
  ['Need for cognition', 'Enjoyment of thinking and detailed information.'],
  ['Consumer ethnocentrism', 'Preference for domestic products.'],
  ['OCEAN', 'Openness, Conscientiousness, Extraversion, Agreeableness, Neuroticism.'],
  ['Id / Ego / Superego', 'Pleasure-seeking / rational mediator / moral conscience.'],
  ['CAD', 'Compliant, Aggressive, Detached (Horney).'],
  ['Self-concept', 'Multidimensional perception of who we are.'],
  ['Perception', 'Opinions, feelings and beliefs customers have about a brand.'],
  ['JND', 'Smallest noticeable difference between two stimuli (Weber’s law).']
])}

<h2>Quick-recall points</h2>
${ul([
  '<strong>Process (SVAL):</strong> Skinner, Vroom, Adams, Locke.',
  '<strong>Content (MHMA):</strong> Maslow, Herzberg, McClelland, Alderfer.',
  '<strong>Vroom:</strong> M = E × I × V.',
  '<strong>Locke 1968:</strong> appropriate goals + feedback.',
  '<strong>Personality theories (3):</strong> Trait, Freudian, Neo-Freudian.',
  '<strong>Trait concepts (3):</strong> stable, individual differences, quantitative measurement.',
  '<strong>Consumer traits (5):</strong> innovativeness, dogmatism, materialism, need for cognition, ethnocentrism.',
  '<strong>Self-concept (3):</strong> self-image, self-esteem, ideal self.',
  '<strong>Perception stages (4):</strong> Exposure → Attention → Interpretation → Retention.'
])}
${tip('Mnemonic for perception stages', `<p><strong>“Every Apple Is Red”</strong> — Exposure, Attention, Interpretation, Retention.</p>`)}
`});

  CB.addModule({
    id: 'm2', n: 2, num: 'II', file: 'CB_Module II.pdf', pages: 25,
    title: 'Consumer Behaviour: Motivation, Personality, Self-Concept and Perception',
    navTitle: 'Motivation, Personality & Perception',
    blurb: 'Process and content theories of motivation, theories of personality and consumer traits, self-concept and the stages of perception.',
    lede: 'The PDF is titled “Consumer behaviour — Module II”. It covers the individual consumer: what motivates them, how personality shapes choices, how they see themselves, and how they perceive brands.',
    objectives: [
      'Distinguish process theories from content theories of motivation.',
      'Explain Skinner, Vroom, Adams and Locke, and apply each to buying and loyalty.',
      'Explain Maslow, Herzberg, McClelland and Alderfer, and compare them.',
      'Define personality and describe its nature.',
      'Explain trait theory, the five consumer-specific traits and the Big Five.',
      'Explain Freud’s id, ego and superego and Horney’s CAD typology with marketing applications.',
      'Describe the components of self-concept.',
      'Explain the four stages of perception and their marketing implications.'
    ],
    topics: topics
  });

  CB.addTerms('m2', [
    ['Motivation', 'motivation-overview', 'The inner drive that impels a person to act to satisfy a need.'],
    ['Process theories of motivation', 'motivation-overview', 'Theories of how motivation happens: Skinner, Vroom, Adams, Locke.'],
    ['Content theories of motivation', 'motivation-overview', 'Theories of what motivates: Maslow, Herzberg, McClelland, Alderfer.'],
    ['Skinner’s reinforcement theory', 'process-theories', 'Responses to behaviour change future behaviour; operant conditioning, stimulus–response.'],
    ['Positive and negative reinforcement', 'process-theories', 'Adding a pleasant outcome or removing an unpleasant one; both increase behaviour.'],
    ['Schedules of reinforcement', 'process-theories', 'Continuous, fixed ratio, variable ratio and interval reward patterns.'],
    ['Vroom’s expectancy theory', 'process-theories', 'Motivation = expectancy × instrumentality × valence (1964).'],
    ['Valence', 'process-theories', 'The value a person places on a reward (Vroom).'],
    ['Expectancy', 'process-theories', 'Belief that effort will produce good results (Vroom).'],
    ['Instrumentality', 'process-theories', 'Belief that good results will lead to a reward (Vroom).'],
    ['Adams’ equity theory', 'process-theories', 'Fairness of one’s input–outcome ratio compared with a referent other.'],
    ['Referent other', 'process-theories', 'The person someone compares themselves with in equity theory.'],
    ['Locke’s goal-setting theory', 'process-theories', 'Appropriate goals and feedback motivate (Locke 1968; Locke and Latham).'],
    ['Herzberg’s two-factor theory', 'content-theories', 'Hygiene factors prevent dissatisfaction; motivators create satisfaction.'],
    ['Hygiene factors', 'content-theories', 'Basic expectations whose absence causes dissatisfaction.'],
    ['McClelland’s theory of needs', 'content-theories', 'Needs for achievement, affiliation and power.'],
    ['Alderfer’s ERG theory', 'content-theories', 'Existence, relatedness, growth; frustration–regression.'],
    ['Frustration–regression', 'content-theories', 'When a higher need is blocked, a person falls back on a lower need.'],
    ['Personality', 'personality', 'Inner psychological characteristics reflecting how a person reacts to the environment.'],
    ['Brand personality (Aaker)', 'personality', 'Sincerity, excitement, competence, sophistication, ruggedness.'],
    ['Trait theory', 'trait-theory', 'Personality as measurable, stable traits that differ between individuals.'],
    ['Consumer innovativeness', 'trait-theory', 'Receptiveness to new products and practices.'],
    ['Dogmatism', 'trait-theory', 'Rigidity or closed-mindedness toward unfamiliar ideas.'],
    ['Need for cognition', 'trait-theory', 'Enjoyment of thinking and effortful information processing.'],
    ['Consumer ethnocentrism', 'trait-theory', 'Belief that buying domestic products is right; CETSCALE.'],
    ['Big Five (OCEAN)', 'trait-theory', 'Openness, conscientiousness, extraversion, agreeableness, neuroticism.'],
    ['Freudian theory', 'freudian-theories', 'Personality from unconscious drives; id, ego and superego.'],
    ['Id, ego, superego', 'freudian-theories', 'Pleasure principle, reality principle and moral conscience.'],
    ['Motivational research', 'freudian-theories', 'Dichter’s use of depth interviews and projective techniques to find hidden motives.'],
    ['Neo-Freudian theory', 'freudian-theories', 'Social relationships shape personality; Horney, Adler, Sullivan.'],
    ['CAD typology (Horney)', 'freudian-theories', 'Compliant, aggressive and detached personalities.'],
    ['Self-image, self-esteem, ideal self', 'self-concept', 'The three components of self-concept (Rogers).'],
    ['Customer perception', 'perception', 'Opinions, feelings and beliefs customers have about a brand.'],
    ['Stages of perception', 'perception', 'Exposure, attention, interpretation, retention.'],
    ['Just noticeable difference (JND)', 'perception', 'Smallest detectable change in a stimulus; Weber’s law.'],
    ['Perceived risk', 'perception', 'Uncertainty about functional, financial, physical, social, psychological or time consequences.']
  ]);
})();
