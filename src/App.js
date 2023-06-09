import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  return (
    <div className="App">
      <Counter></Counter>
      <ExternalUsers></ExternalUsers>
    </div>
  );
}
function ExternalUsers(){
  const [users, setUsers]=useState([]);
  useEffect( ()=>{
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res=>res.json())
    .then(data=>setUsers(data));
  },[]);
  return (
    <div>
      <h2>External Users: </h2>
      <p>{users.length}</p>
      {
      users.map(user=><User name={user.name} email={user.email}></User>)
      }
    </div>
  )
}
function User(props){
  return (
    <div style={{border: '4px solid blue', margin: '10px', backgroundColor: 'black', color:' white', borderRadius: '10px'}}>
      <h2>Name: {props.name}</h2>
      <p>Email: {props.email}</p>
    </div>
  )
}


function Counter(){
  const [count, setCount]=useState(0);
  const increaseCount=()=>setCount(count + 1);
  const decreaseCount=()=>setCount(count-1);
  // multiline function for count
  // const increaseCount=()=>{
  //   const newCount=count + 1;
  //   setCount(newCount);
  // }
  return (
    <div>
      <h1>count: {count}</h1>
      <button onClick={increaseCount}>increase</button>
      <button onClick={decreaseCount}>decrease</button>
    </div>
  )
}


export default App;


// function App() {
//   const products=[
//     {name: 'laptop', price: 57000},
//     {name: 'phone', price: 19500},
//     {name: 'watch', price: 1500},
//     {name: 'headphone', price: 350}
//   ];
//   return (
//     <div className="App">
//       {
//         products.map(product=><Product name={product.name} price={product.price}></Product>)
//       }

//       {/* <Product name='leptop' price='20000'></Product> */}
//     </div>
//   );
// }
// function Product(props){
//   console.log(props);
//   return (
//     <div className='product'>
//       <h3>Name: {props.name}</h3>
//       <p>Price: {props.price}</p>
//     </div>
//   )
// }
