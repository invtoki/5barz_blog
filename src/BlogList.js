import { Link } from 'react-router-dom';
import {thumbUrl} from './Cloudinary';

const BlogList = ({blogs, title}) => {
    
    return ( 
        <div className="blog-list">
            <h2>{title}</h2>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/blogs/${blog.id}`} className="blog-preview-link">
                        {blog.image ? (
                        <img className="blog-thumb" src={thumbUrl(blog.image)} alt="" loading="lazy" />
                        ) : (
                        <div className="blog-thumb blog-thumb-empty" aria-hidden="true">
                            {blog.title.charAt(0).toUpperCase()}
                        </div>
                        )}
                        <div className="blog-preview-text">

                        <h2>{blog.title}</h2>
                        <p>Written by {blog.author}</p>
                        
                        </div>
                    </Link>
                    
                </div>
            ))}
        </div>
     );
}
 
export default BlogList;