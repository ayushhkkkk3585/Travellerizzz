import { useState } from 'react'
import Navbar from './components/Navbar';
import { useUser } from "@clerk/clerk-react";
import './App.css'
import { SignedIn, SignedOut, SignInButton, UserButton } from "@clerk/clerk-react";
// import Maincontent from './components/Maincontent'
import Main from './components/Main';
import Anicursor from './components/Anicursor';
import Form from './components/Form';
import FlightClass from './components/FlightClass';
import Tickets from './components/Tickets';

function App() {
  const [count, setCount] = useState(0)
  // const db =getFirestore();

  return (
    <>
    <Anicursor/>
      {/* <Navbar /> */}
       <Main />
      {/* <Form/> */}
      {/* <FlightClass/> */}
      {/* <Tickets/> */}
    </>
  )
}

export default App
