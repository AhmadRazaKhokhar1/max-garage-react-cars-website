import React from 'react'
import { Link } from 'react-router-dom'
const Error = () => {
  return (
    <div style={{display:'block', marginTop:' 80px', marginLeft:'350px', width:'40vw', position:'fixed'}}>
      <main class="grid min-h-full place-items-center bg-transparent px-6 py-24 sm:py-32 lg:px-8">
  <div class="text-center">
    <p class="text-base font-semibold text-indigo-600">404</p>
    <h1 class="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
    <p class="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
    <div class="mt-10 flex items-center justify-center gap-x-6">
      <a href='@' class="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
        <Link to='/'>Go back home</Link></a>
      <a href="https://web.facebook.com/ahmadrazakhokhar786/" class="text-sm rounded-md bg-green-600 px-3.5 py-2.5 text-white font-semibold text-gray-900">Contact support <span aria-hidden="true">&rarr;</span></a>
    </div>
  </div>
</main>
    </div>
  )
}

export default Error
