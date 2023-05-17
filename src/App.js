import './App.css';
import { useState } from 'react'
import Title from './components/Title'
import Modal from './components/Modal';
import EventList from './components/EventList';
import NewEventForm from './components/NewEventForm';

function App() {
  //const [name, setName] = useState('mario')
  const [showModal, setShowModal] = useState(false)
  const [showEvents, setShowEvents] = useState(true)
  const [events, setEvents] = useState([])

  const addEvent = (event) => {
    setEvents((prevEvents) => {
      return [...prevEvents, event]
    })
    setShowModal(false)
  }

  const handleClick = (id) => {
    // setName('luigi')
    setEvents((prevEvents) => {
      return prevEvents.filter((event) => {
        return id !== event.id
      })
    })
    //console.log(id)
  }

  // const handleClose = () => {
  //   setShowModal(false) 
  // }

  const subtitle = "All the latest events in Marioland"

  return (
    <div className="App">

      {/* componente Title usando props */}
      <Title title="Events in your area" subtitle={subtitle} />

      {/* se showEvents for true ele mostra o botão hide */}
      {showEvents && (
        <div>
          {/* seta o showEvents para false */}
          <button onClick={() => setShowEvents(false)}>hide events</button>
        </div>
      )}
      {/* se showEvents for false ele mostra o botão hide */}
      {!showEvents && (
        <div>
          {/* seta o showEvents para true */}
          <button onClick={() => setShowEvents(true)}>show events</button>
        </div>
      )}
      
      {/* só roda o que está do lado direito se o que está no esquerdo for true (esquedo && direito)*/}
      {/* passa a lista de eventos e também passa a função de handleClick */}
      {showEvents && <EventList events={events} handleClick={handleClick}/>}

        {/* <Modal>
          <h2>10% off Coupon Code!!</h2>
          <p>Use the code Ninja10 at the checkout.</p>
        </Modal> */}
        {/* passa a funcão handleClose como prop */}
        {showModal && <Modal isSalesModal={true}>
          {/* passa a função addEvent */}
          <NewEventForm addEvent={addEvent} />
        </Modal>
        }
          <div>
            <button onClick={() => setShowModal(true)}>Add New Event</button>
          </div>
        
    </div>
  );
}

export default App;
