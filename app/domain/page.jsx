"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import CategoryPostsPage from "@/components/CategoryPostsPage";

/**
 * Domain page shows posts from the category assigned to the page with slug "domain".
 * Configure in Admin → Pages: create/edit a page with slug "domain" and assign a category.
 * No Customise → Domain needed.
 */
export default function DomainPage() {
  return (
    <>
      <Navbar />
      <CategoryPostsPage slug="domain" fallbackTitle="Domain" />
      <Footer />
    </>
  );
}
