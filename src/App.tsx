import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  
  // state that holds a list of added assignments.
  // acts as local database
  const [list, setList] = useState<Array<[string, Date|undefined]>>([]);
  // function to update the list
  const updateList = (title: string, dueDate:Date|undefined) => {
    setList([...list, [title, dueDate]]);
  }
  // function to delete from the list
  const deleteFromList = (title: string) => {

    // loop through the list to find elment that has given title.
    // for the sake of simplicity, i only deal with the first hit.
    // therefore it may occur that deleting one entry results in
    // deleting another entry before it, as a result of duplicate titles.
    console.log(title);
    let i = 0;
    for(i; i<list.length; i++) {
      if(list[i][0]===title){
        break;
      }
    }
    console.log(i);

    // i<list.length means an element with matching title is found.
    // to delete element from list, avoid using built-in function that 
    // directly modifies the current list (and therefore the current state).
    // instead, use functions that return a new list.
    // here, i use slice method to reconstruct the fist half up to the index 
    // of the unwanted element and the second half and then concat them.
    if(i<list.length){
      let firstHalf = list.slice(0, i);
      let secondHalf = list.slice(i+1, list.length);
      let newList = [...firstHalf, ...secondHalf];
      console.log(newList);
      setList(newList);
    }
  }


  return (
    <>
      <Header updateList={updateList}/>
      <Assignments list={list} deleteFromList={deleteFromList}/>

    </>
  );
}

export default App;
