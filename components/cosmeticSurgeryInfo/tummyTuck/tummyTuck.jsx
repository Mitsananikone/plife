/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function TummyTuckInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">

          <section id="tummyTuck1">
            <h2 className="font-bold text-xl">Tummy Tuck (Abdominoplasty)</h2>
            <span className="text-m flex-wrap">
              A tummy tuck or abdominoplasty is designed to improve the contour of the abdominal region by removing excess sagging skin and fat, and tightening the underlying abdominal muscles. This results in a firmer and flatter abdomen.
            </span>
            <br />
            <span className="text-m flex-wrap">
              The procedure is particularly popular among individuals who&apos;ve experienced significant weight loss or after pregnancy when the skin and muscles might not return to their original elasticity and firmness.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/tummy1.PNG"
                description="The surgical markings indicating areas of excess skin and fat to be removed."
              />
              <TreatmentCard
                imageUrl="/images/info/tummy2.PNG"
                description="The underlying abdominal muscles are tightened and sutured together."
              />
              <TreatmentCard
                imageUrl="/images/info/tummy3.PNG"
                description="After the procedure, the abdomen appears firmer, flatter, and more contoured."
              />
            </div>
          </section>

          <section id="tummyTuck2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Benefits of a Tummy Tuck
            </span>
            <span className="text-m flex-wrap">
              Beyond the cosmetic improvements, a tummy tuck can also alleviate certain discomforts like back pain and skin irritations due to sagging skin. It can also boost confidence and improve one&apos;s overall well-being.
            </span>
            <br/>
          </section>

          <section id="tummyTuck3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for a Tummy Tuck
            </span>
            <span className="text-m flex-wrap">
              Ideal candidates are those in good overall health, non-smokers, and those who have realistic expectations about the procedure. It&apos;s also recommended for those who have had significant weight fluctuations or post-pregnancy changes.
            </span>
            <br/>
          </section>

          <section id="tummyTuck4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedure</span>
            <span className="text-m flex-wrap">
              The surgery involves an incision made from hip to hip, just above the pubic area. Excess skin and fat are removed, and the abdominal muscles are tightened. The navel is repositioned for a natural look. Depending on the extent of the procedure, drainage tubes might be placed temporarily.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
