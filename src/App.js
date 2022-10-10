import { useState } from "react";
import MyButton from "./Components/MyButton";
import MyInput from "./Components/MyInput";
import MyWords from "./Components/MyWords";

function App() {
   
  const [value,setValue] = useState('')

  const [letters,setLetters] = useState([

  ])

  const [result,setResult] = useState('')

 
  const onChange = (e)=>{
    setValue(e.target.value)
    setLetters([])
    setResult('')
  }

  const addLetter = (e)=>{
    e.preventDefault()
    if(value.length<=letters.length){
      return
    }

    const newLetter = {
      id: Date.now(),
      value: value[letters.length]
    }

    setLetters([...letters,newLetter])
    
  }

  const addResult = (word)=>{
    if(letters.length === result.length){
      return
    }
    setResult(result+word)
  }

  return (
    <div className="App">
     <MyInput
     type = 'text'
     value = {value}
     onChange = {onChange}
     />
     <MyWords addResult = {addResult} letters={letters}/>

     <MyButton onClick = {addLetter}> Добавить букву </MyButton>

     <h2>Результат: {result}</h2>

    </div>
  );
}

export default App;
