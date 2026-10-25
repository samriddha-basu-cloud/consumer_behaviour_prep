/* Page-by-page coverage map of every PDF page.
   structural: true = title, thank-you or similar slide with no teaching content. */
(function () {
  'use strict';
  function row(p, title, topic, structural) { return { p: p, title: title, topic: topic || null, structural: !!structural }; }

  var pages = {
    m1: [
      row(1, 'Title: Consumer Behaviour, Module I', 'introduction', true),
      row(2, 'Consumer behaviour: thoughts, emotions, actions; three guiding questions; predict trends >> anticipate needs >> campaigns', 'introduction'),
      row(3, 'Continual process of valuation, revaluation and analysis; Hoyer et al. (2009) definition', 'introduction'),
      row(4, 'How consumers decide; activities of searching, evaluating, selecting, using, disposing', 'introduction'),
      row(5, 'Consumer role: payer, user, buyer', 'consumer-roles'),
      row(6, 'Relevance: dynamics, choices, privileges, satisfaction, decisiveness, retention, categorization, acquisition, CRM', 'relevance'),
      row(7, 'Consumer behaviour >> marketing strategy: eight strategic areas', 'marketing-strategy'),
      row(8, '3Cs framework: customer, competitor, company', 'three-cs'),
      row(9, 'Maslow’s hierarchy of needs (pyramid diagram with groupings)', 'maslow'),
      row(10, 'Psychology >> CB: consumer psychology', 'psychology'),
      row(11, 'Psychological drivers: perception, motivation, attitude, learning, beliefs', 'psychology'),
      row(12, 'Implications: marketing research, communication, employee training', 'psychology'),
      row(13, 'Social psychology: cognitive dissonance, theory of planned behaviour, peers and reference groups', 'social-psychology'),
      row(14, 'Cognitive dissonance: actions vs beliefs, pre/post purchase, affirmation/rationalisation', 'social-psychology'),
      row(15, 'Economics: utility maximisation, indifference curve', 'economics-anthropology'),
      row(16, 'Anthropology: human science', 'economics-anthropology'),
      row(17, 'Consumer profile: meaning and purpose', 'consumer-profile'),
      row(18, 'Consumer profile: demographic, geographic, psychographic, behavioural, pain points', 'consumer-profile'),
      row(19, 'Consumer behaviour drivers: psychological, social, personal, cultural, economic', 'psychological-personal-factors'),
      row(20, 'Psychological factors incl. selective attention, distortion, retention', 'psychological-personal-factors'),
      row(21, 'Personal factors: age, occupation, economic situation, lifestyle, personality', 'psychological-personal-factors'),
      row(22, 'Cultural factors: culture, sub-culture, social class', 'cultural-social-factors'),
      row(23, 'Social factors: family; reference groups (primary, secondary, aspired, disliked)', 'cultural-social-factors'),
      row(24, 'Social factors: role and status, opinion leader', 'cultural-social-factors'),
      row(25, 'Consumer buying process: five stages', 'buying-process'),
      row(26, 'Consumer buying situations: involvement and brand differences', 'buying-behaviour'),
      row(27, 'Buying patterns: 2 × 2 matrix diagram', 'buying-behaviour'),
      row(28, 'Emotional vs rational', 'emotional-rational'),
      row(29, 'Thank you', null, true)
    ],
    m2: [
      row(1, 'Title: Consumer behaviour, Module II', 'motivation-overview', true),
      row(2, 'Process theory of motivation: the “hows”', 'motivation-overview'),
      row(3, 'Models of process theory: Skinner, Vroom, Adams, Locke', 'motivation-overview'),
      row(4, 'Skinner’s reinforcement theory: operant conditioning, stimulus–response', 'process-theories'),
      row(5, 'Vroom’s expectancy theory: valence, expectancy, instrumentality', 'process-theories'),
      row(6, 'Adams’ equity theory: inputs, outputs, fairness', 'process-theories'),
      row(7, 'Locke’s goal-setting theory: Locke & Latham, 1968, goals and feedback', 'process-theories'),
      row(8, 'Content theory of motivation: the “whats”', 'motivation-overview'),
      row(9, 'Models of content theory: Maslow, Herzberg, McClelland, Alderfer', 'content-theories'),
      row(10, 'Personality: inner psychological characteristics', 'personality'),
      row(11, 'Personality: unique characteristics; enduring and situational factors', 'personality'),
      row(12, 'Theories of personality: trait, Freudian, Neo-Freudian', 'trait-theory'),
      row(13, 'The trait theory', 'trait-theory'),
      row(14, 'Trait concepts: stable characteristics, individual differences, quantitative measurement', 'trait-theory'),
      row(15, 'Specific consumer traits: innovativeness, dogmatism, materialism, need for cognition, ethnocentrism', 'trait-theory'),
      row(16, 'Big Five (OCEAN) model', 'trait-theory'),
      row(17, 'Freudian theory: id, ego, super ego', 'freudian-theories'),
      row(18, '“Non Freudian” theory: compliant, aggressive, detached', 'freudian-theories'),
      row(19, '“Non Freudian” theory (duplicate of p. 18)', 'freudian-theories'),
      row(20, 'Self-concept: multidimensional perception of who we are', 'self-concept'),
      row(21, 'Self-concept: self-image, self-esteem, ideal self', 'self-concept'),
      row(22, 'Perception: customer opinions, feelings and beliefs about a brand', 'perception'),
      row(23, 'Stages: exposure, attention, interpretation, retention', 'perception'),
      row(24, 'Reference links (two URLs)', 'perception'),
      row(25, 'Thank you (photo credit)', null, true)
    ],
    m3: [
      row(1, 'Title: Learning Theories and Their Applications, Module III', 'attitude-formation', true),
      row(2, 'Branding >> CB: colour psychology, shape and symbolism, consistency, emotional branding', 'branding'),
      row(3, 'Attitude: definitions', 'attitude'),
      row(4, 'ABC model of attitude: affect, behaviour, cognitive', 'abc-model'),
      row(5, 'ABC model (tripartite): involvement levels and response hierarchies table', 'abc-model'),
      row(6, 'Attitude formation: classical, operant, observational learning', 'attitude-formation'),
      row(7, 'Attribution theory: definitions', 'attribution'),
      row(8, 'Attribution theory: importance; internal vs external example', 'attribution'),
      row(9, 'Attribution theory: internal and external attribution', 'attribution'),
      row(10, 'Thank you', null, true)
    ],
    m4: [
      row(1, 'Title: Self-Concept, Module IV', 'self', true),
      row(2, 'What is self? Self-concept in consumer behaviour', 'self'),
      row(3, 'Concept of self-types: six types', 'types-of-self'),
      row(4, 'Self-image congruence theory', 'self-image-congruence'),
      row(5, 'Psychographics: AIO', 'psychographics'),
      row(6, 'Culture: definition', 'culture'),
      row(7, 'Socio-cultural environment: ten elements', 'culture'),
      row(8, 'The iceberg concept of culture (AFS diagram)', 'cultural-iceberg'),
      row(9, 'The cultural iceberg: behaviours, interpretations, core values; shaping forces', 'cultural-iceberg'),
      row(10, 'Types of customs: imperatives and electives', 'customs'),
      row(11, 'Types of customs: exclusives', 'customs'),
      row(12, 'Semiotics: signs, symbols, meanings', 'semiotics'),
      row(13, 'Semiotics: branding, advertising, product design, packaging', 'semiotics'),
      row(14, 'Thank you', null, true)
    ],
    m5: [
      row(1, 'Title: Family Life Cycle, Module V (no further slide on this topic)', 'family-life-cycle', true),
      row(2, 'Consumer materialism', 'materialism'),
      row(3, 'Consumption and persuasion; persuasion knowledge', 'persuasion'),
      row(4, 'Principles of persuasion: five principles', 'principles-of-persuasion'),
      row(5, 'Knowledge for public policy >> CB: consumerism', 'public-policy'),
      row(6, 'Key public policy mechanisms', 'public-policy'),
      row(7, 'Reference links (four URLs)', 'public-policy'),
      row(8, 'Thank you', null, true)
    ]
  };

  var total = 0, content = 0;
  Object.keys(pages).forEach(function (k) { pages[k].forEach(function (r) { total++; if (!r.structural) content++; }); });

  CB.coverage = {
    total: total,
    contentPages: content,
    pages: pages,
    intro: '<div class="b add"><span class="tag add">How this was checked</span><p>Each PDF was reviewed page by page in two ways: the text of every page was extracted, and every page was rendered as an image and inspected, so diagrams, tables and image-only slides (such as the Maslow pyramid, the buying-patterns matrix, the ABC involvement table and both iceberg diagrams) are included. “Structural” pages are title and thank-you slides; title slides are still linked where the title names a topic.</p></div>'
  };
})();
