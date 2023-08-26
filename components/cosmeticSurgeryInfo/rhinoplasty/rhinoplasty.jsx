/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function RhinoplastyInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">
          
          <section id="rhinoplasty1">
            <h2 className="font-bold text-xl">Cosmetic Surgery Rhinoplasty</h2>
            <span className="text-m flex-wrap">
              Rhinoplasty, commonly known as a nose job, is a surgical procedure aimed at reshaping or resizing the nose for aesthetic or functional purposes. This procedure can correct a range of issues including a hump on the nasal bridge, an unwanted nasal tip shape, or breathing problems.
            </span>
            <br />
            <span className="text-m flex-wrap">
              Whether one seeks to enhance the nose&apos;s appearance or improve its function, rhinoplasty can make a significant difference in facial harmony and confidence.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/rhino1.PNG"
                description="An incision is made, often inside the nostrils, to access the bone and cartilage."
              />
              <TreatmentCard
                imageUrl="/images/info/rhino2.PNG"
                description="The bone and cartilage are reshaped to achieve the desired result."
              />
              <TreatmentCard
                imageUrl="/images/info/rhino3.PNG"
                description="After surgery, the nose aligns better with facial features, enhancing overall appearance. Recovery might require wearing a nasal splint."
              />
            </div>
          </section>

          <section id="Rhinoplasty2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Why Consider Rhinoplasty?
            </span>
            <span className="text-m flex-wrap">
              Rhinoplasty not only transforms the nose&apos;s appearance but can also correct congenital disabilities, injuries, or breathing issues. The results can profoundly impact one&apos;s self-image and overall facial symmetry.
            </span>
            <br/>
          </section>

          <section id="Rhinoplasty3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for Rhinoplasty
            </span>
            <span className="text-m flex-wrap">
              Ideal candidates are individuals seeking improvement, not perfection, in their nose&apos;s appearance. They should be physically healthy, have realistic expectations, and preferably be over the age of 15, as the nose should have completed most of its growth.
            </span>
            <br/>
          </section>

          <section id="Rhinoplasty4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedure</span>
            <span className="text-m flex-wrap">
              Rhinoplasty can be performed under local or general anesthesia, depending on the complexity. The surgery involves incisions inside the nose or across the columella (the external end of the nasal septum). The surgeon then reshapes the bone and cartilage to the desired form. Stitches are used to close the incisions, and nasal packs or soft plastic splints might be placed in the nostrils to stabilize the septum.
            </span>
          </section>

          <section id="Rhinoplasty5" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Benefits of Rhinoplasty</span>
            <span className="text-m flex-wrap">
              Rhinoplasty can enhance the shape, size, and symmetry of the nose, bringing it into a more harmonious balance with other facial features. Beyond aesthetic improvements, it can also rectify structural defects leading to breathing problems.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
