/** Year 3 curriculum — first 3 lessons from Becky (sample). Placeholders for Y4–Y6. */

export const IMPACT_STATS = [
  { value: "1,500+", label: "Pupils Reached" },
  { value: "20+", label: "Schools Supported" },
  { value: "100%", label: "Curriculum Aligned" },
  { value: "4", label: "Year Groups" },
];

export const BRAND_VALUES = [
  {
    title: "Financial Confidence",
    desc: "Children learning skills for life — not just for tests.",
    icon: "coins",
  },
  {
    title: "Real World Learning",
    desc: "Practical life skills through role play, not theory.",
    icon: "wallet",
  },
  {
    title: "Opportunity",
    desc: "Helping children understand money and their future.",
    icon: "growth",
  },
  {
    title: "Accessibility",
    desc: "Simple enough for every teacher. Simple enough for every school.",
    icon: "school",
  },
];

export const YEARS = [
  { id: "y3", label: "Year 3", age: "7–8", lessons: 12, ready: true },
  { id: "y4", label: "Year 4", age: "8–9", lessons: 12, ready: false },
  { id: "y5", label: "Year 5", age: "9–10", lessons: 12, ready: false },
  { id: "y6", label: "Year 6", age: "10–11", lessons: 12, ready: false },
];

export const LESSONS = {
  y3: [
    {
      id: "y3-l1",
      number: 1,
      title: "What is Money?",
      duration: "45 mins",
      objective:
        "Children will understand what money is, recognise coins and notes, and explain why we use money in everyday life.",
      vocabulary: ["Money", "Coin", "Note", "Value", "Exchange", "Currency"],
      overview:
        "This opening lesson introduces money as a tool for exchange. Children explore real coins and notes, discuss where money comes from, and begin to understand that different items have different values.",
      resources: [
        { name: "Lesson Presentation", type: "pptx", size: "4.2 MB" },
        { name: "Coin Sorting Activity", type: "pdf", size: "1.1 MB" },
        { name: "Teacher Notes", type: "pdf", size: "890 KB" },
        { name: "Vocabulary Cards", type: "pdf", size: "520 KB" },
      ],
      downloads: ["Worksheet: My Money Journal", "Display: Coin Recognition Poster"],
      teacherNotes:
        "Start with a class discussion — ask children what they already know about money. Use real coins where possible. The sorting activity works well in pairs.",
      tags: ["Introduction", "Coins & Notes"],
    },
    {
      id: "y3-l2",
      number: 2,
      title: "Needs vs Wants",
      duration: "45 mins",
      objective:
        "Children will distinguish between needs and wants, and begin to make thoughtful spending choices.",
      vocabulary: ["Need", "Want", "Choice", "Priority", "Essential", "Optional"],
      overview:
        "Building on Lesson 1, children explore the difference between things we need to live and things we want. Through discussion and a sorting activity, they learn that money is limited and choices matter.",
      resources: [
        { name: "Lesson Presentation", type: "pptx", size: "3.8 MB" },
        { name: "Needs vs Wants Sorting Cards", type: "pdf", size: "2.1 MB" },
        { name: "Teacher Notes", type: "pdf", size: "760 KB" },
        { name: "Discussion Prompts", type: "pdf", size: "340 KB" },
      ],
      downloads: ["Worksheet: My Needs & Wants", "Classroom Display Pack"],
      teacherNotes:
        "Use real-life examples children can relate to — lunch vs sweets, shoes vs toys. The sorting cards activity takes 15 minutes and generates great discussion.",
      tags: ["Decision Making", "Spending"],
    },
    {
      id: "y3-l3",
      number: 3,
      title: "Saving for Something Special",
      duration: "45 mins",
      objective:
        "Children will understand the concept of saving, set a simple savings goal, and explain why people save money.",
      vocabulary: ["Save", "Goal", "Piggy Bank", "Patience", "Plan", "Target"],
      overview:
        "Children learn that saving means putting money aside for later. They set their own savings goal, create a simple savings plan, and discuss why waiting can lead to better outcomes.",
      resources: [
        { name: "Lesson Presentation", type: "pptx", size: "4.5 MB" },
        { name: "Savings Goal Template", type: "pdf", size: "980 KB" },
        { name: "Teacher Notes", type: "pdf", size: "820 KB" },
        { name: "Piggy Bank Craft Template", type: "pdf", size: "1.4 MB" },
      ],
      downloads: ["Worksheet: My Savings Goal", "Take-Home: Family Savings Challenge"],
      teacherNotes:
        "The piggy bank craft is a highlight — allow 20 minutes. Link to Money Town™ by explaining that in the workshop, children will save for real items in the shop.",
      tags: ["Saving", "Goals"],
    },
    ...Array.from({ length: 9 }, (_, i) => ({
      id: `y3-l${i + 4}`,
      number: i + 4,
      title: `Lesson ${i + 4}`,
      duration: "45 mins",
      placeholder: true,
      objective: "Content coming soon — full curriculum in development.",
      vocabulary: [],
      overview: "This lesson is part of the complete Year 3 curriculum and will be available at launch.",
      resources: [],
      downloads: [],
      teacherNotes: "",
      tags: ["Coming Soon"],
    })),
  ],
  y4: placeholderLessons("Year 4"),
  y5: placeholderLessons("Year 5"),
  y6: placeholderLessons("Year 6"),
};

