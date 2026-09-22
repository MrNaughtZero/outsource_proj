import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import paperclipIcon from '../../assets/landing/career/paperclip.svg';
import consentCheckboxIcon from '../../assets/landing/career/consent-checkbox.svg';
import selectCaretIcon from '../../assets/landing/career/select-caret.svg';

// Roles are dependent on the chosen location.
const ROLES_BY_LOCATION: Record<string, string[]> = {
  'Manchester, United Kingdom': ['Senior Account Manager', 'Client Services Manager', 'Marketing Manager'],
  'Dhaka, Bangladesh': ['Accountant', 'Payroll Specialist', 'Bookkeeper', 'CFO'],
};
const FORM_LOCATIONS = Object.keys(ROLES_BY_LOCATION);

export default function CareerRegister() {
  const location = useLocation();
  const prefillEmail = (location.state as { email?: string } | null)?.email ?? '';
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: prefillEmail,
    phone: '',
    location: '',
    role: '',
    cvName: '',
    agreeContact: false,
  });

  const update = (key: keyof typeof form, value: string | boolean) =>
    setForm((f) => ({ ...f, [key]: value }));

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: wire to careers/applications endpoint
    console.log('Career application:', form);
  };

  const fieldClass =
    'h-[40px] w-full rounded bg-brand-lavender px-4 py-2 text-xs font-light leading-6 text-brand-purple-mid placeholder:text-brand-purple-mid/45 outline-none focus:ring-2 focus:ring-brand-purple sm:rounded-lg';

  return (
    <div className="career-register-page bg-brand-purple-dark font-poppins text-white lg:font-dmsans">
      {/* ===== Hero heading ===== */}
      <section className="relative overflow-hidden">
        <div className="relative mx-auto w-full px-10 pt-[201px] lg:w-[992px] lg:px-0 lg:pt-[180px]">
          <h1 className="figma-heading-gradient figma-heading-register text-[36px] font-medium leading-[42px] tracking-[-.98px] lg:text-[64px] lg:leading-[72px] lg:tracking-[-1px]">
            <span className="block lg:inline">Start Your <span className="text-brand-lime">Journey</span></span>{' '}
            <span className="block text-white lg:inline lg:text-transparent">With Us</span>
          </h1>
          <p className="mt-4 text-lg leading-6 text-white lg:mt-8 lg:text-2xl lg:font-light lg:leading-normal">
            Tell us about yourself and the kind of role you’re interested in. Upload your CV and we’ll
            contact you when a suitable opportunity matches your experience.
          </p>
        </div>
      </section>

      {/* ===== Registration form ===== */}
      <section className="mx-auto px-10 pb-[60px] pt-0 lg:flex lg:justify-center lg:px-[144px] lg:pb-[120px]">
        <form onSubmit={handleSubmit} className="w-full rounded-2xl bg-white px-6 py-[30px] text-brand-purple-mid ring-1 ring-inset ring-[rgba(92,52,161,0.37)] lg:h-[874px] lg:w-[820px] lg:p-[60px]">
          <div className="flex flex-col gap-6 lg:gap-14">
            <div className="flex flex-col gap-2 lg:gap-4">
              <h2 className="text-2xl font-medium leading-[30px] lg:text-[42px] lg:leading-[48px]">Complete Your Registration</h2>
              <p className="text-xs font-light leading-[18px] lg:text-lg lg:leading-6">Please fill in your details</p>
            </div>

            <div className="flex flex-col gap-6 lg:gap-[52px]">
              <div className="flex flex-col gap-3 lg:gap-6">
                <div className="flex flex-col gap-3 lg:gap-4">
                  <div className="grid gap-3 lg:grid-cols-2">
                    <input
                      className={fieldClass}
                      placeholder="First Name*"
                      required
                      value={form.firstName}
                      onChange={(e) => update('firstName', e.target.value)}
                    />
                    <input
                      className={fieldClass}
                      placeholder="Last Name*"
                      required
                      value={form.lastName}
                      onChange={(e) => update('lastName', e.target.value)}
                    />
                  </div>
                  <input
                    type="email"
                    className={fieldClass}
                    placeholder="Email address"
                    value={form.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                  <input
                    type="tel"
                    className={fieldClass}
                    placeholder="WhatsApp/ Phone number*"
                    required
                    value={form.phone}
                    onChange={(e) => update('phone', e.target.value)}
                  />
                </div>

                <div className="flex flex-col">
                  <p className="pt-2 text-xs font-light leading-6 text-brand-purple-mid lg:pt-0">
                    Select your location and preferred role*
                  </p>
                  <div className="mt-3 flex flex-col gap-3 lg:mt-0">
                    <div className="relative">
                      <select
                        className={`${fieldClass} appearance-none ${form.location ? '' : 'text-brand-purple-mid/30'}`}
                        value={form.location}
                        required
                        onChange={(e) => setForm((f) => ({ ...f, location: e.target.value, role: '' }))}
                      >
                        <option value="" disabled>Your Location</option>
                        {FORM_LOCATIONS.map((l) => (
                          <option key={l} value={l} className="text-brand-purple-mid">{l}</option>
                        ))}
                      </select>
                      <img src={selectCaretIcon} alt="" aria-hidden className="pointer-events-none absolute right-4 top-1/2 h-[3px] w-[6px] -translate-y-1/2" />
                    </div>
                    <div className="relative">
                      <select
                        className={`${fieldClass} appearance-none ${form.role ? '' : 'text-brand-purple-mid/30'}`}
                        value={form.role}
                        required
                        disabled={!form.location}
                        onChange={(e) => update('role', e.target.value)}
                      >
                        <option value="" disabled>
                          Your Role
                        </option>
                        {(ROLES_BY_LOCATION[form.location] ?? []).map((r) => (
                          <option key={r} value={r} className="text-brand-purple-mid">{r}</option>
                        ))}
                      </select>
                      <img src={selectCaretIcon} alt="" aria-hidden className="pointer-events-none absolute right-4 top-1/2 h-[3px] w-[6px] -translate-y-1/2" />
                    </div>
                  </div>
                </div>

                {/* CV upload */}
                <div className="flex flex-col gap-3 pt-2 lg:pt-0">
                  <div>
                    <p className="text-xs font-bold leading-6 text-brand-purple-mid">Upload your CV*</p>
                    <p className="text-xs font-light leading-[18px] text-brand-purple-mid lg:leading-6">
                      Your CV helps us understand your experience and role fit.
                    </p>
                  </div>
                  <label className="flex h-[79px] cursor-pointer flex-col items-center justify-center rounded-lg border border-dashed border-brand-periwinkle bg-brand-lavender/30 px-4 py-2 text-center">
                    <span className="flex w-full max-w-[290px] items-center justify-center">
                      <img src={paperclipIcon} alt="" aria-hidden className="h-6 w-6 shrink-0" />
                      <span className="w-[242px] text-xs font-light leading-[18px] text-brand-purple-mid/45">
                        <span className="block">{form.cvName || 'Click to upload or drag and drop'}</span>
                        <span className="block">PDF, DOC, DOCX (Max. 5MB)</span>
                      </span>
                      <span aria-hidden className="h-6 w-6 shrink-0" />
                    </span>
                    <input
                      type="file"
                      accept=".pdf,.doc,.docx"
                      className="hidden"
                      onChange={(e) => update('cvName', e.target.files?.[0]?.name ?? '')}
                    />
                  </label>
                </div>

                <div>
                  <label className="flex h-6 items-start gap-2 text-xs font-light leading-[18px] text-brand-purple-mid">
                    <span className="relative h-6 w-6 shrink-0">
                    <input
                      type="checkbox"
                      required
                      className="peer absolute inset-0 h-6 w-6 cursor-pointer appearance-none"
                      checked={form.agreeContact}
                      onChange={(e) => update('agreeContact', e.target.checked)}
                    />
                    <img src={consentCheckboxIcon} alt="" aria-hidden className="pointer-events-none h-6 w-6 peer-checked:rounded-sm peer-checked:bg-brand-purple" />
                    </span>
                    <span>
                      I agree that <span className="underline">Outsource.com</span> may contact
                      me about current or future recruitment opportunities.
                    </span>
                  </label>
                </div>
              </div>

              <button
                type="submit"
                className="h-[55px] w-full rounded bg-brand-purple text-xs font-medium leading-[18px] text-brand-lime lg:rounded-lg lg:text-lg lg:leading-normal"
              >
                Submit
              </button>
            </div>
          </div>
        </form>
      </section>
    </div>
  );
}
