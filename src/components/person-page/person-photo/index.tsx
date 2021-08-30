import React, { Dispatch, SetStateAction } from 'react';
import { useDispatch } from 'react-redux';
import { removePersonToFavorite, setPersonToFavorite } from 'store/actions';
import iconFavorite from 'assets/images/favorites/favorite.svg';
import iconFavoriteFill from 'assets/images/favorites/favorite-fill.svg';

type PersonPhotoPageProps = {
  personPhoto: string;
  personName: string;
  personId: string;
  personFavorite: boolean;
  setPersonFavorite: Dispatch<SetStateAction<boolean>>;
};

const PersonPhotoComponent = ({
  personPhoto,
  personName,
  personId,
  personFavorite,
  setPersonFavorite,
}: PersonPhotoPageProps): JSX.Element => {
  const dispatch = useDispatch();

  const dispatchFavoritePeople = () => {
    if (personFavorite) {
      dispatch(removePersonToFavorite(personId));
      setPersonFavorite(false);
    } else {
      dispatch(setPersonToFavorite({ [personId]: { name: personName, img: personPhoto } }));
      setPersonFavorite(true);
    }
  };

  return (
    <>
      <div className="person__container_photo">
        <img className="person__photo" src={personPhoto} alt={personName} />
        <img
          src={personFavorite ? iconFavoriteFill : iconFavorite}
          className="person__favorite"
          alt="Add to favorite"
          onClick={dispatchFavoritePeople}
          role="presentation"
        />
      </div>
    </>
  );
};

export default PersonPhotoComponent;
