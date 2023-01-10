import styles from "./App.module.scss";
import { ActiveStepProvider } from "./Contexts/ActiveStepContext";
import { FormContextProvider } from "./Contexts/FormContext";
import Main from "./Layout/Main";
import Sidebar from "./Layout/Sidebar";

function App() {
  return (
    <ActiveStepProvider>
      <FormContextProvider>
        <div className={styles.app}>
          <div className={styles.app__wrapper}>
            <Sidebar />
            <Main />
          </div>
        </div>
      </FormContextProvider>
    </ActiveStepProvider>
  );
}

export default App;
