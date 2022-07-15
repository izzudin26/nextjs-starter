import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Link from "next/link";

export default function Home({ posts }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>NextJS Starter Blog</title>
        <meta name="description" content="This Website Building with nextJS" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>
          Welcome to <a href="https://nextjs.org">Next.js!</a>{" "}
          <span className="text-blue-600">Starter Blog</span>
        </h1>
        <div className="mt-5 flex flex-col space-y-2 w-full md:w-1/2 mx-auto">
          {posts.map((post, i) => (
            <Link href={`/post/${post.id}`} key={i}>
              <div
                className="p-3 cursor-pointer flex flex-col space-y-1 text-start duration-500 ring-1 ring-gray-400 hover:ring-2 hover:ring-blue-500 rounded"
              >
                <h1 className="font-semibold text-lg">{post.title}</h1>
                <p>{post.body}</p>
              </div>
            </Link>
          ))}
        </div>
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
          </span>
        </a>
      </footer>
    </div>
  );
}

export async function getStaticProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const posts = await res.json();
  return {
    props: { posts },
  };
}
