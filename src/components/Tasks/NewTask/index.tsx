import { PlusCircle } from "phosphor-react";
import { FormEvent, useState } from "react";
import { ITask } from "../../../interfaces/ITask";
import styles from "./NewTask.module.css";

interface NewTaskProps {
  createNewTask: (content: string) => void;
}

export function NewTask({createNewTask}: NewTaskProps){

  const [taskContent, setTaskContent] = useState('');

  function handleCreateTask(event: FormEvent<HTMLFormElement>){
    event.preventDefault();
    
    createNewTask(taskContent);
    setTaskContent('');
  }

  return(
    <form className={styles.newTask} onSubmit={handleCreateTask}>
      <input 
        type="text" 
        name="taskContent" 
        placeholder="Adicione uma nova tarefa" 
        value={taskContent}
        onChange={(event) => setTaskContent(event.target.value)}
      />
      <button className={styles.submit}>
        <span>Criar</span>  
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}