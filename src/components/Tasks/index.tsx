import {  useState } from 'react';
import { v4 as uuidv4 } from 'uuid';
import { ITask } from '../../interfaces/ITask'
import { Clipboard } from './Clipboard'
import { NewTask } from './NewTask';
import { Task } from './Task'
import styles from './Tasks.module.css'


export function Tasks(){

  const [taskList, setTaskList] = useState<ITask[]>([]); 
  const [totalCompletedTasks, setTotalCompletedTasks] = useState(0);
  const isTaskListEmpty = taskList.length === 0;

  function handleCreateNewTask(newTaskContent: string){
    const newTask: ITask = {
      id: uuidv4(),
      content: newTaskContent,
      completed: false,
    }
    setTaskList([...taskList, newTask]);
  }

  function handleCompleted(updatedTask: ITask){
    const index = taskList.findIndex(taskItem => taskItem.id === updatedTask.id );
    setTaskList(state => {
      return [...state.slice(0, index), updatedTask, ...state.slice(index+1)]
    });
    setTotalCompletedTasks(state => (
      updatedTask.completed ? state + 1 : state - 1
    ));
  }

  function handleDelete(taskDeleted: ITask){
    const updatedTaskList = taskList.filter( taskItem => {
      return taskItem.id !== taskDeleted.id;
    })
    setTotalCompletedTasks(state => (
      taskDeleted.completed ? state - 1 : state
    ));
    setTaskList([...updatedTaskList]);
  }

  return (
    <>
      <NewTask createNewTask={handleCreateNewTask} />
      
      <section className={styles.tasks}>
        <header>
          <div className={styles.createdTasks}>
            <strong>Tarefas criadas</strong>
            <span>{taskList.length}</span>
          </div>
          <div className={styles.completedTasks}>
            <strong>Concluídas</strong>
            <span>
              {taskList.length === 0 ? '0' : `${totalCompletedTasks} de ${taskList.length}`}
            </span>
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
              {taskList.map( taskItem => (
                <li key={taskItem.id}>
                  <Task 
                    task={taskItem} 
                    handleCompleted={handleCompleted}
                    handleDelete={handleDelete}
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