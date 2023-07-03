import React from 'react'

const FirstForm = () => {
  return (     
      <form className='mb-0 space-y-6'>
        <div className='grid gap-4 place-content-center item-center'>
          <h1 className='text-gray-700 pb-8 font-bold text-2x1'>Person Info</h1>
        </div>
        <div className='mb-4'>
          <label className="block text-sm font-semibold text-gray-700" 
          htmlFor='Name'      
          >
            Name
          </label>
          <div className='mt-1'> 
          <input type="text"/>
          </div>       
        </div>

        <div className='mb-4'>
          <label className="block text-sm font-semibold text-gray-700" 
          htmlFor='Email'      
          >
            E-mail
          </label>
          <div className='mt-1'> 
          <input type="email"/>
          </div>       
        </div>
      </form> 
  )
}

export default FirstForm