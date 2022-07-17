import './global.css';
import { Header } from './components/Header';
import styles from './App.module.css';
import { NewTask } from './components/NewTask';
import { Tasks } from './components/Tasks';


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
