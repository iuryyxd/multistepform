import styles from "./Addons.module.scss";
import Addon from "../../Components/Addon";
import { useContext } from "react";
import { FormCtx } from "../../Contexts/FormContext";
import Footer from "../../Layout/Footer";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";

interface AddonType {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  isActive: boolean;
}

export default function Addons() {
  const { addons } = useContext(FormCtx);
  const { activeStep, setActiveStep } = useContext(ActiveStepCtx);

  const handleNextPage = () => {
    setActiveStep(activeStep! + 1);
  };

  return (
    <div className={styles.addons}>
      <header className={styles.addons__header}>
        <h1>Pick add-ons</h1>
        <p>Add-ons help enchance your gaming experience.</p>
      </header>

      <main className={styles.addons__list}>
        {addons.map((addon: AddonType) => (
          <Addon
            name={addon.name}
            description={addon.description}
            price={addon.price}
            isActive={addon.isActive}
            key={crypto.randomUUID()}
          />
        ))}
      </main>

      <Footer handleNextPage={handleNextPage} />
    </div>
  );
}
