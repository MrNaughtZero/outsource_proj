import financeProfessional from '../../assets/landing/images/team_finance_professional_may_2026.png';
import financePod from '../../assets/landing/images/team_finance_pod_may_2026.png';
import enterpriseTeam from '../../assets/landing/images/team_enterprise_may_2026.png';

export const TEAM_OPTIONS = [
  {
    title: 'Dedicated Finance Professional',
    description: 'A dedicated finance professional working as part of your team.',
    price: 'From £9.50 per hour',
    image: financeProfessional,
    points: [
      'Dedicated exclusively to you',
      'Works as part of your team',
      'Full-time finance capacity',
      'Managed delivery & continuity',
    ],
  },
  {
    title: 'Dedicated Finance Pod',
    description: 'A small outsourced finance team with complementary skills.',
    price: 'Tailored pricing',
    image: financePod,
    points: [
      'Complementary finance skills',
      'Coordinated team delivery',
      'Flexible team structure',
      'Scalable finance capacity',
    ],
  },
  {
    title: 'Enterprise Finance Team',
    description: 'A larger outsourced finance team with additional review, management and oversight.',
    price: 'Tailored pricing',
    image: enterpriseTeam,
    points: [
      'Dedicated account lead',
      'Senior review & delivery support',
      'Scalable multi-skill team',
      'Tailored Workspace dashboards & reporting',
    ],
  },
] as const;

