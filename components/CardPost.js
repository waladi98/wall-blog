import InfoPost from "@/components/InfoPost";
import Link from "next/link";

export default function CardPost( {thumbnail, ...infoPost}) {
    return (
        <article>
            <Link href='/detail'>
                <img src={thumbnail}className="w-full rounded mb-4 cursor-pointer" alt="thumbnail"/>
            </Link>
            
            <InfoPost 
                { ...infoPost}
            />
        </article>
    )
}