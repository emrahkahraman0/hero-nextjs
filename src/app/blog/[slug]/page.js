import Image from "next/image";
import Blog1 from "/public/1920x600.png";

function BlogDetails() {
  return (
    <>
      <div id="page">
        <h6>blog details</h6>
      </div>
      {/*page#*/}

      <div id="blog_details">
        <div className="container">
          <div className="blog_details">
            <Image src={Blog1} className="img_fluid" alt="Blog İmage" />
            <h6>Simple Design Tips for Crafting Better UI Cards</h6>
            <p>
              Its a situation every designer knows; we work on a feature, we
              release it, but always we say to ourselves. There’s only one thing
              that every single culture, religion, and country in the world,
              agrees on? and it’s that there are only seven days in the week.
              Not one more or not one less. The reason why we organize our lives
              around a 7-day week is, quite literally, above our heads. Like
              many other calendars, today's Gregorian calendar is ultimately
              based on the phases of the Moon. It takes the Moon around 29.5
              days to cycle through all Moon phases. For everyday purposes, this
              is a fairly long and impractical time span, so it makes sense to
              break it down into smaller segments. around a 7-day week is, quite
              literally, above our heads. Like around a 7-day week is, quite
              literally, above our heads. Like many other calendars, today's
              Gregorian calendar is ultimately based on the phases of the Moon.
              It takes the Moon around 29.5 days to cycle through all Moon
              phases. For everyday purposes, this is a fairly long and
              impractical time span, so it makes sense to break it down into
              smaller segments. many other calendars, today's Gregorian calendar
              is ultimately based on the phases of the Moon. It takes the Moon
              around 29.5 days to cycle through all Moon phases. For everyday
              purposes, this is a fairly long and impractical time span, so it
              makes sense to break it down into smaller segments. around a 7-day
              week is, quite literally, above our heads. Like many other
              calendars, today's Gregorian calendar is ultimately based on the
              phases of the Moon. It takes the Moon around 29.5 days to cycle
              through all Moon phases. For everyday purposes, this is a fairly
              long and impractical time span, so it makes sense to break it down
              into smaller segments.
            </p>
          </div>
          {/*blog_details*/}
        </div>
        {/*container*/}
      </div>
      {/*blog_details#*/}
    </>
  );
}

export default BlogDetails;
