import React from "react";

function About() {
  return (
    <>
      <div id="page">
        <h6>about</h6>
      </div>
      {/*page#*/}

      <div id="about">
        <div className="container">
          <div className="about row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-1">
            <div className="about_item">
              <h6>About Me</h6>
              <p>
                The Generator App is an online tool that helps you to export
                ready-made templates ready to work as your future website. It
                helps you to combine slides, panels and other components and
                export it as a set of static files: HTML/CSS/JS.
              </p>
            </div>
            {/*about_item*/}
            <div className="about_item">
              <h6>Language</h6>
              <ul className="language">
                <li>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
                <li>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
              </ul>
              {/*language*/}
            </div>
            {/*about_item*/}
            <div className="about_item">
              <h6>Work Experience</h6>
              <ul className="work">
                <li>
                  <h4>2016 - 2019 . Cambridge University</h4>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
                <li>
                  <h4>2016 - 2019 . Cambridge University</h4>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
              </ul>
              {/*work*/}
            </div>
            {/*about_item*/}
            <div className="about_item">
              <h6>Education</h6>
              <ul className="education">
                <li>
                  <h4>2016 - 2019 . Google</h4>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
                <li>
                  <h4>2016 - 2019 . Google</h4>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
                <li>
                  <h4>2016 - 2019 . Google</h4>
                  <h5>Website Design Course</h5>
                  <p>
                    Bachelor's Degree in Computer Science ABC Technical
                    Institute, Jefferson, Missouri.
                  </p>
                </li>
              </ul>
              {/*education*/}
            </div>
            {/*about_item*/}
          </div>
          {/*about*/}
        </div>
        {/*container*/}
      </div>
      {/*about#*/}
    </>
  );
}

export default About;
