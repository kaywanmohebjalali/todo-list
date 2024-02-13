import { Link } from "react-router-dom"
import todoContext from "../../contex/todoContext"
import { useContext, useState } from "react"

const DeleteTodo = ({todo})=>{
    const {deleteTodo} =useContext(todoContext) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)

    const handlerUpdate =async ()=>{
        
        await deleteTodo(setLoading,setError,todo)
        }

if(error){
     setTimeout(() => {
        setError(false)
 }, 2000)
}

    return(
        <div className="flex items-center">
            <Link onClick={handlerUpdate}  className="hover:text-red-500">
                {
                loading && <p className="  h-4 w-4  border-t-2 border-r-2 border-red-500 rounded-full  animate-spin "></p> 
                || 
                error && <p className="mx-2  h-5 w-5  text-red-500 rounded-full animate-bounce">Error</p>
                ||
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-5 h-6"><path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" /></svg>
                }    
            </Link>
        </div>
     )


}

export default DeleteTodo