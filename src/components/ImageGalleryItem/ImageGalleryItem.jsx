import { GalleryItem, GalleryImage } from './ImageGalleryItem.styled';

export const ImageGalleryItem = ({ smallImage }) => {
  return (
    <GalleryItem>
      <GalleryImage src={smallImage} />
    </GalleryItem>
  );
};
