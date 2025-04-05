// src/app/login/page.tsx
'use client'

import { useState } from 'react'
import { login } from '@core/api/authService'

export default function LoginPage() {
  const [username, setUsername] = useState('')
  const [password, setPassword] = useState('')

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()

    try {
      const data = await login(username, password)
      alert('Login successful!')
      console.log(data)
    } catch {
      alert('Login failed')
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-100 to-gray-200 px-4">
    <div className="w-[28rem] max-w-full bg-white p-10 rounded-2xl shadow-2xl border drop-shadow-lg">

      <form
        onSubmit={handleLogin}
        className="w-full max-w-md space-y-6 mx-auto p-10 drop-shadow-lg"
      >
        <h1 className="text-3xl font-extrabold text-center text-gray-800">
          Welcome Back
        </h1>
        <p className="text-center text-gray-500">Please enter your credentials</p>
  
        <div className="w-full">
          <label className="block text-gray-700 mb-1">Username</label>
          <input
            className="w-full border border-gray-300 rounded-lg p-2 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your username"
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
  
        <div className="w-full ">
          <label className="block text-gray-700 mb-1 ">Password</label>
          <input
            type="password"
            className="w-full border border-gray-300 rounded-lg p-2 m-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="Enter your password"
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
  
        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg text-lg font-semibold transition duration-300"
        >
          Login
        </button>
  
        <p className="text-sm text-center text-gray-500">
          Forgot your password? <a href="#" className="text-blue-600 hover:underline">Reset</a>
        </p>
      </form>
    </div>
  </div>
  
  )
}
