import React from 'react'
import { account } from '../appwrite/appwriteConfig'
import { useDispatch } from 'react-redux'
import { removeUser } from '../utils/userSlice'
import { useNavigate } from 'react-router-dom'


const useSignout = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const signoutUser = async () => {

        try {

            await account.deleteSession('current');
            dispatch(removeUser());
            navigate("/");
            

            
        } catch (error) {
            console.log("signout error:",error.message);
        }

    }

    return {signoutUser};

}

export default useSignout;