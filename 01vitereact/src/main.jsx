import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

function MyApp() {
  return(
    <a href="https://www.google.com">click me to visit google MyApp</a>
  )
}

// const reactElement = {
//   type : 'a',
//   props : {
//       href : 'https://www.google.com',
//       target : '_blank'
//   },
//   children : 'click me to visit google reactElement' 
// }

const anotherReactElement = (
  <a href="https://www.google.com">click me to visit google anotherReactElement</a>
)

const reactElement = React.createElement(
  'a',
  { href : 'https://www.google.com', target : '_blank' },
  'click me to visit google reactElement'
)

ReactDOM.createRoot(document.getElementById('root')).render(
    reactElement
)