import React, { useState, useEffect, useMemo, useRef } from 'react';
import {
  Terminal,
  CheckCircle2,
  ShieldCheck,
  Database,
  Code2,
  Play,
  Search,
  ExternalLink,
  Mail,
  FileText,
  Award,
  GraduationCap,
  ChevronRight,
  Menu,
  X,
  Activity,
  Zap,
  Download,
  RefreshCw,
  ListChecks,
  Sliders,
  Monitor,
  Send
} from 'lucide-react';

// Brand icons removed from lucide-react v1.x — inline SVGs with same className API
const Github = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M12 0C5.37 0 0 5.37 0 12c0 5.31 3.435 9.795 8.205 11.385.6.105.825-.255.825-.57 0-.285-.015-1.23-.015-2.235-3.015.555-3.795-.735-4.035-1.41-.135-.345-.72-1.41-1.23-1.695-.42-.225-1.02-.78-.015-.795.945-.015 1.62.87 1.845 1.23 1.08 1.815 2.805 1.305 3.495.99.105-.78.42-1.305.765-1.605-2.67-.3-5.46-1.335-5.46-5.925 0-1.305.465-2.385 1.23-3.225-.12-.3-.54-1.53.12-3.18 0 0 1.005-.315 3.3 1.23.96-.27 1.98-.405 3-.405s2.04.135 3 .405c2.295-1.56 3.3-1.23 3.3-1.23.66 1.65.24 2.88.12 3.18.765.84 1.23 1.905 1.23 3.225 0 4.605-2.805 5.625-5.475 5.925.435.375.81 1.095.81 2.22 0 1.605-.015 2.895-.015 3.3 0 .315.225.69.825.57A12.02 12.02 0 0024 12c0-6.63-5.37-12-12-12z" />
  </svg>
);

const Linkedin = ({ className = "w-4 h-4" }) => (
  <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
  </svg>
);

const PROFILE = {
  name: "MD. MEHERAB HOSSAIN NOWSHAD",
  title: "Software Quality Assurance Engineer / SDET",
  subtitle: "Computer Science Graduate | Test Automation & Quality Systems",
  tagline: "I test software from UI to API to database, with a focus on reliability, automation and product quality.",
  phone: "+8801953925305",
  email: "meherabhossainnowshad@gmail.com",
  linkedin: "https://www.linkedin.com/in/meherabnowshad/",
  github: "https://github.com/meherabnowshad",
  location: "Dhaka, Bangladesh",
  education: {
    institution: "BRAC University",
    location: "Dhaka, Bangladesh",
    degree: "BSc in CSE",
    thesis: {
      title: "Real-time dynamic facial recognition of subject in motion using angular images",
      description: "Researched and implemented computer vision algorithms to track and identify moving targets across various multi-angle lighting and rotational conditions."
    }
  },
  certification: {
    title: "Full Stack SQA and Software Test Automation",
    academy: "Road to SDET Academy",
    hours: "70+ Hours Intensive Training",
    date: "August 2026",
    certificateUrl: "https://roadtocareer.net/api/images/certificates/MD-Meherab-Hossain-Nowshad-MMHN59943.png?v=1787253646234",
    topics: [
      "Manual Testing Lifecycle",
      "API Test Automation (Postman, Mocha, Axios)",
      "Database Verification (MySQL, Sequelize)",
      "UI Test Automation (Selenium Python)",
      "System Integration & Performance Concepts"
    ]
  },
  stats: [
    { label: "Degree", value: "BSc in CSE" },
    { label: "Career Focus", value: "SQA / SDET" },
    { label: "QA Training", value: "70+ Hours" },
    { label: "Hands-On Projects", value: "6 QA Works" }
  ]
};

const SKILL_CATEGORIES = [
  {
    id: "testing",
    title: "Testing & Quality",
    color: "from-cyan-500 to-blue-600",
    skills: [
      "Manual Testing", "Functional Testing", "Integration Testing", 
      "Regression Testing", "API Testing", "Database Testing", 
      "Performance Testing", "Test Case Design", "Defect Reporting", 
      "JWT Auth Testing", "RBAC Verification"
    ]
  },
  {
    id: "automation",
    title: "Automation Tools",
    color: "from-emerald-500 to-teal-600",
    skills: [
      "Selenium WebDriver", "Postman", "Newman CLI", "Mocha", 
      "Axios", "Python", "JavaScript"
    ]
  },
  {
    id: "database",
    title: "Database Tech",
    color: "from-purple-500 to-indigo-600",
    skills: [
      "MySQL", "SQL Queries", "Sequelize ORM", "Referential Integrity"
    ]
  },
  {
    id: "web",
    title: "Web Technologies",
    color: "from-amber-500 to-orange-600",
    skills: [
      "Next.js", "React", "Express.js", "Node.js", 
      "HTML5", "CSS3", "PHP", "XAMPP"
    ]
  },
  {
    id: "tools",
    title: "Tools & STLC",
    color: "from-rose-500 to-pink-600",
    skills: [
      "Jira", "Git", "GitHub", "JMeter", 
      "SDLC", "STLC", "Agile / Scrum", "Linux"
    ]
  }
];

