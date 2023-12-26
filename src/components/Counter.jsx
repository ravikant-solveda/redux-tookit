import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { increment, decrement,incrementByAmount, decrementByAmount } from '../redux/counter/CounterSlice'

const Counter = () => {
    const countValue = useSelector((state) => state.counter.value)
    const dispatch = useDispatch()
    const [count, setCount] = useState('');

  return (
    <div>
        <h1 style={{textAlign:'center'}}>Counter</h1>
        <h1>Persons: {countValue}</h1>
       
       
            <table style={{border:'1px solid black'}}>
                <tr>
                    <td><label htmlFor="user">No. of Person</label></td>
                    <td><input type="text" value={count} name="counter" id="user" onChange={(e)=>{setCount(e.target.value)}}/><br /></td>
                </tr>
                <tr>
                    <td> <button  onClick={() => dispatch(increment())}>Add +1</button> </td>
                    <td><button onClick={() => dispatch(decrement())}>Remove -1</button></td>
                </tr>
                <tr>
                    <td><button onClick={() => dispatch(incrementByAmount(+count))}>Add *</button></td>
                    <td><button onClick={() => dispatch(decrementByAmount(+count))}>Remove *</button></td>
                </tr> 
            </table>
    
       
    </div>
  )
}

export default Counter