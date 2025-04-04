// src/app/login/page.tsx

'use client'

import { useState } from 'react'
import { login } from '@core/api/authService'  // Import from core/api/authService

export default function LoginPage() {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')


    const handleLogin = async () => {
        try {
            const data = await login(username, password)
            alert('Login successful!')
            console.log(data)  // Handle the response data (e.g., JWT token)
        } catch {
            alert('Login failed')
        }
    }




    return (
        <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
        <div className="max-w-md bg-white p-8 rounded-xl shadow-lg">
          <form className=" max-w-md max-h-md space-y-4 md:space-y-6 border  mx-auto">
            <h1 className="text-2xl font-bold mb-6 text-center">Login</h1>
      
            <input
              className="w-full border border-gray-300 rounded-md p-3 mb-4"
              placeholder="Username"
              onChange={(e) => setUsername(e.target.value)}
            />
      
            <input
              className="w-full border border-gray-300 rounded-md p-3 mb-6"
              type="password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
            />
      
            <button
              className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-md text-lg font-medium transition"
              onClick={handleLogin}
            >
              Login
            </button>
          </form>
        </div>
      </div>
      
    )
}
