import React, { useState } from 'react';
import './App.css';
import User from './components/User/User';
import Cart from './components/Cart/Cart';
import { useEffect } from 'react';

function App() {
   const [users, setUsers]= useState([]); 
   const [cart, setCarts] = useState([]);
   const [team, setTeam] =useState([]);

    useEffect(()=>{
        fetch('https://randomuser.me/api/?results=15')
        .then (res =>res.json())
        .then (data => {
           setUsers(data.results);
          const result = data.results.map(user =>{
             user.salary = Math.floor(Math.random()*10000);
             return user;
           })
           setUsers(result);
        })
    }, [])
    const handleAddUser = (user,name) =>{
      const newCarts= [...cart , user];
      setCarts(newCarts);
      // setTeam ([...team, name]);
    }
  return (
    <div className="App">
      <h1>Users loaded: {users.length}</h1>
      <ul>
        {
          team.map(m => <li>{m}</li>)
        }
      </ul>
      <Cart cart={cart}></Cart>
      
        {
          users.map(user => <User key={user.cell}user={user} handleAddUser={handleAddUser}></User>)
        }
      <header className="App-header">

       </header>
    </div>
  );
}

export default App;
