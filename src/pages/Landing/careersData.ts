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
    tag: 'Finance delivery centre',
    desc: 'Opportunities across accounting, bookkeeping, payroll, accounts support and finance operations.',
    roles: ['Accountant / Senior Accountant', 'Bookkeeper / Senior Bookkeeper', 'Payroll Specialist', 'Finance Executive'],
  },
  {
    city: 'Manchester, UK',
    tag: 'UK headquarters',
    desc: 'Opportunities across client services, business development, marketing, operations and product support.',
    roles: ['Client Account Manager', 'Business Development Manager', 'Marketing Manager', 'Product & Operations Support'],
  },
];

export const AFTER = [
  { n: 1, label: 'Register your interest' },
  { n: 2, label: 'We review your experience' },
  { n: 3, label: 'We contact you when a role fits' },
  { n: 4, label: 'Interview and next steps' },
];
