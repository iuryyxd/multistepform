import { useContext } from "react";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";
import Addons from "../../Pages/Addons";
import Info from "../../Pages/Info";
import Plans from "../../Pages/Plans";
import Summary from "../../Pages/Summary";
import Thanks from "../../Pages/Thanks";
import styles from "./Main.module.scss";

export default function Main() {
  const { activeStep } = useContext(ActiveStepCtx);

  return (
    <main className={styles.wrapper__main}>
      {activeStep === 1 && <Info />}
      {activeStep === 2 && <Plans />}
      {activeStep === 3 && <Addons />}
      {activeStep === 4 && <Summary />}
      {activeStep === 5 && <Thanks />}
    </main>
  );
}
