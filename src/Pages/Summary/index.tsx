import { useContext, useEffect, useState } from "react";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";
import { FormCtx } from "../../Contexts/FormContext";
import Footer from "../../Layout/Footer";
import styles from "./Summary.module.scss";

export default function Summary() {
  const { activeStep, setActiveStep } = useContext(ActiveStepCtx);
  const { addons, billing, plan } = useContext(FormCtx);
  const [totalPrice, setTotalPrice] = useState(plan!.planPrice.monthly);

  const handleNextPage = () => {
    setActiveStep(activeStep! + 1);
  };

  useEffect(() => {
    let price = 0

    addons.map((addon) => {
      if (addon.isActive) {
        price += addon.price.monthly
      } 
    });

    setTotalPrice(totalPrice + price)
  }, []);

  return (
    <div className={styles.summary}>
      <header className={styles.summary__header}>
        <h1>Finishing up</h1>
        <p>Double check everything looks OK before confirming.</p>
      </header>

      <main className={styles.summary__main}>
        <div className={styles.main__header}>
          <header>
            <div>
              <h1>
                {plan?.plan} ({billing === "monthly" ? "Monthly" : "Yearly"})
              </h1>
              <button onClick={() => setActiveStep(2)}>Change</button>
            </div>
            <p>
              $
              {billing === "monthly"
                ? plan?.planPrice.monthly
                : plan?.planPrice.yearly}
              /{billing === "monthly" ? "mo" : "yr"}
            </p>
          </header>

          <div className={styles.main__addons}>
            {addons &&
              addons.map((addon) => {
                if (addon.isActive) {
                  return (
                    <div key={crypto.randomUUID()}>
                      <p>{addon.name}</p>
                      <span>
                        +$
                        {billing === "monthly"
                          ? addon.price.monthly
                          : addon.price.yearly}
                        /{billing === "monthly" ? "mo" : "yr"}
                      </span>
                    </div>
                  );
                }
              })}
          </div>
        </div>

        <div className={styles.main__footer}>
          <p>Total (per {billing === "monthly" ? "month" : "year"})</p>
          <span>
            +$
            {billing === "monthly"
              ? totalPrice
              : totalPrice! * 10}
            /{billing === "monthly" ? "mo" : "yr"}
          </span>
        </div>
      </main>

      <Footer handleNextPage={handleNextPage} />
    </div>
  );
}
