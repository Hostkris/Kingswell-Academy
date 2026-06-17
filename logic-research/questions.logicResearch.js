export const logicResearchQuestions = [
  // BASIC 40-question final bank
  {
    id: "basic-q001",
    level: "basic",
    unit: "basic-u1",
    lessonId: "basic-l1",
    bookId: "formal-logic-core",
    skill: "identify-conclusion",
    type: "multiple-choice",
    points: 1,
    prompt:
      "Read the argument: 'Students should learn source checking because weak sources create weak arguments.' Which part is the conclusion?",
    options: [
      "Students should learn source checking.",
      "Weak sources create weak arguments.",
      "Students should avoid all sources.",
      "Arguments are always emotional."
    ],
    correctAnswer: 0,
    explanation:
      "The conclusion is the main claim the argument is trying to prove. The reason is the part after 'because.'"
  },
  {
    id: "basic-q002",
    level: "basic",
    unit: "basic-u1",
    lessonId: "basic-l1",
    bookId: "formal-logic-core",
    skill: "define-argument",
    type: "multiple-choice",
    points: 1,
    prompt: "In logic, what is an argument?",
    options: [
      "A fight between two people",
      "A claim supported by reasons or evidence",
      "A personal feeling with no explanation",
      "A long paragraph"
    ],
    correctAnswer: 1,
    explanation:
      "In logic, an argument is a claim supported by reasons or evidence. It does not have to be hostile."
  },
  {
    id: "basic-q003",
    level: "basic",
    unit: "basic-u1",
    lessonId: "basic-l2",
    bookId: "research-methods-core",
    skill: "evidence-vs-opinion",
    type: "multiple-choice",
    points: 1,
    prompt: "Which statement is the strongest evidence?",
    options: [
      "I feel like reading helps.",
      "My cousin said reading helps.",
      "A classroom study found vocabulary gains after daily reading practice.",
      "Reading is obviously good."
    ],
    correctAnswer: 2,
    explanation:
      "A study with measured results is stronger than feelings, casual testimony, or unsupported certainty."
  },
  {
    id: "basic-q004",
    level: "basic",
    unit: "basic-u2",
    lessonId: "basic-l3",
    bookId: "research-methods-core",
    skill: "research-question",
    type: "multiple-choice",
    points: 1,
    prompt: "Which is the best research question?",
    options: [
      "Sleep.",
      "Is sleep good?",
      "How does sleep length affect memory recall in high-school students?",
      "Why is everyone tired?"
    ],
    correctAnswer: 2,
    explanation:
      "This question is focused, researchable, and specific about the population and outcome."
  },
  {
    id: "basic-q005",
    level: "basic",
    unit: "basic-u2",
    lessonId: "basic-l3",
    bookId: "research-methods-core",
    skill: "topic-scope",
    type: "multiple-choice",
    points: 1,
    prompt: "Why is 'technology' a weak research topic by itself?",
    options: [
      "It is too narrow.",
      "It is too broad.",
      "It is already a thesis.",
      "It cannot be discussed."
    ],
    correctAnswer: 1,
    explanation:
      "'Technology' is too broad. A student needs to narrow it into a focused research question."
  },
  {
    id: "basic-q006",
    level: "basic",
    unit: "basic-u3",
    lessonId: "basic-l4",
    bookId: "overthinkers-guide",
    skill: "fear-based-reasoning",
    type: "multiple-choice",
    points: 1,
    prompt:
      "A student keeps changing topics because they are afraid every topic will be rejected. What is most likely happening?",
    options: [
      "The student is using strong logic.",
      "The student is stuck in fear-based overthinking.",
      "The student has finished the research process.",
      "The student has proven a conclusion."
    ],
    correctAnswer: 1,
    explanation:
      "The student is not simply evaluating options. Fear is controlling the decision-making process."
  },
  {
    id: "basic-q007",
    level: "basic",
    unit: "basic-u3",
    lessonId: "basic-l4",
    bookId: "overthinkers-guide",
    skill: "root-decision",
    type: "multiple-choice",
    points: 1,
    prompt:
      "A student says, 'What if my topic is boring, what if I fail, what if everyone laughs?' What should they identify first?",
    options: [
      "The real decision they need to make",
      "The opinion of every person in class",
      "A random answer from a search engine",
      "The longest possible essay title"
    ],
    correctAnswer: 0,
    explanation:
      "Naming the root decision turns a cloud of fear into one clear choice."
  },
  {
    id: "basic-q008",
    level: "basic",
    unit: "basic-u1",
    lessonId: "basic-l2",
    bookId: "research-methods-core",
    skill: "source-quality",
    type: "multiple-choice",
    points: 1,
    prompt: "Which source is usually strongest for a school research paper?",
    options: [
      "A peer-reviewed article or academic source",
      "An anonymous comment",
      "A meme",
      "A personal guess"
    ],
    correctAnswer: 0,
    explanation:
      "Academic or peer-reviewed sources are usually stronger because they have clearer authorship, evidence, and review standards."
  },
  {
    id: "basic-q009",
    level: "basic",
    unit: "basic-u1",
    lessonId: "basic-l1",
    bookId: "formal-logic-core",
    skill: "claim-reason",
    type: "multiple-choice",
    points: 1,
    prompt:
      "In the sentence, 'Exercise improves health because it strengthens the heart,' what is the reason?",
    options: [
      "Exercise improves health.",
      "Because",
      "It strengthens the heart.",
      "Health is impossible to study."
    ],
    correctAnswer: 2,
    explanation:
      "The reason explains why the claim should be accepted."
  },
  {
    id: "basic-q010",
    level: "basic",
    unit: "basic-u2",
    lessonId: "basic-l3",
    bookId: "research-methods-core",
    skill: "working-thesis",
    type: "multiple-choice",
    points: 1,
    prompt: "What is a working thesis?",
    options: [
      "A focused answer to a research question that may be revised",
      "A random topic",
      "A citation style",
      "A final grade"
    ],
    correctAnswer: 0,
    explanation:
      "A working thesis is a current answer or position that can be improved as research develops."
  },

  // Add more Basic questions to reach 40 by skill rotation.
  ...Array.from({ length: 30 }, (_, i) => {
    const n = i + 11;
    const patterns = [
      {
        skill: "identify-conclusion",
        prompt: "Which part of an argument states the main point the writer wants to prove?",
        options: ["Conclusion", "Font", "Page number", "Title only"],
        correctAnswer: 0,
        explanation: "The conclusion is the main point the argument tries to prove."
      },
      {
        skill: "evidence-vs-opinion",
        prompt: "Which answer best describes evidence?",
        options: ["A feeling", "Information used to support a claim", "A random preference", "A guess"],
        correctAnswer: 1,
        explanation: "Evidence is information used to support a claim."
      },
      {
        skill: "source-quality",
        prompt: "What should a student check when evaluating a source?",
        options: ["Author, evidence, date, and purpose", "Only the color of the website", "Only whether it agrees with them", "Only the title"],
        correctAnswer: 0,
        explanation: "Source checking includes authorship, evidence, date, purpose, and credibility."
      },
      {
        skill: "research-question",
        prompt: "What makes a research question strong?",
        options: ["It is focused and researchable", "It is as broad as possible", "It has no answer", "It avoids evidence"],
        correctAnswer: 0,
        explanation: "A strong research question is focused enough to investigate and answer."
      },
      {
        skill: "smallest-next-step",
        prompt: "When a student is stuck overthinking a research decision, what is often the best move?",
        options: ["Take one small action", "Wait until fear disappears forever", "Ask everyone to decide for them", "Delete the assignment"],
        correctAnswer: 0,
        explanation: "Small action breaks decision paralysis and creates progress."
      }
    ];
    const p = patterns[i % patterns.length];
    return {
      id: `basic-q${String(n).padStart(3, "0")}`,
      level: "basic",
      unit: i % 3 === 0 ? "basic-u1" : i % 3 === 1 ? "basic-u2" : "basic-u3",
      lessonId: i % 3 === 0 ? "basic-l1" : i % 3 === 1 ? "basic-l3" : "basic-l4",
      bookId: i % 3 === 2 ? "overthinkers-guide" : "research-methods-core",
      type: "multiple-choice",
      points: 1,
      ...p
    };
  }),

  // INTERMEDIATE 40-question final bank
  {
    id: "intermediate-q001",
    level: "intermediate",
    unit: "intermediate-u1",
    lessonId: "intermediate-l1",
    bookId: "concise-laws-human-nature",
    skill: "hidden-assumption",
    type: "multiple-choice",
    points: 1,
    prompt:
      "Argument: 'This idea is popular online, so it must be true.' What hidden assumption does the argument depend on?",
    options: [
      "Popular ideas are always true.",
      "Online ideas never spread.",
      "Truth cannot be studied.",
      "Research requires no evidence."
    ],
    correctAnswer: 0,
    explanation:
      "The argument assumes popularity is proof of truth, which is not a reliable assumption."
  },
  {
    id: "intermediate-q002",
    level: "intermediate",
    unit: "intermediate-u1",
    lessonId: "intermediate-l2",
    bookId: "formal-logic-core",
    skill: "fallacy-bandwagon",
    type: "multiple-choice",
    points: 1,
    prompt: "Which example shows bandwagon reasoning?",
    options: [
      "Many people believe it, so it must be correct.",
      "The evidence supports the conclusion.",
      "The source gives clear data.",
      "The conclusion follows from the premises."
    ],
    correctAnswer: 0,
    explanation:
      "Bandwagon reasoning treats popularity as proof."
  },
  {
    id: "intermediate-q003",
    level: "intermediate",
    unit: "intermediate-u2",
    lessonId: "intermediate-l3",
    bookId: "formal-logic-core",
    skill: "validity-soundness",
    type: "multiple-choice",
    points: 1,
    prompt:
      "An argument can be valid but unsound when:",
    options: [
      "Its structure works, but at least one premise is false.",
      "It has no conclusion.",
      "It has no premises.",
      "It is written in paragraph form."
    ],
    correctAnswer: 0,
    explanation:
      "Validity is structure. Soundness requires valid structure and true premises."
  },
  ...Array.from({ length: 37 }, (_, i) => {
    const n = i + 4;
    const patterns = [
      {
        skill: "hidden-assumption",
        prompt: "What question best helps reveal a hidden assumption?",
        options: ["What must be true for this argument to work?", "How long is the paragraph?", "What color is the page?", "Who can shout louder?"],
        correctAnswer: 0,
        explanation: "Hidden assumptions are unstated beliefs the argument needs in order to work."
      },
      {
        skill: "loaded-language",
        prompt: "What is loaded language?",
        options: ["Words chosen to trigger emotion instead of careful thought", "A citation format", "A math symbol", "A neutral definition"],
        correctAnswer: 0,
        explanation: "Loaded language pushes emotion and can distract from evidence."
      },
      {
        skill: "fallacy-straw-man",
        prompt: "What is a straw man fallacy?",
        options: ["Misrepresenting an argument to attack an easier version", "Testing a claim fairly", "Giving strong evidence", "Defining a term clearly"],
        correctAnswer: 0,
        explanation: "A straw man distorts the original argument."
      },
      {
        skill: "validity-soundness",
        prompt: "What makes an argument sound?",
        options: ["It is valid and has true premises", "It is popular", "It is emotional", "It is long"],
        correctAnswer: 0,
        explanation: "Soundness requires valid structure and true premises."
      },
      {
        skill: "source-credibility",
        prompt: "A source hides its author, gives no evidence, and uses extreme emotional language. What should a student do?",
        options: ["Treat it carefully and verify with stronger sources", "Accept it immediately", "Use it as the only source", "Ignore all other evidence"],
        correctAnswer: 0,
        explanation: "Weak source signals require verification with stronger sources."
      }
    ];
    const p = patterns[i % patterns.length];
    return {
      id: `intermediate-q${String(n).padStart(3, "0")}`,
      level: "intermediate",
      unit: i % 2 === 0 ? "intermediate-u1" : "intermediate-u2",
      lessonId: i % 2 === 0 ? "intermediate-l2" : "intermediate-l3",
      bookId: i % 2 === 0 ? "parasitic-mind" : "formal-logic-core",
      type: "multiple-choice",
      points: 1,
      ...p
    };
  }),

  // ADVANCED 40-question final bank
  {
    id: "advanced-q001",
    level: "advanced",
    unit: "advanced-u1",
    lessonId: "advanced-l1",
    bookId: "formal-logic-core",
    skill: "symbolic-logic",
    type: "multiple-choice",
    points: 1,
    prompt: "If P means 'the source is credible' and Q means 'the claim is supported,' what does P → Q mean?",
    options: [
      "If the source is credible, then the claim is supported.",
      "The source is not credible.",
      "The claim and source are unrelated.",
      "The claim is false."
    ],
    correctAnswer: 0,
    explanation:
      "The conditional P → Q reads: if P, then Q."
  },
  {
    id: "advanced-q002",
    level: "advanced",
    unit: "advanced-u2",
    lessonId: "advanced-l2",
    bookId: "research-methods-core",
    skill: "research-design",
    type: "multiple-choice",
    points: 1,
    prompt:
      "A researcher wants to measure whether daily reading time improves vocabulary scores. Which method is the best fit?",
    options: [
      "Quantitative or mixed methods",
      "Only personal storytelling",
      "No data collection",
      "A random opinion poll with no scoring"
    ],
    correctAnswer: 0,
    explanation:
      "The question involves measurable reading time and vocabulary scores, so quantitative or mixed methods fit best."
  },
  {
    id: "advanced-q003",
    level: "advanced",
    unit: "advanced-u2",
    lessonId: "advanced-l2",
    bookId: "research-methods-core",
    skill: "validity-reliability",
    type: "multiple-choice",
    points: 1,
    prompt: "What does reliability mean in research?",
    options: [
      "Results are consistent when measured again.",
      "The study sounds impressive.",
      "The title is long.",
      "The author agrees with the student."
    ],
    correctAnswer: 0,
    explanation:
      "Reliability is about consistency of measurement."
  },
  ...Array.from({ length: 37 }, (_, i) => {
    const n = i + 4;
    const patterns = [
      {
        skill: "symbolic-logic",
        prompt: "Which symbol usually represents negation?",
        options: ["¬", "→", "∧", "∨"],
        correctAnswer: 0,
        explanation: "Negation is commonly represented by ¬."
      },
      {
        skill: "truth-table",
        prompt: "What is the purpose of a truth table?",
        options: ["To test how compound statements behave under possible truth values", "To make a paragraph longer", "To cite a website", "To choose a topic randomly"],
        correctAnswer: 0,
        explanation: "Truth tables show whether logical forms hold under different truth-value combinations."
      },
      {
        skill: "research-design",
        prompt: "Which question usually fits qualitative research best?",
        options: ["How do students describe their experience of test anxiety?", "What percent scored above 90?", "How many pages were read?", "What was the average quiz score?"],
        correctAnswer: 0,
        explanation: "Qualitative research is suited to meaning, experience, and description."
      },
      {
        skill: "validity-reliability",
        prompt: "What does validity ask?",
        options: ["Does the study measure what it claims to measure?", "Is the website colorful?", "Is the conclusion popular?", "Is the paper short?"],
        correctAnswer: 0,
        explanation: "Validity concerns whether the measurement matches the intended concept."
      },
      {
        skill: "study-critique",
        prompt: "A study claims a method works but tested only two people with no comparison group. What is the strongest critique?",
        options: ["The evidence is too limited to support a broad conclusion", "The study is automatically perfect", "The title is too short", "The claim needs no support"],
        correctAnswer: 0,
        explanation: "Small samples and no comparison group limit the strength of the conclusion."
      }
    ];
    const p = patterns[i % patterns.length];
    return {
      id: `advanced-q${String(n).padStart(3, "0")}`,
      level: "advanced",
      unit: i % 2 === 0 ? "advanced-u1" : "advanced-u2",
      lessonId: i % 2 === 0 ? "advanced-l1" : "advanced-l2",
      bookId: i % 2 === 0 ? "formal-logic-core" : "research-methods-core",
      type: "multiple-choice",
      points: 1,
      ...p
    };
  })
];

export function getQuestionsByLevel(levelId) {
  return logicResearchQuestions.filter((q) => q.level === levelId);
}

export function getQuestionsByLesson(lessonId, limit = 10) {
  return logicResearchQuestions.filter((q) => q.lessonId === lessonId).slice(0, limit);
}

export function getFinalTest(levelId) {
  return logicResearchQuestions.filter((q) => q.level === levelId).slice(0, 40);
}
