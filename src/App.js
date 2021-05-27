import {useState} from 'react';
import './App.css';
import AddUser from './components/Users/AddUser';
import UserList from './components/Users/UserList/UserList';

function App(props) {
  

  const [userData,setUserData] = useState([]);

  const getUserData = (username,age) => {
    setUserData(prevUsers => {
      return [...prevUsers,{username:username,age:age}]
    })
  }

  return (
    <div className="App">
      <AddUser getUser={getUserData}></AddUser>
      {userData.length ? <UserList userData={userData}></UserList> : ''}
    </div>
  );
}

export default App;
