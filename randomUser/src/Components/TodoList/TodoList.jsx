import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { fetchTodo } from '../../redux/slices/todoSlice' 
function TodoList() {
  const dispatch = useDispatch()
  const state = useSelector((state) => state);
  console.log("state", state);

  if(state.todo.isLoading){
    return <h1>Loading....</h1>
  }
    return (
    <>
    <div className='flex flex-wrap justify-center m-5'>
        <button onClick={(e) => dispatch(fetchTodo())} className='bg-black text-white rounded-md py-1 px-1 hover:bg-slate-700'>fetch</button>
        {
            state.todo.data && state.todo.data.map(e => <li>{e.title}</li>)
        }
    </div>
    </>
  )
}

export default TodoList