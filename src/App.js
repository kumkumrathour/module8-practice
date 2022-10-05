import React , {useState , Fragment} from 'react';
import './App.css';
import AddUser from './Users/AddUser';
import UsersList from './Users/UsersList';
function App() {
   const [userList , setUserList] = useState([]);
   const addUserHandler =  (uName , uAge) => {
           setUserList((prevUserList) =>{
            return [...prevUserList,
               {name:uName , age:uAge , id: Math.random().toString()},
              ];
           })
   }
  return (
    <Fragment>
          <AddUser onAddUser={addUserHandler} />            
          <UsersList users={userList}/>
        
    </Fragment>
  );
}

export default App;
