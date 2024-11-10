import { useState } from 'react'
import './App.css'

function App() {
  const [num1, setNum1] = useState(0)
  const [num2, setNum2] = useState(0)
  const [result, setResult] = useState(null)

  const handleAddition = (e) => {
    e.preventDefault();
    setResult(Number(num1) + Number(num2));
  };
  const handleSub = (e) => {
    e.preventDefault();
    setResult(Number(num1) - Number(num2));
  };
  const handleMul = (e) => {
    e.preventDefault();
    setResult(Number(num1) * Number(num2));
  };
  const handleDev = (e) => {
    e.preventDefault();
    setResult(Number(num1) / Number(num2));
  };

  return (
    <div style={{ padding: '20px', maxWidth: '300px', margin: 'auto' }}>
      <div>
        <label>
          Number 1:
          <input
            type="number"
            value={num1}
            onChange={(e) => setNum1(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <div style={{ marginTop: '10px' }}>
        <label>
          Number 2:
          <input
            type="number"
            value={num2}
            onChange={(e) => setNum2(e.target.value)}
            style={{ marginLeft: '10px' }}
          />
        </label>
      </div>
      <button onClick={handleAddition} style={{ marginTop: '20px' }}>
        Add
      </button>
      <button onClick={handleSub} style={{ marginTop: '20px' , marginLeft: '20px' }}>
        Subtract
      </button>
      <button onClick={handleMul} style={{ marginTop: '20px', marginLeft: '20px' }}>
        Multiply
      </button>
      <button onClick={handleDev} style={{ marginTop: '20px',marginLeft: '20px' }}>
        Devide
      </button>
      {result !== null && (
        <div style={{ marginTop: '20px', padding: '10px', border: '1px solid #ccc' }}>
          Result: {result}
        </div>
      )}
    </div>
  )
}

export default App
