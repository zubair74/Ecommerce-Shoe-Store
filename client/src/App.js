import React, { useState ,useEffect} from "react";
import axios from 'axios'
import './App.css';
import Routes from './components/routes'

function App() {

  let check_token = localStorage.getItem('token1')
  if(check_token === null){
    const randNum = Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15);
    localStorage.setItem('token1',randNum)

  }
  

  let [signupstatus, setsignupstatus] = useState('null')

  const [shoes, setShoes] = useState(null);

  const [cart, setCart] = useState([]);

  let [count, setCount] = useState(0)


const ProductsData = async () => {

  let response = await fetch('http://localhost:5001/data')
  .then((response) => response.json())
  .then((data) => setShoes(data))
    
}

window.onload = ProductsData()


  const loginInfo = async (loginfo) => {

    console.log(loginfo);

    let response = await fetch('http://localhost:5001/api/user/login', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(loginfo)
    });

    let result = await response.json();
    let token = result.User._id

    localStorage.setItem('token',token)
    
    let fetchedItems = result.User.items

    setCart(cart.concat(fetchedItems))

    

    console.log(count);



    localStorage.setItem("auth-token", result.mytoken)
    localStorage.setItem("user_name", result.name)
    
  }


  const SignupInfo = async (signupinfo) => {
    console.log(signupinfo);
    let response = await fetch('http://localhost:5001/api/user/register', {
      method: 'POST',
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(signupinfo)
    });

    let signup_result = await response.json();
    localStorage.setItem('token',signup_result._id)

    setsignupstatus('account created')


  }

  
  
  let [shoe, setShoe] = useState(0);
  let [shoedatas,setshoedatas] = useState([])


  const updateState = (element) => {
    setCart([...cart, element]);
    
  }

  const addCart = async (name) => {
    
    shoes.forEach(function checkShoes(element, index) {
      if (element.name === name) {
        console.log(element);
        let userId = localStorage.getItem('token')
        let loggedout_userId = localStorage.getItem('token1')
        console.log(userId);

        if(userId !== null){
          element.userId = userId

        }
        else{
          element.userId = loggedout_userId
        }
        setCart(cart.concat(element))

        updateState(element)
        
        return cart;
        
      }
            
          
          });
              

    

    setCount(count + 1);


    console.log(count);

    console.log(cart);

    
  };

  useEffect(() => {
    console.log('new state', cart)
    sendData()
  }, [cart])

const sendData = () =>{
  let logged_user_token = localStorage.getItem('token')
  if(logged_user_token !== null){

    let response = fetch('http://localhost:5001/api/user/additems', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
        });
  }

  else{
    let loggedout_user_token = localStorage.getItem('token1')

    let response = fetch('http://localhost:5001/api/user/logoutitems', {
        method: 'POST',
        mode: 'cors',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(cart)
        });


  }

}

  

  const findShoe = (name) => {
    console.log(name);
    shoes.forEach(function checkShoe(element, index) {
      if (element.name === name) {
        setShoe(element);
        return shoe;
      }
    });
    console.log(shoe);
  };

  const searchShoe = (shoename) => {
    const myarray = [];

    shoes.filter((item) => {
      if (shoename === item.name) {
        myarray.push(item);
      }
      return myarray;
    });
    setShoes(myarray);
    console.log(shoes);

    
  };

  const getProd = async () =>{
    let userId = localStorage.getItem('token')
    let loggedout_user_token = localStorage.getItem('token1')
    console.log(userId);

    if(userId !== null){
      axios.get('http://localhost:5001/getProd', {
        params: {
          ID: userId
        }
      })
      .then(function (response) {
        // const items = JSON.parse(response)
        let fetchedProd = response.data.items
        setCart(fetchedProd)
      })
      .catch(function (error) {
        console.log(error);
      })
      

    }

    else{
      axios.get('http://localhost:5001/loggedprod', {
        params: {
          ID: loggedout_user_token
        }
      })
      .then(function (response) {
      
        let fetchedProd = response.data.userItems
        console.log(fetchedProd);
        setCart(fetchedProd)
        console.log(cart);
      })
      .catch(function (error) {
        console.log(error);
      })
      
    }

  }

  return (
    <Routes shoes={shoes} SignupInfo = {SignupInfo} signupstatus = {signupstatus} loginInfo = {loginInfo} addCart={addCart}
    cart={cart}
    count={count}
    findShoe={findShoe}
    shoe={shoe}
    searchShoe={searchShoe}
    ProductsData = {ProductsData} getProd = {getProd}/>
  );
}

export default App;
