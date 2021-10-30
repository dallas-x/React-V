import { React, useState } from 'react';

const SearchParams = () => {
  const [make, setMake] = useState('Tesla');

  return (
    <div className="search-params">
      <form>
        <label htmlFor="make">
          Make
          <input
            id="make"
            value={make}
            onChange={(e) => setMake(e.target.value)}
            placeholder="Ford, Chevrolet, Tesla"
          />
        </label>
        <button>Search</button>
      </form>
    </div>
  );
};

export default SearchParams;
