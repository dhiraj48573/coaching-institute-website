/**
 * ============================================================================
 * CENTRAL CONFIGURATION FILE: COACHING INSTITUTE WEBSITE TEMPLATE
 * ============================================================================
 * 
 * Instructions for Web Agency / Developer:
 * To customize this entire website for a new coaching institute or tuition centre,
 * simply update the values in this single configuration file.
 * 
 * Estimated Customization Time: 30 - 60 minutes.
 * 
 * Key Sections:
 * 1. Institute Identity (Name, Tagline, Logo, Accreditation)
 * 2. Theme Selection (Theme A, B, or C)
 * 3. Contact & Location Information (Phone, WhatsApp, Maps, Hours)
 * 4. Statistics & Trust Indicators
 * 5. Brochure Settings
 * 6. Course Categories & Master Course Catalog
 * 7. Faculty Members & Leadership
 * 8. Results, Toppers & Student Gallery
 * 9. Testimonials & FAQs
 * 10. SEO & Social Metadata
 * ============================================================================
 */

export const instituteConfig = {
  // --------------------------------------------------------------------------
  // 1. INSTITUTE IDENTITY
  // --------------------------------------------------------------------------
  identity: {
    name: "CAREER PATH ACADEMY",
    shortName: "CPA",
    tagline: "YOUR SUCCESS, OUR COMMITMENT.",
    subTagline: "Premier Coaching for JEE, NEET, Foundation & Board Excellence",
    establishedYear: "2012",
    registrationNo: "REG/EDU/UK/2012/8492", // Optional registration number
    // Set logoImage to a path like "/images/logo.png" or leave null to use the modern SVG badge
    logoImage: null, 
    // Logo Icon badge text when image is not provided
    logoBadge: "CPA",
  },

  // --------------------------------------------------------------------------
  // 2. THEME & VISUAL BRANDING
  // --------------------------------------------------------------------------
  // Options:
  // - "theme-a": Navy Blue + White + Vibrant Orange (Default - Classic Professional)
  // - "theme-b": Royal Blue + White + Rich Gold (Premium Academic)
  // - "theme-c": Imperial Purple + White + Cyan Blue (Modern Tech/Modern Institute)
  activeTheme: "theme-a",

  // Set to true to display the floating theme switcher pill for client demonstration.
  // Set to false before final client delivery!
  showDemoThemeSwitcher: true,

  // --------------------------------------------------------------------------
  // 3. CONTACT & LOCATION
  // --------------------------------------------------------------------------
  contact: {
    phone: "+91 98765 43210",
    altPhone: "+91 1334 223344",
    // Raw phone number for WhatsApp links (Country code + 10 digits without spaces or '+')
    whatsappNumber: "919876543210",
    displayWhatsapp: "+91 98765 43210",
    email: "admissions@careerpathacademy.edu",
    supportEmail: "info@careerpathacademy.edu",
    
    // Physical Address
    address: {
      line1: "Plot No. 42, Knowledge Park, Near Ranipur More",
      line2: "Haridwar Bypass Road",
      city: "Haridwar",
      state: "Uttarakhand",
      pincode: "249407",
      country: "India",
      landmark: "Opposite City Centre Mall",
    },

    // Office & Counseling Timings
    timings: {
      weekdays: "Monday - Saturday: 8:00 AM - 8:00 PM",
      sunday: "Sunday: 9:00 AM - 3:00 PM (By Appointment for Counseling)",
      batchHours: "Morning Batches: 6:30 AM - 12:30 PM | Evening Batches: 3:30 PM - 8:30 PM",
    },

    // Google Maps Iframe Embed URL
    // (Generate via Google Maps -> Share -> Embed a map -> Copy src attribute)
    googleMapsEmbedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d110592.56948512134!2d78.0538356195886!3d29.96951239856149!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3909470eb8ee53c9%3A0xe749224675ec22bc!2sHaridwar%2C%20Uttarakhand!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin",

    // Social Media Links (leave empty "" or remove if not applicable)
    social: {
      facebook: "https://facebook.com",
      instagram: "https://instagram.com",
      youtube: "https://youtube.com",
      telegram: "https://t.me",
      linkedin: "https://linkedin.com",
    },
  },

  // --------------------------------------------------------------------------
  // 4. BROCHURE CONFIGURATION
  // --------------------------------------------------------------------------
  brochure: {
    // Path to PDF in public directory (e.g., "/sample-brochure.pdf")
    // If set to null or "", all brochure download buttons will be cleanly hidden!
    pdfUrl: "/sample-brochure.pdf",
    fileName: "CareerPathAcademy_Course_Brochure_2025.pdf",
    buttonText: "Download Brochure",
  },

  // --------------------------------------------------------------------------
  // 5. INSTITUTE KEY METRICS & TRUST INDICATORS
  // --------------------------------------------------------------------------
  // Transparent Notice: All figures are editable template samples.
  stats: [
    {
      id: "students",
      value: "12,500+",
      label: "Students Mentored",
      subtext: "Across school & competitive batches",
    },
    {
      id: "experience",
      value: "14+",
      label: "Years of Excellence",
      subtext: "Continuous teaching dedication since 2012",
    },
    {
      id: "courses",
      value: "18+",
      label: "Specialized Programs",
      subtext: "Covering school foundation to national exams",
    },
    {
      id: "selections",
      value: "1,850+",
      label: "Qualified Selections",
      subtext: "In JEE, NEET, CUET & Top Colleges",
    },
  ],

  // --------------------------------------------------------------------------
  // 6. WHY CHOOSE US (KEY PILLARS & PEDAGOGY)
  // --------------------------------------------------------------------------
  whyChooseUs: {
    headline: "Why Serious Aspirants Choose Career Path Academy",
    description: "We bridge the gap between classroom theory and competitive problem-solving through disciplined mentorship and individualized care.",
    features: [
      {
        icon: "Users",
        title: "Limited Batch Size (30-35)",
        description: "Small batches ensure every student receives personal attention, regular doubt checks, and continuous performance tracking.",
      },
      {
        icon: "Award",
        title: "Top-Tier IITian & Doctor Faculty",
        description: "All core subjects are taught by full-time senior faculty with an average of 10+ years of proven teaching expertise.",
      },
      {
        icon: "FileCheck",
        title: "Scientifically Crafted Study Material",
        description: "Comprehensive theory modules, 5,000+ chapter-wise question banks, and graded difficulty practice worksheets.",
      },
      {
        icon: "Clock",
        title: "Daily Dedicated Doubt Counters",
        description: "No pending doubts. 2-hour daily open doubt rooms where students clear concepts 1-on-1 with senior subject educators.",
      },
      {
        icon: "BarChart3",
        title: "Bi-Weekly Computer-Based Tests (CBT)",
        description: "Exact NTA exam pattern simulations with detailed AI-powered analytics highlighting accuracy, speed, and negative marks.",
      },
      {
        icon: "ShieldCheck",
        title: "Parent-Teacher Periodic Reviews",
        description: "Transparent bi-weekly attendance and test performance reports shared directly with parents via SMS & parent portals.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // 7. TEACHING METHODOLOGY (5-STEP PEDAGOGY)
  // --------------------------------------------------------------------------
  methodology: [
    {
      step: "01",
      title: "Fundamental Concept Mastery",
      description: "Visual and interactive blackboard instruction building core logic from NCERT basics to advanced difficulty levels.",
    },
    {
      step: "02",
      title: "Daily Practice Problem (DPP)",
      description: "Curated 20-30 daily questions per subject immediately after lectures to cement analytical problem-solving speed.",
    },
    {
      step: "03",
      title: "1-on-1 Doubt Clarification",
      description: "Walk-in doubt sessions after class hours ensuring no misconception is carried into subsequent topics.",
    },
    {
      step: "04",
      title: "All-India / Institute Mock Tests",
      description: "Time-bound exams replicating high-pressure competitive conditions with deep question-level error analysis.",
    },
    {
      step: "05",
      title: "Revision & Speed Drills",
      description: "Formula marathons, PYQ (Previous 15-Year Question) bootcamps, and targeted score-booster crash modules.",
    },
  ],

  // --------------------------------------------------------------------------
  // 8. CAMPUS & INFRASTRUCTURE HIGHLIGHTS
  // --------------------------------------------------------------------------
  infrastructure: [
    {
      title: "Digital Smart Classrooms",
      description: "Air-conditioned soundproof lecture halls equipped with ultra-bright interactive 4K panels and hybrid recording setups.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Self-Study Library & Reading Room",
      description: "Quiet, comfortable reading room with 1,500+ reference textbooks, journals, and dedicated individual cubicles.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Computer Based Test (CBT) Lab",
      description: "60+ high-speed networked testing terminals replicating real JEE Main, NEET, and CUET computer exam interfaces.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    },
    {
      title: "Doubt Solving Hubs",
      description: "Dedicated discussion zones where mentors sit with small student circles to review mistakes and complex derivations.",
      image: "https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // --------------------------------------------------------------------------
  // 9. COURSE CATEGORIES (ENABLED/DISABLED TOGGLE)
  // --------------------------------------------------------------------------
  // Set enabled: false for any category the client does not offer.
  // The website will dynamically hide it from filters and course views!
  courseCategories: [
    { id: "all", name: "All Programs", enabled: true },
    { id: "jee", name: "JEE (Main & Adv)", enabled: true },
    { id: "neet", name: "NEET Medical", enabled: true },
    { id: "foundation", name: "Class 9 & 10 Foundation", enabled: true },
    { id: "boards", name: "Class 11 & 12 Boards", enabled: true },
    { id: "cuet", name: "CUET (UG)", enabled: true },
    { id: "gov-exams", name: "SSC / Banking / NDA", enabled: true },
    { id: "skills", name: "Computer & Spoken English", enabled: true },
    { id: "upsc", name: "UPSC / State PCS", enabled: false }, // disabled example
  ],

  // --------------------------------------------------------------------------
  // 10. MASTER COURSE CATALOG
  // --------------------------------------------------------------------------
  courses: [
    {
      id: "jee-target-2026",
      name: "JEE (Main + Advanced) 2-Year Target Course",
      category: "jee",
      badge: "Flagship Program",
      targetExam: "IIT-JEE 2026 / 2027",
      shortDescription: "Rigorous 2-year classroom program for Class 10 to 11 moving students targeting top IITs and NITs.",
      fullDescription: "Our flagship classroom course systematically builds profound conceptual clarity in Physics, Chemistry, and Mathematics. Includes in-depth problem-solving sessions, exhaustive study modules, weekly CBT mock tests, and personalized mentoring.",
      subjects: ["Physics", "Chemistry", "Mathematics"],
      duration: "2 Years (Class 11 & 12)",
      batchTiming: "Morning (8:00 AM - 1:30 PM) / Evening (3:30 PM - 8:30 PM)",
      fees: "₹85,000 / Year",
      feeNote: "Easy installment & scholarship options available (up to 90% via CPAT test)",
      eligibility: "Class 10 Passed / Appeared (Min. 70% in Science & Maths)",
      isPopular: true,
      isOpenForAdmission: true,
      features: [
        "750+ hours of comprehensive live classroom teaching",
        "Printed study modules with 8,000+ solved & practice questions",
        "Fortnightly CBT mock tests on exact NTA testing pattern",
        "Personalized doubt resolution counters with senior faculty",
        "Comprehensive coverage of CBSE Board syllabus alongside JEE",
      ],
      syllabusHighlights: [
        "Kinematics, Mechanics, Waves & Optics",
        "Inorganic, Organic & Physical Chemistry",
        "Calculus, Algebra, Coordinate Geometry & Vectors",
      ],
    },
    {
      id: "neet-achiever-2025",
      name: "NEET-UG Medical Achievers (1-Year Repeater/Dropper)",
      category: "neet",
      badge: "High Selection Rate",
      targetExam: "NEET-UG 2025 / 2026",
      shortDescription: "High-intensity 1-year droppers course designed to convert marginal scores into top government medical seats.",
      fullDescription: "Specifically engineered for Class 12 passed aspirants aiming for AIIMS, JIPMER, and top State Government Medical Colleges. Covers complete NCERT line-by-line along with high-yield diagram drills, physics numerical shortcuts, and chemistry speed tricks.",
      subjects: ["Physics", "Chemistry", "Botany", "Zoology"],
      duration: "1 Year (Repeater Batch)",
      batchTiming: "Morning Batch: 8:30 AM - 2:00 PM (Monday to Saturday)",
      fees: "₹75,000 / Year",
      feeNote: "Merit-based fee concession available for past NEET scores 500+",
      eligibility: "Class 12 Passed with Physics, Chemistry, Biology (PCB)",
      isPopular: true,
      isOpenForAdmission: true,
      features: [
        "Line-by-line NCERT decoding for Biology & Inorganic Chemistry",
        "Daily 45-minute timed speed test for Physics numericals",
        "30+ Full Syllabus Mock Exams matching NEET difficulty",
        "Detailed performance analytics and negative-marking audit",
        "Individual mentor assigned to monitor mental stamina & consistency",
      ],
      syllabusHighlights: [
        "Cell Biology, Genetics, Human Physiology, Plant Physiology",
        "Equilibrium, Electrochemistry, Coordination Chemistry, Organic Mechanisms",
        "Electrodynamics, Modern Physics, Mechanics & Thermodynamics",
      ],
    },
    {
      id: "foundation-olympiad-class10",
      name: "Class 10 Board + NTSE & Olympiad Foundation",
      category: "foundation",
      badge: "School + Competitive",
      targetExam: "Class 10 CBSE/ICSE + Olympiads",
      shortDescription: "Pre-engineering and pre-medical foundation program delivering strong analytical roots alongside 95%+ Board guarantee.",
      fullDescription: "Prepares young minds for Class 10 Board examinations while laying unbreakable groundwork for future JEE/NEET preparation. Develops critical thinking, logical reasoning, and competitive temperament early.",
      subjects: ["Mathematics", "Science (Physics, Chem, Bio)", "Social Science", "Mental Ability"],
      duration: "1 Academic Year",
      batchTiming: "Evening Batch: 4:00 PM - 7:30 PM (4 days/week)",
      fees: "₹42,000 / Year",
      feeNote: "Includes all study material, test series & board prep kits",
      eligibility: "Students entering Class 10 (CBSE / ICSE / State Board)",
      isPopular: true,
      isOpenForAdmission: true,
      features: [
        "Special focus on NCERT exemplar and higher-order thinking skills (HOTS)",
        "NTSE Stage 1 & 2 preparation with Mental Ability Test (MAT) lectures",
        "Science Olympiad (NSO) & Math Olympiad (IMO) workshop modules",
        "Class 10 Pre-Board simulations with hand-evaluated answer checking",
        "Stress-free pacing with fun interactive scientific experiments",
      ],
      syllabusHighlights: [
        "Class 10 Science (Chemical Reactions, Life Processes, Electricity)",
        "Class 10 Mathematics (Polynomials, Triangles, Trigonometry, Statistics)",
        "Logical Reasoning, Analytical Puzzles, Verbal & Non-Verbal Ability",
      ],
    },
    {
      id: "class-11-12-pcm-pcb",
      name: "Class 11 & 12 Board Master Program (PCM / PCB)",
      category: "boards",
      badge: "Board Specialist",
      targetExam: "CBSE / State Board Class 12",
      shortDescription: "Focused coaching prioritizing 95%+ score in Board Examinations with conceptual preparation for CUET.",
      fullDescription: "A specialized course designed for students seeking strong board examination performance, deep understanding of theory, descriptive answer writing mastery, and practical lab exam readiness.",
      subjects: ["Physics", "Chemistry", "Mathematics / Biology", "English Core"],
      duration: "1 or 2 Years",
      batchTiming: "Evening: 4:30 PM - 8:00 PM",
      fees: "₹48,000 / Year",
      feeNote: "Installment facility available",
      eligibility: "Class 11 or 12 Students",
      isPopular: false,
      isOpenForAdmission: true,
      features: [
        "Structured chapter-wise subjective answer writing practice",
        "Comprehensive sample paper solving & past 10-year board paper drill",
        "Special sessions for CBSE Practical / Viva preparation",
        "Regular parent updates on assignment completion and attendance",
      ],
      syllabusHighlights: [
        "Full NCERT Syllabus with Derivations & Step-Marking Guidelines",
        "Numerical Problem Solving and Graph Interpretations",
        "Subjective Test Series replicating official Board evaluation criteria",
      ],
    },
    {
      id: "cuet-crash-target",
      name: "CUET (UG) Target - Central Universities Entrance",
      category: "cuet",
      badge: "Trending Program",
      targetExam: "CUET (UG) for DU, BHU, JNU, etc.",
      shortDescription: "Fast-track preparation for Class 12 students targeting top central universities like DU, BHU, AU & JNU.",
      fullDescription: "Dedicated coaching for Section I (Language), Section II (Domain Subjects - Science, Commerce, Humanities), and Section III (General Aptitude Test). Includes simulated computer-based tests matching the exact NTA CUET format.",
      subjects: ["Domain Subjects (PCM/PCB/Commerce)", "General Test", "English Language"],
      duration: "4 Months Intensive / Crash Batch",
      batchTiming: "Morning / Weekend Batches Available",
      fees: "₹24,000 (Full Course)",
      feeNote: "Complete online test series included",
      eligibility: "Class 12 Appearing / Passed",
      isPopular: false,
      isOpenForAdmission: true,
      features: [
        "Targeted MCQ techniques for speedy question solving",
        "General Test coverage: Quantitative, Logical Reasoning, Current Affairs",
        "15 full-length CUET NTA computer-based mock tests",
        "Form filling guidance and university choice counseling",
      ],
      syllabusHighlights: [
        "Class 12 NCERT Domain Topics",
        "Quantitative Aptitude, Logical Reasoning, Data Interpretation",
        "Reading Comprehension, Vocabulary & English Grammar",
      ],
    },
    {
      id: "nda-competitive-course",
      name: "NDA & Defence Written Exam Preparation",
      category: "gov-exams",
      badge: "Defence Wing",
      targetExam: "NDA / NA (UPSC Exam)",
      shortDescription: "Rigorous academic coaching for NDA written examination combined with physical fitness and SSB interview orientation.",
      fullDescription: "Comprehensive training for Mathematics (Paper 1) and General Ability Test (GAT - Paper 2: English, Physics, Chemistry, History, Geography, Current Affairs). Taught by retired defense mentors and experienced academicians.",
      subjects: ["Mathematics (10+2 Level)", "English", "General Science & GK"],
      duration: "6 Months / 1 Year",
      batchTiming: "Early Morning & Afternoon Sessions",
      fees: "₹38,000 (Complete Preparation)",
      feeNote: "Includes SSB personality development workshop",
      eligibility: "Unmarried Male & Female Students (Class 11 / 12 / Passed)",
      isPopular: false,
      isOpenForAdmission: true,
      features: [
        "Maths shortcut techniques to solve 120 questions in 150 minutes",
        "Daily Current Affairs updates and defense-specific GK modules",
        "Weekly physical conditioning and endurance guidance",
        "Basic SSB Interview Orientation and Group Discussion practice",
      ],
      syllabusHighlights: [
        "Higher Mathematics (Algebra, Matrices, Trigonometry, Calculus)",
        "English Grammar & Vocab for UPSC standards",
        "Indian History, Polity, Geography & General Science",
      ],
    },
    {
      id: "spoken-english-personality",
      name: "Spoken English & Personality Development",
      category: "skills",
      badge: "Skill Builder",
      targetExam: "Career & Interview Readiness",
      shortDescription: "Transform your communication, public speaking, and English fluency in 90 days with practical stage practice.",
      fullDescription: "Designed for school students, college learners, and job aspirants who want to overcome hesitation, speak fluent English with correct grammar, and build magnetic confidence for interviews and presentations.",
      subjects: ["Grammar Fundamentals", "Fluency Drills", "Vocabulary", "Public Speaking"],
      duration: "3 Months (Daily 1.5 Hours)",
      batchTiming: "Flexible Morning (7:00 AM) & Evening (6:30 PM)",
      fees: "₹9,500 (Full 3 Months)",
      feeNote: "Includes audio-video speaking sessions & certificate",
      eligibility: "Open to all age groups (Class 8 to Working Professionals)",
      isPopular: false,
      isOpenForAdmission: true,
      features: [
        "100% activity-based learning: Debates, JAM sessions, Role-plays",
        "Correction of mother tongue influence (MTI) and accent neutralization",
        "Interview prep, Resume building, and Professional email etiquette",
        "Small batches of 15 students for maximum microphone time",
      ],
      syllabusHighlights: [
        "Tenses, Prepositions & Common Spoken Errors",
        "Active Listening & Instant Thought Articulation",
        "Body Language, Eye Contact & Stage Confidence Drills",
      ],
    },
  ],

  // --------------------------------------------------------------------------
  // 11. FACULTY PROFILES (EXPERT TEACHING TEAM)
  // --------------------------------------------------------------------------
  faculty: [
    {
      id: "faculty-1",
      name: "Er. Rajesh Verma",
      role: "Head of Physics & Senior Mentor",
      qualification: "B.Tech, IIT Roorkee",
      experience: "15+ Years Teaching Experience",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=600&q=80",
      bio: "Former Senior Faculty at Premier Institutes in Kota. Has personally trained over 250+ students who qualified for IITs with Physics percentiles above 99.5.",
      specialization: "Mechanics, Electrodynamics & Modern Physics",
    },
    {
      id: "faculty-2",
      name: "Dr. Ananya Sharma",
      role: "Head of Medical Sciences (Biology)",
      qualification: "MBBS, AIIMS New Delhi (Gold Medalist)",
      experience: "12+ Years Teaching Experience",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=600&q=80",
      bio: "Passionate educator who translates complex medical histology, genetics, and human physiology into intuitive visual diagrams and memory mnemonics.",
      specialization: "Genetics, Human Physiology & Molecular Biology",
    },
    {
      id: "faculty-3",
      name: "Prof. Sudhir K. Tiwari",
      role: "Head of Chemistry",
      qualification: "M.Sc. Chemistry, Ph.D., Delhi University",
      experience: "16+ Years Teaching Experience",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=600&q=80",
      bio: "Renowned Chemistry author whose problem-solving heuristics turn tricky Organic mechanisms and Physical equilibria into high-scoring strongholds.",
      specialization: "Reaction Mechanisms, Thermodynamics & Coordination Compounds",
    },
    {
      id: "faculty-4",
      name: "Er. Amitosh Mishra",
      role: "Head of Mathematics",
      qualification: "M.Tech, IIT Kharagpur",
      experience: "11+ Years Teaching Experience",
      image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=600&q=80",
      bio: "Master of visual calculus and coordinate geometry. Believes in teaching students how to think mathematically rather than blindly memorizing formulas.",
      specialization: "Differential Calculus, Coordinate Geometry & Vectors",
    },
  ],

  // --------------------------------------------------------------------------
  // 12. RESULTS, TOPPERS & ACHIEVEMENTS
  // --------------------------------------------------------------------------
  // Prominent Ethical Notice: Sample demo placeholders.
  resultsDisclaimer: "Important Notice: The student names, ranks, scores and photographs shown below are sample demo placeholders used for template demonstration. When onboarded, these will be replaced with verified institutional results from your institute.",

  examHighlights: [
    {
      exam: "JEE Advanced 2024",
      badge: "Engineering Feat",
      headline: "42+ Selections in IITs",
      subline: "Top rank: AIR 214 (Sample Placeholder)",
    },
    {
      exam: "NEET-UG 2024",
      badge: "Medical Excellence",
      headline: "85+ Students Scored 600+",
      subline: "Highest score: 705/720 (Sample Placeholder)",
    },
    {
      exam: "CBSE Class 12 Boards",
      badge: "Academic Dominance",
      headline: "96.4% Highest Board Aggregate",
      subline: "38 students secured 95%+ aggregate marks",
    },
    {
      exam: "Foundation & NTSE",
      badge: "Early Achievers",
      headline: "14 NTSE Scholars",
      subline: "State Rank 3 in Uttarakhand Olympiad",
    },
  ],

  // Sample Toppers (Clearly marked as demo in UI)
  toppers: [
    {
      name: "Aditya Rawat",
      exam: "JEE Advanced 2024",
      scoreOrRank: "AIR 214",
      course: "2-Year Classroom Program",
      collegeAllotted: "IIT Bombay - Computer Science",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?auto=format&fit=crop&w=500&q=80",
      quote: "The regular test series and constant mentoring by Verma Sir helped me manage exam pressure effortlessly.",
    },
    {
      name: "Pooja Nautiyal",
      exam: "NEET-UG 2024",
      scoreOrRank: "705 / 720 (AIR 142)",
      course: "Medical Achiever 1-Year Dropper",
      collegeAllotted: "AIIMS New Delhi",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?auto=format&fit=crop&w=500&q=80",
      quote: "NCERT line-by-line revision sessions and Dr. Ananya Mam's biology notes were the game changer for me.",
    },
    {
      name: "Rohan Semwal",
      exam: "JEE Main 2024",
      scoreOrRank: "99.82 Percentile",
      course: "2-Year Classroom Program",
      collegeAllotted: "NIT Trichy - Electronics",
      image: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&fit=crop&w=500&q=80",
      quote: "Small batch size meant I could ask silly doubts without fear. Best coaching atmosphere in Haridwar.",
    },
    {
      name: "Shruti Joshi",
      exam: "CBSE Class 12 Boards",
      scoreOrRank: "98.6% (State Topper)",
      course: "Class 11 & 12 Board Master",
      collegeAllotted: "St. Stephen's College, Delhi",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=500&q=80",
      quote: "Subjective mock tests and rigorous evaluation guided my answer presentation to achieve top scores.",
    },
  ],

  // --------------------------------------------------------------------------
  // 13. GALLERY IMAGES (CAMPUS, SEMINARS & CELEBRATIONS)
  // --------------------------------------------------------------------------
  gallery: [
    {
      id: "g1",
      category: "classrooms",
      title: "Interactive Classroom Session",
      caption: "Spacious air-conditioned digital smart room with interactive display boards.",
      image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g2",
      category: "classrooms",
      title: "Focused Problem Solving",
      caption: "Students engaged during a supervised practice workshop.",
      image: "https://images.unsplash.com/photo-1427504494785-3a9ca7044f45?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g3",
      category: "labs",
      title: "Computer Based Test Terminal Lab",
      caption: "Simulating national NTA testing conditions with zero latency.",
      image: "https://images.unsplash.com/photo-1562774053-701939374585?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g4",
      category: "library",
      title: "Silent Reading Hall",
      caption: "Peaceful environment stocked with standard national competitive references.",
      image: "https://images.unsplash.com/photo-1521587760476-6c12a4b040da?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g5",
      category: "events",
      title: "Annual Toppers Felicitation Ceremony",
      caption: "Celebrating the hard work of our qualifiers and proud parents.",
      image: "https://images.unsplash.com/photo-1523580494863-6f3031224c94?auto=format&fit=crop&w=800&q=80",
    },
    {
      id: "g6",
      category: "events",
      title: "Exam Motivation & Stress Management Seminar",
      caption: "Guest lecture by renowned child psychologists on mental stamina.",
      image: "https://images.unsplash.com/photo-1475721027785-f74eccf877e2?auto=format&fit=crop&w=800&q=80",
    },
  ],

  // --------------------------------------------------------------------------
  // 14. STUDENT & PARENT TESTIMONIALS
  // --------------------------------------------------------------------------
  testimonials: [
    {
      id: "t1",
      author: "Dr. Sandeep Rawat",
      role: "Parent of Aditya Rawat (IIT Bombay)",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "As a doctor myself, I wanted a coaching institute that cared about learning rather than commercial hype. Career Path Academy gave my son discipline, personal mentorship, and zero unnecessary pressure.",
      isSampleDemo: true,
    },
    {
      id: "t2",
      author: "Meenakshi Joshi",
      role: "Student (NEET Score: 685/720)",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "Physics was always my nightmare in school. The breakdown of concepts and daily DPPs at Career Path Academy completely eliminated my fear. Scored 165/180 in NEET Physics alone!",
      isSampleDemo: true,
    },
    {
      id: "t3",
      author: "Virendra Nautiyal",
      role: "Parent of Class 10 Foundation Student",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
      rating: 5,
      content: "My daughter gained tremendous confidence in mathematics after joining the 10th foundation batch. Her school grades jumped from 75% to 94% within 6 months. Highly recommend their teachers.",
      isSampleDemo: true,
    },
  ],

  // --------------------------------------------------------------------------
  // 15. FREQUENTLY ASKED QUESTIONS (ADMISSION & ACADEMIC)
  // --------------------------------------------------------------------------
  faqs: [
    {
      question: "How do I take admission at Career Path Academy?",
      answer: "You can apply online by filling the Admission Enquiry form, visit our campus in Haridwar for walk-in counseling, or schedule a free 2-day demo class. Admission into competitive batches is through our Admission-Cum-Scholarship Test (CPAT).",
    },
    {
      question: "Is there a Free Demo Class before joining?",
      answer: "Yes! We offer 2 consecutive free demo classes for any ongoing batch so that students and parents can evaluate our teaching quality, faculty interaction, and study material first-hand.",
    },
    {
      question: "What is the fee payment structure? Are installments available?",
      answer: "Yes, we support flexible fee payments in 2 to 3 convenient installments across the academic year. We also provide merit scholarships based on Class 10/12 board marks and past exam performance.",
    },
    {
      question: "What happens if a student misses a lecture?",
      answer: "All lecture notes and digital session summaries are archived. Students can book a 1-on-1 backup session with our doubt faculty to get caught up without falling behind.",
    },
    {
      question: "Are parents updated about student attendance and test marks?",
      answer: "Absolutely. We send automated attendance SMS alerts daily. Bi-weekly test scores, rank charts, and performance reviews are shared with parents through regular PTMs and WhatsApp updates.",
    },
  ],

  // --------------------------------------------------------------------------
  // 16. SEO & LOCAL SEARCH METADATA
  // --------------------------------------------------------------------------
  seo: {
    siteTitle: "Career Path Academy | Premier Coaching for JEE, NEET & Boards in Haridwar",
    defaultDescription: "Join Career Path Academy in Haridwar for expert IIT-JEE, NEET-UG, CBSE 9-12 Foundation & Board exam preparation. Small batches, top IITian faculty, and proven results.",
    keywords: "coaching institute in haridwar, best iit jee coaching, neet medical coaching uttarakhand, cbse tuition classes, foundation courses class 9 10, competitive exam centre",
    canonicalUrl: "https://www.careerpathacademy.edu",
    ogImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1200&q=80",
    twitterHandle: "@careerpath_edu",
  },

  // --------------------------------------------------------------------------
  // 17. PRESET WHATSAPP MESSAGE TEMPLATES
  // --------------------------------------------------------------------------
  whatsappTemplates: {
    general: "Hello, I am interested in admission at CAREER PATH ACADEMY. Please share the available courses, fees, batch timings and admission details.",
    courseEnquiry: (courseName) => `Hello, I want to enquire about the "${courseName}" course at CAREER PATH ACADEMY. Please share syllabus, fees, and next batch start date.`,
    demoClass: (courseName) => `Hello, I would like to book a FREE Demo Class for "${courseName || 'Competitive Exams'}" at CAREER PATH ACADEMY. Please share the timing.`,
    admissionForm: ({ name, parentName, phone, course, batch, isDemo, message }) => 
      `*New Admission / Demo Enquiry*\n` +
      `---------------------------\n` +
      `*Student Name:* ${name}\n` +
      (parentName ? `*Parent Name:* ${parentName}\n` : '') +
      `*Phone Number:* ${phone}\n` +
      `*Target Course:* ${course}\n` +
      `*Preferred Batch:* ${batch}\n` +
      `*Free Demo Requested:* ${isDemo ? 'Yes, please!' : 'No, direct admission enquiry'}\n` +
      (message ? `*Notes/Query:* ${message}\n` : '') +
      `---------------------------\n` +
      `Please contact me with fee structure and enrollment procedure.`,
  },
};

export default instituteConfig;
