import { BsSearch } from 'react-icons/bs';
import { Formik } from 'formik';
import { FormikForm, Btn, Input } from './SearchForm.styled';

export const SearchForm = ({ onSubmit }) => {
  const handleSubmit = (values, { resetForm }) => {
    onSubmit(values);
    resetForm();
  };

  return (
    <Formik initialValues={{ search: '' }} onSubmit={handleSubmit}>
      <FormikForm>
        <Btn type="submit" aria-label="search">
          <BsSearch size={22} />
        </Btn>
        <Input
          name="search"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
        />
      </FormikForm>
    </Formik>
  );
};
