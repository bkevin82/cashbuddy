import { useParams } from "react-router-dom";
// Import blog data
import { sampleBlogs } from "./Blog";

const BlogDetails = () => {
  const { id } = useParams();

  // Find the blog data by ID
  const blog = sampleBlogs.find((b) => b.id.toString() === id);

  if (!blog) {
    return (
      <section className="pt-32 pb-24 text-center">
        <h2 className="text-3xl font-bold text-primary">Blog Not Found 😕</h2>
        <p className="text-muted-foreground mt-2">
          The article you’re looking for doesn’t exist.
        </p>
      </section>
    );
  }

  return (
    <section className="pt-32 pb-24">
      <div className="container-custom mx-auto px-4 max-w-4xl">
        {/* Blog Image */}
        <img
          src={blog.image}
          alt={blog.title}
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg mb-10"
        />

        {/* Blog Title & Meta */}
        <h1 className="text-4xl font-bold text-primary mb-4">{blog.title}</h1>
        <p className="text-muted-foreground mb-8">
          {blog.date} • {blog.readTime}
        </p>

        {/* Full Blog Content — Placeholder */}

        <p className="text-lg leading-relaxed text-foreground mb-6">
          This is placeholder content for your blog. In the future, this section
          will be replaced by dynamic content from your backend CMS once we
          build admin controls for adding, updating and deleting blogs.
        </p>

        <p className="text-lg leading-relaxed text-foreground opacity-90">
          Until then, this section can hold detailed insights, images,
          storytelling, financial tips and guides related to the selected blog
          article. This helps improve SEO and keeps users engaged while reading.
        </p>
      </div>
    </section>
  );
};

export default BlogDetails;
