import React from 'react'

function Button({text, onPress}) {
  return (
    <button type="button" onClick={onPress} className="text-white bg-gray-800 hover:bg-gray-900  font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 w-full mt-5">{text}</button>
  )
}

export default Button