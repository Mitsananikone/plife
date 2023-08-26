/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function LiposuctionInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">
          
          <section id="liposuction1">
            <h2 className="font-bold text-xl">Cosmetic Surgery Liposuction</h2>
            <span className="text-m flex-wrap">
              Liposuction is a cosmetic procedure used to remove unwanted body fat. The technique works by targeting and breaking down fatty deposits under the skin, followed by their removal through a suction mechanism.
            </span>
            <br />
            <span className="text-m flex-wrap">
              This procedure is particularly effective in areas like the abdomen, thighs, buttocks, neck, and arms. Liposuction aims to reshape specific areas of the body, providing a smoother, more contoured appearance.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/lipo1.PNG"
                description="Incisions are made in discreet locations on the body. A cannula is then introduced to loosen the fat."
              />
              <TreatmentCard
                imageUrl="/images/info/lipo2.PNG"
                description="The dislodged fat is then suctioned out of the body using a surgical vacuum or syringe."
              />
              <TreatmentCard
                imageUrl="/images/info/lipo3.PNG"
                description="After surgery, the treated areas appear smoother and more contoured. Compression garments are often worn to reduce swelling."
              />
            </div>
          </section>

          <section id="Liposuction2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Why Consider Liposuction?
            </span>
            <span className="text-m flex-wrap">
              Liposuction is beneficial for those who have stubborn fat deposits that are resistant to diet and exercise. It&apos;s a means to shape and contour the body, enhancing one&apos;s physical appearance and boosting self-confidence.
            </span>
            <br/>
          </section>

          <section id="Liposuction3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for Liposuction
            </span>
            <span className="text-m flex-wrap">
              The best candidates for liposuction are individuals close to their ideal weight but with localized fat deposits that are unresponsive to diet and exercise. Good skin elasticity and muscle tone are also beneficial for optimal results.
            </span>
            <br/>
          </section>

          <section id="Liposuction4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedure</span>
            <span className="text-m flex-wrap">
              The liposuction procedure begins with small incisions made in the targeted area. A diluted local anesthetic is infused to reduce bleeding and trauma. A thin hollow tube called a cannula is then inserted through these incisions to loosen the fat using a controlled back and forth motion. The dislodged fat is then suctioned out of the body.
            </span>
            <br />
            <br />
            Types of liposuction include:
            <br />
            <br />
            <ul className="custom-bullet-list">
              <li>Tumescent liposuction</li>
              <li>Ultrasound-assisted liposuction</li>
              <li>Laser-assisted liposuction</li>
            </ul>
            <br />
            <br />
          </section>

          <section id="Liposuction5" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Benefits of Liposuction</span>
            <span className="text-m flex-wrap">
              Liposuction provides an immediate improvement in the treated areas, offering a more proportional and pleasing body contour. It helps boost self-esteem and may even offer health benefits by reducing the number of fat cells in the body.
            </span>
            <br />
            <span className="text-m flex-wrap">
              It&apos;s essential to maintain a healthy lifestyle post-procedure to ensure long-lasting results.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