function placeholderLessons(year) {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `${year.toLowerCase().replace(" ", "")}-l${i + 1}`,
    number: i + 1,
    title: `${year} — Lesson ${i + 1}`,
    duration: "45 mins",
    placeholder: true,
    objective: "Full curriculum content coming in a future release.",
    vocabulary: [],
    overview: `${year} curriculum is in development. Placeholder for demo purposes.`,
    resources: [],
    downloads: [],
    teacherNotes: "",
    tags: ["Coming Soon"],
  }));
}

export const RECENT_LESSONS = [
  { id: "y3-l3", title: "Saving for Something Special", year: "Year 3", added: "2 days ago" },
  { id: "y3-l2", title: "Needs vs Wants", year: "Year 3", added: "1 week ago" },
  { id: "y3-l1", title: "What is Money?", year: "Year 3", added: "1 week ago" },
];

export const FUTURE_FEATURES = [
  {
    id: "parent-portal",
    title: "Parent Portal",
    desc: "Families stay connected with home learning activities and progress updates.",
    stage: 4,
    icon: "users",
  },
  {
    id: "student-challenges",
    title: "Student Challenges",
    desc: "Gamified money challenges that children complete at home or in class.",
    stage: 5,
    icon: "trophy",
  },
  {
    id: "homework",
    title: "Homework Activities",
    desc: "Take-home tasks that extend classroom learning into family conversations.",
    stage: 4,
    icon: "book",
  },
  {
    id: "progress",
    title: "Progress Tracking",
    desc: "See which lessons each class has completed and where pupils need support.",
    stage: 2,
    icon: "chart",
  },
  {
    id: "mat",
    title: "MAT Management",
    desc: "Multi-academy trust dashboards for curriculum rollout across schools.",
    stage: 3,
    icon: "building",
  },
  {
    id: "assessment",
    title: "Assessment Tools",
    desc: "Built-in checks for understanding aligned to curriculum objectives.",
    stage: 3,
    icon: "check",
  },
];

export const STAGES = [
  {
    id: 1,
    slug: "digital",
    name: "Cash Academy Digital",
    tagline: "Launch curriculum subscriptions",
    status: "live",
    investment: "£1,999",
    support: "£99/month",
    features: [
      "Teacher dashboard & curriculum access",
      "Year 3–6 lesson library",
      "Downloadable resources & presentations",
      "Money Town™ workshop booking",
      "Simple admin panel for Becky",
      "School subscription management",
    ],
    color: "blue",
  },
  {
    id: 2,
    slug: "connect",
    name: "Cash Academy Connect",
    tagline: "School engagement & insights",
    status: "preview",
    features: [
      "School engagement reporting",
      "Usage analytics & insights",
      "Teacher activity dashboards",
      "Growth infrastructure",
      "Automated renewal reminders",
    ],
    color: "yellow",
  },
  {
    id: 3,
    slug: "complete",
    name: "Cash Academy Complete",
    tagline: "Assessment & MAT management",
    status: "preview",
    features: [
      "Assessment tools & curriculum mapping",
      "MAT-wide management dashboards",
      "School reporting & compliance",
      "Custom curriculum pathways",
      "Advanced content management",
    ],
    color: "blue",
  },
  {
    id: 4,
    slug: "home",
    name: "Cash Academy Home",
    tagline: "Parents & home learning",
    status: "preview",
    features: [
      "Parent portal access",
      "Homework activities",
      "Family engagement tools",
      "Home learning resources",
      "Parent-teacher communication",
    ],
    color: "yellow",
  },
  {
    id: 5,
    slug: "future",
    name: "Cash Academy Future",
    tagline: "Gamification & national platform",
    status: "preview",
    features: [
      "Student gamification & challenges",
      "Interactive learning experiences",
      "National platform vision",
      "AI-powered personalisation",
      "Community & peer learning",
    ],
    color: "blue",
  },
];

export const ADMIN_SCHOOLS = [
  { name: "Oakwood Primary", pupils: 420, plan: "Curriculum + Workshops", status: "Active", since: "Sep 2025" },
  { name: "St Mary's CofE", pupils: 310, plan: "Curriculum", status: "Active", since: "Jan 2026" },
  { name: "Riverside Academy", pupils: 580, plan: "Curriculum + Workshops", status: "Active", since: "Nov 2025" },
  { name: "Greenfield Primary", pupils: 245, plan: "Trial", status: "Trial", since: "May 2026" },
];

export const MONEY_TOWN_TOPICS = [
  "Earning wages through role play jobs",
  "Paying tax and understanding deductions",
  "Budgeting for rent, bills and essentials",
  "Saving vs spending decisions",
  "Shopping for best value",
  "Banking and managing accounts",
  "Unexpected bills and problem solving",
  "Investing and future planning",
];

export function getLesson(yearId, lessonId) {
  return LESSONS[yearId]?.find((l) => l.id === lessonId) ?? null;
}

export function getYear(yearId) {
  return YEARS.find((y) => y.id === yearId) ?? null;
}

export function getStage(idOrSlug) {
  return (
    STAGES.find((s) => s.slug === idOrSlug || String(s.id) === String(idOrSlug)) ?? null
  );
}
