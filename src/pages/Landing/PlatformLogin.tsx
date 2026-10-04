import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import PlatformAuthLayout from './components/PlatformAuthLayout';
import signInIcon from '../../assets/landing/images/icons/login_signin.svg';

function SignInForm() {
  const [email, setEmail] = useState('');
  const submit = (event: FormEvent) => event.preventDefault();
  return <form onSubmit={submit} className="w-full text-white">
    <h2 className="flex items-center gap-[9px] text-2xl font-medium leading-6"><img src={signInIcon} alt="" className="h-6 w-[26px]" />Sign In</h2>
    <div className="mt-6 space-y-4 lg:mt-8 lg:space-y-6"><div><label className="block text-lg font-light leading-6 text-brand-periwinkle" htmlFor="login-email">Email Address</label><input id="login-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="username or email" className="mt-2 h-12 lg:h-11 w-full rounded-lg bg-brand-lavender px-4 py-[10px] text-lg font-light leading-6 text-black outline-none placeholder:text-black/30" /></div><div><div className="flex justify-between text-lg leading-6"><label className="font-light text-brand-periwinkle" htmlFor="login-password">Password</label><Link to="/reset-password" className="text-white/50 hover:text-white focus-visible:text-white focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-lime">Forgot Password?</Link></div><input id="login-password" type="password" required placeholder="••••••••" className="mt-2 h-12 lg:h-11 w-full rounded-lg bg-brand-lavender px-4 py-[10px] text-lg font-light leading-6 text-black outline-none placeholder:text-black/30" /></div></div>
    <button className="mt-10 h-12 lg:h-[55px] w-full rounded-lg bg-brand-lime text-lg font-medium text-brand-purple transition-colors duration-200 ease-linear hover:bg-white hover:text-brand-purple-mid">Sign In</button>
  </form>;
}

export default function PlatformLogin() {
  return <PlatformAuthLayout><SignInForm /></PlatformAuthLayout>;
}
