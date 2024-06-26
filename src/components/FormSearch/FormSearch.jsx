import { useState } from 'react';
import { Button, Form, Input } from './FormSearch.styled';

export const FormSearch = ({ setSearchParams }) => {
  const [query, setQuery] = useState('');

  const handleSubmit = e => {
    e.preventDefault();

    setSearchParams({ query });
  };

  const handleSearchParams = ({ target: { value } }) => {
    setQuery(value);
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Search movies"
        autoFocus
        value={query}
        onChange={handleSearchParams}
      />
      <Button type="submit" disabled={!query}>
        Search
      </Button>
    </Form>
  );
};
