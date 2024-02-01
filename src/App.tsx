import { useState } from 'react';
import Home from './components/Home';
const App = () => {

  const [teksti, setText] = useState('bombo');
  const [counter, setCounter] = useState(0);

  return (
    <>
      <h2 onClick={()=>{
        setCounter(counter+1)
        setText ('Hello world')
        console.log('Update test',teksti)
      }}> {teksti} Counter: {counter}</h2>
      <h1>My App</h1>
      <Home />
    </>
  );
};
export default App;
