import calculatorWhite from '../../../assets/landing/home/compare-costs.svg';
import calculatorLime from '../../../assets/landing/home/menu-calculator.svg';
import calculatorPurple from '../../../assets/landing/home/menu-calculator-hover.svg';
import { useCalculator } from '../calculator/CalculatorContext';

export default function CompareCostsSection({ role, className = '' }: { role?: string; className?: string }) {
  const { openCalculator } = useCalculator();
  return (
    <div className={`compare-costs-section flex flex-col items-start gap-6 antialiased md:flex-row md:flex-wrap md:items-center lg:flex-nowrap lg:gap-3 ${className}`}>
      <div className="flex w-full min-w-0 flex-1 flex-col gap-3 md:w-auto md:basis-[320px] lg:basis-0">
        <div className="flex items-start gap-3">
          {role && <img src={calculatorLime} alt="" className="shrink-0 max-w-none lg:hidden" />}
          <h3 className="!text-lg !font-bold !leading-6 !tracking-normal text-white lg:!text-2xl lg:!font-medium lg:!leading-8">
            See how the <span className="text-brand-lime lg:text-white">costs compare</span>
          </h3>
        </div>
        <p className="!text-lg !font-light !leading-6 !tracking-normal text-brand-periwinkle">
          <span className={role ? 'lg:hidden' : undefined}>Compare UK employment costs with Outsource.com</span>
          {role && <span className="hidden lg:inline">Compare the cost of a UK {role} with Outsource.com</span>}
        </p>
      </div>
      <button
        type="button"
        onClick={event => openCalculator(role, event.currentTarget)}
        className={`group/compare-costs inline-flex shrink-0 items-center justify-center gap-2.5 rounded-lg px-6 py-3 text-lg font-normal leading-6 text-white ring-1 ring-inset ring-brand-periwinkle transition-colors duration-200 ease-linear hover:bg-brand-lime hover:text-brand-purple-mid hover:ring-transparent lg:h-[56.5px] lg:w-[211.682px] lg:px-8 lg:py-4 ${role ? 'h-12 w-full md:w-[195.682px]' : 'h-[48.5px] w-[195.682px]'}`}
      >
        <span className={`relative h-[24.5px] w-[18.682px] shrink-0 ${role ? 'hidden lg:block' : ''}`}>
          <img src={calculatorWhite} alt="" className="absolute inset-0 max-w-none group-hover/compare-costs:invisible" />
          <img src={calculatorPurple} alt="" className="invisible absolute inset-0 max-w-none group-hover/compare-costs:visible" />
        </span>
        {role ? <><span className="lg:hidden">Compare Costs</span><span className="hidden lg:inline">Compare cost</span></> : 'Compare cost'}
      </button>
    </div>
  );
}
