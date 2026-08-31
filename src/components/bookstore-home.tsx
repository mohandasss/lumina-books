import { useEffect, useRef, useState, type FormEvent, type ReactNode } from "react";
import {
  ArrowLeft, ArrowRight, ArrowUpRight, BookOpen, Check, ChevronDown,
  Heart, Menu, Search, ShoppingBag, Star, User, X, Eye, Plus,
  Instagram, Twitter, CircleUserRound
} from "lucide-react";
import midnight from "@/assets/cover-midnight.jpg";
import ocean from "@/assets/cover-ocean.jpg";
import silence from "@/assets/cover-silence.jpg";
import garden from "@/assets/cover-garden.jpg";
import orbit from "@/assets/cover-orbit.jpg";
import light from "@/assets/cover-light.jpg";
import river from "@/assets/cover-river.jpg";
import code from "@/assets/cover-code.jpg";
import author1 from "@/assets/author-1.jpg";
import author2 from "@/assets/author-2.jpg";
import author3 from "@/assets/author-3.jpg";

type Book = { title: string; author: string; cover: string; price: string; rating: string; category: string; detail?: string };
const books: Book[] = [
  { title: "The Midnight Library", author: "Matt Haig", cover: midnight, price: "$18.00", rating: "4.9", category: "Fiction", detail: "Mar 2026" },
  { title: "The Far Shore", author: "Lena Mori", cover: ocean, price: "$21.00", rating: "4.8", category: "Literary", detail: "Feb 2026" },
  { title: "A Map of Silence", author: "Yuki Tanaka", cover: silence, price: "$16.50", rating: "4.9", category: "Translated", detail: "Jan 2026" },
  { title: "The Garden at Night", author: "Mara Vale", cover: garden, price: "$15.00", rating: "4.7", category: "Poetry", detail: "Apr 2026" },
  { title: "Small Orbits", author: "Elias North", cover: orbit, price: "$24.00", rating: "4.8", category: "Science Fiction", detail: "Mar 2026" },
  { title: "What the Light Kept", author: "Noor Ahmed", cover: light, price: "$19.50", rating: "4.6", category: "Contemporary", detail: "May 2026" },
  { title: "The River Remembers", author: "Sofia Ibarra", cover: river, price: "$22.00", rating: "4.8", category: "World Fiction", detail: "Jun 2026" },
  { title: "Systems of Thought", author: "Dr. Ada Reyes", cover: code, price: "$38.00", rating: "4.9", category: "Computer Science", detail: "2026 Edition" },
];

