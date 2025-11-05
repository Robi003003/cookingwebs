import React from "react";

// Importo imazhet nga assets
import oriz1 from "../assets/oriz1.jpg";
import oriz2 from "../assets/oriz2.jpg";
import oriz3 from "../assets/oriz3.jpg";
import rizoto from "../assets/rizoto.jpg";
import oriz5 from "../assets/oriz5.jpg";

export default function Oriz() {
  return (
    <main>
      <h2>Receta për Oriz</h2>
      <section className="recetat-modern">
        <div className="receta-card">
          <div className="receta-img">
            <img src={oriz1} alt="Oriz me Perime" />
          </div>
          <div className="receta-content">
            <h3>Oriz me Perime</h3>
            <p className="receta-highlight">I lehtë, i shëndetshëm dhe plot ngjyra</p>
            <ul>
              <li>250g oriz</li>
              <li>1 karrotë</li>
              <li>1 spec i kuq</li>
              <li>1 kungulleshkë</li>
              <li>1 qepë</li>
              <li>2 lugë vaj ulliri</li>
              <li>Kripë, piper, majdanoz</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Lani orizin dhe zieni sipas udhëzimit.</li>
              <li>Kavërdisni perimet e prera në kubikë në vaj ulliri.</li>
              <li>Shtoni orizin dhe përziejini për 2-3 minuta.</li>
              <li>Shtoni kripë, piper dhe majdanoz sipas shijes.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={oriz2} alt="Oriz me Mish Pule" />
          </div>
          <div className="receta-content">
            <h3>Oriz me Mish Pule</h3>
            <p className="receta-highlight">Oriz i butë me copa pule të shijshme</p>
            <ul>
              <li>250g oriz</li>
              <li>300g fileto pule</li>
              <li>1 qepë</li>
              <li>1 karrotë</li>
              <li>2 lugë vaj ulliri</li>
              <li>Kripë, piper, kopër</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Skuqni qepën dhe karrotën në vaj ulliri.</li>
              <li>Shtoni copat e pulës dhe kavërdisni derisa të marrin ngjyrë.</li>
              <li>Shtoni orizin dhe ujin, zieni derisa të zbutet.</li>
              <li>Shtoni kripë, piper dhe kopër sipas dëshirës.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={oriz3} alt="Pilaf me Qumësht" />
          </div>
          <div className="receta-content">
            <h3>Pilaf me Qumësht</h3>
            <p className="receta-highlight">Ëmbëlsirë tradicionale shqiptare</p>
            <ul>
              <li>200g oriz</li>
              <li>1 litër qumësht</li>
              <li>120g sheqer</li>
              <li>1 shkop kanelle</li>
              <li>Pak vanilje</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Lani orizin dhe zieni me qumështin dhe kanellën.</li>
              <li>Shtoni sheqerin dhe vaniljen kur orizi të jetë zbutur.</li>
              <li>Gatuani derisa të trashet pak.</li>
              <li>Shërbejeni të ngrohtë ose të ftohtë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={rizoto} alt="Rizoto me Kërpudha" />
          </div>
          <div className="receta-content">
            <h3>Rizoto me Kërpudha</h3>
            <p className="receta-highlight">Kremozitet dhe aromë kërpudhash të freskëta</p>
            <ul>
              <li>250g oriz arborio</li>
              <li>200g kërpudha</li>
              <li>1 qepë e vogël</li>
              <li>1 litër lëng perimesh</li>
              <li>50g djathë parmixhano</li>
              <li>2 lugë vaj ulliri</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni qepën dhe kërpudhat në vaj ulliri.</li>
              <li>Shtoni orizin dhe përziejeni për 1 minutë.</li>
              <li>Shtoni lëngun gradualisht duke përzier vazhdimisht.</li>
              <li>Kur orizi të jetë gati, shtoni djathin dhe përziejeni.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={oriz5} alt="Oriz me Spinaq" />
          </div>
          <div className="receta-content">
            <h3>Oriz me Spinaq</h3>
            <p className="receta-highlight">Recetë e shëndetshme dhe e shijshme</p>
            <ul>
              <li>200g oriz</li>
              <li>300g spinaq i freskët</li>
              <li>1 qepë</li>
              <li>2 lugë vaj ulliri</li>
              <li>Kripë, piper, limon</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni qepën në vaj ulliri, shtoni spinaqin dhe ziejeni pak.</li>
              <li>Shtoni orizin dhe ujin, zieni derisa të zbutet.</li>
              <li>Shtoni kripë, piper dhe pak lëng limoni sipas dëshirës.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}