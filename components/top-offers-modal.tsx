"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { Star } from "@/components/icons"
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog"
import type { SportsSite } from "@/types"

interface TopOffersModalProps {
  sites: SportsSite[]
}

export function TopOffersModal({ sites }: TopOffersModalProps) {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsOpen(true)
    }, 8000)

    return () => clearTimeout(timer)
  }, [])

  const handleClose = (open: boolean) => {
    setIsOpen(open)
  }

  const renderStars = (stars: number) => {
    const starElements = []
    const maxStars = 5

    for (let i = 0; i < maxStars; i++) {
      if (i < stars) {
        starElements.push(<Star key={i} className="h-4 w-4 fill-primary text-primary" />)
      } else {
        starElements.push(<Star key={i} className="h-4 w-4 text-muted" />)
      }
    }

    return starElements
  }

  const topSite = sites[0]

  if (!topSite) return null

  return (
    <Dialog open={isOpen} onOpenChange={handleClose}>
      <DialogContent className="w-[90vw] max-w-[420px] p-0 bg-card border border-border overflow-hidden rounded shadow-xl">
        <DialogHeader className="p-4 pb-3 bg-primary border-b-0">
          <DialogTitle className="text-center text-lg font-bold text-primary-foreground tracking-tight">
            Preporucena kladionica
          </DialogTitle>
        </DialogHeader>

        <div className="p-5">
          <div className="relative overflow-hidden bg-card border border-border shadow-sm rounded">
            <div className="bg-foreground p-5 text-center border-b border-border">
              <div className="relative bg-foreground h-16 w-full max-w-[180px] mx-auto mb-3 p-3">
                <Image src={topSite.logo || "/placeholder.svg"} alt={topSite.name} fill className="object-contain" />
              </div>
              <div className="flex items-center justify-center gap-2 mb-1">
                <div className="flex items-center justify-center gap-0.5">{renderStars(topSite.stars)}</div>
                <span className="font-bold text-base text-primary-foreground">{topSite.rating.toFixed(1)}</span>
                <span className="text-primary-foreground/70 text-xs">({topSite.reviews} recenzija)</span>
              </div>
            </div>

            <div className="p-5 text-center bg-secondary border-b border-border">
              <div className="text-xs text-accent uppercase font-bold mb-2 tracking-wider">Ekskluzivna ponuda</div>
              <p className="font-bold text-foreground leading-tight mb-1 text-2xl">{topSite.bonus}</p>
            </div>

            <div className="p-5 text-center">
              <a
                href={topSite.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block w-full px-6 py-3 bg-primary hover:bg-primary/90 text-primary-foreground text-sm font-bold text-center transition-all duration-200 mb-3 transform hover:scale-[1.02] shadow-sm rounded"
                onClick={() => handleClose(false)}
              >
                POSJETITE STRANICU
              </a>

              <div className="text-center">
                <p className="text-xs text-muted-foreground font-medium">18+ | Uvjeti primjene | Odgovorno kladenje</p>
              </div>
            </div>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
