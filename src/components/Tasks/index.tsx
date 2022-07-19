import { PlusCircle } from 'phosphor-react';
import { FormEvent, useState } from 'react';
import { ITask } from '../../interfaces/ITask'
import { Clipboard } from './Clipboard'
import { NewTask } from './NewTask';
import { Task } from './Task'
import styles from './Tasks.module.css'


export function Tasks(){

  const [taskList, setTaskList] = useState<ITask[]>([]); 
  const isTaskListEmpty = taskList.length == 0;

  function handleCreateNewTask(newTaskContent: string){
    const newTask: ITask = {
      id: newTaskContent.trim(),
      content: newTaskContent,
      completed: false,
    }
    setTaskList([...taskList, newTask]);
  }

  function handleCompleted(idTaskCompleted: string){
    taskList.forEach((task) => {
      if(task.id === idTaskCompleted){
        task.completed = !task.completed;
      }
    })
  }

  return (
    <>
      <NewTask createNewTask={handleCreateNewTask} />
      
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

        {
          isTaskListEmpty ? (
            <div className={styles.tasksEmpty}>
              <Clipboard />
              <div className={styles.texts}>
                <strong>Você ainda não tem tarefas cadastradas</strong>
                <span>Crie tarefas e organize seus itens a fazer</span>
              </div>
            </div>

          ) : (
            <ul className={styles.tasksList}>
              {taskList.map( task => (
                <li key={task.id}>
                  <Task 
                    task={task} 
                    handleCompleted={handleCompleted}
                  />
                </li>
              ))}
            </ul>
          )

        }
      </section>
    </>
  )
}