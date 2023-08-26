/** @format */
import TreatmentCard from "@/components/treatmentCard/treatmentCard";
import ConsultationForm from "@/components/consultForm/consultForm";

export default function BreastImplantInfo() {
  return (
    <div className="overscroll-y-auto flex h-screen bg-transparent p-0 w-full  ">
      {" "}
      {/* Fixed div */}
      <div className="flex h-screen bg-white pl-16 w-full pr-16">
        <div className="bg-transparent p-10 px-0 2 ">
          <section id="breastEnlargement1">
          <h2 className="font-bold text-xl">
            Cosmetic Surgery Breast Enlargement
          </h2>

          <p className="text-m flex-wrap">
            Cosmetic surgery breast enhancement (augmentation) is usually done
            to enhance the size or shape of breasts or to balance a difference
            in breast size. The procedure is performed by inserting a breast
            implant behind the breast tissue or above the breast muscle.{" "}
            <b>Breast Implants</b> come in a variety of shapes and sizes, with
            varying designs, in a range of materials. They can be placed in
            different <b>positions</b> through a variety of{" "}
            <b>incision locations</b>. The goal is to leave your breasts looking
            as natural as possible while enlarging them to your desired size.
          </p>
          <br />
          <p className="text-m flex-wrap">
            The surgeon may recomment that a <b>breast lift</b> and breast
            augmentation be performed at the same time. This is mostly commonly
            recommended to treat the sagging appearance that results from aging
            or pregnancy. DUring this combined procedure, some breast tissue is
            removed, the breast skin is tightened and lifted, and an implant is
            inserted.
          </p>

          <div className="flex flex-row justify-items-end space-x-10 mt-8 ">
            {" "}
            {/* Flex container for cards */}
            <TreatmentCard
              style={{ transform: "scale(0.8)" }}
              imageUrl="/images/info/implant1.PNG"
              description="
          Incisions are made to keep scards as inconspicuous as possible, under the breast, around the nipple, or in the armpit.  Breast tissue and skin is lifted to create a pocket for each implant."
            />
            <TreatmentCard
              style={{ transform: "scale(0.8)" }}
              imageUrl="/images/info/implant2.PNG"
              description="
          The breast implant may be inserted directly under the breast tissue, partially or completely beneath the pectoral muscle."
            />
            <TreatmentCard
              style={{ transform: "scale(0.8)" }}
              imageUrl="/images/info/implant3.PNG"
              description="
          After surgery, breasts appear fuller and more natural in tone and contour.  Scars will fade with time."
            />
          </div>
          </section>

          <section id="BreastEnlargement2">
          <span className="font-bold text-xl mt-12">
            Cosmetic Surgery Breast Enlargement
          </span>

          <p className="text-m flex-wrap">
            Cosmetic surgery breast enlargement is a very popular procedure that
            can be extremely satisfying. It is a permanent improvement to breast
            shape and size, commonly chosen in women who are not satisfied with
            the development of their breasts or in the case of trauma, disease
            or post-pregnancy loss.
            <br />
            Generally, most patientsbenefit by having major boosts in their
            self-confidence, and femininity.
          </p>
          <br/>

          </section>

          <section id="BreastEnlargement3">
          <span className="font-bold text-xl mt-12">
            {" "}
            Best candidates for breast enlargement
          </span>

          <p className="text-m flex-wrap">
            The best candidates for breast surgery are women who are emotionally
            well-adjusted and who have a through understanding of the procedure.
            They are in good health, have a history of physical activity, and
            eat a healthy diet.
          </p>
          <br/>
          </section>

          <section id="BreastEnlargement4">
          <span className="font-bold text-xl mt-12"> Surgical procedure</span>

          <p className="text-m flex-wrap">
            The operation is carried out under general anesthetic, and requires
            an overnight stay. Where the implents are placed depends on your
            preference and the surgeon&apos;s recommendations. Our surgeons
            usually place implants beneath the breast tissue, but implants can
            be placed in front of, or behind, the pectoral muscle. Each position
            has its own advantages, which the surgeon will discuss throughly
            during your consultation. For your benefit, we shall describe the
            different incisions and implant placenment in brief.
            <br />
            <br />
            The 4 different incisions:
            <br />
            <br />
            {/* <ul className="custom-bullet-list">
              <li>Under the breast (inframammary incision)</li>
              <li>Around the nipple (peri-areolar incision)</li>
              <li>In the arm pit (transaxillary incision)</li>
              <li>In the naval area (trans-umbilical or TUBA incision)</li>
            </ul> */}
            <br />
            <br />
            The 3 positions for implant placement
            <br />
            <br />
            {/* <ul className="custom-bullet-list">
              <li>Above the pectoral muscles (sub-glandular)</li>
              <li>*duplicate* Above the pectoral muscles (sub-glandular)</li>
              <li>Completely behind the muscles (complete sub-muscular)</li>
            </ul> */}
            </p>

</section>

            <section id="BreastEnlargement5">
            <span className="font-bold text-xl mt-12"> Incisions</span>
            <span className="font-bold font-italic">
              {" "}
              Under the breast (inframammary incision)
            </span>
            The inframammary incision is placed in the proximity of the crease
            where the breast and chest come together. This crease is *missing*
            </section>

            <section id="BreastEnlargement6">
            <h2 className="font-bold text-xl mt-12">
              {" "}
              Benefits of breast enlargement
            </h2>
            Cosmetic surgery breast enlargement is a very popular procedure that
            can be extremely satisfying. It is a permanent improvement to breast
            shape and size, commonly chosen in women who are not satisfied with
            the development of their breasts or in the case of trauma, disease
            or post-pregnancy loss.
            <br />
            Generally, most patients benefit by having boosts in the
            self-confidence, and femininity.
            <h2 className="font-bold text-xl mt-12">
              {" "}
              Best candidates for breast enlargement
            </h2>
            <p>
            The best candidates for breasdt surgery are women who are
            emotionally well adjusted and who have a thorough understanding of
            the procedure. They are in good health, have a history of physical
            activity, and eat a healthy diet. Breast surgery is a good *missing*
          </p>
          <br />
          <br />
          </section>
          <ConsultationForm style={{ paddingBottom: "32px" }} />
        </div>
      </div>
    </div>
  );
}
