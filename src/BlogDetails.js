import useFetch from "./useFetch";
import { useHistory, useParams } from "react-router-dom";
import { ref, remove } from "firebase/database";
import { db } from "./firebase";


const BlogDetails = () => {
    const { id } = useParams();
    const { data: blog, error, isLoading } = useFetch('blogs/' + id);
    const history = useHistory();

    const handleClick = () => {
        remove(ref(db, 'blogs/' + blog.id));
        history.push('/');
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