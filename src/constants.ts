import { Project, Domain, SkillCluster, Metric } from './types';

export const METRICS: Metric[] = [
  { label: 'Technical Context', value: '7+ Years', subtext: 'Systems Engineering' },
  { label: 'Impact Areas', value: '4', subtext: 'Critical Infrastructure' },
  { label: 'Discipline', value: 'Eng + PM', subtext: 'Hybrid Lead' },
  { label: 'Communication', value: 'Polyglot', subtext: 'EN / ES / DE' },
];

export const DOMAINS: Domain[] = [
  {
    id: 'infra',
    name: 'Infrastructure',
    description: 'Resilient off-grid systems for underserved regions.',
    iconName: 'building',
  },
  {
    id: 'health',
    name: 'Health',
    description: 'Accessible diagnostic & assistive technology.',
    iconName: 'heart',
  },
  {
    id: 'edu',
    name: 'Education',
    description: 'Scalable knowledge transfer platforms.',
    iconName: 'book',
  },
  {
    id: 'env',
    name: 'Environment',
    description: 'Sustainable resource loops & management.',
    iconName: 'leaf',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'mobile-unit',
    title: 'Mobile Utility Hub: Water & Energy',
    domain: 'Infrastructure',
    stage: 'Pilot',
    problem: 'Grid isolation prevents survival infrastructure (water/power) in remote zones.',
    solution: 'Engineered a modular, off-grid shipping container integrating solar arrays, atmospheric water generation, and hydroponics.',
    role: 'Lead Engineer & PM: Architected energy load balancing; Managed supply chain & deployment.',
    impact: 'Deployed to 2 communities; Sustaining 20 households daily with renewable utilities.',
    tags: ['Mechatronics', 'Solar Energy', 'Systems Design'],
  },
  {
    id: 'robotic-hand',
    title: 'Low-Cost Robotic Prosthetic',
    domain: 'Health',
    stage: 'Prototype',
    problem: 'Standard upper-limb prosthetics ($10k+) are inaccessible and unrepairable in developing regions.',
    solution: 'Designed an underactuated, 3D-printable robotic hand using tendon-driven mechanics for field maintainability.',
    role: 'R&D Lead: Defined mechanical compliance constraints and grasp algorithms.',
    impact: 'Reduced BOM cost to <$150 while retaining 80% of functional grasp patterns.',
    tags: ['Robotics', '3D Printing', 'Biomechanics'],
  },
  {
    id: 'lingo',
    title: 'Lingo: AI-Driven Language Acquisition',
    domain: 'Education',
    stage: 'MVP',
    problem: 'Generic language apps fail to correct contextual syntax errors in real-time conversation.',
    solution: 'Defined and shipped a conversational NLP agent providing instant, context-aware grammar feedback.',
    role: 'Product Lead: Owned roadmap, user stories, and sprint execution.',
    impact: 'Achieved +40% retention rate vs. market leaders during closed beta.',
    tags: ['AI/NLP', 'Product Strategy', 'React Native'],
  },
  {
    id: 'diagnostic-platform',
    title: 'Remote Medical Triage Platform',
    domain: 'Health',
    stage: 'Concept',
    problem: 'Specialist scarcity in rural areas causes critical delays in treatable diagnoses.',
    solution: 'Architected a cloud-based triage system ingesting IoT vital data to automate referral urgency.',
    role: 'Systems Architect: Designed HIPAA-compliant data flow and sensor integration standards.',
    impact: 'Projected 30% reduction in unnecessary hospital transfers via accurate remote sorting.',
    tags: ['System Architecture', 'Machine Learning', 'Healthcare IoT'],
  },
  {
    id: 'valle-stem',
    title: 'Valle STEM Lab Hardware',
    domain: 'Education',
    stage: 'Live',
    problem: 'Theoretical STEM curriculums fail to build engineering intuition in students.',
    solution: 'Developed and manufactured portable hardware kits mapped to a custom engineering curriculum.',
    role: 'Founder & Designer: Created hardware specs; Trained 15 instructor leads.',
    impact: 'Adopted by 5 schools (300+ students); Driven 40% increase in engineering major selection.',
    tags: ['Hardware Product', 'Curriculum Design', 'Training'],
  },
];

export const SKILLS: SkillCluster[] = [
  {
    category: 'Engineering & Systems',
    skills: ['Mechatronics System Design', 'CAD (SolidWorks)', 'Circuit Design', 'IoT Architecture', 'Robotics'],
  },
  {
    category: 'Product Leadership',
    skills: ['Technical Product Management', 'User-Centered Design', 'Roadmapping', 'Agile/Scrum', 'Data Analysis'],
  },
  {
    category: 'Tech Stack',
    skills: ['Python', 'C++', 'React/TypeScript', 'Machine Learning Concepts', 'Cloud Infrastructure'],
  },
  {
    category: 'Communication',
    skills: ['Technical Documentation', 'System Deconstruction', 'Public Speaking', 'Cross-functional Alignment'],
  },
];
