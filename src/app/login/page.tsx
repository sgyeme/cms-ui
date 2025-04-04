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
    <div className="flex flex-col items-center justify-center p-6">
      <h1 className="text-2xl font-bold mb-4">Login</h1>
      <input className="border p-2 mb-2 w-64" placeholder="Username" onChange={(e) => setUsername(e.target.value)} />
      <input className="border p-2 mb-4 w-64" type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
      <button className="bg-blue-600 text-white px-4 py-2" onClick={handleLogin}>Login</button>
    </div>
  )
}
