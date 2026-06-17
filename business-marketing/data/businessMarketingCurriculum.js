const BUSINESS_LEVELS = {
  Basic: {
    tagline: "Foundation: define business terms, identify customer needs, and complete guided examples.",
    pass: 80
  },
  Intermediate: {
    tagline: "Applied: build offers, compare options, and explain the reason behind each business decision.",
    pass: 85
  },
  Advanced: {
    tagline: "Mastery: evaluate strategy, improve systems, and present proof like an owner.",
    pass: 90
  }
};

const BUSINESS_SOURCES = [
  { name: "OpenStax Principles of Marketing", url: "https://openstax.org/details/books/principles-marketing" },
  { name: "OpenStax Principles of Management", url: "https://openstax.org/details/books/principles-management" },
  { name: "U.S. Small Business Administration Learning Center", url: "https://www.sba.gov/business-guide" },
  { name: "HubSpot Marketing Resources", url: "https://www.hubspot.com/resources" }
];

const BUSINESS_LESSONS = {
  Basic: [
    lesson("basic-1", "Business Model Basics", "Define what you sell, who buys it, and how money enters the business.", ["customer", "offer", "revenue"], "Draw a one-page business model for a simple service."),
    lesson("basic-2", "Customer Problems", "Separate real customer pain from guesses, trends, and personal preferences.", ["problem", "need", "benefit"], "Interview a pretend customer and list three pains."),
    lesson("basic-3", "Simple Pricing", "Use cost, time, value, and comparison to set a starter price.", ["cost", "margin", "price"], "Price one small service and explain the math."),
    lesson("basic-4", "Customer Service", "Set expectations, respond clearly, handle mistakes, and follow up.", ["expectation", "refund", "follow-up"], "Write a customer response for a late order."),
    lesson("basic-5", "Brand Message", "Explain who the business helps and why the offer matters.", ["brand", "audience", "promise"], "Write a one-sentence brand promise."),
    lesson("basic-6", "Marketing Channels", "Compare word of mouth, search, social, email, and flyers.", ["channel", "reach", "trust"], "Choose two channels for a local business."),
    lesson("basic-7", "Sales Conversation", "Ask questions, present the offer, answer concerns, and close respectfully.", ["lead", "objection", "close"], "Write a short sales script."),
    lesson("basic-8", "Operations Checklist", "Create repeatable steps so the business can deliver consistently.", ["workflow", "quality", "delivery"], "Build a five-step delivery checklist.")
  ],
  Intermediate: [
    lesson("intermediate-1", "Offer Design", "Package the result, timeline, price, and guarantee into a clear offer.", ["package", "outcome", "guarantee"], "Create a better offer for one service."),
    lesson("intermediate-2", "Market Research", "Use customer questions, competitors, reviews, and source notes to spot demand.", ["demand", "competitor", "signal"], "Compare three competitors and list gaps."),
    lesson("intermediate-3", "Unit Economics", "Track variable costs, fixed costs, profit, and break-even points.", ["fixed cost", "variable cost", "break-even"], "Calculate break-even for one product."),
    lesson("intermediate-4", "Content Marketing", "Plan useful posts that educate, prove, and invite action.", ["content", "proof", "call to action"], "Outline one week of content."),
    lesson("intermediate-5", "Sales Funnel", "Map awareness, interest, decision, purchase, and retention.", ["funnel", "conversion", "retention"], "Map a simple funnel for a tutoring service."),
    lesson("intermediate-6", "Customer Feedback", "Collect complaints, praise, questions, and objections without getting defensive.", ["feedback", "review", "improvement"], "Turn three complaints into fixes."),
    lesson("intermediate-7", "Basic Analytics", "Read leads, conversion rate, average order value, and repeat purchase.", ["metric", "conversion rate", "average order value"], "Explain which metric matters most."),
    lesson("intermediate-8", "Operating Rhythm", "Build weekly review habits for money, marketing, delivery, and customers.", ["cadence", "review", "accountability"], "Design a weekly owner review.")
  ],
  Advanced: [
    lesson("advanced-1", "Positioning Strategy", "Make the business clearly different for a specific customer group.", ["positioning", "segment", "differentiation"], "Rewrite a vague offer into a positioned one."),
    lesson("advanced-2", "Campaign Planning", "Set one campaign goal, message, channel, budget, and measurement plan.", ["campaign", "budget", "measurement"], "Plan a two-week campaign."),
    lesson("advanced-3", "Pricing Strategy", "Evaluate premium, bundle, subscription, and discount decisions.", ["premium", "bundle", "subscription"], "Choose a pricing strategy and defend it."),
    lesson("advanced-4", "Negotiation", "Prepare facts, alternatives, boundaries, and tradeoffs before a deal.", ["BATNA", "terms", "tradeoff"], "Write a negotiation prep sheet."),
    lesson("advanced-5", "Hiring and Delegation", "Turn repeated work into roles, standards, and checklists.", ["role", "standard", "delegation"], "Create a role card for one task."),
    lesson("advanced-6", "Risk and Compliance", "Identify legal, tax, safety, privacy, and reputation risks.", ["risk", "compliance", "liability"], "List five risks and controls."),
    lesson("advanced-7", "Customer Lifetime Value", "Improve repeat purchase, referrals, and retention ethically.", ["lifetime value", "referral", "churn"], "Design a retention plan."),
    lesson("advanced-8", "Business Portfolio Proof", "Present a complete owner-style case study with numbers and corrections.", ["case study", "evidence", "revision"], "Build a final business proof packet.")
  ]
};

function lesson(id, title, objective, vocabulary, homework) {
  return {
    id,
    title,
    objective,
    vocabulary,
    notes: [
      `${title} starts with a clear definition, then moves into a business decision that can be explained with evidence.`,
      "A strong owner does not guess and hope. The work is to name the customer, define the value, check the numbers, and document what changed.",
      "Portfolio proof should show the first attempt, one correction, and the reason the final version is stronger."
    ],
    practice: [
      `Define ${vocabulary[0]} in plain language.`,
      `Create one example that uses ${vocabulary[1]}.`,
      `Correct one weak business decision using ${vocabulary[2]}.`
    ],
    homework,
    rubric: [
      "Defines the business concept accurately.",
      "Uses a concrete customer or market example.",
      "Shows math, evidence, or reasoning where needed.",
      "Includes one correction and final portfolio proof."
    ]
  };
}
