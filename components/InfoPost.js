import PostMetaTitle from "@/components/PostMetaTitle";
import PostAuthor from "@/components/PostAuthor";

export default function InfoPost({
    category,
    date,
    title,
    shortDescription,
    authorAvatar,
    authorName,
    authorJob
}) {
    return (
        <>
            <PostMetaTitle 
                category={category} 
                date={date}
                title={title}
                
            />
            <PostAuthor 
                shortDescription={shortDescription} 
                authorAvatar={authorAvatar}
                authorName={authorName}
                authorJob={authorJob}
            />
        </>
    )
}