const PROJECTS = [
  {
    id: "blogspace",
    title: "BlogSpace",
    isFlagship: true,
    tagline: "Full-Stack Blogging Platform with Enterprise-Grade API & Access Control Verification",
    role: "Full-Stack Developer & SQA Tester",
    tech: ["Next.js", "Express.js", "MySQL", "Sequelize", "Postman", "Newman", "JWT"],
    testingFocus: ["RBAC Access Validation", "OTP Registration Security", "JWT Authentication", "File Validation", "Database Integrity"],
    githubUrl: "https://github.com/meherabnowshad/SDET-b19/tree/master/Assignment06",
    liveUrl: null,
    summary: "Architected a full-stack blogging platform and executed an end-to-end QA validation suite covering authentication, role permissions, payload constraints and relational database integrity.",
    qaBreakdown: {
      overview: "Evaluated system boundaries across front-end input fields, REST API endpoints, middleware authorization hooks, and database persistent storage.",
      scenariosTested: [
        { area: "RBAC & Authorization", detail: "Verified strict privilege isolation between Guest, User, and Admin accounts for protected route accessing and deletion actions." },
        { area: "Authentication & Security", detail: "Executed negative and positive test suites for OTP user registration, login JWT token issue, and password reset email workflows." },
        { area: "Input & File Validation", detail: "Tested user avatar updates against unexpected file types (.exe, .pdf) and boundary sizes (> 2MB file payload limits)." },
        { area: "API Error Handling", detail: "Asserted proper HTTP status codes (401 Unauthorized, 403 Forbidden, 422 Unprocessable Entity, 500 Server Error) under malformed JSON payloads." },
        { area: "Database Verification", detail: "Executed SQL queries to confirm foreign key cascade constraints and proper deletion operations without orphan records." }
      ],
      automationTools: "Postman API Collection, Newman CLI Test Runner, custom assertion scripts."
    }
  },
  {
    id: "ecommerce-automation",
    title: "E-Commerce Web Automation",
    isFlagship: false,
    tagline: "Automated Regression Test Suite for E-Commerce End-to-End User Journeys",
    role: "Automation Engineer",
    tech: ["Python", "Selenium WebDriver", "PyTest / Page Object Model", "Chrome / Firefox"],
    testingFocus: ["E2E Web Automation", "Cross-browser Testing", "Page Object Model", "Assertion Logging"],
    githubUrl: "https://github.com/meherabnowshad/Selenium-WIth-Python/tree/main/Automation%20Testing",
    liveUrl: "http://tutorialsninja.com/demo",
    summary: "Designed a maintainable web automation framework targeting critical revenue-generating flows on tutorialsninja.com/demo.",
    qaBreakdown: {
      overview: "Built automated tests mimicking human user behaviors, handling dynamic web elements, dynamic waits, explicit synchronization, and cross-browser environments.",
      scenariosTested: [
        { area: "Authentication Suite", detail: "Automated valid logins, locked accounts, invalid credential error banners, and session timeouts." },
        { area: "Cart Operations", detail: "Validated dynamic price recalculation when altering item quantities, removing items, or applying promo codes." },
        { area: "Checkout Validation", detail: "Tested address form field assertions, checkout step toggles, and final purchase success states." }
      ]
    }
  },
  {
    id: "database-validation",
    title: "Database Validation Project",
    isFlagship: false,
    tagline: "Relational Schema Verification & SQL Data Integrity Testing",
    role: "Database Quality Tester",
    tech: ["MySQL", "SQL", "Sequelize ORM", "Data Workbench"],
    testingFocus: ["Relational Schema Integrity", "Foreign Key Constraints", "Boundary Conditions", "SQL Query Analysis"],
    githubUrl: "https://github.com/meherabnowshad/database-validation",
    liveUrl: null,
    summary: "Executed comprehensive database verification to ensure data consistency, transaction rollback reliability and schema rule compliance under complex state transitions.",
    qaBreakdown: {
      overview: "Ensured backend data storage accurately reflects business rules and prevents corruption through raw SQL querying and data validation checks.",
      scenariosTested: [
        { area: "Schema Validation", detail: "Checked primary/foreign key mappings, nullable attributes, index optimization, and data type boundaries." },
        { area: "CRUD Integrity", detail: "Asserted that record insertion, modification, and cascade deletion maintained foreign key referential integrity." },
        { area: "Constraint Assertions", detail: "Attempted duplicate entry inserts and invalid payload types to confirm database-level error trapping." }
      ]
    }
  },
  {
    id: "academic-system",
    title: "Academic System Test Case Design",
    isFlagship: false,
    tagline: "Manual Test Suite & Bug Reporting for BRAC University Internal System",
    role: "QA Tester (Academic Project)",
    tech: ["Manual Testing", "Test Case Design", "Jira Bug Tracking", "Functional Validation"],
    testingFocus: ["Test Suite Architecture", "Boundary Value Analysis", "Equivalence Partitioning", "Jira Bug Reporting"],
    githubUrl: null,
    liveUrl: null,
    summary: "Constructed comprehensive manual test specifications for course registration, grade inspection and student portal modules.",
    qaBreakdown: {
      overview: "Analyzed business requirements to generate detailed test suites, defect reports and boundary condition matrixes.",
      scenariosTested: [
        { area: "Course Registration Flow", detail: "Tested prerequisite enforcement logic, credit limit caps, and concurrent seat allocation bottlenecks." },
        { area: "UI & Usability", detail: "Inspected responsiveness across tablet and desktop viewpoints, accessibility labels, and form input feedback." },
        { area: "Defect Reporting", detail: "Documented defects in Jira with precise repro steps, expected vs actual behavior, severity tags, and screenshots." }
      ]
    }
  },
  {
    id: "donation-system",
    title: "Donation Management System",
    isFlagship: false,
    tagline: "Full-Stack Web App & Functional Verification Suite",
    role: "Developer & QA Tester",
    tech: ["PHP", "MySQL", "Bootstrap", "XAMPP", "Functional Testing"],
    testingFocus: ["Dynamic Forms Verification", "Session Security", "Input Sanitization", "XAMPP Deployment Testing"],
    githubUrl: "https://github.com/meherabnowshad/Donation-Management-System_project",
    liveUrl: null,
    summary: "Built and thoroughly verified a community donation platform with secure monetary tracking, dynamic donor registration and cause filtering.",
    qaBreakdown: {
      overview: "Validated both system functionality and UI interactions on local XAMPP stack environments.",
      scenariosTested: [
        { area: "Form Validation", detail: "Assessed required field constraints, numeric donation bounds and invalid email formatting handling." },
        { area: "Database Audit", detail: "Verified that recorded monetary amounts matched transaction history tables across all causes." }
      ]
    }
  },
  {
    id: "street-fighter-2d",
    title: "2D Street Fighter Clone",
    isFlagship: false,
    tagline: "Graphics Engine & Event-Driven Mechanic Validation",
    role: "Game Logic Developer & Tester",
    tech: ["Python", "OpenGL", "GLUT", "Event Loop Mechanics"],
    testingFocus: ["Hitbox Collision Testing", "Event-Driven State Machine", "Frame Rate Stability"],
    githubUrl: "https://github.com/meherabnowshad/CSE423-_project/blob/main/Street%20Fighter",
    liveUrl: null,
    summary: "Engineered a dynamic 2D arcade combat engine with precise collision hitboxes, state machine transitions and rendering performance checks.",
    qaBreakdown: {
      overview: "Tested real-time user keyboard inputs, attack state transitions, and boundary collision response rules.",
      scenariosTested: [
        { area: "Collision Detection", detail: "Validated hitbox boundary overlaps for light, heavy, and special attacks." },
        { area: "State Transitions", detail: "Asserted proper move animation lockouts during recovery frames and jump states." }
      ]
    }
  }
];

