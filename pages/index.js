import { useState } from "react"; 
import FeaturedPost from "@/components/FeaturedPost";
import CardPost from "@/components/CardPost";
import Container from "@/components/Container";
import Layout from "@/components/Layout";
import mockPost from "../utils/posts.json"
import Head from "next/head";

export default function Home() {
  const [posts, setPosts] = useState(mockPost);

  return (
      <Layout >
        <Head>
          <title>Home &mdash; Wall</title>
        </Head>
        <Container>
          <FeaturedPost />
          <div className="flex -mx-4 flex-wrap mt-6">
            {posts.map(post =>(
                <div key={post.id} className="md:w-4/12 w-full p-4 py-6">
                  <CardPost {...post}/>
                </div>
            ))}
          </div> 
        </Container>
      </Layout>
      

  )
}
