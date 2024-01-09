import Image from "next/image";
import Pages from "@/components/Pages";
import PostsDetails from "@/libs/PostsDetails";

async function BlogDetails({ params: { slug } }) {
  const postData = await PostsDetails(slug);
  return (
    <>
      <Pages />

      <div id="blog_details">
        <div className="container">
          <div className="blog_details">
            <Image
              src={`https://picsum.photos/1920/600?random=${slug}`}
              width={1920}
              height={600}
              alt="Blog İmage"
            />
            <h6>{postData.title}</h6>
            <p>{postData.body}</p>
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
