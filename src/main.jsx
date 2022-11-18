import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'



ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <><App name="YASH" role="student"/>
    <App name="DHRUV" role="ceo"/>
    <App name="SOHAM" role="client"/>
    <App name="PAVAN" role="head"/></>
  </React.StrictMode>
)
