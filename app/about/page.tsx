import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function AboutPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b border-border">
            <h1 className="font-serif text-3xl md:text-5xl font-bold text-foreground mb-4">O portalu</h1>
            <h2 className="font-serif text-xl md:text-2xl font-semibold text-primary mb-4">stranicekladenje.com</h2>
            <p className="text-base text-muted-foreground leading-relaxed text-pretty">
              Pouzdani izvor informacija o sportskom kladenju u Hrvatskoj
            </p>
          </div>

          <div className="space-y-10">
            <section className="bg-card p-8 border-l-2 border-primary rounded">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Nase poslanje</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Stranicekladenje.com osnovan je s ciljem pruzanja kvalitetnih, nepristranih i azurnih informacija o
                platformama za sportsko kladenje u Hrvatskoj. Nastojimo biti pouzdan partner svim korisnicima koji zele
                donijeti informirane odluke.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Nas tim strucnjaka posveeen je transparentnosti, tocnosti i zastiti interesa korisnika kroz temeljito
                testiranje i profesionalno izvjescivanje o svakoj platformi.
              </p>
            </section>

            <section className="bg-secondary p-8 border-l-2 border-primary rounded">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Metodologija rada</h3>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Svaka recenzija rezultat je opseznog testiranja koje ukljucuje registraciju, provjeru bonusa, evaluaciju
                korisnicke podrske i testiranje brzine isplata. Ocjene se temelje iskljucivo na kvaliteti usluge.
              </p>
              <p className="text-foreground/80 leading-relaxed">
                Komercijalni interesi nikada ne utjecu na nase ocjene - preporucujemo samo sigurne, licencirane
                platforme koje ispunjavaju najvise standarde kvalitete i pouzdanosti.
              </p>
            </section>

            <section className="bg-card p-8 border-l-2 border-primary rounded">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-5">Kriteriji evaluacije</h3>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                <div className="border-l-2 border-muted pl-5 py-1">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Sigurnost</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Provjera licenci, sigurnost transakcija, zastita podataka i regulatorna uskladenost.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-5 py-1">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Bonusi</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Analiza bonusa dobrodoslice, uvjeta kladenja, promocija i programa vjernosti.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-5 py-1">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Koeficijenti</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Usporedba koeficijenata, marze kladionica i raspon ponudenih trzista.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-5 py-1">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Podrska</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Testiranje brzine odgovora, dostupnost na hrvatskom jeziku i kvaliteta rjesavanja problema.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-5 py-1">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Isplate</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Provjera brzine isplate, dostupnih metoda, naknada i limita povlacenja.
                  </p>
                </div>

                <div className="border-l-2 border-muted pl-5 py-1">
                  <h4 className="font-serif text-lg font-semibold mb-2 text-foreground">Mobilno</h4>
                  <p className="text-foreground/70 text-sm leading-relaxed">
                    Evaluacija mobilne aplikacije, responzivnosti i funkcionalnosti na mobilnim uredajima.
                  </p>
                </div>
              </div>
            </section>

            <section className="bg-primary text-primary-foreground p-8 rounded">
              <h3 className="font-serif text-2xl font-bold mb-4">Nas tim</h3>
              <p className="text-primary-foreground/90 leading-relaxed">
                Portal vodi tim strucnjaka s visegodisnjim iskustvom u industriji sportskog kladenja. Kontinuirano
                pratimo trziste, testiramo nove platforme i azuriramo recenzije kako biste uvijek imali pristup
                najnovijim i najtocnijim informacijama.
              </p>
            </section>

            <section className="bg-card p-8 border-l-2 border-primary rounded">
              <h3 className="font-serif text-2xl font-bold text-foreground mb-4">Kontakt</h3>
              <p className="text-foreground/80 leading-relaxed mb-3">
                Imate pitanja ili prijedloge? Kontaktirajte nas na:{" "}
                <a
                  href="mailto:info@stranicekladenje.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 font-semibold"
                >
                  info@stranicekladenje.com
                </a>
              </p>
              <p className="text-foreground font-semibold text-sm">Odgovaramo u roku od 24 sata</p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
