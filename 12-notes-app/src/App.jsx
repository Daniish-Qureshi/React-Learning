import React, { useState } from 'react'

const App = () => {
  const [heading, setHeading] = useState('')
  const [details, setDetails] = useState('')
  const [notes, setNotes] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault()
    if (!heading.trim()) return
    setNotes((prev) => [...prev, { heading, details }])
    setHeading('')
    setDetails('')
  }

  return (
    <div className='min-h-screen bg-black text-white p-4 flex flex-col items-center'>
      <form
        className='flex flex-col lg:flex-row justify-between items-start gap-5 w-full max-w-4xl mb-10'
        onSubmit={handleSubmit}
      >
        <div className='flex flex-col bg-red-600 p-6 rounded-lg gap-6 w-full lg:w-1/2 shadow-lg'>
          <input
            type='text'
            value={heading}
            onChange={(e) => setHeading(e.target.value)}
            className='w-full px-5 py-2 border-2 border-white rounded outline-none font-medium bg-red-500 text-white placeholder-gray-200 transition duration-200 focus:bg-white focus:text-black'
            placeholder='enter task heading'
          />

          <textarea
            value={details}
            onChange={(e) => setDetails(e.target.value)}
            className='w-full px-5 py-2 border-2 border-white rounded outline-none font-medium h-20 resize-none bg-red-500 text-white placeholder-gray-200 transition duration-200 focus:bg-white focus:text-black'
            placeholder='enter task details'
          />

          <button
            type='submit'
            className='bg-white text-black px-5 py-2 rounded outline-none font-medium w-full lg:w-auto hover:bg-gray-200 transition duration-200'
          >
            Add notes
          </button>
        </div>

        <img
          className='w-full lg:w-1/2 object-cover rounded-lg shadow-lg'
          src='https://img.pikbest.com/png-images/20250417/professional-silhouette-of-a-man-working-on-laptop-at-desk-flat-vector-illustration_11670284.png!w700wp'
          alt='working on laptop'
        />
      </form>

      <div className='w-full max-w-4xl'>
        <h1 className='text-3xl font-bold mb-6'>Your Notes</h1>
        <div className='flex flex-wrap gap-6 justify-center'>
          {notes.length === 0 && (
            <p className='text-gray-300'>No notes yet. Add one above!</p>
          )}
          {notes.map((note, idx) => (
            <div
              key={idx}
              className='relative w-64 h-64 bg-white text-black rounded-lg p-4 shadow flex flex-col transform transition-transform duration-200 hover:scale-105 hover:shadow-xl'
            >
              <button
                onClick={() => setNotes(prev => prev.filter((_, i) => i !== idx))}
                className='absolute top-2 right-2 bg-red-500 text-white w-6 h-6 flex items-center justify-center rounded-full hover:bg-red-600'
                title='Delete note'
              >
                ✕
              </button>
              <h2 className='font-semibold mb-2 truncate'>{note.heading || 'sample notes'}</h2>
              <p className='text-sm overflow-auto flex-1'>{note.details || 'bacsics text'}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default App