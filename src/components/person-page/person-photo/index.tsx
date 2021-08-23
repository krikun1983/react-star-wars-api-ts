import React from 'react';

type PersonPhotoPageProps = {
  personPhoto: string;
  personName: string;
};

const PersonPhotoComponent = ({ personPhoto, personName }: PersonPhotoPageProps): JSX.Element => {
  return (
    <div className="person__container_photo">
      <img className="person__photo" src={personPhoto} alt={personName} />
    </div>
  );
};

export default PersonPhotoComponent;
