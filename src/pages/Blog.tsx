// import { useState } from "react";
// import { Link } from "react-router-dom";
// import { Search } from "lucide-react";

// export const sampleBlogs = [
//   {
//     id: 1,
//     title: "How Short-Term Loans Help When Emergencies Happen",
//     excerpt:
//       "Unexpected expenses can hit at the worst time. Here's how fast loans offer instant relief to Canadians...",
//     image: "/blog1.jpg",
//     date: "Jan 10, 2025",
//     readTime: "3 min read",
//     category: "Loans",
//   },
//   {
//     id: 2,
//     title: "Bad Credit? You Can Still Qualify for Emergency Funds",
//     excerpt:
//       "Your credit score shouldn’t define your ability to get help when you need it...",
//     image: "/blog2.jpg",
//     date: "Jan 22, 2025",
//     readTime: "4 min read",
//     category: "Credit",
//   },
//   {
//     id: 3,
//     title: "Top 5 Reasons Canadians Apply for Fast Loans",
//     excerpt:
//       "From car repairs to overdue bills — here’s why many Canadians use payday loans smartly...",
//     image: "/blog3.jpg",
//     date: "Feb 5, 2025",
//     readTime: "3 min read",
//     category: "Loans",
//   },
//   {
//     id: 4,
//     title: "Interac e-Transfer®: The Fastest Way to Receive Funds",
//     excerpt:
//       "Learn how most borrowers get money within hours via e-Transfer...",
//     image: "/blog4.jpg",
//     date: "Feb 18, 2025",
//     readTime: "2 min read",
//     category: "Finance",
//   },
//   {
//     id: 5,
//     title: "How to Borrow Responsibly & Avoid High Fees",
//     excerpt:
//       "Smart borrowing can help you stay financially strong and stress-free...",
//     image: "/blog5.jpg",
//     date: "Mar 1, 2025",
//     readTime: "5 min read",
//     category: "Advice",
//   },
// ];

// // Unique Categories
// const categories = ["All", "Loans", "Credit", "Finance", "Advice"];

// const Blog = () => {
//   const [searchTerm, setSearchTerm] = useState("");
//   const [activeCategory, setActiveCategory] = useState("All");

//   const filteredBlogs = sampleBlogs.filter((blog) => {
//     const matchCategory =
//       activeCategory === "All" || blog.category === activeCategory;
//     const matchSearch = blog.title
//       .toLowerCase()
//       .includes(searchTerm.toLowerCase());
//     return matchCategory && matchSearch;
//   });

//   return (
//     <section className="pt-32 pb-24 bg-background">
//       <div className="container-custom mx-auto px-4">
//         {/* Header */}
//         <div className="text-center mb-16">
//           <h1 className="text-4xl md:text-5xl font-bold text-primary mb-4">
//             Money Tips & Resources
//           </h1>
//           <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
//             Learn how to make smart financial decisions and stay confident when
//             life happens.
//           </p>
//         </div>

//         {/* Search + Filters */}
//         <div className="flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
//           {/* Search Bar */}
//           <div className="relative w-full md:w-80">
//             <Search className="absolute left-3 top-3 text-muted-foreground w-5 h-5" />
//             <input
//               type="text"
//               placeholder="Search articles..."
//               value={searchTerm}
//               onChange={(e) => setSearchTerm(e.target.value)}
//               className="w-full border border-border rounded-lg py-3 pl-10 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-primary"
//             />
//           </div>

//           {/* Category Pills */}
//           <div className="flex flex-wrap justify-center gap-2">
//             {categories.map((cat) => (
//               <button
//                 key={cat}
//                 onClick={() => setActiveCategory(cat)}
//                 className={`px-5 py-2 rounded-full text-sm font-medium transition ${
//                   activeCategory === cat
//                     ? "bg-primary text-white"
//                     : "bg-secondary text-primary hover:bg-primary/10"
//                 }`}
//               >
//                 {cat}
//               </button>
//             ))}
//           </div>
//         </div>

//         {/* Blog Grid */}
//         <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
//           {filteredBlogs.length > 0 ? (
//             filteredBlogs.map((blog) => (
//               <Link
//                 to={`/blog/${blog.id}`}
//                 key={blog.id}
//                 className="group block"
//               >
//                 <article className="bg-card rounded-xl shadow-card overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
//                   <div className="overflow-hidden">
//                     <img
//                       src={blog.image}
//                       alt={blog.title}
//                       className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
//                     />
//                   </div>
//                   <div className="p-6">
//                     <div className="text-xs text-muted-foreground mb-2">
//                       {blog.date} • {blog.readTime}
//                     </div>
//                     <h2 className="text-lg font-bold group-hover:text-accent mb-3 line-clamp-2">
//                       {blog.title}
//                     </h2>
//                     <p className="text-muted-foreground mb-4 line-clamp-2">
//                       {blog.excerpt}
//                     </p>
//                     <span className="text-primary font-medium group-hover:underline">
//                       Read More →
//                     </span>
//                   </div>
//                 </article>
//               </Link>
//             ))
//           ) : (
//             <p className="text-center text-muted-foreground col-span-full py-10">
//               No articles found. Try another keyword.
//             </p>
//           )}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Blog;

