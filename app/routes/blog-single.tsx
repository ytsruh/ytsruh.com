import { useParams } from "react-router";
import PageTitle from "~/components/PageTitle";
import { getPostData } from "~/lib/posts";
import { formatDate } from "~/lib/utils";

export default async function BlogSingle() {
  const { slug } = useParams();
  const postData = await getPostData(slug as string);

  return (
    <section>
      <PageTitle title={postData.title} description={postData.description} />
      <p className="py-5 text-sm text-secondary">Published: {formatDate(postData.date)}</p>
      <article className="prose prose-invert max-w-none">
        <div dangerouslySetInnerHTML={{ __html: postData.content }} />
      </article>
    </section>
  );
}