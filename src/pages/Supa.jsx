import React from "react";

// Importo imazhet nga assets
import supa1 from "../assets/supa.jpg";
import supa2 from "../assets/supe2.jpg";
import supa3 from "../assets/supe3.jpg";
import supa4 from "../assets/supe4.jpg";
import supa5 from "../assets/supe5.jpg";

export default function Supa() {
  return (
    <main>
      <h2>Receta për Supa</h2>
      <section className="recetat-modern">
        <div className="receta-card">
          <div className="receta-img">
            <img src={supa1} alt="Supë me Perime" />
          </div>
          <div className="receta-content">
            <h3>Supë me Perime</h3>
            <p className="receta-highlight">E lehtë, plot vitamina dhe shumë e shijshme</p>
            <ul>
              <li>2 karrota</li>
              <li>2 patate</li>
              <li>1 qepë</li>
              <li>1 kungulleshkë</li>
              <li>1 degë selino</li>
              <li>1 l ujë</li>
              <li>Kripë, piper, majdanoz</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Qëroni dhe prisni perimet në copa të vogla.</li>
              <li>Ziejini në ujë me kripë dhe piper për 30 minuta.</li>
              <li>Shtoni majdanoz të freskët dhe shërbejeni të ngrohtë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={supa2} alt="Supë Pule" />
          </div>
          <div className="receta-content">
            <h3>Supë Pule</h3>
            <p className="receta-highlight">Tradicionale, e ngrohtë dhe shumë e ushqyeshme</p>
            <ul>
              <li>300g mish pule</li>
              <li>1 karrotë</li>
              <li>1 qepë</li>
              <li>1 patate</li>
              <li>1 l ujë</li>
              <li>Kripë, piper, kopër</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Ziejini mishin e pulës me perimet për 40 minuta.</li>
              <li>Shtoni kripë, piper dhe kopër sipas dëshirës.</li>
              <li>Shërbejeni të ngrohtë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={supa3} alt="Supë Kremoze me Kërpudha" />
          </div>
          <div className="receta-content">
            <h3>Supë Kremoze me Kërpudha</h3>
            <p className="receta-highlight">E butë dhe aromatike, perfekte për darkë</p>
            <ul>
              <li>250g kërpudha</li>
              <li>1 qepë e vogël</li>
              <li>2 lugë gjelle vaj ulliri</li>
              <li>500ml lëng perimesh</li>
              <li>100ml pana për gatim</li>
              <li>Kripë, piper</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni qepën dhe kërpudhat në vaj ulliri.</li>
              <li>Shtoni lëngun e perimeve dhe zieni për 15 minuta.</li>
              <li>Shtoni panën, kripën dhe piperin, përziejeni dhe shërbejeni të ngrohtë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={supa4} alt="Supë Orizi me Limoni" />
          </div>
          <div className="receta-content">
            <h3>Supë Orizi me Limoni</h3>
            <p className="receta-highlight">E freskët dhe shumë e lehtë për stomakun</p>
            <ul>
              <li>100g oriz</li>
              <li>1 vezë</li>
              <li>1 limon</li>
              <li>1 l lëng pule ose perimesh</li>
              <li>Kripë, piper</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Zieni orizin në lëngun e pulës/perimeve.</li>
              <li>Rrihni vezën me lëng limoni dhe shtojeni ngadalë te supa duke përzier.</li>
              <li>Shtoni kripë dhe piper sipas shijes.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={supa5} alt="Supë Domatesh" />
          </div>
          <div className="receta-content">
            <h3>Supë Domatesh</h3>
            <p className="receta-highlight">E thjeshtë, e shijshme dhe plot ngjyra</p>
            <ul>
              <li>500g domate të pjekura</li>
              <li>1 qepë</li>
              <li>2 thelpinj hudhër</li>
              <li>2 lugë gjelle vaj ulliri</li>
              <li>500ml lëng perimesh</li>
              <li>Kripë, piper, borzilok</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni qepën dhe hudhrën në vaj ulliri.</li>
              <li>Shtoni domatet dhe lëngun e perimeve, zieni për 20 minuta.</li>
              <li>Përziejeni me blender, shtoni kripë, piper dhe borzilok të freskët.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}