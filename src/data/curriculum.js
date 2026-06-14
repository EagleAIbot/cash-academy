/** Curriculum data from Becky — Year 3 Unit 1 L1 + Year 5 unit overview & L1 */

const base = import.meta.env.BASE_URL;

export const IMPACT_STATS = [
  { value: "187,000+", label: "Pupils Reached" },
  { value: "763", label: "Schools Supported" },
  { value: "100%", label: "Curriculum Aligned" },
  { value: "4", label: "Year Groups" },
];

export const BRAND_VALUES = [
  { title: "Financial Confidence", desc: "Children learning skills for life — not just for tests.", icon: "coins" },
  { title: "Real World Learning", desc: "Practical life skills through role play, not theory.", icon: "wallet" },
  { title: "Opportunity", desc: "Helping children understand money and their future.", icon: "growth" },
  { title: "Accessibility", desc: "Simple enough for every teacher. Simple enough for every school.", icon: "school" },
];

export const YEARS = [
  { id: "y3", label: "Year 3", age: "7–8", lessons: 12, ready: true },
  { id: "y4", label: "Year 4", age: "8–9", lessons: 12, ready: false },
  { id: "y5", label: "Year 5", age: "9–10", lessons: 6, ready: true },
  { id: "y6", label: "Year 6", age: "10–11", lessons: 12, ready: false },
];

/** Grouped units for curriculum browser */
export const UNITS = {
  y3: [
    {
      id: "y3-u1",
      title: "Unit 1: Earning & Money",
      lessons: ["y3-l1"],
    },
  ],
  y5: [
    {
      id: "y5-u1",
      title: "Unit 1: Earning, Wages & Tax",
      lessons: ["y5-u1-l1", "y5-u1-l2", "y5-u1-l3"],
    },
    {
      id: "y5-u2",
      title: "Unit 2: Spending, Value & Emotions",
      lessons: ["y5-u2-l1", "y5-u2-l2", "y5-u2-l3"],
    },
  ],
};

const Y3_JOB_CARDS = [
  {
    role: "Waiter / Waitress",
    tasks: ["Take food and drink orders", "Serve tables in a busy restaurant", "Work evenings and weekends"],
  },
  {
    role: "Dog Walker",
    tasks: ["Walk dogs safely every day", "Keep dogs happy and healthy outdoors", "Work early mornings and afternoons"],
  },
  {
    role: "Barista",
    tasks: ["Make hot drinks and serve customers", "Keep the café clean and tidy", "Work early mornings and weekends"],
  },
  {
    role: "Delivery Driver",
    tasks: ["Pick up and deliver parcels to people's homes", "Drive a van and follow a schedule", "Work different shifts including early mornings"],
  },
  {
    role: "Electrician",
    tasks: ["Fix electrics in homes and buildings", "Solve problems and keep homes running safely", "Special training is needed for this job"],
  },
  {
    role: "Lifeguard",
    tasks: ["Watch over swimmers at a pool or beach", "Keep everyone safe in the water", "Respond quickly in an emergency"],
  },
];

