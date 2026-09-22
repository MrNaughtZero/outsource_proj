import { Maximize2, Eye, KeyRound, ThumbsUp } from 'lucide-react';
import { IconHire, IconPod, IconProject } from './solutionsIcons';

// Shared content for the Engagement Models page (desktop + mobile).
export const MODELS = [
  {
    title: 'Dedicated Hire',
    desc: 'A full-time finance professional in your team.',
    price: 'From £11.50 per hour',
    icon: IconHire,
    points: ['Dedicated exclusively to you', 'Integrated into your team', 'Full-time dedicated capacity', 'Client-aligned support'],
  },
  {
    title: 'Dedicated Pod',
    desc: 'A small team with complementary skills.',
    price: 'Custom pricing',
    icon: IconPod,
    points: ['Complementary multi-skill team', 'Coordinated team delivery', 'Flexible team structure', 'Scalable capacity'],
  },
  {
    title: 'Project Support',
    desc: 'Defined support for specific projects.',
    price: 'Custom pricing',
    icon: IconProject,
    points: ['Specialist expertise', 'Defined scope & outcome', 'Flexible project capacity', 'Fast mobilisation'],
  },
];

export const ASSURANCES = [
  { title: 'Flexible', desc: 'Scale up or down as needed.', icon: Maximize2 },
  { title: 'Transparent', desc: 'Clear pricing and visibility.', icon: Eye },
  { title: 'Secure', desc: 'Your data is safe with us.', icon: KeyRound },
  { title: 'Managed', desc: 'We handle the complexity.', icon: ThumbsUp },
];
