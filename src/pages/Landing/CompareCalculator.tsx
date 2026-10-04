import { useNavigate } from 'react-router-dom';
import CostCalculator from './calculator/CostCalculator';

export default function CompareCalculator() {
  const navigate = useNavigate();
  return <div className="compare-calculator-page px-4 pb-[60px] pt-[114px] lg:pb-[100px] lg:pt-[140px]">
    <div className="cost-calculator cost-calculator-page">
      <CostCalculator standalone onBookCall={() => navigate('/contact')} />
    </div>
  </div>;
}