import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

export const sampleBlogs = [
  {
    id: 1,
    title: "How Short-Term Loans Help When Emergencies Happen",
    excerpt:
      "Unexpected expenses can hit at the worst time. Here's how fast loans offer instant relief to Canadians...",
    image: "/blog/blog1.png",
    date: "Jan 10, 2025",
    readTime: "3 min read",
    category: "Loans",
  },
  {
    id: 2,
    title: "Bad Credit? You Can Still Qualify for Emergency Funds",
    excerpt:
      "Your credit score shouldn’t define your ability to get help when you need it...",
    image: "/blog/blog2.png",
    date: "Jan 22, 2025",
    readTime: "4 min read",
    category: "Credit",
  },
  {
    id: 3,
    title: "Top 5 Reasons Canadians Apply for Fast Loans",
    excerpt:
      "From car repairs to overdue bills — here’s why many Canadians use payday loans smartly...",
    image: "/blog/blog3.png",
    date: "Feb 5, 2025",
    readTime: "3 min read",
    category: "Loans",
  },
  {
    id: 4,
    title: "Interac e-Transfer®: The Fastest Way to Receive Funds",
    excerpt:
      "Learn how most borrowers get money within hours via e-Transfer...",
    image: "/blog/blog4.png",
    date: "Feb 18, 2025",
    readTime: "2 min read",
    category: "Finance",
  },
  {
    id: 5,
    title: "How to Borrow Responsibly & Avoid High Fees",
    excerpt:
      "Smart borrowing can help you stay financially strong and stress-free...",
    image: "/blog/blog5.png",
    date: "Mar 1, 2025",
    readTime: "5 min read",
    category: "Advice",
  },
];

const categories = ["All", "Loans", "Credit", "Finance", "Advice"];

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredBlogs = sampleBlogs.filter((blog) => {
    const matchCategory =
      activeCategory === "All" || blog.category === activeCategory;
    const matchSearch = blog.title
      .toLowerCase()
      .includes(searchTerm.toLowerCase());
    return matchCategory && matchSearch;
  });

  return (
    <>
      {/* BLOG HERO - UPDATED */}
      <section className="pt-32 pb-16 bg-primary text-primary-foreground text-center px-4">
        <h1 className="text-4xl md:text-5xl font-bold mb-4">
          Money Tips & Resources
        </h1>
        <p className="text-lg max-w-2xl mx-auto opacity-90">
          Learn how to make smart financial decisions and stay confident when
          life happens.
        </p>

        {/* Search and Filters */}
        <div className="max-w-3xl mx-auto mt-8">
          <div className="relative">
            <Search className="absolute left-3 top-3 text-primary w-5 h-5" />
            <input
              type="text"
              placeholder="Search articles..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full bg-white text-foreground py-3 pl-10 pr-4 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-accent"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-2 mt-6">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                  activeCategory === cat
                    ? "bg-white text-primary font-semibold shadow"
                    : "bg-white/20 text-white hover:bg-white/30"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Content */}
      <section className="py-20 bg-background">
        <div className="container-custom mx-auto px-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredBlogs.length > 0 ? (
            filteredBlogs.map((blog) => (
              <Link
                to={`/blog/${blog.id}`}
                key={blog.id}
                className="group block"
              >
                <article className="bg-card rounded-xl shadow-card overflow-hidden border hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
                  <div className="overflow-hidden">
                    <img
                      src={blog.image}
                      alt={blog.title}
                      className="w-full h-52 object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <div className="text-xs text-muted-foreground mb-2">
                      {blog.date} • {blog.readTime}
                    </div>
                    <h2 className="text-lg font-bold group-hover:text-accent mb-3 line-clamp-2">
                      {blog.title}
                    </h2>
                    <p className="text-muted-foreground mb-4 line-clamp-2">
                      {blog.excerpt}
                    </p>
                    <span className="text-primary font-medium group-hover:underline">
                      Read More →
                    </span>
                  </div>
                </article>
              </Link>
            ))
          ) : (
            <p className="text-center text-muted-foreground col-span-full py-10">
              No articles found. Try another keyword.
            </p>
          )}
        </div>
      </section>
    </>
  );
};

export default Blog;
