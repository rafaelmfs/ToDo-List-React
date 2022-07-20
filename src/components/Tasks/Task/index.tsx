import { Check, Trash } from 'phosphor-react';
import { ITask } from '../../../interfaces/ITask';
import styles from './Task.module.css';
import classNames from 'classnames'

interface TaskProps {
  task: ITask;
  handleCompleted: (taskCompleted: ITask) => void;
  handleDelete: (task: ITask) => void
}

export function Task({task, handleCompleted, handleDelete}: TaskProps){

  function handleCheckCompleted(){
    const taskCompleted: ITask = {
      id: task.id,
      content: task.content,
      completed: !task.completed
    }
    handleCompleted(taskCompleted);
  }

  return(
    <div className={classNames(styles.task, {
        [styles.taskCompleted]: task.completed,
      })}>
      <label className={styles.check}>
        <input 
          type="checkbox" 
          title="Concluída ?" 
          id="check"
          onChange={handleCheckCompleted}
        />
        <span>
          <Check weight='bold' width={12} visibility="hidden" className={styles.check}/>
        </span>
      </label>
      <p>
        {task.content}
      </p>
      <button 
        title='Excluir' 
        className={styles.trash}
        onClick={() => handleDelete(task)}
      >
        <Trash weight='bold'/>
      </button>
    </div>
  )
}