function Button({ children, secondary = false, onClick, type = "button" }: { children: ReactNode; secondary?: boolean; onClick?: () => void; type?: "button" | "submit" }) {
  return <button type={type} onClick={onClick} className={secondary ? "btn btn-secondary" : "btn btn-primary"}>{children}</button>;
}
function IconButton({ label, children, onClick, count }: { label: string; children: ReactNode; onClick?: () => void; count?: number }) {
  return <button className="icon-btn" aria-label={label} title={label} onClick={onClick}>{children}{count ? <span className="icon-count">{count}</span> : null}</button>;
}
function Rating({ value }: { value: string }) { return <span className="rating"><Star size={13} fill="currentColor" /> {value}</span>; }
function SectionHeading({ eyebrow, title, copy, action }: { eyebrow?: string; title: string; copy?: string; action?: string }) {
  return <header className="section-heading"><div>{eyebrow && <p className="eyebrow">{eyebrow}</p>}<h2>{title}</h2>{copy && <p className="section-copy">{copy}</p>}</div>{action && <a className="text-link" href="#books">{action} <ArrowUpRight size={16}/></a>}</header>;
}
function BookCard({ book, compact = false, onWish, onCart }: { book: Book; compact?: boolean; onWish: () => void; onCart: () => void }) {
  return <article className={compact ? "book-card compact" : "book-card"}>
    <div className="cover-wrap"><img src={book.cover} alt={`${book.title} book cover`} width={768} height={1152} loading="lazy" />
      <div className="book-actions"><IconButton label="Add to wishlist" onClick={onWish}><Heart size={17}/></IconButton><IconButton label="Quick view"><Eye size={17}/></IconButton><IconButton label="Add to cart" onClick={onCart}><Plus size={17}/></IconButton></div>
      <span className="book-category">{book.category}</span>
    </div>
    <div className="book-meta"><h3>{book.title}</h3><p>{book.author}</p><div className="book-line"><Rating value={book.rating}/><span>{book.price}</span></div>{book.detail && <small>{book.detail}</small>}</div>
  </article>;
}
function BookCarousel({ title, eyebrow, items, onWish, onCart }: { title: string; eyebrow?: string; items: Book[]; onWish: () => void; onCart: () => void }) {
  const rail = useRef<HTMLDivElement>(null);
  const move = (dir: number) => rail.current?.scrollBy({ left: dir * 520, behavior: "smooth" });
  return <section className="section" id="books"><div className="container"><div className="carousel-head"><SectionHeading eyebrow={eyebrow} title={title} action="View all"/><div className="arrow-set"><IconButton label="Previous" onClick={() => move(-1)}><ArrowLeft size={19}/></IconButton><IconButton label="Next" onClick={() => move(1)}><ArrowRight size={19}/></IconButton></div></div><div className="book-rail" ref={rail}>{items.map((book, i) => <BookCard key={`${title}-${i}`} book={book} onWish={onWish} onCart={onCart}/>)}</div></div></section>;
}
function Navbar({ wish, cart }: { wish: number; cart: number }) {
  const [searchOpen, setSearchOpen] = useState(false); const [menu, setMenu] = useState(false); const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 24); onScroll(); addEventListener("scroll", onScroll); return () => removeEventListener("scroll", onScroll); }, []);
  return <><nav className={`navbar ${scrolled ? "scrolled" : ""}`}><div className="nav-inner">
    <a className="brand" href="#top"><span className="brand-mark"><BookOpen size={18}/></span><span>Folio<em>.</em></span></a>
    <div className="nav-links"><a href="#top">Home</a><a href="#books">Books</a><a href="#authors">Authors</a><a href="#publishers">Publishers</a><a href="#categories">Categories</a></div>
    <div className={`nav-actions ${searchOpen ? "searching" : ""}`}><div className="search-box"><Search size={18}/><input aria-label="Search books" autoFocus={searchOpen} placeholder="Search books, authors or publishers…"/><button aria-label="Close search" onClick={() => setSearchOpen(false)}><X size={17}/></button></div>
      {!searchOpen && <IconButton label="Search" onClick={() => setSearchOpen(true)}><Search size={19}/></IconButton>}<IconButton label="Wishlist" count={wish}><Heart size={19}/></IconButton><IconButton label="Shopping cart" count={cart}><ShoppingBag size={19}/></IconButton><IconButton label="Profile"><User size={19}/></IconButton><IconButton label="Menu" onClick={() => setMenu(true)}><Menu size={20}/></IconButton></div>
  </div></nav>{menu && <div className="mobile-drawer"><button aria-label="Close menu" onClick={() => setMenu(false)}><X/></button>{["Home","Books","Authors","Publishers","Categories"].map(x => <a key={x} href={`#${x.toLowerCase()}`} onClick={() => setMenu(false)}>{x}<ArrowUpRight/></a>)}</div>}</>;
}
function Hero() { return <section className="hero" id="top"><div className="hero-glow"/><div className="container hero-grid"><div className="hero-copy"><p className="eyebrow">CURATED FOR READERS</p><h1>Stories worth<br/><em>getting lost in.</em></h1><p>Discover remarkable books, timeless authors and stories selected for curious minds.</p><div className="hero-actions"><a className="btn btn-primary" href="#books">Explore Books <ArrowRight size={17}/></a><a className="text-link" href="#authors">Browse Authors <ArrowUpRight size={16}/></a></div><div className="hero-note"><span>01</span><p>Independent voices<br/>Thoughtfully selected</p></div></div>
  <div className="hero-books" aria-label="Curated book selection"><img className="hero-cover hero-cover-a" src={ocean} alt="The Far Shore cover" width={768} height={1152}/><img className="hero-cover hero-cover-b" src={silence} alt="A Map of Silence cover" width={768} height={1152}/><img className="hero-cover hero-cover-main" src={midnight} alt="The Midnight Library cover" width={768} height={1152}/><img className="hero-cover hero-cover-c" src={garden} alt="The Garden at Night cover" width={768} height={1152}/><div className="editors-pick"><span>EDITOR'S PICK</span><strong>The Midnight Library</strong><p>Matt Haig</p><div>★★★★★</div></div></div></div><div className="scroll-cue">SCROLL TO DISCOVER <span/></div></section>; }

const authors = [
  { name: "Haruki Murakami", genre: "Fiction · Magical Realism", works: "18 Works", image: author1 },
  { name: "Anika Rao", genre: "Poetry · Essays", works: "7 Works", image: author2 },
  { name: "Elias Brooks", genre: "Culture · Current Affairs", works: "11 Works", image: author3 },
];
function Authors() { return <section className="section author-section" id="authors"><div className="container"><SectionHeading eyebrow="VOICES TO KNOW" title="Authors shaping today's stories" action="Meet all authors"/><div className="author-grid">{authors.map((a,i)=><article className={`author-card author-${i+1}`} key={a.name}><div className="portrait"><img src={a.image} alt={`Portrait of ${a.name}`} width={1024} height={1280} loading="lazy"/></div><span>0{i+1}</span><h3>{a.name}</h3><p>{a.genre}<br/>{a.works}</p><a href="#books">Explore Author <ArrowUpRight size={16}/></a></article>)}</div></div></section>; }
function Publishers() { const names=["PENGUIN","HarperCollins","SIMON & SCHUSTER","MACMILLAN","HACHETTE","BLOOMSBURY"]; return <section className="publisher-band" id="publishers"><div className="container"><p className="eyebrow">FEATURED PUBLISHERS</p><div className="publisher-loop">{[...names,...names].map((x,i)=><span key={`${x}-${i}`}>{x}<i>✦</i></span>)}</div></div></section>; }
function Recent({onWish,onCart}:{onWish:()=>void;onCart:()=>void}) { return <section className="section"><div className="container"><SectionHeading eyebrow="JUST IN" title="Recently Published" copy="Fresh stories, new voices and the latest releases." action="View New Releases"/><div className="book-grid">{books.slice(0,8).map((b,i)=><BookCard key={i} book={b} compact onWish={onWish} onCart={onCart}/>)}</div></div></section>; }
const categories = ["Novels","Poetry","Short Stories","Spirituality","Politics","Sports","Translation","E-Books","Text Books"];
function Categories() { return <section className="section category-section" id="categories"><div className="container"><SectionHeading eyebrow="FIND YOUR NEXT READ" title="Explore by category"/><div className="category-grid">{categories.map((x,i)=><a href="#books" className={`category category-${i+1}`} key={x}><span>0{i+1}</span><div><h3>{x}</h3><p>{128+i*37} books</p></div><ArrowUpRight/></a>)}</div></div></section>; }
function Poetry({onWish,onCart}:{onWish:()=>void;onCart:()=>void}) { return <section className="section poetry"><div className="container poetry-grid"><div className="poetry-quote"><p className="eyebrow">POETRY & PROSE</p><blockquote>“A poem begins in delight and ends in <em>wisdom.</em>”</blockquote><span>— Robert Frost</span><a href="#books" className="text-link">Explore the collection <ArrowUpRight/></a></div><div className="poetry-books">{[books[3],books[5]].map((b,i)=><BookCard key={i} book={b} onWish={onWish} onCart={onCart}/>)}</div></div></section>; }
function TopicRows() { const rows=[{k:"SHORT READS",t:"Short Stories",c:"Compact stories, lasting impressions.",bs:[books[1],books[5],books[6]]},{k:"REFLECTION",t:"Spirituality & Religion",c:"Books for contemplation and inner life.",bs:[books[5],books[6],books[3]]},{k:"THE WORLD NOW",t:"Politics & Current Affairs",c:"Ideas that shape our shared future.",bs:[books[4],books[7],books[1]]},{k:"SPORT & CULTURE",t:"Stories Beyond the Game",c:"Lives, legacies and moments that moved us.",bs:[books[0],books[4],books[2]]}]; return <div className="topic-wrap">{rows.map((r,ri)=><section className="topic-row" key={r.t}><div className="topic-copy"><p className="eyebrow">{r.k}</p><h2>{r.t}</h2><p>{r.c}</p><a href="#books">View collection <ArrowRight size={15}/></a></div><div className="topic-books">{r.bs.map((b,i)=><article key={i}><span>0{i+1}</span><img src={b.cover} alt={`${b.title} cover`} width={768} height={1152} loading="lazy"/><div><h3>{b.title}</h3><p>{b.author}</p><Rating value={b.rating}/></div></article>)}</div></section>)}</div>; }
function Translated() { return <section className="section translated"><div className="container"><SectionHeading eyebrow="TRANSLATED FICTION" title="Stories Without Borders" copy="Remarkable books translated from voices around the world."/><div className="translation-grid">{[{b:books[2],l:"Japanese → English",tr:"Translated by Emi Watanabe"},{b:books[6],l:"Spanish → English",tr:"Translated by Claire Morris"},{b:books[1],l:"Korean → English",tr:"Translated by June Park"}].map((x,i)=><article key={i}><img src={x.b.cover} alt={`${x.b.title} cover`} width={768} height={1152} loading="lazy"/><div><span>{x.l}</span><h3>{x.b.title}</h3><p>{x.b.author}</p><small>{x.tr}</small></div></article>)}</div></div></section>; }
function Ebooks() { return <section className="section"><div className="container ebook"><div><p className="eyebrow">DIGITAL EDITIONS</p><h2>Carry your library<br/><em>everywhere.</em></h2><p>Discover thousands of books available instantly as digital editions.</p><Button>Explore E-Books <ArrowRight size={17}/></Button></div><div className="reader"><div className="reader-bar"><span/><span/></div><p>FOLIO READER</p><h3>The Midnight<br/>Library</h3><blockquote>“Between life and death there is a library, and within that library, the shelves go on forever.”</blockquote><div className="reader-progress"><span/><small>42%</small></div></div></div></section>; }
function Textbooks({onWish,onCart}:{onWish:()=>void;onCart:()=>void}) { return <section className="section"><div className="container"><SectionHeading eyebrow="BOOKS FOR CURIOUS MINDS" title="Learn Something New" copy="Computer science, engineering, mathematics, business and humanities." action="Browse Textbooks"/><div className="learning"><div className="subject-list">{["Computer Science","Engineering","Mathematics","Business","Science","Humanities"].map((x,i)=><a href="#books" key={x}><span>0{i+1}</span>{x}<ArrowUpRight/></a>)}</div><BookCard book={books[7]} onWish={onWish} onCart={onCart}/></div></div></section>; }
function Bestsellers() { return <section className="section bestsellers"><div className="container"><SectionHeading eyebrow="READERS' CHOICE" title="This week's best sellers"/><div className="ranking">{books.slice(0,5).map((b,i)=><article className={i===0?"rank top":"rank"} key={b.title}><span className="rank-num">0{i+1}</span><img src={b.cover} alt={`${b.title} cover`} width={768} height={1152} loading="lazy"/><div><small>{b.category}</small><h3>{b.title}</h3><p>{b.author}</p><Rating value={b.rating}/><strong>{b.price}</strong></div></article>)}</div></div></section>; }
function Newsletter() { const [done,setDone]=useState(false); const submit=(e:FormEvent)=>{e.preventDefault();setDone(true)}; return <section className="newsletter"><div className="container"><div><p className="eyebrow">THE FOLIO LETTER</p><h2>Good books deserve<br/><em>good company.</em></h2></div><div><p>Get thoughtful recommendations, new releases and reading inspiration delivered occasionally.</p><form onSubmit={submit}>{done?<div className="success"><Check/> You're on the reading list.</div>:<><input type="email" required aria-label="Email address" placeholder="Your email address"/><Button type="submit">Join the Reading List <ArrowRight size={16}/></Button></>}</form></div></div></section>; }
function Footer() { return <footer><div className="container footer-grid"><div className="footer-brand"><a className="brand" href="#top"><span className="brand-mark"><BookOpen size={18}/></span><span>Folio<em>.</em></span></a><p>Stories, ideas and voices<br/>worth discovering.</p></div>{[{h:"Discover",a:["New Releases","Best Sellers","Authors","Publishers"]},{h:"Categories",a:["Novels","Poetry","Short Stories","E-Books","Textbooks"]},{h:"Company",a:["About","Contact","Careers","Journal"]},{h:"Support",a:["Help","Delivery","Returns","Privacy","Terms"]}].map(c=><div className="footer-col" key={c.h}><h3>{c.h}</h3>{c.a.map(x=><a href="#books" key={x}>{x}</a>)}</div>)}</div><div className="container footer-bottom"><span>© 2026 Folio Books</span><div><a href="#top" aria-label="Instagram"><Instagram size={17}/></a><a href="#top" aria-label="Twitter"><Twitter size={17}/></a><a href="#top" aria-label="Profile"><CircleUserRound size={17}/></a></div><button>English / USD <ChevronDown size={14}/></button></div></footer>; }

export function BookstoreHome() { const [wish,setWish]=useState(0); const [cart,setCart]=useState(0); return <main><Navbar wish={wish} cart={cart}/><Hero/><BookCarousel eyebrow="CURATED THIS WEEK" title="Books worth discovering" items={books} onWish={()=>setWish(x=>x+1)} onCart={()=>setCart(x=>x+1)}/><Authors/><Publishers/><Recent onWish={()=>setWish(x=>x+1)} onCart={()=>setCart(x=>x+1)}/><Categories/><BookCarousel eyebrow="READER FAVOURITES" title="Popular Novels" items={[...books].reverse()} onWish={()=>setWish(x=>x+1)} onCart={()=>setCart(x=>x+1)}/><Poetry onWish={()=>setWish(x=>x+1)} onCart={()=>setCart(x=>x+1)}/><TopicRows/><Translated/><Ebooks/><Textbooks onWish={()=>setWish(x=>x+1)} onCart={()=>setCart(x=>x+1)}/><Bestsellers/><Newsletter/><Footer/></main>; }
