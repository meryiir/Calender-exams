import React from 'react'

const Input = ({type, className, id, name}) => {
  return (
    <input
            type={type}
            name={name}
            id={id}
            className={className}
          />
  )
}

export default Input
