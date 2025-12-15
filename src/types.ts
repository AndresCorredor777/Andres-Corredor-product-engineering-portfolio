export interface Project {
  id: string;
  title: string;
  domain: string;
  stage: 'Concept' | 'Prototype' | 'MVP' | 'Pilot' | 'Live';
  problem: string;
  solution: string;
  role: string;
  impact: string;
  tags: string[];
}

export interface Domain {
  id: string;
  name: string;
  description: string;
  iconName: string;
}

export interface SkillCluster {
  category: string;
  skills: string[];
}

export interface Metric {
  label: string;
  value: string;
  subtext?: string;
}