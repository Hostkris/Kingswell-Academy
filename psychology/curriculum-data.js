// Kingswell Academy Psychology Curriculum Data
// Original curriculum scaffold based on user-selected psychology references.
// Do not paste copyrighted book pages into lessons. Use original summaries, examples, questions, and citations.

export const psychologySourceMap = [
  {
    id: "src-openstax-psych-2e",
    title: "OpenStax Psychology 2e",
    role: "Legal backbone option for Intro Psychology readings with attribution.",
    level: "basic"
  },
  {
    id: "src-psychology-demystified",
    title: "Psychology Demystified",
    role: "Basic self-teaching structure: intro concepts, quizzes, section tests, final review model.",
    level: "basic"
  },
  {
    id: "src-the-psychology-book",
    title: "The Psychology Book: Big Ideas Simply Explained",
    role: "History of psychology, major schools, major theorists, big-idea timeline.",
    level: "basic"
  },
  {
    id: "src-basic-freud",
    title: "Basic Freud",
    role: "Intermediate psychodynamic theory: unconscious, anxiety, defenses, dreams, transference.",
    level: "intermediate"
  },
  {
    id: "src-conscious-discipline",
    title: "Conscious Discipline",
    role: "Applied behavior, classroom psychology, emotional regulation, problem-solving.",
    level: "intermediate"
  },
  {
    id: "src-psychology-trauma",
    title: "The Psychology of Trauma",
    role: "Advanced trauma-informed concepts, ethics, individual differences, neuroscience overview.",
    level: "advanced"
  },
  {
    id: "src-psychology-chess",
    title: "The Psychology of Chess / Psychology in Chess",
    role: "Advanced elective for attention, expertise, decision-making, performance pressure.",
    level: "advanced"
  }
];

