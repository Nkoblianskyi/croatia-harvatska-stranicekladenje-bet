import Link from "next/link"
import Image from "next/image"

export function Footer() {
  return (
    <footer className="bg-foreground text-background border-t border-border">
      <div className="container mx-auto px-4 max-w-6xl py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-14 mb-12">
          <div>
            <Link href="/" className="flex items-center group">
              <img src="/favicon.ico" alt="Logo" className="h-8 w-8 md:h-10 md:w-10 mr-2" />
              <div className="text-xl md:text-2xl font-serif font-bold text-red-800 tracking-tight uppercase">
                stranice<span className="text-blue-800">kladenje</span>
              </div>
            </Link>
            <p className="text-sm text-background/70 leading-relaxed">
              Profesionalni portal s nezavisnim recenzijama kladionica u Hrvatskoj. Objektivne ocjene, strucne analize i
              savjeti za odgovorno kladenje.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold mb-4 text-background uppercase tracking-wider">Navigacija</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-sm text-background/70 hover:text-background transition-colors">
                  Pocetna
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-sm text-background/70 hover:text-background transition-colors">
                  O portalu
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Politika privatnosti
                </Link>
              </li>
              <li>
                <Link
                  href="/cookie-policy"
                  className="text-sm text-background/70 hover:text-background transition-colors"
                >
                  Politika kolacica
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-10 p-5 bg-background/5 border border-background/20 rounded">
          <p className="text-xs text-background/70 leading-relaxed text-center md:text-left">
            <strong className="text-background">Napomena:</strong> stranicekladenje.com je informativni portal koji
            pruza recenzije i usporedbe sportskih kladionica. Sadrzaj sluzi iskljucivo u informativne svrhe. Kladenje
            moze uzrokovati ovisnost. Kladite se odgovorno i samo ako ste punoljetni. Koristite iskljucivo licencirane
            kladionice koje posluju u skladu s hrvatskim zakonodavstvom. Portal ne snosi odgovornost za eventualne
            gubitke.
          </p>
        </div>

        <div className="border-t border-background/20 pt-10 pb-8">
          <div className="flex items-center gap-3 mb-6 justify-center">
            <div className="bg-background text-foreground font-bold text-base px-4 py-2 rounded">18+</div>
            <h4 className="text-sm font-bold text-background">Odgovorno kladenje</h4>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-5">
            <Link
              href="https://www.gambleaware.org/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-background/10 hover:bg-background/20">
                <Image src="/gamble-aware.webp" alt="GambleAware" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamcare.org.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-background/10 hover:bg-background/20">
                <Image src="/gamecare-new.svg" alt="GamCare" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.gamstop.co.uk/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-background/10 hover:bg-background/20">
                <Image src="/gamstop.svg" alt="GamStop" fill className="object-contain" />
              </div>
            </Link>

            <Link
              href="https://www.pbsvi.hr/"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-background/10 hover:bg-background/20">
                <Image src="/pbsvi.svg" alt="PBSVI" fill className="object-contain" />
              </div>
            </Link>
            
            <Link
              href="https://www.hupis.hr/klok"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-transform hover:scale-105"
            >
              <div className="relative w-[80px] h-[32px] md:w-[100px] md:h-[40px] p-2 rounded bg-background/10 hover:bg-background/20">
                <Image src="/hupis.png" alt="Hupis" fill className="object-contain" />
              </div>
            </Link>

          </div>
        </div>

        <div className="border-t border-background/20 pt-6 text-center">
          <p className="text-sm text-background/70">
            {new Date().getFullYear()} <span className="font-semibold text-background">stranicekladenje.com</span> - Sva
            prava pridrzana.
          </p>
        </div>
      </div>
    </footer>
  )
}
