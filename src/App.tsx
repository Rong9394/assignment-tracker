import { Header } from "./components/Header";
import { Assignments } from "./components/Assignments";
import { useState } from "react";

function App() {
  
  const [list, setList] = useState<string[]>([]);

  const updateList = (title: string) => {
    setList([...list, title]);
  }

  const deleteFromList = (title: string) => {
    console.log(title);
    const i = list.indexOf(title);
    console.log(i);
    if(i>-1){
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
