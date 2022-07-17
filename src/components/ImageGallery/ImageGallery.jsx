import { Component } from 'react';

import { searchByName } from 'api/searchImgsApi';
import { ImageGalleryItem, Button, Loader } from 'components';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: [],
    page: 1,
    isLoading: false,
    isVisibleLoadMore: false,
  };

  componentDidUpdate(prevProps, prevState) {
    const { query } = this.props;
    const { page } = this.state;
    const { handlePhotosAdd } = this;

    if (prevProps.query !== query && page !== 1) {
      return this.setState({ images: [], page: 1 });
    }

    if (prevProps.query !== query && page === 1) {
      this.setState({ images: [] });
    }

    if (prevProps.query !== query || prevState.page !== page) {
      handlePhotosAdd(query, page);
    }
  }

  handlePhotosAdd = async (query, page) => {
    this.setState({ isLoading: true });

    try {
      const data = await searchByName(query, page);

      const perPage = data.config.params.per_page;
      const totalPages = data.data.totalHits;
      const isVisibleLoadMore = page < Math.ceil(totalPages / perPage);

      const { hits } = data.data;

      this.setState(prev => ({
        images: [...prev.images, ...hits],
        isVisibleLoadMore,
      }));
    } catch {
    } finally {
      this.setState({ isLoading: false });
    }
  };

  handleLoadMorePhotos = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  render() {
    const { isLoading, isVisibleLoadMore } = this.state;
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
        {isLoading && <Loader />}
        {isVisibleLoadMore && (
          <Button type="button" onClick={handleLoadMorePhotos}>
            Load more
          </Button>
        )}
      </>
    );
  }
}
