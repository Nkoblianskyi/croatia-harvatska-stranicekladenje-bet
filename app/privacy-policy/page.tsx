import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function PrivacyPolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b border-border">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Politika privatnosti</h1>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Azurirano: 30. studenog 2025.</p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">Uvodno</h2>
              <p className="text-foreground/80 leading-relaxed">
                Portal stranicekladenje.com posve je predan zastiti privatnosti svojih posjetitelja. Ovaj dokument
                detaljno objasnjava nacin prikupljanja, obrade i zastite vasih osobnih podataka tijekom koristenja naseg
                portala.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Vrste prikupljenih podataka
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Mozemo prikupljati sljedece kategorije podataka:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>
                  <strong className="text-foreground">Osobni identifikatori:</strong> Ime, prezime, korisnicko ime
                </li>
                <li>
                  <strong className="text-foreground">Kontaktne informacije:</strong> Email adresa, telefonski broj
                </li>
                <li>
                  <strong className="text-foreground">Tehnicki podaci:</strong> IP adresa, vrsta preglednika, operativni
                  sustav
                </li>
                <li>
                  <strong className="text-foreground">Podaci o aktivnosti:</strong> Stranice koje posjecujete, vrijeme
                  provedeno na portalu
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Svrha obrade podataka
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">Vase podatke koristimo za:</p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Pruzanje i kontinuirano unapredenje nasih usluga</li>
                <li>Prilagodbu sadrzaja vasim interesima</li>
                <li>Komunikaciju vezanu uz nase usluge</li>
                <li>Analizu koristenja portala i optimizaciju sadrzaja</li>
                <li>Zastitu sigurnosti i integriteta portala</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Mjere zastite
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Implementirali smo sveobuhvatne tehnicke i organizacijske mjere kako bismo osigurali maksimalnu zastitu
                vasih osobnih podataka. Sva obrada podataka provodi se u punoj uskladenosti s Opcom uredbom o zastiti
                podataka (GDPR) i relevantnim hrvatskim zakonodavstvom.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Vasa prava
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                U pogledu vasih osobnih podataka imate sljedeca prava:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Pravo pristupa vasim podacima</li>
                <li>Pravo ispravka netocnih podataka</li>
                <li>Pravo brisanja osobnih podataka</li>
                <li>Pravo ogranicenja obrade</li>
                <li>Pravo prigovora na obradu</li>
                <li>Pravo prenosivosti podataka</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Koristenje kolacica
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Portal koristi kolacice za unapredenje korisnickog iskustva. Detaljne informacije pronaci cete u nasoj{" "}
                <a
                  href="/cookie-policy"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 font-semibold"
                >
                  Politici kolacica
                </a>
                .
              </p>
            </section>

            <section className="bg-secondary p-8 border-l-2 border-primary rounded">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Kontaktirajte nas</h2>
              <p className="text-foreground/80 leading-relaxed">
                Za sva pitanja vezana uz privatnost obratite nam se na:{" "}
                <a
                  href="mailto:info@stranicekladenje.com"
                  className="text-primary underline underline-offset-4 hover:text-primary/80 font-semibold transition-colors"
                >
                  info@stranicekladenje.com
                </a>
              </p>
            </section>
          </div>
        </div>
      </div>

      <Footer />
    </>
  )
}
