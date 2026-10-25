/* Final Recap & Exam Revision hub */
(function () {
  'use strict';
  var H = CB.H, table = H.table, tip = H.tip, warn = H.warn, ul = H.ul, ol = H.ol, go = H.go, add = H.add;

  var html = `
<header class="page-head">
  <p class="kicker"><span class="pill">Revision hub</span><span class="tag add">Study aid drawn from all five PDFs</span></p>
  <h1>Final Recap &amp; Exam Revision</h1>
  <p class="lede">Everything you need in the last days before the exam: what to prioritise, the theories and their authors, the diagrams to practise, the comparisons examiners like, and quick-fire revision points. Page numbers point back to your PDFs.</p>
  <div class="page-tools"><a class="btn" href="#/print/all">Print all modules</a><a class="btn" href="#/index">Open the A–Z index</a></div>
</header>
<nav class="toc-inline" aria-label="Contents"></nav>

<h2>High-priority topics</h2>
<p>Priority reflects how central each topic is in your slides and how often such topics appear in consumer-behaviour papers. It is a study judgement, not information from an exam board.</p>
${table(['Priority', 'Topic', 'Module & source', 'Why it matters'], [
  ['Very high', go('m1', 'psychological-personal-factors', 'Factors influencing consumer behaviour'), 'I · pp. 19–24', 'Classic 15-mark question; spans five slides'],
  ['Very high', go('m1', 'buying-process', 'Consumer buying process'), 'I · p. 25', 'Core process; diagram-friendly'],
  ['Very high', go('m1', 'buying-behaviour', 'Four types of buying behaviour'), 'I · pp. 26–27', 'Matrix diagram; frequently asked'],
  ['Very high', go('m1', 'maslow', 'Maslow’s hierarchy'), 'I · p. 9; II · p. 9', 'Appears in two modules'],
  ['Very high', go('m2', 'process-theories', 'Process theories of motivation'), 'II · pp. 2–7', 'Four theories with authors'],
  ['Very high', go('m3', 'abc-model', 'ABC model and response hierarchies'), 'III · pp. 4–5', 'Table must be reproduced exactly'],
  ['High', go('m2', 'trait-theory', 'Personality: trait theory, consumer traits, Big Five'), 'II · pp. 12–16', 'Long-answer material'],
  ['High', go('m2', 'freudian-theories', 'Freudian and Neo-Freudian theories'), 'II · pp. 17–19', 'Diagram + CAD types'],
  ['High', go('m3', 'attitude-formation', 'Learning theories and attitude formation'), 'III · pp. 1, 6', 'Module title topic'],
  ['High', go('m4', 'types-of-self', 'Types of self'), 'IV · p. 3', 'Six types, easy marks'],
  ['High', go('m4', 'self-image-congruence', 'Self-image congruence theory'), 'IV · p. 4', 'Strong case potential'],
  ['High', go('m4', 'cultural-iceberg', 'Iceberg concept of culture'), 'IV · pp. 8–9', 'Diagram question'],
  ['High', go('m5', 'principles-of-persuasion', 'Principles of persuasion'), 'V · p. 4', 'Five principles with examples'],
  ['High', go('m5', 'public-policy', 'CB and public policy'), 'V · pp. 5–6', 'Three mechanisms'],
  ['Medium', go('m1', 'social-psychology', 'Cognitive dissonance & TPB'), 'I · pp. 13–14', 'Short notes'],
  ['Medium', go('m3', 'attribution', 'Attribution theory'), 'III · pp. 7–9', 'Short notes'],
  ['Medium', go('m4', 'customs', 'Imperatives, electives, exclusives'), 'IV · pp. 10–11', 'Short notes'],
  ['Medium', go('m4', 'semiotics', 'Semiotics'), 'IV · pp. 12–13', 'Short notes'],
  ['Medium', go('m4', 'psychographics', 'Psychographics and AIO'), 'IV · p. 5', 'Short notes'],
  ['Medium', go('m5', 'materialism', 'Consumer materialism'), 'V · p. 2', 'Short notes'],
  ['Medium', go('m5', 'family-life-cycle', 'Family life cycle'), 'V · p. 1 (title only)', 'Module title; prepare from notes'],
  ['Medium', go('m1', 'consumer-profile', 'Consumer profile'), 'I · pp. 17–18', 'Five components'],
  ['Medium', go('m2', 'perception', 'Stages of perception'), 'II · pp. 22–23', 'Four-stage diagram']
])}

<h2>Essential theories and their authors</h2>
${table(['Theory / model', 'Author(s) & year', 'Core idea in one line', 'Where'], [
  ['Definition of consumer behaviour', 'Hoyer et al. (2009)', 'Totality of decisions on acquisition, consumption and disposition', go('m1', 'introduction', 'I · p. 3')],
  ['Hierarchy of needs', 'Maslow (1943)', 'Physiological → safety → belonging → esteem → self-actualisation', go('m1', 'maslow', 'I · p. 9')],
  ['3Cs framework', 'Kenichi Ohmae (1982)', 'Customer, competitor, company', go('m1', 'three-cs', 'I · p. 8')],
  ['Cognitive dissonance', 'Festinger (1957)', 'Discomfort from contradictory thoughts; resolved by rationalisation', go('m1', 'social-psychology', 'I · p. 14')],
  ['Theory of Planned Behaviour', 'Ajzen (1985, 1991)', 'Attitude + norms + perceived control → intention → behaviour', go('m1', 'social-psychology', 'I · p. 13')],
  ['Buying behaviour matrix', 'Assael (1987)', 'Involvement × brand differences → 4 types', go('m1', 'buying-behaviour', 'I · p. 27')],
  ['Reinforcement theory', 'Skinner', 'Consequences shape future behaviour', go('m2', 'process-theories', 'II · p. 4')],
  ['Expectancy theory', 'Vroom (1964)', 'M = E × I × V', go('m2', 'process-theories', 'II · p. 5')],
  ['Equity theory', 'Adams (1963)', 'Fair input–outcome ratio vs referent other', go('m2', 'process-theories', 'II · p. 6')],
  ['Goal-setting theory', 'Locke (1968); Locke & Latham', 'Appropriate goals + feedback', go('m2', 'process-theories', 'II · p. 7')],
  ['Two-factor theory', 'Herzberg (1959)', 'Hygiene factors vs motivators', go('m2', 'content-theories', 'II · p. 9')],
  ['Theory of needs', 'McClelland (1961)', 'Achievement, affiliation, power', go('m2', 'content-theories', 'II · p. 9')],
  ['ERG theory', 'Alderfer (1969)', 'Existence, relatedness, growth; frustration–regression', go('m2', 'content-theories', 'II · p. 9')],
  ['Big Five', 'Costa & McCrae; Goldberg', 'Openness, conscientiousness, extraversion, agreeableness, neuroticism', go('m2', 'trait-theory', 'II · p. 16')],
  ['Psychoanalytic theory', 'Freud', 'Id, ego, superego', go('m2', 'freudian-theories', 'II · p. 17')],
  ['CAD typology', 'Karen Horney (Neo-Freudian)', 'Compliant, aggressive, detached', go('m2', 'freudian-theories', 'II · pp. 18–19')],
  ['Self-concept components', 'Carl Rogers', 'Self-image, self-esteem, ideal self', go('m2', 'self-concept', 'II · p. 21')],
  ['ABC (tripartite) model', '—', 'Affect, behaviour, cognition; order varies by involvement', go('m3', 'abc-model', 'III · pp. 4–5')],
  ['Classical conditioning', 'Pavlov', 'Learning by association', go('m3', 'attitude-formation', 'III · p. 6')],
  ['Operant conditioning', 'Skinner', 'Learning by consequences', go('m3', 'attitude-formation', 'III · p. 6')],
  ['Observational learning', 'Bandura (1977)', 'Learning by watching others', go('m3', 'attitude-formation', 'III · p. 6')],
  ['Attribution theory', 'Heider (1958); Kelley (1967)', 'Internal vs external causes', go('m3', 'attribution', 'III · pp. 7–9')],
  ['Self-image congruence', 'Sirgy (1982)', 'People buy brands matching their self-concept', go('m4', 'self-image-congruence', 'IV · p. 4')],
  ['Extended self', 'Belk (1988)', 'Possessions as part of identity', go('m4', 'types-of-self', 'IV · p. 3')],
  ['AIO / psychographics', 'Wells & Tigert (1971)', 'Attitudes/Activities, interests, opinions', go('m4', 'psychographics', 'IV · p. 5')],
  ['Iceberg concept of culture', 'Edward T. Hall; AFS (2010 diagram)', 'Most of culture is hidden below awareness', go('m4', 'cultural-iceberg', 'IV · pp. 8–9')],
  ['Semiotics', 'Saussure; Peirce', 'Signs, symbols and meaning', go('m4', 'semiotics', 'IV · pp. 12–13')],
  ['Family life cycle', 'Wells & Gubar (1966)', 'Life stages with distinct buying patterns', go('m5', 'family-life-cycle', 'V · p. 1')],
  ['Materialism scale', 'Richins & Dawson (1992)', 'Centrality, happiness, success', go('m5', 'materialism', 'V · p. 2')],
  ['Persuasion knowledge model', 'Friestad & Wright (1994)', 'Consumers recognise and resist tactics', go('m5', 'persuasion', 'V · p. 3')],
  ['Principles of persuasion', 'Cialdini (1984)', 'Reciprocity, social proof, scarcity, authority, liking, commitment', go('m5', 'principles-of-persuasion', 'V · p. 4')],
  ['Nudge theory', 'Thaler & Sunstein (2008)', 'Change choice architecture to steer behaviour', go('m5', 'public-policy', 'V · p. 6')]
], 'Authors and years marked here are from standard textbooks; your slides name Hoyer et al. (2009), Locke and Latham (1968), Skinner, Vroom, Adams, Maslow, Herzberg, McClelland, Alderfer and Freud.')}

<h2>Diagrams to practise</h2>
<p>Practise drawing each of these from memory in under two minutes. Each link opens the interactive version.</p>
${ol([
  go('m1', 'maslow', 'Maslow’s pyramid') + ' — five levels, three brackets, one product per level.',
  go('m1', 'psychological-personal-factors', 'Five drivers of consumer behaviour') + ' — hub with sub-factors.',
  go('m1', 'psychological-personal-factors', 'Selective perception funnel') + ' — attention, distortion, retention.',
  go('m1', 'cultural-social-factors', 'Reference-group types') + ' — primary, secondary, aspired, disliked.',
  go('m1', 'buying-process', 'Five-stage buying process') + ' — with feedback loop.',
  go('m1', 'buying-behaviour', 'Buying behaviour matrix') + ' — exactly as on I · p. 27.',
  go('m1', 'social-psychology', 'Theory of Planned Behaviour') + ' — three inputs to intention.',
  go('m2', 'process-theories', 'Vroom’s E × I × V chain') + '.',
  go('m2', 'freudian-theories', 'Id – Ego – Superego') + '.',
  go('m2', 'perception', 'Stages of perception') + ' — exposure, attention, interpretation, retention.',
  go('m3', 'abc-model', 'ABC model and the involvement table') + '.',
  go('m3', 'attitude-formation', 'Classical conditioning: before, during, after') + '.',
  go('m4', 'cultural-iceberg', 'Cultural iceberg') + ' — behaviours, interpretations, core values; shaping forces.',
  go('m4', 'semiotics', 'Sign – object – interpretant') + '.',
  go('m5', 'family-life-cycle', 'Family life cycle timeline') + '.'
])}

<h2>Key comparisons</h2>
<h3>Process vs content theories of motivation</h3>
${table(['Basis', 'Process', 'Content'], [
  ['Question', 'How?', 'What?'],
  ['Theories', 'Skinner, Vroom, Adams, Locke', 'Maslow, Herzberg, McClelland, Alderfer'],
  ['Source', 'II · pp. 2–3', 'II · pp. 8–9']
], null, true)}
<h3>Four buying behaviours</h3>
${table(['', 'High involvement', 'Low involvement'], [
  ['Significant brand differences', 'Complex', 'Variety-seeking'],
  ['Few brand differences', 'Dissonance-reducing', 'Habitual']
], 'I · p. 27', true)}
<h3>Response hierarchies</h3>
${table(['Involvement', 'Order', 'Slide examples'], [
  ['High', 'C — A — B', 'Vacation, wedding dress, new car'],
  ['Low', 'B — A — C', 'Car wash, tin foil, toilet cleaner'],
  ['Impulse', 'A — B — C', 'Face mask, candles, computer games']
], 'III · p. 5', true)}
<h3>Three learning theories</h3>
${table(['Basis', 'Classical', 'Operant', 'Observational'], [
  ['Theorist', 'Pavlov', 'Skinner', 'Bandura'],
  ['Learning by', 'Association', 'Consequences', 'Watching others'],
  ['Marketing tool', 'Jingles, celebrities', 'Rewards, samples', 'Influencers, demos']
])}
<h3>Three theories of personality</h3>
${table(['Basis', 'Trait', 'Freudian', 'Neo-Freudian'], [
  ['Driver', 'Stable measurable traits', 'Unconscious drives', 'Social relationships'],
  ['Key ideas', 'Big Five, consumer traits', 'Id, ego, superego', 'Compliant, aggressive, detached'],
  ['Source', 'II · pp. 13–16', 'II · p. 17', 'II · pp. 12, 18–19']
])}
<h3>Other pairs examiners like</h3>
${table(['Pair', 'Difference in one line'], [
  ['Payer vs user vs buyer', 'Finances vs consumes vs completes the purchase (I · p. 5)'],
  ['Pre- vs post-purchase dissonance', 'Conflict while choosing vs doubt after buying (I · p. 14)'],
  ['Expectancy vs instrumentality', 'Effort → performance vs performance → reward (II · p. 5)'],
  ['Hygiene factors vs motivators', 'Prevent dissatisfaction vs create satisfaction (Herzberg)'],
  ['Self-image vs ideal self', 'Who I think I am vs who I want to be (II · p. 21)'],
  ['Social self vs ideal social self', 'How others see me vs how I want them to see me (IV · p. 3)'],
  ['Demographics vs psychographics', 'Who buys vs why they buy (IV · p. 5)'],
  ['Internal vs external attribution', 'Cause in the person vs cause in the situation (III · pp. 8–9)'],
  ['Imperatives vs electives vs exclusives', 'Must vs may (majority) vs locals only (IV · pp. 10–11)'],
  ['Emotional vs rational', 'Emotion starts desire; logic justifies (I · p. 28)']
])}

<h2>Numbers to remember</h2>
${table(['Count', 'List', 'Source'], [
  ['3', 'Consumer roles: payer, user, buyer', 'I · p. 5'],
  ['9', 'Relevance keywords: dynamics, choices, privileges, satisfaction, decisiveness, retention, categorization, acquisition, CRM', 'I · p. 6'],
  ['8', 'Strategy areas: STP, branding & positioning, differentiation & innovation, pricing, IMC, CRM, digital & social, experiential', 'I · p. 7'],
  ['5', 'Psychological drivers: perception, motivation, attitude, learning, beliefs', 'I · p. 11'],
  ['3', 'Implications: marketing research, communication, employee training', 'I · p. 12'],
  ['5', 'Consumer profile: demographic, geographic, psychographic, behavioural, pain points', 'I · p. 18'],
  ['5', 'CB drivers: psychological, social, personal, cultural, economic', 'I · p. 19'],
  ['5', 'Buying process stages', 'I · p. 25'],
  ['4 + 4', 'Process and content theories', 'II · pp. 3, 9'],
  ['5', 'Consumer traits: innovativeness, dogmatism, materialism, need for cognition, ethnocentrism', 'II · p. 15'],
  ['4', 'Branding levers: colour, shape & symbolism, consistency, emotional branding', 'III · p. 2'],
  ['6', 'Types of self', 'IV · p. 3'],
  ['10', 'Socio-cultural elements', 'IV · p. 7'],
  ['5', 'Principles of persuasion (slide grouping)', 'V · p. 4'],
  ['3', 'Public-policy mechanisms', 'V · p. 6']
])}

<h2>How the modules connect</h2>
${D.hub({ title: 'Course concept map — select a module', src: '<span class="tag add">Study aid</span>', core: 'The consumer’s decision', items: [
  { t: 'Module I', s: 'foundations & factors', tone: 'teal', d: 'What CB is, why it matters, the five drivers, the buying process and buying patterns. The frame for everything else.' },
  { t: 'Module II', s: 'motivation, personality, perception', tone: 'accent', d: 'The individual’s inner world: why they want (motivation), who they are (personality, self-concept) and what they notice (perception).' },
  { t: 'Module III', s: 'learning & attitude', tone: 'lilac', d: 'How consumers learn about brands and form attitudes (ABC, classical, operant, observational) and explain outcomes (attribution).' },
  { t: 'Module IV', s: 'self & culture', tone: 'amber', d: 'Identity (six selves, congruence, psychographics) and the culture that shapes it (iceberg, customs, semiotics).' },
  { t: 'Module V', s: 'family, persuasion, policy', tone: 'rose', d: 'The family life cycle, materialism, how marketers persuade and how society regulates consumption.' }
] })}

<h2>Last-minute revision points</h2>
${ul([
  'Write the <strong>Hoyer et al. (2009)</strong> definition word for word; it fits almost any introduction.',
  'Consumer behaviour is a <strong>continual process of valuation, revaluation and analysis</strong> (I · p. 3).',
  'Maslow, bottom up: <strong>Physiological, Safety, Belonging, Esteem, Self-actualisation</strong>; brackets: basic, psychological, self-fulfilment.',
  'Cognitive dissonance: <strong>actions not matching beliefs</strong>; pre- and post-purchase; resolved by affirmation or rationalisation.',
  'Selective processes: <strong>attention, distortion, retention</strong>.',
  'Reference groups on the slide: <strong>primary, secondary, aspired, disliked</strong>.',
  'Buying process: <strong>problem → search → evaluation → purchase → post-purchase</strong>.',
  'Matrix: <strong>variety-seeking = low involvement + significant differences</strong>; habitual = low + few.',
  'Emotion starts desire, <strong>logic justifies</strong> after paying.',
  'Vroom: <strong>M = E × I × V</strong> — multiply, so any zero kills motivation.',
  'Locke published in <strong>1968</strong>: goals + feedback.',
  'Personality theories: <strong>trait, Freudian, Neo-Freudian</strong>; trait concepts: stable, individual differences, quantitative measurement.',
  'Big Five: <strong>OCEAN</strong>.',
  'Self-concept components (Module II): <strong>self-image, self-esteem, ideal self</strong>.',
  'Perception: <strong>exposure → attention → interpretation → retention</strong>.',
  'ABC = <strong>tripartite model</strong>. High C–A–B; Low B–A–C; Impulse A–B–C.',
  'Learning theories for attitude formation: <strong>classical, operant, observational</strong>.',
  'Attribution: <strong>internal (laziness) vs external (workload)</strong>.',
  'Six selves: <strong>actual, ideal, social, ideal social, extended, situational</strong>.',
  '“People buy <strong>identity</strong>, not just objects” (self-image congruence).',
  'AIO on the slide: <strong>Attitude, Interest, Opinions</strong> (textbook: Activities).',
  'Culture is a <strong>shared</strong> system of perceptions and values.',
  'Iceberg: <strong>behaviours & practices</strong> above; <strong>interpretations</strong> and <strong>core values</strong> below.',
  'Most customs are <strong>electives</strong>.',
  'Semiotics in <strong>branding, advertising, product design, packaging</strong>.',
  'Persuasion: <strong>reciprocity, social proof, scarcity & urgency, authority & liking, commitment & consistency</strong>.',
  'Policy tools: <strong>protective legislation, economic incentives & disincentives, behavioural interventions</strong>.'
])}

<h2>Answer-writing tips</h2>
${tip('Structure that scores', ol([
  '<strong>Define</strong> — use the slide wording where one exists.',
  '<strong>Diagram</strong> — draw early; label every part.',
  '<strong>Explain</strong> — one heading per component, with two or three lines each.',
  '<strong>Example</strong> — one Indian brand example per main point.',
  '<strong>Apply</strong> — “Marketing implications” section.',
  '<strong>Conclude</strong> — two lines linking back to the question.'
]))}
${warn('Watch-outs across the course', ul([
  'Do not present supplementary textbook content as if it is on your slides; your lecturer may follow the slides closely.',
  'The family life cycle appears only as Module V’s title — prepare it from these notes.',
  'Your slides use “non Freudian” and “Neo-Freudian” for the same content; write Neo-Freudian.',
  'The low-involvement hierarchy on the slide is B–A–C; some textbooks give C–B–A.'
]))}
`;

  CB.recap = { html: html };
})();
