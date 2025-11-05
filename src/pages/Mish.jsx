import React from "react";

// Importo imazhet nga assets
import mish1 from "../assets/mish1.jpg";
import mish2 from "../assets/mish2.jpg";
import mish3 from "../assets/mish3.jpg";
import mish4 from "../assets/mish4.jpg";
import mish5 from "../assets/mish5.jpg";

export default function Mish() {
  return (
    <main>
      <h2>Receta me Mish</h2>
      <section className="recetat-modern">
        <div className="receta-card">
          <div className="receta-img">
            <img src={mish1} alt="Mish Viçi në Furrë" />
          </div>
          <div className="receta-content">
            <h3>Mish Viçi në Furrë</h3>
            <p className="receta-highlight">Viçi i butë me patate dhe erëza</p>
            <ul>
              <li>800g mish viçi</li>
              <li>4 patate</li>
              <li>2 qepë</li>
              <li>2 karrota</li>
              <li>2 lugë gjelle vaj ulliri</li>
              <li>Kripë, piper, rozmarinë</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Prisni mishin dhe perimet në copa të mëdha.</li>
              <li>Vendosini në tavë, shtoni vajin dhe erëzat.</li>
              <li>Piqeni në furrë në 190°C për 1.5 orë.</li>
              <li>Shërbejeni të ngrohtë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={mish2} alt="Qofte Shtëpie" />
          </div>
          <div className="receta-content">
            <h3>Qofte Shtëpie</h3>
            <p className="receta-highlight">Qofte të buta dhe të shijshme</p>
            <ul>
              <li>500g mish i grirë</li>
              <li>1 qepë</li>
              <li>1 vezë</li>
              <li>2 feta bukë të njomur</li>
              <li>2 lugë gjelle majdanoz</li>
              <li>Kripë, piper, vaj për skuqje</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Përzieni të gjithë përbërësit dhe formoni qoftet.</li>
              <li>Skuqini në vaj të nxehtë derisa të marrin ngjyrë të artë.</li>
              <li>Shërbejeni me sallatë ose patate të skuqura.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={mish3} alt="Pulë me Perime" />
          </div>
          <div className="receta-content">
            <h3>Pulë me Perime</h3>
            <p className="receta-highlight">Pulë e pjekur me perime të freskëta</p>
            <ul>
              <li>1 pulë e plotë</li>
              <li>2 karrota</li>
              <li>2 patate</li>
              <li>1 spec i kuq</li>
              <li>2 lugë gjelle vaj ulliri</li>
              <li>Kripë, piper, trumzë</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Prisni perimet dhe vendosini rreth pulës në tavë.</li>
              <li>Lyeni pulën me vaj dhe erëza.</li>
              <li>Piqeni në 200°C për 1 orë.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card reverse">
          <div className="receta-img">
            <img src={mish4} alt="Tavë Dheu" />
          </div>
          <div className="receta-content">
            <h3>Tavë Dheu</h3>
            <p className="receta-highlight">Recetë tradicionale shqiptare me mish dhe djathë</p>
            <ul>
              <li>400g mish viçi</li>
              <li>1 qepë</li>
              <li>2 speca</li>
              <li>2 domate</li>
              <li>100g djathë i bardhë</li>
              <li>2 lugë gjelle vaj ulliri</li>
              <li>Kripë, piper</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni mishin me qepën dhe specat.</li>
              <li>Shtoni domatet dhe ziejini pak.</li>
              <li>Vendosni gjithçka në tavë, shtoni djathin sipër dhe piqeni për 20 min.</li>
            </ol>
          </div>
        </div>
        <div className="receta-card">
          <div className="receta-img">
            <img src={mish5} alt="Mish Pule me Krem Mustarde" />
          </div>
          <div className="receta-content">
            <h3>Mish Pule me Krem Mustarde</h3>
            <p className="receta-highlight">Pulë e butë me salcë kremoze mustarde</p>
            <ul>
              <li>4 fileto pule</li>
              <li>200ml pana për gatim</li>
              <li>2 lugë gjelle mustardë</li>
              <li>1 lugë gjelle vaj ulliri</li>
              <li>Kripë, piper</li>
            </ul>
            <b>👩‍🍳 Mënyra e përgatitjes:</b>
            <ol>
              <li>Kavërdisni filetot në vaj ulliri.</li>
              <li>Shtoni panën dhe mustardën, lërini të ziejnë 10 min.</li>
              <li>Shërbejeni të ngrohtë me oriz ose perime.</li>
            </ol>
          </div>
        </div>
      </section>
    </main>
  );
}