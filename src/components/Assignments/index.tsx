import { Assignment } from "../Assignment";
import styles from "./assignments.module.css";
import { useState } from "react";

export function Assignments({list, deleteFromList}:{list: string[], deleteFromList:(title: string)=>void}) {
  
  const [completed, setCompleted] = useState(0);

  const updateCompleted = (f:boolean) => {
    console.log(f);
    if(!f){setCompleted(completed+1)}
    else if(f && completed> 0){setCompleted(completed-1)}
  }
  console.log(completed);

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
        {list.map((title) => {return <Assignment title={title} deleteFromList={deleteFromList} updateCompleted={updateCompleted} />})}
      </div>
    </section>
  );
}
