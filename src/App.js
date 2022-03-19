import './App.css'
import React, { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal'

function App() {
  const [showModal, setShowModal] = useState(true)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([
    {title: "Big boy", id: 1},
    {title: "Small boy", id: 2},
    {title: "The BOY", id: 3}
  ])

  console.log(showModal)

  const handleClick = (id) => {
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    console.log(id)
  }

  const handleClose = () => {
    setShowModal(false)
  }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">
      
      <Title title="Events in your area" subtitle= {subtitle}/>

      {showEvents && (
        <div>
          <button onClick={() => setShowEvents(false)}>Hide events</button>         
        </div>
      )}
      {!showEvents && (
        <div>
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
     {showEvents && events.map((event, index) => (
       <React.Fragment key={event.id}>
         <h2>{index} - {event.title}</h2>
         <button onClick={() => handleClick(event.id)}>Delete event</button>
       </React.Fragment>
     ))}

      {/* <Modal>
        <h2>10% Off Coupon Code!!</h2>
        <p>Use the code NINJA10 at the checkout.</p>
      </Modal> */}
      {showModal && (
        <div>
          <button onClick={() => setShowModal(false)}>Show Modal</button>
        </div>
      )}
      {!showModal && <Modal handleClose={handleClose}>
        <h2>Terms and conditions</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Accusamus itaque dolore nihil omnis, odio, sit corporis unde veritatis, 
        illum quidem totam deleniti ipsam asperiores cumque laborum officia rerum! Obcaecati, blanditiis!</p>
        <button onClick={() => setShowModal(true)}>Hide Modal</button>
      </Modal>}
    </div>
  );
}

export default App;
