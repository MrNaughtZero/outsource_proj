import futureIcon from '../../assets/landing/images/icons/career_future.svg';
import growthIcon from '../../assets/landing/images/icons/career_growth.svg';
import cultureIcon from '../../assets/landing/images/icons/career_culture.svg';
import learningIcon from '../../assets/landing/images/icons/career_learning.svg';
import globalIcon from '../../assets/landing/images/icons/career_global.svg';
import workIcon from '../../assets/landing/images/icons/career_work.svg';

// Shared content for the Careers page (desktop + mobile).
export const HIGHLIGHTS = [
  { title: 'Future opportunities', icon: futureIcon },
  { title: 'Career growth', icon: growthIcon },
  { title: 'Supportive culture', icon: cultureIcon },
  { title: 'Continuous learning', icon: learningIcon },
  { title: 'Global exposure', icon: globalIcon },
  { title: 'Meaningful work', icon: workIcon },
];

export const LOCATIONS = [
  {
    city: 'Dhaka, Bangladesh',
    tag: 'Delivery centre and talent hub',
    desc: 'Roles across finance operations, accounts support, payroll, bookkeeping and data services.',
    roles: [
      'Accounts Assistant',
      'Bookkeepers',
      'Payroll Specialist',
      'Accounts Receivable',
      'Data Entry Operator',
      'Finance Executive',
    ],
  },
  {
    city: 'Manchester, UK',
    tag: 'HQ and growth hub',
    desc: 'Roles across client services, sales, marketing, operations and product/development support.',
    roles: [
      'Sr. Account Manager',
      'Marketing Manager',
      'Client Services Manager',
      'Business Development',
      'Product / Development Support',
      'Operations Support',
    ],
  },
];

export const AFTER = [
  { n: 1, label: 'Register your interest' },
  { n: 2, label: 'We review your experience' },
  { n: 3, label: 'We contact you about suitable roles' },
  { n: 4, label: 'Interview and next steps' },
];
