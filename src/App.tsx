import './global.css';
import { Header } from './Header';
import styles from './App.module.css';
import { NewTask } from './NewTask';
import { Tasks } from './Tasks';


export function App() {
  return (
    <>
      <Header />
      <div className={styles.content}>
        <NewTask />
        <Tasks />
      </div>
    </>
  )
}
