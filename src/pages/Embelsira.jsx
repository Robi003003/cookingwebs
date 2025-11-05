import React from "react";


import embelsire1 from "../assets/embelsire1.jpg";
import embelsire2 from "../assets/embelsire2.jpg";
import brownie from "../assets/brownie.jpg";
import embelsire4 from "../assets/embelsire4.jpg";
import embelsire5 from "../assets/embelsire5.jpg";

export default function Embelsira() {
  return (
    <main>
      <h2>Ëmbëlsira</h2>
      <section className="recetat-modern">
        <div className="receta-card">
          <div className="receta-img">
            <img src={embelsire1} alt="Tiramisu" />
          </div>
          <div className="receta-content">
            <h3>Tiramisu</h3>
            <p className="receta-highlight">Klasike italiane me mascarpone dhe kafe</p>
            <ul>
              <li>250g mascarpone</li>
              <li>200g biskota savoiardi</li>
              <li>3 vezë</li>
              <li>100g sheqer</li>
              <li>200ml kafe e ftohtë</li>
              <li>50g kakao pluhur</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Ndani të verdhat nga të bardhat e vezëve. Rrihni të verdhat me sheqerin, shtoni mascarponen.</li>
              <li>Rrihni të bardhat veçmas dhe bashkojini me kujdes me kremin.</li>
              <li>Zhysni biskotat në kafe dhe vendosini në tavë.</li>
              <li>Shtoni kremin sipër, përsëritni shtresat.</li>
              <li>Mbulojeni me kakao dhe lëreni në frigorifer për 4 orë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={embelsire2} alt="Cheesecake" />
          </div>
          <div className="receta-content">
            <h3>Cheesecake me Boronica</h3>
            <p className="receta-highlight">Ëmbëlsirë e freskët pa pjekje</p>
            <ul>
              <li>200g biskota digestive</li>
              <li>100g gjalpë i shkrirë</li>
              <li>400g krem djathi</li>
              <li>200ml pana për ëmbëlsira</li>
              <li>100g sheqer pluhur</li>
              <li>200g boronica</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Thërrmoni biskotat dhe përziejini me gjalpin. Shtypini në tavë.</li>
              <li>Rrihni kremin e djathit me panën dhe sheqerin.</li>
              <li>Hidheni kremin mbi bazën e biskotave.</li>
              <li>Vendosni boronicat sipër dhe lëreni në frigorifer për 3 orë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={brownie} alt="Brownie" />
          </div>
          <div className="receta-content">
            <h3>Brownie me Çokollatë</h3>
            <p className="receta-highlight">Ëmbëlsirë e shpejtë dhe e shijshme</p>
            <ul>
              <li>200g çokollatë e zezë</li>
              <li>150g gjalpë</li>
              <li>200g sheqer</li>
              <li>3 vezë</li>
              <li>100g miell</li>
              <li>1 lugë çaji kakao</li>
              <li>1 majë kripë</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Shkrijmë çokollatën dhe gjalpin bashkë.</li>
              <li>Rrahim vezët me sheqerin dhe i shtojmë te masa e çokollatës.</li>
              <li>Shtojmë miellin, kakaon dhe kripën.</li>
              <li>Hedhim masën në tavë dhe pjekim në 180°C për 25 minuta.</li>
              <li>Pritet në copa dhe shërbehet.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={embelsire4} alt="Panna Cotta" />
          </div>
          <div className="receta-content">
            <h3>Panna Cotta me Luleshtrydhe</h3>
            <p className="receta-highlight">Krem i butë italian me salcë luleshtrydhe</p>
            <ul>
              <li>400ml pana për ëmbëlsira</li>
              <li>100ml qumësht</li>
              <li>80g sheqer</li>
              <li>1 lugë çaji xhelatinë pluhur</li>
              <li>200g luleshtrydhe</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Ngrohni panën, qumështin dhe sheqerin pa i zier.</li>
              <li>Shtoni xhelatinën e tretur dhe përziejeni mirë.</li>
              <li>Hidheni në forma dhe lëreni të ftohet në frigorifer për 4 orë.</li>
              <li>Shërbejeni me salcë luleshtrydhe sipër.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={embelsire5} alt="Trileçe" />
          </div>
          <div className="receta-content">
            <h3>Trileçe</h3>
            <p className="receta-highlight">Ëmbëlsirë tradicionale me tre lloje qumështi</p>
            <ul>
              <li>5 vezë</li>
              <li>200g sheqer</li>
              <li>200g miell</li>
              <li>500ml qumësht</li>
              <li>200ml pana</li>
              <li>200ml qumësht i kondensuar</li>
              <li>Karamel për sipërfaqe</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Rrihni vezët me sheqerin, shtoni miellin dhe piqeni në tavë.</li>
              <li>Përzieni të tre llojat e qumështit dhe hidhini mbi pandispanjë.</li>
              <li>Lëreni të ftohet dhe shtoni karamel sipër.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}