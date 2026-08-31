import { createFileRoute } from "@tanstack/react-router";
import { BookstoreHome } from "@/components/bookstore-home";

export const Route = createFileRoute("/")({
  head: () => ({ meta: [
    { title: "Folio — Discover Remarkable Books" },
    { name: "description", content: "Discover curated books, timeless authors, new releases and stories selected for curious minds." },
    { property: "og:title", content: "Folio — Discover Remarkable Books" },
    { property: "og:description", content: "A modern editorial bookstore for remarkable books and timeless voices." },
    { property: "og:type", content: "website" },
    { name: "twitter:card", content: "summary_large_image" },
  ]}),
  component: BookstoreHome,
});
