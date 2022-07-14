import { Component } from 'react';
import { SearchBar } from 'components';
import { Section } from './App.styled';

export class App extends Component {
  handleSearchChange = ({ search }) => {
    console.log(search);
  };

  render() {
    const { handleSearchChange } = this;

    return (
      <Section>
        <SearchBar onSubmit={handleSearchChange} />
        {/* <ImageGallery />
          <ImageGalleryItem />
          <Loader />
          <Button />
          <Modal /> */}
      </Section>
    );
  }
}
