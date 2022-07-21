import { PlusCircle } from "phosphor-react";
import { ChangeEvent, FormEvent, InvalidEvent, useState } from "react";
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

  function handleCreateWithEmptyInput(event: InvalidEvent<HTMLInputElement>){
    event.target.setCustomValidity('Digite uma tarefa!');
  }

  function handleInputTaskChange(event: ChangeEvent<HTMLInputElement>){
    event.target.setCustomValidity('');
    setTaskContent(event.target.value)
  }

  return(
    <form className={styles.newTask} onSubmit={handleCreateTask}>
      <input 
        type="text" 
        name="taskContent" 
        placeholder="Adicione uma nova tarefa" 
        value={taskContent}
        required
        onChange={handleInputTaskChange}
        onInvalid={handleCreateWithEmptyInput}
      />
      <button className={styles.submit}>
        <span>Criar</span>  
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}