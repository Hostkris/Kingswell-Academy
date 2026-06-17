const BUSINESS_QUESTION_TEMPLATES = [
  {
    prompt: "Which answer best shows real business thinking about {topic}?",
    correct: "Define the customer, explain the value, check the evidence, and document the next action.",
    wrong: [
      "Pick the idea that sounds exciting and skip customer evidence.",
      "Copy a competitor without explaining why it fits.",
      "Change the price randomly and hope sales improve."
    ],
    reason: "Business proof connects customer, value, numbers, and correction."
  },
  {
    prompt: "A student is working on {title}. What should they do before claiming mastery?",
    correct: "Create an example, find one weakness, correct it, and save portfolio proof.",
    wrong: [
      "Watch a video and mark the course complete.",
      "Memorize one vocabulary word with no example.",
      "Ask someone else to choose the answer."
    ],
    reason: "Mastery requires application, correction, and proof."
  },
  {
    prompt: "What is the strongest use of the term {vocab}?",
    correct: "Use it inside a specific decision and explain how it affects the customer or business.",
    wrong: [
      "Mention the term once without explaining it.",
      "Use it as a slogan only.",
      "Ignore context because all business terms mean the same thing."
    ],
    reason: "Vocabulary matters when it guides a real decision."
  },
  {
    prompt: "Which portfolio proof is strongest for {topic}?",
    correct: "A short explanation, one worked example, one correction, and the final decision.",
    wrong: [
      "A screenshot with no explanation.",
      "A copied paragraph from a source.",
      "A sentence saying the task was completed."
    ],
    reason: "Proof must show thinking and improvement."
  }
];
