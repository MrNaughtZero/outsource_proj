import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Toaster } from 'react-hot-toast';
import { lazy, Suspense } from 'react';

import ScrollToTop from './components/ScrollToTop';

// Marketing / Landing Pages (public website)
const MarketingLayout = lazy(() => import('./pages/Landing/MarketingLayout'));
const Home = lazy(() => import('./pages/Landing/Home'));
const Careers = lazy(() => import('./pages/Landing/Careers'));
const HowItWorks = lazy(() => import('./pages/Landing/HowItWorks'));
const About = lazy(() => import('./pages/Landing/About'));
const Contact = lazy(() => import('./pages/Landing/Contact'));
const Roles = lazy(() => import('./pages/Landing/Roles'));
const Accountants = lazy(() => import('./pages/Landing/Accountants'));
const Bookkeepers = lazy(() => import('./pages/Landing/Bookkeepers'));
const PayrollSpecialists = lazy(() => import('./pages/Landing/PayrollSpecialists'));
const VirtualCfos = lazy(() => import('./pages/Landing/VirtualCfos'));
const Solutions = lazy(() => import('./pages/Landing/Solutions'));
const SupportScenarios = lazy(() => import('./pages/Landing/SupportScenarios'));
const SupportScenarioDetail = lazy(() => import('./pages/Landing/SupportScenarioDetail'));
const SuccessionExit = lazy(() => import('./pages/Landing/SuccessionExit'));
const CareerRegister = lazy(() => import('./pages/Landing/CareerRegister'));
const Insights = lazy(() => import('./pages/Landing/Insights'));
const ComingSoon = lazy(() => import('./pages/Landing/ComingSoon'));
const PlatformLogin = lazy(() => import('./pages/Landing/PlatformLogin'));

// Loading fallback component
const LoadingFallback = () => (
  <div className="flex items-center justify-center min-h-screen bg-gray-50">
    <div className="text-center">
      <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600"></div>
      <p className="mt-4 text-gray-600 font-medium">Loading...</p>
    </div>
  </div>
);

function App() {
  const basePath = import.meta.env.BASE_URL === '/' ? undefined : import.meta.env.BASE_URL.replace(/\/$/, '');

  return (
    <BrowserRouter basename={basePath}>
      <ScrollToTop />
      <Toaster position="top-right" />

      <Suspense fallback={<LoadingFallback />}>
        <Routes>
          <Route path="/login" element={<PlatformLogin />} />
          {/* Public Marketing Site */}
          <Route element={<MarketingLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/careers" element={<Careers />} />
            <Route path="/careers/register" element={<CareerRegister />} />
            <Route path="/about" element={<About />} />
            <Route path="/solutions" element={<Solutions />} />
            <Route path="/support-scenarios" element={<SupportScenarios />} />
            <Route path="/support-scenarios/:scenario" element={<SupportScenarioDetail />} />
            <Route path="/succession-and-exit" element={<SuccessionExit />} />
            <Route path="/how-it-works" element={<HowItWorks />} />
            <Route path="/insights" element={<Insights />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/roles" element={<Roles />} />
            <Route path="/roles/accountants" element={<Accountants />} />
            <Route path="/roles/bookkeepers" element={<Bookkeepers />} />
            <Route path="/roles/payroll-specialists" element={<PayrollSpecialists />} />
            <Route path="/roles/virtual-cfos" element={<VirtualCfos />} />
            <Route path="/privacy" element={<ComingSoon title="Privacy Policy" />} />
            <Route path="/terms" element={<ComingSoon title="Terms and Conditions" />} />
          </Route>

          {/* Anything else -> home */}
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
}

export default App;
