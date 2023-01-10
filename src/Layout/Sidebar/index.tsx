import { useContext } from "react";
import { Step } from "../../Components/Step";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";
import styles from "./Sidebar.module.scss";

export default function Sidebar() {
  const { activeStep } = useContext(ActiveStepCtx);

  const steps = ["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"];

  return (
    <aside className={styles.aside}>
      {steps.map((step, index) => (
        <Step text={step} index={index + 1} indexActive={activeStep} key={crypto.randomUUID()} />
      ))}
    </aside>
  );
}
