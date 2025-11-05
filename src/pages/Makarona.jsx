import React from "react";
import RecipeCard from "../components/RecipeCard";

// Importo imazhet nga assets
import makarona1 from "../assets/makarona1.jpg";
import makarona2 from "../assets/makarona2.jpg";
import makarona3 from "../assets/makarona3.jpg";
import makarona4 from "../assets/makarona4.jpg";
import makarona5 from "../assets/makarona5.jpg";

export default function Makarona() {
  return (
    <main>
      <h2>Receta për Makarona</h2>
      <section className="recetat-modern">
        <RecipeCard
          image={makarona1}
          title="Spageti me Salcë Domatesh"
          description="Recetë klasike italiane, e thjeshtë dhe plot shije"
        >
          <ul>
            <li>300g spageti</li>
            <li>400g domate të freskëta ose salcë domatesh</li>
            <li>2 thelpinj hudhër</li>
            <li>4 lugë gjelle vaj ulliri</li>
            <li>Kripë, piper, borzilok i freskët</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Zieni spagetit sipas udhëzimit.</li>
            <li>Kavërdisni hudhrën në vaj ulliri, shtoni domatet dhe ziejini për 10 min.</li>
            <li>Shtoni kripë, piper dhe borzilok.</li>
            <li>Përziejini spagetit me salcën dhe shërbejeni të ngrohtë.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={makarona2}
          title="Pasta Carbonara"
          description="Recetë tradicionale romane me vezë dhe pancetë"
          reverse
        >
          <ul>
            <li>300g pasta (spageti ose rigatoni)</li>
            <li>100g pancetë ose guanciale</li>
            <li>2 vezë + 1 e verdhë veze</li>
            <li>60g djathë parmixhano</li>
            <li>Kripë & piper i zi</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Zieni pastat.</li>
            <li>Kavërdisni pancetën derisa të bëhet krokante.</li>
            <li>Rrihni vezët me djathin dhe piperin.</li>
            <li>Përziejini pastat me pancetën dhe vezët jashtë zjarrit.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={makarona3}
          title="Penne me Pana dhe Kërpudha"
          description="Kremozitet dhe aromë kërpudhash"
        >
          <ul>
            <li>300g penne</li>
            <li>200g kërpudha</li>
            <li>200ml pana për gatim</li>
            <li>1 qepë e vogël</li>
            <li>2 lugë vaj ulliri</li>
            <li>Kripë & piper</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Kavërdisni qepën dhe kërpudhat në vaj ulliri.</li>
            <li>Shtoni panën, kripën dhe piperin.</li>
            <li>Zieni penne-t dhe përziejini me salcën.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={makarona4}
          title="Farfalle me Salmon"
          description="Pasta elegante me salmon të tymosur"
          reverse
        >
          <ul>
            <li>300g farfalle</li>
            <li>150g salmon i tymosur</li>
            <li>200ml pana për gatim</li>
            <li>1 lugë gjelle gjalpë</li>
            <li>Kopër e freskët</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Kavërdisni salmonin në gjalpë për pak sekonda.</li>
            <li>Shtoni panën dhe lëreni të trashet pak.</li>
            <li>Zieni farfallet dhe përziejini me salcën.</li>
            <li>Shtoni kopër sipër.</li>
          </ol>
        </RecipeCard>

        <RecipeCard
          image={makarona5}
          title="Tagliatelle me Spinaq dhe Djathë"
          description="Pasta të freskëta me shije të lehtë"
        >
          <ul>
            <li>300g tagliatelle</li>
            <li>200g spinaq i freskët</li>
            <li>100g djathë i bardhë</li>
            <li>2 lugë vaj ulliri</li>
            <li>1 thelpi hudhër</li>
          </ul>
          <b>👩‍🍳 Mënyra e përgatitjes:</b>
          <ol>
            <li>Kavërdisni hudhrën dhe spinaqin në vaj ulliri.</li>
            <li>Zieni tagliatelle-t dhe përziejini me spinaqin.</li>
            <li>Shtoni djathin e bardhë të thërrmuar sipër.</li>
          </ol>
        </RecipeCard>
      </section>
    </main>
  );
}