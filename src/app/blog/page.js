import Image from "next/image";
import Blog1 from "/public/500x500.png";
import Link from "next/link";

function Blog() {
  return (
    <>
      <div id="page">
        <h6>blog</h6>
      </div>
      {/*page#*/}

      <div id="blog">
        <div className="container">
          <div className="blog row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
            <div className="blog_item">
              <Image src={Blog1} className="img_fluid" alt="Blog İmage" />
              <h6>
                <Link href="/">
                  Simple Design Tips for Crafting Better UI Cards
                </Link>
              </h6>
              <p>
                Its a situation every designer knows; we work on a feature, we
                release it, but always we say to ourselves:
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item">
              <Image src={Blog1} className="img_fluid" alt="Blog İmage" />
              <h6>
                <Link href="/">
                  Simple Design Tips for Crafting Better UI Cards
                </Link>
              </h6>
              <p>
                Its a situation every designer knows; we work on a feature, we
                release it, but always we say to ourselves:
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item">
              <Image src={Blog1} className="img_fluid" alt="Blog İmage" />
              <h6>
                <Link href="/">
                  Simple Design Tips for Crafting Better UI Cards
                </Link>
              </h6>
              <p>
                Its a situation every designer knows; we work on a feature, we
                release it, but always we say to ourselves:
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item">
              <Image src={Blog1} className="img_fluid" alt="Blog İmage" />
              <h6>
                <Link href="/">
                  Simple Design Tips for Crafting Better UI Cards
                </Link>
              </h6>
              <p>
                Its a situation every designer knows; we work on a feature, we
                release it, but always we say to ourselves:
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*blog_item*/}
            <div className="blog_item">
              <Image src={Blog1} className="img_fluid" alt="Blog İmage" />
              <h6>
                <Link href="/">
                  Simple Design Tips for Crafting Better UI Cards
                </Link>
              </h6>
              <p>
                Its a situation every designer knows; we work on a feature, we
                release it, but always we say to ourselves:
              </p>
              <Link className="read_more" href="/">
                Read More
              </Link>
            </div>
            {/*blog_item*/}
          </div>
          {/*blog*/}
        </div>
        {/*container*/}
      </div>
      {/*blog#*/}
    </>
  );
}

export default Blog;
