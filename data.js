/* Kingswell Academy Premium Data Build — deep lessons + 40-question mastery tests */
const KWA_LEVELS = {
  "Basic": {
    "label": "Basic",
    "tagline": "Foundation: define it, identify it, and complete guided practice.",
    "tone": "clear definitions, guided examples, smaller decisions",
    "testCount": 40,
    "verbs": [
      "define",
      "identify",
      "choose",
      "match",
      "summarize"
    ]
  },
  "Intermediate": {
    "label": "Intermediate",
    "tagline": "Applied: use the skill in realistic classwork and explain the reason.",
    "tone": "application, comparisons, real examples, correction",
    "testCount": 40,
    "verbs": [
      "apply",
      "compare",
      "solve",
      "explain",
      "correct"
    ]
  },
  "Advanced": {
    "label": "Advanced",
    "tagline": "Mastery: evaluate, defend, improve, and present proof.",
    "tone": "evaluation, strategy, independent planning, teaching proof",
    "testCount": 40,
    "verbs": [
      "evaluate",
      "defend",
      "synthesize",
      "improve",
      "present"
    ]
  }
};

const KWA_COURSES = [
  {
    "month": 1,
    "semester": 1,
    "code": "KWA 101",
    "room": "A-101",
    "icon": "📖",
    "title": "Reading Comprehension & Study Skills",
    "theme": "Active reading, main idea, vocabulary, summary, recall",
    "videoTitle": "Crash Course Study Skills — Official Playlist",
    "playlistId": "PL8dPuuaLjXtNcAJRf3bE1IJU6nMfHj86W",
    "sources": [
      {
        "label": "OpenStax Writing Guide with Handbook",
        "url": "https://openstax.org/details/books/writing-guide"
      },
      {
        "label": "Crash Course Study Skills official playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNcAJRf3bE1IJU6nMfHj86W"
      },
      {
        "label": "BBC Learning English",
        "url": "https://www.youtube.com/user/bbclearningenglish"
      }
    ],
    "topics": [
      "active reading",
      "main idea",
      "supporting details",
      "annotation",
      "Cornell notes",
      "vocabulary from context",
      "summary",
      "recall practice",
      "study schedule",
      "teach-back explanation"
    ],
    "vocab": [
      "claim",
      "main idea",
      "context clue",
      "summary",
      "recall",
      "annotation",
      "evidence",
      "review",
      "focus",
      "comprehension"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-101-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-101-homework.html",
      "Advanced": "assets/homework/advanced-kwa-101-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNcAJRf3bE1IJU6nMfHj86W",
    "lesson": {
      "bigIdea": "Reading Comprehension & Study Skills is about learning how to turn reading into proof, not guesswork. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with active reading, then connect it to main idea and supporting details. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in reading one page of a lesson, article, or textbook; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use claim, main idea, and context clue to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Active reading",
          "steps": [
            "Name the target skill: active reading.",
            "Find where it appears in reading one page of a lesson, article, or textbook.",
            "Use one vocabulary term such as claim or main idea to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a annotated page + five-sentence summary."
          ],
          "teacherNote": "A strong answer does not just name active reading; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Annotation",
          "steps": [
            "Choose a fresh example involving annotation.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define claim in your own words and connect it to active reading.",
          "answer": "claim should be explained as a tool for understanding active reading, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of main idea from reading one page of a lesson, article, or textbook and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves main idea.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with supporting details and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind supporting details.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Reading Comprehension & Study Skills.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final annotated page + five-sentence summary.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects active reading, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like claim, main idea, and context clue inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains active reading and main idea clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in reading one page of a lesson, article, or textbook.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete annotated page + five-sentence summary with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Build a personal study map for one course module",
        "directions": [
          "Pick one real situation connected to reading one page of a lesson, article, or textbook.",
          "Use at least four course terms: claim, main idea, context clue, summary.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final annotated page + five-sentence summary and a short reflection."
        ],
        "deliverable": "Final deliverable: annotated page + five-sentence summary plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 2,
    "semester": 1,
    "code": "KWA 102",
    "room": "A-102",
    "icon": "✍️",
    "title": "Writing & Clear Communication",
    "theme": "Sentences, paragraphs, notes, outlines, short essays",
    "videoTitle": "Study Hall: Composition — College Writing",
    "playlistId": "PLNrrxHpJhC8mNXjrAL3Ey1Q6iI35cymzl",
    "sources": [
      {
        "label": "Purdue OWL General Writing",
        "url": "https://owl.purdue.edu/owl/general_writing/index.html"
      },
      {
        "label": "OpenStax Writing Guide with Handbook",
        "url": "https://openstax.org/details/books/writing-guide"
      },
      {
        "label": "Study Hall Composition playlist",
        "url": "https://www.youtube.com/playlist?list=PLNrrxHpJhC8mNXjrAL3Ey1Q6iI35cymzl"
      }
    ],
    "topics": [
      "complete sentences",
      "paragraph structure",
      "topic sentence",
      "supporting detail",
      "transitions",
      "outlines",
      "short essay",
      "editing",
      "tone",
      "clear communication"
    ],
    "vocab": [
      "sentence",
      "paragraph",
      "thesis",
      "outline",
      "transition",
      "evidence",
      "revision",
      "audience",
      "tone",
      "clarity"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-102-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-102-homework.html",
      "Advanced": "assets/homework/advanced-kwa-102-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PLNrrxHpJhC8mNXjrAL3Ey1Q6iI35cymzl",
    "lesson": {
      "bigIdea": "Writing & Clear Communication is about learning how to move from loose thoughts to clean paragraphs. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with complete sentences, then connect it to paragraph structure and topic sentence. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in writing a short school explanation or email; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use sentence, paragraph, and thesis to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Complete sentences",
          "steps": [
            "Name the target skill: complete sentences.",
            "Find where it appears in writing a short school explanation or email.",
            "Use one vocabulary term such as sentence or paragraph to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a paragraph draft + edited final copy."
          ],
          "teacherNote": "A strong answer does not just name complete sentences; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Supporting detail",
          "steps": [
            "Choose a fresh example involving supporting detail.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define sentence in your own words and connect it to complete sentences.",
          "answer": "sentence should be explained as a tool for understanding complete sentences, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of paragraph structure from writing a short school explanation or email and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves paragraph structure.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with topic sentence and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind topic sentence.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Writing & Clear Communication.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final paragraph draft + edited final copy.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects complete sentences, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like sentence, paragraph, and thesis inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains complete sentences and paragraph structure clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in writing a short school explanation or email.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete paragraph draft + edited final copy with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Write and revise a one-page explanation essay",
        "directions": [
          "Pick one real situation connected to writing a short school explanation or email.",
          "Use at least four course terms: sentence, paragraph, thesis, outline.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final paragraph draft + edited final copy and a short reflection."
        ],
        "deliverable": "Final deliverable: paragraph draft + edited final copy plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 3,
    "semester": 1,
    "code": "KWA 103",
    "room": "B-201",
    "icon": "➗",
    "title": "Practical Math I",
    "theme": "Operations, fractions, decimals, percentages, ratios, graphs",
    "videoTitle": "Khan Academy Fractions, Decimals & Percentages",
    "playlistId": "PLSQl0a2vh4HCQHWDXEKSnY3-cygkXGiyN",
    "sources": [
      {
        "label": "OpenStax Prealgebra 2e",
        "url": "https://openstax.org/details/books/prealgebra-2e"
      },
      {
        "label": "Khan Academy Math library",
        "url": "https://www.khanacademy.org/math"
      },
      {
        "label": "Khan Academy Fractions, Decimals & Percentages playlist",
        "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HCQHWDXEKSnY3-cygkXGiyN"
      }
    ],
    "topics": [
      "whole numbers",
      "fractions",
      "decimals",
      "percentages",
      "ratios",
      "unit rates",
      "graphs",
      "order of operations",
      "mental math",
      "word problems"
    ],
    "vocab": [
      "numerator",
      "denominator",
      "decimal",
      "percent",
      "ratio",
      "rate",
      "graph",
      "operation",
      "estimate",
      "equation"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-103-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-103-homework.html",
      "Advanced": "assets/homework/advanced-kwa-103-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HCQHWDXEKSnY3-cygkXGiyN",
    "lesson": {
      "bigIdea": "Practical Math I is about learning how to make everyday numbers usable without panic. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with whole numbers, then connect it to fractions and decimals. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in comparing prices, recipes, percentages, and graphs; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use numerator, denominator, and decimal to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Whole numbers",
          "steps": [
            "Name the target skill: whole numbers.",
            "Find where it appears in comparing prices, recipes, percentages, and graphs.",
            "Use one vocabulary term such as numerator or denominator to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a worked math sheet + correction notes."
          ],
          "teacherNote": "A strong answer does not just name whole numbers; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Percentages",
          "steps": [
            "Choose a fresh example involving percentages.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define numerator in your own words and connect it to whole numbers.",
          "answer": "numerator should be explained as a tool for understanding whole numbers, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of fractions from comparing prices, recipes, percentages, and graphs and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves fractions.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with decimals and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind decimals.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Practical Math I.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final worked math sheet + correction notes.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects whole numbers, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like numerator, denominator, and decimal inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains whole numbers and fractions clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in comparing prices, recipes, percentages, and graphs.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete worked math sheet + correction notes with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Create a household math mini-report",
        "directions": [
          "Pick one real situation connected to comparing prices, recipes, percentages, and graphs.",
          "Use at least four course terms: numerator, denominator, decimal, percent.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final worked math sheet + correction notes and a short reflection."
        ],
        "deliverable": "Final deliverable: worked math sheet + correction notes plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 4,
    "semester": 1,
    "code": "KWA 104",
    "room": "B-202",
    "icon": "𝑥",
    "title": "Practical Math II & Algebra Basics",
    "theme": "Variables, equations, word problems, slope, charts",
    "videoTitle": "Khan Academy Algebra Basics — Foundations",
    "playlistId": "PLSQl0a2vh4HB6I9NRYeudXLIdPqCVKXhv",
    "sources": [
      {
        "label": "OpenStax Prealgebra 2e",
        "url": "https://openstax.org/details/books/prealgebra-2e"
      },
      {
        "label": "Khan Academy Algebra Basics",
        "url": "https://www.khanacademy.org/math/algebra-basics"
      },
      {
        "label": "Khan Academy Algebra Basics Foundations playlist",
        "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HB6I9NRYeudXLIdPqCVKXhv"
      }
    ],
    "topics": [
      "variables",
      "expressions",
      "equations",
      "substitution",
      "slope",
      "coordinate plane",
      "linear relationships",
      "charts",
      "algebraic word problems",
      "checking solutions"
    ],
    "vocab": [
      "variable",
      "expression",
      "equation",
      "slope",
      "coordinate",
      "solution",
      "constant",
      "coefficient",
      "linear",
      "substitution"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-104-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-104-homework.html",
      "Advanced": "assets/homework/advanced-kwa-104-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HB6I9NRYeudXLIdPqCVKXhv",
    "lesson": {
      "bigIdea": "Practical Math II & Algebra Basics is about learning how to use variables and equations to explain patterns. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with variables, then connect it to expressions and equations. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in turning a word problem into an equation or graph; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use variable, expression, and equation to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Variables",
          "steps": [
            "Name the target skill: variables.",
            "Find where it appears in turning a word problem into an equation or graph.",
            "Use one vocabulary term such as variable or expression to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a equation setup + checked solution."
          ],
          "teacherNote": "A strong answer does not just name variables; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Substitution",
          "steps": [
            "Choose a fresh example involving substitution.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define variable in your own words and connect it to variables.",
          "answer": "variable should be explained as a tool for understanding variables, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of expressions from turning a word problem into an equation or graph and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves expressions.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with equations and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind equations.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Practical Math II & Algebra Basics.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final equation setup + checked solution.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects variables, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like variable, expression, and equation inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains variables and expressions clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in turning a word problem into an equation or graph.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete equation setup + checked solution with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Build a small algebra model from real numbers",
        "directions": [
          "Pick one real situation connected to turning a word problem into an equation or graph.",
          "Use at least four course terms: variable, expression, equation, slope.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final equation setup + checked solution and a short reflection."
        ],
        "deliverable": "Final deliverable: equation setup + checked solution plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 5,
    "semester": 1,
    "code": "KWA 105",
    "room": "B-203",
    "icon": "🧠",
    "title": "Logic, Critical Thinking & Research Basics",
    "theme": "Claims, evidence, bias, source checking, problem solving",
    "videoTitle": "Crash Course Media Literacy",
    "playlistId": "PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY",
    "sources": [
      {
        "label": "Purdue OWL Research and Citation",
        "url": "https://owl.purdue.edu/owl/research_and_citation/resources.html"
      },
      {
        "label": "Library of Congress Research Guides",
        "url": "https://guides.loc.gov/"
      },
      {
        "label": "Crash Course Media Literacy playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY"
      }
    ],
    "topics": [
      "claims",
      "evidence",
      "reasoning",
      "bias",
      "source credibility",
      "primary sources",
      "secondary sources",
      "research questions",
      "fallacies",
      "problem solving"
    ],
    "vocab": [
      "claim",
      "evidence",
      "bias",
      "source",
      "primary",
      "secondary",
      "credible",
      "fallacy",
      "logic",
      "inference"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-105-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-105-homework.html",
      "Advanced": "assets/homework/advanced-kwa-105-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY",
    "lesson": {
      "bigIdea": "Logic, Critical Thinking & Research Basics is about learning how to separate claims from evidence before believing or repeating them. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with claims, then connect it to evidence and reasoning. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in checking a claim from a video, article, ad, or post; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use claim, evidence, and bias to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Claims",
          "steps": [
            "Name the target skill: claims.",
            "Find where it appears in checking a claim from a video, article, ad, or post.",
            "Use one vocabulary term such as claim or evidence to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a claim-evidence-reasoning card."
          ],
          "teacherNote": "A strong answer does not just name claims; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Bias",
          "steps": [
            "Choose a fresh example involving bias.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define claim in your own words and connect it to claims.",
          "answer": "claim should be explained as a tool for understanding claims, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of evidence from checking a claim from a video, article, ad, or post and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves evidence.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with reasoning and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind reasoning.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Logic, Critical Thinking & Research Basics.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final claim-evidence-reasoning card.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects claims, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like claim, evidence, and bias inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains claims and evidence clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in checking a claim from a video, article, ad, or post.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete claim-evidence-reasoning card with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Create a source-check report",
        "directions": [
          "Pick one real situation connected to checking a claim from a video, article, ad, or post.",
          "Use at least four course terms: claim, evidence, bias, source.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final claim-evidence-reasoning card and a short reflection."
        ],
        "deliverable": "Final deliverable: claim-evidence-reasoning card plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 6,
    "semester": 1,
    "code": "KWA 106",
    "room": "S-101",
    "icon": "🔬",
    "title": "Science & Social Foundations",
    "theme": "Scientific method, biology, physics, history, civics",
    "videoTitle": "Crash Course Biology",
    "playlistId": "PL8dPuuaLjXtPW_ofbxdHNciuLoTRLPMgB",
    "sources": [
      {
        "label": "OpenStax Biology 2e",
        "url": "https://openstax.org/details/books/biology-2e"
      },
      {
        "label": "OpenStax Physics",
        "url": "https://openstax.org/details/books/physics"
      },
      {
        "label": "Crash Course Biology playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPW_ofbxdHNciuLoTRLPMgB"
      }
    ],
    "topics": [
      "scientific method",
      "observation",
      "hypothesis",
      "variables",
      "biology basics",
      "physics basics",
      "history evidence",
      "civics",
      "cause and effect",
      "systems thinking"
    ],
    "vocab": [
      "hypothesis",
      "variable",
      "experiment",
      "observation",
      "data",
      "biology",
      "physics",
      "civic",
      "evidence",
      "system"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-106-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-106-homework.html",
      "Advanced": "assets/homework/advanced-kwa-106-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPW_ofbxdHNciuLoTRLPMgB",
    "lesson": {
      "bigIdea": "Science & Social Foundations is about learning how to think with evidence across science, history, and civic life. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with scientific method, then connect it to observation and hypothesis. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in testing an idea with observation, data, and cause/effect; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use hypothesis, variable, and experiment to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Scientific method",
          "steps": [
            "Name the target skill: scientific method.",
            "Find where it appears in testing an idea with observation, data, and cause/effect.",
            "Use one vocabulary term such as hypothesis or variable to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a mini investigation log."
          ],
          "teacherNote": "A strong answer does not just name scientific method; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Variables",
          "steps": [
            "Choose a fresh example involving variables.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define hypothesis in your own words and connect it to scientific method.",
          "answer": "hypothesis should be explained as a tool for understanding scientific method, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of observation from testing an idea with observation, data, and cause/effect and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves observation.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with hypothesis and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind hypothesis.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Science & Social Foundations.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final mini investigation log.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects scientific method, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like hypothesis, variable, and experiment inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains scientific method and observation clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in testing an idea with observation, data, and cause/effect.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete mini investigation log with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Run a simple science/social evidence investigation",
        "directions": [
          "Pick one real situation connected to testing an idea with observation, data, and cause/effect.",
          "Use at least four course terms: hypothesis, variable, experiment, observation.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final mini investigation log and a short reflection."
        ],
        "deliverable": "Final deliverable: mini investigation log plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 7,
    "semester": 2,
    "code": "KWA 201",
    "room": "C-301",
    "icon": "🏛️",
    "title": "Architecture Basics",
    "theme": "Design process, space, form, plans, sections, history",
    "videoTitle": "Architecture Drawing — 30x40 Design Workshop",
    "playlistId": "PLuJj3iQpiK3udc25pS_s2hCxm4N7VScnr",
    "sources": [
      {
        "label": "MIT OCW Introduction to Architecture & Environmental Design",
        "url": "https://ocw.mit.edu/courses/4-111-introduction-to-architecture-environmental-design-spring-2014/"
      },
      {
        "label": "Architecture Drawing playlist",
        "url": "https://www.youtube.com/playlist?list=PLuJj3iQpiK3udc25pS_s2hCxm4N7VScnr"
      }
    ],
    "topics": [
      "design process",
      "space",
      "form",
      "function",
      "plans",
      "sections",
      "elevations",
      "human scale",
      "proportion",
      "architectural history"
    ],
    "vocab": [
      "plan",
      "section",
      "elevation",
      "scale",
      "form",
      "space",
      "function",
      "proportion",
      "site",
      "circulation"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-201-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-201-homework.html",
      "Advanced": "assets/homework/advanced-kwa-201-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PLuJj3iQpiK3udc25pS_s2hCxm4N7VScnr",
    "lesson": {
      "bigIdea": "Architecture Basics is about learning how to see buildings as decisions about space, people, and purpose. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with design process, then connect it to space and form. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in studying a room, house, store, or campus layout; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use plan, section, and elevation to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Design process",
          "steps": [
            "Name the target skill: design process.",
            "Find where it appears in studying a room, house, store, or campus layout.",
            "Use one vocabulary term such as plan or section to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a labeled sketch + design notes."
          ],
          "teacherNote": "A strong answer does not just name design process; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Function",
          "steps": [
            "Choose a fresh example involving function.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define plan in your own words and connect it to design process.",
          "answer": "plan should be explained as a tool for understanding design process, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of space from studying a room, house, store, or campus layout and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves space.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with form and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind form.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Architecture Basics.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final labeled sketch + design notes.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects design process, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like plan, section, and elevation inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains design process and space clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in studying a room, house, store, or campus layout.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete labeled sketch + design notes with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Redesign a small room for better use",
        "directions": [
          "Pick one real situation connected to studying a room, house, store, or campus layout.",
          "Use at least four course terms: plan, section, elevation, scale.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final labeled sketch + design notes and a short reflection."
        ],
        "deliverable": "Final deliverable: labeled sketch + design notes plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 8,
    "semester": 2,
    "code": "KWA 202",
    "room": "C-302",
    "icon": "📐",
    "title": "Drafting & Building Concepts",
    "theme": "Scale, measurement, site, materials, structure, building systems",
    "videoTitle": "AutoCAD for Architecture — Beginner Drafting",
    "playlistId": "PLg2jFlJlPd1z82uJk_7qDSYaPOPdimEYA",
    "sources": [
      {
        "label": "MIT OCW 4.111 Assignments",
        "url": "https://ocw.mit.edu/courses/4-111-introduction-to-architecture-environmental-design-spring-2014/pages/projects/exercise-1/"
      },
      {
        "label": "OpenStax Physics",
        "url": "https://openstax.org/details/books/physics"
      },
      {
        "label": "AutoCAD for Architecture beginner playlist",
        "url": "https://www.youtube.com/playlist?list=PLg2jFlJlPd1z82uJk_7qDSYaPOPdimEYA"
      }
    ],
    "topics": [
      "scale drawing",
      "measurement",
      "site analysis",
      "materials",
      "structure",
      "load path",
      "building systems",
      "drafting symbols",
      "dimensioning",
      "model making"
    ],
    "vocab": [
      "scale",
      "dimension",
      "site",
      "material",
      "structure",
      "load",
      "system",
      "drafting",
      "model",
      "measurement"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-202-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-202-homework.html",
      "Advanced": "assets/homework/advanced-kwa-202-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PLg2jFlJlPd1z82uJk_7qDSYaPOPdimEYA",
    "lesson": {
      "bigIdea": "Drafting & Building Concepts is about learning how to translate real measurements into clear building drawings. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with scale drawing, then connect it to measurement and site analysis. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in measuring a space and drawing it to scale; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use scale, dimension, and site to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Scale drawing",
          "steps": [
            "Name the target skill: scale drawing.",
            "Find where it appears in measuring a space and drawing it to scale.",
            "Use one vocabulary term such as scale or dimension to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a scale drawing + dimension notes."
          ],
          "teacherNote": "A strong answer does not just name scale drawing; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Materials",
          "steps": [
            "Choose a fresh example involving materials.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define scale in your own words and connect it to scale drawing.",
          "answer": "scale should be explained as a tool for understanding scale drawing, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of measurement from measuring a space and drawing it to scale and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves measurement.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with site analysis and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind site analysis.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Drafting & Building Concepts.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final scale drawing + dimension notes.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects scale drawing, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like scale, dimension, and site inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains scale drawing and measurement clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in measuring a space and drawing it to scale.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete scale drawing + dimension notes with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Draft a small structure or room plan",
        "directions": [
          "Pick one real situation connected to measuring a space and drawing it to scale.",
          "Use at least four course terms: scale, dimension, site, material.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final scale drawing + dimension notes and a short reflection."
        ],
        "deliverable": "Final deliverable: scale drawing + dimension notes plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 9,
    "semester": 2,
    "code": "KWA 203",
    "room": "P-101",
    "icon": "🧬",
    "title": "Psychology I",
    "theme": "Research, brain, learning, memory, motivation, emotion",
    "videoTitle": "Crash Course Psychology",
    "playlistId": "PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6",
    "sources": [
      {
        "label": "OpenStax Psychology 2e",
        "url": "https://openstax.org/details/books/psychology-2e"
      },
      {
        "label": "Crash Course Psychology playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6"
      }
    ],
    "topics": [
      "psychology research",
      "brain basics",
      "learning",
      "memory",
      "motivation",
      "emotion",
      "attention",
      "behavior",
      "experiments",
      "ethical research"
    ],
    "vocab": [
      "psychology",
      "memory",
      "learning",
      "motivation",
      "emotion",
      "behavior",
      "attention",
      "brain",
      "ethics",
      "research"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-203-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-203-homework.html",
      "Advanced": "assets/homework/advanced-kwa-203-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6",
    "lesson": {
      "bigIdea": "Psychology I is about learning how to understand behavior through research, memory, learning, and motivation. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with psychology research, then connect it to brain basics and learning. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in studying a habit, attention problem, or memory routine; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use psychology, memory, and learning to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Psychology research",
          "steps": [
            "Name the target skill: psychology research.",
            "Find where it appears in studying a habit, attention problem, or memory routine.",
            "Use one vocabulary term such as psychology or memory to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a behavior observation chart."
          ],
          "teacherNote": "A strong answer does not just name psychology research; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Memory",
          "steps": [
            "Choose a fresh example involving memory.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define psychology in your own words and connect it to psychology research.",
          "answer": "psychology should be explained as a tool for understanding psychology research, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of brain basics from studying a habit, attention problem, or memory routine and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves brain basics.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with learning and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind learning.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Psychology I.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final behavior observation chart.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects psychology research, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like psychology, memory, and learning inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains psychology research and brain basics clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in studying a habit, attention problem, or memory routine.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete behavior observation chart with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Design a memory and motivation improvement plan",
        "directions": [
          "Pick one real situation connected to studying a habit, attention problem, or memory routine.",
          "Use at least four course terms: psychology, memory, learning, motivation.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final behavior observation chart and a short reflection."
        ],
        "deliverable": "Final deliverable: behavior observation chart plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 10,
    "semester": 2,
    "code": "KWA 204",
    "room": "P-102",
    "icon": "🧭",
    "title": "Psychology II",
    "theme": "Personality, development, bias, decision-making, social behavior",
    "videoTitle": "Crash Course Psychology",
    "playlistId": "PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6",
    "sources": [
      {
        "label": "OpenStax Psychology 2e",
        "url": "https://openstax.org/details/books/psychology-2e"
      },
      {
        "label": "Crash Course Psychology playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6"
      },
      {
        "label": "Crash Course Business Soft Skills playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMBsfP-lP28IFvfkISqJofM"
      }
    ],
    "topics": [
      "personality",
      "development",
      "bias",
      "decision making",
      "social behavior",
      "habits",
      "identity",
      "self-regulation",
      "groups",
      "conflict"
    ],
    "vocab": [
      "personality",
      "development",
      "bias",
      "decision",
      "social",
      "habit",
      "identity",
      "regulation",
      "group",
      "conflict"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-204-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-204-homework.html",
      "Advanced": "assets/homework/advanced-kwa-204-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6",
    "lesson": {
      "bigIdea": "Psychology II is about learning how to connect personality, development, bias, and choices to social behavior. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with personality, then connect it to development and bias. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in analyzing conflict, habits, groups, and decision-making; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use personality, development, and bias to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Personality",
          "steps": [
            "Name the target skill: personality.",
            "Find where it appears in analyzing conflict, habits, groups, and decision-making.",
            "Use one vocabulary term such as personality or development to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a behavior case note + regulation plan."
          ],
          "teacherNote": "A strong answer does not just name personality; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Decision making",
          "steps": [
            "Choose a fresh example involving decision making.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define personality in your own words and connect it to personality.",
          "answer": "personality should be explained as a tool for understanding personality, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of development from analyzing conflict, habits, groups, and decision-making and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves development.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with bias and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind bias.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Psychology II.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final behavior case note + regulation plan.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects personality, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like personality, development, and bias inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains personality and development clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in analyzing conflict, habits, groups, and decision-making.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete behavior case note + regulation plan with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Write a social behavior case study",
        "directions": [
          "Pick one real situation connected to analyzing conflict, habits, groups, and decision-making.",
          "Use at least four course terms: personality, development, bias, decision.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final behavior case note + regulation plan and a short reflection."
        ],
        "deliverable": "Final deliverable: behavior case note + regulation plan plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 11,
    "semester": 2,
    "code": "KWA 205",
    "room": "D-401",
    "icon": "💼",
    "title": "Business Basics",
    "theme": "Customers, offers, business models, money, operations, ethics",
    "videoTitle": "Crash Course Business Entrepreneurship",
    "playlistId": "PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze",
    "sources": [
      {
        "label": "OpenStax Introduction to Business 2e",
        "url": "https://openstax.org/details/books/introduction-business-2e"
      },
      {
        "label": "Crash Course Business Entrepreneurship playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze"
      },
      {
        "label": "Khan Academy Finance and Capital Markets",
        "url": "https://www.khanacademy.org/economics-finance-domain/core-finance"
      }
    ],
    "topics": [
      "customer problem",
      "offer",
      "business model",
      "revenue",
      "expenses",
      "operations",
      "ethics",
      "value proposition",
      "cash flow",
      "basic bookkeeping"
    ],
    "vocab": [
      "customer",
      "offer",
      "revenue",
      "expense",
      "profit",
      "operations",
      "ethics",
      "value",
      "cash flow",
      "model"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-205-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-205-homework.html",
      "Advanced": "assets/homework/advanced-kwa-205-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze",
    "lesson": {
      "bigIdea": "Business Basics is about learning how to build a business idea around customers, value, and money. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with customer problem, then connect it to offer and business model. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in planning a small service, product, or resale offer; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use customer, offer, and revenue to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Customer problem",
          "steps": [
            "Name the target skill: customer problem.",
            "Find where it appears in planning a small service, product, or resale offer.",
            "Use one vocabulary term such as customer or offer to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a business model card + simple budget."
          ],
          "teacherNote": "A strong answer does not just name customer problem; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Revenue",
          "steps": [
            "Choose a fresh example involving revenue.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define customer in your own words and connect it to customer problem.",
          "answer": "customer should be explained as a tool for understanding customer problem, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of offer from planning a small service, product, or resale offer and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves offer.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with business model and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind business model.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Business Basics.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final business model card + simple budget.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects customer problem, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like customer, offer, and revenue inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains customer problem and offer clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in planning a small service, product, or resale offer.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete business model card + simple budget with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Create a starter business plan",
        "directions": [
          "Pick one real situation connected to planning a small service, product, or resale offer.",
          "Use at least four course terms: customer, offer, revenue, expense.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final business model card + simple budget and a short reflection."
        ],
        "deliverable": "Final deliverable: business model card + simple budget plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 12,
    "semester": 2,
    "code": "KWA 206",
    "room": "D-402",
    "icon": "📣",
    "title": "Marketing & Communication",
    "theme": "Audience, brand, message, offer, sales, advertising tests",
    "videoTitle": "Crash Course Business Soft Skills",
    "playlistId": "PL8dPuuaLjXtMBsfP-lP28IFvfkISqJofM",
    "sources": [
      {
        "label": "Crash Course Business Soft Skills playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMBsfP-lP28IFvfkISqJofM"
      },
      {
        "label": "OpenStax Introduction to Business 2e",
        "url": "https://openstax.org/details/books/introduction-business-2e"
      }
    ],
    "topics": [
      "audience",
      "brand promise",
      "message",
      "offer testing",
      "sales conversation",
      "copywriting",
      "advertising basics",
      "feedback",
      "positioning",
      "call to action"
    ],
    "vocab": [
      "audience",
      "brand",
      "message",
      "offer",
      "sales",
      "copy",
      "advertising",
      "positioning",
      "feedback",
      "CTA"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-206-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-206-homework.html",
      "Advanced": "assets/homework/advanced-kwa-206-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtMBsfP-lP28IFvfkISqJofM",
    "lesson": {
      "bigIdea": "Marketing & Communication is about learning how to communicate an offer so the right audience understands it. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with audience, then connect it to brand promise and message. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in making a brand message, sales script, or small ad; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use audience, brand, and message to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Audience",
          "steps": [
            "Name the target skill: audience.",
            "Find where it appears in making a brand message, sales script, or small ad.",
            "Use one vocabulary term such as audience or brand to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a audience-message-offer worksheet."
          ],
          "teacherNote": "A strong answer does not just name audience; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Offer testing",
          "steps": [
            "Choose a fresh example involving offer testing.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define audience in your own words and connect it to audience.",
          "answer": "audience should be explained as a tool for understanding audience, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of brand promise from making a brand message, sales script, or small ad and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves brand promise.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with message and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind message.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Marketing & Communication.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final audience-message-offer worksheet.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects audience, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like audience, brand, and message inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains audience and brand promise clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in making a brand message, sales script, or small ad.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete audience-message-offer worksheet with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Launch a mock marketing test",
        "directions": [
          "Pick one real situation connected to making a brand message, sales script, or small ad.",
          "Use at least four course terms: audience, brand, message, offer.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final audience-message-offer worksheet and a short reflection."
        ],
        "deliverable": "Final deliverable: audience-message-offer worksheet plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 13,
    "semester": 3,
    "code": "KWA 301",
    "room": "A-301",
    "icon": "📚",
    "title": "Reading Deeper Texts",
    "theme": "Memoir, persuasion, fiction, strategy, comparison",
    "videoTitle": "Crash Course Literature 1",
    "playlistId": "PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb",
    "sources": [
      {
        "label": "Crash Course Literature 1 playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb"
      },
      {
        "label": "Project Gutenberg",
        "url": "https://www.gutenberg.org/"
      },
      {
        "label": "OpenStax Writing Guide with Handbook",
        "url": "https://openstax.org/details/books/writing-guide"
      }
    ],
    "topics": [
      "memoir",
      "persuasion",
      "fiction",
      "theme",
      "comparison",
      "author purpose",
      "tone",
      "argument",
      "evidence in text",
      "interpretation"
    ],
    "vocab": [
      "memoir",
      "persuasion",
      "theme",
      "tone",
      "argument",
      "fiction",
      "comparison",
      "purpose",
      "interpretation",
      "evidence"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-301-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-301-homework.html",
      "Advanced": "assets/homework/advanced-kwa-301-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOeEc9ME62zTfqc0h6Pe8vb",
    "lesson": {
      "bigIdea": "Reading Deeper Texts is about learning how to read deeper texts by tracking purpose, tone, evidence, and theme. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with memoir, then connect it to persuasion and fiction. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in comparing memoir, fiction, and persuasive writing; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use memoir, persuasion, and theme to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Memoir",
          "steps": [
            "Name the target skill: memoir.",
            "Find where it appears in comparing memoir, fiction, and persuasive writing.",
            "Use one vocabulary term such as memoir or persuasion to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a theme/evidence comparison chart."
          ],
          "teacherNote": "A strong answer does not just name memoir; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Theme",
          "steps": [
            "Choose a fresh example involving theme.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define memoir in your own words and connect it to memoir.",
          "answer": "memoir should be explained as a tool for understanding memoir, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of persuasion from comparing memoir, fiction, and persuasive writing and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves persuasion.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with fiction and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind fiction.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Reading Deeper Texts.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final theme/evidence comparison chart.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects memoir, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like memoir, persuasion, and theme inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains memoir and persuasion clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in comparing memoir, fiction, and persuasive writing.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete theme/evidence comparison chart with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Write a deeper text analysis",
        "directions": [
          "Pick one real situation connected to comparing memoir, fiction, and persuasive writing.",
          "Use at least four course terms: memoir, persuasion, theme, tone.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final theme/evidence comparison chart and a short reflection."
        ],
        "deliverable": "Final deliverable: theme/evidence comparison chart plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 14,
    "semester": 3,
    "code": "KWA 302",
    "room": "R-401",
    "icon": "🗂️",
    "title": "Research & Analysis",
    "theme": "Research questions, primary/secondary sources, citations, reports",
    "videoTitle": "Crash Course Media Literacy",
    "playlistId": "PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY",
    "sources": [
      {
        "label": "Purdue OWL Research and Citation Resources",
        "url": "https://owl.purdue.edu/owl/research_and_citation/resources.html"
      },
      {
        "label": "Library of Congress Research Guides",
        "url": "https://guides.loc.gov/"
      },
      {
        "label": "Crash Course Media Literacy playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY"
      }
    ],
    "topics": [
      "research question",
      "source evaluation",
      "primary source",
      "secondary source",
      "citation",
      "outline",
      "report structure",
      "synthesis",
      "paraphrase",
      "bibliography"
    ],
    "vocab": [
      "research",
      "citation",
      "source",
      "primary",
      "secondary",
      "synthesis",
      "paraphrase",
      "bibliography",
      "outline",
      "analysis"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-302-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-302-homework.html",
      "Advanced": "assets/homework/advanced-kwa-302-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY",
    "lesson": {
      "bigIdea": "Research & Analysis is about learning how to turn research into a clean argument with sources and citations. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with research question, then connect it to source evaluation and primary source. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in building a report from primary and secondary sources; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use research, citation, and source to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Research question",
          "steps": [
            "Name the target skill: research question.",
            "Find where it appears in building a report from primary and secondary sources.",
            "Use one vocabulary term such as research or citation to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a research question + annotated source list."
          ],
          "teacherNote": "A strong answer does not just name research question; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Secondary source",
          "steps": [
            "Choose a fresh example involving secondary source.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define research in your own words and connect it to research question.",
          "answer": "research should be explained as a tool for understanding research question, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of source evaluation from building a report from primary and secondary sources and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves source evaluation.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with primary source and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind primary source.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Research & Analysis.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final research question + annotated source list.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects research question, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like research, citation, and source inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains research question and source evaluation clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in building a report from primary and secondary sources.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete research question + annotated source list with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Write a short research report",
        "directions": [
          "Pick one real situation connected to building a report from primary and secondary sources.",
          "Use at least four course terms: research, citation, source, primary.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final research question + annotated source list and a short reflection."
        ],
        "deliverable": "Final deliverable: research question + annotated source list plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 15,
    "semester": 3,
    "code": "KWA 303",
    "room": "L-501",
    "icon": "🌎",
    "title": "Language & Communication Growth",
    "theme": "Spanish basics, English speaking, vocabulary, presentation",
    "videoTitle": "BBC Learning English — 6 Minute Vocabulary",
    "playlistId": "PLcetZ6gSk96-GbYhcN0KkFtIL8LJPOG5x",
    "sources": [
      {
        "label": "StudySpanish",
        "url": "https://studyspanish.com/"
      },
      {
        "label": "BBC Learning English 6 Minute Vocabulary playlist",
        "url": "https://www.youtube.com/playlist?list=PLcetZ6gSk96-GbYhcN0KkFtIL8LJPOG5x"
      },
      {
        "label": "NHK World Easy Japanese lessons",
        "url": "https://www.youtube.com/playlist?list=PLFEzXnIQVwV8X_nQgDEWcqQdx39Sj8Zph"
      }
    ],
    "topics": [
      "Spanish greetings",
      "Spanish sentence pattern",
      "English speaking clarity",
      "vocabulary growth",
      "pronunciation",
      "listening notes",
      "short presentation",
      "conversation repair",
      "tone",
      "memory review"
    ],
    "vocab": [
      "greeting",
      "pronunciation",
      "phrase",
      "translation",
      "conversation",
      "clarity",
      "vocabulary",
      "presentation",
      "listening",
      "tone"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-303-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-303-homework.html",
      "Advanced": "assets/homework/advanced-kwa-303-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PLcetZ6gSk96-GbYhcN0KkFtIL8LJPOG5x",
    "lesson": {
      "bigIdea": "Language & Communication Growth is about learning how to grow language skill through speaking, listening, vocabulary, and repair. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with Spanish greetings, then connect it to Spanish sentence pattern and English speaking clarity. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in holding a basic conversation or short presentation; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use greeting, pronunciation, and phrase to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Spanish greetings",
          "steps": [
            "Name the target skill: Spanish greetings.",
            "Find where it appears in holding a basic conversation or short presentation.",
            "Use one vocabulary term such as greeting or pronunciation to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a phrase bank + speaking practice log."
          ],
          "teacherNote": "A strong answer does not just name Spanish greetings; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Vocabulary growth",
          "steps": [
            "Choose a fresh example involving vocabulary growth.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define greeting in your own words and connect it to Spanish greetings.",
          "answer": "greeting should be explained as a tool for understanding Spanish greetings, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of Spanish sentence pattern from holding a basic conversation or short presentation and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves Spanish sentence pattern.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with English speaking clarity and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind English speaking clarity.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Language & Communication Growth.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final phrase bank + speaking practice log.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects Spanish greetings, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like greeting, pronunciation, and phrase inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains Spanish greetings and Spanish sentence pattern clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in holding a basic conversation or short presentation.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete phrase bank + speaking practice log with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Record or write a short bilingual presentation",
        "directions": [
          "Pick one real situation connected to holding a basic conversation or short presentation.",
          "Use at least four course terms: greeting, pronunciation, phrase, translation.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final phrase bank + speaking practice log and a short reflection."
        ],
        "deliverable": "Final deliverable: phrase bank + speaking practice log plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 16,
    "semester": 3,
    "code": "KWA 304",
    "room": "D-501",
    "icon": "🏗️",
    "title": "Business Build-Out",
    "theme": "Market research, pricing, landing pages, ads, money tracking, SOPs",
    "videoTitle": "Crash Course Business Entrepreneurship",
    "playlistId": "PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze",
    "sources": [
      {
        "label": "OpenStax Introduction to Business 2e",
        "url": "https://openstax.org/details/books/introduction-business-2e"
      },
      {
        "label": "Crash Course Business Entrepreneurship playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze"
      }
    ],
    "topics": [
      "market research",
      "pricing",
      "landing page",
      "advertisement",
      "money tracking",
      "SOP",
      "customer interview",
      "simple funnel",
      "offer stack",
      "weekly review"
    ],
    "vocab": [
      "market",
      "pricing",
      "landing page",
      "ad",
      "SOP",
      "funnel",
      "customer",
      "interview",
      "tracking",
      "review"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-304-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-304-homework.html",
      "Advanced": "assets/homework/advanced-kwa-304-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze",
    "lesson": {
      "bigIdea": "Business Build-Out is about learning how to turn a business idea into a tested offer with numbers and systems. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with market research, then connect it to pricing and landing page. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in pricing, interviewing customers, building a page, and tracking money; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use market, pricing, and landing page to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Market research",
          "steps": [
            "Name the target skill: market research.",
            "Find where it appears in pricing, interviewing customers, building a page, and tracking money.",
            "Use one vocabulary term such as market or pricing to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a offer stack + weekly review sheet."
          ],
          "teacherNote": "A strong answer does not just name market research; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Advertisement",
          "steps": [
            "Choose a fresh example involving advertisement.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define market in your own words and connect it to market research.",
          "answer": "market should be explained as a tool for understanding market research, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of pricing from pricing, interviewing customers, building a page, and tracking money and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves pricing.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with landing page and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind landing page.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Business Build-Out.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final offer stack + weekly review sheet.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects market research, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like market, pricing, and landing page inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains market research and pricing clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in pricing, interviewing customers, building a page, and tracking money.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete offer stack + weekly review sheet with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Build a simple business launch kit",
        "directions": [
          "Pick one real situation connected to pricing, interviewing customers, building a page, and tracking money.",
          "Use at least four course terms: market, pricing, landing page, ad.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final offer stack + weekly review sheet and a short reflection."
        ],
        "deliverable": "Final deliverable: offer stack + weekly review sheet plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 17,
    "semester": 3,
    "code": "KWA 305",
    "room": "UX-601",
    "icon": "🎨",
    "title": "Design + Psychology Integration",
    "theme": "UX, learning design, environment design, behavior change",
    "videoTitle": "Crash Course Media Literacy",
    "playlistId": "PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY",
    "sources": [
      {
        "label": "MIT OCW Introduction to Architecture & Environmental Design",
        "url": "https://ocw.mit.edu/courses/4-111-introduction-to-architecture-environmental-design-spring-2014/"
      },
      {
        "label": "OpenStax Psychology 2e",
        "url": "https://openstax.org/details/books/psychology-2e"
      },
      {
        "label": "Crash Course Media Literacy playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY"
      }
    ],
    "topics": [
      "user experience",
      "learning design",
      "environment design",
      "behavior change",
      "attention",
      "friction",
      "feedback loops",
      "habit design",
      "accessibility",
      "testing"
    ],
    "vocab": [
      "UX",
      "behavior",
      "attention",
      "friction",
      "feedback",
      "habit",
      "accessibility",
      "environment",
      "prototype",
      "test"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-305-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-305-homework.html",
      "Advanced": "assets/homework/advanced-kwa-305-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY",
    "lesson": {
      "bigIdea": "Design + Psychology Integration is about learning how to use design psychology to make learning and behavior easier. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with user experience, then connect it to learning design and environment design. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in improving a website, room, routine, or classroom flow; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use UX, behavior, and attention to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: User experience",
          "steps": [
            "Name the target skill: user experience.",
            "Find where it appears in improving a website, room, routine, or classroom flow.",
            "Use one vocabulary term such as UX or behavior to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a prototype + feedback loop notes."
          ],
          "teacherNote": "A strong answer does not just name user experience; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Behavior change",
          "steps": [
            "Choose a fresh example involving behavior change.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define UX in your own words and connect it to user experience.",
          "answer": "UX should be explained as a tool for understanding user experience, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of learning design from improving a website, room, routine, or classroom flow and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves learning design.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with environment design and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind environment design.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Design + Psychology Integration.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final prototype + feedback loop notes.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects user experience, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like UX, behavior, and attention inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains user experience and learning design clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in improving a website, room, routine, or classroom flow.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete prototype + feedback loop notes with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Redesign one experience using UX and habit principles",
        "directions": [
          "Pick one real situation connected to improving a website, room, routine, or classroom flow.",
          "Use at least four course terms: UX, behavior, attention, friction.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final prototype + feedback loop notes and a short reflection."
        ],
        "deliverable": "Final deliverable: prototype + feedback loop notes plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  },
  {
    "month": 18,
    "semester": 3,
    "code": "KWA 306",
    "room": "CAP-701",
    "icon": "🏆",
    "title": "Capstone Month",
    "theme": "Plan, prototype, present, portfolio, next-level roadmap",
    "videoTitle": "Crash Course: How to College",
    "playlistId": "PL8dPuuaLjXtNxrUcgYGmPneX1PTStLDQx",
    "sources": [
      {
        "label": "Crash Course How to College playlist",
        "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNxrUcgYGmPneX1PTStLDQx"
      },
      {
        "label": "Purdue OWL Presentations",
        "url": "https://owl.purdue.edu/owl/general_writing/visual_rhetoric/slide_presentations/index.html"
      }
    ],
    "topics": [
      "project plan",
      "prototype",
      "portfolio",
      "presentation",
      "evidence",
      "reflection",
      "revision",
      "timeline",
      "success measure",
      "next 90-day roadmap"
    ],
    "vocab": [
      "capstone",
      "prototype",
      "portfolio",
      "presentation",
      "evidence",
      "reflection",
      "revision",
      "timeline",
      "measure",
      "roadmap"
    ],
    "homework": {
      "Basic": "assets/homework/basic-kwa-306-homework.html",
      "Intermediate": "assets/homework/intermediate-kwa-306-homework.html",
      "Advanced": "assets/homework/advanced-kwa-306-homework.html"
    },
    "videoUrl": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNxrUcgYGmPneX1PTStLDQx",
    "lesson": {
      "bigIdea": "Capstone Month is about learning how to prove mastery through a finished project, presentation, and roadmap. The student should finish the class able to explain the idea, show an example, correct mistakes, and save proof.",
      "writtenLesson": [
        "Start with project plan, then connect it to prototype and portfolio. A student should not treat these as random vocabulary words. They are the working tools of the class. The first move is to define the idea in plain language; the second move is to show it in planning, building, revising, and presenting a capstone; the final move is to explain why the answer makes sense.",
        "The strongest Kingswell routine is old-school and reliable: read, write, practice, correct, and present proof. For this class, students use capstone, prototype, and portfolio to build a clear answer. If the answer cannot be explained without copying the source, it is not mastered yet. That is the whole point of the worksheet and retake system.",
        "Mastery means the student can transfer the skill. In classwork, they identify the concept. In homework, they apply it. In the quest deck, they correct weak spots. In the 40-question mastery test, they prove they can recognize, explain, and use the skill under pressure without hiding behind a video tab."
      ],
      "workedExamples": [
        {
          "title": "Guided example: Project plan",
          "steps": [
            "Name the target skill: project plan.",
            "Find where it appears in planning, building, revising, and presenting a capstone.",
            "Use one vocabulary term such as capstone or prototype to explain it.",
            "Write one correction: what was unclear, wrong, missing, or unsupported?",
            "Save the proof as a portfolio package + 90-day roadmap."
          ],
          "teacherNote": "A strong answer does not just name project plan; it shows the skill, explains the reason, and proves the student can repeat it."
        },
        {
          "title": "Transfer example: Presentation",
          "steps": [
            "Choose a fresh example involving presentation.",
            "Complete the task once with guidance.",
            "Mark one mistake or weak sentence/problem/decision.",
            "Fix it and explain why the fix is better.",
            "Teach the idea back in two or three plain sentences."
          ],
          "teacherNote": "Transfer is the test. If the student can only repeat the exact classroom example, the skill is still fragile."
        }
      ],
      "practiceDrills": [
        {
          "prompt": "Define capstone in your own words and connect it to project plan.",
          "answer": "capstone should be explained as a tool for understanding project plan, then connected to one clear example from the class.",
          "explanation": "This checks definition plus use. A memorized word without an example is weak proof."
        },
        {
          "prompt": "Choose one example of prototype from planning, building, revising, and presenting a capstone and explain the evidence.",
          "answer": "A strong answer names the example, points to evidence, and explains how it proves prototype.",
          "explanation": "This forces the student to support the answer instead of guessing."
        },
        {
          "prompt": "Find one common mistake students make with portfolio and correct it.",
          "answer": "The correction should identify the mistake, rewrite or solve it properly, and explain the rule behind portfolio.",
          "explanation": "Correction builds mastery because the student must know why the first attempt failed."
        },
        {
          "prompt": "Create portfolio proof for Capstone Month.",
          "answer": "Portfolio proof should include a short explanation, one worked example, one correction, and the final portfolio package + 90-day roadmap.",
          "explanation": "Proof matters because progress that is not recorded is easy to fake and easy to forget."
        }
      ],
      "answerExplanations": [
        "The best answer connects project plan, a concrete example, and a reason. It does not stop at a definition.",
        "A weak answer usually copies language, skips evidence, or gives an opinion without showing work.",
        "For this course, mastery requires using vocabulary like capstone, prototype, and portfolio inside a real task."
      ],
      "rubric": [
        {
          "category": "Concept understanding",
          "mastery": "Explains project plan and prototype clearly in plain language.",
          "developing": "Names the topic but cannot explain how it works."
        },
        {
          "category": "Application",
          "mastery": "Uses the skill correctly in planning, building, revising, and presenting a capstone.",
          "developing": "Only repeats the classroom example or guesses."
        },
        {
          "category": "Correction",
          "mastery": "Finds one error, fixes it, and explains why the new answer is stronger.",
          "developing": "Changes the answer without explaining the reason."
        },
        {
          "category": "Portfolio proof",
          "mastery": "Submits a complete portfolio package + 90-day roadmap with reflection.",
          "developing": "Submits incomplete proof or a screenshot with no thinking shown."
        }
      ],
      "project": {
        "title": "Complete and present a Kingswell capstone",
        "directions": [
          "Pick one real situation connected to planning, building, revising, and presenting a capstone.",
          "Use at least four course terms: capstone, prototype, portfolio, presentation.",
          "Create a first attempt, then revise it after feedback.",
          "Submit the final portfolio package + 90-day roadmap and a short reflection."
        ],
        "deliverable": "Final deliverable: portfolio package + 90-day roadmap plus a one-paragraph reflection explaining what improved."
      },
      "teacherFeedback": [
        "Good start: now add the reason behind your answer.",
        "You named the idea, but mastery requires an example and a correction.",
        "Do not copy the source. Explain it like you are teaching a younger student.",
        "Your proof is stronger when it shows the mistake, the fix, and the next step."
      ]
    }
  }
];

const KWA_QUESTS = [
  "Foundation Flashcard",
  "Picture Study",
  "Vocabulary Forge",
  "Read Mission",
  "Video Mission",
  "Quick Drill",
  "Match the Concept",
  "Sort the Steps",
  "Scenario Challenge",
  "Build It",
  "Mistake Finder",
  "Teach-Back Room",
  "Portfolio Proof",
  "Timed Recap",
  "Boss Checkpoint"
];

const KWA_SOURCE_LIBRARY = [
  {
    "name": "Crash Course Study Skills",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNcAJRf3bE1IJU6nMfHj86W"
  },
  {
    "name": "Crash Course Psychology",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtOPRKzVLY0jJY-uHOH9KVU6"
  },
  {
    "name": "Crash Course Biology",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPW_ofbxdHNciuLoTRLPMgB"
  },
  {
    "name": "Crash Course Entrepreneurship",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtNamNKW5qlS-nKgA0on7Qze"
  },
  {
    "name": "Crash Course Economics",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtPNZwz5_o_5uirJ8gQXnhEO"
  },
  {
    "name": "Crash Course Media Literacy",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PL8dPuuaLjXtM6jSpzb5gMNsx9kdmqBfmY"
  },
  {
    "name": "OpenStax Writing Guide with Handbook",
    "type": "Open textbook",
    "url": "https://openstax.org/details/books/writing-guide"
  },
  {
    "name": "OpenStax Prealgebra 2e",
    "type": "Open textbook",
    "url": "https://openstax.org/details/books/prealgebra-2e"
  },
  {
    "name": "OpenStax Psychology 2e",
    "type": "Open textbook",
    "url": "https://openstax.org/details/books/psychology-2e"
  },
  {
    "name": "OpenStax Introduction to Business 2e",
    "type": "Open textbook",
    "url": "https://openstax.org/details/books/introduction-business-2e"
  },
  {
    "name": "Purdue OWL Research and Citation",
    "type": "Writing/research guide",
    "url": "https://owl.purdue.edu/owl/research_and_citation/resources.html"
  },
  {
    "name": "Library of Congress Research Guides",
    "type": "Research guide library",
    "url": "https://guides.loc.gov/"
  },
  {
    "name": "MIT OCW Introduction to Architecture & Environmental Design",
    "type": "Open course",
    "url": "https://ocw.mit.edu/courses/4-111-introduction-to-architecture-environmental-design-spring-2014/"
  },
  {
    "name": "StudySpanish",
    "type": "Spanish lessons",
    "url": "https://studyspanish.com/"
  },
  {
    "name": "NHK World Easy Japanese",
    "type": "Japanese video lessons",
    "url": "https://www.youtube.com/playlist?list=PLFEzXnIQVwV8X_nQgDEWcqQdx39Sj8Zph"
  },
  {
    "name": "Marugoto Plus",
    "type": "Japanese language/culture site",
    "url": "https://marugotoweb.jp/en/index.php"
  },
  {
    "name": "Project Gutenberg",
    "type": "Public-domain reading library",
    "url": "https://www.gutenberg.org/"
  },
  {
    "name": "Study Hall Composition",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PLNrrxHpJhC8mNXjrAL3Ey1Q6iI35cymzl"
  },
  {
    "name": "Khan Academy Fractions, Decimals & Percentages",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HCQHWDXEKSnY3-cygkXGiyN"
  },
  {
    "name": "Khan Academy Algebra Basics Foundations",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PLSQl0a2vh4HB6I9NRYeudXLIdPqCVKXhv"
  },
  {
    "name": "Architecture Drawing — 30x40 Design Workshop",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PLuJj3iQpiK3udc25pS_s2hCxm4N7VScnr"
  },
  {
    "name": "AutoCAD for Architecture — Beginner Drafting",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PLg2jFlJlPd1z82uJk_7qDSYaPOPdimEYA"
  },
  {
    "name": "BBC Learning English 6 Minute Vocabulary",
    "type": "YouTube playlist",
    "url": "https://www.youtube.com/playlist?list=PLcetZ6gSk96-GbYhcN0KkFtIL8LJPOG5x"
  }
];
