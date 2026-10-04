import { useState } from "react";
import {useHistory} from "react-router-dom";
import { uploadImage } from './Cloudinary';
import { ref, push } from "firebase/database";
import { db } from "./firebase";


const Create = () => {
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('blossom');
    const [isLoading, setIsLoading] = useState(false);
    const [preview, setPreview] = useState('');
    const [error, setError] = useState('');
    const [file, setFile] = useState(null);
    const history = useHistory();
     

    const handleFile = (e) => {
    const chosen = e.target.files[0];
    if (!chosen) return;
 
    if (!chosen.type.startsWith('image/')) {
      setError('Please choose an image file.');
      return;
    }
    if (chosen.size > 5 * 1024 * 1024) {
      setError('Image must be under 5 MB.');
      return;
    }
 
    setError('');
    setFile(chosen);
    setPreview(URL.createObjectURL(chosen)); // local preview only, nothing uploaded yet
  };
 
  const removeImage = () => {
    setFile(null);
    setPreview('');
  };
 
  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');
 
    try {
      // 1. Upload to Cloudinary (only if an image was picked)
      const image = file ? await uploadImage(file) : '';
 
      // 2. Save the post with just the URL
      await push(ref(db, 'blogs'), { title, body, author, image });
 
      history.push('/');
    } catch (err) {
      setError(err.message);
      setIsLoading(false);
    }
  };

    return ( 
        <div className="create">
            <h2>Add a new Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Blog title:</label>
                <input 
                type="text"
                required 
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                />
                <label>Blog body</label>
                <textarea 
                required
                value={body}
                onChange={(e) => setBody(e.target.value)}
                ></textarea>

                <label>Cover image (optional):</label>
                <input type="file" accept="image/*" onChange={handleFile} />
                {error && <p className="form-error">{error}</p>}
                {preview && (
                <div className="image-preview">
                    <img src={preview} alt="Selected cover preview" />
                    <button type="button" onClick={removeImage}>
                    Remove image
                    </button>
                </div>
                )}


                <label>Blog Author</label>
                <select
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                >
                    <option value="seun">Seun</option>
                    <option value="blossom">Blossom</option>
                </select>
                {!isLoading && <button>Add Blog</button>}
                {isLoading && <button disabled>Adding Blog...</button>}
            </form>
        </div>
     );
}
 
export default Create;