import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Entry from './components/Entry'
import data from './data';


function App() {
  const [count, setCount] = useState(0);

  let entries = data.map(entry => {
    return (
      <Entry
        title={entry.title}
        country={entry.country}
        googleMapsLink={entry.googleMapsLink}
        dates={entry.dates}
        text={entry.text}
        image={entry.img}
      />
    );
  })

  return (
    <>
      <Header />
      <main className="container">
        {entries}
      </main>
    </>
  )
}

export default App