const STLC_STEPS = [
  {
    num: "01",
    title: "Requirement Analysis",
    desc: "Review specifications to identify testable conditions, system limits, and quality risks early in SDLC.",
    tools: "Jira, Confluence, Traceability Matrix"
  },
  {
    num: "02",
    title: "Test Planning",
    desc: "Define test strategy, scope, resource allocation, environment prerequisites, and entry/exit criteria.",
    tools: "Test Plan Doc, Risk Analysis"
  },
  {
    num: "03",
    title: "Test Case Design",
    desc: "Craft manual test scripts and automated test scenarios utilizing Equivalence Partitioning and BVA.",
    tools: "Postman Collections, Selenium, Excel"
  },
  {
    num: "04",
    title: "Test Execution",
    desc: "Execute manual and automated test suites against staging builds. Inspect front-end UI, REST APIs, and DB state.",
    tools: "Selenium, Postman, Newman, MySQL"
  },
  {
    num: "05",
    title: "Defect Reporting",
    desc: "Document bugs with reproduction steps, environment details, logs, screenshots, severity, and priority.",
    tools: "Jira, GitHub Issues, Bug Templates"
  },
  {
    num: "06",
    title: "Regression Testing",
    desc: "Re-run test suites after developer bug fixes to verify defect resolution and prevent regression bugs.",
    tools: "Newman CLI, PyTest Suites"
  },
  {
    num: "07",
    title: "Test Automation",
    desc: "Convert high-priority stable regression paths into maintainable code scripts using framework design patterns.",
    tools: "Python + Selenium, JS + Axios"
  },
  {
    num: "08",
    title: "Closure & Sign-Off",
    desc: "Analyze test execution metrics, coverage summaries, open defect density, and sign-off on release readiness.",
    tools: "Summary Reports, QA Checklist"
  }
];

const QA_LAB_DOMAINS = [
  {
    id: "api",
    name: "API Testing Lab",
    desc: "Postman / Newman / Axios Automation Sandbox",
    subtitle: "Request → Auth → Header → Payload → Assertions → Code 200 OK"
  },
  {
    id: "ui",
    name: "UI Automation",
    desc: "Selenium Python Web Driver Mechanics",
    subtitle: "Scenario → Locators → Dynamic Wait → Interaction → Assertion"
  },
  {
    id: "db",
    name: "Database Verification",
    desc: "MySQL Integrity & Relation Analysis",
    subtitle: "Trigger Action → SQL Query → Row Assertions → Foreign Key Integrity"
  },
  {
    id: "perf",
    name: "Performance Lab",
    desc: "JMeter Load & Stress Concepts",
    subtitle: "Thread Groups → Load Curves → Latency Analysis → Bottlenecks"
  }
];

