import { useState } from 'react'
import './NewEventForm.css'

// passa o addEvent como um prop
export default function NewEventForm({ addEvent }) {
    const [title, setTitle] = useState('')
    const [date, setDate] = useState('')
    const [location, setLocation] = useState('manchester')
    // const title = useRef()
    // const date = useRef()

    const resetform = () => {
       setTitle('')
       setDate('')
       setLocation('manchester')
        // title.current.value = ""
        // date.current.value = ""
    }

    const handleSubmit = (e) => {
        // preventDefault faz com que quando o form seja submetido a página não recarregue
        e.preventDefault()

        //console.log(title, date)

        // está retornando o event
        const event = {
            title: title,
            date: date,
            location: location,
            id: Math.floor(Math.random() * 10000)
        }
        
        console.log(event)

        addEvent(event)
        resetform()
    }
    // const handleChange = (e) => {
    //     // console.log(e.target.value)
    //     setTitle(e.target.value)
    // }

    return (
        // Exemplo de imputs controlados
        <form className='new-event-form' onSubmit={handleSubmit}>
            <label>
                <span>Event Title:</span>
                <input
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                    // ref={title}
                />
            </label>
            <label>
                <span>Event Date:</span>
                <input
                    type="date"
                    onChange={(e) => setDate(e.target.value)} 
                    value={date}
                    // ref={date}
                />
            </label>
            <label>
                <span>Event Location:</span>
                <select onChange={(e) => setLocation(e.target.value)}>
                    <option value="manchester">Manchester</option>
                    <option value="london">London</option>
                    <option value="cardiff">Cardiff</option>
                </select>
            </label>
            <button>Submit</button>
        </form>
    )
}
