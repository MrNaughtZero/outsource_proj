import { Fragment } from 'react';
import { Link } from 'react-router-dom';
import homeHero from '../../assets/landing/images/home_hero_may_2026.png';
import mobileHomeHero from '../../assets/landing/images/mobile_home_hero.png';
import accountants from '../../assets/landing/images/home_accountants.png';
import payroll from '../../assets/landing/images/home_payroll_may_2026.png';
import bookkeepers from '../../assets/landing/images/home_bookkeepers.png';
import virtualCfo from '../../assets/landing/images/home_virtual_CFO.png';
import platform from '../../assets/landing/images/platform_002_may_2026.png';
import platformMessages from '../../assets/landing/images/platform_messages.png';
import backgroundTexture from '../../assets/landing/images/bg_texture.png';
import hqIcon from '../../assets/landing/home/hq.svg';
import shieldIcon from '../../assets/landing/home/shield-check.svg';
import eyeIcon from '../../assets/landing/home/eye.svg';
import messageIcon from '../../assets/landing/home/message-chat.svg';
import tellUsIcon from '../../assets/landing/home/tell-us.png';
import matchTalentIcon from '../../assets/landing/home/match-talent.png';
import addTeamIcon from '../../assets/landing/home/add-team.png';
import deliveryIcon from '../../assets/landing/home/delivery.svg';
import rolesPlusIcon from '../../assets/landing/home/roles-plus.svg';
import workflowMobile from '../../assets/landing/home/workflow-mobile.svg';
import workflowEllipseWide from '../../assets/landing/home/workflow-ellipse-wide.svg';
import workflowEllipseMiddle from '../../assets/landing/home/workflow-ellipse-middle.svg';
import workflowEllipseOuter from '../../assets/landing/home/workflow-ellipse-outer.svg';
import manageTasksIcon from '../../assets/landing/home/manage-tasks.svg';
import shareFilesIcon from '../../assets/landing/home/share-files.svg';
import trackProgressIcon from '../../assets/landing/home/track-progress.svg';
import liveUpdatesIcon from '../../assets/landing/home/live-updates.svg';
import phoneIcon from '../../assets/landing/home/phone.svg';
import whatsappIcon from '../../assets/landing/home/whatsapp.svg';
import saveIcon from '../../assets/landing/home/save.svg';
import ReliefSection from './components/ReliefSection';

const assurances = [
  { icon: hqIcon, title: 'Manchester HQ', copy: 'UK standards. Clear accountability' },
  { icon: messageIcon, title: 'Direct Access', copy: 'Talk directly to the people doing the work' },
  { icon: shieldIcon, title: 'Managed Delivery', copy: 'Clear ownership. Consistent delivery' },
  { icon: eyeIcon, title: 'Complete Visibility', copy: 'Tasks, updates and progress in one workspace' },
] as const;

const roles = [
  { image: accountants, title: 'Accountants', mobileTitle: 'Accountants', to: '/roles/accountants' },
  { image: bookkeepers, title: 'Bookkeepers', mobileTitle: 'Bookkeepers', to: '/roles/bookkeepers' },
  { image: payroll, title: 'Payroll Specialists', mobileTitle: 'Payroll Specialist', to: '/roles/payroll-specialists' },
  { image: virtualCfo, title: 'Virtual CFOs', mobileTitle: 'Virtual CFOs', to: '/roles/virtual-cfos' },
] as const;

const onboardingSteps = [
  { image: tellUsIcon, label: 'Tell us what you need', className: 'home-step-tell', imageClassName: 'lg:h-[86px] lg:w-[120px]' },
  { image: matchTalentIcon, label: 'We match & test the right people', className: 'home-step-match', imageClassName: 'lg:h-[89px] lg:w-[139px]' },
  { image: addTeamIcon, label: 'We help you onboard your team members', className: 'home-step-add', imageClassName: 'lg:h-[92px] lg:w-[87px]' },
  { image: deliveryIcon, label: 'We manage delivery end-to-end', className: 'home-step-deliver', imageClassName: 'lg:h-[70px] lg:w-[76px]' },
] as const;

