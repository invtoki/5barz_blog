const CLOUD_NAME = process.env.REACT_APP_CLOUDINARY_CLOUD_NAME;
const UPLOAD_PRESET = process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET;

// Uploads an image file to Cloudinary and returns its secure URL.
export async function uploadImage(file) {
  const data = new FormData();
  data.append('file', file);
  data.append('upload_preset', UPLOAD_PRESET);

  const res = await fetch(
    `https://api.cloudinary.com/v1_1/${CLOUD_NAME}/image/upload`,
    { method: 'POST', body: data }
  );

  if (!res.ok) {
    const err = await res.json().catch(() => ({}));
    throw new Error(err.error?.message || 'Image upload failed');
  }

  const json = await res.json();
  return json.secure_url;
}

// Builds a small, cropped, auto-optimised thumbnail URL from a stored URL.
// Cloudinary resizes on the fly, so you only store the original URL.
export function thumbUrl(url, width = 220, height = 160) {
  if (!url || !url.includes('/upload/')) return url;
  return url.replace(
    '/upload/',
    `/upload/c_fill,w_${width},h_${height},q_auto,f_auto/`
  );
}