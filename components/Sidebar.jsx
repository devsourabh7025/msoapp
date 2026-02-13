import SidebarPosts from "./sidebar/SidebarPosts";
import PostAdBlock from "@/components/PostAdBlock";

export default function Sidebar({ location = "post" }) {
  return (
    <aside className="space-y-8 sticky top-8 self-start">
      <SidebarPosts title="You May Like" />
      <PostAdBlock position="sidebar" />
    </aside>
  );
}
