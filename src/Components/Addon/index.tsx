import { useContext } from "react";
import { FormCtx } from "../../Contexts/FormContext";
import styles from "./Addon.module.scss";
import checkmarckIcon from "../../assets/icon-checkmark.svg";

interface PlanProps {
  name: string;
  description: string;
  price: {
    monthly: number;
    yearly: number;
  };
  isActive: boolean;
}

export default function Addon({
  name,
  description,
  price,
  isActive,
}: PlanProps) {

  const { billing, addons, setAddons } = useContext(FormCtx);

  const handleCheck = () => {
    const newAddons = addons.map((addon) => {
      if (addon.name === name) {
        return {
          ...addon,
          isActive: !addon.isActive,
        };
      }
      return addon;
    });
    
    setAddons(newAddons)
  }

  return (
    <div className={`${styles.addon} ${isActive && styles.active}`} onClick={handleCheck}>
      <div className={styles.addon__left}>
        <button className={styles.addon__button}>{isActive && <img src={checkmarckIcon} />}</button>
        <div className={styles.addon__info}>
          <h1>{name}</h1>
          <p>{description}</p>
        </div>
      </div>

      <p className={styles.addon__price}>+${price[billing as keyof typeof price]}/{billing === 'yearly' ? 'yr' : 'mo'}</p>
    </div>
  );
}
