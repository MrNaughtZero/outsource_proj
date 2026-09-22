import talkIcon from '../../../assets/landing/images/icons/talktous.png';
import onboardIcon from '../../../assets/landing/images/icons/oboard.png';
import workIcon from '../../../assets/landing/images/icons/collab.png';

const STEPS = [
  {
    n: 1,
    icon: talkIcon,
    title: 'Talk to Us',
    label: 'Connect',
    desc: 'Share your goals, hiring needs, and timeline. We identify the right support for your business.',
  },
  {
    n: 2,
    icon: onboardIcon,
    title: 'Onboard',
    label: 'Onboard',
    desc: 'Your new hire is integrated into your workflow and expectations. We set everything up for a smooth, productive start.',
  },
  {
    n: 3,
    icon: workIcon,
    title: 'Get to Work',
    label: 'Collaborate & Track',
    desc: 'Start quickly, stay aligned, and keep progress moving. Clear communication, visibility, and accountability come built in.',
  },
];

export default function ThreeStepProcess() {
  return (
    <section className="relative overflow-hidden bg-brand-purple-dark py-20 font-poppins">
      <div className="absolute inset-0 bg-gradient-to-b from-brand-purple/20 to-transparent" />
      <div className="relative mx-auto max-w-4xl px-6 lg:px-10">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-3xl font-semibold text-white md:text-4xl">
            Our <span className="text-brand-lime">3-Step</span> Process
          </h2>
          <p className="mt-3 text-sm text-white/70">Seamless Team Integration</p>
        </div>

        {/* Timeline */}
        <ol className="relative mt-14 space-y-10">
          {/* vertical connector */}
          <span
            aria-hidden
            className="absolute left-1/2 top-4 bottom-4 hidden w-px -translate-x-1/2 bg-white/15 md:block"
          />
          {STEPS.map((step, i) => {
            const iconLeft = i % 2 === 0; // steps 1 & 3: icon left, text right
            return (
              <li
                key={step.n}
                className="group relative grid items-center gap-4 md:grid-cols-[1fr_auto_1fr]"
              >
                {/* Icon tile */}
                <div
                  className={`flex justify-center md:justify-end ${
                    iconLeft ? 'md:order-1' : 'md:order-3'
                  }`}
                >
                  <div className="flex h-24 w-32 items-center justify-center rounded-2xl bg-white/5 ring-1 ring-white/10 transition-all duration-300 md:group-hover:bg-white/10 md:group-hover:ring-brand-lime/40">
                    <img src={step.icon} alt="" className="h-12 w-12 object-contain" />
                  </div>
                </div>

                {/* Number node */}
                <div className="order-first flex justify-center md:order-2">
                  <span
                    className="flex h-9 w-9 items-center justify-center rounded-full text-sm font-bold ring-4 ring-brand-purple-dark transition-all duration-300 bg-brand-lime text-brand-purple-dark md:border md:border-white/25 md:bg-brand-purple md:text-white/80 md:group-hover:border-transparent md:group-hover:bg-brand-lime md:group-hover:text-brand-purple-dark md:group-hover:shadow-[0_0_18px_rgba(204,240,67,0.6)]"
                  >
                    {step.n}
                  </span>
                </div>

                {/* Text: title by default, description callout on hover */}
                <div className={iconLeft ? 'md:order-3' : 'md:order-1 md:text-right'}>
                  <h3 className="text-lg font-semibold text-white md:group-hover:hidden">
                    {step.title}
                  </h3>
                  <div className="mt-3 rounded-xl border border-white/25 bg-brand-purple-dark/60 p-4 text-left md:mt-0 md:hidden md:group-hover:block">
                    <p className="text-sm leading-relaxed text-white/80">{step.desc}</p>
                    {/* Action label — desktop hover only (mobile shows title + desc) */}
                    <p className="mt-3 hidden text-sm font-semibold text-brand-lime md:block">
                      {step.label}
                    </p>
                  </div>
                </div>
              </li>
            );
          })}
        </ol>
      </div>
    </section>
  );
}
