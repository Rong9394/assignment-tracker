import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

export function Assignments({list, deleteFromList}:{list: Array<[string, Date|undefined]>, deleteFromList:(title: string)=>void}) {
  
  // state to keep track of number of completed assignments
  const [completed, setCompleted] = useState(0);

  // handler to update number of completed assignments
  const updateCompleted = (f:boolean) => {
    if(!f){setCompleted(completed+1)}
    else if(f && completed> 0){setCompleted(completed-1)}
  }

  return (
    <section className={styles.assignments}>
      <header className={styles.header}>
        <div>
          <p>Created Assignments</p>
          <span>{list.length}</span>
        </div>

        <div>
          <p className={styles.textPurple}>Completed Assignments</p>
          <span>{completed} of {list.length}</span>
        </div>
      </header>

      <div className={styles.list}>
        {list.map((entry) => {return <Assignment title={entry[0]} dueDate={entry[1]} deleteFromList={deleteFromList} updateCompleted={updateCompleted} />})}
      </div>
    </section>
  );
}
