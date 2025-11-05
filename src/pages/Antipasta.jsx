import React from "react";
import RecipeCard from "../components/RecipeCard";


import antipasta1 from "../assets/antipasta1.jpg";
import antipasta2 from "../assets/antipasta2.jpg";
import antipasta3 from "../assets/antipasta3.jpg";
import antipasta4 from "../assets/antipasta4.jpg";
import antipasta5 from "../assets/antipasta5.jpg";

export default function Antipasta() {
  return (
    <main>
      <h2>Receta për Antipasta</h2>
      <section className="recetat-modern">
        <RecipeCard
          image={antipasta1}
          title="Antipasta e Ftohtë"
          description="Pjatë e freskët me perime dhe djathë"
        >
          <ul>
            <li>200g domate qershi</li>
            <li>150g djathë mozzarella</li>
            <li>100g ullinj të zinj</li>
            <li>Rukola e freskët</li>
            <li>Vaj ulliri, kripë, piper</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Prisni domatet dhe djathin në copa të vogla.</li>
            <li>Përzieni të gjitha përbërësit në një pjatë të madhe.</li>
            <li>Shtoni vaj ulliri, kripë dhe piper sipas shijes.</li>
            <li>Shërbejeni të ftohtë.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={antipasta2}
          title="Antipasta me Djathë"
          description="Pjatë e shpejtë me djathë të ndryshëm dhe fruta të thata"
          reverse
        >
          <ul>
            <li>100g djathë kaçkavall</li>
            <li>100g djathë i bardhë</li>
            <li>50g arra</li>
            <li>50g rrush i thatë</li>
            <li>Pak mjaltë</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Prisni djathërat në kubikë.</li>
            <li>Vendosini në pjatë me arrat dhe rrushin e thatë.</li>
            <li>Shtoni pak mjaltë sipër për shije të veçantë.</li>
            <li>Shërbejeni si antipastë.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={antipasta3}
          title="Bruschetta me Domate dhe Borzilok"
          description="Antipastë klasike italiane, e freskët dhe aromatike"
        >
          <ul>
            <li>1 bagetë ose bukë e bardhë</li>
            <li>3-4 domate të pjekura</li>
            <li>2 thelpinj hudhër</li>
            <li>Gjethe borziloku të freskët</li>
            <li>Vaj ulliri ekstra i virgjër</li>
            <li>Kripë dhe piper i zi</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Prisni bukën në feta të holla dhe piqini në furrë ose në tigan derisa të bëhen krokante.</li>
            <li>Fërkoni secilën fetë buke me hudhër të freskët për më shumë aromë.</li>
            <li>Prisni domatet në kubikë të vegjël, shtoni borzilok të grirë, vaj ulliri, kripë dhe piper. Përziejini mirë.</li>
            <li>Vendosni përzierjen e domateve mbi fetat e bukës së thekur dhe shërbejeni menjëherë.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={antipasta4}
          title="Antipasta me Proshutë dhe Pjepër"
          description="Kombinim i ëmbël dhe i kripur, perfekt për verë"
          reverse
        >
          <ul>
            <li>1 pjepër i pjekur</li>
            <li>150g proshutë krudo (prosciutto)</li>
            <li>Pak piper i zi i freskët</li>
            <li>Gjethe mente ose borzilok për dekor</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Pastrojeni melon-in, hiqni farat dhe prijeni në feta ose toptha me lugë speciale.</li>
            <li>Mbështillni çdo copë melon me një fetë të hollë proshutë krudo.</li>
            <li>Vendosini në pjatë servirjeje, spërkatini me pak piper të zi dhe dekoroni me gjethe mente ose borzilok.</li>
            <li>Shërbejeni të ftohtë si antipastë freskuese.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={antipasta5}
          title="Antipasta me Perime të Pjekura dhe Djathë Feta"
          description="Pjatë e ngrohtë me shije mesdhetare"
        >
          <ul>
            <li>1 kungulleshkë</li>
            <li>1 patëllxhan</li>
            <li>1 spec i kuq</li>
            <li>2-3 lugë vaj ulliri</li>
            <li>100g djathë feta</li>
            <li>Kripë, piper, rigon</li>
            <li>Pak uthull balsamike (opsionale)</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Prisni kungulleshkën, patëllxhanin dhe specin në feta të holla.</li>
            <li>Vendosini në një tavë, spërkatini me vaj ulliri, kripë, piper dhe rigon.</li>
            <li>Piqini në furrë në 200°C për 20-25 minuta derisa të zbuten dhe të marrin ngjyrë.</li>
            <li>Vendosni perimet e pjekura në pjatë, shtoni djathë feta të thërrmuar sipër dhe pak uthull balsamike nëse dëshironi.</li>
            <li>Shërbejeni të ngrohtë ose në temperaturë ambienti si antipastë të pasur me shije.</li>
          </ol>
        </RecipeCard>
      </section>
    </main>
  );
}