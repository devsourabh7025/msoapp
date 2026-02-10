import Image from "next/image";
import Link from "next/link";
import { Clock } from "lucide-react";

const posts = [
  {
    title: "Top Reasons Why Microsoft Discontinued Windows Phone",
    image: "/demo.png",
    date: "March 05, 2020",
  },
  {
    title: "Check out some security tips to protect your data",
    image: "/demo.png",
    date: "March 04, 2020",
  },
  {
    title: "Improve the performance of your smartphone battery",
    image: "/demo.png",
    date: "March 03, 2020",
  },
];

export default function SidebarPosts({ title }) {
  return (
    <div className="bg-white/80 dark:bg-gray-900/80 backdrop-blur-xl border border-gray-200/50 dark:border-gray-700/50 rounded-2xl shadow-lg shadow-gray-200/50 dark:shadow-gray-900/50 overflow-hidden transition-all duration-300 hover:shadow-xl hover:shadow-gray-300/50 dark:hover:shadow-gray-800/50">
      <div className="bg-gradient-to-r from-blue-600 to-purple-600 px-6 py-4">
        <h4 className="font-bold text-sm text-white uppercase tracking-wider">
          {title}
        </h4>
      </div>

      <div className="p-5 space-y-5">
        {posts.map((post, i) => (
          <Link 
            key={i} 
            href="/post" 
            className="flex gap-4 group transition-all duration-300 hover:scale-[1.02]"
          >
            <div className="relative flex-shrink-0 w-20 h-20 rounded-xl overflow-hidden ring-2 ring-gray-100 dark:ring-gray-800 group-hover:ring-blue-400 dark:group-hover:ring-blue-500 transition-all duration-300">
              <Image
                src={post.image}
                alt={post.title}
                width={80}
                height={80}
                className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-500"
              />
            </div>
            <div className="flex-1 min-w-0">
              <p className="text-sm font-semibold leading-snug text-gray-900 dark:text-gray-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors duration-300 line-clamp-2">
                {post.title}
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1.5 mt-2">
                <Clock size={12} className="opacity-70" /> 
                <span>{post.date}</span>
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
