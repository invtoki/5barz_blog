import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";

const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('http://localhost:8000/blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        fetch('http://localhost:8000/blogs/' + blog.id, {
            method: 'DELETE'
        }) .then(() => {
            history.push('/');
        })
    }

    return ( 
        <div className="blog-details">
            { isLoading && <div> loading.. </div> }
            { error && <div>{error}</div> }
            { blog && (
                <article>
                    <h2>{ blog.title }</h2>
                    <p>Written by { blog.author }</p>
                    { blog.image && (
                        <img
                            className="blog-cover"
                            src={ blog.image }
                            alt={ blog.title }
                        />
                    ) }
                    <div>{ blog.body }</div>
                    <button onClick={handleClick}>delete</button>
                </article>
            )}
        </div>
     );
}
 
export default BlogDetails;