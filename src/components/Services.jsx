import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
// import { fetchTodos } from '../redux/counter/ThunkSlice';
import { fetchTodos } from '../redux/thunk/user';
import { addUser, removeUser } from '../redux/counter/ThunkSlice';
const Services = () => {
    const {user, status, entities} = useSelector((state) => state.user);
    const dipatch = useDispatch();

  return (
    <div> 
        <h1 style={{textAlign:'center'}}>Using the createAsyncThunk with redux</h1>

        <h4>{user}</h4>
        <button onClick={()=>(dipatch(addUser()))}>add +1</button>
        <button onClick={()=>(dipatch(removeUser()))}>remove -1</button>

        <h1>{status}</h1>

        <button onClick={()=>{dipatch(fetchTodos())}}>click me</button>
        {
            entities.map((value)=>(
               <table>
                <tr>
                    <td>{value.id}</td>
                    <td>{value.userId}</td>
                    <td>{value.body}</td>
                    <td>{value.title}</td>
                </tr>
               </table>
            ))
        }
    </div>
  )
}

export default Services