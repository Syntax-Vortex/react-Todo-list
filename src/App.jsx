import { useEffect, useState } from "react";
import {Header} from "./components/Header.jsx";
import { Tabs } from "./components/Tabs.jsx";
import { TodoInput } from "./components/TodoInput.jsx";
import { TodoList } from "./components/TodoList.jsx";

function App() {
    // const todos = [,
    //                { input: 'Get the groceries!', complete: false },
    //                { input: 'Learn how to web design', complete: false },
    //                { input: 'Say hi to gran gran', complete: true },];
    
    const [todos, setTodos] = useState([{ input: 'Hello! Add your first todo!', complete: false }]);
    const [selectedTab, setSelectedTab] = useState('All');

    function handleAddingTodos(newTodo){
        const newTodoList = [...todos, {input: newTodo, complete: false}];
        setTodos(newTodoList);
        saveTodo(newTodoList);
    }

    function handleCompleteTodo(todoIndex){
        const newTodoList = [...todos];
        newTodoList[todoIndex].complete = true;
        setTodos(newTodoList);
        saveTodo(newTodoList);
    }

    function handleDeleteTodo(todoIndex){
        const newTodoList = todos.filter((val, valIndex)=>{
            return valIndex !== todoIndex;
        });;
        setTodos(newTodoList);
        saveTodo(newTodoList);
    }

    function saveTodo(newTodoList){
        localStorage.setItem('todo-list', JSON.stringify(newTodoList));
    }

    useEffect(()=>{
        let db = localStorage.getItem('todo-list');
        if(db){
            setTodos(JSON.parse(db));
        }
    }, [])

  return(   
    <>
    <Header todos = {todos}/>
    <Tabs selectedTab = {selectedTab} setSelectedTab = {setSelectedTab} todos = {todos}/>
    <TodoList selectedTab = {selectedTab} todos = {todos} handleDeleteTodo = {handleDeleteTodo} handleCompleteTodo = {handleCompleteTodo}/>
    <TodoInput handleAddingTodos={handleAddingTodos}/>
    </>
  );
}

export default App
