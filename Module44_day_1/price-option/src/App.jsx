
import { LineChart } from 'recharts';
import './App.css'
import Navbar from './components/Navbar/Navbar';
// import DaysiNave from './components/DaysiNave';
import PriceOptions from './components/PriceOptions/PriceOptions';
import Phones from './components/Phones/Phones';
 

function App() {

  return (
    <>
      
      <Navbar></Navbar>
      {/* <DaysiNave></DaysiNave> */}
      <PriceOptions></PriceOptions>
      <LineChart></LineChart>
      <Phones></Phones>

    </>
  )
}

export default App
