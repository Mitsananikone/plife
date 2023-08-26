/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function FaceliftInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">
          
          <section id="facelift1">
            <h2 className="font-bold text-xl">Cosmetic Surgery Facelift (Rhytidectomy)</h2>
            <span className="text-m flex-wrap">
              A facelift, medically known as a rhytidectomy, is a cosmetic surgical procedure that aims to give a more youthful appearance to the face. It does this by removing excess facial skin, tightening underlying tissues, and redraping the skin on the face and neck.
            </span>
            <br />
            <span className="text-m flex-wrap">
              A facelift can correct sagging, deep creases, fat that has fallen or disappeared, jowls, and a double chin, resulting in a more youthful and rejuvenated appearance.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/facelift1.PNG"
                description="Initial markings are made to indicate incision sites, usually starting at the temples and continuing around the ear."
              />
              <TreatmentCard
                imageUrl="/images/info/facelift2.PNG"
                description="Excess skin is removed, and tissues beneath the skin are surgically altered to return the contour to a more youthful shape."
              />
              <TreatmentCard
                imageUrl="/images/info/facelift3.PNG"
                description="Post-surgery, the face appears refreshed and more youthful. Scars, hidden in the contours of the face, will gradually fade over time."
              />
            </div>
          </section>

          <section id="Facelift2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Why Consider a Facelift?
            </span>
            <span className="text-m flex-wrap">
              As we age, skin loses its elasticity and begins to sag. Environmental factors, genetics, and lifestyle also play a part in facial aging. A facelift can reverse the harmful effects of time, stress, and exposure to the elements.
            </span>
            <br/>
          </section>

          <section id="Facelift3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for Facelift
            </span>
            <span className="text-m flex-wrap">
              The best candidates for a facelift are individuals who are seeking improvement, not perfection, in the way they look. Those with good skin elasticity, a strong bone structure, and in good health are the most suitable for this procedure.
            </span>
            <br/>
          </section>

          <section id="Facelift4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedure</span>
            <span className="text-m flex-wrap">
              Facelift surgery varies in range from minimally invasive lunchtime lifts&apos; to more extensive surgery. The procedure usually involves incisions in front of and behind the ear. These incisions may extend into the scalp. Once the incisions are made, various degrees of undermining of the skin are performed, and the deeper layers of the face are lifted.
            </span>
            <br />
            <br />
            Common incision techniques include:
            <br />
            <br />
            <ul className="custom-bullet-list">
              <li>Traditional facelift: Incision starts at the temples and circles around the ears</li>
              <li>Limited-incision facelift: Shorter incisions at the temples and around the ear</li>
              <li>Neck lift incision: Starts in front of the earlobes and wraps around behind the neck</li>
            </ul>
            <br />
            <br />
          </section>

          <section id="Facelift5" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Benefits of a Facelift</span>
            <span className="text-m flex-wrap">
              A facelift can improve visible signs of aging, restoring a more youthful, rested appearance with uplifted contours. The results can last for years, and even when lines and wrinkles do start to appear, you may still enjoy a more contoured and defined face for life.
            </span>
            <br />
            <span className="text-m flex-wrap">
              A successful facelift can restore confidence and enhance self-esteem, making you look as young as you feel.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
