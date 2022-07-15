import Head from "next/head";

export default function Post({ post }) {
  return (
    <>
      <Head>
        <title>{post.id}</title>
        <meta name="description" content={post.body} />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className=" mx-auto w-full md:w-1/2 lg:w-1/4 p-3 min-h-screen items-center justify-center flex flex-col space-y-2">
        <h1 className="font-bold">{post.title}</h1>
        <p>{post.body}</p>
      </main>
    </>
  );
}

export async function getServerSideProps(context) {
  const { id } = context.params;
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  const post = await res.json();
  return {
    props: {
      post,
    },
  };
}