export const psychologyCourses = [
  {
    id: "psy-basic-101",
    level: "basic",
    title: "Basic Psychology 101",
    subtitle: "Mind, behavior, learning, memory, emotion, personality, and society",
    estimatedWeeks: 12,
    passingScore: 80,
    finalTestSize: 40,
    bookSources: ["Psychology Demystified", "The Psychology Book", "OpenStax Psychology 2e"],
    disclaimer: "This course is educational. It does not train students to diagnose, treat, or provide clinical care.",
    outcomes: [
      "Define psychology as the scientific study of behavior and mental processes.",
      "Identify major schools of psychology and their basic claims.",
      "Explain learning, memory, emotion, personality, and social influence using examples.",
      "Recognize basic ethical limits in psychology education."
    ],
    modules: [
      {
        id: "basic-m1",
        title: "Foundations of Psychology",
        lessons: [
          {
            id: "basic-l1",
            title: "What Psychology Studies",
            sourceRefs: ["src-psychology-demystified", "src-the-psychology-book"],
            objectives: ["Define psychology", "Separate behavior from mental processes", "Name common psychology subfields"],
            vocabulary: [
              { term: "Psychology", definition: "The scientific study of behavior and mental processes." },
              { term: "Behavior", definition: "Observable action that can be described, measured, or studied." },
              { term: "Mental process", definition: "Internal activity such as thinking, emotion, memory, perception, or motivation." }
            ],
            lesson: [
              "Psychology studies what people do and what happens inside the mind. A strong psychology student learns to separate observable behavior from assumptions. For example, 'the student left the room' is behavior; 'the student hates class' is an interpretation that needs evidence.",
              "A serious psychology course uses science, not gossip. Students learn to ask: What was observed? What evidence supports the claim? What other explanations are possible?",
              "Psychology includes many areas: biological psychology, developmental psychology, cognitive psychology, social psychology, personality, abnormal psychology, counseling, and applied fields such as education, sports, work, and performance."
            ],
            examples: [
              "Behavior: A person avoids eye contact during a speech.",
              "Mental process: The person may be anxious, distracted, embarrassed, or focused elsewhere. The course teaches students not to jump to conclusions without evidence."
            ],
            practice: ["Write three examples of behavior and three possible mental processes behind each one."],
            homeworkId: "hw-basic-l1",
            quizId: "quiz-basic-l1"
          },
          {
            id: "basic-l2",
            title: "Psychology as a Science",
            sourceRefs: ["src-psychology-demystified"],
            objectives: ["Explain why psychology uses research", "Identify evidence-based thinking", "Avoid pop-psychology shortcuts"],
            vocabulary: [
              { term: "Hypothesis", definition: "A testable prediction." },
              { term: "Evidence", definition: "Information gathered through observation, measurement, or research." },
              { term: "Bias", definition: "A systematic error in thinking, measuring, or interpreting." }
            ],
            lesson: [
              "Psychology is not just advice. It is a science that tests claims. A claim becomes stronger when it can be measured, repeated, and compared against other explanations.",
              "Students must learn the difference between a personal story and research evidence. Stories can point to questions, but they do not prove broad truths by themselves.",
              "Good psychology asks clear questions, uses careful definitions, and admits limits. That is what separates a real curriculum from internet armchair psychology."
            ],
            examples: [
              "Weak claim: 'Everyone who listens to sad music is depressed.' Stronger question: 'Is frequent sad music listening associated with mood scores in a measured sample?'"
            ],
            practice: ["Turn three opinion claims about behavior into testable research questions."],
            homeworkId: "hw-basic-l2",
            quizId: "quiz-basic-l2"
          }
        ]
      },
      {
        id: "basic-m2",
        title: "History and Major Schools",
        lessons: [
          {
            id: "basic-l3",
            title: "Major Schools of Psychology",
            sourceRefs: ["src-the-psychology-book"],
            objectives: ["Identify structuralism, behaviorism, psychoanalysis, humanism, cognitive psychology", "Match schools to core questions"],
            vocabulary: [
              { term: "Behaviorism", definition: "A school focused on observable behavior and learning from the environment." },
              { term: "Psychoanalysis", definition: "A theory tradition emphasizing unconscious motives, inner conflict, and early experience." },
              { term: "Cognitive psychology", definition: "The study of mental processes such as memory, attention, language, and decision-making." }
            ],
            lesson: [
              "Psychology developed through competing schools. Each school focused on a different part of the human being: behavior, inner conflict, conscious experience, thought, biology, or meaning.",
              "Students should not treat one school as the whole truth. The stronger approach is to understand what each school explains well and where it has limits.",
              "Behaviorism is useful for habits and reinforcement. Psychoanalysis is useful for exploring unconscious patterns. Cognitive psychology is useful for attention, memory, and interpretation. Humanistic psychology emphasizes dignity, meaning, and growth."
            ],
            examples: [
              "A fear of public speaking can be examined through behaviorism as learned avoidance, through cognition as negative self-talk, and through psychodynamic theory as deeper conflict or shame."
            ],
            practice: ["Pick one behavior and explain it from two different psychological schools."],
            homeworkId: "hw-basic-l3",
            quizId: "quiz-basic-l3"
          },
          {
            id: "basic-l4",
            title: "Ethics and Respectful Study of People",
            sourceRefs: ["src-psychology-demystified"],
            objectives: ["Define informed consent", "Explain confidentiality", "Identify unethical claims"],
            vocabulary: [
              { term: "Informed consent", definition: "A person's voluntary agreement after receiving clear information about a study or activity." },
              { term: "Confidentiality", definition: "Protecting private information from inappropriate sharing." },
              { term: "Harm reduction", definition: "Designing research and teaching practices to reduce risk and protect people." }
            ],
            lesson: [
              "Psychology studies real people, so ethics is not optional decoration. It is the guardrail. Students must understand privacy, consent, boundaries, and the difference between education and treatment.",
              "A platform can teach symptoms and theories, but it should not diagnose users. It should direct serious mental health concerns to qualified professionals.",
              "Ethical psychology avoids humiliation, manipulation, false certainty, and careless labels. A student who knows ethics becomes safer and more accurate."
            ],
            examples: [
              "Bad platform wording: 'You have PTSD.' Better wording: 'These symptoms can be associated with trauma reactions; diagnosis requires a qualified professional.'"
            ],
            practice: ["Rewrite three unsafe psychological claims into responsible educational statements."],
            homeworkId: "hw-basic-l4",
            quizId: "quiz-basic-l4"
          }
        ]
      },
      {
        id: "basic-m3",
        title: "Learning, Memory, and Emotion",
        lessons: [
          {
            id: "basic-l5",
            title: "Learning: Conditioning and Reinforcement",
            sourceRefs: ["src-psychology-demystified", "src-the-psychology-book"],
            objectives: ["Define classical conditioning", "Define operant conditioning", "Identify reinforcement and punishment"],
            vocabulary: [
              { term: "Classical conditioning", definition: "Learning by association between stimuli." },
              { term: "Operant conditioning", definition: "Learning through consequences." },
              { term: "Reinforcement", definition: "A consequence that increases the likelihood of a behavior." }
            ],
            lesson: [
              "Learning psychology explains how habits, fears, routines, and responses form. Classical conditioning connects signals with reactions. Operant conditioning connects behavior with consequences.",
              "Reinforcement increases behavior. Punishment decreases behavior. But real teaching requires wisdom: punishment can stop a behavior for the moment without teaching a better replacement.",
              "Students should learn to ask: What is being rewarded? What is being avoided? What consequence keeps this pattern alive?"
            ],
            examples: [
              "A child gets attention every time he interrupts. Even negative attention may reinforce interrupting if attention was the goal." 
            ],
            practice: ["Create a behavior chart showing behavior, consequence, and likely future effect."],
            homeworkId: "hw-basic-l5",
            quizId: "quiz-basic-l5"
          },
          {
            id: "basic-l6",
            title: "Memory and Forgetting",
            sourceRefs: ["src-psychology-demystified", "src-the-psychology-book"],
            objectives: ["Describe encoding, storage, retrieval", "Explain why forgetting happens", "Use memory strategies"],
            vocabulary: [
              { term: "Encoding", definition: "Taking information into memory." },
              { term: "Storage", definition: "Keeping information over time." },
              { term: "Retrieval", definition: "Bringing stored information back into awareness." }
            ],
            lesson: [
              "Memory is not a perfect recording. It is a system that encodes, stores, and retrieves information. That means memory can be strengthened, distorted, or blocked.",
              "Students remember more when they use retrieval practice, spacing, examples, and self-testing. Passive rereading feels comfortable, but testing yourself usually builds stronger memory.",
              "A psychology platform should use frequent low-stakes quizzes because the act of remembering is part of learning. Old-school flashcards still work. Fancy paint job, same engine."
            ],
            examples: ["Remembering a definition after practice is retrieval. Confusing two similar terms is interference."],
            practice: ["Make 10 flashcards for this module and test yourself twice with a break between attempts."],
            homeworkId: "hw-basic-l6",
            quizId: "quiz-basic-l6"
          }
        ]
      },
      {
        id: "basic-m4",
        title: "Personality, Society, and Mental Health",
        lessons: [
          {
            id: "basic-l7",
            title: "Personality and Individual Differences",
            sourceRefs: ["src-psychology-demystified", "src-the-psychology-book"],
            objectives: ["Define personality", "Explain traits", "Separate trait description from moral judgment"],
            vocabulary: [
              { term: "Personality", definition: "Stable patterns in thinking, feeling, and behaving." },
              { term: "Trait", definition: "A relatively consistent characteristic." },
              { term: "Temperament", definition: "Early-appearing emotional and behavioral tendencies." }
            ],
            lesson: [
              "Personality psychology studies patterns. It does not mean one test can fully explain a person. Traits describe tendencies, not destiny.",
              "A serious student learns to describe behavior accurately without using lazy labels. 'She is high in social confidence' is clearer than 'she is just dramatic.'",
              "Personality can be studied through trait theory, psychodynamic theory, humanistic theory, social learning, and biological influences. Each gives part of the picture."
            ],
            examples: ["Two people may both be quiet. One is shy, one is focused, one is tired, and one simply prefers listening."],
            practice: ["Describe a person's behavior using neutral trait language instead of insults or assumptions."],
            homeworkId: "hw-basic-l7",
            quizId: "quiz-basic-l7"
          },
          {
            id: "basic-l8",
            title: "Psychological Disorders: Education, Not Diagnosis",
            sourceRefs: ["src-psychology-demystified"],
            objectives: ["Explain what a disorder category is", "Identify why diagnosis requires qualification", "Use responsible mental health language"],
            vocabulary: [
              { term: "Symptom", definition: "A reported or observed sign that may be related to a condition." },
              { term: "Diagnosis", definition: "A professional classification based on standards, assessment, and clinical judgment." },
              { term: "Stigma", definition: "Negative labeling or unfair treatment based on a condition or identity." }
            ],
            lesson: [
              "Students can learn about anxiety, depression, trauma, psychosis, addiction, and personality disorders, but education is not diagnosis. Diagnosis requires trained professionals, proper assessment, and context.",
              "The platform should teach warning signs, definitions, and respectful language. It should also make clear that online lessons cannot replace therapy, emergency help, or professional care.",
              "The best psychology education keeps two things together: compassion and precision. Too much compassion without precision becomes mush. Precision without compassion becomes a hammer looking for nails."
            ],
            examples: ["A student can say 'these symptoms are commonly discussed in anxiety education' rather than 'you have anxiety disorder.'"],
            practice: ["Create a responsible disclaimer for a mental health lesson."],
            homeworkId: "hw-basic-l8",
            quizId: "quiz-basic-l8"
          }
        ]
      }
    ]
  },
  {
    id: "psy-intermediate-201",
    level: "intermediate",
    title: "Intermediate Psychology: Theories and Applied Behavior",
    subtitle: "Psychodynamic ideas, behavior patterns, classroom psychology, and case reasoning",
    estimatedWeeks: 12,
    passingScore: 80,
    finalTestSize: 40,
    bookSources: ["Basic Freud", "Conscious Discipline", "Psychology Demystified"],
    disclaimer: "This course teaches theory and applied analysis. It is not clinical supervision or therapy training.",
    outcomes: [
      "Explain unconscious processes and defense mechanisms in responsible language.",
      "Apply behavior principles to classroom and everyday examples.",
      "Analyze simple case studies without diagnosing.",
      "Use ethics and boundaries in psychological explanation."
    ],
    modules: [
      {
        id: "intermediate-m1",
        title: "Psychodynamic Foundations",
        lessons: [
          {
            id: "intermediate-l1",
            title: "The Unconscious and Inner Conflict",
            sourceRefs: ["src-basic-freud"],
            objectives: ["Define unconscious process", "Explain inner conflict", "Use psychodynamic ideas carefully"],
            vocabulary: [
              { term: "Unconscious", definition: "Mental activity outside ordinary awareness that may still influence behavior." },
              { term: "Inner conflict", definition: "Tension between motives, fears, values, or desires." },
              { term: "Insight", definition: "A clearer understanding of a pattern, motive, or conflict." }
            ],
            lesson: [
              "Psychodynamic theory argues that not all motives are obvious to the person having them. A student may say 'I do not know why I keep doing this,' and psychodynamic thinking asks whether an unseen pattern is operating.",
              "This does not mean every behavior has a hidden dramatic secret. Sometimes a habit is just a habit. The mature student avoids overinterpretation and looks for repeated patterns, emotional intensity, and evidence.",
              "The practical skill is pattern recognition: What keeps repeating? What emotion appears each time? What does the person avoid knowing, feeling, or saying?"
            ],
            examples: ["A person repeatedly chooses unavailable partners while saying they want closeness. A psychodynamic lens asks what closeness may represent or threaten."],
            practice: ["Analyze a fictional repeated behavior using observable evidence and cautious interpretation."],
            homeworkId: "hw-intermediate-l1",
            quizId: "quiz-intermediate-l1"
          },
          {
            id: "intermediate-l2",
            title: "Defense Mechanisms",
            sourceRefs: ["src-basic-freud"],
            objectives: ["Define defense mechanism", "Identify repression, projection, denial, displacement, rationalization", "Explain protective and harmful uses"],
            vocabulary: [
              { term: "Defense mechanism", definition: "A mental strategy that reduces anxiety or protects self-image." },
              { term: "Projection", definition: "Attributing one's own unacceptable feeling or impulse to someone else." },
              { term: "Rationalization", definition: "Creating a reasonable-sounding explanation to cover a more uncomfortable motive." }
            ],
            lesson: [
              "Defense mechanisms protect a person from emotional discomfort. They can be useful in the short term, but they become a problem when they block truth, growth, or responsibility.",
              "Students should learn common defenses through examples. Denial rejects reality. Projection pushes an internal feeling onto someone else. Displacement redirects emotion to a safer target. Rationalization makes an excuse sound noble.",
              "The goal is not to weaponize these terms against people. The goal is to understand behavior with more accuracy and humility. Psychology words used as insults are just fancy mud."
            ],
            examples: ["A worker is angry at the boss but snaps at family after work. That can illustrate displacement."],
            practice: ["Write five examples of defense mechanisms and explain the anxiety each defense may reduce."],
            homeworkId: "hw-intermediate-l2",
            quizId: "quiz-intermediate-l2"
          }
        ]
      },
      {
        id: "intermediate-m2",
        title: "Applied Behavior and Emotional Regulation",
        lessons: [
          {
            id: "intermediate-l3",
            title: "Behavior Patterns and Consequences",
            sourceRefs: ["src-conscious-discipline", "src-psychology-demystified"],
            objectives: ["Identify behavior patterns", "Map antecedent, behavior, consequence", "Create replacement behavior plans"],
            vocabulary: [
              { term: "Antecedent", definition: "What happens before a behavior." },
              { term: "Consequence", definition: "What happens after a behavior." },
              { term: "Replacement behavior", definition: "A healthier behavior taught to serve the same need or function." }
            ],
            lesson: [
              "Applied behavior work starts with a plain map: what happened before, what the person did, and what happened after. This prevents sloppy explanations.",
              "A behavior often continues because it works somehow. It may gain attention, escape a task, get access to something, or regulate emotion. The job is to teach a better behavior that meets the need without chaos.",
              "A platform lesson should ask students to build behavior maps and then propose one replacement behavior. That teaches intervention thinking without pretending to be therapy."
            ],
            examples: ["Antecedent: hard assignment. Behavior: joking loudly. Consequence: removed from work. Possible function: escape."],
            practice: ["Complete an ABC behavior chart for a classroom scenario."],
            homeworkId: "hw-intermediate-l3",
            quizId: "quiz-intermediate-l3"
          },
          {
            id: "intermediate-l4",
            title: "Composure, Empathy, and Problem Solving",
            sourceRefs: ["src-conscious-discipline"],
            objectives: ["Explain self-regulation", "Practice empathy statements", "Create problem-solving scripts"],
            vocabulary: [
              { term: "Self-regulation", definition: "The ability to manage attention, emotion, and behavior toward a goal." },
              { term: "Empathy", definition: "Understanding another person's emotional experience without losing boundaries." },
              { term: "Problem solving", definition: "Identifying the issue, choices, consequences, and next action." }
            ],
            lesson: [
              "A student studying applied psychology must understand that discipline is not just punishment. Good discipline teaches skills: composure, attention, empathy, responsibility, and problem solving.",
              "Emotional regulation begins with the adult or leader. If the teacher loses composure, the classroom learns escalation. If the teacher models calm structure, students have a better chance to mirror it.",
              "The platform should include scripts and practice drills. Psychology is not learned by definitions alone; students need repetition, examples, and feedback. Granddad called that practice. He was right."
            ],
            examples: ["Instead of 'Stop being bad,' a teacher might say, 'You wanted the marker. Ask for it with words.'"],
            practice: ["Rewrite five punitive statements into skill-teaching statements."],
            homeworkId: "hw-intermediate-l4",
            quizId: "quiz-intermediate-l4"
          }
        ]
      },
      {
        id: "intermediate-m3",
        title: "Case Study Reasoning",
        lessons: [
          {
            id: "intermediate-l5",
            title: "Reading a Case Without Diagnosing",
            sourceRefs: ["src-psychology-demystified", "src-basic-freud"],
            objectives: ["Separate facts from interpretation", "Use multiple lenses", "Avoid diagnosis claims"],
            vocabulary: [
              { term: "Case study", definition: "A detailed description of a person, situation, or pattern used for learning and analysis." },
              { term: "Formulation", definition: "A reasoned explanation of how factors may connect in a case." },
              { term: "Differential explanation", definition: "Considering multiple possible explanations instead of one fixed answer." }
            ],
            lesson: [
              "Case reasoning is where students start acting like thinkers. They collect facts, separate interpretation, test theories, and avoid playing online doctor.",
              "A good case answer uses cautious language: 'This may suggest,' 'One possible explanation is,' or 'More information would be needed.' Weak answers overstate: 'This proves,' 'They definitely have,' or 'This always means.'",
              "The student should examine behavior through learning, cognition, emotion, social context, development, and psychodynamic patterns. One lens is useful; five lenses are better."
            ],
            examples: ["Fact: student misses deadlines. Possible explanations: poor planning, anxiety, low motivation, family stress, learning difficulty, avoidance reinforcement."],
            practice: ["Read a short fictional case and list facts, assumptions, and three possible explanations."],
            homeworkId: "hw-intermediate-l5",
            quizId: "quiz-intermediate-l5"
          },
          {
            id: "intermediate-l6",
            title: "Ethics, Boundaries, and Language",
            sourceRefs: ["src-psychology-demystified", "src-conscious-discipline"],
            objectives: ["Explain limits of student analysis", "Use responsible language", "Identify referral situations"],
            vocabulary: [
              { term: "Boundary", definition: "A limit that protects safety, role clarity, and responsibility." },
              { term: "Referral", definition: "Directing someone to qualified help when needs exceed the role." },
              { term: "Scope", definition: "The proper range of what a person or platform is qualified to do." }
            ],
            lesson: [
              "A psychology platform needs firm boundaries. It can teach concepts, give practice, and test knowledge. It should not tell students they are therapists, diagnose users, or handle crisis care.",
              "Students need to learn referral language: 'This sounds serious enough to discuss with a qualified professional.' That sentence can do more good than a thousand reckless labels.",
              "Advanced knowledge without boundaries is dangerous. The more psychological vocabulary students learn, the more responsibility they carry."
            ],
            examples: ["Unsafe: 'Your child has a disorder.' Safer: 'These behaviors may deserve professional evaluation.'"],
            practice: ["Create a boundary statement for a case-analysis assignment."],
            homeworkId: "hw-intermediate-l6",
            quizId: "quiz-intermediate-l6"
          }
        ]
      }
    ]
  },
  {
    id: "psy-advanced-301",
    level: "advanced",
    title: "Advanced Psychology: Trauma, Assessment, and Case Formulation",
    subtitle: "Trauma-informed thinking, psychometrics basics, ethics, and advanced case analysis",
    estimatedWeeks: 12,
    passingScore: 85,
    finalTestSize: 40,
    bookSources: ["The Psychology of Trauma", "Basic Freud", "The Psychology of Chess"],
    disclaimer: "Advanced lessons are for education only. Psychological assessment, diagnosis, and treatment require proper credentials and supervised practice.",
    outcomes: [
      "Explain trauma-informed principles without diagnosing.",
      "Distinguish screening, assessment, testing, and diagnosis.",
      "Evaluate reliability, validity, and fairness in tests.",
      "Write cautious case formulations and research critiques."
    ],
    modules: [
      {
        id: "advanced-m1",
        title: "Trauma-Informed Foundations",
        lessons: [
          {
            id: "advanced-l1",
            title: "What Trauma-Informed Education Can and Cannot Do",
            sourceRefs: ["src-psychology-trauma"],
            objectives: ["Define trauma-informed perspective", "Explain why diagnosis is outside the course", "Use safe educational language"],
            vocabulary: [
              { term: "Trauma-informed", definition: "An approach that considers how distressing experiences may affect behavior, emotion, safety, and relationships." },
              { term: "Trigger", definition: "A cue that may activate distressing memories, body responses, or emotions." },
              { term: "Safety", definition: "Physical, emotional, and relational conditions that reduce threat and support learning." }
            ],
            lesson: [
              "Trauma-informed psychology shifts the question from lazy blame toward context: What may have happened? What does this behavior protect against? What supports safety and choice?",
              "This does not mean every struggle is trauma. It means the student learns to consider trauma responsibly without using it as a blanket explanation.",
              "A platform must stay in its lane. It can teach concepts and scenarios. It cannot diagnose PTSD, treat trauma, or replace professional help. That boundary keeps the curriculum credible."
            ],
            examples: ["A student who freezes during loud conflict may need support and safety cues, not public shaming."],
            practice: ["Rewrite a blame-based classroom statement into a trauma-informed statement."],
            homeworkId: "hw-advanced-l1",
            quizId: "quiz-advanced-l1"
          },
          {
            id: "advanced-l2",
            title: "PTSD, CPTSD, and Symptom Language",
            sourceRefs: ["src-psychology-trauma"],
            objectives: ["Use symptom language", "Avoid diagnosis claims", "Explain why time, impairment, and assessment matter"],
            vocabulary: [
              { term: "PTSD", definition: "A professional diagnosis involving trauma exposure and specific symptom patterns assessed by qualified clinicians." },
              { term: "CPTSD", definition: "A trauma-related condition often associated with prolonged or repeated trauma and broader self-organization difficulties." },
              { term: "Impairment", definition: "A meaningful disruption in daily functioning." }
            ],
            lesson: [
              "Students can learn about trauma symptoms such as intrusive memories, avoidance, hyperarousal, mood changes, and relational difficulties. But symptom education is not diagnosis.",
              "Good language matters. Say 'may be consistent with trauma-related distress' instead of 'this person has PTSD.' The first is educational; the second pretends to be clinical authority.",
              "An advanced course should train students to recognize limits, recommend qualified evaluation when appropriate, and avoid turning labels into weapons."
            ],
            examples: ["Nightmares after a frightening event may be trauma-related, but a full diagnosis depends on professional assessment and criteria."],
            practice: ["Write three safe sentences explaining trauma symptoms without diagnosing."],
            homeworkId: "hw-advanced-l2",
            quizId: "quiz-advanced-l2"
          }
        ]
      },
      {
        id: "advanced-m2",
        title: "Assessment, Testing, and Measurement",
        lessons: [
          {
            id: "advanced-l3",
            title: "Psychological Testing Basics",
            sourceRefs: ["src-psychology-demystified"],
            objectives: ["Distinguish screening from diagnosis", "Define reliability and validity", "Explain ethical testing limits"],
            vocabulary: [
              { term: "Screening", definition: "A brief tool used to flag possible concerns for further evaluation." },
              { term: "Reliability", definition: "Consistency of a measurement." },
              { term: "Validity", definition: "Whether a tool measures what it claims to measure." }
            ],
            lesson: [
              "Psychological testing is not just asking interesting questions. A real test needs reliability, validity, scoring rules, interpretation limits, fairness, and proper administration.",
              "Your platform can use educational quizzes and self-checks, but it should label them correctly. A course quiz measures course learning. It is not a clinical assessment.",
              "Students should learn the measurement basics: consistent scores matter, accurate interpretation matters, and fairness matters. A broken ruler does not become scientific because it has a nice font."
            ],
            examples: ["A 10-question course quiz can check whether students know defense mechanisms. It cannot determine a personality disorder."],
            practice: ["Review a sample questionnaire and identify what it can and cannot claim."],
            homeworkId: "hw-advanced-l3",
            quizId: "quiz-advanced-l3"
          },
          {
            id: "advanced-l4",
            title: "Questionnaire Design for Education",
            sourceRefs: ["src-psychology-demystified"],
            objectives: ["Write clear questions", "Avoid leading wording", "Build answer explanations"],
            vocabulary: [
              { term: "Item", definition: "One question or prompt on a test or questionnaire." },
              { term: "Distractor", definition: "An incorrect multiple-choice option designed to test knowledge without trickery." },
              { term: "Blueprint", definition: "A plan showing which objectives and skills a test will measure." }
            ],
            lesson: [
              "Good educational questions are mapped to objectives. Bad questions are random trivia. If the lesson objective says 'identify projection,' the question should ask students to identify projection in a definition or scenario.",
              "Multiple-choice options should be fair. Wrong options should be plausible enough to test understanding, but not misleading for cheap points.",
              "Every answer needs an explanation. That is where the platform becomes a teacher instead of a scoreboard."
            ],
            examples: ["Poor item: 'Freud was right about everything. True or false?' Better item: 'Which idea is central to psychodynamic theory?'"],
            practice: ["Write five multiple-choice questions from one lesson objective and include explanations."],
            homeworkId: "hw-advanced-l4",
            quizId: "quiz-advanced-l4"
          }
        ]
      },
      {
        id: "advanced-m3",
        title: "Advanced Case and Performance Psychology",
        lessons: [
          {
            id: "advanced-l5",
            title: "Case Formulation With Multiple Lenses",
            sourceRefs: ["src-psychology-trauma", "src-basic-freud"],
            objectives: ["Build a multi-factor case formulation", "Include limits and missing information", "Recommend responsible next steps"],
            vocabulary: [
              { term: "Biopsychosocial", definition: "A framework considering biological, psychological, and social factors." },
              { term: "Protective factor", definition: "A strength or support that reduces risk." },
              { term: "Risk factor", definition: "A condition that increases possible difficulty or harm." }
            ],
            lesson: [
              "Advanced case formulation looks at biology, learning, thought patterns, emotion, relationships, culture, stressors, strengths, and history. It does not reduce a whole person to one label.",
              "A strong formulation includes what is known, what is inferred, what is unknown, and what should happen next. This keeps analysis honest.",
              "Students should practice writing structured case notes: presenting concern, observed facts, possible maintaining factors, protective factors, ethical limits, and recommended support."
            ],
            examples: ["A student with panic before tests may have sleep issues, past embarrassment, avoidance reinforcement, family pressure, and strengths such as motivation and teacher support."],
            practice: ["Write a six-part case formulation from a fictional case."],
            homeworkId: "hw-advanced-l5",
            quizId: "quiz-advanced-l5"
          },
          {
            id: "advanced-l6",
            title: "Attention, Expertise, and Performance Pressure",
            sourceRefs: ["src-psychology-chess"],
            objectives: ["Explain attention under pressure", "Describe expertise as pattern recognition and practice", "Apply performance psychology concepts"],
            vocabulary: [
              { term: "Expertise", definition: "High-level skill developed through sustained practice, knowledge, feedback, and pattern recognition." },
              { term: "Attention control", definition: "The ability to focus, shift, and maintain attention effectively." },
              { term: "Performance pressure", definition: "Stress that appears when outcomes matter and attention is challenged." }
            ],
            lesson: [
              "Chess psychology is a useful advanced elective because it shows the mind under pressure: attention, memory, pattern recognition, planning, confidence, and emotion control all meet on the board.",
              "Expertise is not magic. It usually reflects years of structured practice, feedback, memory patterns, and decision-making under constraints.",
              "Students can apply this to school, sports, business, test-taking, and leadership. Pressure does not create skill; it reveals preparation. Old rule, still undefeated."
            ],
            examples: ["A strong player sees meaningful patterns, not random pieces. A strong student sees concept patterns, not random definitions."],
            practice: ["Compare expert and beginner thinking in one performance task."],
            homeworkId: "hw-advanced-l6",
            quizId: "quiz-advanced-l6"
          }
        ]
      }
    ]
  }
];

