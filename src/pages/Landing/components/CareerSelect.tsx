import { useEffect, useId, useRef, useState, type KeyboardEvent } from 'react';
import caret from '../../../assets/landing/career/select-caret.svg';

type Props = {
  label: string;
  value: string;
  options: readonly string[];
  onChange: (value: string) => void;
  emptyMessage?: string;
};

/** Figma's expanded field, with keyboard selection and native required validation. */
export default function CareerSelect({ label, value, options, onChange, emptyMessage }: Props) {
  const id = useId();
  const root = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState(0);
  const search = useRef({ text: '', time: 0 });

  useEffect(() => {
    if (!open) return;
    const closeOutside = (event: PointerEvent) => {
      if (!root.current?.contains(event.target as Node)) setOpen(false);
    };
    document.addEventListener('pointerdown', closeOutside);
    return () => document.removeEventListener('pointerdown', closeOutside);
  }, [open]);

  const show = () => {
    setActive(Math.max(0, options.indexOf(value)));
    setOpen(true);
  };
  const choose = (option: string) => {
    onChange(option);
    setOpen(false);
    trigger.current?.focus();
  };
  const keyDown = (event: KeyboardEvent<HTMLButtonElement>) => {
    if (event.key === 'Escape') { setOpen(false); return; }
    if (event.key === 'Tab') { setOpen(false); return; }
    if (['ArrowDown', 'ArrowUp', 'Home', 'End'].includes(event.key)) {
      event.preventDefault();
      if (!open) { show(); return; }
      setActive((index) => event.key === 'Home' ? 0 : event.key === 'End' ? Math.max(0, options.length - 1) : Math.max(0, Math.min(options.length - 1, index + (event.key === 'ArrowDown' ? 1 : -1))));
    } else if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      if (!open) show();
      else if (options[active]) choose(options[active]);
    } else if (event.key.length === 1) {
      const now = Date.now();
      const text = (now - search.current.time < 700 ? search.current.text : '') + event.key.toLowerCase();
      search.current = { text, time: now };
      const index = options.findIndex((option) => option.toLowerCase().startsWith(text));
      if (index !== -1) { setActive(index); setOpen(true); }
    }
  };

  return (
    <div ref={root} className="relative min-h-12" onBlur={(event) => { if (!event.currentTarget.contains(event.relatedTarget as Node)) setOpen(false); }}>
      <select aria-hidden="true" tabIndex={-1} required value={value} onChange={(event) => onChange(event.target.value)} onInvalid={(event) => { event.preventDefault(); trigger.current?.focus(); show(); }} className="pointer-events-none absolute h-px w-px opacity-0">
        <option value="" />
        {options.map((option) => <option key={option}>{option}</option>)}
      </select>
      <div className={`rounded-lg bg-brand-lavender ${open ? 'absolute inset-x-0 top-0 z-20 border border-brand-purple-mid shadow-lg' : ''}`}>
        <button ref={trigger} type="button" role="combobox" aria-label={label} aria-haspopup="listbox" aria-expanded={open} aria-controls={`${id}-list`} aria-activedescendant={open && options.length ? `${id}-${active}` : undefined} onClick={() => open ? setOpen(false) : show()} onKeyDown={keyDown} className="flex min-h-12 w-full items-center justify-between gap-3 rounded-lg px-4 py-2 text-left text-lg font-light leading-6 text-brand-purple-mid outline-none focus-visible:ring-2 focus-visible:ring-brand-purple">
          <span className={value ? '' : 'text-brand-purple-mid/45'}>{value || label}</span>
          <img src={caret} alt="" className="h-[3px] w-[6px] shrink-0" />
        </button>
        {open && <ul id={`${id}-list`} role="listbox" aria-label={label} className="max-h-[300px] space-y-4 overflow-y-auto px-4 pb-2">
          {options.length ? options.map((option, index) => <li id={`${id}-${index}`} key={option} role="option" aria-selected={value === option} onPointerDown={(event) => event.preventDefault()} onClick={() => choose(option)} onMouseMove={() => setActive(index)} className={`cursor-pointer rounded py-0.5 text-lg font-light leading-6 text-brand-purple-mid/60 ${active === index ? 'bg-brand-periwinkle/40 text-brand-purple-mid' : ''}`}>{option}</li>) : <li role="option" aria-disabled="true" aria-selected="false" className="text-lg font-light leading-6 text-brand-purple-mid/45">{emptyMessage}</li>}
        </ul>}
      </div>
    </div>
  );
}
