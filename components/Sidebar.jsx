import SidebarPosts from "./sidebar/SidebarPosts";
import Advertisement from "./sidebar/Advertisement";

export default function Sidebar() {
  return (
    <aside className="space-y-8 sticky top-8 self-start">
      <SidebarPosts title="You May Like" />
      <Advertisement />
    </aside>
  );
}
