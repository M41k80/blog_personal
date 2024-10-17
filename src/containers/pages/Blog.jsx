import Layout from "hocs/layouts/Layout";
import Navbar from "components/navigation/Navbar";
import Footer from "components/navigation/Footer";
import { useEffect } from "react";
import {Helmet} from "react-helmet-async";
import { get_categories } from '../../redux/actions/categories/categories';
import { connect } from "react-redux";
import { get_blog_list, get_blog_list_page } from '../../redux/actions/blog/blog';
import CategoriesHeader from "components/blog/CategoriesHeader";




function Blog({
    get_categories,
    categories,
    get_blog_list,
    get_blog_list_page,
    posts,
    count,
    next,
    previous,
}){
    useEffect(() => {
        window.scrollTo(0, 0)
        get_categories()
        get_blog_list()

    },[])


    return (
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
            <Navbar />
            <div className="pt-24">
                <CategoriesHeader categories={categories&&categories}/>
            
           
                
            </div>
            <Footer />
        </Layout>
    )
}
const mapStateToProps = state => ({
    categories: state.categories.categories,
    posts: state.blog.blog_list,
    count: state.blog.count,
    next: state.blog.next,
    previous: state.blog.previous
})
export default connect(mapStateToProps, {
    get_categories,
    get_blog_list,
    get_blog_list_page,

})(Blog);