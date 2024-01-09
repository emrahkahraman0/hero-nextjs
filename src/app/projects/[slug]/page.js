import Image from "next/image";
import { ImLink } from "react-icons/im";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import Pages from "@/components/Pages";
import ProjectsListsDetails from "@/libs/ProjectsListsDetails";

async function ProjectsDetails({ params: { slug } }) {
  const commentsData = await ProjectsListsDetails(slug);
  return (
    <>
      <Pages />

      <div id="projects_details">
        <div className="container">
          <div className="projects_details align_items row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="projects_details_image">
              <Image
                src={`https://picsum.photos/300/300?random=${slug}`}
                width={300}
                height={300}
                alt="Blog İmage"
              />
            </div>
            {/*projects_details_image#*/}
            <div className="projects_details_text">
              <h6>{commentsData.name}</h6>
              <p>{commentsData.body}</p>
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
