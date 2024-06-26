import React from 'react'

function Balance({value}) {
  return (
    <div className='flex p-5'>
        <div className='font-semibold text-lg'>
            Your Balance
        </div>
        <div className=' ml-4 text-lg'>
        Rs {value}
        </div>
    </div>
  )
}

export default Balance