import { PlusCircle } from "phosphor-react";
import styles from "./NewTask.module.css";

export function NewTask(){
  return(
    <form className={styles.newTask}>
      <input type="text" placeholder="Adicione uma nova tarefa"/>
      <button className={styles.submit}>
        <span>Criar</span>  
        <PlusCircle size={16} weight="bold"/>
      </button>
    </form>
  )
}