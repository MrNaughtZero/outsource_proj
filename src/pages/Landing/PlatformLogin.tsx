import { useState } from 'react';
import type { FormEvent } from 'react';
import { Link } from 'react-router-dom';
import { Menu } from 'lucide-react';
import logoWhite from '../../assets/landing/logo/02_logo_com_white_lime.svg';
import logoMark from '../../assets/landing/logo/01_logo_white_lime.svg';
import platform from '../../assets/landing/images/platform_002.png';
import ellipse from '../../assets/landing/images/login_ellipse.png';
import vector from '../../assets/landing/images/login_vector.svg';
import pattern from '../../assets/landing/images/login_pattern.png';
import signInIcon from '../../assets/landing/images/icons/login_signin.svg';

function SignInForm() {
  const [email, setEmail] = useState('');
  const submit = (event: FormEvent) => event.preventDefault();
  return <form onSubmit={submit} className="w-full text-white">
    <h2 className="flex items-center gap-[9px] text-2xl font-medium leading-6"><img src={signInIcon} alt="" className="h-6 w-[26px]" />Sign In</h2>
    <div className="mt-6 space-y-4"><div><label className="block text-xs font-light leading-6" htmlFor="login-email">Email Address</label><input id="login-email" type="email" required value={email} onChange={(event) => setEmail(event.target.value)} placeholder="username or email" className="mt-1 h-11 w-full rounded-lg bg-brand-lavender px-4 py-[10px] text-xs font-light text-black outline-none placeholder:text-black/30" /></div><div><div className="flex justify-between text-xs leading-6"><label className="font-light" htmlFor="login-password">Password</label><Link to="/contact" className="text-white/50">Forgot Password?</Link></div><input id="login-password" type="password" required placeholder="••••••••" className="mt-1 h-11 w-full rounded-lg bg-brand-lavender px-4 py-[10px] text-xs font-light text-black outline-none placeholder:text-black/30" /></div></div>
    <button className="mt-10 h-[55px] w-full rounded-lg bg-brand-lime text-lg font-medium text-brand-purple">Sign In</button>
  </form>;
}

export default function PlatformLogin() {
  return <main className="relative h-[100dvh] min-h-[920px] overflow-hidden bg-[linear-gradient(-28.264deg,#eee8fc_49.355%,#c4b7e7_81.886%)] font-dmsans text-brand-purple-mid lg:h-screen lg:min-h-0 lg:bg-[linear-gradient(121.915deg,#eee8fc_29.574%,#c4b7e7_78.821%)]">
    <div className="platform-login-stage absolute inset-y-0 left-1/2 w-full -translate-x-1/2">
      <img src={vector} alt="" className="platform-login-vector absolute left-[104px] top-[-21px] h-[481px] w-[517px] max-w-none opacity-30 lg:opacity-40" />
      <img src={ellipse} alt="" className="platform-login-ellipse absolute left-[66px] top-[-60px] h-[595px] w-[595px] opacity-30 lg:opacity-40" />
      <div className="absolute inset-x-0 top-0 z-10 flex h-16 items-center justify-between px-10 lg:hidden"><Link to="/"><img src={logoWhite} alt="Outsource.com" className="w-[143px]" /></Link><Menu size={30} strokeWidth={4} className="text-white" /></div>
      <div className="platform-login-intro absolute left-[33px] top-[120px] w-[325px] lg:flex lg:flex-col lg:gap-6"><h1 className="text-[30px] leading-9 tracking-[-0.005em] lg:leading-[49px]"><b>Your Workspace.</b> Built for seamless teamwork.</h1><div className="mt-4 h-px w-[205px] bg-brand-purple-mid/50 lg:relative lg:mt-0 lg:h-0 lg:w-[63.105%] lg:bg-transparent lg:after:absolute lg:after:inset-x-0 lg:after:top-0 lg:after:h-px lg:after:bg-brand-purple-mid/50 lg:after:content-['']"/><p className="mt-4 text-xs leading-[18px] lg:mt-0 lg:leading-[23px]">Everything you need to manage tasks, share files and stay connected with your team.</p></div>
      <img src={platform} alt="Outsource.com workspace" className="platform-login-workspace absolute hidden max-w-none object-cover lg:block" />
      <div className="absolute bottom-0 left-0 hidden h-[204px] w-full bg-gradient-to-b from-[rgba(204,192,235,0)] to-[#ccc0eb] opacity-50 lg:block" />
      <div className="absolute right-0 top-0 hidden h-full w-[33.594%] bg-gradient-to-r from-[rgba(204,192,235,0)] to-[#ccc0eb] opacity-50 lg:block" />
      <div className="platform-login-panel absolute inset-x-0 bottom-0 top-[365px] overflow-hidden rounded-t-xl bg-brand-purple-mid lg:rounded-xl">
        <img src={pattern} alt="" className="absolute bottom-0 left-0 h-[220px] w-full object-cover object-top opacity-40 lg:bottom-auto lg:top-0 lg:h-[390px]" />
        <div className="platform-login-panel-content absolute left-10 right-10 top-[68px]"><Link to="/" className="hidden lg:block"><img src={logoMark} alt="Outsource" className="platform-login-panel-logo mx-auto w-[240px]" /></Link><div className="platform-login-form-wrap"><SignInForm /></div></div>
        <Link to="/" className="absolute bottom-[60px] left-1/2 -translate-x-1/2 lg:hidden"><img src={logoMark} alt="Outsource" className="w-[192px]" /></Link>
      </div>
    </div>
  </main>;
}
