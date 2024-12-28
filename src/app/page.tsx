import Header from "@/components/header";
import LatestPosts from "@/components/latest-posts";

export default function Home() {
  return (
    <div className="w-[100vw] h-[100vh] text-foreground p-0 m-0">
      <Header />
      <LatestPosts />
    </div>
  );
}
