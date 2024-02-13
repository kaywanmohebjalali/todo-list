import {Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Todos from "./pages/todos/Todos";
import Header from "./components/header/Header";
import TodoProvider from "./contex/Todoprovider";


function App() {
  return (
    <div >
          <Header/>
             <div className="md:container mx-auto px-6 md:px-0 ">
          <Routes>

             <Route path="/" element={<Home/>}/>
             <Route path="/todos" 
             element={
               <TodoProvider>
                  <Todos/>
               </TodoProvider>
            
            }/>
          </Routes>
            </div>

     </div>
  );
}

export default App;
