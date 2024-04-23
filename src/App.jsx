import { useState } from 'react'
import './App.css'
import MyButton from './MyButton'

function App() {
  const [count, setCount] = useState(0)

  const handleclickMe = () => {
    alert("You have clicked on CLICK ME button.")
  }

  const handleLogIn = () => {
    console.log("Enter your LOG IN credentials.")
  }

  const handleCart = () => {
    alert("Your product has been added to CART.")
  }

  const handlePayment = () => {
    prompt("Enter PAYMENT of the product:")
  }

  const handleTrackOrder = () => {
    confirm("Your order has been TRACKED!")
  }

  return (
    <>
    <MyButton buttonText="Click me" bgColor="red" clickHere={handleclickMe} fontStyle="sans-serif" />
    <MyButton buttonText="Log in" bgColor="blue" clickHere={handleLogIn} fontStyle="cursive" />
    <MyButton buttonText="Cart" bgColor="orange" clickHere={handleCart} fontStyle="monospace" />
    <MyButton buttonText="Payment" bgColor="green" clickHere={handlePayment} fontStyle="fantasy" />
    <MyButton buttonText="Track order" bgColor="violet" clickHere={handleTrackOrder} fontStyle="serif" />
    </>
  )
}

export default App
