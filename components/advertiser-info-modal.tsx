"use client"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogClose } from "@/components/ui/dialog"
import { X } from "@/components/icons"

interface AdvertiserInfoModalProps {
  isOpen: boolean
  onClose: () => void
}

export function AdvertiserInfoModal({ isOpen, onClose }: AdvertiserInfoModalProps) {
  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="w-[90vw] max-w-[600px] p-0 bg-white border border-slate-300 max-h-[85vh] overflow-hidden">
        <DialogHeader className="p-6 pb-4 border-b border-slate-200 bg-white">
          <DialogTitle className="text-xl md:text-2xl text-slate-900 font-bold">Važne Informacije</DialogTitle>
          <DialogClose className="absolute right-4 top-4 opacity-70 transition-opacity hover:opacity-100 focus:outline-none">
            <X className="h-5 w-5 text-slate-600" />
            <span className="sr-only">Zatvori</span>
          </DialogClose>
        </DialogHeader>

        <div className="p-6 space-y-6 overflow-y-auto max-h-[calc(85vh-100px)]">
          <div className="bg-coral-50 border-l-4 border-coral-500 p-5">
            <h3 className="font-bold text-base md:text-lg mb-3 text-slate-900">Važna Napomena</h3>
            <p className="text-sm md:text-base text-slate-700 leading-relaxed">
              <strong>sporthrvatska.com</strong> je neovisna sportska izdavačka platforma.{" "}
              <strong>Mi ne nudimo usluge klađenja.</strong> Svi sportski klubovi i organizacije navedeni na ovoj
              stranici su službeno registrirane institucije. Ova stranica može sadržavati affiliate linkove i možemo
              primiti provizije kada posjetite partnere putem naših poveznica.
            </p>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base md:text-lg text-slate-900 border-b-2 border-slate-200 pb-2">
              Izdavačke Informacije
            </h3>
            <div className="space-y-3">
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                sporthrvatska.com je besplatna usluga za praćenje sportskih vijesti i rezultata. Primamo naknade od
                istaknutih brandova, što utječe na njihov položaj.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Svi istaknuti sportski sadržaji su verificirani od strane pouzdanih izvora. Trudimo se za točnost, ali
                ne možemo biti odgovorni za netočnosti.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sportski događaji i raspored podložni su promjenama. Uvijek provjerite službene izvore za najnovije
                informacije.
              </p>
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-base md:text-lg text-slate-900 border-b-2 border-slate-200 pb-2">
              Autorska Prava
            </h3>
            <div className="space-y-3">
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sav sadržaj na ovoj stranici je zaštićen autorskim pravima i namijenjen je isključivo za informativne
                svrhe.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Sportske vijesti i analize predstavljaju mišljenja naših urednika i ne smiju se koristiti za
                komercijalne svrhe bez dozvole.
              </p>
              <p className="text-sm md:text-base text-slate-700 leading-relaxed">
                Za dodatne informacije ili pitanja, kontaktirajte našu uredničku ekipu putem službenih kanala.
              </p>
            </div>
          </div>

          <div className="bg-slate-50 border-t border-slate-200 p-4 mt-6">
            <p className="text-xs md:text-sm text-slate-600 text-center font-medium">
              © 2025 sporthrvatska.com - Sva prava pridržana
            </p>
          </div>
        </div>
      </DialogContent>
    </Dialog>
  )
}