export const LESSONS = {
  y3: [
    {
      id: "y3-l1",
      unit: "Unit 1: Earning & Money",
      number: 1,
      title: "What is Money?",
      duration: "45 mins",
      rolePlay: "The classroom becomes a Job Centre — children explore how people earn money through work.",
      objective:
        "I can explain what money is and describe how people earn it through work.",
      vocabulary: ["money", "earn", "wage", "job", "coins", "notes"],
      overview:
        "Children recap what they know about money, including digital money, and explore where money comes from. The lesson addresses the misconception that money is simply given to adults, and introduces earning through work via an immersive Job Centre role play.",
      teachingInput: [
        "Show the What is Money slide. Recap what they already know about money and introduce the idea of digital money.",
        "Ask: \"Where does money come from?\" Children talk in pairs for one minute, then share ideas as a class.",
        "Address the common belief that money is simply given to adults — explain that most adults earn money by doing a job.",
        "Introduce the role play: today the classroom is a Job Centre. Walk through one Job Centre card together, modelling how the Job Centre Worker reads job roles to Job Seekers.",
      ],
      mainTask:
        "Split the class into groups of four. One child is the Job Centre Worker — they read each job card aloud. The other three are Job Seekers who discuss using sentence stems on the board, decide which job they would most like, and explain why. The Job Centre Worker notes which job was most popular.",
      plenary: [
        "Stand up / sit down — read statements; children stand if true, stay seated if false.",
        "Ask: \"Has anyone here already earned money by doing a job?\" Reinforce that earning through work starts at any age.",
      ],
      misconceptions: [
        "Money is free to get.",
        "You only earn money if you have a special job.",
        "Only grown-ups can earn money.",
      ],
      jobCards: Y3_JOB_CARDS,
      resources: [
        { name: "Lesson Plan (PDF)", type: "pdf", href: `${base}curriculum/y3/unit-1-lesson-1-lesson-plan.pdf` },
        { name: "Job Centre Role Cards (PDF)", type: "pdf", href: `${base}curriculum/y3/unit-1-lesson-1-resources.pdf` },
        { name: "What is Money — Presentation Slide", type: "pptx", size: "2.4 MB" },
      ],
      downloads: ["Job Centre Role Cards — 6 job roles", "Sentence stems display board"],
      teacherNotes:
        "Children who need more support can be paired with a stronger reader to share the Job Centre Worker role. Children who finish early can think of a job not on the cards and describe what that person does to earn money.",
      tags: ["Role Play", "Job Centre", "Earning"],
      prevId: null,
      nextId: "y3-l2",
    },
    {
      id: "y3-l2",
      number: 2,
      title: "Needs vs Wants",
      duration: "45 mins",
      placeholder: true,
      objective: "Content coming soon — full Year 3 curriculum in development.",
      vocabulary: [],
      overview: "This lesson builds on Unit 1 and will be available at launch.",
      resources: [],
      downloads: [],
      teacherNotes: "",
      tags: ["Coming Soon"],
      prevId: "y3-l1",
      nextId: "y3-l3",
    },
    {
      id: "y3-l3",
      number: 3,
      title: "Saving for Something Special",
      duration: "45 mins",
      placeholder: true,
      objective: "Content coming soon — full Year 3 curriculum in development.",
      vocabulary: [],
      overview: "This lesson builds on Unit 1 and will be available at launch.",
      resources: [],
      downloads: [],
      teacherNotes: "",
      tags: ["Coming Soon"],
      prevId: "y3-l2",
      nextId: null,
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
      prevId: null,
      nextId: null,
    })),
  ],
  y4: placeholderLessons("y4", "Year 4"),
  y5: [
    {
      id: "y5-u1-l1",
      unit: "Unit 1: Earning, Wages & Tax",
      number: 1,
      title: "From Job to Wage",
      duration: "45 mins",
      role: "New employee starting work",
      objective: "I can explain different ways people are paid for a job.",
      teacherObjective:
        "To develop pupils' understanding that different jobs have different pay levels linked to skills, responsibilities and qualifications, and to introduce the concept of annual salary.",
      vocabulary: [
        { term: "Job", def: "Work someone does to earn money" },
        { term: "Wage or salary", def: "Money paid for doing a job" },
        { term: "Annual salary", def: "How much someone earns in a year" },
        { term: "Qualifications", def: "Courses, exams or training needed for a job" },
        { term: "Skills", def: "Things you are good at that help you do a job" },
        { term: "Employee", def: "A person who has agreed to be employed to work for some form of payment" },
        { term: "Career", def: "A journey of jobs over a lifetime" },
        { term: "Aspiration", def: "A hope or ambition of achieving something" },
      ],
      overview:
        "Pupils step into adult life as a new employee. They explore salary vs hourly pay, how annual salaries break down into monthly payments, and UK minimum wage rates. The lesson links pay to skills, qualifications and responsibilities.",
      teachingInput: [
        "Welcome to Adult Life — pupils take on the role of a new employee starting work.",
        "Explore how people are paid: salary (yearly amount, e.g. £25,000 per year) vs hourly pay (e.g. £15 per hour).",
        "Discuss: \"I think _____ is paid by _____ because _____.\"",
        "Show how £24,000 per year = £2,000 per month across 12 months.",
        "Introduce minimum wage rates (effective April 2026): NLW 21+ £12.71/hr, 18–20 £10.85/hr, 16–17 £8.00/hr, Apprentices £8.00/hr.",
        "Today's Mission: pupils choose who they will be — age, job, qualifications.",
      ],
      mathsSkills: ["Multiplication", "Place value"],
      psheLinks: ["Careers", "Aspirations"],
      resources: [
        { name: "Lesson Presentation (PDF)", type: "pdf", href: `${base}curriculum/y5/unit-1-lesson-1-presentation.pdf` },
        { name: "Year 5 Unit Overview (PDF)", type: "pdf", href: `${base}curriculum/y5/year-5-unit-overview.pdf` },
        { name: "Minimum Wage Rates Display", type: "pdf", size: "420 KB" },
        { name: "Role Card — New Employee", type: "pdf", size: "680 KB" },
      ],
      downloads: ["Salary vs Hourly Pay comparison sheet", "Monthly pay breakdown worksheet"],
      teacherNotes:
        "Most job adverts show yearly pay but adults are usually paid monthly. Use real examples pupils can relate to from home. Link forward to Lesson 2 (payslips) and Lesson 3 (tax).",
      tags: ["Earning", "Salary", "Minimum Wage"],
      prevId: null,
      nextId: "y5-u1-l2",
    },
    {
      id: "y5-u1-l2",
      unit: "Unit 1: Earning, Wages & Tax",
      number: 2,
      title: "Understanding a Payslip",
      duration: "45 mins",
      role: "Employee receiving first payslip",
      objective: "I can read a payslip and explain why the amount I receive is different from the amount I earn.",
      teacherObjective:
        "To interpret gross pay, deductions and net pay.",
      vocabulary: [
        { term: "Gross pay", def: "Total pay before deductions" },
        { term: "Deductions", def: "Money taken from pay (tax, NI, etc.)" },
        { term: "Net pay", def: "Take-home pay after deductions" },
      ],
      overview:
        "Building on Lesson 1, pupils receive their first payslip and learn to interpret gross pay, deductions and net pay — understanding why the amount received differs from what they earn.",
      mathsSkills: ["Addition", "Subtraction", "Reasoning"],
      psheLinks: ["Rights and responsibilities"],
      resources: [
        { name: "Year 5 Unit Overview (PDF)", type: "pdf", href: `${base}curriculum/y5/year-5-unit-overview.pdf` },
        { name: "Sample Payslip Template", type: "pdf", size: "540 KB" },
      ],
      downloads: ["Payslip reading activity", "Gross vs Net pay worksheet"],
      teacherNotes: "Use a sample payslip with realistic but simplified figures. Pair pupils to discuss deductions before whole-class share.",
      tags: ["Payslip", "Deductions"],
      prevId: "y5-u1-l1",
      nextId: "y5-u1-l3",
    },
    {
      id: "y5-u1-l3",
      unit: "Unit 1: Earning, Wages & Tax",
      number: 3,
      title: "Why Tax Exists",
      duration: "45 mins",
      role: "Citizen contributing to society",
      objective: "I can explain what tax is and describe how it helps pay for things everyone uses.",
      teacherObjective:
        "To understand why tax is taken and how it supports public services.",
      vocabulary: [
        { term: "Tax", def: "Money paid to the government from earnings" },
        { term: "Public services", def: "Services funded by tax that everyone can use" },
      ],
      overview:
        "Pupils explore why tax is deducted from pay and how it funds public services like schools, hospitals and roads — connecting personal earnings to community benefit.",
      mathsSkills: ["Percentages", "Addition and subtraction"],
      psheLinks: ["Citizenship", "Fairness"],
      resources: [
        { name: "Year 5 Unit Overview (PDF)", type: "pdf", href: `${base}curriculum/y5/year-5-unit-overview.pdf` },
        { name: "Public Services Cards", type: "pdf", size: "720 KB" },
      ],
      downloads: ["Where does tax go? sorting activity"],
      teacherNotes: "Link back to payslip deductions from Lesson 2. Discuss fairness — why everyone contributes.",
      tags: ["Tax", "Citizenship"],
      prevId: "y5-u1-l2",
      nextId: "y5-u2-l1",
    },
    {
      id: "y5-u2-l1",
      unit: "Unit 2: Spending, Value & Emotions",
      number: 4,
      title: "Needs, Wants and Adult Choices",
      duration: "45 mins",
      role: "Independent adult managing essential costs",
      objective: "I can decide which expenses are needs and which are wants and explain my choices.",
      teacherObjective: "To apply wants and needs to real-life situations.",
      vocabulary: [
        { term: "Need", def: "Something essential for living" },
        { term: "Want", def: "Something nice to have but not essential" },
        { term: "Expense", def: "Money spent on something" },
      ],
      overview:
        "Pupils apply needs vs wants to real adult expenses — rent, food, subscriptions, treats — and justify their spending choices.",
      mathsSkills: ["Addition", "Comparison"],
      psheLinks: ["Decision-making"],
      resources: [
        { name: "Year 5 Unit Overview (PDF)", type: "pdf", href: `${base}curriculum/y5/year-5-unit-overview.pdf` },
        { name: "Needs vs Wants Expense Cards", type: "pdf", size: "890 KB" },
      ],
      downloads: ["Monthly budget scenario worksheet"],
      teacherNotes: "Use realistic adult scenarios. Encourage pupils to explain reasoning, not just sort.",
      tags: ["Needs & Wants", "Budgeting"],
      prevId: "y5-u1-l3",
      nextId: "y5-u2-l2",
    },
    {
      id: "y5-u2-l2",
      unit: "Unit 2: Spending, Value & Emotions",
      number: 5,
      title: "Value for Money",
      duration: "45 mins",
      role: "Consumer choosing between deals",
      objective: "I can compare different options and explain which gives the best value for money.",
      teacherObjective: "To evaluate value rather than price alone.",
      vocabulary: [
        { term: "Value for money", def: "Getting the best quality or quantity for what you pay" },
        { term: "Compare", def: "Look at two or more options side by side" },
      ],
      overview:
        "Pupils compare products and deals, learning to evaluate value rather than choosing the cheapest option alone.",
      mathsSkills: ["Division", "Fractions", "Comparison"],
      psheLinks: ["Consumer awareness"],
      resources: [
        { name: "Year 5 Unit Overview (PDF)", type: "pdf", href: `${base}curriculum/y5/year-5-unit-overview.pdf` },
        { name: "Supermarket Deal Cards", type: "pdf", size: "640 KB" },
      ],
      downloads: ["Best value comparison worksheet"],
      teacherNotes: "Use supermarket-style deals — multipacks, BOGOF, different sizes. Focus on reasoning.",
      tags: ["Value", "Consumer"],
      prevId: "y5-u2-l1",
      nextId: "y5-u2-l3",
    },
    {
      id: "y5-u2-l3",
      unit: "Unit 2: Spending, Value & Emotions",
      number: 6,
      title: "Emotions and Money",
      duration: "45 mins",
      role: "Adult experiencing pressure",
      objective: "I can explain how feelings might affect the way people spend or save money.",
      teacherObjective: "To recognise how emotions influence financial decisions.",
      vocabulary: [
        { term: "Emotion", def: "A feeling such as happiness, worry or excitement" },
        { term: "Impulse", def: "Buying something quickly without thinking it through" },
      ],
      overview:
        "Pupils explore how emotions — excitement, stress, peer pressure — can influence spending and saving decisions in real life.",
      mathsSkills: [],
      psheLinks: ["Emotional wellbeing"],
      resources: [
        { name: "Year 5 Unit Overview (PDF)", type: "pdf", href: `${base}curriculum/y5/year-5-unit-overview.pdf` },
        { name: "Emotion & Spending Scenario Cards", type: "pdf", size: "580 KB" },
      ],
      downloads: ["Feelings and money reflection sheet"],
      teacherNotes: "No maths focus in this lesson — intentional PSHE emphasis. Create a safe space for discussion.",
      tags: ["Emotions", "Wellbeing"],
      prevId: "y5-u2-l2",
      nextId: null,
    },
  ],
  y6: placeholderLessons("y6", "Year 6"),
};

