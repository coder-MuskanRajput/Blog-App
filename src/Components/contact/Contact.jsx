import React from 'react'

const Contact = () => {
  return (
    <>
    
      <div className="min-h-screen flex bg-[url('https://www.hostinger.com/tutorials/wp-content/uploads/sites/2/2022/03/what-is-a-blog-1.webp')] items-center justify-center bg-gray-100">
      <div className="max-w-md w-full bg-white p-8 rounded shadow-md">
        <h2 className="text-3xl font-semibold mb-6 text-center text-gray-800">Contact Details</h2>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Name:</label>
          <p className="text-gray-800">Your Name</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Email:</label>
          <p className="text-blue-500">example@mail.com</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2">Phone:</label>
          <p className="text-gray-800">+1 (123) 456-7890</p>
        </div>
        <div className="flex items-center justify-center">
          <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 focus:outline-none focus:shadow-outline-blue active:bg-blue-800">
            Send Message
          </button>
        </div>
      </div>
    </div>
    </>
  )
}

export default Contact