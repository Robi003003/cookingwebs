import React from "react";
import RecipeCard from "../components/RecipeCard";

import pasta1 from "../assets/pasta1.jpg";
import cin from "../assets/cin.jpg";
import supa from "../assets/supa.jpg";
import pule from "../assets/pule.jpg";
import salce from "../assets/salce.jpg";
import rizoto from "../assets/rizoto.jpg";
import brownie from "../assets/brownie.jpg";

export default function Home() {
  return (
    <main>
      <h2>Recetat më trend për momentin</h2>
      <section className="recetat-modern">
        <RecipeCard
          image={pasta1}
          title="Receta e Shijshme e Ditës"
          description="Makarona kremoze me hudhër dhe parmixhano"
        >
          <ul>
            <li>250g makarona (penne, spaghetti ose fusilli)</li>
            <li>2 lugë gjelle vaj ulliri</li>
            <li>3 thelpinj hudhër të grira hollë</li>
            <li>200ml pana për gatim</li>
            <li>100g djathë kaçkavall i grirë (ose parmixhano)</li>
            <li>Kripë & piper i zi sipas shijes</li>
            <li>Majdanoz i freskët i grirë</li>
            <li>(Opsionale) Spec djegës ose arrëmoskat</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Vlojmë makaronat sipas udhëzimeve në pako.</li>
            <li>Ngrohim vajin dhe kavërdisim hudhrën për 1 minutë.</li>
            <li>Shtojmë panën dhe djathin, përziejmë derisa të shkrihen.</li>
            <li>Hedhim makaronat e kulluara në salcë dhe përziejmë mirë.</li>
            <li>Shtojmë majdanoz dhe shërbejmë të ngrohta.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={cin}
          title="Receta Speciale"
          description="Cinnamon Rolls"
          reverse
        >
          <ul>
            <li>500g miell</li>
            <li>80g sheqer</li>
            <li>7g maja e thatë</li>
            <li>250ml qumësht i ngrohtë</li>
            <li>80g gjalpë i shkrirë</li>
            <li>1 vezë</li>
            <li>1 lugë çaji kripë</li>
            <li>100g sheqer (për mbushjen)</li>
            <li>2 lugë gjelle kanellë pluhur</li>
            <li>60g gjalpë i butë (për mbushjen)</li>
            <li>Krem djathi për sipërfaqe (opsionale)</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Përziejmë qumështin me majanë dhe sheqer, lëmë 5 min.</li>
            <li>Shtojmë vezën, gjalpin, kripën dhe miellin – brumësojmë.</li>
            <li>Lëmë brumin të vijë për 1 orë.</li>
            <li>Hapim brumin, lyejmë me gjalpë dhe spërkasim me kanellë & sheqer.</li>
            <li>Rrotullojmë, presim role dhe i lëmë të pushojnë 20 min.</li>
            <li>Pjekim në 180°C për 20-25 minuta derisa të marrin ngjyrë.</li>
            <li>Mbulojmë me krem sipas dëshirës.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={supa}
          title="Supa Kremoze me Perime"
          description="Supa e shëndetshme me karrota, patate dhe selino"
        >
          <ul>
            <li>2 karrota</li>
            <li>2 patate</li>
            <li>1 qepë</li>
            <li>1 degë selino</li>
            <li>1 l ujë</li>
            <li>2 lugë vaj ulliri</li>
            <li>Kripë & piper sipas shijes</li>
            <li>Majdanoz për dekor</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Prisni perimet në kubikë të vegjël.</li>
            <li>Kavërdisni qepën, shtoni perimet dhe vazhdoni për 3 min.</li>
            <li>Shtoni ujin, kripën dhe piperin. Ziejini për 25 minuta.</li>
            <li>Pasi të zbuten, kalojini me blender për strukturë kremoze.</li>
            <li>Shtoni majdanoz dhe shërbejeni.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={pule}
          title="Mish Pule me Erëza"
          description="Pule e pjekur me rozmarinë dhe limon"
          reverse
        >
          <ul>
            <li>4 kofsha pule</li>
            <li>2 limona</li>
            <li>2 lugë vaj ulliri</li>
            <li>1 lugë çaji rozmarinë</li>
            <li>2 thelpinj hudhër</li>
            <li>Kripë & piper sipas shijes</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Marino pulën me limon, vaj, hudhër, erëza dhe lëre 30 min.</li>
            <li>Piqeni në 200°C për 40 minuta.</li>
            <li>Shërbejeni me feta limoni sipër.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={salce}
          title="Salcë Domatesh e Shtëpisë"
          description="Salcë e freskët për makarona ose pica"
        >
          <ul>
            <li>1 kg domate</li>
            <li>1 qepë</li>
            <li>2 thelpinj hudhër</li>
            <li>2 lugë vaj ulliri</li>
            <li>1 lugë çaji sheqer</li>
            <li>Kripë & piper</li>
            <li>Borzilok i freskët</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Prisni domatet, kavërdisni qepën e hudhrën në vaj.</li>
            <li>Shtoni domatet, sheqerin, kripën dhe piperin. Ziejeni 30 min.</li>
            <li>Shtoni borzilok dhe përdoreni për makarona apo pica.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={rizoto}
          title="Rizoto me Kërpudha"
          description="Rizoto kremoze me kërpudha të freskëta"
          reverse
        >
          <ul>
            <li>300g oriz arborio</li>
            <li>200g kërpudha</li>
            <li>1 qepë e vogël</li>
            <li>2 lugë vaj ulliri</li>
            <li>1 l lëng perimesh</li>
            <li>50g parmixhano</li>
            <li>Kripë & piper</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Kavërdisni qepën dhe kërpudhat.</li>
            <li>Shtoni orizin dhe përziejeni për 1 minutë.</li>
            <li>Shtoni gradualisht lëngun duke përzier vazhdimisht.</li>
            <li>Kur të jetë gati, shtoni djathin dhe shërbejeni.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={brownie}
          title="Brownie me Çokollatë"
          description="Ëmbëlsirë e shpejtë dhe e shijshme"
        >
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
            <li>Rrahim vezët me sheqerin, shtojmë përbërësit e tjerë.</li>
            <li>Pjekim në 180°C për 25 minuta.</li>
            <li>Pritet në copa dhe shërbehet.</li>
          </ol>
        </RecipeCard>
      </section>
    </main>
  );
}
