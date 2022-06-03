import InfoPost from "@/components/InfoPost";
import Link from "next/link";

export default function FeaturedPost() {
    return (
        <article>
            <div className="flex flex-wrap -mx-4 lg:items-center items-start">
                <div className="px-4 lg:w-8/12 md:w-7/12 w-full">
                    <Link href='/detail'>
                        <img src="/assets/imgPost/Rectangle-4.png" className="rounded-xl w-full mb-4 md:mb-0 cursor-pointer" alt="thumbnail"/>
                    </Link>
                </div>
                <div className="lg:w-4/12 md:w-5/12 w-full px-4">
                    <InfoPost 
                        category="UI DESIGN"
                        date="July 2, 2022"
                        title="Understanding color theory: the color wheel and finding complementary colors"
                        shortDescription="Nulla Lorem mollit cupidatat irure. Laborum magna nulla duis ullamco cillum dolor. Voluptate exercitation incididunt aliquip deserunt reprehenderit elit laborum. "
                        authorName="Waladi Widarno"     
                        authorJob="UI Designer"
                        authorAvatar="/assets/avatar/avatar-1.png"               
                    />
                </div>
            </div>
            <hr className="border-white/10 mt-10 md:hidden"/>
        </article>
    )
}