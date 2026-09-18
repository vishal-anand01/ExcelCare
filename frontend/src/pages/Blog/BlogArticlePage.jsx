import { Link, useParams } from "react-router-dom";
import { Layout } from "../../components/Layout";
import { imageUrl } from "../../assets/imageUrl";
import { blogPosts } from "./posts";
import "../../assets/style/Blog.css";

export function BlogArticlePage() {
  const { slug } = useParams();
  const post = blogPosts.find((item) => item.slug === slug);
  const recent = blogPosts.filter((item) => item.slug !== slug).slice(0, 5);
  if (!post)
    return (
      <Layout>
        <main className="blog-article__missing">
          <h1>Article not found</h1>
          <Link to="/blog">Back to blog</Link>
        </main>
      </Layout>
    );
  return (
    <Layout>
      <main className="blog-article">
        <div className="blog-article__layout">
          <article>
            <header>
              <Link to="/blog">← All articles</Link>
              <h1>{post.title}</h1>
              <div>
                <span>◉ {post.category}</span>
                <span>▣ {post.date}</span>
                <span>▤ BLOGS</span>
              </div>
            </header>
            <img src={imageUrl(post.image)} alt="" />
            <p className="blog-article__lead">{post.excerpt}</p>
          {post.body.map((block, index) => {
            const content = typeof block === "string" ? block : block.text;
            if (typeof block === "object" && block.type === "h2") return <h2 key={content}>{content}</h2>;
            if (typeof block === "object" && block.type === "h3") return <h3 key={content}>{content}</h3>;
            return <p key={`${content}-${index}`}>{content}</p>;
          })}
            <h2>Simple care, better results</h2>
            <p>
              Small fabric-care habits can make a noticeable difference. Treat
              stains promptly, separate garments by colour and fabric, and
              always follow the care label before washing.
            </p>
            <p>
              When an item needs specialist attention, expert cleaning gives it
              the best chance of looking and feeling its best for longer.
            </p>
            <h2>Let ExcelCare take care of it</h2>
            <p>
              Need a little extra help? Our fabric-care team offers convenient
              doorstep pickup and delivery for laundry, dry cleaning and
              specialist care.
            </p>
            <Link className="blog-article__cta" to="/contact-us">
              Schedule a pickup →
            </Link>
          </article>
          <aside className="blog-article__sidebar">
            <div className="blog-page__order">
              <small>PLACE ORDER NOW</small>
              <Link to="/contact-us">
                Schedule Your Pickup <em>in next 60 minutes</em>
              </Link>
              <span>● Available now · Fast pickup</span>
            </div>
            <div className="blog-page__social">
              f <b>𝕏</b> ◎
            </div>
            <div className="blog-page__recent">
              <h3>EXCELCARE BLOGS</h3>
              {recent.map((item) => (
                <Link to={`/blog/${item.slug}`} key={item.slug}>
                  <img src={imageUrl(item.image)} alt="" />
                  <span>
                    <small>THIS MONTH</small>
                    {item.title}
                  </span>
                </Link>
              ))}
            </div>
          </aside>
        </div>
        <section className="blog-article__more">
          <h2>Laundrywala Blogs</h2>
          <div>
            {blogPosts.map((item) => (
              <Link to={`/blog/${item.slug}`} key={item.slug}>
                <img src={imageUrl(item.image)} alt="" />
                <h3>{item.title}</h3>
                <p>
                  RAKHI <i>·</i> THIS MONTH
                </p>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </Layout>
  );
}