function placeholderLessons(prefix, yearLabel) {
  return Array.from({ length: 12 }, (_, i) => ({
    id: `${prefix}-l${i + 1}`,
    number: i + 1,
    title: `${yearLabel} — Lesson ${i + 1}`,
    duration: "45 mins",
    placeholder: true,
    objective: "Full curriculum content coming in a future release.",
    vocabulary: [],
    overview: `${yearLabel} curriculum is in development. Placeholder for demo purposes.`,
    resources: [],
    downloads: [],
    teacherNotes: "",
    tags: ["Coming Soon"],
    prevId: null,
    nextId: null,
  }));
}

export const RECENT_LESSONS = [
  { id: "y5-u1-l1", title: "From Job to Wage", year: "Year 5", added: "Just added" },
  { id: "y3-l1", title: "What is Money?", year: "Year 3", added: "1 week ago" },
  { id: "y5-u1-l2", title: "Understanding a Payslip", year: "Year 5", added: "Just added" },
];

export const FUTURE_FEATURES = [
  { id: "parent-portal", title: "Parent Portal", desc: "Families stay connected with home learning activities and progress updates.", stage: 4, icon: "users" },
  { id: "student-challenges", title: "Student Challenges", desc: "Gamified money challenges that children complete at home or in class.", stage: 5, icon: "trophy" },
  { id: "homework", title: "Homework Activities", desc: "Take-home tasks that extend classroom learning into family conversations.", stage: 4, icon: "book" },
  { id: "progress", title: "Progress Tracking", desc: "See which lessons each class has completed and where pupils need support.", stage: 2, icon: "chart" },
  { id: "mat", title: "MAT Management", desc: "Multi-academy trust dashboards for curriculum rollout across schools.", stage: 3, icon: "building" },
  { id: "assessment", title: "Assessment Tools", desc: "Built-in checks for understanding aligned to curriculum objectives.", stage: 3, icon: "check" },
];

