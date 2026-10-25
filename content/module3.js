/* Module III — source: CB_MODULE III.pdf (10 pages) */
(function () {
  'use strict';
  var H = CB.H, P = H.P, pdf = H.pdf, add = H.add, ex = H.ex, tip = H.tip, warn = H.warn, link = H.link,
    more = H.more, table = H.table, terms = H.terms, answer = H.answer, qs = H.qs, ul = H.ul, ol = H.ol, go = H.go;
  var M = 3;
  var topics = [];

  /* ---------------------------------------------------- */
  topics.push({
    id: 'branding', title: 'Branding and consumer behaviour', pages: '2',
    lede: 'Four branding levers that work on consumer psychology: colour, shape, consistency and emotion.',
    html: `
<h2>Branding &gt;&gt; consumer behaviour</h2>
${pdf(M, 2, `<p>The slide lists four ways branding acts on consumer behaviour: <strong>Colour Psychology</strong>; <strong>Shape and Symbolism</strong>; <strong>Brand Consistency: Building Trust &amp; Recognition</strong>; and <strong>Emotional Branding: Creating Deep Connections</strong>.</p>`)}
${add(`<p>Branding sits in a module on learning because consumers <em>learn</em> brands. Every time they see the same colour, shape and tone paired with a good experience, the association grows stronger — classical and operant conditioning at work (see ${go('m3', 'attitude-formation', 'attitude formation')}).</p>`)}

${D.hub({ title: 'Four branding levers', src: P(M, 2), core: 'Brand in the<br>consumer’s mind', items: [
  { t: 'Colour psychology', tone: 'teal', d: 'Colours trigger associations and emotions and are processed fast — often before words. They aid recognition on crowded shelves and screens.' },
  { t: 'Shape and symbolism', tone: 'accent', d: 'Logo shapes and symbols carry meaning: rounded forms feel friendly, angular forms feel strong and precise; symbols tell a story in one glance.' },
  { t: 'Brand consistency', s: 'trust & recognition', tone: 'lilac', d: 'Using the same name, logo, colours, tone of voice and quality across every touchpoint builds recognition and, over time, trust.' },
  { t: 'Emotional branding', s: 'deep connections', tone: 'rose', d: 'Linking the brand to feelings, memories, relationships and identity so consumers feel attached rather than just satisfied.' }
] })}

<h2>Colour psychology</h2>
${add(table(['Colour', 'Common associations', 'Typical use'], [
  ['Red', 'Energy, excitement, urgency, appetite', 'Food delivery, sales banners, soft drinks'],
  ['Blue', 'Trust, security, calm, competence', 'Banks, insurance, technology, payments'],
  ['Green', 'Nature, health, freshness, sustainability', 'Organic food, grocery, eco-friendly products'],
  ['Yellow', 'Optimism, warmth, attention-grabbing', 'Value retail, fast food, children’s products'],
  ['Orange', 'Enthusiasm, friendliness, affordability', 'Food apps, telecom, youth brands'],
  ['Black / gold', 'Luxury, sophistication, power', 'Premium cosmetics, luxury goods, premium cards'],
  ['White', 'Simplicity, purity, cleanliness', 'Healthcare, tech minimalism']
]))}
${warn('Colour meaning is cultural', `<p>Colour associations are learned, not universal. In much of India, <strong>red</strong> is the colour of brides and auspicious occasions, while in some Western contexts brides wear white; in parts of India and East Asia <strong>white</strong> is linked with mourning. Global brands adapt packaging and festive campaigns accordingly. This links to the socio-cultural environment in ${go('m4', 'culture', 'Module IV')}.</p>`)}
${ex(`<ul><li><strong>Red for appetite and urgency:</strong> Zomato’s red identity and the red “SALE” banners used across Indian e-commerce.</li><li><strong>Blue for trust:</strong> many banks and payment apps use blue as their primary colour.</li><li><strong>Distinctive colour ownership:</strong> Cadbury’s purple is so strongly linked to the brand that shoppers can recognise it from a distance.</li></ul>`)}

<h2>Shape and symbolism</h2>
${add(`${ul([
  '<strong>Rounded shapes</strong> (circles, soft curves) suggest friendliness, community, softness — common for family and food brands.',
  '<strong>Angular shapes</strong> (squares, triangles) suggest stability, strength, precision — common for engineering, finance and automotive brands.',
  '<strong>Vertical lines</strong> suggest strength and aspiration; <strong>horizontal lines</strong> suggest calm and stability.',
  '<strong>Symbols and mascots</strong> compress a brand story into one image and are easier to remember than words.',
  '<strong>Packaging shape</strong> can become a trademark in itself (a distinctive bottle silhouette).'
])}`)}
${ex(`<ul><li>The <strong>Amul girl</strong> mascot has represented Amul in topical advertising for decades, giving a consistent, friendly symbol across thousands of ads.</li><li>Air India’s <strong>Maharaja</strong> mascot long symbolised royal Indian hospitality.</li></ul>`)}

<h2>Brand consistency: building trust and recognition</h2>
${add(`<p>When a brand looks, sounds and performs the same way everywhere, consumers learn it faster and trust it more. Consistency works through:</p>
${ul(['<strong>Repetition</strong> — repeated exposure strengthens memory (retention stage of perception).', '<strong>Mere-exposure effect</strong> — Robert Zajonc (1968) showed that people tend to like things more simply because they are familiar.', '<strong>Reduced perceived risk</strong> — a consistent experience signals reliability.', '<strong>Stimulus generalisation</strong> — positive feelings transfer to new products carrying the same brand cues.'])}
<p>Consistency covers visual identity, tone of voice, product quality, customer service and values. Inconsistency confuses consumers and weakens associations.</p>`)}

<h2>Emotional branding: creating deep connections</h2>
${add(`<p>Emotional branding aims to make consumers <em>feel</em> something about the brand — joy, nostalgia, pride, belonging — so that the relationship goes beyond functional benefits. Emotionally attached consumers are more loyal, less price-sensitive and more forgiving of occasional failures.</p>
${ul(['Storytelling about people, families and relationships', 'Linking the brand to rituals and festivals', 'Purpose-driven messaging (values the consumer shares)', 'Nostalgia — reviving older packaging or jingles'])}`)}
${ex(`<ul><li><strong>Cadbury Dairy Milk</strong> has long linked chocolate to celebrations and sweet moments in Indian life, positioning a snack as part of emotional rituals.</li><li><strong>Google’s 2013 “Reunion” ad</strong> told the story of two old friends separated by Partition being reunited, connecting a search engine to deep emotion.</li></ul>`)}

${link('Connects to', `<p>Emotional vs rational buying in ${go('m1', 'emotional-rational', 'Module I')}; semiotics of branding and packaging in ${go('m4', 'semiotics', 'Module IV')}; perception and attention in ${go('m2', 'perception', 'Module II')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'attitude', title: 'Attitude: meaning and characteristics', pages: '3',
    lede: 'What an attitude is, where it comes from, and why marketers care about it.',
    html: `
<h2>Meaning of attitude</h2>
${pdf(M, 3, ul([
  'Attitudes are <strong>sets of emotions and beliefs that directly influence human behaviour</strong>.',
  'They are <strong>shaped by our life experiences, upbringing, education and social influences</strong>.',
  'Attitude in consumer behaviour refers to <strong>the overall evaluation or emotional response individuals hold toward a particular product, brand, service or experience</strong>.'
]))}
${add(`<p>A widely quoted textbook definition (Schiffman &amp; Kanuk) describes attitude as <strong>a learned predisposition to behave in a consistently favourable or unfavourable way with respect to a given object</strong>. The “object” can be a product, brand, service, price, advertisement, retailer or idea.</p>
<h3>Characteristics of attitudes</h3>
${table(['Characteristic', 'Meaning', 'Example'], [
  ['Learned', 'Formed through experience, information and social influence — not inborn (links to the slide’s “life experiences, upbringing, education”)', 'Liking a brand your parents always used'],
  ['Have an object', 'Always about something specific', 'Attitude toward electric scooters'],
  ['Direction and intensity', 'Positive or negative, and weak or strong', 'Mildly prefers Brand A; strongly dislikes Brand B'],
  ['Relatively consistent', 'Tend to be stable and consistent with behaviour', 'A health-conscious person consistently avoids sugary drinks'],
  ['Occur within a situation', 'The situation can make people act against their attitude', 'Buying a disliked brand because the preferred one is out of stock'],
  ['Can change', 'Through new information, experience or persuasion', 'Changing opinion after a product recall']
])}
<h3>Functions of attitudes (Daniel Katz, 1960)</h3>
${table(['Function', 'What the attitude does for the person', 'Marketing appeal'], [
  ['Utilitarian', 'Helps gain rewards and avoid punishment', 'Stress practical benefits: “saves ₹500 a month”'],
  ['Ego-defensive', 'Protects self-image from anxiety or threats', 'Deodorants, grooming, “confidence” appeals'],
  ['Value-expressive', 'Expresses central values and identity', 'Eco-friendly, local, ethical brands'],
  ['Knowledge', 'Gives structure and meaning to a complex world', 'Clear positioning, comparison charts, simple claims']
])}`)}
${ex(`<p>Many Indian consumers hold a strongly favourable attitude toward Amul, built over decades of consistent quality, a co-operative origin story and friendly advertising. That attitude carries over to new Amul products such as ice cream and paneer.</p>`)}
${tip('Exam tip', `<p>Quote the slide’s third definition (overall evaluation or emotional response toward a product, brand, service or experience), then add the Schiffman &amp; Kanuk “learned predisposition” definition for depth.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'abc-model', title: 'ABC model of attitude and response hierarchies', pages: '4–5',
    lede: 'Affect, Behaviour and Cognition — and how their order changes with involvement.',
    html: `
<h2>The three components</h2>
${pdf(M, 4, `<p>The <strong>ABC Model of Attitude</strong> has three components: <strong>Affect, Behaviour, Cognitive</strong>.</p>`)}
${pdf(M, 5, `<p>The ABC model is <strong>also known as the tripartite model</strong>.</p>`)}

${D.grid({ title: 'ABC (tripartite) model of attitude', src: P(M, '4–5'), min: '10rem', items: [
  { t: 'A — Affect', s: 'feelings', tone: 'rose', d: 'The emotional component: how the consumer <strong>feels</strong> about the object. “I love the way this car looks.” Measured with liking scales and emotional responses.' },
  { t: 'B — Behaviour', s: 'actions / intentions', tone: 'accent', d: 'The conative component: what the consumer <strong>does or intends to do</strong>. “I will book a test drive.” Includes purchase intention, actual purchase and recommendations.' },
  { t: 'C — Cognitive', s: 'beliefs / knowledge', tone: 'teal', d: 'The knowledge and belief component: what the consumer <strong>knows or believes</strong>. “This car gives 20 km per litre and has six airbags.”' }
] })}

<h2>Involvement levels and response hierarchies</h2>
${pdf(M, 5, `<p>The slide shows a table titled <strong>Involvement Levels and their Response Hierarchies</strong>:</p>
${table(['Involvement level', 'Example', 'Response hierarchy'], [
  ['High', 'Vacation, wedding dress, new car', 'C — A — B'],
  ['Low', 'Car wash, tin foil, toilet cleaner', 'B — A — C'],
  ['(Impulse)', 'Face mask, candles, computer games', 'A — B — C']
], null, true)}`)}

${D.toggle({ title: 'Response hierarchy by involvement — choose a level', src: P(M, 5), groupLabel: 'Choose involvement level', modes: [
  { label: 'High involvement', seq: [{ k: 'C', t: 'Cognition' }, { k: 'A', t: 'Affect' }, { k: 'B', t: 'Behaviour' }], note: '<strong>Think → Feel → Do.</strong> For a vacation, wedding dress or new car, the consumer first gathers information and forms beliefs, then develops feelings, then buys. Marketers should provide detailed information, comparisons and reviews.' },
  { label: 'Low involvement', seq: [{ k: 'B', t: 'Behaviour' }, { k: 'A', t: 'Affect' }, { k: 'C', t: 'Cognition' }], note: '<strong>Do → Feel → Think</strong> (as given on the slide). For a car wash, tin foil or toilet cleaner, the consumer buys with little thought, forms a feeling from use, and only then develops beliefs. Marketers should focus on availability, trial, point-of-sale displays and repetition.' },
  { label: 'Impulse', seq: [{ k: 'A', t: 'Affect' }, { k: 'B', t: 'Behaviour' }, { k: 'C', t: 'Cognition' }], note: '<strong>Feel → Do → Think.</strong> For a face mask, candles or a computer game, an emotional reaction triggers an immediate purchase; reasons come afterwards. Marketers should use attractive packaging, mood, store atmosphere and checkout placement.' }
] })}

${add(`<h3>Why the order matters</h3>
${ul(['It tells marketers <strong>which component to influence first</strong>: information for high involvement, trial and availability for low involvement, emotion and display for impulse.', 'It explains why ads for detergents look so different from ads for cars or perfumes.', 'It links directly to the buying behaviour matrix in Module I: complex buying follows C–A–B; habitual buying follows a low-involvement path.'])}`)}
${warn('Textbook versions differ', `<p>Your slide gives the low-involvement order as <strong>B–A–C</strong>. Some textbooks (for example Michael Solomon’s <em>Consumer Behavior</em>) describe the low-involvement hierarchy as <strong>Cognition → Behaviour → Affect</strong> (limited beliefs, then purchase, then evaluation), and call the feelings-first path the <strong>experiential hierarchy (A → B → C)</strong>. In your exam, reproduce the slide’s table, and you may add one line noting the alternative view.</p>`)}

${add(`<h3>Measuring the cognitive component: Fishbein’s multi-attribute model</h3>
<p>Martin Fishbein’s model expresses attitude toward a brand as the sum of beliefs about its attributes weighted by how much those attributes matter:</p>
<p style="text-align:center;font-family:var(--font-head);font-size:1.15rem">A<sub>o</sub> = Σ b<sub>i</sub> × e<sub>i</sub></p>
${ul(['<strong>b<sub>i</sub></strong> = strength of belief that the brand has attribute <em>i</em>', '<strong>e<sub>i</sub></strong> = evaluation (goodness) of attribute <em>i</em>'])}
<p>Marketers can change attitude by changing beliefs about their own brand, changing the importance of an attribute, adding a new attribute, or changing beliefs about competitors.</p>`)}

${ex(`<ul><li><strong>High (C–A–B):</strong> a family planning a Kerala holiday compares packages online, grows excited, then books.</li><li><strong>Low (B–A–C):</strong> picking up whichever aluminium foil is on the shelf; forming an opinion only after use.</li><li><strong>Impulse (A–B–C):</strong> grabbing scented candles near the billing counter because they smell lovely, then telling yourself they will be useful for Diwali.</li></ul>`)}
${tip('Diagram to practise', `<p>Draw a three-box triangle (A, B, C), then reproduce the slide’s involvement table with the three response hierarchies.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'attitude-formation', title: 'Attitude formation through learning theories', pages: '1, 6',
    lede: 'The module’s title topic: how classical, operant and observational learning create attitudes toward brands.',
    html: `
<h2>Learning theories and their applications</h2>
${pdf(M, 1, `<p>The module is titled <strong>Learning Theories and Their Applications</strong>.</p>`)}
${pdf(M, 6, `<p>The slide <strong>Attitude Formation: Learning Theories</strong> names three ways attitudes are learned: <strong>Classical, Operant, Observational</strong>.</p>`)}
${add(`<p><strong>Learning</strong> is a relatively permanent change in behaviour or knowledge that results from experience. Consumers are not born liking a brand; they learn to like it. Textbooks describe four elements of consumer learning: <strong>motivation</strong> (the need that drives learning), <strong>cues</strong> (stimuli that direct it — ads, packaging, price), <strong>response</strong> (the behaviour) and <strong>reinforcement</strong> (the reward that makes the response more likely).</p>`)}

${D.columns({ title: 'Three learning routes to an attitude', src: P(M, 6), cols: [
  { h: 'Classical', items: [{ t: 'Learning by association', s: 'Pavlov', tone: 'teal', d: 'A neutral stimulus (the brand) is repeatedly paired with a stimulus that already produces a feeling (music, a celebrity, a happy scene). Eventually the brand alone triggers that feeling.' }] },
  { h: 'Operant', items: [{ t: 'Learning by consequences', s: 'Skinner', tone: 'rose', d: 'The consumer tries a product; a good outcome (reward) makes repurchase more likely, a bad outcome makes it less likely. Attitudes form from the results of one’s own behaviour.' }] },
  { h: 'Observational', items: [{ t: 'Learning by watching others', s: 'Bandura', tone: 'lilac', d: 'The consumer watches others use a product and sees them rewarded or punished, then imitates — without direct experience. Also called vicarious or social learning.' }] }
] })}

<h2>Classical conditioning</h2>
${add(`<p><strong>Ivan Pavlov</strong> showed that dogs learned to salivate at the sound of a bell that had been repeatedly paired with food. In marketing, the brand plays the role of the bell.</p>
${table(['Term', 'Meaning', 'Advertising example'], [
  ['Unconditioned stimulus (UCS)', 'Naturally produces a response', 'A popular song, a favourite film star, a festive family scene'],
  ['Unconditioned response (UCR)', 'Natural reaction to the UCS', 'Happiness, excitement, warmth'],
  ['Conditioned stimulus (CS)', 'Originally neutral; paired with the UCS', 'The brand name, logo or jingle'],
  ['Conditioned response (CR)', 'Learned reaction to the CS alone', 'Feeling happy when seeing the brand on a shelf']
])}`)}
${D.flow({ title: 'How classical conditioning builds a brand feeling', src: '<span class="tag add">Additional Explanation</span>', items: [
  { t: 'Before', s: 'UCS → UCR', tone: 'amber', d: 'Upbeat music (UCS) naturally makes viewers feel happy (UCR). The brand is neutral.' },
  { t: 'During', s: 'Brand + UCS (repeated)', tone: 'accent', d: 'The brand logo appears again and again with the upbeat music in ads. Repetition is essential.' },
  { t: 'After', s: 'Brand (CS) → happy (CR)', tone: 'teal', d: 'The brand alone now triggers a positive feeling. The consumer has learned an affective attitude.' }
] })}
${add(`<h3>Applications</h3>
${table(['Concept', 'Meaning', 'Marketing use'], [
  ['Repetition', 'More pairings strengthen the association (up to a point — then “wear-out”)', 'Frequent ad flights; varied executions of the same theme'],
  ['Stimulus generalisation', 'Responding the same way to similar stimuli', 'Family branding and brand extensions (a trusted name on a new product); licensing; look-alike packaging by private labels'],
  ['Stimulus discrimination', 'Learning to tell similar stimuli apart', 'Positioning and distinctive packaging so consumers pick your brand, not the look-alike']
])}`)}
${ex(`<ul><li><strong>Generalisation:</strong> Dettol extended from antiseptic liquid into soaps and handwash, carrying over consumers’ learned association with germ protection.</li><li><strong>Association:</strong> brands sponsoring the IPL pair themselves with the excitement of cricket.</li><li><strong>Sonic branding:</strong> a short, consistent jingle at the end of every ad becomes a conditioned cue.</li></ul>`)}

<h2>Operant (instrumental) conditioning</h2>
${add(`<p><strong>B. F. Skinner</strong>’s operant conditioning holds that learning happens through trial and the consequences of behaviour. The consumer acts first; the outcome teaches them. (Skinner’s theory also appears in Module II as a process theory of motivation.)</p>
${ul(['<strong>Positive reinforcement:</strong> satisfaction, rewards, cashback → repeat purchase.', '<strong>Negative reinforcement:</strong> a product removes an unpleasant state (a pain balm removes a headache) → repeat use.', '<strong>Punishment:</strong> a bad experience → avoidance and a negative attitude.', '<strong>Shaping:</strong> rewarding small steps toward the target behaviour — e.g. free trial → discounted first month → full subscription.', '<strong>Extinction:</strong> when rewards stop, the behaviour fades.'])}`)}
${ex(`<p>Food-delivery apps often give a large discount on the first order, smaller discounts on the next few, and then loyalty-programme benefits — shaping a habit step by step. The product experience itself (food arriving hot and on time) is the most important reinforcement.</p>`)}
${link('Connects to', `<p>${go('m2', 'process-theories', 'Skinner’s reinforcement theory in Module II')} — schedules of reinforcement and the stimulus–response model.</p>`)}

<h2>Observational (vicarious) learning</h2>
${add(`<p><strong>Albert Bandura</strong>’s social learning theory (1977) holds that people learn by watching others (models) and the consequences they experience. His Bobo doll experiments (1961) showed children imitating behaviour they had observed. Four processes are needed:</p>`)}
${D.flow({ title: 'Bandura’s four processes of observational learning', src: '<span class="tag add">Additional Explanation</span>', numbered: true, items: [
  { t: 'Attention', tone: 'rose', d: 'The consumer must notice the model. Attractive, credible or similar models attract more attention — influencers, celebrities, “people like me”.' },
  { t: 'Retention', tone: 'amber', d: 'The consumer must remember what they saw — clear demonstrations, memorable stories.' },
  { t: 'Reproduction', tone: 'accent', d: 'The consumer must be able to perform the behaviour — afford the product, find it, know how to use it.' },
  { t: 'Motivation', tone: 'teal', d: 'The consumer must want to imitate — usually because the model was rewarded (looked great, got compliments, saved money).' }
] })}
${ex(`<ul><li><strong>Unboxing and tutorial videos:</strong> viewers learn how a product works and how it makes the creator feel, then imitate.</li><li><strong>Demonstration ads:</strong> detergent ads show a mother whose child’s stained clothes come out clean, and she is praised — the viewer learns the reward vicariously.</li></ul>`)}

${table(['Basis', 'Classical', 'Operant', 'Observational'], [
  ['Key theorist', 'Pavlov', 'Skinner', 'Bandura'],
  ['How learning happens', 'Association between two stimuli', 'Consequences of one’s own behaviour', 'Watching others’ behaviour and its consequences'],
  ['Consumer role', 'Passive', 'Active — must try the product', 'Observer'],
  ['Component of attitude mainly formed', 'Affect', 'Behaviour → affect', 'Cognition and affect'],
  ['Marketing tools', 'Jingles, celebrities, music, repetition', 'Samples, rewards, loyalty programmes, quality', 'Influencers, testimonials, demos'],
  ['Example', 'Brand + IPL excitement', 'Cashback after payment', 'Influencer skincare routine']
], 'Comparing the three learning theories')}

${more('Also useful: cognitive learning theory', add(`<p>Cognitive learning theory treats learning as active <strong>mental information processing</strong> — consumers gather information, evaluate it, and store it in memory, rather than simply responding to stimuli. It explains high-involvement learning, for example studying reviews before buying a laptop. It is not on your slides, but it is a good contrast point in a 15-mark answer on learning theories.</p>`))}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'attribution', title: 'Attribution theory', pages: '7–9',
    lede: 'How consumers explain the causes of events — and why those explanations shape loyalty and complaints.',
    html: `
<h2>What attribution theory explains</h2>
${pdf(M, 7, ul([
  'Attribution theory involves <strong>analysing the conscious and subconscious drivers that dictate consumer decision-making</strong>.',
  'Attribution theory seeks to <strong>explain the behaviour of consumers when making purchases</strong>.',
  'It elaborates on how <strong>past events influence purchase decisions</strong> — a consumer assesses a product or service <strong>based on their experience</strong>.'
]))}
${pdf(M, 8, ul([
  'Understanding attribution is crucial as it <strong>influences perceptions, interactions and decisions</strong> in personal, professional and social contexts.',
  'For instance, attributing a colleague’s missed deadline to <strong>laziness (internal attribution)</strong> or to <strong>external factors like workload (external attribution)</strong> shapes our responses and relationships.'
]))}

<h2>Internal and external attribution</h2>
${pdf(M, 9, `<p>The slide names two types: <strong>Internal Attribution</strong> and <strong>External Attribution</strong>.</p>`)}
${D.columns({ title: 'Two types of attribution', src: P(M, 9), cols: [
  { h: 'Internal (dispositional)', items: [{ t: 'Cause lies within the person or brand', tone: 'teal', d: 'The outcome is explained by the actor’s own characteristics — ability, effort, personality, the brand’s quality. <em>Consumer:</em> “The phone broke because the brand makes poor products.” “I got a good deal because I am a smart shopper.”' }] },
  { h: 'External (situational)', items: [{ t: 'Cause lies in the situation', tone: 'amber', d: 'The outcome is explained by outside factors — luck, circumstances, other people, timing. <em>Consumer:</em> “The phone broke because the courier dropped it.” “I got a good deal because there was a festive sale.”' }] }
] })}

${add(`<h3>Origins and key models</h3>
${ul(['<strong>Fritz Heider</strong> (1958) founded attribution theory, describing people as “naive psychologists” who try to explain the causes of behaviour, and distinguished internal from external causes.', '<strong>Harold Kelley</strong> (1967) proposed the <strong>covariation model</strong> — people use three kinds of information to decide between internal and external causes.', '<strong>Bernard Weiner</strong> added three dimensions of causes: <strong>locus</strong> (internal/external), <strong>stability</strong> (permanent/temporary) and <strong>controllability</strong> (could it have been prevented?).'])}`)}

${D.grid({ title: 'Kelley’s covariation model — three cues', src: '<span class="tag add">Additional Explanation</span>', min: '10rem', items: [
  { t: 'Consensus', s: 'Do others react the same way?', tone: 'teal', d: 'If many customers complain about this phone’s battery (high consensus), the cause is likely the product, not the user.' },
  { t: 'Distinctiveness', s: 'Is it unique to this brand?', tone: 'lilac', d: 'If the user’s other gadgets work fine but this one fails (high distinctiveness), the cause is likely this brand.' },
  { t: 'Consistency', s: 'Does it happen every time?', tone: 'amber', d: 'If the battery drains fast every day (high consistency), the cause is stable, not a one-off.' }
] })}
${add(`<p><strong>Rule of thumb:</strong> high consensus + high distinctiveness + high consistency → the consumer blames the <strong>product (external to themselves)</strong>. Low consensus + low distinctiveness + high consistency → the consumer looks at <strong>their own use (internal)</strong>.</p>
<h3>Attributions in consumer behaviour</h3>
${table(['Area', 'How attribution works', 'Marketing implication'], [
  ['Product failure', 'If consumers blame the brand (internal to the firm, stable, controllable), anger and switching follow', 'Act fast, accept responsibility, fix the cause'],
  ['Satisfaction and loyalty', 'Success attributed to the brand’s quality builds loyalty; success attributed to luck does not', 'Remind customers why the product worked'],
  ['Endorsements', 'Consumers may attribute a celebrity’s praise to payment rather than belief (discounting)', 'Choose credible endorsers whose fit with the brand is natural'],
  ['Self-perception', 'Consumers infer their own attitudes from their behaviour (“I buy it often, so I must like it”)', 'Free trials and small first commitments'],
  ['Promotions', 'If a purchase is attributed to a discount, loyalty may vanish when the discount ends', 'Avoid permanent deep discounting']
])}
<h3>Biases</h3>
${ul(['<strong>Fundamental attribution error:</strong> over-blaming people’s character and under-weighting the situation.', '<strong>Self-serving bias:</strong> taking credit for successes (“I chose well”) and blaming external factors for failures (“the product was faulty”).'])}`)}

${ex(`<ul><li><strong>Cadbury, 2003:</strong> after reports of worms in some Dairy Milk bars, Cadbury attributed the problem to poor storage at retail points, but needed to restore trust. Its response, often called “Project Vishwas”, introduced improved packaging and a campaign featuring Amitabh Bachchan — helping consumers re-attribute safety to the brand.</li><li><strong>Maggi, 2015:</strong> when FSSAI ordered a recall over safety concerns, many consumers made an internal attribution to Nestlé. Maggi returned to shelves after the ban was overturned, with heavy reassurance communication, and gradually regained market share.</li></ul>`)}
${warn('Common mistake', `<p>“Internal” and “external” are from the point of view of the <strong>person whose behaviour is being explained</strong>. If you are explaining a brand’s failure, “internal” means the brand’s own fault; if you are explaining your own purchase success, “internal” means your own skill.</p>`)}
${link('Connects to', `<p>Attributions shape post-purchase behaviour and cognitive dissonance in ${go('m1', 'social-psychology', 'Module I')}, and perceived fairness in ${go('m2', 'process-theories', 'Adams’ equity theory')}.</p>`)}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'exam', kind: 'exam', title: 'Exam preparation: Module III',
    lede: 'Answer frameworks, important questions and common mistakes for Module III.',
    html: `
<h2>5-mark answer frameworks</h2>
${answer(5, 'Explain the ABC model of attitude.', `${ol(['Definition of attitude (p. 3).', 'Three components with one line and example each (p. 4).', 'Also called the tripartite model (p. 5).', 'Mention the three response hierarchies.'])}<p class="meta">Diagram: A–B–C triangle.</p>`)}
${answer(5, 'What is attribution theory? Distinguish internal and external attribution.', `${ol(['Definition (p. 7).', 'Internal vs external with the slide’s missed-deadline example (p. 8).', 'Consumer example of each.', 'One implication (product failure response).'])}`)}
${answer(5, 'Explain the role of colour psychology in branding.', `${ol(['Colour as a fast perceptual cue (p. 2).', 'Table of 4–5 colours with associations.', 'Cultural variation of colour meaning.', 'Indian example.'])}`)}

<h2>10-mark answer frameworks</h2>
${answer(10, 'Explain how attitudes are formed through learning theories.', `${ol(['Definition of attitude and learning.', 'Three theories (p. 6) diagram.', 'Classical: Pavlov, UCS/CS, generalisation, discrimination, example.', 'Operant: Skinner, reinforcement, shaping, example.', 'Observational: Bandura’s four processes, influencer example.', 'Comparison table and conclusion.'])}`)}
${answer(10, 'Discuss the involvement levels and their response hierarchies.', `${ol(['ABC components.', 'Reproduce the slide table (p. 5): High C–A–B; Low B–A–C; Impulse A–B–C with examples.', 'Explain each hierarchy and the marketer’s task.', 'Note the alternative textbook view (Solomon).', 'Link to Assael’s buying behaviour matrix.'])}`)}
${answer(10, 'How does branding influence consumer behaviour?', `${ol(['Introduction: brands are learned.', 'Four levers (p. 2) with explanation and example each.', 'Link to classical conditioning and the mere-exposure effect.', 'Conclusion: consistent, emotional brands win loyalty.'])}`)}

<h2>15-mark answer frameworks</h2>
${answer(15, 'Learning theories have important applications in marketing. Discuss.', `${ol(['Meaning and elements of learning (motivation, cues, response, reinforcement).', 'Classical conditioning — diagram, concepts, applications.', 'Operant conditioning — reinforcement types, schedules, shaping, applications.', 'Observational learning — four processes, applications.', 'Cognitive learning (brief) as a contrast.', 'Comparison table.', 'Branding as an application of learning (p. 2).', 'Conclusion.'])}`)}
${answer(15, 'What is attitude? Explain its components, formation and the role of attribution in consumer decisions.', `${ol(['Definition and characteristics (p. 3).', 'ABC model and response hierarchies (pp. 4–5).', 'Formation through learning (p. 6).', 'Attribution theory: internal/external (pp. 7–9), Kelley’s cues.', 'Example: brand crisis and attitude recovery (Cadbury 2003 or Maggi 2015).', 'Attitude-change strategies and conclusion.'])}`)}

<h2>Important questions for revision</h2>
${qs([
  ['Explain the four ways branding influences consumer behaviour.', '10'],
  ['Define attitude. Explain its characteristics.', '5'],
  ['Explain the ABC (tripartite) model of attitude.', '5'],
  ['Explain response hierarchies for high, low and impulse purchases.', '10'],
  ['Explain classical conditioning with marketing applications.', '5'],
  ['Explain operant conditioning with marketing applications.', '5'],
  ['Explain observational learning and its use in influencer marketing.', '5'],
  ['Compare classical, operant and observational learning.', '10'],
  ['What is attribution theory? Explain internal and external attribution.', '5'],
  ['Explain Kelley’s covariation model.', '5'],
  ['Explain the functions of attitudes.', '5']
])}

<h2>Common mistakes to avoid</h2>
${warn('Watch out for these', ul([
  'Writing the hierarchy orders wrongly — learn the slide table exactly: High C–A–B, Low B–A–C, Impulse A–B–C.',
  'Calling “B” in ABC “beliefs” — B is behaviour; beliefs belong to C.',
  'Confusing classical (passive association) with operant (active trial and consequence).',
  'Forgetting that internal/external depends on whose behaviour is being explained.',
  'Treating colour meanings as universal.'
]))}

<h2>Interconnections to mention</h2>
${ul(['Operant conditioning (Module III) = Skinner’s reinforcement theory (Module II).', 'Response hierarchies (Module III) ↔ buying behaviour matrix (Module I).', 'Attitude as a psychological driver (Module I) → ABC model (Module III).', 'Colour and shape (Module III) → semiotics (Module IV).', 'Observational learning ↔ reference groups and opinion leaders (Module I) and social proof (Module V).'])}
`});

  /* ---------------------------------------------------- */
  topics.push({
    id: 'revision', kind: 'rev', title: 'Revision notes: Module III',
    lede: 'Summary, key terms and quick-recall points.',
    html: `
<h2>Module summary</h2>
<p>Module III, <em>Learning Theories and Their Applications</em>, opens with branding: colour psychology, shape and symbolism, brand consistency for trust and recognition, and emotional branding for deep connections (p. 2). <strong>Attitudes</strong> are sets of emotions and beliefs that directly influence behaviour, shaped by experience, upbringing, education and social influence; in consumer behaviour, an attitude is the overall evaluation or emotional response toward a product, brand, service or experience (p. 3).</p>
<p>The <strong>ABC (tripartite) model</strong> breaks attitude into Affect, Behaviour and Cognition (pp. 4–5). Their order depends on involvement: high involvement C–A–B, low involvement B–A–C, impulse A–B–C (p. 5). Attitudes are formed by <strong>classical, operant and observational learning</strong> (p. 6). <strong>Attribution theory</strong> explains how consumers assign causes to outcomes based on experience, as internal or external attributions (pp. 7–9).</p>

<h2>Key terminology</h2>
${terms([
  ['Colour psychology', 'Use of colour associations to shape brand perception.'],
  ['Brand consistency', 'Same identity and quality across touchpoints; builds trust and recognition.'],
  ['Emotional branding', 'Creating deep feelings and attachment toward a brand.'],
  ['Attitude', 'Overall evaluation or emotional response toward a product, brand, service or experience.'],
  ['Tripartite model', 'Another name for the ABC model.'],
  ['Response hierarchy', 'The order in which A, B and C occur for a purchase.'],
  ['Classical conditioning', 'Learning by association (Pavlov).'],
  ['Stimulus generalisation', 'Responding similarly to similar stimuli — basis of brand extensions.'],
  ['Operant conditioning', 'Learning by consequences (Skinner).'],
  ['Observational learning', 'Learning by watching others (Bandura).'],
  ['Attribution theory', 'How people explain the causes of behaviour and events.'],
  ['Internal attribution', 'Cause assigned to the person’s own traits or effort.'],
  ['External attribution', 'Cause assigned to the situation.'],
  ['Covariation model', 'Consensus, distinctiveness, consistency (Kelley).']
])}

<h2>Quick-recall points</h2>
${ul([
  '<strong>Branding (4):</strong> colour, shape &amp; symbolism, consistency, emotional branding.',
  '<strong>ABC:</strong> Affect = feel; Behaviour = do; Cognitive = think.',
  '<strong>Hierarchies (slide):</strong> High C–A–B (vacation, wedding dress, car); Low B–A–C (car wash, tin foil, toilet cleaner); Impulse A–B–C (face mask, candles, games).',
  '<strong>Learning (3):</strong> Classical (Pavlov), Operant (Skinner), Observational (Bandura).',
  '<strong>Bandura (4):</strong> Attention, Retention, Reproduction, Motivation.',
  '<strong>Attribution (2):</strong> Internal (laziness) vs External (workload).',
  '<strong>Kelley (3):</strong> Consensus, Distinctiveness, Consistency.'
])}
${tip('Mnemonic for response hierarchies', `<p><strong>High = Think-Feel-Do (C-A-B)</strong>, <strong>Low = Do-Feel-Think (B-A-C)</strong>, <strong>Impulse = Feel-Do-Think (A-B-C)</strong>.</p>`)}
`});

  CB.addModule({
    id: 'm3', n: 3, num: 'III', file: 'CB_MODULE III.pdf', pages: 10,
    title: 'Learning Theories and Their Applications',
    navTitle: 'Learning Theories & Attitude',
    blurb: 'Branding levers, attitude and the ABC model, response hierarchies, attitude formation through learning, and attribution theory.',
    lede: 'How consumers learn about brands and form attitudes toward them, and how they explain the causes of good and bad experiences.',
    objectives: [
      'Explain how colour, shape, consistency and emotion in branding influence consumers.',
      'Define attitude and describe its characteristics and functions.',
      'Explain the ABC (tripartite) model and the response hierarchies for high, low and impulse purchases.',
      'Explain classical, operant and observational learning and apply each to marketing.',
      'Explain attribution theory, internal and external attribution, and its marketing implications.'
    ],
    topics: topics
  });

  CB.addTerms('m3', [
    ['Colour psychology', 'branding', 'Colours trigger associations and emotions that shape brand perception.'],
    ['Shape and symbolism', 'branding', 'Logo shapes and symbols carry meaning — rounded friendly, angular strong.'],
    ['Brand consistency', 'branding', 'Uniform identity and quality across touchpoints; builds trust and recognition.'],
    ['Emotional branding', 'branding', 'Creating deep emotional connections between consumers and a brand.'],
    ['Mere-exposure effect', 'branding', 'People tend to like familiar things more (Zajonc 1968).'],
    ['Attitude', 'attitude', 'Overall evaluation or emotional response toward a product, brand, service or experience.'],
    ['Functions of attitudes (Katz)', 'attitude', 'Utilitarian, ego-defensive, value-expressive, knowledge.'],
    ['ABC model of attitude', 'abc-model', 'Affect, Behaviour, Cognitive — the tripartite model.'],
    ['Tripartite model', 'abc-model', 'Another name for the ABC model of attitude.'],
    ['Response hierarchies', 'abc-model', 'High C–A–B, low B–A–C, impulse A–B–C (slide p. 5).'],
    ['Fishbein multi-attribute model', 'abc-model', 'Attitude = sum of beliefs about attributes × evaluation of attributes.'],
    ['Learning', 'attitude-formation', 'Relatively permanent change in behaviour or knowledge from experience.'],
    ['Classical conditioning', 'attitude-formation', 'Learning by association between a brand and a stimulus that already causes a feeling (Pavlov).'],
    ['Stimulus generalisation', 'attitude-formation', 'Responding similarly to similar stimuli; basis of brand extensions.'],
    ['Stimulus discrimination', 'attitude-formation', 'Learning to tell similar stimuli apart; basis of positioning.'],
    ['Operant conditioning', 'attitude-formation', 'Learning by consequences of one’s own behaviour (Skinner).'],
    ['Shaping', 'attitude-formation', 'Rewarding small steps toward a target behaviour.'],
    ['Observational learning', 'attitude-formation', 'Learning by watching others and their outcomes (Bandura).'],
    ['Attribution theory', 'attribution', 'How consumers explain causes of behaviour and outcomes based on experience.'],
    ['Internal attribution', 'attribution', 'Cause assigned to the person’s or brand’s own characteristics.'],
    ['External attribution', 'attribution', 'Cause assigned to situational factors.'],
    ['Kelley’s covariation model', 'attribution', 'Consensus, distinctiveness and consistency information.'],
    ['Self-serving bias', 'attribution', 'Taking credit for success, blaming outside factors for failure.']
  ]);
})();
