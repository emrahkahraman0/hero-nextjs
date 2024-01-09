import Image from "next/image";
import Link from "next/link";
import Pages from "@/components/Pages";
import ProjectsLists from "@/libs/ProjectsLists";

async function Projects() {
  const comments = await ProjectsLists();
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
              {comments.map(comment => {
                return (
                  <>
                    <div key={comment.id} className="projects_items_box">
                      <Image
                        src={`https://picsum.photos/300/300?random`}
                        width={300}
                        height={300}
                        alt="Blog İmage"
                      />
                      <h6>
                        <Link href={`/projects/${comment.id}`}>
                          {comment.name}
                        </Link>
                      </h6>
                      <p>{comment.body}</p>
                      <div className="tech">Tech stack : {comment.email}</div>

                      <Link
                        className="read_more"
                        href={`/projects/${comment.id}`}
                      >
                        Read More
                      </Link>
                    </div>
                  </>
                );
              })}
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
