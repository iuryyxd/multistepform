import { useContext } from "react";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";
import styles from "./Footer.module.scss";

interface FooterProps {
  handleNextPage?: () => void;
}

export default function Footer({handleNextPage}: FooterProps) {
  const { activeStep, setActiveStep } = useContext(ActiveStepCtx);

  return (
    <footer className={`${styles.footer} ${activeStep === 1 && styles.first}`}>
      {activeStep === 5 ? (
        <></>
      ) : (
        <>
          {activeStep !== 1 && <button className={styles.footer__backButton} onClick={() => activeStep && setActiveStep(activeStep - 1)}>Go Back</button>}
          {activeStep !== 4 && <button className={`${styles.footer__nextButton}`} form="form" onClick={handleNextPage}>Next Step</button>}
          {activeStep === 4 && <button className={styles.footer__confirmButton} onClick={() => activeStep && setActiveStep(activeStep + 1)}>Confirm</button>}
        </>
      )}
    </footer>
  );
}
