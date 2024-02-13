import { useContext, useState } from "react"
import todoContext from "../../contex/todoContext"

const FilterTodo =() =>{
    const {getTodos} =useContext(todoContext) 
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    
 const filter =(e)=>{
    let limit = e.target.value =='all'?null:e.target.value
    setLoading(true)
    setTimeout(() => {
        (async ()=>{
            getTodos && await getTodos(setLoading,setError,setSuccess,limit)
        })()
    }, 100);
    
}  
    
    return (
        <>

        {
             
            <div className="w-1/3 mt-10 flex items-center">
            <select onChange={e=>filter(e)} name="s" id="" className="w-2/3 bg-indigo-100 p-1 shadow-lg rounded">
                <option className="" value="all" >all</option>
                <option value="5">5</option>
                <option value="10">10</option>
                <option value="15">15</option>
                <option value="100">100</option>
            </select>
            {loading && <span className="ml-4  h-5 w-5 border-t-2 border-r-2 border-indigo-500 rounded-full  animate-spin"></span> }
            {error && <span className="ml-4  h-5 w-5  text-red-500 rounded-full  animate-bounce">Error</span> }
             
             </div>
        }

        </>
    )
}
export default FilterTodo