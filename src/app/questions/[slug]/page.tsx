import axios from "../../../../node_modules/axios/index";

export async function generateStaticParams() {
  const posts = await axios.get(
    "https://opentdb.com/api.php?amount=10&category=18&difficulty=medium"
  );
  return posts.data.results.map((post: any, index: any) => ({
    slug: index.toString(),
  }));
}

export default function Page({ params }: { params: { slug: string } }) {
  console.log(params.slug);
  return <h1>My Page</h1>;
}
