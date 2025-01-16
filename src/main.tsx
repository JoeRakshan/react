import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.tsx'
// import Garage from './components/Garage.tsx'
import Color from './components/Color.tsx'
import Class_state from './components/Class_state.tsx'
import Bikes from './components/Bikes.tsx'
import List from './components/list.tsx'
import Timer from './components/Timer.tsx'
import Forms from './components/Forms.tsx'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    {/* <Color />
    <Class_state />
    <Bikes />
    <List />
    <Timer /> */}
    {/* <Garage /> */}
    {/* <App /> */}
    <Forms />
  </StrictMode>,
)