export const psychologyHomework = [
  {
    id: "hw-basic-l1",
    lessonId: "basic-l1",
    title: "Behavior vs. Mental Process Worksheet",
    type: "short_answer",
    maxPoints: 10,
    instructions: "List five observable behaviors. For each behavior, give two possible mental processes, then explain why you cannot know the mental process from behavior alone.",
    prompts: [
      "Behavior 1 and two possible mental processes:",
      "Behavior 2 and two possible mental processes:",
      "Why should psychology students avoid jumping to conclusions?"
    ],
    rubricId: "rubric-short-answer"
  },
  {
    id: "hw-basic-l2",
    lessonId: "basic-l2",
    title: "Turn Opinions Into Research Questions",
    type: "short_answer",
    maxPoints: 10,
    instructions: "Take three everyday claims about behavior and rewrite each as a testable research question.",
    prompts: ["Claim 1 → research question:", "Claim 2 → research question:", "Claim 3 → research question:"],
    rubricId: "rubric-research-question"
  },
  {
    id: "hw-basic-l3",
    lessonId: "basic-l3",
    title: "Two-Lens Theory Comparison",
    type: "short_answer",
    maxPoints: 10,
    instructions: "Choose one behavior and explain it using two schools of psychology.",
    prompts: ["Behavior:", "Explanation from school 1:", "Explanation from school 2:", "Which explanation is stronger and why?"],
    rubricId: "rubric-compare"
  },
  {
    id: "hw-basic-l4",
    lessonId: "basic-l4",
    title: "Ethical Language Rewrite",
    type: "short_answer",
    maxPoints: 10,
    instructions: "Rewrite unsafe psychology statements into responsible educational language.",
    prompts: ["Unsafe statement 1 and rewrite:", "Unsafe statement 2 and rewrite:", "Your platform disclaimer:"],
    rubricId: "rubric-ethics"
  },
  {
    id: "hw-basic-l5",
    lessonId: "basic-l5",
    title: "Conditioning Behavior Map",
    type: "worksheet",
    maxPoints: 10,
    instructions: "Create one behavior map with antecedent, behavior, consequence, and likely future effect.",
    prompts: ["Antecedent:", "Behavior:", "Consequence:", "Likely effect:", "Better replacement behavior:"],
    rubricId: "rubric-applied"
  },
  {
    id: "hw-basic-l6",
    lessonId: "basic-l6",
    title: "Memory Strategy Drill",
    type: "worksheet",
    maxPoints: 10,
    instructions: "Create ten flashcards from this module and explain which memory strategy each one uses.",
    prompts: ["List flashcard topics:", "Explain spacing:", "Explain retrieval practice:"],
    rubricId: "rubric-practice"
  },
  {
    id: "hw-basic-l7",
    lessonId: "basic-l7",
    title: "Neutral Personality Description",
    type: "short_answer",
    maxPoints: 10,
    instructions: "Rewrite labels or insults into neutral trait descriptions.",
    prompts: ["Label 1 and neutral rewrite:", "Label 2 and neutral rewrite:", "Why does neutral language matter?"],
    rubricId: "rubric-language"
  },
  {
    id: "hw-basic-l8",
    lessonId: "basic-l8",
    title: "Mental Health Disclaimer Builder",
    type: "short_answer",
    maxPoints: 10,
    instructions: "Write a disclaimer for an educational lesson about psychological disorders.",
    prompts: ["Disclaimer:", "What the platform can do:", "What the platform cannot do:"],
    rubricId: "rubric-ethics"
  },
  {
    id: "hw-intermediate-l1",
    lessonId: "intermediate-l1",
    title: "Repeated Pattern Analysis",
    type: "case_study",
    maxPoints: 20,
    instructions: "Analyze a fictional repeated behavior using facts, possible emotions, possible conflicts, and limits.",
    prompts: ["Observed pattern:", "Possible conflict:", "Evidence:", "Alternative explanations:", "What more information is needed?"],
    rubricId: "rubric-case-study"
  },
  {
    id: "hw-intermediate-l2",
    lessonId: "intermediate-l2",
    title: "Defense Mechanism Scenario Set",
    type: "case_study",
    maxPoints: 20,
    instructions: "Write five short scenarios, each showing a different defense mechanism. Explain the anxiety being reduced.",
    prompts: ["Scenario list:", "Defense mechanism for each:", "Anxiety reduced for each:"],
    rubricId: "rubric-case-study"
  },
  {
    id: "hw-intermediate-l3",
    lessonId: "intermediate-l3",
    title: "ABC Behavior Chart",
    type: "worksheet",
    maxPoints: 20,
    instructions: "Complete an antecedent-behavior-consequence chart and propose a replacement behavior.",
    prompts: ["Antecedent:", "Behavior:", "Consequence:", "Likely function:", "Replacement behavior:", "How to reinforce the replacement:"],
    rubricId: "rubric-applied"
  },
  {
    id: "hw-intermediate-l4",
    lessonId: "intermediate-l4",
    title: "Skill-Teaching Statement Rewrite",
    type: "short_answer",
    maxPoints: 20,
    instructions: "Rewrite five punitive statements into skill-teaching statements.",
    prompts: ["Statement rewrites:", "Which self-regulation skill is being taught?", "How does the adult model composure?"],
    rubricId: "rubric-language"
  },
  {
    id: "hw-intermediate-l5",
    lessonId: "intermediate-l5",
    title: "Case Facts vs. Assumptions",
    type: "case_study",
    maxPoints: 20,
    instructions: "Use a fictional case to list facts, assumptions, three explanations, and a safe conclusion.",
    prompts: ["Facts:", "Assumptions:", "Three possible explanations:", "Safe conclusion:"],
    rubricId: "rubric-case-study"
  },
  {
    id: "hw-intermediate-l6",
    lessonId: "intermediate-l6",
    title: "Boundary and Referral Script",
    type: "short_answer",
    maxPoints: 20,
    instructions: "Write a boundary statement and a referral statement for a serious mental health concern.",
    prompts: ["Boundary statement:", "Referral statement:", "Why this protects students and users:"],
    rubricId: "rubric-ethics"
  },
  {
    id: "hw-advanced-l1",
    lessonId: "advanced-l1",
    title: "Trauma-Informed Rewrite",
    type: "case_study",
    maxPoints: 30,
    instructions: "Rewrite a blame-based description into trauma-informed educational language without diagnosing.",
    prompts: ["Blame-based statement:", "Trauma-informed rewrite:", "Safety/support step:", "Boundary/disclaimer:"],
    rubricId: "rubric-advanced-case"
  },
  {
    id: "hw-advanced-l2",
    lessonId: "advanced-l2",
    title: "Symptom Language Practice",
    type: "short_answer",
    maxPoints: 30,
    instructions: "Write safe educational language for three trauma-related symptom examples.",
    prompts: ["Example 1 safe wording:", "Example 2 safe wording:", "Example 3 safe wording:", "When should referral be recommended?"],
    rubricId: "rubric-ethics"
  },
  {
    id: "hw-advanced-l3",
    lessonId: "advanced-l3",
    title: "Testing Claims Audit",
    type: "research_critique",
    maxPoints: 30,
    instructions: "Evaluate what an educational questionnaire can and cannot claim.",
    prompts: ["What does the quiz measure?", "What does it not measure?", "Reliability concern:", "Validity concern:", "Fairness concern:"],
    rubricId: "rubric-research-critique"
  },
  {
    id: "hw-advanced-l4",
    lessonId: "advanced-l4",
    title: "Question Blueprint Builder",
    type: "worksheet",
    maxPoints: 30,
    instructions: "Write five test questions from one lesson objective, including answer explanations.",
    prompts: ["Lesson objective:", "Question 1-5:", "Correct answers:", "Explanations:", "Remediation lesson:"],
    rubricId: "rubric-test-design"
  },
  {
    id: "hw-advanced-l5",
    lessonId: "advanced-l5",
    title: "Six-Part Case Formulation",
    type: "case_study",
    maxPoints: 30,
    instructions: "Write a six-part formulation: concern, facts, maintaining factors, protective factors, unknowns, responsible next step.",
    prompts: ["Presenting concern:", "Known facts:", "Maintaining factors:", "Protective factors:", "Unknowns:", "Responsible next step:"],
    rubricId: "rubric-advanced-case"
  },
  {
    id: "hw-advanced-l6",
    lessonId: "advanced-l6",
    title: "Expert vs. Beginner Thinking",
    type: "short_answer",
    maxPoints: 30,
    instructions: "Compare expert and beginner thinking in a performance task such as chess, test-taking, public speaking, sports, or leadership.",
    prompts: ["Task:", "Beginner thinking:", "Expert thinking:", "Role of attention:", "Role of practice and feedback:"],
    rubricId: "rubric-compare"
  }
];

