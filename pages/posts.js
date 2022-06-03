import Container from "@/components/Container";
import CardPost from "@/components/CardPost";
import Layout from "@/components/Layout";
import mockPost from "../utils/posts.json";
import { useState } from "react";
import SectionHeader from "@/components/SectionHeader";
import Head from "next/head";

export default function Posts() {
    const [posts, setPosts] = useState(mockPost);

    return (
        <Layout>
            <Head>
            <title>Posts &mdash; Wall</title>
            </Head>
            <Container>
            <SectionHeader >UI Design</SectionHeader>
            {!posts.length ? (
                <div className="text-center py-20">
                    <h2 className="text-6xl">No result 😥</h2>
                    <p className="text-xl mt-4 text-white/60 md:w-6/12 w-full mx-auto">We couldn’t find any posts with the keyword `yahahahayuk`. Please try another keyword.</p>
                </div>
            ) : (
                <div className="flex -mx-4 flex-wrap mt-6">
                {posts.map(post =>(
                    <div key={post.id} className="md:w-4/12 w-full p-4 py-6">
                    <CardPost {...post}/>
                    </div>
                    
                    ))}
                </div> 

            )}
            
            </Container>
        </Layout>
    )
    
}