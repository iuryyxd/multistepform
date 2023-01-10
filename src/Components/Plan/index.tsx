import { useContext } from "react";
import { FormCtx } from "../../Contexts/FormContext";
import styles from "./Plan.module.scss";

interface PlanProps {
  img: string;
  planName: string;
  planPrice: {
    monthly: number,
    yearly: number
  };
}

export default function Plan({ img, planName, planPrice }: PlanProps) {

  const { setPlan, plan, billing } = useContext(FormCtx);

  return (
    <div className={`${styles.plan} ${plan?.plan === planName && styles.active}`} onClick={() => setPlan({plan: planName, planPrice: planPrice})}>
      <img src={img} alt={planName} />
      <div>
        <h1>{planName}</h1>
        <p>${planPrice[billing as keyof typeof planPrice]}/{billing === "yearly" ? 'yr' : 'mo'}</p>
        {billing === 'yearly' && <p className={styles.yearlyAdvantage}>2 months free</p>}
      </div>
    </div>
  );
}
