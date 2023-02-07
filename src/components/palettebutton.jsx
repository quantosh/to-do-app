import React from 'react'

const PaletteButton = ({ color = 'bg-slate-300', handleClick }) => {
  return (
    <button onClick={() => handleClick(color)} className={`m-1 w-6 h-6 rounded-full ${color} border-transparent border-2 cursor-pointer hover:border-white`} />
  )
}

export default PaletteButton
