import { useState, useEffect } from "react";


function App() {
  const [toDo, setToDo] = useState("");
  const onChange = (event) => setToDo(event.target.value);
  const [toDos, setToDos] = useState([]);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") {
      return;
    }
    setToDos(currentArray => [toDo, ...currentArray]);//함수 보내기
    setToDo("");//값 보내기
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Dos : {toDos.length}개</h1>
      <form onSubmit={onSubmit}>
        <input
          value={toDo}
          onChange={onChange}
          type="text" placeholder="write your o do..." />
        <button>Add To Do</button>
      </form>
      <hr />
      <ul>
      {toDos.map((item, index) => <li key={index}>{item}</li>)}
      </ul>
    </div>
  );
}

export default App;
