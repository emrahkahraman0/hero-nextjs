import Image from "next/image";
import Project1 from "/public/300x300.png";
import Link from "next/link";
import Pages from "@/components/Pages";

function Projects() {
  return (
    <>
      <Pages />

      <div id="projects">
        <div className="container">
          <div className="projects">
            <div className="projects_title">
              <h6>My Projects</h6>
              <p>Technologies Ive been working with recently</p>
            </div>
            {/*projects_title*/}
            <div className="projects_items row row-cols-xl-3 row-cols-lg-3 row-cols-md-2 row-cols-sm-2">
              <div className="projects_items_box">
                <Image
                  src={Project1}
                  className="img_fluid"
                  alt="Project İmage"
                />
                <h6>
                  <Link href="/projects/projects-1">
                    Project Tile goes here
                  </Link>
                </h6>
                <p>
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content.
                </p>
                <div className="tech">
                  Tech stack : HTML , JavaScript, SASS, React
                </div>
                <Link className="read_more" href="/projects/projects-1">
                  read more
                </Link>
              </div>
              {/*projects_items_box*/}
              <div className="projects_items_box">
                <Image
                  src={Project1}
                  className="img_fluid"
                  alt="Project İmage"
                />
                <h6>
                  <Link href="/projects/projects-1">
                    Project Tile goes here
                  </Link>
                </h6>
                <p>
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content.
                </p>
                <div className="tech">
                  Tech stack : HTML , JavaScript, SASS, React
                </div>
                <Link className="read_more" href="/projects/projects-1">
                  read more
                </Link>
              </div>
              {/*projects_items_box*/}
              <div className="projects_items_box">
                <Image
                  src={Project1}
                  className="img_fluid"
                  alt="Project İmage"
                />
                <h6>
                  <Link href="/projects/projects-1">
                    Project Tile goes here
                  </Link>
                </h6>
                <p>
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content.
                </p>
                <div className="tech">
                  Tech stack : HTML , JavaScript, SASS, React
                </div>
                <Link className="read_more" href="/projects/projects-1">
                  read more
                </Link>
              </div>
              {/*projects_items_box*/}
              <div className="projects_items_box">
                <Image
                  src={Project1}
                  className="img_fluid"
                  alt="Project İmage"
                />
                <h6>
                  <Link href="/projects/projects-1">
                    Project Tile goes here
                  </Link>
                </h6>
                <p>
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content.
                </p>
                <div className="tech">
                  Tech stack : HTML , JavaScript, SASS, React
                </div>
                <Link className="read_more" href="/projects/projects-1">
                  read more
                </Link>
              </div>
              {/*projects_items_box*/}
              <div className="projects_items_box">
                <Image
                  src={Project1}
                  className="img_fluid"
                  alt="Project İmage"
                />
                <h6>
                  <Link href="/projects/projects-1">
                    Project Tile goes here
                  </Link>
                </h6>
                <p>
                  This is sample project description random things are here in
                  description This is sample project lorem ipsum generator for
                  dummy content.
                </p>
                <div className="tech">
                  Tech stack : HTML , JavaScript, SASS, React
                </div>
                <Link className="read_more" href="/projects/projects-1">
                  read more
                </Link>
              </div>
              {/*projects_items_box*/}
            </div>
            {/*projects_items*/}
          </div>
          {/*projects*/}
        </div>
        {/*container*/}
      </div>
      {/*projects#*/}
    </>
  );
}

export default Projects;
