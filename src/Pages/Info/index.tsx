import styles from "./Info.module.scss";
import Input from "../../Components/Input";
import Footer from "../../Layout/Footer";
import { useContext } from "react";
import { ActiveStepCtx } from "../../Contexts/ActiveStepContext";
import { useForm, SubmitHandler } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { FormSchema } from "../../Schema/FormSchema";
import { InputsType } from "../../Types/types";
import { FormCtx } from "../../Contexts/FormContext";

export default function Info() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<InputsType>({
    resolver: yupResolver(FormSchema),
  });

  const { activeStep, setActiveStep } = useContext(ActiveStepCtx);
  const { setInfo } = useContext(FormCtx);

  const handleNextPage: SubmitHandler<InputsType> = (data) => {
    setInfo({
      email: data.email,
      name: data.name,
      phone: data.phone,
    });

    setActiveStep(activeStep! + 1);
  };

  return (
    <>
      <div className={styles.info}>
        <header className={styles.info__header}>
          <h1>Personal Info</h1>
          <p>Please provide your name, email address, and phone number.</p>
        </header>

        <form
          className={styles.info__form}
          id="form"
          name="form"
          onSubmit={handleSubmit(handleNextPage)}
        >
          <Input
            label="Name"
            placeholder="e.g. Stephen King"
            type="text"
            name="name"
            register={register}
            error={errors.name?.message}
          />
          <Input
            label="Email Address"
            placeholder="e.g. stephenking@lorem.com"
            type="email"
            name="email"
            register={register}
            error={errors.email?.message}
          />
          <Input
            label="Phone Number"
            placeholder="e.g. +1 234 567 890"
            type="tel"
            name="phone"
            register={register}
            error={errors.phone?.message}
          />
        </form>
      </div>
      <Footer />
    </>
  );
}
