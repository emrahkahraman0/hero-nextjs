import Image from "next/image";
import Project1 from "/public/300x300.png";
import { ImLink } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";

function ProjectsDetails() {
  return (
    <>
      <div id="page">
        <h6>projects Details</h6>
      </div>
      {/*page#*/}

      <div id="projects_details">
        <div className="container">
          <div className="projects_details align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="projects_details_image">
              <Image src={Project1} className="img_fluid" alt="Project İmage" />
            </div>
            {/*projects_details_image#*/}
            <div className="projects_details_text">
              <h6>Project Tile goes here</h6>
              <p>
                This is sample project description random things are here in
                description This is sample project lorem ipsum generator for
                dummy content.
              </p>
              <div className="desc">
                <Link href="/" className="desc_item">
                  <ImLink className="icon" />
                  <span>Live Preview</span>
                </Link>
                <Link href="/" className="desc_item">
                  <FaGithub className="icon" />
                  <span>View Code</span>
                </Link>
              </div>
            </div>
            {/*projects_details_text#*/}
          </div>
          {/*projects_details#*/}
        </div>
        {/*container#*/}
      </div>
      {/*projects_details#*/}
    </>
  );
}

export default ProjectsDetails;
