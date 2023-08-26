/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function BreastLiftInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">
          
          <section id="breastLift1">
            <h2 className="font-bold text-xl">Cosmetic Surgery Breast Lift (Mastopexy)</h2>
            <span className="text-m flex-wrap">
              A cosmetic surgery breast lift, known medically as a mastopexy, is designed to elevate drooping or sagging breasts to a more youthful and perkier position on the chest. Over time, factors such as gravity, pregnancy, breastfeeding, and the aging process can lead to a decrease in the skin&apos;s elasticity, causing the breasts to lose their firmness and uplifted contour. Mastopexy tightens and removes excess skin while lifting the breasts. The nipples and areolae can also be repositioned or resized if desired.
            </span>
            <br />
            <span className="text-m flex-wrap">
              For some individuals, a breast lift may be combined with breast augmentation to restore volume, particularly in the upper part of the breast, while others might opt for a breast reduction in conjunction with a lift.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/lift1.PNG"
                description="The surgeon marks the breasts, delineating the excess skin to be removed and the new position for the nipple."
              />
              <TreatmentCard
                imageUrl="/images/info/lift2.PNG"
                description="Excess skin is removed and the breast tissue is reshaped. The nipple and areola are elevated to a more forward position."
              />
              <TreatmentCard
                imageUrl="/images/info/lift3.PNG"
                description="After surgery, breasts appear uplifted and firmer. Scars will mature and fade over time."
              />
            </div>
          </section>

          <section id="BreastLift2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Importance of Mastopexy
            </span>
            <span className="text-m flex-wrap">
              A breast lift can significantly improve one&apos;s silhouette and rejuvenate their appearance. The procedure can instill a newfound sense of confidence in individuals who may have felt self-conscious about the appearance of their breasts. Beyond aesthetics, a lift can also alleviate any discomfort caused by sagging breasts.
            </span>
            <br/>
          </section>

          <section id="BreastLift3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for a Breast Lift
            </span>
            <span className="text-m flex-wrap">
              Ideal candidates for a mastopexy are those experiencing sagging breasts due to aging, gravity, pregnancy, or weight fluctuations. Good candidates should be generally healthy, non-smokers, and have realistic expectations about the outcomes.
            </span>
            <br/>
          </section>

          <section id="BreastLift4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedure</span>
            <span className="text-m flex-wrap">
              The surgery is typically performed under general anesthesia. The technique and incision pattern will vary depending on the degree of lift required and individual patient factors. Common incisions include a circular pattern around the areola, a keyhole shape around the areola and vertically down, or an anchor shape that includes a horizontal incision along the breast crease.
            </span>
            <br />
            <br />
            Incision options include:
            <br />
            <br />
            <ul className="custom-bullet-list">
              <li>Circular around the areola (peri-areolar)</li>
              <li>Keyhole or racquet-shaped, around the areola and vertically down (vertical mastopexy)</li>
              <li>Anchor-shaped, as in the keyhole but with an additional horizontal cut along the breast crease (inverted T or Wise pattern)</li>
            </ul>
            <br />
            <br />
          </section>

          <section id="BreastLift5" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Benefits of a Breast Lift</span>
            <span className="text-m flex-wrap">
              A breast lift can offer rejuvenated contours, improved breast symmetry, and increased self-confidence. By elevating the breasts, individuals can achieve a more youthful bust line and potentially find greater ease in fitting into certain styles of clothing.
            </span>
            <br />
            <span className="text-m flex-wrap">
              For many, the procedure offers emotional benefits, boosting self-esteem and body image. Moreover, combining mastopexy with augmentation or reduction can provide additional volume or size changes tailored to individual desires.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
