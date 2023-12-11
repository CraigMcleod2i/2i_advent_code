import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [date, setDate] = useState('Please select a date')
  const [monthInputValue, setMonthInputValue] = useState('0')
  const [monthSubmitValue, setMonthSubmitValue] = useState('0')

  const handleDateChange = (e) => {
    setDate(e.target.value);
    setMonthInputValue(date.slice(5,7))
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    setMonthSubmitValue(monthInputValue)
  }
 
  const syrupTable = new Map([
    ['01', 'Mint'],
    ['02', 'Biscoff'],
    ['03', 'Amaretto'],
    ['04', 'Vinalla'],
    ['05', 'Pistachio'],
    ['06', 'Caramel'],
    ['07', 'Cherry'],
    ['08', 'Creme Brulee'],
    ['09', 'Maple Spice'],
    ['10', 'Pumpkin Spice'],
    ['11', 'Hazelnut'],
    ['12', 'Gingerbread']
  ])

  return (
    <>
      <div>
        <h1>Syrup Recommender ☕</h1>
        <form onSubmit={handleSubmit}>
          
          <p>
            Select a date:
            <input type="date" onChange={handleDateChange} required></input>
            <button type="submit">Go</button>
          </p>
          
          <p>
            Recommendation for today's date is: {syrupTable.get(monthSubmitValue)}
          </p>
          
        </form>
      </div>
    </>
  )
}

export default App
