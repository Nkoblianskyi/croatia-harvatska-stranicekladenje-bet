export function SportsVariety() {
  return (
    <section className="py-16 md:py-24 bg-secondary">
      <div className="container mx-auto px-4 md:px-6 max-w-5xl">
        <header className="mb-10 pb-6 border-b-2 border-border">
          <h2 className="text-2xl md:text-4xl font-bold mb-3 text-foreground font-serif">
            Sportske Discipline u Nasem Fokusu
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Sveobuhvatna pokrivenost kljucnih sportskih dogadaja u Hrvatskoj i svijetu
          </p>
        </header>

        <article className="prose prose-lg max-w-none">
          <p className="text-base text-foreground/80 leading-relaxed mb-8">
            Nas portal pokriva raznolik spektar sportskih disciplina, od najpopularnijih do specijaliziranih. Dubina
            naseg izvjestavanja i kvaliteta analiza kljucni su cimbenici koji nas izdvajaju medu sportskim portalima.
          </p>

          <div className="grid md:grid-cols-2 gap-x-10 gap-y-6 mb-8">
            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Nogomet</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                Najpraceniji sport u Hrvatskoj. Sveobuhvatna pokrivenost od domacih liga do medjunarodnih natjecanja
                najvise razine.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>UEFA Liga prvaka i Europska liga</li>
                <li>Hrvatska nogometna liga (HNL)</li>
                <li>Premier League, La Liga, Serie A, Bundesliga</li>
                <li>Svjetsko i Europsko prvenstvo</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Kosarka</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                Detaljno pracenje NBA lige, europskih natjecanja i hrvatske kosarkaske reprezentacije.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>NBA i doigravanje</li>
                <li>EuroLeague i EuroCup</li>
                <li>Premijer liga (A1 Liga)</li>
                <li>Svjetska i europska prvenstva</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Tenis</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                Siroka pokrivenost ATP i WTA turnira s posebnim naglaskom na hrvatske tenisace.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>Grand Slam turniri</li>
                <li>Masters 1000 i WTA 1000</li>
                <li>Davis Cup i Billie Jean King Cup</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Rukomet i vaterpolo</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                Pracenje hrvatskog rukometa i vodenih sportova u kojima Hrvatska ima bogatu tradiciju.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>Svjetska i europska prvenstva u rukometu</li>
                <li>Hrvatski rukometni kup</li>
                <li>Vaterpolska reprezentacija</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Zimski sportovi</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                Skijanje i druge zimske discipline s bogatom hrvatskom tradicijom.
              </p>
              <ul className="text-xs text-muted-foreground space-y-1 list-disc list-inside">
                <li>Svjetski kup u alpskom skijanju</li>
                <li>Zimske olimpijske igre</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-bold text-foreground mb-2 font-serif">Ostali sportovi</h3>
              <p className="text-sm text-foreground/80 leading-relaxed mb-2">
                Formula 1, MotoGP, atletika, odbojka, plivanje, biciklizam i drugi sportovi takoder dostupni.
              </p>
            </div>
          </div>

          <div className="mt-8 pt-6 border-t-2 border-border">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Pokrivenost sportskih disciplina prilagodavamo interesima nasih citatelja. U nasim clancima detaljno
              opisujemo specificne dogadaje za svaki sport kako bismo vam pomogli pronaci sadrzaj koji vas najvise
              zanima.
            </p>
          </div>
        </article>
      </div>
    </section>
  )
}
