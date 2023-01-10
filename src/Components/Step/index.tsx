import styles from './Step.module.scss';

interface StepProps {
    text: string;
    index: number;
    indexActive: number | null;
}

export const Step = ({text, index, indexActive}: StepProps) => {
  return (
    <div className={styles.step}>
      <div className={`${styles.step__number} ${indexActive !== null && indexActive === index && styles.on} ${indexActive === 5 && index === 4 && styles.on}`}>{index}</div>
      <div className={styles.step__infos}>
        <span>STEP {index}</span>
        <p>{text}</p>
      </div>
    </div>
  );
};
