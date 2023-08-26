/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function BreastReductionInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">
          
          <section id="breastReduction1">
            <h2 className="font-bold text-xl">Cosmetic Surgery Breast Reduction</h2>
            <span className="text-m flex-wrap">
              Cosmetic surgery breast reduction, medically known as reduction mammoplasty, is a procedure to remove excess breast fat, glandular tissue, and skin to achieve a breast size that is proportionate with your body. It can also alleviate the discomfort associated with overly large breasts such as neck pain, back pain, and skin irritation.
            </span>
            <br />
            <span className="text-m flex-wrap">
              Apart from the physical relief, many patients also experience a significant enhancement in their self-esteem and find a greater ease in physical activity and bra fitting.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/reduction1.PNG"
                description="Initial markings are done, indicating the areas of tissue removal and new nipple position."
              />
              <TreatmentCard
                imageUrl="/images/info/reduction2.PNG"
                description="Excess tissue and skin are removed. The breast is then reshaped and the nipple is repositioned to a natural height."
              />
              <TreatmentCard
                imageUrl="/images/info/reduction3.PNG"
                description="Post-surgery, breasts appear proportional to the body structure. Scars will gradually fade over time."
              />
            </div>
          </section>

          <section id="BreastReduction2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Importance of Breast Reduction
            </span>
            <span className="text-m flex-wrap">
              Reduction mammoplasty isn&apos;t just about aesthetics. It&apos;s a functional procedure that can significantly improve quality of life, allowing individuals to engage in activities without the discomfort or self-consciousness that can come with having overly large breasts.
            </span>
            <br/>
          </section>

          <section id="BreastReduction3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for Breast Reduction
            </span>
            <span className="text-m flex-wrap">
              Ideal candidates for breast reduction are those who experience physical symptoms resulting from the weight of their breasts, such as back, neck, or shoulder pain. Good candidates should be generally healthy, non-smokers, and should have realistic expectations regarding the outcome of the surgery.
            </span>
            <br/>
          </section>

          <section id="BreastReduction4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedure</span>
            <span className="text-m flex-wrap">
              The procedure is performed under general anesthesia. Incision patterns vary based on the specific needs and desired results of the patient, but often include incisions around the areola, vertically down from the areola to the breast crease, and horizontally along the breast crease.
            </span>
            <br />
            <br />
            Common incision options include:
            <br />
            <br />
            <ul className="custom-bullet-list">
              <li>Circle around the areola (peri-areolar)</li>
              <li>Keyhole or racquet-shaped, around the areola and vertically down</li>
              <li>Anchor-shaped, combining the keyhole with a horizontal incision along the breast crease</li>
            </ul>
            <br />
            <br />
          </section>

          <section id="BreastReduction5" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Benefits of a Breast Reduction</span>
            <span className="text-m flex-wrap">
              A breast reduction can offer enhanced comfort, relief from physical pain, and a more proportionate silhouette. It can improve physical and mental well-being, increase activity levels, and widen clothing options.
            </span>
            <br />
            <span className="text-m flex-wrap">
              Beyond the physical benefits, many individuals experience a psychological uplift, reporting increased self-confidence and a renewed sense of freedom post-surgery.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
