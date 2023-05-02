// import Loading from "../components/layout/Loading";
import BlogDetailsTitle from "../components/Elements/BlogDetails/BlogDetailsTitle";
import BlogDetailsBlog from "../components/Elements/BlogDetails/BlogDetailsBlog";
import Layout2 from "../components/Layout/Layout2";
import {useRouter} from "next/router";
import {useEffect, useState} from "react";
import {getBlog} from "../services/blog-service";



function BlogDetails() {

    const router = useRouter();
    const { slug } = router.query;
    const [blog, setBlog] = useState(null);

    useEffect(() => {
        async function fetchBlog() {
            const res = await getBlog(slug)
            setBlog(res);
        }
        if (slug) {
            fetchBlog()

        }
    }, [slug]);


    return (
        <>
            <Layout2>
                {/* Main-Body Started */}
                <BlogDetailsTitle blog={blog} />
                <BlogDetailsBlog blog={blog} />
                {/* Main-Body Ended */}
            </Layout2>
        </>
    )
}


export default BlogDetails;