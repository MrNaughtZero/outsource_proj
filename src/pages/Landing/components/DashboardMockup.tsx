import type { ReactNode } from 'react';
import { LayoutGrid, Plus, MessageSquare, Users, Home, FileText } from 'lucide-react';
import brandLogo from '../../../assets/landing/logo/01_logo_white_lime.svg';

type Tone = 'green' | 'amber';

interface TaskRow {
  type: string;
  client: string;
  due: string;
  status: string;
  tone: Tone;
}

const TASKS: TaskRow[] = [
  { type: 'Payroll', client: 'ABC Ltd', due: '16/07/2025', status: 'Estimate Accepted', tone: 'green' },
  { type: 'Management Accounts', client: 'Roberts Partners', due: '31/10/2025', status: 'Estimate Accepted', tone: 'green' },
  { type: 'Year-End Final Accounts', client: 'XYZ Ltd', due: '28/11/2025', status: 'Estimate Accepted', tone: 'green' },
  { type: 'VAT Returns', client: 'ABC Ltd', due: '01/09/2025', status: 'Completed', tone: 'green' },
  { type: 'VAT Returns', client: 'ABC Ltd', due: '23/08/2025', status: 'Customer Review', tone: 'amber' },
  { type: 'Bookkeeping', client: 'ABC Ltd', due: '20/08/2025', status: 'Completed', tone: 'green' },
  { type: 'Year-End Final Accounts', client: 'XYZ Ltd', due: '28/11/2025', status: 'Estimate Accepted', tone: 'green' },
  { type: 'VAT Returns', client: 'ABC Ltd', due: '01/09/2025', status: 'Completed', tone: 'green' },
  { type: 'VAT Returns', client: 'ABC Ltd', due: '23/08/2025', status: 'Customer Review', tone: 'amber' },
  { type: 'Bookkeeping', client: 'ABC Ltd', due: '20/08/2025', status: 'Completed', tone: 'green' },
  { type: 'Management Accounts', client: 'Roberts Partners', due: '31/10/2025', status: 'Estimate Accepted', tone: 'green' },
];

const NAV = [
  { label: 'Dashboard', icon: LayoutGrid, active: true },
  { label: 'Create Task', icon: Plus, active: false },
  { label: 'Messages', icon: MessageSquare, active: false },
];

function SectionLabel({ children, dot = false }: { children: ReactNode; dot?: boolean }) {
  return (
    <div className="mt-5 flex items-center gap-2 px-1 text-[9px] font-semibold uppercase tracking-[0.15em] text-white/40">
      {children}
      {dot && <span className="h-3.5 w-3.5 rounded-full bg-brand-lime text-[8px] font-bold leading-[14px] text-brand-purple-dark" />}
    </div>
  );
}

/**
 * Pixel-styled product screenshot used in the "How it works" section — a purple
 * sidebar (brand + menu) next to a white tasks dashboard. Pure presentational markup.
 */
export default function DashboardMockup() {
  return (
    <div className="flex overflow-hidden rounded-3xl bg-white text-left shadow-[0_30px_60px_rgba(0,0,0,0.45)]">
      {/* ===== Sidebar ===== */}
      <aside className="flex w-[34%] shrink-0 flex-col bg-gradient-to-b from-[#3A1D73] to-[#4A2494] p-4 md:p-5">
        <img src={brandLogo} alt="Outsource" className="h-5 w-auto md:h-6" />

        <SectionLabel>Main Menu</SectionLabel>
        <nav className="mt-2 space-y-1">
          {NAV.map(({ label, icon: Icon, active }) => (
            <div
              key={label}
              className={`flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-medium md:text-xs ${
                active ? 'bg-white/15 text-white' : 'text-white/70'
              }`}
            >
              <Icon size={15} className={active ? 'text-brand-lime' : 'text-white/70'} />
              {label}
            </div>
          ))}
        </nav>

        <SectionLabel>Directory</SectionLabel>
        <div className="mt-2 flex items-center gap-2.5 rounded-lg px-2.5 py-2 text-[11px] font-medium text-white/70 md:text-xs">
          <Users size={15} className="text-white/70" />
          Clients
        </div>

        <SectionLabel dot>Recent Updates</SectionLabel>
        <div className="mt-2 flex items-center gap-2.5 px-2.5 text-[11px] font-medium text-white/70 md:text-xs">
          Notifications
        </div>
        {/* skeleton placeholder lines */}
        <div className="mt-3 space-y-2 px-2.5 pb-2">
          {[80, 64, 72, 56].map((w, i) => (
            <div key={i} className="h-1.5 rounded-full bg-white/15" style={{ width: `${w}%` }} />
          ))}
        </div>
      </aside>

      {/* ===== Main panel ===== */}
      <div className="flex-1 bg-white">
        {/* top bar */}
        <div className="flex items-center justify-between border-b border-slate-100 px-5 py-3">
          <div className="flex gap-2">
            <div className="h-2.5 w-24 rounded-full bg-slate-100" />
            <div className="h-2.5 w-16 rounded-full bg-slate-100" />
          </div>
          <div className="h-6 w-6 rounded-full border-2 border-brand-purple/40" />
        </div>

        <div className="px-5 py-4 md:px-6">
          {/* breadcrumb */}
          <div className="flex items-center gap-1.5 text-[11px] text-slate-400">
            <Home size={13} />
            <span>›</span>
            <span className="font-medium text-slate-500">Dashboard</span>
          </div>

          {/* header */}
          <div className="mt-4 flex items-start justify-between">
            <div>
              <h3 className="text-base font-semibold text-slate-800 md:text-lg">Tasks</h3>
              <p className="text-[11px] text-slate-400">List of all tasks</p>
            </div>
            <button className="rounded-lg bg-[#7C3AED] px-3 py-1.5 text-[11px] font-semibold text-white">
              Add Task
            </button>
          </div>

          {/* table */}
          <div className="relative mt-4 overflow-hidden">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-slate-100 text-[9px] uppercase tracking-wide text-slate-400">
                  <th className="pb-2 font-medium">Type</th>
                  <th className="pb-2 font-medium">Client</th>
                  <th className="pb-2 font-medium">Due Date</th>
                  <th className="pb-2 font-medium">Status</th>
                  <th className="pb-2 text-right font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {TASKS.map((t, i) => (
                  <tr key={i} className="border-b border-slate-50 text-[10px] text-slate-600">
                    <td className="py-1.5">
                      <span className="flex items-center gap-1.5">
                        <FileText size={11} className="text-slate-300" />
                        {t.type}
                      </span>
                    </td>
                    <td className="py-1.5 text-slate-400">{t.client}</td>
                    <td className="py-1.5 text-slate-400">{t.due}</td>
                    <td className="py-1.5">
                      <span
                        className={`inline-block rounded-full px-2 py-0.5 text-[8px] font-semibold ${
                          t.tone === 'green'
                            ? 'bg-[#DCFCE7] text-[#16A34A]'
                            : 'bg-[#FEF3C7] text-[#D97706]'
                        }`}
                      >
                        {t.status}
                      </span>
                    </td>
                    <td className="py-1.5 text-right">
                      <span className="text-[10px] font-medium text-[#7C3AED]">View</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            {/* fade the lower rows */}
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-gradient-to-t from-white to-transparent" />
          </div>
        </div>
      </div>
    </div>
  );
}
