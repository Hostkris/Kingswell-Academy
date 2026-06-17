export const logicResearchHomework = {
  "basic-l1": {
    title: "Claims, Reasons, and Evidence Practice",
    directions:
      "Complete each step in full sentences. The goal is to prove that you can separate claims from support.",
    tasks: [
      "Write three claims about school, health, technology, or money.",
      "Add one reason for each claim.",
      "Add one piece of evidence or a source you would need to prove each claim.",
      "Choose your strongest claim and explain why it is stronger than the others.",
      "Rewrite one weak claim into a stronger argument."
    ],
    submission:
      "Submit 8-12 sentences or upload a worksheet if your platform supports uploads."
  },
  "basic-l2": {
    title: "Evidence vs Opinion Worksheet",
    directions:
      "For each claim, label the support as opinion, example, anecdote, or evidence.",
    tasks: [
      "Find one claim from an article or video.",
      "Write whether the support is opinion, example, anecdote, or evidence.",
      "Explain whether the support is strong or weak.",
      "Add one stronger source that could improve the argument."
    ],
    submission: "Submit one paragraph and one source link or citation."
  },
  "basic-l3": {
    title: "Topic to Research Question",
    directions:
      "Turn a broad idea into a usable research question.",
    tasks: [
      "Choose one broad topic.",
      "Narrow the topic three times.",
      "Write one research question.",
      "Write one working thesis.",
      "List three keywords you would use to search for sources."
    ],
    submission: "Submit the completed topic ladder and working thesis."
  },
  "basic-l4": {
    title: "Root Decision Reflection",
    directions:
      "Use this assignment to stop overthinking and start research action.",
    tasks: [
      "Write one academic decision you are avoiding.",
      "Name the root decision in one sentence.",
      "Write the fear attached to the decision.",
      "Write the cost of continuing to avoid the decision.",
      "Write the smallest next step and complete it."
    ],
    submission: "Submit a 5-sentence reflection plus proof of the smallest next step."
  },
  "intermediate-l1": {
    title: "Hidden Assumption Drill",
    directions:
      "Find the assumption underneath the claim.",
    tasks: [
      "Collect three claims from articles, speeches, ads, or social media posts.",
      "For each claim, identify the conclusion.",
      "Write the hidden assumption.",
      "Explain whether the assumption is reasonable or weak.",
      "Rewrite one claim with a stronger assumption or clearer evidence."
    ],
    submission: "Submit a table with claim, conclusion, assumption, and evaluation."
  },
  "intermediate-l2": {
    title: "Fallacy Repair Assignment",
    directions:
      "Name the fallacy, explain the weakness, and repair the argument.",
    tasks: [
      "Write one example each of ad hominem, straw man, false cause, and bandwagon.",
      "Explain why each one is weak.",
      "Rewrite each example into a stronger argument.",
      "Choose the strongest revision and explain why it works."
    ],
    submission: "Submit four fallacy examples and four repaired arguments."
  },
  "intermediate-l3": {
    title: "Validity and Soundness Practice",
    directions:
      "Test argument structure and truth.",
    tasks: [
      "Write one valid and sound argument.",
      "Write one valid but unsound argument.",
      "Write one invalid argument.",
      "Explain the difference between the three.",
      "Create a counterexample for the invalid argument."
    ],
    submission: "Submit your three arguments and explanations."
  },
  "advanced-l1": {
    title: "Symbolic Logic Translation",
    directions:
      "Translate English statements into symbolic form.",
    tasks: [
      "Create symbols P, Q, and R for three simple propositions.",
      "Write five compound English statements.",
      "Translate each statement using ¬, ∧, ∨, and →.",
      "Choose one statement and explain its truth conditions."
    ],
    submission: "Submit symbols, translations, and one explanation."
  },
  "advanced-l2": {
    title: "Research Design Builder",
    directions:
      "Choose the correct method for the question.",
    tasks: [
      "Write three research questions.",
      "Label each as qualitative, quantitative, or mixed methods.",
      "Explain why each method fits.",
      "Name one possible validity threat for each question.",
      "Name one way to improve reliability."
    ],
    submission: "Submit a research design chart."
  }
};

export function getHomework(lessonId) {
  return logicResearchHomework[lessonId];
}
