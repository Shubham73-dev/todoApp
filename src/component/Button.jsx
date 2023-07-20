import React from 'react'

const Button = ({ value,operation,className }) => {
  return (
    <button onClick={operation} className={className}>{value}</button>
  )
}

export default Button