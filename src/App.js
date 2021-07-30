import React from 'react';
import User from "./components/User/User";
import UserList from "./components/User/UserList";

function App() {

  const[usersList, setUsersList] = React.useState([]);

  const addUserHandler = (uName, uAge) =>{

    setUsersList((prevUsersList) => {
      return [...prevUsersList, {id : Math.round(Math.random().toString()),name : uName, age : uAge}]
    })

  };


  return (
    <React.Fragment>
      <User onAdduser={addUserHandler}/>
      <UserList users={usersList}/>
    </React.Fragment>
  );
}

export default App;
