import React, { useEffect, useState } from 'react';
import bookmark from 'assets/images/favorites/bookmark.svg';
import { Link } from 'react-router-dom';
import useTypeSelector from 'hooks/useTypeSelector';
import { Stars } from 'store/types/favorite';

const Favorite = (): JSX.Element => {
  const [count, setCount] = useState<string>('0');

  const { favoritePerson } = useTypeSelector(state => state.favoritePerson);

  useEffect(() => {
    const { length } = Object.keys(favoritePerson as Stars);
    if (length.toString().length > 2) {
      setCount('...');
    } else {
      setCount(length.toString());
    }
  });
  return (
    <>
      <div className="favorite_container">
        <Link to="/favorites">
          <span className="favorite__counter">{count}</span>
          <img className="favorite__icon" src={bookmark} alt="favorite" />
        </Link>
      </div>
    </>
  );
};

export default Favorite;
