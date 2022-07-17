import { Component } from 'react';
import { searchByName } from 'api/searchImgsApi';
import { ImageGalleryItem, Button } from 'components';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page, images } = this.state;
    const { handlePhotosAdd } = this;

    if (prevProps.query !== query && images.length > 0) {
      return this.setState({ images: [], page: 1 });
    }

    if (prevProps.query !== query || prevState.page !== page) {
      handlePhotosAdd(query, page);
    }
  }

  handlePhotosAdd = async (query, page) => {
    const data = await searchByName(query, page);
    console.log(data.data);
    const { hits } = data.data;

    this.setState(prev => ({
      images: [...prev.images, ...hits],
    }));
  };

  handleLoadMorePhotos = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { images } = this.state;
    const { handleLoadMorePhotos } = this;

    return (
      <>
        <Gallery>
          {this.state.images.length > 0 &&
            this.state.images.map(el => {
              return (
                <ImageGalleryItem key={el.id} smallImage={el.webformatURL} />
              );
            })}
        </Gallery>
        {/* <Loader /> */}
        {images.length > 0 && (
          <Button type="button" onClick={handleLoadMorePhotos}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
