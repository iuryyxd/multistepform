import checkmarkImg from "../../assets/icon-thank-you.svg";
import styles from './Thanks.module.scss';

export default function Thanks() {
  return (
    <div className={styles.main}>
      <img src={checkmarkImg} alt="checkmark icon" />
      <h1>Thank you</h1>
      <p>
        Thanks for confirming your subscription. We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}
