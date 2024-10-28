import React from 'react'
import Nav from '../Nav';
import './ProfileScreen.css';
import { selectUser } from '../features/counter/userSlice';
import { useSelector } from 'react-redux';
import { auth } from '../firebase';

function ProfileScreen() {
    // Fetching users info from Redux
    const user = useSelector(selectUser);
  return (
    <div className='profileScreen'>
        <Nav />

        <div className="profileScreen__body">
            <h1>Edit Profile</h1>
            <div className="profileScreen__info">
                <img 
                    src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQBbMogdPslbZaa9Th1hRvCCtzveStfagjWjw&usqp=CAU'
                    alt=''
                />
                <div className="profileScreen__details">
                    <h2>{user.email}</h2>
                    <div className="profileScreen__plans">
                        <h3>Plans</h3>
                        
                        <button 
                        onClick={() => auth.signOut()} 
                        className='profileScreen__signOut'>
                            Sign Out
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProfileScreen;