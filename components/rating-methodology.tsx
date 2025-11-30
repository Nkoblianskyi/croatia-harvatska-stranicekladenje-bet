export function RatingMethodology() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-10 pb-6 border-b border-border">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground font-serif">O Nasem Portalu</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Pouzdani izvor informacija o sportskom kladenju u Hrvatskoj
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-base text-foreground/80 leading-relaxed mb-8">
            Stranicekladenje.com je nezavisni portal osnovan s ciljem pruzanja objektivnih recenzija, detaljnih
            usporedbi i strucnih savjeta o platformama za sportsko kladenje u Hrvatskoj. Nas tim iskusnih strucnjaka
            posvecen je transparentnosti, tocnosti i zastiti interesa korisnika.
          </p>

          <div className="mb-8">
            <h3 className="text-xl font-bold text-foreground mb-5 font-serif border-b border-border pb-2">
              Nase temeljne vrijednosti
            </h3>

            <div className="space-y-6">
              <div className="pb-5 border-b border-border">
                <h4 className="text-base font-semibold text-foreground mb-2">Nepristranost i transparentnost</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Sve nase recenzije temelje se na detaljnom testiranju i objektivnim kriterijima ocjenjivanja.
                  Komercijalni interesi nikada ne utjecu na nase ocjene - preporucujemo samo sigurne, licencirane
                  platforme koje ispunjavaju najvise standarde kvalitete.
                </p>
              </div>

              <div className="pb-5 border-b border-border">
                <h4 className="text-base font-semibold text-foreground mb-2">Edukacija korisnika</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Vjerujemo da informirani korisnici donose bolje odluke. Zato pruzamo detaljne vodice o vrstama oklada,
                  strategijama kladenja, tumacenju koeficijenata i razumijevanju uvjeta bonusa. Nas sadrzaj namijenjen
                  je i pocetnicima i iskusnim korisnicima.
                </p>
              </div>

              <div className="pb-5 border-b border-border">
                <h4 className="text-base font-semibold text-foreground mb-2">Promicanje odgovornosti</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Odgovorno kladenje temelj je svega sto radimo. Aktivno promicemo alate za samoiskljucenje,
                  postavljanje limita i svjesnost o rizicima povezanim s kladenjem. Suradujemo s organizacijama koje
                  pruzaju pomoc osobama s poteskocama.
                </p>
              </div>

              <div className="pb-5">
                <h4 className="text-base font-semibold text-foreground mb-2">Azurnost informacija</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Trziste sportskog kladenja konstantno se razvija. Nas tim redovito azurira recenzije, prati nove
                  bonuse i promocije te testira izmjene u funkcioniranju platformi. Korisnici uvijek dobivaju
                  najaktualnije i najtocnije informacije.
                </p>
              </div>
            </div>
          </div>

          <div className="my-8 p-6 bg-secondary border-l-2 border-primary rounded">
            <h3 className="text-lg font-bold text-foreground mb-5 font-serif">Proces evaluacije</h3>
            <div className="space-y-3">
              <div>
                <span className="font-semibold text-foreground">1.</span>
                <span className="text-foreground/80 ml-2 text-sm">
                  Registracija i verifikacija racuna na svakoj platformi
                </span>
              </div>
              <div>
                <span className="font-semibold text-foreground">2.</span>
                <span className="text-foreground/80 ml-2 text-sm">
                  Testiranje funkcionalnosti, bonusa, koeficijenata i trzista
                </span>
              </div>
              <div>
                <span className="font-semibold text-foreground">3.</span>
                <span className="text-foreground/80 ml-2 text-sm">
                  Evaluacija korisnicke podrske, brzine isplate i mobilnog iskustva
                </span>
              </div>
              <div>
                <span className="font-semibold text-foreground">4.</span>
                <span className="text-foreground/80 ml-2 text-sm">
                  Priprema detaljne recenzije s jasnim prednostima i nedostacima
                </span>
              </div>
              <div>
                <span className="font-semibold text-foreground">5.</span>
                <span className="text-foreground/80 ml-2 text-sm">
                  Redovito azuriranje ocjena prema novim promjenama
                </span>
              </div>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stranicekladenje.com nije kladionica - mi smo nezavisni portal koji vam pomaze pronaci najbolje platforme
              za sportsko kladenje u Hrvatskoj. Nasa potpuna urednicka neovisnost jamci objektivne i pouzdane
              informacije koje vam omogucuju sigurno i informirano kladenje.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
