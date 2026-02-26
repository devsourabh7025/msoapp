import SidebarPosts from "./sidebar/SidebarPosts";
import PostAdBlock from "@/components/PostAdBlock";

export default function Sidebar({ location = "post" }) {
  return (
    <aside className="space-y-6 sticky top-8 self-start">
      <SidebarPosts title="Trending" />
      <PostAdBlock position="sidebar" />
    </aside>
  );
}
