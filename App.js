import React, { useState } from "react";
import "./index.css";
import TodoList from "./TodoList";


  const App = () => {
   const [inputList, setinputList] = useState("");
    const [items, setItems] = useState([]);

   const itemEvent=(event)=> {

    setinputList(event.target.value);
   };

   const listofItems = () => {
      setItems((olditems)  => {

     return [...olditems, inputList];
      });
      setinputList("");
   };
   const deleteItems =(id) => {
    console.log('deleted');
      setItems((olditems) => {
        return olditems.filter((arrElem, index) => { 
           return index!==id;
        })
      })
 
 };

  return (
  <>
    <div className="main_div">
    <div className="center_div">
   <br />
        <h1> Todo List </h1>
        <br />
        <input type ="text" placeholder="Add a Items" 
         value={inputList}
         onChange={itemEvent}/>
          <button onClick= {listofItems} > + </button>
        <ol>
          {/* <li>{inputList}</li> */}

        { items.map((itemval,index) => {
         return <TodoList 
          key={ index}  
          id ={index} 
          text={itemval} />;
          onselect = {deleteItems}
          

         })}

        </ol>

    </div>
 </div>

  </>

  );
};
export default App;
