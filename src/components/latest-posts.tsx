import { formatedDate, getBlogPosts } from "@/app/blog/utils";
import Link from "next/link";

export default function LatestPosts() {
  const latestPosts = getBlogPosts();

  return (
    <div className="w-full h-full px-10 max-[720px]:px-2 flex flex-col items-center">
      {latestPosts
        .sort((a, b) => {
          if (
            new Date(a.metadata.publishedAt) > new Date(b.metadata.publishedAt)
          )
            return -1;
          return 1;
        })
        .map((post) => {
          return (
            <article
              key={post.slug}
              className="group text-wrap max-w-[80%] my-10 border-2 p-4 rounded-xl border-blue-500 cursor-pointer hover:bg-gray-900 transition-all duration-300"
            >
              <Link href={"#"}>
                <h3 className="font-bold text-[30px] font-sans py-2 leading-8  group-hover:italic group-hover:text-blue-500">
                  {post.metadata.title}
                </h3>
              </Link>
              <p className="leading-5 my-5 font-sans text-slate-600 italic">
                {post.metadata.summary}
              </p>
              <div className="flex flex-wrap gap-2 my-4">
                {post.metadata.category.map((category: string) => {
                  return (
                    <p
                      key={category}
                      className="text-md border border-blue-500  p-1 dark:text-white rounded-md font-sans hover:bg-blue-500 group-hover:text-white"
                    >
                      {`#${category}`}
                    </p>
                  );
                })}
              </div>
              <p className="text-sm text-muted-foreground font-sans">
                {formatedDate(post.metadata.publishedAt, true)}
              </p>
            </article>
          );
        })}
    </div>
  );
}
