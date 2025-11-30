"use client"

import { useState } from "react"
import { AdvertiserInfoModal } from "./advertiser-info-modal"
import Image from "next/image"

export function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false)

  const getCurrentDate = () => {
    const now = new Date()
    const day = now.getDate()
    const month = now.toLocaleDateString("hr-HR", { month: "long" })
    const year = now.getFullYear()
    return `${day}. ${month} ${year}.`
  }

  return (
    <section className="relative border-b border-border overflow-hidden">
      <div className="absolute inset-0">
        <Image src="/sports-team-celebrating-victory-stadium-crowd-chee.jpg" alt="" fill className="object-cover" priority />
        <div className="absolute inset-0 bg-white/85" />
      </div>

      <div className="container mx-auto px-3 sm:px-4 md:px-6 max-w-[1300px] relative z-10 py-10 sm:py-16">
        <div className="text-center max-w-4xl mx-auto space-y-4 sm:space-y-5">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-tight text-balance text-foreground">
            Profesionalni Vodic za Sportsko Kladenje
          </h1>

          <p className="text-sm sm:text-base md:text-lg leading-relaxed text-pretty max-w-3xl mx-auto text-muted-foreground">
            Nezavisne recenzije kladionica, objektivne usporedbe i strucni savjeti za sigurno i odgovorno kladenje u
            Hrvatskoj
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-8 text-xs sm:text-sm text-muted-foreground pt-2">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="uppercase tracking-wide whitespace-nowrap font-medium">Nezavisne recenzije</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-accent rounded-full" />
              <span className="uppercase tracking-wide whitespace-nowrap font-medium">Provjereni bonusi</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 bg-primary rounded-full" />
              <span className="uppercase tracking-wide whitespace-nowrap font-medium">Licencirane platforme</span>
            </div>
          </div>

          <p className="text-xs sm:text-sm font-normal text-muted-foreground pt-2">Azurirano: {getCurrentDate()}</p>
        </div>
      </div>

      <AdvertiserInfoModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  )
}
