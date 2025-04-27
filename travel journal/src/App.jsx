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
        {...entry}
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
