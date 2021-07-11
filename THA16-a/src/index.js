import React from 'react';
import ReactDOM from 'react-dom';
import './style.css'

function Card() {
  return (
    <>
      <div className="container">
        <h1>TIGER</h1>
        <img src="https://images.theconversation.com/files/242298/original/file-20181025-71032-1hmrk2l.jpg?ixlib=rb-1.1.0&rect=0%2C584%2C5007%2C2503&q=45&auto=format&w=1356&h=668&fit=crop" alt="Oops!!the tiger is not available" />
        <p>When a man wants to murder a tiger he calls it sport; when a tiger wants to murder him he calls it ferocity.</p>
      </div>
    </>
  )

}

ReactDOM.render(<Card />, document.getElementById('root'))
