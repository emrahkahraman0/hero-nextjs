import Image from "next/image";
import Link from "next/link";
import Pages from "@/components/Pages";
import Posts from "@/libs/Posts";

async function Blog() {
  const posts = await Posts();
  return (
    <>
      <Pages />

      <div id="blog">
        <div className="container">
          <div className="blog row row-cols-xl-2 row-cols-lg-2 row-cols-md-2 row-cols-sm-2">
            {posts.map(post => {
              return (
                <>
                  <div key={post.id} className="blog_item">
                    <Image
                      src={`https://picsum.photos/500/500?random=1`}
                      width={500}
                      height={500}
                      alt="Blog İmage"
                    />
                    <h6>
                      <Link href={`/blog/${post.id}`}>{post.title}</Link>
                    </h6>
                    <p>{post.body}</p>
                    <Link className="read_more" href={`/blog/${post.id}`}>
                      Read More
                    </Link>
                  </div>
                </>
              );
            })}
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