export const STAGES = [
  {
    id: 1, slug: "digital", name: "Cash Academy Digital", tagline: "Launch curriculum subscriptions", status: "live",
    investment: "£1,999", support: "£99/month",
    features: ["Teacher dashboard & curriculum access", "Year 3–6 lesson library", "Downloadable resources & presentations", "Money Town™ workshop booking", "Simple admin panel for Becky", "School subscription management"],
    color: "blue",
  },
  { id: 2, slug: "connect", name: "Cash Academy Connect", tagline: "School engagement & insights", status: "preview", features: ["School engagement reporting", "Usage analytics & insights", "Teacher activity dashboards", "Growth infrastructure", "Automated renewal reminders"], color: "yellow" },
  { id: 3, slug: "complete", name: "Cash Academy Complete", tagline: "Assessment & MAT management", status: "preview", features: ["Assessment tools & curriculum mapping", "MAT-wide management dashboards", "School reporting & compliance", "Custom curriculum pathways", "Advanced content management"], color: "blue" },
  { id: 4, slug: "home", name: "Cash Academy Home", tagline: "Parents & home learning", status: "preview", features: ["Parent portal access", "Homework activities", "Family engagement tools", "Home learning resources", "Parent-teacher communication"], color: "yellow" },
  { id: 5, slug: "future", name: "Cash Academy Future", tagline: "Gamification & national platform", status: "preview", features: ["Student gamification & challenges", "Interactive learning experiences", "National platform vision", "AI-powered personalisation", "Community & peer learning"], color: "blue" },
];

