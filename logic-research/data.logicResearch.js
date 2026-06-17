export const logicResearchCourse = {
  id: "logic-research",
  title: "Logic + Research",
  description:
    "A three-level reasoning and research course covering claims, evidence, fallacies, source checking, formal logic, research design, and capstone argument writing.",
  gradingScale: [
    { min: 90, grade: "A", label: "Mastery" },
    { min: 80, grade: "B", label: "Strong" },
    { min: 70, grade: "C", label: "Passing" },
    { min: 60, grade: "D", label: "Needs Review" },
    { min: 0, grade: "F", label: "Retake Required" }
  ],
  books: [
    {
      id: "overthinkers-guide",
      title: "The Overthinker's Guide to Making Decisions",
      author: "Joseph Nguyen",
      curriculumUse:
        "Decision-making, overthinking, fear-based reasoning, reflection, research-topic choice, and academic self-management.",
      copyrightNote:
        "Use only original summaries, original examples, and original assessment questions unless you have permission to reproduce text."
    },
    {
      id: "uncommon-sense-teaching",
      title: "Uncommon Sense Teaching",
      author: "Barbara Oakley and others",
      curriculumUse:
        "Learning strategies, memory, practice, student study planning, homework structure, and retrieval practice."
    },
    {
      id: "concise-laws-human-nature",
      title: "The Concise Laws of Human Nature",
      author: "Robert Greene",
      curriculumUse:
        "Human motives, social reasoning, pattern recognition, bias, and case-study analysis."
    },
    {
      id: "parasitic-mind",
      title: "The Parasitic Mind",
      author: "Gad Saad",
      curriculumUse:
        "Idea analysis, belief systems, persuasion, ideological claims, and argument critique."
    },
    {
      id: "formal-logic-core",
      title: "Formal Logic Core Text",
      author: "Instructor-selected",
      curriculumUse:
        "Deductive reasoning, validity, soundness, syllogisms, truth tables, symbolic logic, and proof."
    },
    {
      id: "research-methods-core",
      title: "Research Methods Core Text",
      author: "Instructor-selected",
      curriculumUse:
        "Research questions, source evaluation, citation, research design, literature review, validity, and reliability."
    }
  ],
  levels: [
    {
      id: "basic",
      title: "Basic Logic + Research",
      goal:
        "Students learn clear thinking, claims, reasons, evidence, source checking, decision-making, and short research writing.",
      masteryTarget: "Student can explain a simple argument, check a basic source, and write a short evidence-based response.",
      units: [
        {
          id: "basic-u1",
          title: "Claims, Reasons, and Evidence",
          bookIds: ["formal-logic-core", "research-methods-core"],
          lessons: [
            {
              id: "basic-l1",
              title: "What Is an Argument?",
              objectives: [
                "Define argument, claim, reason, evidence, and conclusion.",
                "Separate a conclusion from its supporting reason.",
                "Explain why opinions are not automatically evidence."
              ],
              vocabulary: [
                ["Argument", "A claim supported by reasons or evidence."],
                ["Claim", "A statement someone wants others to accept."],
                ["Reason", "A statement that explains why a claim should be accepted."],
                ["Evidence", "Information used to support a claim."],
                ["Conclusion", "The main point an argument is trying to prove."]
              ],
              lesson:
                "In logic, an argument is not a shouting match. An argument is a structure: someone makes a claim, gives reasons, and uses evidence to support it. A strong student does not simply ask, 'Do I agree?' A strong student asks, 'What is the conclusion? What reasons are offered? Does the evidence actually support the claim?'",
              example:
                "Argument: Students should learn source checking before writing research papers because weak sources create weak arguments. Conclusion: Students should learn source checking. Reason: Weak sources create weak arguments.",
              practice:
                "Read a paragraph from a news article, textbook, or essay. Highlight the conclusion in one color and the reasons in another."
            },
            {
              id: "basic-l2",
              title: "Evidence vs Opinion",
              objectives: [
                "Tell the difference between opinion, example, and evidence.",
                "Evaluate whether evidence supports a claim.",
                "Improve a weak claim by adding stronger support."
              ],
              vocabulary: [
                ["Opinion", "A personal belief or judgment."],
                ["Example", "A specific case used to clarify a point."],
                ["Data", "Collected information used to support a claim."],
                ["Anecdote", "A personal story that may illustrate a point but does not prove it by itself."]
              ],
              lesson:
                "Opinion can start a conversation, but evidence carries the weight. A personal story may help explain an idea, but research requires stronger support: data, credible sources, careful observation, or expert analysis. The basic rule is old-school and still undefeated: prove it.",
              example:
                "Weak: Reading is good because I like it. Stronger: Reading can improve vocabulary because students encounter new words in meaningful contexts.",
              practice:
                "Write three claims. For each one, add one opinion, one example, and one stronger piece of evidence."
            }
          ]
        },
        {
          id: "basic-u2",
          title: "Research Questions and Source Checking",
          bookIds: ["research-methods-core", "uncommon-sense-teaching"],
          lessons: [
            {
              id: "basic-l3",
              title: "Turning Topics into Research Questions",
              objectives: [
                "Turn a broad topic into a focused question.",
                "Identify questions that are too broad, too narrow, or researchable.",
                "Create a working thesis."
              ],
              vocabulary: [
                ["Topic", "The general subject being studied."],
                ["Research Question", "A focused question that guides investigation."],
                ["Thesis", "A clear answer or position that the paper will support."],
                ["Scope", "The size and limits of the research topic."]
              ],
              lesson:
                "A topic is not enough. 'Social media' is a topic. 'How does daily social media use affect teen attention during homework?' is a research question. Good research starts with a question that is focused enough to answer and important enough to matter.",
              example:
                "Broad topic: Sleep. Better question: How does sleep length affect memory recall in high-school students?",
                practice:
                "Choose one topic. Make it narrower three times. Then write one research question and one working thesis."
            }
          ]
        },
        {
          id: "basic-u3",
          title: "Decision-Making for Research",
          bookIds: ["overthinkers-guide"],
          lessons: [
            {
              id: "basic-l4",
              title: "Overthinking, Fear, and the Root Decision",
              objectives: [
                "Identify fear-based overthinking in academic decisions.",
                "Name the root decision behind a confusing situation.",
                "Choose one small next step to move research forward."
              ],
              vocabulary: [
                ["Overthinking", "Repeating thoughts without producing clear action."],
                ["Root Decision", "The actual choice hidden underneath worry and side issues."],
                ["Decision Paralysis", "Being stuck because the fear of choosing becomes stronger than the decision itself."],
                ["Smallest Next Step", "A simple action that begins progress without needing the whole problem solved."]
              ],
              lesson:
                "Research students often get stuck before the real work begins. They change topics, avoid sources, or ask everyone for permission because they are trying to remove all risk. The cure is not endless thinking. The cure is naming the real decision and taking the smallest next step.",
              example:
                "Confused thought: What if my teacher hates my topic and my classmates think it is boring? Root decision: Should I use this topic or choose a new one? Smallest next step: Find one credible source and test whether the topic has enough evidence.",
              practice:
                "Write one academic decision you are avoiding. Name the root decision in one sentence. Write the smallest next step."
            }
          ]
        }
      ]
    },
    {
      id: "intermediate",
      title: "Intermediate Logic + Research",
      goal:
        "Students analyze assumptions, fallacies, bias, credibility, validity, soundness, and structured research writing.",
      masteryTarget: "Student can break down an argument, evaluate sources, detect weak reasoning, and build a structured argument essay.",
      units: [
        {
          id: "intermediate-u1",
          title: "Assumptions, Bias, and Fallacies",
          bookIds: ["parasitic-mind", "concise-laws-human-nature", "formal-logic-core"],
          lessons: [
            {
              id: "intermediate-l1",
              title: "Hidden Assumptions",
              objectives: [
                "Define assumption.",
                "Identify hidden assumptions inside arguments.",
                "Explain how assumptions affect conclusions."
              ],
              vocabulary: [
                ["Assumption", "An unstated belief an argument depends on."],
                ["Bias", "A leaning that affects judgment."],
                ["Loaded Language", "Words chosen to trigger emotion instead of careful thought."],
                ["Generalization", "A broad claim based on limited examples."]
              ],
              lesson:
                "Arguments often hide their engine under the hood. That engine is the assumption. A claim may sound clean until you ask, 'What must be true for this argument to work?' Intermediate students stop being impressed by confident wording and start checking the machinery.",
              example:
                "Claim: This policy is popular online, so it must be good. Hidden assumption: popularity is reliable evidence of quality.",
              practice:
                "Find three opinion claims online. Write the hidden assumption behind each one."
            },
            {
              id: "intermediate-l2",
              title: "Fallacies and Weak Evidence",
              objectives: [
                "Recognize common reasoning errors.",
                "Explain why a fallacy weakens an argument.",
                "Rewrite a weak argument into a stronger one."
              ],
              vocabulary: [
                ["Ad Hominem", "Attacking the person instead of the argument."],
                ["Straw Man", "Misrepresenting an argument to make it easier to attack."],
                ["False Cause", "Assuming one thing caused another just because they happened together."],
                ["Bandwagon", "Claiming something is true or good because many people accept it."]
              ],
              lesson:
                "A fallacy is bad reasoning wearing a clean suit. It may sound persuasive, but the structure is weak. Students must learn to name the mistake and repair the argument with better evidence.",
              example:
                "Weak: Everyone shares this claim, so it must be true. Problem: bandwagon reasoning. Better: The claim should be checked against credible evidence.",
              practice:
                "Write one example of ad hominem, straw man, false cause, and bandwagon. Then rewrite each one correctly."
            }
          ]
        },
        {
          id: "intermediate-u2",
          title: "Validity, Soundness, and Source Credibility",
          bookIds: ["formal-logic-core", "research-methods-core"],
          lessons: [
            {
              id: "intermediate-l3",
              title: "Validity and Soundness",
              objectives: [
                "Define validity and soundness.",
                "Identify whether a conclusion follows from premises.",
                "Explain why a valid argument can still contain false premises."
              ],
              vocabulary: [
                ["Premise", "A statement used to support a conclusion."],
                ["Validity", "The conclusion follows from the premises."],
                ["Soundness", "The argument is valid and the premises are true."],
                ["Counterexample", "An example that shows a claim or argument does not always work."]
              ],
              lesson:
                "Validity is about structure. Soundness is about structure plus truth. A valid argument can still be unsound if the premises are false. This is where students stop guessing and start testing the bones of an argument.",
              example:
                "All birds can swim. Robins are birds. Therefore, robins can swim. The structure is valid, but the first premise is false, so the argument is unsound.",
              practice:
                "Write two valid arguments. Make one sound and one unsound. Explain the difference."
            }
          ]
        }
      ]
    },
    {
      id: "advanced",
      title: "Advanced Logic + Research",
      goal:
        "Students work with formal logic, research design, validity, reliability, literature review, study critique, and capstone research proposals.",
      masteryTarget: "Student can design a research project, evaluate methodology, critique claims, and defend conclusions with evidence.",
      units: [
        {
          id: "advanced-u1",
          title: "Formal Logic and Proof",
          bookIds: ["formal-logic-core"],
          lessons: [
            {
              id: "advanced-l1",
              title: "Propositional Logic and Truth Tables",
              objectives: [
                "Translate simple claims into symbolic form.",
                "Use truth tables to test compound statements.",
                "Distinguish contradiction, consistency, and validity."
              ],
              vocabulary: [
                ["Proposition", "A statement that can be true or false."],
                ["Negation", "The denial of a proposition."],
                ["Conjunction", "An AND statement."],
                ["Disjunction", "An OR statement."],
                ["Conditional", "An IF-THEN statement."]
              ],
              lesson:
                "Advanced logic removes the decorative language and tests structure. Symbols are not there to make students suffer. They are there to reveal whether the reasoning actually holds.",
              example:
                "If P means 'the source is credible' and Q means 'the claim is supported,' then P → Q means: If the source is credible, then the claim is supported.",
              practice:
                "Translate five English statements into symbols using P, Q, negation, conjunction, disjunction, and conditional."
            }
          ]
        },
        {
          id: "advanced-u2",
          title: "Research Design and Study Critique",
          bookIds: ["research-methods-core"],
          lessons: [
            {
              id: "advanced-l2",
              title: "Choosing a Research Method",
              objectives: [
                "Compare qualitative, quantitative, and mixed methods.",
                "Choose a method that fits a research question.",
                "Identify basic threats to validity and reliability."
              ],
              vocabulary: [
                ["Qualitative Research", "Research focused on meaning, experience, and description."],
                ["Quantitative Research", "Research focused on measurement, numbers, and statistical comparison."],
                ["Mixed Methods", "Research that combines qualitative and quantitative methods."],
                ["Validity", "Whether a study measures what it claims to measure."],
                ["Reliability", "Whether results are consistent when measured again."]
              ],
              lesson:
                "Advanced research begins when students stop asking, 'What sounds smart?' and start asking, 'What method fits the question?' A measurement question usually needs quantitative data. A meaning or experience question often needs qualitative data. Some questions need both.",
              example:
                "Question: Does daily reading time improve vocabulary scores? Best fit: quantitative or mixed methods because the researcher can measure reading time and scores.",
              practice:
                "Write three research questions. Choose qualitative, quantitative, or mixed methods for each and explain why."
            }
          ]
        }
      ]
    }
  ]
};

export function getLevel(levelId) {
  return logicResearchCourse.levels.find((level) => level.id === levelId);
}

export function getUnit(levelId, unitId) {
  const level = getLevel(levelId);
  return level?.units.find((unit) => unit.id === unitId);
}

export function getAllLessons(levelId) {
  const level = getLevel(levelId);
  return level ? level.units.flatMap((unit) => unit.lessons.map((lesson) => ({ ...lesson, unitId: unit.id }))) : [];
}
