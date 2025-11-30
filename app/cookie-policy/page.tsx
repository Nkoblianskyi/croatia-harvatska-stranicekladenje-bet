import { Header } from "@/components/header"
import { Footer } from "@/components/footer"

export default function CookiePolicyPage() {
  return (
    <>
      <Header />

      <div className="min-h-screen bg-background">
        <div className="max-w-4xl mx-auto px-4 py-12 sm:px-6 lg:px-8">
          <div className="text-center mb-12 pb-8 border-b border-border">
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-foreground mb-4">Politika kolacica</h1>
            <p className="text-sm text-muted-foreground uppercase tracking-wider">Azurirano: 30. studenog 2025.</p>
          </div>

          <div className="space-y-12 prose prose-lg max-w-none">
            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Definicija kolacica
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Kolacici predstavljaju male tekstualne datoteke koje se pohranjuju na vasem uredaju prilikom posjeta web
                stranicama. Ove datoteke omogucuju portalima pamcenje vasih preferencija i pruzanje optimiziranog
                korisnickog iskustva kroz personalizaciju sadrzaja i funkcionalnosti.
              </p>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Primjena kolacica na stranicekladenje.com
              </h2>
              <p className="text-foreground/80 leading-relaxed mb-4">
                Nas portal implementira kolacice iz sljedecih razloga:
              </p>
              <ul className="list-disc list-inside space-y-2 text-foreground/80 ml-4">
                <li>Osiguranje stabilnog i pouzdanog rada portala</li>
                <li>Pohrana vasih postavki i individualnih preferencija</li>
                <li>Optimizacija brzine ucitavanja stranica</li>
                <li>Prikupljanje anonimnih podataka o nacinu koristenja</li>
                <li>Pruzanje relevantnog i prilagodenog sadrzaja</li>
              </ul>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Kategorije kolacica
              </h2>

              <div className="space-y-6">
                <div className="border-l-2 border-primary pl-6 py-3">
                  <h3 className="text-xl font-semibold mb-2 text-foreground font-serif">Tehnicki neophodni</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Esencijalni kolacici bez kojih portal ne moze ispravno funkcionirati. Omogucuju temeljne funkcije
                    poput navigacije i pristupa zasticenim dijelovima.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6 py-3">
                  <h3 className="text-xl font-semibold mb-2 text-foreground font-serif">Statisticki</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Pomazu nam razumjeti kako posjetitelji interagiraju s portalom putem anonimnog prikupljanja
                    statistickih podataka o koristenju.
                  </p>
                </div>

                <div className="border-l-2 border-primary pl-6 py-3">
                  <h3 className="text-xl font-semibold mb-2 text-foreground font-serif">Funkcionalni</h3>
                  <p className="text-foreground/80 leading-relaxed">
                    Omogucuju napredne funkcionalnosti i personalizaciju, ukljucujuci pamcenje jezicnih postavki i
                    regionalnih preferencija.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-2xl font-serif font-bold text-foreground mb-5 pb-2 border-b border-border">
                Kontrola kolacica
              </h2>
              <p className="text-foreground/80 leading-relaxed">
                Vecina modernih preglednika omogucuje upravljanje kolacicima putem postavki. Imate mogucnost blokiranja
                ili brisanja kolacica, no to moze negativno utjecati na funkcionalnost i korisnicko iskustvo na portalu.
              </p>
            </section>

            <section className="bg-secondary p-8 border-l-2 border-primary rounded">
              <h2 className="text-2xl font-serif font-bold text-foreground mb-4">Kontaktirajte nas</h2>
              <p className="text-foreground/80 leading-relaxed">
                Za dodatna pitanja o politici kolacica obratite nam se na:{" "}
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
