import { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import { SearchBar, ImageGallery } from 'components';
import { Section } from './App.styled';

export class App extends Component {
  state = {
    search: '',
  };

  handleSearchChange = ({ search }) => {
    this.setState({ search: search.trim() });
  };

  render() {
    const { handleSearchChange } = this;
    const { search } = this.state;

    return (
      <>
        <Section>
          <SearchBar onSubmit={handleSearchChange} />
          <ImageGallery query={search} />
          {/* <Modal /> */}
        </Section>
        <ToastContainer autoClose={2500} />
      </>
    );
  }
}
