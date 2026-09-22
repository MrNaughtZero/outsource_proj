import gettingStartedImage from '../../assets/landing/images/scenario_start.png';
import directAccessImage from '../../assets/landing/images/scenario_direct_access.png';
import costImage from '../../assets/landing/images/scenario_cost.png';
import capacityImage from '../../assets/landing/images/scenario_capacity.png';
import accountabilityImage from '../../assets/landing/images/scenario_accountability.png';
import growthImage from '../../assets/landing/images/scenario_growth.png';

export type SupportScenario = {
  slug: string;
  label: string;
  cardCopy: string;
  titleStart: string;
  titleHighlight: string;
  titleEnd?: string;
  intro: string;
  image: string;
  imageAlt: string;
  steps: readonly [
    readonly [title: string, body: string],
    readonly [title: string, body: string],
    readonly [title: string, body: string],
  ];
  supportTitle: string;
  supportItems: readonly string[];
};

export const SUPPORT_SCENARIOS: readonly SupportScenario[] = [
  {
    slug: 'getting-started',
    label: 'Getting Started',
    cardCopy: 'Find your starting point',
    titleStart: 'Thinking about ',
    titleHighlight: 'outsourcing?',
    intro: 'Speak to our UK team about the right people and setup for your business.',
    image: gettingStartedImage,
    imageAlt: 'Finance professional considering outsourcing options',
    steps: [
      ['The situation', 'You want to outsource, but deciding which work to delegate, which people you need and how to get started can feel like a big step.'],
      ['How we help', 'We discuss your workload, priorities and existing processes, then help you choose the right roles and a practical starting point.'],
      ['The outcome', 'A clear starting plan, with dedicated people matched to your needs and managed support as you get started.'],
    ],
    supportTitle: 'Your starting point',
    supportItems: ['Discuss your needs', 'Choose your roles', 'Plan your start'],
  },
  {
    slug: 'direct-access',
    label: 'Direct Access',
    cardCopy: 'Speak to your people directly',
    titleStart: 'Tired of ',
    titleHighlight: 'communication ',
    titleEnd: 'going through layers?',
    intro: 'Work directly with your dedicated people, with calls, messages, tasks and files in one secure workspace.',
    image: directAccessImage,
    imageAlt: 'Finance professional speaking directly with a client',
    steps: [
      ['The situation', 'Getting answers means going through account managers or several different people, making everyday questions and updates take longer than they should.'],
      ['How we help', 'Call or message your dedicated people through the platform, or on WhatsApp from your mobile. We manage delivery and support behind the scenes.'],
      ['The outcome', 'A direct line to the people doing your work, with clearer communication and visibility over progress.'],
    ],
    supportTitle: 'Stay connected',
    supportItems: ['Direct messaging', 'UK calls', 'WhatsApp calls & messages', 'Tasks & files'],
  },
  {
    slug: 'cost',
    label: 'Cost',
    cardCopy: 'Manage hiring costs',
    titleStart: 'Need more people without the ',
    titleHighlight: 'UK hiring costs?',
    intro: 'Add dedicated finance professionals through our managed Dhaka office, with UK oversight and accountability.',
    image: costImage,
    imageAlt: 'Finance team under pressure from hiring costs',
    steps: [
      ['The situation', 'You need more accountants, bookkeepers or payroll specialists, but the cost of expanding your UK team limits how much support you can add.'],
      ['How we help', 'We match dedicated finance professionals to the roles and experience you need, with office facilities, supervision and ongoing support included in our managed model.'],
      ['The outcome', 'More people to share the workload at a manageable cost, with direct access and ongoing oversight.'],
    ],
    supportTitle: 'How we keep costs manageable',
    supportItems: ['Dhaka delivery', 'Equipped office', 'Managed support'],
  },
  {
    slug: 'capacity',
    label: 'Capacity',
    cardCopy: 'Ease the workload',
    titleStart: 'Busy finance team. ',
    titleHighlight: 'Growing backlog?',
    intro: 'Add experienced finance professionals to help clear outstanding work and ease pressure on your team.',
    image: capacityImage,
    imageAlt: 'Busy finance team managing a growing backlog',
    steps: [
      ['The situation', 'Month-end, bookkeeping, accounts preparation and payroll work are building up, leaving your existing team stretched and deadlines harder to manage.'],
      ['How we help', 'We add experienced finance professionals to your team, with skills matched to the work that needs attention and support where the pressure is greatest.'],
      ['The outcome', 'A more manageable workload, fewer outstanding tasks and more time for your existing people to focus on their priorities.'],
    ],
    supportTitle: 'Typical support roles',
    supportItems: ['Accountants', 'Bookkeepers', 'Payroll Specialists', 'Accounts Assistants'],
  },
  {
    slug: 'accountability',
    label: 'Accountability',
    cardCopy: 'Know who is responsible',
    titleStart: 'Want to outsource with ',
    titleHighlight: 'confidence?',
    intro: 'Your people work from our managed Dhaka office, with UK oversight and accountability.',
    image: accountabilityImage,
    imageAlt: 'Client and finance professional agreeing clear accountability',
    steps: [
      ['The situation', 'You want the advantages of outsourcing, with clarity about who is responsible for the work, how quality is managed and where to turn for support.'],
      ['How we help', 'You work directly with your dedicated people. We provide supervision, performance oversight and a UK point of contact to help resolve concerns.'],
      ['The outcome', 'Clear responsibility for delivery, visibility over the work and UK support when you need it.'],
    ],
    supportTitle: 'Built around accountability',
    supportItems: ['UK oversight', 'Managed office', 'Quality checks', 'Direct access'],
  },
  {
    slug: 'growth',
    label: 'Growth',
    cardCopy: 'Add people as you grow',
    titleStart: 'Is your business ',
    titleHighlight: 'outgrowing',
    titleEnd: ' your finance team?',
    intro: 'Add the people and skills you need as your business, workload and requirements grow.',
    image: growthImage,
    imageAlt: 'Growing finance team working together',
    steps: [
      ['The situation', 'Your business is expanding, but recruitment takes time and your current finance team cannot keep pace with the additional workload and changing demands.'],
      ['How we help', 'We help you add dedicated finance professionals and introduce new skills as your requirements develop, with managed support as your team expands.'],
      ['The outcome', 'A finance team that can support your next stage of growth, with the right mix of people and experience.'],
    ],
    supportTitle: 'Ways to grow',
    supportItems: ['Add people', 'Broaden skills', 'Expand your team'],
  },
];

export const DEFAULT_SUPPORT_SCENARIO = SUPPORT_SCENARIOS[0];

export function findSupportScenario(slug?: string) {
  return SUPPORT_SCENARIOS.find((scenario) => scenario.slug === slug) ?? DEFAULT_SUPPORT_SCENARIO;
}
