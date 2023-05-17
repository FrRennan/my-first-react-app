import React from "react"
import styles from './EventList.module.css'

// recebe a lista de eventos e a fanção handleclick
export default function EventList({ events, handleClick }) {
  return (
    <div>
        {events.map((event, index) => (
            // aplica o styles do Eventlist.module.css
            <div className={styles.card} key={event.id}> 
              <h2>{index} - {event.title}</h2>
              <p>{event.location} - {event.date}</p>
              {/* ativa a handleClick passando o id do event  */}
              <button onClick={() => handleClick(event.id)}>delete event</button>
            </div>
        ))}
    </div>
  )
}