export const psychologyRubrics = {
  "rubric-short-answer": [
    { criterion: "Completeness", points: 4, description: "Answers all prompts with clear detail." },
    { criterion: "Accuracy", points: 4, description: "Uses psychology concepts correctly." },
    { criterion: "Clarity", points: 2, description: "Writing is specific, organized, and understandable." }
  ],
  "rubric-research-question": [
    { criterion: "Testability", points: 4, description: "Each question could be observed or measured." },
    { criterion: "Concept match", points: 3, description: "Questions match psychological behavior or mental processes." },
    { criterion: "Neutral wording", points: 3, description: "Avoids loaded or biased wording." }
  ],
  "rubric-compare": [
    { criterion: "Two clear perspectives", points: 4, description: "Explains both perspectives accurately." },
    { criterion: "Evidence", points: 3, description: "Uses examples or reasoning to support claims." },
    { criterion: "Judgment", points: 3, description: "Explains strengths and limits." }
  ],
  "rubric-ethics": [
    { criterion: "Safety", points: 4, description: "Avoids diagnosis, shame, or overclaiming." },
    { criterion: "Boundary", points: 3, description: "Explains what the platform can and cannot do." },
    { criterion: "Referral awareness", points: 3, description: "Recognizes when qualified help is needed." }
  ],
  "rubric-applied": [
    { criterion: "Pattern map", points: 5, description: "Identifies antecedent, behavior, and consequence." },
    { criterion: "Function", points: 3, description: "Gives a likely reason the behavior continues." },
    { criterion: "Replacement skill", points: 2, description: "Suggests a better behavior to teach." }
  ],
  "rubric-practice": [
    { criterion: "Completion", points: 4, description: "Completes the assigned practice." },
    { criterion: "Strategy explanation", points: 4, description: "Explains how the practice builds memory." },
    { criterion: "Reflection", points: 2, description: "Identifies what improved or needs review." }
  ],
  "rubric-language": [
    { criterion: "Neutral wording", points: 4, description: "Avoids insults, diagnosis, or assumptions." },
    { criterion: "Concept accuracy", points: 4, description: "Uses psychology terms correctly." },
    { criterion: "Professional tone", points: 2, description: "Clear, respectful, and useful." }
  ],
  "rubric-case-study": [
    { criterion: "Facts vs. interpretations", points: 5, description: "Separates observed facts from assumptions." },
    { criterion: "Theory use", points: 5, description: "Uses psychological concepts accurately." },
    { criterion: "Alternative explanations", points: 5, description: "Considers more than one explanation." },
    { criterion: "Ethical limits", points: 5, description: "Avoids diagnosis and names what more information is needed." }
  ],
  "rubric-advanced-case": [
    { criterion: "Multi-factor formulation", points: 10, description: "Includes biological, psychological, social, and contextual factors where relevant." },
    { criterion: "Trauma-informed language", points: 8, description: "Uses safe, non-blaming, non-diagnostic wording." },
    { criterion: "Protective and risk factors", points: 6, description: "Identifies both strengths and concerns." },
    { criterion: "Responsible next step", points: 6, description: "Recommends support within ethical limits." }
  ],
  "rubric-research-critique": [
    { criterion: "Measurement claim", points: 8, description: "Clearly identifies what the tool can measure." },
    { criterion: "Limits", points: 8, description: "Clearly identifies what the tool cannot claim." },
    { criterion: "Reliability/validity/fairness", points: 10, description: "Addresses all three measurement concerns." },
    { criterion: "Professional caution", points: 4, description: "Avoids overclaiming." }
  ],
  "rubric-test-design": [
    { criterion: "Objective alignment", points: 8, description: "Questions match the lesson objective." },
    { criterion: "Question quality", points: 8, description: "Questions are clear and fair." },
    { criterion: "Answer explanations", points: 8, description: "Explains why the correct answer is correct." },
    { criterion: "Remediation", points: 6, description: "Connects wrong answers back to review lessons." }
  ]
};

export function getAllLessons() {
  return psychologyCourses.flatMap(course =>
    course.modules.flatMap(module =>
      module.lessons.map(lesson => ({ ...lesson, moduleId: module.id, moduleTitle: module.title, courseId: course.id, courseTitle: course.title, level: course.level }))
    )
  );
}

export function findLessonById(lessonId) {
  return getAllLessons().find(lesson => lesson.id === lessonId);
}

export function findHomeworkById(homeworkId) {
  return psychologyHomework.find(hw => hw.id === homeworkId);
}
