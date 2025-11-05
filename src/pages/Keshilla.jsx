import React from "react";


import keshilla1 from "../assets/keshilla1.jpg";
import keshilla2 from "../assets/keshilla2.jpg";
import keshilla3 from "../assets/keshilla3.jpg";
import keshilla4 from "../assets/keshilla4.jpg";
import keshilla5 from "../assets/keshilla5.jpg";
import keshilla6 from "../assets/keshilla6.jpg";

export default function Keshilla() {
  return (
    <main>
      <h2>Këshilla Gatimi</h2>
      <section className="keshilla-modern">
        <div className="keshilla-card">
          <div className="keshilla-img">
            <img src={keshilla1} alt="Erëza të freskëta" />
          </div>
          <div className="keshilla-content">
            <span className="keshilla-meta">KLEA &bull; 02/02/2025</span>
            <h3>Këshilla Gatimi – Ja cilat janë llojet e erëzave që duhet t’i përdorni me patjetër</h3>
            <p>
              Njerëzit në të gjithë botën kanë njohur për shekuj me radhë fuqinë shëruese të bimëve dhe erëzave. Erëza si majdanozi, borziloku, rigoni, trumza dhe rozmarina jo vetëm që japin shije të veçantë, por ndihmojnë edhe në tretje dhe përmirësojnë shëndetin. Përdorni gjithmonë erëza të freskëta në sallata, supa dhe gatime të ndryshme për të marrë maksimumin e shijes dhe vlerave ushqyese.
            </p>
          </div>
        </div>
        <div className="keshilla-card">
          <div className="keshilla-img">
            <img src={keshilla2} alt="Fruta dhe perime" />
          </div>
          <div className="keshilla-content">
            <span className="keshilla-meta">KLEA &bull; 10/02/2025</span>
            <h3>Këshilla Gatimi – Sa porcione fruta dhe perime duhet të konsumoni çdo ditë?</h3>
            <p>
              Frutat dhe perimet janë pjesë e një diete të shëndetshme, të ekuilibruar dhe ju ndihmojnë të qëndroni të shëndetshëm dhe me peshë normale. Rekomandohet të konsumoni të paktën 5 porcione fruta dhe perime çdo ditë, duke i alternuar ngjyrat dhe llojet për të përfituar sa më shumë vitamina dhe minerale.
            </p>
          </div>
        </div>
        <div className="keshilla-card">
          <div className="keshilla-img">
            <img src={keshilla3} alt="Ruajtja e ushqimit" />
          </div>
          <div className="keshilla-content">
            <span className="keshilla-meta">VJOLLCA &bull; 15/03/2025</span>
            <h3>Si të ruani ushqimin e freskët më gjatë?</h3>
            <p>
              Për të ruajtur ushqimin të freskët, përdorni enë hermetike dhe frigoriferin në temperaturën e duhur. Mos i lani frutat dhe perimet para se t’i fusni në frigorifer, pasi lagështia i prish më shpejt. Përdorni gjithmonë parimin “i pari që hyn, i pari që del” për të shmangur prishjen e ushqimeve.
            </p>
          </div>
        </div>
        <div className="keshilla-card">
          <div className="keshilla-img">
            <img src={keshilla4} alt="Brumë i butë" />
          </div>
          <div className="keshilla-content">
            <span className="keshilla-meta">TEFTA &bull; 01/04/2025</span>
            <h3>Si të përgatisni brumin e përsosur për byrek?</h3>
            <p>
              Për një brumë të butë dhe të shijshëm, përdorni miell cilësor dhe ujë të vakët. Shtoni pak kripë dhe një lugë vaj ulliri për elasticitet. Lëreni brumin të pushojë të paktën 30 minuta para se ta hapni. Kjo do ta bëjë më të lehtë për t’u punuar dhe do të japë një rezultat të këndshëm në shije dhe teksturë.
            </p>
          </div>
        </div>
        <div className="keshilla-card">
          <div className="keshilla-img">
            <img src={keshilla5} alt="Gatim i shëndetshëm" />
          </div>
          <div className="keshilla-content">
            <span className="keshilla-meta">MEGI &bull; 10/04/2025</span>
            <h3>Si të gatuani më shëndetshëm pa humbur shijen?</h3>
            <p>
              Zgjidhni metoda gatimi si zierja, avullimi ose pjekja në furrë në vend të skuqjes. Përdorni vaj ulliri ekstra të virgjër dhe shumë erëza për shije. Shtoni më shumë perime në çdo vakt dhe reduktoni sasinë e kripës dhe sheqerit. Kështu do të keni ushqime të shijshme dhe të shëndetshme për familjen tuaj.
            </p>
          </div>
        </div>
        <div className="keshilla-card">
          <div className="keshilla-img">
            <img src={keshilla6} alt="Organizimi në kuzhinë" />
          </div>
          <div className="keshilla-content">
            <span className="keshilla-meta">TEFTA &bull; 12/05/2025</span>
            <h3>Si të organizoni më mirë kuzhinën tuaj?</h3>
            <p>
              Mbani gjithmonë të pastër dhe të organizuar hapësirën e punës. Përdorni kuti dhe etiketa për produktet e thata, vendosni enët që përdorni më shpesh në vende të arritshme dhe pastroni menjëherë pas çdo gatimi. Organizimi i mirë ju kursen kohë dhe e bën gatimin më të këndshëm.
            </p>
          </div>
        </div>
      </section>
    </main>
  );
}