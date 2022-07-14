import { Component } from 'react';
import { searchByName } from 'api/searchImgsApi';
import { ImageGalleryItem } from 'components';
import { Gallery } from './ImageGallery.styled';

export class ImageGallery extends Component {
  state = {
    images: {},
  };

  async componentDidUpdate(prevProps, prevState) {
    if (prevProps.searchQuery !== this.props.searchQuery) {
      const { data } = await searchByName(this.props.searchQuery);
      this.setState({ images: data.hits });
    }
  }

  render() {
    return (
      <Gallery>
        {this.state.images.length > 0 &&
          this.state.images.map(el => {
            console.log(el);
            return (
              <ImageGalleryItem key={el.id} smallImage={el.webformatURL} />
            );
          })}
      </Gallery>
    );
  }
}
