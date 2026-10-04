import { useState, type FormEvent } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import PlatformAuthLayout from './components/PlatformAuthLayout';
import signInIcon from '../../assets/landing/images/icons/login_signin.svg';
import backArrow from '../../assets/landing/login/back-arrow.svg';
import backArrowHover from '../../assets/landing/login/back-arrow-hover.svg';

export default function ResetPassword() {
  const [email, setEmail] = useState('');

  const submit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // UI preview only: no reset email is sent until authentication is connected.
    toast('Password reset emails aren’t enabled yet.');
  };

  return (
    <PlatformAuthLayout reset>
      <form onSubmit={submit} className="platform-reset-form flex w-full flex-col gap-6 text-white lg:gap-8">
        <div className="flex flex-col gap-6">
          <h2 className="flex items-center gap-[9px] text-2xl font-medium leading-6">
            <img src={signInIcon} alt="" className="h-6 w-[26px] shrink-0" />Reset Password
          </h2>
          <p className="text-lg font-light leading-6 text-brand-periwinkle">Enter your registered email address and we’ll send you a reset link</p>
        </div>
        <div className="flex flex-col gap-8 lg:gap-10">
          <div>
            <label htmlFor="reset-email" className="block text-lg font-light leading-6 text-brand-periwinkle">Email Address</label>
            <input
              id="reset-email"
              name="email"
              type="email"
              autoComplete="email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@company.com"
              className="mt-2 h-12 w-full rounded-lg bg-brand-lavender px-4 py-[10px] text-lg font-light leading-6 text-black outline-none placeholder:text-black/30 focus-visible:ring-2 focus-visible:ring-brand-lime lg:h-11"
            />
          </div>
          <div className="h-[55px]">
            <button type="submit" className="h-12 w-full rounded-lg bg-brand-lime text-lg font-medium leading-6 text-brand-purple transition-colors duration-200 ease-linear hover:bg-white hover:text-brand-purple-mid focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white lg:h-[55px]">Send Reset Link</button>
          </div>
        </div>
        <Link to="/login" className="group mx-auto flex items-center gap-2 text-lg leading-6 transition-colors hover:text-brand-lime focus-visible:text-brand-lime focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-brand-lime">
          <span aria-hidden="true" className="relative block h-[15px] w-[15px] -scale-x-100"><img src={backArrow} alt="" className="absolute inset-0 group-hover:opacity-0 group-focus-visible:opacity-0" /><img src={backArrowHover} alt="" className="absolute inset-0 opacity-0 group-hover:opacity-100 group-focus-visible:opacity-100" /></span>Back to Sign in
        </Link>
      </form>
    </PlatformAuthLayout>
  );
}
