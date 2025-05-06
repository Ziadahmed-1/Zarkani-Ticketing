import React, { useRef } from "react";
import { Button, Avatar, Box, Stack } from "@mui/material";
import { LuUpload } from "react-icons/lu";

const MAX_IMAGES = 3;

const ImageUploader = ({ images, setImages, previews, setPreviews }) => {
  const inputRef = useRef(null);

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    const total = images.length + files.length;

    if (total > MAX_IMAGES) {
      alert(`You can only upload up to ${MAX_IMAGES} images.`);
      return;
    }

    setImages((prev) => [...prev, ...files]);

    const newPreviews = files.map((file) => URL.createObjectURL(file));
    setPreviews((prev) => [...prev, ...newPreviews]);
  };

  const handleClick = () => {
    if (images.length < MAX_IMAGES) {
      inputRef.current?.click();
    }
  };

  return (
    <Box display="flex" flexDirection="column" gap={0.5}>
      {/* Hidden File Input */}
      <input
        ref={inputRef}
        accept="image/*"
        multiple
        type="file"
        style={{ display: "none" }}
        onChange={handleImageChange}
        disabled={images.length >= MAX_IMAGES}
      />

      {/* Custom Upload Box Button */}
      <button
        className="upload-box"
        type="button"
        onClick={handleClick}
        disabled={images.length >= MAX_IMAGES}
      >
        <LuUpload size={20} />
        <span>Upload up to {MAX_IMAGES} images</span>
        <span>Click to browse files</span>
      </button>

      {/* Optional MUI Button (Can remove if using only the custom one) */}
      {/* <Button
        variant="contained"
        onClick={handleClick}
        disabled={images.length >= MAX_IMAGES}
      >
        Upload Images
      </Button> */}

      {/* Preview Thumbnails */}
      <Stack direction="row" spacing={2}>
        {previews.map((src, index) => (
          <Avatar
            key={index}
            src={src}
            alt={`preview-${index}`}
            sx={{ width: 60, height: 60, borderRadius: "10px" }}
          />
        ))}
      </Stack>
    </Box>
  );
};

export default ImageUploader;
