"use client"

import { useState, useEffect } from "react"
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const cookieConsent = localStorage.getItem("cookieConsent")
    if (!cookieConsent) {
      setIsVisible(true)
    }
  }, [])

  const handleAccept = () => {
    localStorage.setItem("cookieConsent", "accepted")
    setIsVisible(false)
  }

  const handleDecline = () => {
    localStorage.setItem("cookieConsent", "declined")
    setIsVisible(false)
  }

  if (!isVisible) return null

  return (
    <div className="fixed bottom-4 left-1/2 -translate-x-1/2 bg-card border border-border shadow-xl px-6 py-5 z-50 max-w-2xl w-full mx-4 rounded">
      <div className="flex flex-col gap-4">
        <div>
          <h3 className="text-lg font-serif font-bold text-foreground mb-2">Koristenje kolacica</h3>
          <p className="text-sm text-muted-foreground leading-relaxed">
            Ovaj portal koristi kolacice za poboljsanje korisnickog iskustva. Prihvacanjem omogucujete personalizirani
            sadrzaj i analizu posjeta.{" "}
            <Link href="/cookie-policy" className="text-primary underline underline-offset-4 hover:text-primary/80">
              Procitajte vise
            </Link>
          </p>
        </div>
        <div className="flex gap-3">
          <Button onClick={handleAccept} className="flex-1 bg-primary hover:bg-primary/90 text-primary-foreground h-10">
            Prihvati
          </Button>
          <Button
            onClick={handleDecline}
            variant="outline"
            className="flex-1 border-border text-foreground hover:bg-secondary h-10 bg-transparent"
          >
            Odbij
          </Button>
        </div>
      </div>
    </div>
  )
}
