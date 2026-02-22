"use client";

import { useParams } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPostsPage from "@/components/CategoryPostsPage";

export default function PublicPage() {
  const params = useParams();
  const slug = params?.slug;

  if (!slug) {
    return null;
  }

  return (
    <>
      <Navbar />
      <CategoryPostsPage slug={slug} />
      <Footer />
    </>
  );
}
