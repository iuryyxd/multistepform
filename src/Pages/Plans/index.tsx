import styles from "./Plans.module.scss";
import Footer from "../../Layout/Footer";
import { plans } from "../../Utils/Plans";
import Plan from "../../Components/Plan";
import { useContext } from "react";
import { FormCtx } from "../../Contexts/FormContext";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";

interface PlanType {
  img: string;
  name: string;
  price: {
    monthly: number;
    yearly: number;
  };
}

export default function Plans() {
  const { billing, setBilling } = useContext(FormCtx);
  const { activeStep, setActiveStep } = useContext(ActiveStepCtx);

  const handleNextPage = () => {
    setActiveStep(activeStep! + 1)
  };

  return (
    <div className={styles.plans}>
      <header className={styles.plans__header}>
        <h1>Select your plan</h1>
        <p>You have the option of monthly or yearly billing.</p>
      </header>

      <main className={styles.plans__list}>
        {plans.map((plan: PlanType) => (
          <Plan
            img={plan.img}
            planName={plan.name}
            planPrice={plan.price}
            key={crypto.randomUUID()}
          />
        ))}

        <div className={styles.plans__billingType}>
          <p
            className={`${billing === "monthly" && styles.active} ${
              styles.bill
            }`}
          >
            Monthly
          </p>
          <button
            className={`${styles.toggleButton} ${
              billing === "yearly" && styles.yearly
            }`}
            onClick={() =>
              setBilling(billing === "monthly" ? "yearly" : "monthly")
            }
          >
            <div></div>
          </button>
          <p
            className={`${billing === "yearly" && styles.active} ${
              styles.bill
            }`}
          >
            Yearly
          </p>
        </div>
      </main>

      <Footer handleNextPage={handleNextPage} />
    </div>
  );
}
