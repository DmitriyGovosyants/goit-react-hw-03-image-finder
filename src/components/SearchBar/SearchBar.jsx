import { SearchForm } from 'components';
import { SearchContainer } from './SearchBar.styled';

export const SearchBar = ({ onSubmit }) => {
  return (
    <SearchContainer>
      <SearchForm onSubmit={onSubmit} />
    </SearchContainer>
  );
};
