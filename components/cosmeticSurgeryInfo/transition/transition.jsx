/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function TrainsitionInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">

          <section id="genderReaffirming1">
            <h2 className="font-bold text-xl">Gender Reaffirming Surgery</h2>
            <span className="text-m flex-wrap">
              Gender reaffirming surgery offers individuals the opportunity to align their physical anatomy with their identified gender. This transformative procedure is an essential step for many in their journey of gender transition.
            </span>
            <br />
            <span className="text-m flex-wrap">
              The surgeries vary based on individual needs, including masculinizing or feminizing features. They might involve the chest/breasts, genitalia, or facial structures.
            </span>
            <div className="flex flex-row justify-items space-x-32 mt-8 ">
              <TreatmentCard
                imageUrl="/images/info/gender1.PNG"
                description="Top surgery involves chest masculinization or breast augmentation."
              />
              <TreatmentCard
                imageUrl="/images/info/gender2.PNG"
                description="Bottom surgeries might include vaginoplasty, phalloplasty, or others."
              />
              <TreatmentCard
                imageUrl="/images/info/gender3.PNG"
                description="Facial surgeries can feminize or masculinize features, depending on needs."
              />
            </div>
          </section>

          <section id="genderReaffirming2" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              The Importance of Gender Reaffirming Surgery
            </span>
            <span className="text-m flex-wrap">
              These surgeries can significantly improve the quality of life, self-esteem, and mental well-being of transgender and gender non-conforming individuals. It often follows or coincides with hormone therapy and is a decisive step towards living fully in one&apos;s identified gender.
            </span>
            <br/>
          </section>

          <section id="genderReaffirming3" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12">
              Ideal Candidates for Gender Reaffirming Surgery
            </span>
            <span className="text-m flex-wrap">
              Candidates are individuals diagnosed with persistent gender dysphoria who are in good overall health. They typically have a documented history of living in their affirmed gender and may have undergone hormone therapy, although it&apos;s not mandatory for all surgeries.
            </span>
            <br/>
          </section>

          <section id="genderReaffirming4" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Surgical Procedures</span>
            <span className="text-m flex-wrap">
              Procedures range from top surgeries like mastectomy or breast augmentation to bottom surgeries like vaginoplasty or metoidioplasty. There&apos;s also facial feminization surgery and voice surgery. Each is tailored to the individual&apos;s needs and transition goals.
            </span>
          </section>

          <section id="genderReaffirming5" style={{marginTop: '2em'}}>
            <span className="font-bold text-xl mt-12"> Benefits of Gender Reaffirming Surgery</span>
            <span className="text-m flex-wrap">
              The primary benefit is alignment of one&apos;s body with their gender identity, leading to improved mental well-being, self-esteem, and social integration. It also reduces or eliminates gender dysphoria for many.
            </span>
          </section>

          <ConsultationForm style={{ paddingTop: "32px", paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
