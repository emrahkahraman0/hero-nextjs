import Link from "next/link";
import Image from "next/image";
import HeroImage from "/public/heroİmg.png";

function Home() {
  return (
    <>
      <div id="hero">
        <div className="container">
          <div className="hero">
            <div className="hero_text">
              Hi 👋, <br /> My name is <br />
              <Link className="href" href="/">
                Pavan MG
              </Link>
              <br /> I build things for web
            </div>
            <div className="hero_image">
              <Image src={HeroImage} className="img_fluid" alt="Hero İmage" />
            </div>
          </div>
          {/*hero*/}
        </div>
        {/*container*/}
      </div>
      {/*hero#*/}
    </>
  );
}

export default Home;
