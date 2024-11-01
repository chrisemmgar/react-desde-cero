import { useState } from 'react';
import './App.css';
import { Button, ButtonDec } from './components';

function App() {
  const [count, setCount] = useState(0);

  const countMore = () => {
    setCount((count) => count + 1)
  };

  const increaseLocalCount = () => {
    if (count > 0) {
      setCount((count) => count - 1)
    }
  }

  return (
    <>
      <div>
        <Button label={`Count is ${count}`} parentMethod={countMore} />
      </div>
      <div style={{padding: '3rem'}}>
        <ButtonDec label={`Count is ${count}`} parentMethod={increaseLocalCount} />
      </div>
    </>
  )
}

export default App
