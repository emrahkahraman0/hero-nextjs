import Image from "next/image";
import FooterLogo from "/public/footerLogo.svg";
import Link from "next/link";
import { FaFacebookF } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";

function Footer() {
  return (
    <>
      <div id="footer">
        <div className="container">
          <div className="footer">
            <div className="footer_logo">
              <Link href="/">
                <Image
                  className="img_fluid"
                  src={FooterLogo}
                  alt="Team Image"
                />
              </Link>
            </div>
            {/*footer_logo*/}
            <ul className="footer_social">
              <li>
                <Link href="/">
                  <FaFacebookF className="icon" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaInstagram className="icon" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaTwitter className="icon" />
                </Link>
              </li>
              <li>
                <Link href="/">
                  <FaGithub className="icon" />
                </Link>
              </li>
            </ul>
            {/*footer_social*/}
            <ul className="footer_copyright">
              Designed and built by
              <Link className="href" href="/">
                Pavan MG
              </Link>
              with{" "}
              <Link className="href" href="/">
                Love & Coffee
              </Link>
            </ul>
            {/*footer_copyright*/}
          </div>
          {/*footer*/}
        </div>
        {/*container*/}
      </div>
      {/*footer#*/}
    </>
  );
}

export default Footer;
