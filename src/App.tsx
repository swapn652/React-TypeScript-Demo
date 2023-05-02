import React from 'react';
import './App.css';
import Greet from './components/Greet';
import Person from './components/Person';
import PersonList from './components/PersonList';
import Status from './components/Status';
import Heading from './components/Heading';
import Oscar from './components/Oscar';
import Button from './components/Button';
import Input from './components/Input';
import Container from './components/Container';
import Users from './components/Users';
import Counter from './components/Counter';
import {ThemeContextProvider} from './components/context/ThemeContext'
import Box from './components/context/Box'
import { UserContextProvider } from './components/context/UserContext';
import User from './components/context/User';
import DomRef from './components/useRef/DomRef';
import MutableRef from './components/useRef/MutableRef';

function App() {
  const person = {
    firstName: 'Swapnil',
    lastName: 'Pant'
}

const personList = [
  {
    firstName: 'Swapnil',
    lastName: 'Pant'
  },
  {
    firstName: 'ABC',
    lastName: 'PQR'
  },
  {
    firstName: 'LMN',
    lastName: 'XYZ'
  }
]

const[ name, setName ] = React.useState<string>('Swapnil')

  return (
    <div className="App">
      <Greet name="Swapnil" messageCount={200} isLoggedIn={true}/>
      <Person name={person}/>
      <PersonList nameList={personList}/>
      <Status status = 'loading'/>
      <Heading>HEHE BOI</Heading>
      <Oscar>
        <Heading>YEET</Heading>
      </Oscar>
      <Button handleClick={(event, id)=> console.log("hello", event, id)}/>
      <Input value={name} handleChange={(event) => {console.log(event); setName(event.target.value)}}/>
      <Container styles={{border: '1px solid black', padding: '1rem'}}/>
      <Users/>
      <Counter/>
      <ThemeContextProvider>
        <Box/>
      </ThemeContextProvider>
      <UserContextProvider>
        <User/>
      </UserContextProvider>
      <DomRef/>

      <MutableRef/>
    </div>
  );
}

export default App;
