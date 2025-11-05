import React from "react";

// Importo imazhet nga assets
import peshk1 from "../assets/peshk1.jpg";
import peshk2 from "../assets/peshk2.jpg";
import peshk3 from "../assets/peshk3.jpg";
import peshk4 from "../assets/peshk4.jpg";
import peshk5 from "../assets/peshk5.jpg";

export default function Peshk() {
  return (
    <main>
      <h2>Receta me Peshk</h2>
      <section className="recetat-modern">
        <div className="receta-card">
          <div className="receta-img">
            <img src={peshk1} alt="Peshk i Pjekur në Furrë" />
          </div>
          <div className="receta-content">
            <h3>Peshk i Pjekur në Furrë</h3>
            <p className="receta-highlight">Peshk i freskët me limon dhe erëza</p>
            <ul>
              <li>1 peshk i freskët (troftë ose levrek)</li>
              <li>2 limona</li>
              <li>2 lugë gjelle vaj ulliri</li>
              <li>1 degë rozmarinë</li>
              <li>Kripë & piper</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Pastrojeni peshkun dhe bëni disa prerje të lehta në trup.</li>
              <li>Lyeni me vaj, kripë, piper dhe futni brenda limon dhe rozmarinë.</li>
              <li>Piqeni në furrë në 200°C për 25-30 minuta.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={peshk2} alt="Peshk me Salcë Domatesh" />
          </div>
          <div className="receta-content">
            <h3>Peshk me Salcë Domatesh</h3>
            <p className="receta-highlight">Fileto peshku me salcë të pasur domatesh</p>
            <ul>
              <li>2 fileto peshku</li>
              <li>300g domate të grira</li>
              <li>2 thelpinj hudhër</li>
              <li>1 qepë e vogël</li>
              <li>2 lugë vaj ulliri</li>
              <li>Kripë, piper, majdanoz</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni qepën dhe hudhrën në vaj ulliri.</li>
              <li>Shtoni domatet dhe zieni për 10 minuta.</li>
              <li>Shtoni filetot e peshkut, kripë, piper dhe zieni edhe 10 minuta.</li>
              <li>Shërbejeni me majdanoz të freskët.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={peshk3} alt="Peshk i Skarës" />
          </div>
          <div className="receta-content">
            <h3>Peshk i Skarës</h3>
            <p className="receta-highlight">Peshk i pjekur në skarë me limon</p>
            <ul>
              <li>2 peshq të vegjël (sardelet ose barbun)</li>
              <li>Vaj ulliri</li>
              <li>Limon</li>
              <li>Kripë, piper, majdanoz</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Pastrojeni peshkun, lyeni me vaj dhe kripë.</li>
              <li>Piqeni në skarë për 3-4 minuta nga secila anë.</li>
              <li>Shërbejeni me limon dhe majdanoz të freskët.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={peshk4} alt="Supë Peshku" />
          </div>
          <div className="receta-content">
            <h3>Supë Peshku</h3>
            <p className="receta-highlight">Supë e lehtë dhe aromatike me peshk</p>
            <ul>
              <li>300g fileto peshku</li>
              <li>1 karrotë</li>
              <li>1 qepë</li>
              <li>1 patate</li>
              <li>1 litër ujë</li>
              <li>Kripë, piper, kopër</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Ziejini perimet dhe peshkun për 25 minuta.</li>
              <li>Shtoni kripë, piper dhe kopër sipas dëshirës.</li>
              <li>Shërbejeni të ngrohtë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={peshk5} alt="Peshk në Tavë me Perime" />
          </div>
          <div className="receta-content">
            <h3>Peshk në Tavë me Perime</h3>
            <p className="receta-highlight">Peshk i pjekur me perime të stinës</p>
            <ul>
              <li>1 peshk i mesëm</li>
              <li>2 patate</li>
              <li>1 kungulleshkë</li>
              <li>1 spec i kuq</li>
              <li>2 domate</li>
              <li>Vaj ulliri, kripë, piper, trumzë</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Prisni perimet dhe vendosini në tavë me peshkun.</li>
              <li>Lyeni me vaj, kripë, piper dhe trumzë.</li>
              <li>Piqeni në 190°C për 40 minuta.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}