const platformFeatures = [
  { icon: manageTasksIcon, title: 'Manage Tasks' },
  { icon: shareFilesIcon, title: 'Share Files' },
  { icon: trackProgressIcon, title: 'Track Progress' },
  { icon: liveUpdatesIcon, title: 'View updates' },
] as const;

const performanceFeatures = [
  { icon: phoneIcon, label: 'Call your people on a UK number' },
  { icon: whatsappIcon, label: 'WhatsApp messages and calls from your mobile' },
  { icon: saveIcon, label: 'Shared files kept in one secure workspace' },
] as const;

function Heading({ children, className = '' }: { children: React.ReactNode; className?: string }) {
  return <h2 className={`text-[30px] font-medium leading-9 lg:text-[42px] lg:leading-[48px] ${className}`}>{children}</h2>;
}

function AssuranceSection() {
  return (
    <section className="home-assurances bg-gradient-to-b from-[#180a34] to-brand-purple-dark px-10 py-[60px] lg:px-0 lg:py-[120px]">
      <div className="mx-auto flex max-w-[992px] flex-col gap-[60px]">
        <Heading className="lg:text-center">
          Outsourcing. <span className="text-brand-lime">Without Compromise.</span>
        </Heading>
        <div className="flex flex-col gap-5 lg:grid lg:grid-cols-[repeat(4,230px)] lg:gap-6">
          {assurances.map((item, index) => (
            <Fragment key={item.title}>
              <article className="relative flex gap-5 py-0 lg:flex-col lg:items-center lg:gap-6 lg:text-center">
                <div className="flex h-[50px] w-[50px] shrink-0 items-center justify-center">
                  <img src={item.icon} alt="" className={index === 0 ? 'h-9 w-11' : 'h-[50px] w-[50px]'} />
                </div>
                <div className="flex flex-col gap-3 lg:gap-4">
                  <h3 className="text-lg font-bold leading-6 lg:text-2xl lg:leading-6">{item.title}</h3>
                  <p className="text-xs leading-[18px] text-brand-periwinkle lg:text-lg lg:leading-6">{item.copy}</p>
                </div>
                {index < assurances.length - 1 && <span aria-hidden className="absolute inset-y-0 -right-3 hidden border-r border-white/30 lg:block" />}
              </article>
              {index < assurances.length - 1 && <span aria-hidden className="h-0 w-full border-b border-white/30 lg:hidden" />}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function RolesSection() {
  return (
    <section className="home-roles bg-brand-purple-mid px-10 py-[60px] lg:px-0 lg:py-[100px]">
      <div className="mx-auto max-w-[992px]">
        <div className="space-y-4">
          <Heading><span className="text-brand-lime">Extend</span> Your Finance Team</Heading>
          <p className="text-lg font-light leading-6">You get the person. We provide the standards, secure environment and managed delivery behind them.</p>
        </div>
        <div className="mt-[60px] grid grid-cols-1 gap-5 md:grid-cols-2 lg:mt-14 lg:grid-cols-4 lg:gap-6">
          {roles.map((role) => (
            <Link key={role.title} to={role.to} className="flex h-[103px] min-w-0 items-center gap-5 overflow-hidden rounded-lg bg-[#f9f7fd] p-2 pr-5 lg:h-[290px] lg:flex-col lg:items-stretch lg:gap-0 lg:border-0 lg:p-0 lg:ring-2 lg:ring-inset lg:ring-brand-lavender">
              <div className="h-[87px] w-[85px] shrink-0 lg:h-[246px] lg:w-full lg:flex-none lg:px-3">
                <img src={role.image} alt={role.title} className="h-full w-full object-contain object-bottom lg:object-center" />
              </div>
              <div className="flex min-w-0 flex-1 items-center justify-between lg:h-11 lg:flex-none lg:px-6 lg:pb-6">
                <h3 className="text-left text-lg font-medium leading-6 text-brand-purple-mid lg:text-xl lg:leading-5">
                  <span className="lg:hidden">{role.mobileTitle}</span>
                  <span className="hidden lg:inline">{role.title}</span>
                </h3>
                <img src={rolesPlusIcon} alt="" className="h-6 w-6 shrink-0 lg:hidden" />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}

function OnboardingSection() {
  return (
    <section className="home-onboarding h-[860px] overflow-hidden px-10 py-[60px] lg:h-[555px] lg:px-0 lg:pb-0 lg:pt-[120px]">
      <div className="mx-auto max-w-[992px] text-center">
        <Heading>
          <span className="lg:hidden"><span className="text-brand-lime">People.</span> Onboarded Seamlessly.</span>
          <span className="hidden lg:inline">Your <span className="text-brand-lime">Finance Team</span>. Onboarded Seamlessly.</span>
        </Heading>
        <p className="mt-3 text-lg font-light leading-6">
          <span className="lg:hidden">Onboarding in simple terms</span>
          <span className="hidden lg:inline">How your team gets started</span>
        </p>
        <div className="home-workflow relative mx-auto mt-12 h-[496px] w-full max-w-[992px] lg:left-1/2 lg:mt-[60px] lg:h-[291px] lg:w-[1218px] lg:max-w-none lg:-translate-x-1/2">
          <div aria-hidden className="home-workflow-rings pointer-events-none absolute inset-0">
            <img src={workflowMobile} alt="" className="home-workflow-ring-mobile h-[478px] w-full lg:hidden" />
            <img src={workflowEllipseWide} alt="" className="home-workflow-ring-wide hidden max-w-none lg:block" />
            <img src={workflowEllipseMiddle} alt="" className="home-workflow-ring-middle hidden max-w-none lg:block" />
            <img src={workflowEllipseOuter} alt="" className="home-workflow-ring-outer hidden max-w-none lg:block" />
          </div>
          {onboardingSteps.map((step) => (
            <div key={step.label} className={`home-workflow-step absolute flex w-[193px] flex-col items-center gap-3 lg:w-[150px] ${step.className}`}>
              <img src={step.image} alt="" className={`h-[60px] w-auto max-w-[120px] object-contain lg:max-w-none ${step.imageClassName}`} />
              <p className="text-center text-lg leading-6">{step.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function PlatformSection() {
  return (
    <section className="home-platform bg-brand-purple-dark px-10 py-[60px] lg:bg-transparent lg:px-0 lg:pb-0 lg:pt-[60px]">
      <div className="mx-auto max-w-[992px] text-center">
        <Heading>One <span className="text-brand-lime">Platform,</span> Total Visibility</Heading>
        <p className="mt-3 text-lg font-light leading-6">Your people, tasks, files and updates in one place.</p>
        <div className="relative left-1/2 mt-10 aspect-[992/503] w-[367px] max-w-none -translate-x-1/2 max-[379px]:w-[calc(100vw-40px)] lg:left-auto lg:mt-[60px] lg:w-full lg:translate-x-0">
          <img src={platform} alt="Outsource workspace dashboard" className="absolute left-0 top-[7.43%] h-[85.08%] w-full object-contain" />
        </div>
        <div className="mx-auto mt-10 grid max-w-[520px] grid-cols-4 gap-x-3 gap-y-5 max-[380px]:grid-cols-2 lg:mt-[60px] lg:max-w-none lg:flex lg:flex-nowrap lg:items-stretch lg:gap-3">
          {platformFeatures.map((feature, index) => (
            <Fragment key={feature.title}>
              <article className="relative flex min-w-0 flex-col items-center gap-2 lg:flex-[1_0_0] lg:gap-3 lg:px-[30px]">
                <img src={feature.icon} alt="" className="h-10 w-10 object-contain lg:h-[50px] lg:w-[50px]" />
                <h3 className="text-xs font-normal leading-[18px] lg:w-[136px] lg:text-lg lg:font-bold lg:leading-6 lg:text-brand-lime">{feature.title}</h3>
              </article>
              {index < platformFeatures.length - 1 && (
                <span aria-hidden className="relative hidden w-0 shrink-0 self-stretch lg:block">
                  <span className="absolute inset-y-0 left-[-0.5px] border-r border-white/30" />
                </span>
              )}
            </Fragment>
          ))}
        </div>
      </div>
    </section>
  );
}

function PerformanceSection() {
  return (
    <section className="home-performance relative overflow-hidden bg-brand-purple-dark px-10 pb-[60px] lg:h-[796px] lg:bg-transparent lg:px-0 lg:pb-[120px] lg:pt-[60px]">
      <img src={backgroundTexture} alt="" className="pointer-events-none absolute inset-0 hidden h-full w-full object-cover opacity-60 lg:block" />
      <div className="relative mx-auto flex max-w-[992px] flex-col items-center gap-10 lg:h-full lg:flex-row lg:items-end lg:justify-between lg:gap-12">
        <div className="w-full lg:flex lg:w-[398px] lg:flex-col lg:gap-8 lg:py-8">
          <Heading className="text-center lg:text-left">
            <span className="block whitespace-nowrap"><span className="text-brand-lime">Direct access</span> to your</span>
            <span className="block">people</span>
          </Heading>
          <p className="mt-6 text-lg font-light leading-6 lg:mt-0">Call or message the people doing your work through our secure workspace, or use WhatsApp directly from your mobile.</p>
          <div className="mt-6 space-y-4 lg:mt-0">
            {performanceFeatures.map((feature, index) => (
              <div key={feature.label} className="flex items-center gap-3 rounded-lg border-2 border-brand-purple/50 bg-gradient-to-r from-brand-purple-mid/50 to-[rgba(45,18,92,0.5)] p-4 lg:gap-5 lg:px-6 lg:py-4">
                <img src={feature.icon} alt="" className="h-8 w-8 shrink-0" />
                <p className={`text-lg font-medium leading-6 lg:leading-[30px] ${index === 0 ? 'lg:whitespace-nowrap' : 'lg:w-[298px]'}`}>{feature.label}</p>
              </div>
            ))}
          </div>
        </div>
        <img src={platformMessages} alt="Outsource workspace conversation and video call" className="w-[367px] max-w-[117%] object-contain max-[379px]:w-[calc(100vw-40px)] lg:h-[616px] lg:w-[540px]" />
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="home-page bg-brand-purple-dark text-white">
      <section className="home-hero relative flex h-[650px] overflow-hidden px-10 pb-[60px] pt-[177px] lg:h-[819px] lg:px-0 lg:pb-0 lg:pt-0">
        <div className="home-hero-glow absolute inset-0" />
        <picture className="home-hero-picture absolute inset-y-0 block overflow-hidden">
          <source media="(max-width: 1023px)" srcSet={mobileHomeHero} />
          <img src={homeHero} alt="" className="home-hero-art pointer-events-none absolute max-w-none" />
        </picture>
        <div className="home-hero-shade pointer-events-none absolute inset-0" />
        <div className="relative z-10 mx-auto flex w-full max-w-[992px] items-start lg:pt-[196px]">
          <div className="w-full lg:w-[677px]">
            <div className="flex flex-col gap-[18px]">
              <h1 className="home-hero-title text-[36px] font-medium leading-[42px] tracking-[-0.54px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-0.96px]">
                <span className="block text-brand-lime">Outsourced</span>
                <span className="home-hero-finance block">Finance Professionals</span>
              </h1>
              <p className="text-lg font-bold leading-6 text-brand-periwinkle lg:text-[30px] lg:leading-9">for UK Accountancy Firms &amp; Businesses</p>
            </div>
            <div className="mt-8 text-lg font-light leading-6 lg:text-2xl lg:leading-normal">
              <p>Dedicated accountants, bookkeepers and payroll specialists who work as part of your team - with <span className="text-brand-lime">direct access, managed delivery</span> and <span className="text-brand-lime">complete visibility.</span></p>
              <p className="mt-6 font-extralight italic">From £11.50 per hour.</p>
            </div>
            <Link to="/contact" className="mt-8 inline-flex rounded-lg border border-brand-periwinkle px-8 py-4 text-lg transition-colors hover:bg-white hover:text-brand-purple-mid lg:mt-[50px]">Book a call</Link>
          </div>
        </div>
      </section>
      <AssuranceSection />
      <RolesSection />
      <div className="home-product-sections">
        <OnboardingSection />
        <PlatformSection />
        <PerformanceSection />
      </div>
      <ReliefSection fluidMobile />
    </div>
  );
}
