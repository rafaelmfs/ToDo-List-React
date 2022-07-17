import { Clipboard } from './Clipboard'
import { Task } from './Task'
import styles from './Tasks.module.css'

export function Tasks(){
  return (
    <section className={styles.tasks}>
      <header>
        <div className={styles.createdTasks}>
          <strong>Tarefas criadas</strong>
          <span>0</span>
        </div>
        <div className={styles.completedTasks}>
          <strong>Concluídas</strong>
          <span>0</span>
        </div>
      </header>

      <div className={styles.tasksEmpty}>
        <Clipboard />
        <div className={styles.texts}>
          <strong>Você ainda não tem tarefas cadastradas</strong>
          <span>Crie tarefas e organize seus itens a fazer</span>
        </div>
      </div>

      {/* <ul className={styles.tasksList}>
        <li>
          <Task />
        </li>
      </ul> */}

    </section>
  )
}