export const ADMIN_STATS = {
  activeSchools: 763,
  totalPupils: 187135,
  monthlyRevenue: 75537,
  lessonsPublished: 7,
  trialSchools: 12,
  newThisMonth: 28,
};

export const ADMIN_SCHOOLS = [
  { name: "Oakwood Primary", pupils: 420, plan: "Curriculum + Workshops", status: "Active", since: "Sep 2025" },
  { name: "St Mary's CofE", pupils: 310, plan: "Curriculum", status: "Active", since: "Jan 2026" },
  { name: "Riverside Academy", pupils: 580, plan: "Curriculum + Workshops", status: "Active", since: "Nov 2025" },
  { name: "Hartley Primary", pupils: 268, plan: "Curriculum", status: "Active", since: "Apr 2026" },
  { name: "Brookside Junior", pupils: 312, plan: "Curriculum + Workshops", status: "Active", since: "Mar 2026" },
  { name: "Meadow Lane School", pupils: 195, plan: "Curriculum", status: "Active", since: "Feb 2026" },
  { name: "Westfield Academy", pupils: 445, plan: "Curriculum + Workshops", status: "Active", since: "Oct 2025" },
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
  return STAGES.find((s) => s.slug === idOrSlug || String(s.id) === String(idOrSlug)) ?? null;
}

export function getUnits(yearId) {
  return UNITS[yearId] ?? null;
}
