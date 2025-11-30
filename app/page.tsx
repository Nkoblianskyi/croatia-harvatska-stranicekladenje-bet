"use client"

import { sportsSites } from "@/types"
import { Header } from "@/components/header"
import { Hero } from "@/components/hero"
import { RatingList } from "@/components/rating-list"
import { RatingMethodology } from "@/components/rating-methodology"
import { Footer } from "@/components/footer"
import { TopOffersModal } from "@/components/top-offers-modal"
import { CookieBanner } from "@/components/cookie-banner"
import { SportsVariety } from "@/components/sports-variety"
import { SportHrvatskaAbout } from "@/components/sport-hrvatska-about"
import { FaqSection } from "@/components/faq-section"
import { FeaturedArticles } from "@/components/featured-articles"
import { SportsCategories } from "@/components/sports-categories"

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="relative max-w-[1300px] mx-auto">
        <Hero />
        <FeaturedArticles />
        <SportsCategories />
        <RatingList sites={sportsSites} />
        <SportHrvatskaAbout />
        <SportsVariety />
        <RatingMethodology />
        <FaqSection />
      </main>
      <Footer />
      <TopOffersModal sites={sportsSites} />
      <CookieBanner />
    </div>
  )
}
