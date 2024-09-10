import ArticleDetail from "@/components/vulnerability-db/ArticleDetail";
import SimilarInfoPosts from "@/components/vulnerability-db/SimilarInfoPosts";
import { getAllPosts, getPostById, increasePostViews } from "@/lib/api/posts";
import { redirectIfNotLoggedIn } from "@/lib/redirect";
import { VulDBPost } from "@/types/post";

export default async function VulnerabilityDBDetailPage({
  params,
}: {
  params: { id: string };
}) {
  await redirectIfNotLoggedIn("/vuldb/items");

  const postId = params.id;
  const post = (await getPostById(postId)) as VulDBPost;
  const posts = await getAllPosts();

  return (
    <div className="mb-[8.596rem] mt-[2.063rem] flex flex-col items-center gap-[3.75rem] px-[1rem]">
      <ArticleDetail post={post} />
      {/* <VulnerabilityGrid /> */}
      <SimilarInfoPosts posts={posts} postId={postId} />
    </div>
  );
}
