import Image from "next/image";
import Icon1 from "/public/icon-1.svg";
import Icon2 from "/public/icon-2.svg";
import Icon3 from "/public/icon-3.svg";
import Icon4 from "/public/icon-4.svg";
import Icon5 from "/public/icon-5.svg";
import Icon6 from "/public/icon-6.svg";
import Icon7 from "/public/icon-7.svg";
import Icon8 from "/public/icon-8.svg";
import Icon9 from "/public/icon-9.svg";
import Icon10 from "/public/icon-10.svg";
import Icon11 from "/public/icon-11.svg";
import Icon12 from "/public/icon-12.svg";
import Pages from "@/components/Pages";

function Tech() {
  return (
    <>
      <Pages />

      <div id="tech">
        <div className="container">
          <div className="tech">
            <div className="tech_title">
              <h6>My Tech Stack</h6>
              <p>Technologies Ive been working with recently</p>
            </div>
            {/*tech_title*/}
            <div className="tech_items">
              <div className="tech_items_box">
                <Image src={Icon1} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon2} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon3} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon4} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon5} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon6} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon7} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon8} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon9} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon10} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon11} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
              <div className="tech_items_box">
                <Image src={Icon12} className="img_fluid" alt="Html5" />
              </div>
              {/*tech_items_box*/}
            </div>
            {/*tech_items*/}
          </div>
          {/*tech*/}
        </div>
        {/*container*/}
      </div>
      {/*tech#*/}
    </>
  );
}

export default Tech;
