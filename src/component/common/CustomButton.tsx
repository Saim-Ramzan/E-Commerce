import React from 'react'

interface Props {
    name: string
    handleClick: VoidFunction
    Color: string
    bgColor: string
}
function CustomButton({name,handleClick, Color , bgColor}:Props) {
  return (
    <div>
        <button className= {`bg-${bgColor}-500 text-${Color} font-bold py-2 px-4 rounded`} onClick={handleClick}>{name}</button>
    </div>
  )
}

export default CustomButton