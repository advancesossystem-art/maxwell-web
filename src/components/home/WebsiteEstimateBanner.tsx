"use client"
import { useState, useEffect } from "react"
import Link from "next/link"

export default function WebsiteEstimateBanner() {
  const [visible, setVisible] = useState(false)
  const [dismissed, setDismissed] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      if (!dismissed) setVisible(true)
    }, 30000)

    const handleScroll = () => {
      const scrolled = window.scrollY / (document.documentElement.scrollHeight - window.innerHeight)
      if (scrolled > 0.6 && !dismissed) setVisible(true)
    }

    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => {
      clearTimeout(timer)
      window.removeEventListener("scroll", handleScroll)
    }
  }, [dismissed])

  if (!visible || dismissed) return null

  return (
    <div className="fixed bottom-6 right-6 z-50 max-w-sm bg-white border border-gray-200 rounded-xl shadow-xl p-5">
      <button
        onClick={() => { setVisible(false); setDismissed(true) }}
        className="absolute top-3 right-3 text-gray-400 hover:text-gray-600 text-lg leading-none"
        aria-label="Dismiss"
      >
        ×
      </button>
      <p className="text-sm font-semibold text-gray-900 mb-1">
        Need a website for your business?
      </p>
      <p className="text-xs text-gray-500 mb-3">
        Manufacturer websites from ₹75,000 · Response in 24 hours
      </p>
      <div className="flex gap-2">
        <Link
          href="/get-estimate?service=Manufacturer+Website&source=homepage-popup"
          className="flex-1 bg-blue-600 text-white text-xs font-semibold px-3 py-2 rounded-md text-center hover:bg-blue-700 transition"
        >
          Get Free Estimate
        </Link>
        <a
          href="https://wa.me/919586868538?text=Hi%20Maxwell%2C%20I%20need%20a%20website%20for%20my%20business."
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 bg-green-500 text-white text-xs font-semibold px-3 py-2 rounded-md text-center hover:bg-green-600 transition"
        >
          WhatsApp
        </a>
      </div>
    </div>
  )
}
