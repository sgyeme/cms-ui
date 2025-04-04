import Image from "next/image";
// src/app/page.tsx (or in the root folder for App Router)

'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'

export default function HomePage() {

  const router = useRouter()

  useEffect(() => {
    
    // Redirect to /login when the homepage loads

    router.push('/login')
  }, [router])

  return null  // Optionally return null or some loading state
}


