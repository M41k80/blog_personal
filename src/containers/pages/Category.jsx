import Footer from "components/navigation/Footer"
import Navbar from "components/navigation/Navbar"
import Layout from "hocs/layouts/Layout"
import { useEffect } from "react"
import { Helmet } from 'react-helmet-async';
import { get_categories } from "../../redux/actions/categories/categories";
import { connect } from "react-redux";
import { get_blog_list_category, get_blog_list_category_page } from "../../redux/actions/blog/blog";
import CategoriesHeader from "components/blog/CategoriesHeader";
import { useParams } from "react-router-dom";
import BlogList from "components/blog/BlogList";

function Category({
    get_categories,
    categories,
    get_blog_list_category,
    get_blog_list_category_page,
    posts,
    count,
    next,
    previous,
}){

    const params = useParams()
    const slug = params.slug

    useEffect(()=>{
        window.scrollTo(0,0)
        get_categories()
        get_blog_list_category(slug)
    },[])


    return(
        <Layout>
           <Helmet>
      <title>M41k80 | Blog</title>
      <meta name="description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="keywords" content='agencia de software, software agency, web development, creacion de pagina web' />
      <meta name="robots" content="all" />
      <link rel="canonical" href="" />
      <meta name="author" content="M41k80" />
      <meta name='publisher' content='M41k80' />

       {/* social media tags */}
      <meta property="og:title" content="M41k80 | Software Agency" />
      <meta property="og:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta property="og:url" content="" />
      <meta property="og:site_name" content="M41k80 | Software Agency" />
      <meta property="og:image" content="" />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:site" content="@m41k80" />
      <meta name="twitter:creator" content="@m41k80" />
      <meta name="twitter:title" content="M41k80 | Software Agency" />
      <meta name="twitter:description" content="M41k80 is a software agency that provides services to businesses in the software industry. We offer a wide range of services including web development, app development, digital marketing, and more." />
      <meta name="twitter:image" content="" />
      <meta name="twitter:url" content="" />
    </Helmet>
            <Navbar/>
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                {/* We've used 3xl here, but feel free to try other max-widths based on your needs */}
                <div className="mx-auto max-w-6xl my-10">
                    {/* Content goes here */}
                    <BlogList posts={posts&&posts} get_blog_list_page={get_blog_list_category_page} count={count&&count}/>
                    </div>
                </div>
            </div>
                <Footer/>
        </Layout>
    )
}
const mapStateToProps=state=>({
    categories: state.categories.categories,
    posts: state.blog.blog_list_category,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous,

})

export default connect(mapStateToProps,{
    get_categories,
    get_blog_list_category,
    get_blog_list_category_page
}) (Category)