import { Check, Trash } from 'phosphor-react';
import styles from './Task.module.css';

export function Task() {
  return(
    <div className={styles.task}>
      <label className={styles.check}>
        <input type="checkbox" title="Concluída ?" id="check"/>
        <span>
          <Check weight='bold' width={12} visibility="hidden" className={styles.check}/>
        </span>
      </label>
      <p>
        Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.
      </p>
      <button title='Excluir' className={styles.trash}>
        <Trash weight='bold'/>
      </button>
    </div>
  )
}