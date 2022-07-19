import { Check, Trash } from 'phosphor-react';
import { ITask } from '../../../interfaces/ITask';
import styles from './Task.module.css';
import classNames from 'classnames'
import { useState } from 'react';

interface TaskProps {
  task: ITask;
  handleCompleted: (idTaskCompleted: string) => void
}

export function Task({task, handleCompleted}: TaskProps){

  const [isCompleted, setIsCompleted] = useState(task.completed);

  function handleCheckCompleted(){
    setIsCompleted((state) => !state);
    handleCompleted(task.id);
  }

  return(
    <div 
      className={classNames(styles.task, {
        [styles.taskCompleted]: isCompleted,
      })}
      onClick={(event) => console.log(task)}>
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
      >
        <Trash weight='bold'/>
      </button>
    </div>
  )
}