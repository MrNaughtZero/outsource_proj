import { useState } from 'react';
import { Link } from 'react-router-dom';
import heroRings from '../../assets/landing/images/about_02.png';
import phoneTalkIcon from '../../assets/landing/contact/phone-talk.svg';
import emailIcon from '../../assets/landing/contact/email.svg';
import phoneIcon from '../../assets/landing/contact/phone.svg';
import locationIcon from '../../assets/landing/contact/location.svg';
import checkboxIcon from '../../assets/landing/contact/checkbox.svg';

export default function Contact() {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    message: '',
    agree: false,
  });
  const update = (k: keyof typeof form, v: string | boolean) =>
    setForm((f) => ({ ...f, [k]: v }));
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to contact endpoint
    console.log('Contact enquiry:', form);
  };

  const fieldClass =
    'block h-[42px] w-full rounded-lg bg-brand-lavender px-4 py-2 text-xs font-light text-black placeholder:text-black/50 outline-none focus:ring-2 focus:ring-brand-lime';

  return (
    <div className="contact-page bg-brand-purple-dark font-poppins text-white lg:font-dmsans">
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden bg-[radial-gradient(ellipse_at_top,#411c80_0%,#301265_50%,#1f0849_100%)] lg:bg-none">
        <div className="relative mx-auto grid h-full w-full -translate-y-[10px] items-center gap-6 px-10 pt-[139px] lg:w-[992px] lg:translate-y-0 lg:grid-cols-[492px_481px] lg:px-0 lg:pb-0 lg:pt-[180px]">
          <div>
            <h1 className="figma-heading-gradient figma-heading-contact text-[36px] font-medium leading-[42px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-.64px]">
              <span className="text-white lg:text-brand-lime">Contact</span> Us
            </h1>
            <p className="mt-3 max-w-md text-xs font-light leading-[18px] text-white lg:mt-8 lg:max-w-none lg:text-2xl lg:leading-[normal]">
              <span className="lg:hidden">
                We'd love to hear from you. Whether you want to book a call or send us a message, our
                team will get back to you as soon as possible.
              </span>
              <span className="hidden lg:inline">
                Looking to extend your finance team? Speak to our UK team or send us a message.
              </span>
            </p>
          </div>
          {/* Brand ring graphic */}
          <div className="hidden lg:block">
            <img src={heroRings} alt="" aria-hidden className="h-[274px] w-[481px] object-contain" />
          </div>
        </div>
      </section>

      {/* ===== Cards + form ===== */}
      <section className="mx-auto bg-gradient-to-b from-[#2d1160] to-[rgba(25,10,54,0)] px-10 pb-12 pt-12 lg:bg-none lg:px-0 lg:pb-[120px] lg:pt-[30px]">
        <div className="grid -translate-y-[66px] gap-0 lg:mx-auto lg:h-[687px] lg:w-[992px] lg:translate-y-0 lg:grid-cols-[401px_566px] lg:grid-rows-[255px_408px] lg:gap-6">
          {/* Mobile-only: Book a call + "or send a message" divider */}
          <div className="lg:hidden">
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-[55px] w-full items-center justify-center rounded-lg bg-brand-lime text-lg font-medium text-brand-purple-mid"
            >
              Book a call
            </a>
            <div className="my-8 flex items-center gap-2 text-lg font-extralight leading-6 text-white">
              <span className="h-px flex-1 bg-white/15" />
              or send a message
              <span className="h-px flex-1 bg-white/15" />
            </div>
          </div>

          {/* Form — right column on desktop (spans both rows); no card chrome on mobile */}
          <div className="lg:col-start-2 lg:row-start-1 lg:row-span-2 lg:flex lg:h-[687px] lg:flex-col lg:gap-[42px] lg:rounded-lg lg:border-2 lg:border-brand-purple/80 lg:bg-gradient-to-b lg:from-brand-purple-mid/80 lg:to-[#3b187b]/20 lg:px-[30px] lg:py-10">
            <div className="hidden lg:block">
              <h2 className="text-[30px] font-bold leading-6 text-brand-lime">Send us a message</h2>
              <p className="mt-6 text-lg leading-6 text-white">
                Send us your enquiry and our team will get back to you.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-3 lg:mt-0 lg:flex lg:flex-col lg:gap-6 lg:space-y-0">
              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-4 lg:h-[45px] lg:items-center">
                  <input
                    className={fieldClass}
                    placeholder="First name*"
                    required
                    value={form.firstName}
                    onChange={(e) => update('firstName', e.target.value)}
                  />
                  <input
                    className={fieldClass}
                    placeholder="Last name*"
                    required
                    value={form.lastName}
                    onChange={(e) => update('lastName', e.target.value)}
                  />
                </div>
                <input
                  type="email"
                  className={fieldClass}
                  placeholder="Email*"
                  required
                  value={form.email}
                  onChange={(e) => update('email', e.target.value)}
                />
                <input
                  type="tel"
                  className={fieldClass}
                  placeholder="Contact number*"
                  required
                  value={form.phone}
                  onChange={(e) => update('phone', e.target.value)}
                />
                <input
                  className={fieldClass}
                  placeholder="Company*"
                  required
                  value={form.company}
                  onChange={(e) => update('company', e.target.value)}
                />
                <textarea
                  className={`${fieldClass} min-h-[136px] resize-y leading-6 lg:resize-none`}
                  placeholder="How can we help?*"
                  required
                  value={form.message}
                  onChange={(e) => update('message', e.target.value)}
                />
              </div>
              <label className="flex items-center gap-2 pt-3 text-xs font-light leading-[18px] text-white lg:pt-0">
                <span className="relative h-6 w-6 shrink-0"><input
                  type="checkbox"
                  required
                  className="peer absolute inset-0 h-6 w-6 cursor-pointer appearance-none"
                  checked={form.agree}
                  onChange={(e) => update('agree', e.target.checked)}
                /><img src={checkboxIcon} alt="" className="pointer-events-none h-6 w-6 peer-checked:rounded peer-checked:bg-brand-lime" /></span>
                <span>
                  I agree to the{' '}
                  <Link to="/privacy" className="text-brand-lime underline">
                    Privacy policy
                  </Link>{' '}
                  and consent to being contacted about my enquiry.
                </span>
              </label>
              <button
                type="submit"
                className="mt-3 h-[55px] w-full rounded-lg border border-brand-periwinkle text-lg text-white lg:mt-0"
              >
                <span className="lg:hidden">Submit</span><span className="hidden lg:inline">Send message</span>
              </button>
            </form>
          </div>

          {/* Prefer to talk — desktop card only (left column, top row) */}
          <div className="hidden rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/80 to-brand-purple-mid/20 px-[30px] py-10 lg:col-start-1 lg:row-start-1 lg:flex lg:h-[255px] lg:flex-col lg:gap-9">
            <div className="flex items-start gap-6">
              <img src={phoneTalkIcon} alt="" className="h-8 w-8" />
              <div className="flex flex-1 flex-col gap-2"><h2 className="text-[30px] font-bold leading-6 text-brand-lime">Prefer to talk?</h2>
              <p className="text-lg leading-6 text-white">
                Book a 15-minuite call to discuss your needs.
              </p></div>
            </div>
            <a
              href="https://cal.com"
              target="_blank"
              rel="noreferrer"
              className="flex h-[55px] w-full items-center justify-center rounded-lg bg-brand-lime text-lg font-medium text-brand-purple-mid"
            >
              Book a Call
            </a>
          </div>

          {/* Contact details — left column, bottom row */}
          <div className="relative top-[49px] rounded-lg border-2 border-brand-purple/80 bg-gradient-to-b from-brand-purple-mid/80 to-[#3b187b]/20 px-[22px] py-7 lg:top-0 lg:col-start-1 lg:row-start-2 lg:h-[408px] lg:px-[30px] lg:py-10">
            <h2 className="text-2xl leading-[30px] text-white lg:text-[30px] lg:leading-6">Contact details</h2>
            <div className="mt-9 space-y-3">
              <div className="flex items-start gap-4 border-b border-white/10 pb-3">
                <img src={emailIcon} alt="" className="h-8 w-8 shrink-0" />
                <div>
                  <p className="text-lg leading-6 text-white">Email</p>
                  <a
                    href="mailto:hello@outsource.com"
                    className="mt-2 block text-lg leading-6 text-brand-lime hover:underline"
                  >
                    hello@outsource.com
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 border-b border-white/10 pb-3">
                <img src={phoneIcon} alt="" className="h-8 w-8 shrink-0" />
                <div>
                  <p className="text-lg leading-6 text-white">Phone</p>
                  <a
                    href="tel:01618705253"
                    className="mt-2 block text-lg leading-6 text-brand-lime hover:underline"
                  >
                    0161 870 5253
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4">
                <img src={locationIcon} alt="" className="h-8 w-8 shrink-0" />
                <div>
                  <p className="text-lg leading-6 text-white">HQ Manchester, UK</p>
                  <p className="mt-2 text-lg leading-6 text-brand-lime">
                    <span className="lg:hidden">
                      321 Bury Road,
                      <br />
                      Manchester,
                      <br />
                      M45 8GW
                    </span>
                    <span className="hidden lg:inline">
                      221 Bury New Road
                      <br />
                      Manchester
                      <br />
                      M45 8GW
                    </span>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
