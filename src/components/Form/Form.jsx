import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import PropTypes from 'prop-types';
import { ToastContainer, toast } from 'react-toastify';
import { SearchForm, Input, Button } from './Form.styled';

const Form = ({ searchMovies }) => {
  const [query, setQuery] = useState('');

  const [searchParams, setSearchParams] = useSearchParams('');

  const searchQuery = searchParams.get('query');

  useEffect(() => {
    if (searchQuery) {
      setQuery(searchQuery);
    }
    searchQuery && searchMovies(searchQuery);
  }, [searchQuery]);

  const handleInputChange = event => {
    setQuery(event.target.value);
  };

  const handleSubmit = event => {
    event.preventDefault();

    if (query.trim() === '') {
      toast.info('Please enter your query!');
      return;
    }

    setSearchParams({ query });
    searchMovies(query.toLowerCase());
    // setQuery('');
  };

  return (
    <>
      <SearchForm onSubmit={handleSubmit}>
        <Input type="text" name="query" autoFocus value={query} onChange={handleInputChange} />
        <Button type="submit">Search</Button>
      </SearchForm>
      <ToastContainer autoClose={2000} theme="dark" />
    </>
  );
};

Form.propTypes = {
  searchMovies: PropTypes.func.isRequired,
};

export default Form;
