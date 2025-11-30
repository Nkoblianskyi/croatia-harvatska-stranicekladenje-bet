export function FaqSection() {
  return (
    <section className="py-16 md:py-24 bg-card">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-10 pb-6 border-b border-border">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground font-serif">Cesta Pitanja</h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Odgovori na najcesca pitanja o portalu stranicekladenje.com
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <div className="space-y-8">
            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Sto je stranicekladenje.com?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Stranicekladenje.com je nezavisni hrvatski portal za recenzije i usporedbe sportskih kladionica. Nase
                poslanje je pomoci korisnicima pronaci najsigurnije, najkvalitetnije i najpovoljnije platforme za
                sportsko kladenje kroz objektivne recenzije, detaljne analize i redovita azuriranja.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kako odabirete i ocjenjujete kladionice?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Svaku kladionicu ocjenjujemo prema detaljnoj metodologiji koja ukljucuje provjeru licence i sigurnosti,
                kvalitetu bonusa, raspon trzista i kvote, brzinu isplate, korisnicku podrsku i mobilno iskustvo.
                Testiramo svaku platformu osobno i prikupljamo iskustva korisnika. Sve kladionice moraju imati vazecu
                licencu za rad u Hrvatskoj.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Je li koristenje portala besplatno?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Da, sve informacije, recenzije, usporedbe i savjeti na stranicekladenje.com potpuno su besplatni. Ne
                naplacujemo pristup sadrzaju niti zahtijevamo registraciju. Portal se financira kroz affiliate
                partnerstva, ali zadrzavamo potpunu urednicku neovisnost u nasim ocjenama.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kako odabirete kladionice za recenziju?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Recenziramo samo licencirane kladionice koje legalno posluju u Hrvatskoj. Svaka platforma mora imati
                vazecu licencu Ministarstva financija RH. Testiramo ih prema strogim kriterijima: sigurnost, ponuda
                bonusa, kvaliteta koeficijenata, izbor trzista, brzina isplate, korisnicka podrska i mobilno iskustvo.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Kako ostvariti bonus kod kladionice?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Kliknite na gumb za posjetu stranice na kartici kladionice. To vas vodi izravno na sluzbenu stranicu
                gdje mozete kreirati racun. Vecina bonusa aktivira se automatski, dok neki zahtijevaju unos bonus koda
                koji navodimo u recenzijama. Uvijek procitajte uvjete bonusa prije registracije.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Koliko cesto azurirate informacije?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Nase recenzije azuriramo kontinuirano. Bonuse i promocije provjeravamo svakodnevno jer se cesto
                mijenjaju. Ocjene platformi preispitujemo mjesecno ili odmah kada se dogode znacajne promjene. Takoder
                pratimo korisnicke povratne informacije i brzo reagiramo na probleme.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Jesu li sve kladionice na portalu sigurne?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Sve kladionice koje preporucujemo moraju imati vazecu licencu od Ministarstva financija RH. Provjeravamo
                njihove sigurnosne protokole, SSL enkripciju i politike zastite podataka. Ipak, uvijek preporucujemo da
                sami provjerite licencu na sluzbenoj stranici kladionice prije registracije.
              </p>
            </div>

            <div className="pb-6 border-b border-border">
              <h3 className="text-lg font-semibold text-foreground mb-2">Sto ako imam problema s kladionicom?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Prvo kontaktirajte korisnicku podrsku same kladionice. Ako problem nije rijesen, mozete nas kontaktirati
                putem emaila. Dokumentiramo sve prituzbe i koristimo te informacije za azuriranje nasih recenzija i
                upozorenja korisnicima.
              </p>
            </div>

            <div className="pb-6">
              <h3 className="text-lg font-semibold text-foreground mb-2">Promicete li odgovorno kladenje?</h3>
              <p className="text-sm text-foreground/80 leading-relaxed">
                Apsolutno. Odgovorno kladenje nas je prioritet. Preporucujemo koristenje alata za postavljanje limita,
                samoiskljucenje ako je potrebno, i trazenje pomoci ako kladenje postane problem. Suradujemo s
                organizacijama Hupis i PBSVI koje pruzaju besplatnu pomoc osobama s poteskocama ovisnosti.
              </p>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border text-center">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Niste pronasli odgovor? Kontaktirajte nas putem emaila, a nas tim ce vam rado pomoci.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
