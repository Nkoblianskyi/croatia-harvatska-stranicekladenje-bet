"use client"
import Image from "next/image"
import { Star, ExternalLink } from "./icons"
import type { SportsSite } from "@/types"

interface RatingListProps {
  sites: SportsSite[]
}

export function RatingList({ sites }: RatingListProps) {
  const renderStars = (rating: number) => {
    const starElements = []
    const maxStars = 5
    const starValue = rating / 2

    for (let i = 0; i < maxStars; i++) {
      const fillPercentage = Math.min(Math.max((starValue - i) * 100, 0), 100)

      if (fillPercentage === 100) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />)
      } else if (fillPercentage === 0) {
        starElements.push(<Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-muted" />)
      } else {
        starElements.push(
          <div key={i} className="relative h-4 w-4 md:h-5 md:w-5">
            <Star className="absolute h-4 w-4 md:h-5 md:w-5 text-muted" />
            <div className="absolute overflow-hidden" style={{ width: `${fillPercentage}%` }}>
              <Star className="h-4 w-4 md:h-5 md:w-5 fill-primary text-primary" />
            </div>
          </div>,
        )
      }
    }

    return starElements
  }

  const DisclaimerBadge = () => (
    <div className="bg-secondary border border-border px-4 py-2 flex items-center gap-2 text-xs rounded">
      <span className="font-bold text-foreground">Informativni sadrzaj</span>
      <span className="text-muted-foreground">|</span>
      <span className="text-muted-foreground flex items-center gap-1">
        Detalji <ExternalLink className="w-3 h-3" />
      </span>
    </div>
  )

  return (
    <section className="py-8 md:py-12">
      <div className="container mx-auto px-4 max-w-[1400px] md:px-0">
        <div className="grid gap-4 md:gap-5">
          {sites.map((site, index) => {
            const isFirstPlace = index === 0
            const showBadge = index < 3 && site.badges.length > 0

            return (
              <a
                key={site.id}
                href={site.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`relative overflow-visible group transition-all duration-300 rounded ${
                  isFirstPlace
                    ? "bg-card border-2 border-primary shadow-md hover:shadow-lg"
                    : "bg-card border border-border shadow-sm hover:shadow-md hover:border-primary/50"
                }`}
              >
                {showBadge && (
                  <div className="absolute -top-3 left-6 z-20">
                    <div
                      className={`${
                        isFirstPlace ? "bg-primary" : "bg-accent"
                      } text-primary-foreground text-xs md:text-sm font-bold px-4 md:px-5 py-1.5 uppercase tracking-wide shadow-sm rounded`}
                    >
                      {site.badges[0]}
                    </div>
                  </div>
                )}

                {/* Desktop Layout */}
                <div className="hidden lg:block">
                  <div className="grid grid-cols-[280px_1fr_240px_220px] items-center gap-6 p-8">
                    <div className="relative">
                      <div
                        className={`flex items-center justify-center bg-foreground p-6 h-[140px] border transition-all rounded ${
                          isFirstPlace ? "border-primary" : "border-border group-hover:border-primary/50"
                        }`}
                      >
                        <div className="relative h-20 w-full">
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            fill
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-l border-r border-border">
                      <p
                        className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          isFirstPlace ? "text-primary" : "text-accent"
                        }`}
                      >
                        PONUDA
                      </p>
                      <h3 className="text-foreground text-2xl md:text-3xl font-bold leading-tight">{site.bonus}</h3>
                    </div>

                    <div className="flex flex-col items-center justify-center text-center px-6 border-r border-border">
                      <p
                        className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                          isFirstPlace ? "text-primary" : "text-accent"
                        }`}
                      >
                        OCJENA
                      </p>
                      <div className="relative mb-3">
                        <div
                          className={`text-5xl md:text-6xl font-bold ${isFirstPlace ? "text-primary" : "text-accent"}`}
                        >
                          {site.rating.toFixed(1)}
                        </div>
                      </div>
                      <div className="flex items-center justify-center gap-1 mb-2">{renderStars(site.rating)}</div>
                      <p className="text-muted-foreground text-xs font-medium">
                        ({site.reviews.toLocaleString()} recenzija)
                      </p>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 px-6">
                      <div
                        className={`w-full transition-all duration-300 text-primary-foreground font-bold py-5 px-6 text-center text-sm uppercase tracking-wide transform group-hover:scale-105 shadow-sm rounded ${
                          isFirstPlace ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                        }`}
                      >
                        Saznaj vise
                      </div>
                      <p
                        className={`font-semibold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-primary group-hover:text-primary/80"
                            : "text-accent group-hover:text-accent/80"
                        }`}
                      >
                        Pogledaj detalje <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>
                  </div>
                  <div className="px-8 pb-6 flex justify-center">
                    <DisclaimerBadge />
                  </div>
                </div>

                {/* Tablet Layout */}
                <div className="hidden md:block lg:hidden">
                  <div className="p-6">
                    <div className="grid grid-cols-[180px_1fr_180px] gap-4 items-center mb-4">
                      <div className="relative">
                        <div
                          className={`flex items-center justify-center bg-foreground p-4 h-[100px] border transition-all rounded ${
                            isFirstPlace ? "border-primary" : "border-border group-hover:border-primary/50"
                          }`}
                        >
                          <div className="relative h-16 w-full">
                            <Image
                              src={site.logo || "/placeholder.svg"}
                              alt={site.name}
                              fill
                              className="object-contain"
                            />
                          </div>
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-4 border-l border-r border-border">
                        <p
                          className={`text-xs font-bold mb-2 uppercase tracking-wide ${
                            isFirstPlace ? "text-primary" : "text-accent"
                          }`}
                        >
                          PONUDA
                        </p>
                        <h3 className="text-foreground text-lg font-bold leading-tight">{site.bonus}</h3>
                      </div>

                      <div className="flex flex-col items-center justify-center text-center px-4">
                        <p
                          className={`text-xs font-bold mb-1 uppercase tracking-wide ${
                            isFirstPlace ? "text-primary" : "text-accent"
                          }`}
                        >
                          OCJENA
                        </p>
                        <div className={`text-4xl font-bold mb-2 ${isFirstPlace ? "text-primary" : "text-accent"}`}>
                          {site.rating.toFixed(1)}
                        </div>
                        <div className="flex items-center justify-center gap-1 mb-1">{renderStars(site.rating)}</div>
                        <p className="text-muted-foreground font-medium text-[10px]">
                          ({site.reviews.toLocaleString()} recenzija)
                        </p>
                      </div>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-2 pt-4 border-t border-border">
                      <div
                        className={`w-full max-w-xs transition-all duration-300 text-primary-foreground font-bold py-4 px-6 text-center text-sm uppercase tracking-wide transform group-hover:scale-105 shadow-sm rounded ${
                          isFirstPlace ? "bg-primary hover:bg-primary/90" : "bg-accent hover:bg-accent/90"
                        }`}
                      >
                        Saznaj vise
                      </div>
                      <p
                        className={`font-semibold text-sm uppercase tracking-wide flex items-center gap-2 transition-colors ${
                          isFirstPlace
                            ? "text-primary group-hover:text-primary/80"
                            : "text-accent group-hover:text-accent/80"
                        }`}
                      >
                        Pogledaj detalje <ExternalLink className="w-4 h-4" />
                      </p>
                    </div>

                    <div className="pt-4 mt-4 border-t border-border flex justify-center">
                      <DisclaimerBadge />
                    </div>
                  </div>
                </div>

                {/* Mobile Layout */}
                <div className="md:hidden">
                  <div className="p-4 pt-8">
                    <div className="grid grid-cols-2 gap-3 items-stretch mb-4">
                      <div className="flex justify-center items-center">
                        <div
                          className={`bg-foreground p-3 w-full h-24 flex items-center justify-center border rounded ${
                            isFirstPlace ? "border-primary" : "border-border"
                          }`}
                        >
                          <Image
                            src={site.logo || "/placeholder.svg"}
                            alt={site.name}
                            width={120}
                            height={60}
                            className="max-h-full max-w-full object-contain"
                          />
                        </div>
                      </div>

                      <div className="text-center flex flex-col justify-center items-center px-2 py-3 bg-secondary border border-border rounded">
                        <div
                          className={`uppercase font-bold mb-1.5 text-xs ${isFirstPlace ? "text-primary" : "text-accent"}`}
                        >
                          PONUDA
                        </div>
                        <div className="font-bold text-foreground leading-tight text-xl">{site.bonus}</div>
                      </div>
                    </div>

                    <div className="grid grid-cols-3 items-center gap-2 py-3 border-t border-border">
                      <div className="text-center">
                        <p
                          className={`text-xs font-bold mb-1 uppercase ${isFirstPlace ? "text-primary" : "text-accent"}`}
                        >
                          OCJENA
                        </p>
                        <div className={`text-3xl font-bold ${isFirstPlace ? "text-primary" : "text-accent"}`}>
                          {site.rating.toFixed(1)}
                        </div>
                      </div>

                      <div className="flex flex-col items-center justify-center">
                        <div className="flex justify-center gap-0.5 mb-1">{renderStars(site.rating)}</div>
                        <div className="text-muted-foreground font-medium text-center text-xs">
                          ({site.reviews.toLocaleString()})
                        </div>
                      </div>

                      <div className="flex justify-center">
                        <div
                          className={`text-primary-foreground px-3 py-2 font-bold uppercase whitespace-nowrap shadow-sm text-lg rounded ${
                            isFirstPlace ? "bg-primary" : "bg-accent"
                          }`}
                        >
                          DETALJI
                        </div>
                      </div>
                    </div>

                    <div className="pt-3 mt-3 border-t border-border flex justify-center">
                      <DisclaimerBadge />
                    </div>
                  </div>
                </div>
              </a>
            )
          })}
        </div>
      </div>
    </section>
  )
}
