import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "../components/Layout";
import { imageUrl } from "../assets/imageUrl";
import { blogPosts } from "./Blog/posts";
import "../assets/style/Blog.css";

const postsPerPage = 10;
export function BlogPage() {
  const [page, setPage] = useState(1);
  const [bookingOpen, setBookingOpen] = useState(false);
  const [booked, setBooked] = useState(false);
  const totalPages = Math.ceil(blogPosts.length / postsPerPage);
  const visiblePosts = blogPosts.slice((page - 1) * postsPerPage, page * postsPerPage);
  const changePage = (nextPage) => { setPage(nextPage); document.querySelector(".blog-page__content")?.scrollIntoView({ behavior: "auto", block: "start" }); };
  useEffect(() => {
    const pagination = document.querySelector(".blog-pagination");
    if (!pagination) return undefined;
    const previous = document.createElement("button");
    const next = document.createElement("button");
    previous.className = next.className = "blog-pagination__step";
    previous.textContent = "← Prev";
    next.textContent = "Next →";
    previous.disabled = page === 1;
    next.disabled = page === totalPages;
    previous.onclick = () => changePage(page - 1);
    next.onclick = () => changePage(page + 1);
    pagination.prepend(previous);
    pagination.append(next);
    return () => { previous.remove(); next.remove(); };
  }, [page, totalPages]);
  const submitBooking = (event) => { event.preventDefault(); setBooked(true); };
  return <Layout><main className="blog-page"><section className="blog-page__hero"><div><span className="blog-page__badge"><i /> EXCELCARE INSIGHTS</span><h1>Tips, Trends &amp; <strong>Stories</strong></h1><p>From laundry hacks to dry-cleaning guides — everything you need to keep your clothes looking their best.</p></div></section><section className="blog-page__content"><div className="blog-page__heading"><b>Latest Articles</b><span>({blogPosts.length} posts)</span></div><div className="blog-page__layout"><div><div className="blog-page__grid">{visiblePosts.map((post) => <article className="blog-card" key={post.slug}><Link className="blog-card__image" to={`/blog/${post.slug}`}><img src={imageUrl(post.image)} alt="" /></Link><div className="blog-card__body"><h2><Link to={`/blog/${post.slug}`}>{post.title}</Link></h2><p>{post.excerpt}</p><Link to={`/blog/${post.slug}`}>READ ARTICLE →</Link></div><footer><span>{post.category}</span><time>{post.date}</time></footer></article>)}</div><nav className="blog-pagination" aria-label="Blog pages">{Array.from({ length: totalPages }, (_, index) => <button className={page === index + 1 ? "is-active" : ""} type="button" key={index} onClick={() => changePage(index + 1)}>{index + 1}</button>)}</nav></div><aside className="blog-page__sidebar"><div className="blog-page__order"><small>PLACE ORDER NOW</small><button type="button" onClick={() => { setBookingOpen(true); setBooked(false); }}>Schedule Your Pickup <em>in next 60 minutes</em></button><span>● Available now · Fast pickup</span></div><div className="blog-page__social">f <b>𝕏</b> ◎</div><div className="blog-page__recent"><h3>EXCELCARE BLOGS</h3>{blogPosts.slice(0, 4).map((post) => <Link to={`/blog/${post.slug}`} key={post.slug}><img src={imageUrl(post.image)} alt="" /><span><small>THIS MONTH</small>{post.title}</span></Link>)}</div></aside></div></section>{bookingOpen && <div className="pickup-modal" role="dialog" aria-modal="true"><button className="pickup-modal__backdrop" type="button" aria-label="Close" onClick={() => setBookingOpen(false)} /><form className="pickup-modal__card" onSubmit={submitBooking}><button className="pickup-modal__close" type="button" onClick={() => setBookingOpen(false)}>×</button><div className="pickup-modal__icon">✦</div><span className="pickup-modal__eyebrow">EXCELCARE PICKUP</span><h2>Fresh clothes are just a pickup away.</h2><p>Share your details and our care team will confirm your slot shortly.</p><div className="pickup-modal__grid"><label><span>Name</span><input required placeholder="Your full name" /></label><label><span>Phone number</span><input required type="tel" placeholder="Your phone number" /></label></div><label><span>Email address</span><input required type="email" placeholder="you@example.com" /></label><label><span>Pickup address</span><textarea required rows="2" placeholder="House / street / area" /></label><div className="pickup-modal__grid"><label><span>Pincode</span><input required inputMode="numeric" placeholder="Your pincode" /></label><label><span>Select service</span><select required defaultValue=""><option value="" disabled>Choose a service</option><option>Laundry</option><option>Dry Cleaning</option><option>Ironing</option><option>Shoe Cleaning</option><option>Curtain Cleaning</option><option>Carpet Cleaning</option></select></label></div><button className="pickup-modal__submit" type="submit">Request Pickup →</button>{booked && <b className="pickup-modal__success">✓ Request received! We&apos;ll contact you shortly.</b>}</form></div>}</main></Layout>;
}
