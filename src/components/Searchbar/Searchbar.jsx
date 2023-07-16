import { useState } from 'react';
import { SearchbarStyled } from './Searchbar.styled';
import PropTypes from 'prop-types';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function Serchbar({ onSubmit }) {
  const [query, setQuery] = useState('')

  const handleChange = evt => {
    setQuery(evt.currentTarget.value.toLowerCase());
  };

  const handleSubmit = evt => {
    evt.preventDefault();
    if (query.trim() === '') {
      toast.error('Please input tag for searching images')
      return;
    }
    onSubmit(query);
    setQuery('');
  };

  return (
    <SearchbarStyled>
      <form onSubmit={handleSubmit}>
        <button type="submit">
          <span className="button-label">Search</span>
        </button>

        <input
          name="query"
          type="text"
          autoComplete="off"
          autoFocus
          placeholder="Search images and photos"
          value={query}
          onChange={handleChange}
        />
      </form>
    </SearchbarStyled>
  );
};

Serchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};