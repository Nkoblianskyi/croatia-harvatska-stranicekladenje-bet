export function SportHrvatskaAbout() {
  return (
    <section className="py-16 md:py-24 relative bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-4xl">
        <header className="mb-12 pb-8 border-b border-border">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground font-serif text-balance">
            Razumijevanje Servisa za Sportsko Kladenje
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed text-pretty">
            Kljucne informacije za sigurno i informirano kladenje u Hrvatskoj
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="mb-10">
            <p className="text-base text-foreground/80 leading-relaxed mb-5">
              Servisi za sportsko kladenje predstavljaju digitalne platforme koje omogucuju korisnicima predvidanje
              ishoda sportskih dogadaja. Ove platforme nude siroki raspon sportskih disciplina - od nogometa, kosarke,
              tenisa do rukometa i drugih sportova, s mogucnoscu kladenja prije pocetka ili tijekom trajanja dogadaja.
            </p>
            <p className="text-base text-foreground/80 leading-relaxed">
              Suvremene kladionice karakterizira intuitivno sucelje, raznovrsne vrste oklada, konkurentni koeficijenti i
              pouzdane metode placanja. Kvalitetne platforme takoder nude mobilne aplikacije, prijenos sportskih
              dogadaja uzivo i detaljnu statistiku za informirano donosenje odluka.
            </p>
          </div>

          <div className="my-10 pl-5 border-l-2 border-primary">
            <p className="text-lg text-foreground italic font-serif text-pretty">
              Odgovorno kladenje podrazumijeva disciplinu, samokontrolu i jasno razumijevanje povezanih rizika.
            </p>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-serif border-b border-border pb-3">
              Sigurnost i Odgovornost
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Licencirane platforme</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Koristite iskljucivo platforme s vazecim licencama Ministarstva financija RH. Licencirane kladionice
                  moraju postovati stroge standarde sigurnosti, zastite podataka i odgovornog kladenja. Uvijek
                  provjerite postojanje licence prije registracije.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Postavljanje ogranicenja</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Koristite alate za samoiskljucenje i postavljanje limita depozita koje nude sve legalne kladionice.
                  Odredite mjesecni budzet koji mozete priustiti izgubiti i strogo se pridrzavajte tog limita. Kladenje
                  nikada ne smije ugroziti vase financijske obveze.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Prepoznavanje rizicnih obrazaca</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Ako kladenje postane opsesija, ulazete vise od mogucnosti ili pokusavate nadoknaditi gubitke dodatnim
                  kladama, mozda razvijate problem. Organizacije poput Hupis i PBSVI nude besplatnu podrsku osobama s
                  poteskocama vezanim uz kladenje.
                </p>
              </div>
              <div>
                <h4 className="text-lg font-semibold text-foreground mb-2">Zastita maloljetnika</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Sportsko kladenje strogo je zabranjeno osobama mladim od 18 godina. Sve legalne platforme zahtijevaju
                  verifikaciju identiteta i dobi prije omogucavanja kladenja. Roditelji trebaju osigurati zastitu svojih
                  pristupnih podataka od maloljetnika.
                </p>
              </div>
            </div>
          </div>

          <div className="mb-10">
            <h3 className="text-2xl font-bold text-foreground mb-6 font-serif border-b border-border pb-3">
              Najzastupljeniji sportovi
            </h3>
            <div className="grid md:grid-cols-2 gap-5">
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Nogomet</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Najpopularniji sport za kladenje. HNL, Liga prvaka, Premier League, La Liga i svjetska prvenstva nude
                  neogranicene mogucnosti.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Kosarka</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  NBA, EuroLeague i domaca prvenstva privlace velik broj korisnika raznovrsnim opcijama kladenja i
                  atraktivnim koeficijentima.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Tenis</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Grand Slam turniri i ATP/WTA eventi omogucuju kladenje tijekom cijele godine s live opcijama za svaki
                  gem i set.
                </p>
              </div>
              <div>
                <h4 className="text-base font-semibold text-foreground mb-2">Rukomet</h4>
                <p className="text-sm text-foreground/80 leading-relaxed">
                  Hrvatska rukometna tradicija cini ovaj sport iznimno popularnim za kladenje, posebno tijekom velikih
                  natjecanja.
                </p>
              </div>
            </div>
          </div>

          <div className="mt-12 pt-8 border-t border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Stranicekladenje.com promovira iskljucivo odgovorno kladenje i sigurnost korisnika. Ako vi ili netko vama
              blizak ima poteskoca s kladenjem, potrazite strucnu pomoc.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
