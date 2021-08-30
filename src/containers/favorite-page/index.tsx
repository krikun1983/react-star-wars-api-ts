import useTypeSelector from 'hooks/useTypeSelector';
import React from 'react';

const FavoritePage = (): JSX.Element => {
  const { favoritePerson } = useTypeSelector(state => state.favoritePerson);

  return (
    <>
      <div>Hello FavoritePage component</div>
    </>
  );
};

export default FavoritePage;
