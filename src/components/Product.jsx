import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { UpdateUser, OriginalUser } from '../redux/counter/UserSlice'; 

const Product = () => {
    const [user, setUser] = useState('');
    const userName = useSelector((state)=> state.username.User_name)
    const dispatch = useDispatch();
  return (
    <div>
        <h4 style={{textAlign: 'center'}}> Product Component</h4>

        <h1 style={{paddingBottom: '12px'}}>UserName:  {userName}</h1>
        <table>
            <tr>
                <td><label htmlFor="user">New User</label></td>
                <td><input type="text" value={user} name="user" id="user" onChange={(e)=>{setUser(e.target.value)}} /></td>
            </tr>
            <tr>
                <td>
                    <button onClick={()=>{dispatch(UpdateUser(user))}}>Update User</button>
                </td>
                <td>
                    <button onClick={()=>{dispatch(OriginalUser())}}>Original User</button>
                </td>
            </tr>
        </table>
        
        
        
    </div>
  )
}

export default Product