export default function App() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [toastMessage, setToastMessage] = useState(null);

  const [skillSearch, setSkillSearch] = useState('');
  const [activeSkillCategory, setActiveSkillCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  
  const [activeLabTab, setActiveLabTab] = useState('api');
  const [apiSimStatus, setApiSimStatus] = useState('idle');
  const [apiStep, setApiStep] = useState(0);

  const [uiSimStep, setUiSimStep] = useState(0);
  const [dbQueryTab, setDbQueryTab] = useState('users');

  const timerRef = useRef(null);

  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => {
      setToastMessage(null);
    }, 4000);
  };

  const runApiSimulation = () => {
    if (timerRef.current) clearInterval(timerRef.current);
    setApiSimStatus('running');
    setApiStep(1);
    let currentStep = 1;
    timerRef.current = setInterval(() => {
      currentStep += 1;
      if (currentStep <= 6) {
        setApiStep(currentStep);
      } else {
        clearInterval(timerRef.current);
        timerRef.current = null;
        setApiSimStatus('success');
      }
    }, 450);
  };

  useEffect(() => {
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, []);

  const handleEmailClick = (e) => {
    if (e) e.preventDefault();
    const gmailComposeUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}`;
    window.open(gmailComposeUrl, '_blank', 'noopener,noreferrer');
    showToast(`Opening Gmail compose for ${PROFILE.email}...`);
  };

  const handleSendEmail = () => {
    const subject = "Hiring Inquiry";
    const bodyText = "Hi, Meherab. I would like to discuss an opportunity with you.";
    const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(PROFILE.email)}&su=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyText)}`;
    window.open(gmailUrl, '_blank', 'noopener,noreferrer');

    showToast("Opening Gmail to send hiring inquiry...");
  };

  const CV_DRIVE_URL = "https://drive.google.com/file/d/1XeSZdgaGNL90c2h5mC2UV_YlDgVBUz1y/view?usp=sharing";

  const handleDownloadCV = () => {
    window.open(CV_DRIVE_URL, '_blank', 'noopener,noreferrer');
    showToast("Opening CV in Google Drive...");
  };

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'qalab', 'workflow', 'certification', 'education', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const filteredSkills = useMemo(() => {
    return SKILL_CATEGORIES.filter((cat) => {
      if (activeSkillCategory !== 'all' && cat.id !== activeSkillCategory) return false;
      if (!skillSearch.trim()) return true;
      const searchLower = skillSearch.toLowerCase();
      const catMatches = cat.title.toLowerCase().includes(searchLower);
      const skillMatches = cat.skills.some(s => s.toLowerCase().includes(searchLower));
      return catMatches || skillMatches;
    });
  }, [activeSkillCategory, skillSearch]);

  const renderSkillCategoryIcon = (id) => {
    switch (id) {
      case 'testing': return <ShieldCheck className="w-5 h-5 text-white" />;
      case 'automation': return <Terminal className="w-5 h-5 text-white" />;
      case 'database': return <Database className="w-5 h-5 text-white" />;
      case 'web': return <Code2 className="w-5 h-5 text-white" />;
      case 'tools': return <Sliders className="w-5 h-5 text-white" />;
      default: return <ShieldCheck className="w-5 h-5 text-white" />;
    }
  };

  const renderLabIcon = (id) => {
    switch (id) {
      case 'api': return <Terminal className="w-5 h-5 shrink-0" />;
      case 'ui': return <Monitor className="w-5 h-5 shrink-0" />;
      case 'db': return <Database className="w-5 h-5 shrink-0" />;
      case 'perf': return <Activity className="w-5 h-5 shrink-0" />;
      default: return <Terminal className="w-5 h-5 shrink-0" />;
    }
  };

  return (
    <div className="min-h-screen bg-slate-50 dark:bg-slate-950 text-slate-900 dark:text-slate-100 font-sans selection:bg-cyan-500 selection:text-slate-950">
      
      {/* Toast Notification */}
      {toastMessage && (
        <div className="fixed bottom-6 right-6 z-50 bg-cyan-50 dark:bg-cyan-950 border border-cyan-500 text-cyan-900 dark:text-cyan-200 px-5 py-3 rounded-lg shadow-2xl flex items-center gap-3 animate-bounce">
          <CheckCircle2 className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
          <span className="text-sm font-medium">{toastMessage}</span>
        </div>
      )}

      {/* Navigation Header */}
      <nav className="sticky top-0 z-40 bg-white/80 dark:bg-slate-950/80 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            
            <a href="#home" className="flex items-center gap-2 group">
              <div className="w-9 h-9 rounded-lg bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-700 dark:text-cyan-400 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-all">
                <Terminal className="w-5 h-5" />
              </div>
              <div className="flex flex-col">
                <span className="font-bold text-sm tracking-wider text-slate-900 dark:text-slate-100 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                  MEHERAB HOSSAIN NOWSHAD
                </span>
                <span className="text-[10px] text-slate-500 dark:text-slate-400 font-mono">SQA / SDET ENGINEER</span>
              </div>
            </a>

            <div className="hidden lg:flex items-center space-x-1 font-medium text-xs tracking-wide">
              {[
                { id: 'home', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'skills', label: 'Skills' },
                { id: 'projects', label: 'Projects' },
                { id: 'qalab', label: 'QA Lab' },
                { id: 'workflow', label: 'STLC' },
                { id: 'certification', label: 'Certification' },
                { id: 'education', label: 'Education' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  className={`px-3 py-1.5 rounded-md transition-all ${
                    activeSection === item.id
                      ? 'bg-cyan-50 dark:bg-cyan-500/10 text-cyan-700 dark:text-cyan-400 border border-cyan-500/30'
                      : 'text-slate-600 dark:text-slate-300 hover:text-cyan-700 dark:hover:text-cyan-400 hover:bg-white dark:hover:bg-slate-900'
                  }`}
                >
                  {item.label}
                </a>
              ))}
            </div>

            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={handleDownloadCV}
                className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold rounded-lg bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 shadow-md shadow-cyan-500/10 transition-all cursor-pointer"
              >
                <Download className="w-3.5 h-3.5" />
                Download CV
              </button>
            </div>

            <div className="lg:hidden">
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white rounded-lg hover:bg-white dark:hover:bg-slate-900"
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden bg-white/95 dark:bg-slate-900/95 border-b border-slate-200 dark:border-slate-800 px-4 pt-2 pb-6 space-y-2">
            {[
              { id: 'home', label: 'Home' },
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'qalab', label: 'QA Lab' },
              { id: 'workflow', label: 'STLC Workflow' },
              { id: 'certification', label: 'Certification' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setMobileMenuOpen(false)}
                className="block px-3 py-2 rounded-md text-sm font-medium text-slate-600 dark:text-slate-300 hover:bg-slate-200 dark:hover:bg-slate-800 hover:text-cyan-700 dark:hover:text-cyan-400"
              >
                {item.label}
              </a>
            ))}
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  handleDownloadCV();
                }}
                className="w-full flex items-center justify-center gap-2 py-2.5 rounded-md bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
              >
                <Download className="w-4 h-4" /> Download CV
              </button>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section id="home" className="relative pt-12 pb-20 md:py-24 overflow-hidden border-b border-slate-200 dark:border-slate-800/60">
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-cyan-50 dark:bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute top-1/3 right-10 w-72 h-72 bg-blue-50 dark:bg-blue-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-7 space-y-6">
              
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white dark:bg-slate-900 border border-slate-300 dark:border-slate-700/80 text-cyan-700 dark:text-cyan-400 text-xs font-mono">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
                </span>
                <span>Ready for SQA / SDET Roles &amp; Internships</span>
              </div>

              <div className="space-y-2">
                <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white tracking-tight leading-tight">
                  Software Quality Assurance Engineer / <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-300 to-blue-500">SDET</span>
                </h1>
                <p className="text-slate-500 dark:text-slate-400 font-mono text-xs sm:text-sm">
                  MD. MEHERAB HOSSAIN NOWSHAD &bull; BRAC University Computer Science Graduate
                </p>
              </div>

              <p className="text-slate-600 dark:text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-normal">
                {PROFILE.tagline}
              </p>

              <div className="pt-2 flex flex-wrap items-center gap-4">
                <a
                  href="#projects"
                  className="px-6 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm flex items-center gap-2 shadow-lg shadow-cyan-500/20 transition-all hover:scale-105"
                >
                  <ListChecks className="w-4 h-4" /> View My Work
                </a>

                <button
                  onClick={handleDownloadCV}
                  className="px-6 py-3 rounded-lg bg-white dark:bg-slate-900 hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-300 dark:border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all hover:border-slate-400 dark:hover:border-slate-600 cursor-pointer"
                >
                  <Download className="w-4 h-4 text-cyan-700 dark:text-cyan-400" /> Download CV
                </button>
              </div>

              <div className="pt-4 flex items-center gap-6 border-t border-slate-200 dark:border-slate-800/80">
                <span className="text-xs text-slate-500 dark:text-slate-400 font-mono uppercase tracking-wider">Connect:</span>
                <a
                  href={PROFILE.github}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs font-mono"
                >
                  <Github className="w-4 h-4" /> GitHub
                </a>
                <a
                  href={PROFILE.linkedin}
                  target="_blank"
                  rel="noreferrer"
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs font-mono"
                >
                  <Linkedin className="w-4 h-4" /> LinkedIn
                </a>
                <button
                  onClick={handleEmailClick}
                  className="text-slate-500 dark:text-slate-400 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors flex items-center gap-1 text-xs font-mono cursor-pointer"
                  title="Click to copy email & open mail client"
                >
                  <Mail className="w-4 h-4" /> Email
                </button>
              </div>
            </div>

            <div className="lg:col-span-5">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6 shadow-2xl relative overflow-hidden">
                <div className="flex items-center justify-between border-b border-slate-200 dark:border-slate-800 pb-4">
                  <div className="flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                    <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 font-bold uppercase">QA Profile Overview</span>
                  </div>
                  <span className="text-[10px] font-mono bg-emerald-50 dark:bg-emerald-950 text-emerald-700 dark:text-emerald-400 border border-emerald-800 px-2 py-0.5 rounded">Active Status</span>
                </div>

                <div className="grid grid-cols-2 gap-4">
                  {PROFILE.stats.map((st, i) => (
                    <div key={i} className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80">
                      <div className="text-[10px] text-slate-500 font-mono uppercase">{st.label}</div>
                      <div className="text-sm sm:text-base font-bold text-slate-900 dark:text-slate-100 mt-1 font-mono">{st.value}</div>
                    </div>
                  ))}
                </div>

                <div className="p-4 rounded-xl bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-800/40 text-xs text-cyan-900 dark:text-cyan-200 font-mono space-y-2">
                  <div className="font-bold flex items-center gap-1.5 text-cyan-800 dark:text-cyan-300">
                    <Zap className="w-4 h-4 text-cyan-700 dark:text-cyan-400" /> SQA Core Strengths:
                  </div>
                  <ul className="space-y-1 text-slate-600 dark:text-slate-300 text-[11px] list-disc list-inside">
                    <li>End-to-End API &amp; Auth Payload Verification</li>
                    <li>Selenium Python PyTest Framework Architecture</li>
                    <li>MySQL Database Schema &amp; Constraint Audits</li>
                    <li>Agile Jira Defect Lifecycle Management</li>
                  </ul>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Professional Summary
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">About Me</h2>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-4 text-slate-600 dark:text-slate-300 text-sm sm:text-base leading-relaxed">
              <p>
                I am a Computer Science graduate from <span className="text-slate-900 dark:text-white font-semibold">BRAC University</span> with specialized hands-on training in Full-Stack SQA and Software Test Automation from <span className="text-cyan-700 dark:text-cyan-400 font-semibold">Road to SDET Academy</span>.
              </p>
              <p>
                My engineering approach combines rigorous analytical testing methodologies with programmatic automation. I focus on detecting boundary failures, security privilege escalations, payload irregularities and database inconsistencies early in the software development lifecycle.
              </p>
              <p className="text-slate-500 dark:text-slate-400 text-xs font-mono pt-2">
                "Quality isn't just an afterthought—it's built into every API endpoint, database schema constraint and user interface element."
              </p>
            </div>

            <div className="lg:col-span-5 grid grid-cols-1 gap-4">
              {[
                { title: "Shift-Left Testing Mindset", desc: "Analyzing requirements & edge cases early before full deployment." },
                { title: "API & DB First Verification", desc: "Directly asserting REST endpoints & SQL foreign key constraints." },
                { title: "Maintainable Automation", desc: "Implementing Page Object Models (POM) for clean test suites." },
                { title: "Comprehensive Bug Reports", desc: "Delivering precise repro steps, severity tags & actionable logs." }
              ].map((item, idx) => (
                <div key={idx} className="p-4 rounded-xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-cyan-700 dark:text-cyan-400 shrink-0 mt-0.5" />
                  <div>
                    <h3 className="text-sm font-bold text-slate-900 dark:text-white">{item.title}</h3>
                    <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Technical Stack
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Skills &amp; Testing Capabilities</h2>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-2 overflow-x-auto w-full sm:w-auto pb-2 sm:pb-0">
              <button
                onClick={() => setActiveSkillCategory('all')}
                className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                  activeSkillCategory === 'all'
                    ? 'bg-cyan-500 text-slate-950 font-bold'
                    : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                }`}
              >
                All Skills
              </button>
              {SKILL_CATEGORIES.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setActiveSkillCategory(cat.id)}
                  className={`px-3 py-1.5 rounded-lg text-xs font-mono whitespace-nowrap transition-all ${
                    activeSkillCategory === cat.id
                      ? 'bg-cyan-500 text-slate-950 font-bold'
                      : 'bg-white dark:bg-slate-900 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800 hover:text-slate-900 dark:hover:text-white'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            <div className="relative w-full sm:w-64">
              <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-500" />
              <input
                type="text"
                placeholder="Search skill (e.g., Postman)..."
                value={skillSearch}
                onChange={(e) => setSkillSearch(e.target.value)}
                className="w-full pl-9 pr-3 py-1.5 rounded-lg bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-200 text-xs focus:outline-none focus:border-cyan-500 font-mono"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredSkills.map((cat) => (
              <div key={cat.id} className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 hover:border-slate-300 dark:hover:border-slate-700 transition-all flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 mb-4">
                    <div className={`p-2.5 rounded-xl bg-gradient-to-r ${cat.color} text-slate-950 font-bold`}>
                      {renderSkillCategoryIcon(cat.id)}
                    </div>
                    <h3 className="text-base font-bold text-slate-900 dark:text-white font-mono">{cat.title}</h3>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800/80 text-xs text-slate-600 dark:text-slate-300 font-mono hover:border-cyan-500/50 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Portfolio
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Projects &amp; QA Test Work</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
              From full-stack development to targeted API, web automation, and database testing suites.
            </p>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {PROJECTS.map((proj) => (
              <div
                key={proj.id}
                className={`bg-white dark:bg-slate-900 border rounded-2xl p-6 flex flex-col justify-between transition-all group hover:scale-[1.01] ${
                  proj.isFlagship
                    ? 'border-cyan-500/60 shadow-xl shadow-cyan-500/5 md:col-span-2 lg:col-span-2'
                    : 'border-slate-200 dark:border-slate-800 hover:border-slate-300 dark:hover:border-slate-700'
                }`}
              >
                <div className="space-y-4">
                  
                  <div className="flex items-start justify-between gap-2">
                    <div>
                      {proj.isFlagship && (
                        <span className="inline-block text-[10px] font-mono font-bold uppercase bg-cyan-500 text-slate-950 px-2 py-0.5 rounded mb-2">
                          Full-Stack &amp; QA Project
                        </span>
                      )}
                      <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                        {proj.title}
                      </h3>
                      <p className="text-xs font-mono text-slate-500 dark:text-slate-400 mt-1">{proj.role}</p>
                    </div>

                    <div className="flex items-center gap-2 shrink-0">
                      {proj.githubUrl && (
                        <a
                          href={proj.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600"
                          title="View Source on GitHub"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      )}
                      {proj.liveUrl && (
                        <a
                          href={proj.liveUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="p-2 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:border-slate-400 dark:hover:border-slate-600"
                          title="Live Demo"
                        >
                          <ExternalLink className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>

                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">{proj.summary}</p>

                  <div className="space-y-2 pt-2">
                    <span className="text-[11px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider block">Testing Focus:</span>
                    <div className="flex flex-wrap gap-1.5">
                      {proj.testingFocus.map((tf, idx) => (
                        <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-cyan-50 dark:bg-cyan-950/60 border border-cyan-800/60 text-cyan-900 dark:text-cyan-200">
                          ✓ {tf}
                        </span>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-slate-200 dark:border-slate-800/80">
                    {proj.tech.map((t, idx) => (
                      <span key={idx} className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 border border-slate-200 dark:border-slate-800">
                        {t}
                      </span>
                    ))}
                  </div>

                </div>

                <div className="pt-6">
                  <button
                    onClick={() => setSelectedProject(proj)}
                    className="w-full py-2.5 rounded-lg bg-slate-50 dark:bg-slate-950 hover:bg-cyan-500 hover:text-slate-950 border border-slate-200 dark:border-slate-800 hover:border-cyan-500 text-slate-600 dark:text-slate-300 font-mono text-xs font-bold transition-all flex items-center justify-center gap-2"
                  >
                    <span>Inspect QA Details &amp; Scenarios</span>
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* QA Lab Section */}
      <section id="qalab" className="py-20 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-10">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Interactive Quality Lab
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">QA LAB</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
              "How I approach software quality across system architecture."
            </p>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl overflow-hidden shadow-2xl">
            
            <div className="grid grid-cols-2 md:grid-cols-4 border-b border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-slate-950">
              {QA_LAB_DOMAINS.map((domain) => (
                <button
                  key={domain.id}
                  onClick={() => setActiveLabTab(domain.id)}
                  className={`p-4 text-left transition-all flex items-center gap-3 border-r border-slate-200 dark:border-slate-800 last:border-r-0 ${
                    activeLabTab === domain.id
                      ? 'bg-white dark:bg-slate-900 text-cyan-700 dark:text-cyan-400 border-b-2 border-b-cyan-500'
                      : 'text-slate-500 dark:text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-900/50'
                  }`}
                >
                  {renderLabIcon(domain.id)}
                  <div>
                    <div className="text-xs font-bold font-mono">{domain.name}</div>
                    <div className="text-[10px] text-slate-500 hidden sm:block">{domain.desc}</div>
                  </div>
                </button>
              ))}
            </div>

            <div className="p-6 md:p-8 font-mono">
              
              {activeLabTab === 'api' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <span className="text-xs text-cyan-700 dark:text-cyan-400 font-bold uppercase">Postman / Newman / Axios Runner Simulator</span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">REST API &amp; Auth Assertion Workbench</h3>
                    </div>
                    
                    <button
                      onClick={runApiSimulation}
                      disabled={apiSimStatus === 'running'}
                      className="px-4 py-2 rounded-lg bg-emerald-500 hover:bg-emerald-400 disabled:bg-slate-200 dark:disabled:bg-slate-800 text-slate-950 font-bold text-xs flex items-center gap-2 transition-all cursor-pointer"
                    >
                      <Play className="w-4 h-4 fill-current" />
                      {apiSimStatus === 'running' ? 'Executing Newman Suite...' : 'Run Test Suite'}
                    </button>
                  </div>

                  <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-2 text-center text-[11px]">
                    {[
                      { step: 1, label: "Request", desc: "POST /api/v1/auth/login" },
                      { step: 2, label: "Authentication", desc: "Bearer JWT Token" },
                      { step: 3, label: "Validation", desc: "Payload JSON Schema" },
                      { step: 4, label: "Assertions", desc: "pm.response.to.have.status(200)" },
                      { step: 5, label: "Analysis", desc: "Response Time under 150ms" },
                      { step: 6, label: "Execution", desc: "Newman CLI Automated" }
                    ].map((item) => (
                      <div
                        key={item.step}
                        className={`p-3 rounded-lg border transition-all ${
                          item.step <= apiStep
                            ? 'bg-cyan-50 dark:bg-cyan-950/60 border-cyan-500 text-cyan-800 dark:text-cyan-300'
                            : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500'
                        }`}
                      >
                        <div className="font-bold text-xs text-slate-500 dark:text-slate-400">Step {item.step}</div>
                        <div className="font-bold mt-1 text-slate-700 dark:text-slate-200">{item.label}</div>
                        <div className="text-[9px] text-slate-500 dark:text-slate-400 mt-0.5 truncate">{item.desc}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs space-y-1.5 font-mono">
                    <div className="text-slate-500">// Newman CLI Execution Log: BlogSpace Auth Suite</div>
                    <div className="text-slate-600 dark:text-slate-300">$ newman run blogspace_postman_collection.json -e staging_env.json</div>
                    <div className="text-emerald-700 dark:text-emerald-400">✓ POST /api/auth/register-otp [200 OK, 112ms] - Assert OTP Sent</div>
                    <div className="text-emerald-700 dark:text-emerald-400">✓ POST /api/auth/login [200 OK, 98ms] - Assert JWT Token Returned</div>
                    <div className="text-emerald-700 dark:text-emerald-400">✓ GET /api/admin/blogs [403 Forbidden, 45ms] - Assert Guest RBAC Blocked</div>
                    <div className="text-emerald-700 dark:text-emerald-400">✓ PUT /api/user/avatar [422 Unprocessable Entity, 62ms] - Assert Invalid File Ext Rejected</div>
                    {apiSimStatus === 'success' && (
                      <div className="pt-2 text-cyan-700 dark:text-cyan-400 border-t border-slate-200 dark:border-slate-800 font-bold">
                        ┌────────────────────────────────────────┐<br />
                        │  Total Tests Passed: 4 / 4 (100%)       │<br />
                        │  Total Exec Time: 317ms                │<br />
                        └────────────────────────────────────────┘
                      </div>
                    )}
                  </div>
                </div>
              )}

              {activeLabTab === 'ui' && (
                <div className="space-y-6">
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-200 dark:border-slate-800 pb-4">
                    <div>
                      <span className="text-xs text-cyan-700 dark:text-cyan-400 font-bold uppercase">Selenium Python Web Driver</span>
                      <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Page Object Model (POM) Automation Mechanics</h3>
                    </div>

                    <button
                      onClick={() => setUiSimStep((prev) => (prev + 1) % 5)}
                      className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-1.5 cursor-pointer"
                    >
                      <RefreshCw className="w-3.5 h-3.5" /> Next Step Execution ({uiSimStep + 1}/5)
                    </button>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-5 gap-3 text-xs">
                    {[
                      { step: 0, title: "1. Test Scenario", code: "test_checkout_flow()" },
                      { step: 1, title: "2. Locators (POM)", code: "driver.find_element(By.ID)" },
                      { step: 2, title: "3. User Action", code: "element.click() / send_keys()" },
                      { step: 3, title: "4. Dynamic Sync", code: "WebDriverWait(driver, 10)" },
                      { step: 4, title: "5. Assertion", code: "assert 'Success' in alert" }
                    ].map((st) => (
                      <div
                        key={st.step}
                        className={`p-3 rounded-lg border transition-all ${
                          uiSimStep === st.step
                            ? 'bg-cyan-50 dark:bg-cyan-950 border-cyan-400 text-cyan-900 dark:text-cyan-200'
                            : 'bg-slate-50 dark:bg-slate-950 border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        <div className="font-bold text-slate-900 dark:text-white">{st.title}</div>
                        <div className="text-[10px] text-cyan-700 dark:text-cyan-400 mt-1 font-mono">{st.code}</div>
                      </div>
                    ))}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-1">
                    <div className="text-slate-500"># Python Selenium Snippet - E-Commerce Cart Automation</div>
                    <div className="text-purple-700 dark:text-purple-400">def <span className="text-blue-700 dark:text-blue-300">test_add_to_cart_and_checkout</span>(self):</div>
                    <div className="text-slate-600 dark:text-slate-300 pl-4">self.login_page.login("user@test.com", "password123")</div>
                    <div className="text-slate-600 dark:text-slate-300 pl-4">self.catalog.search_product("MacBook Air")</div>
                    <div className="text-slate-600 dark:text-slate-300 pl-4">self.catalog.click_add_to_cart()</div>
                    <div className="text-emerald-700 dark:text-emerald-400 pl-4">assert self.cart.get_item_count() == 1</div>
                  </div>
                </div>
              )}

              {activeLabTab === 'db' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="text-xs text-cyan-700 dark:text-cyan-400 font-bold uppercase">MySQL &amp; Sequelize Verification</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Schema Integrity &amp; Referential Constraint Testing</h3>
                  </div>

                  <div className="flex gap-2">
                    {['users', 'orders', 'constraints'].map((t) => (
                      <button
                        key={t}
                        onClick={() => setDbQueryTab(t)}
                        className={`px-3 py-1.5 rounded text-xs font-mono capitalize cursor-pointer ${
                          dbQueryTab === t
                            ? 'bg-cyan-500 text-slate-950 font-bold'
                            : 'bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400'
                        }`}
                      >
                        {t} Query Verification
                      </button>
                    ))}
                  </div>

                  <div className="bg-slate-50 dark:bg-slate-950 p-4 rounded-xl border border-slate-200 dark:border-slate-800 text-xs font-mono space-y-2">
                    {dbQueryTab === 'users' && (
                      <>
                        <div className="text-slate-500">-- Verification Query: Assert OTP Expiry &amp; Nullable Hash</div>
                        <div className="text-cyan-800 dark:text-cyan-300">SELECT id, email, is_verified, otp_hash FROM users WHERE email = 'testuser@domain.com';</div>
                        <div className="text-emerald-700 dark:text-emerald-400">-- Result: 1 Row Returned [is_verified = 1, otp_hash = NULL] &rarr; PASSED</div>
                      </>
                    )}
                    {dbQueryTab === 'orders' && (
                      <>
                        <div className="text-slate-500">-- Cascade Integrity Check: Ensure no orphaned order records</div>
                        <div className="text-cyan-800 dark:text-cyan-300">SELECT o.id FROM orders o LEFT JOIN users u ON o.user_id = u.id WHERE u.id IS NULL;</div>
                        <div className="text-emerald-700 dark:text-emerald-400">-- Result: 0 Rows Returned (No orphaned entries found) &rarr; PASSED</div>
                      </>
                    )}
                    {dbQueryTab === 'constraints' && (
                      <>
                        <div className="text-slate-500">-- Duplicate Constraint Assert</div>
                        <div className="text-cyan-800 dark:text-cyan-300">INSERT INTO users (email) VALUES ('existing_user@domain.com');</div>
                        <div className="text-amber-700 dark:text-amber-400">-- ERROR 1062 (23000): Duplicate entry 'existing_user@domain.com' for key 'users.email' &rarr; PASSED</div>
                      </>
                    )}
                  </div>
                </div>
              )}

              {activeLabTab === 'perf' && (
                <div className="space-y-6">
                  <div className="border-b border-slate-200 dark:border-slate-800 pb-4">
                    <span className="text-xs text-cyan-700 dark:text-cyan-400 font-bold uppercase">JMeter Performance Principles</span>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white mt-1">Load &amp; Stress Metrics Analysis</h3>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Load Testing</div>
                      <div className="text-lg font-bold text-cyan-700 dark:text-cyan-400 mt-1">50 Concurrent Threads</div>
                      <div className="text-[11px] text-slate-500 mt-1">Sustained throughput under normal traffic limits.</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Stress Testing</div>
                      <div className="text-lg font-bold text-amber-700 dark:text-amber-400 mt-1">Ramp-Up Peak Load</div>
                      <div className="text-[11px] text-slate-500 mt-1">Identifying system breaking point &amp; recovery behavior.</div>
                    </div>

                    <div className="p-4 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                      <div className="text-xs text-slate-500 dark:text-slate-400">Target Response Benchmark</div>
                      <div className="text-lg font-bold text-emerald-700 dark:text-emerald-400 mt-1">Under 200ms Latency</div>
                      <div className="text-[11px] text-slate-500 mt-1">Asserting fast user interface response times.</div>
                    </div>
                  </div>
                </div>
              )}

            </div>
          </div>

        </div>
      </section>

      {/* STLC Workflow Section */}
      <section id="workflow" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Software Testing Life Cycle (STLC)
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Testing Workflow &amp; Quality Pipeline</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
              How I structure quality engineering from initial requirements down to bug closure.
            </p>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {STLC_STEPS.map((step) => (
              <div
                key={step.num}
                className="bg-white/80 dark:bg-slate-900/80 border border-slate-200 dark:border-slate-800 rounded-xl p-5 hover:border-cyan-500/40 transition-all flex flex-col justify-between group"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-black font-mono text-slate-300 dark:text-slate-700 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors">
                      {step.num}
                    </span>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400">
                      STLC PHASE
                    </span>
                  </div>

                  <h3 className="text-base font-bold text-slate-900 dark:text-white">{step.title}</h3>
                  <p className="text-xs text-slate-600 dark:text-slate-300 leading-relaxed">{step.desc}</p>
                </div>

                <div className="mt-4 pt-3 border-t border-slate-200 dark:border-slate-800/80 text-[11px] font-mono text-cyan-700/90 dark:text-cyan-400/90">
                  Tools: <span className="text-slate-500 dark:text-slate-400">{step.tools}</span>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Certification Section */}
      <section id="certification" className="py-20 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Verified Qualifications
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Professional Certification</h2>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="max-w-3xl mx-auto bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
            <div className="absolute top-0 right-0 translate-x-8 -translate-y-8 w-40 h-40 bg-cyan-50 dark:bg-cyan-500/10 rounded-full blur-2xl pointer-events-none" />

            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
              <div className="space-y-2">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 dark:bg-emerald-950 border border-emerald-800 text-emerald-700 dark:text-emerald-400 text-xs font-mono">
                  <Award className="w-3.5 h-3.5" /> Certified Quality Assurance Specialist
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">{PROFILE.certification.title}</h3>
                <p className="text-sm font-mono text-slate-500 dark:text-slate-400">
                  {PROFILE.certification.academy} &bull; {PROFILE.certification.hours}
                </p>
                <div className="text-xs font-mono text-cyan-700 dark:text-cyan-400">Completed: {PROFILE.certification.date}</div>
              </div>

              <a
                href={PROFILE.certification.certificateUrl}
                target="_blank"
                rel="noreferrer"
                onClick={() => showToast("Opening Road to SDET Verified Certificate...")}
                className="px-5 py-2.5 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs flex items-center gap-2 shadow-lg hover:bg-cyan-400 transition-all shrink-0 cursor-pointer"
              >
                <Award className="w-4 h-4" /> View Certificate
              </a>
            </div>

            <div className="mt-6 pt-6 border-t border-slate-200 dark:border-slate-800 space-y-3">
              <span className="text-xs font-mono text-slate-500 dark:text-slate-400 uppercase tracking-wider block">Core Certification Modules:</span>
              <div className="flex flex-wrap gap-2">
                {PROFILE.certification.topics.map((topic, idx) => (
                  <span key={idx} className="px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono text-slate-600 dark:text-slate-300">
                    ✓ {topic}
                  </span>
                ))}
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-20 border-b border-slate-200 dark:border-slate-800/60 bg-white/60 dark:bg-slate-950/40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Academic Background
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Education &amp; Research Thesis</h2>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            <div className="lg:col-span-5 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/30 text-cyan-700 dark:text-cyan-400">
                  <GraduationCap className="w-6 h-6" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white">{PROFILE.education.degree}</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{PROFILE.education.institution}</p>
                </div>
              </div>

              <div className="pt-2 border-t border-slate-200 dark:border-slate-800/80 space-y-2">
                <div className="flex justify-between items-center text-xs font-mono">
                  <span className="text-slate-500 dark:text-slate-400">Location:</span>
                  <span className="text-slate-700 dark:text-slate-200">{PROFILE.education.location}</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-4">
              <div className="flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-700 dark:text-cyan-400" />
                <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Undergraduate Thesis</span>
              </div>

              <h3 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white leading-snug">
                "{PROFILE.education.thesis.title}"
              </h3>

              <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed font-sans">
                {PROFILE.education.thesis.description}
              </p>

              <div className="pt-3 border-t border-slate-200 dark:border-slate-800 text-[11px] font-mono text-slate-500 flex items-center justify-between">
                <span>Computer Science &amp; Vision Domain</span>
                <span className="text-emerald-700 dark:text-emerald-400">BRAC University Defended</span>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 border-b border-slate-200 dark:border-slate-800/60">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col items-center text-center mb-12">
            <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 tracking-wider uppercase bg-cyan-50 dark:bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 mb-3">
              Get In Touch
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white">Let's build better software.</h2>
            <p className="text-slate-500 dark:text-slate-400 text-sm mt-2 max-w-xl">
              Have a project, SQA opportunity, or QA challenge? Let's connect.
            </p>
            <div className="w-12 h-1 bg-cyan-500 rounded mt-3" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            <div className="lg:col-span-5 space-y-6">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-6 space-y-6">
                <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">Contact Details</h3>

                <div className="space-y-4 text-xs font-mono">
                  
                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <Mail className="w-5 h-5 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-slate-500 text-[10px]">DIRECT EMAIL</div>
                      <button
                        onClick={handleEmailClick}
                        className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors cursor-pointer text-left truncate font-semibold block"
                      >
                        {PROFILE.email}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <Activity className="w-5 h-5 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <div>
                      <div className="text-slate-500 text-[10px]">PHONE / WHATSAPP</div>
                      <a href={`tel:${PROFILE.phone}`} className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors font-semibold">
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <Linkedin className="w-5 h-5 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-slate-500 text-[10px]">LINKEDIN</div>
                      <a href={PROFILE.linkedin} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors truncate font-semibold block">
                        linkedin.com/in/meherabnowshad
                      </a>
                    </div>
                  </div>

                  <div className="flex items-center gap-3 p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800">
                    <Github className="w-5 h-5 text-cyan-700 dark:text-cyan-400 shrink-0" />
                    <div className="truncate">
                      <div className="text-slate-500 text-[10px]">GITHUB</div>
                      <a href={PROFILE.github} target="_blank" rel="noreferrer" className="text-slate-700 dark:text-slate-200 hover:text-cyan-700 dark:hover:text-cyan-400 transition-colors truncate font-semibold block">
                        github.com/meherabnowshad
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl p-8 sm:p-10 space-y-5 flex flex-col items-center justify-center text-center h-full min-h-[320px]">
                <div className="w-14 h-14 rounded-2xl bg-cyan-50 dark:bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center">
                  <Send className="w-6 h-6 text-cyan-700 dark:text-cyan-400" />
                </div>

                <div className="space-y-2">
                  <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">Prefer Email?</h3>
                  <p className="text-xs font-mono text-slate-500 dark:text-slate-400 max-w-sm leading-relaxed">
                    Click below to open Gmail with a pre-filled hiring inquiry to {PROFILE.email}.
                  </p>
                </div>

                <button
                  onClick={handleSendEmail}
                  className="px-8 py-3 rounded-lg bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold text-sm font-mono flex items-center justify-center gap-2 transition-all cursor-pointer shadow-lg shadow-cyan-500/10"
                >
                  <Send className="w-4 h-4" /> Send Email
                </button>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* Footer Section */}
      <footer className="relative bg-slate-50 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800/80 text-slate-500 dark:text-slate-400 text-xs font-mono py-6 overflow-hidden">
        {/* Subtle accent glow line */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Bottom Bar: Copyright & System Tags */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-slate-500">
            <div className="flex items-center gap-2">
              <span>&copy; {new Date().getFullYear()} <strong className="text-slate-600 dark:text-slate-300 font-semibold">MD. Meherab Hossain Nowshad</strong>. All Rights Reserved.</span>
            </div>

            <div className="flex items-center gap-3 font-mono text-[10px] text-slate-500 dark:text-slate-400">
              <span className="px-2 py-0.5 rounded bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800/80">
                Postman &bull; Selenium &bull; Jest
              </span>
              <span className="text-cyan-700/80 dark:text-cyan-400/80 font-bold">
                SQA Engineering Portfolio
              </span>
            </div>
          </div>

        </div>
      </footer>

      {/* Project Breakdown Modal */}
      {selectedProject && (
        <div className="fixed inset-0 z-50 bg-slate-950/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-2xl max-w-2xl w-full p-6 space-y-6 max-h-[90vh] overflow-y-auto shadow-2xl relative">
            <div className="flex items-start justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-wider">Project QA Deep Dive</span>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mt-1">{selectedProject.title}</h3>
                <p className="text-xs font-mono text-slate-500 dark:text-slate-400">{selectedProject.role}</p>
              </div>
              <button
                onClick={() => setSelectedProject(null)}
                className="p-1.5 rounded-lg bg-slate-50 dark:bg-slate-950 text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-slate-800 cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300">{selectedProject.qaBreakdown?.overview || selectedProject.summary}</p>

            <div className="space-y-3 pt-2">
              <h4 className="text-xs font-bold font-mono text-cyan-700 dark:text-cyan-400 uppercase">Tested Scenarios &amp; Breakdown</h4>
              <div className="space-y-2">
                {selectedProject.qaBreakdown?.scenariosTested?.map((sc, idx) => (
                  <div key={idx} className="p-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs font-mono">
                    <span className="text-slate-900 dark:text-white font-bold block">{sc.area}:</span>
                    <span className="text-slate-500 dark:text-slate-400 text-[11px] mt-0.5 block">{sc.detail}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-4 border-t border-slate-200 dark:border-slate-800 flex justify-end">
              <button
                onClick={() => setSelectedProject(null)}
                className="px-4 py-2 rounded-lg bg-cyan-500 text-slate-950 font-bold text-xs cursor-pointer"
              >
                Close Breakdown
              </button>
            </div>
          </div>
        </div>
      )}

    </div>
  );
}