import React from 'react'

const Contact = () => {
  function contact(){

  }
  return (
    <div>
     <form method='POST' className="contactForm" onSubmit={contact}>
              
              <div className="mb-4">
                <label htmlFor="name" className="block text-sm font-medium text-gray-600">Name</label>
                <input required type="text" id="name" name="ContactName" className="mt-1 p-2 w-full border rounded-md" autoComplete='on' autoCapitalize='on'/>
              </div>

              
              <div className="mb-4">
                <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
                <input required type="email" id="contactEmail" name="email" className="mt-1 p-2 w-full border rounded-md" autoComplete='on'/>
              </div>

            
              <div className="mb-4">
                <label htmlFor="userMessage" className="block text-sm font-medium text-gray-600">Your message</label>
                <textarea 
                type="text" 
                id="userMessage" 
                name="userMessafe" 
                className="mt-1 p-2 w-full border rounded-md" 
                rows={5} cols={20}
                style={{resize:'none'}}
                />
              </div>

            
              <button type="submit" className="btn-primary">
                Send
              </button>

          </form>
    </div>
  )
}

export default Contact
