import PersonInfoComponent from 'components/person-page/person-info';
import PersonPhotoComponent from 'components/person-page/person-photo';
import { API_PERSON } from 'constants/api';
import React, { useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getPeopleImages } from 'services/getPeopleData';
import { MatchProps, PersonInfoApi, Res } from 'types/person-list';
import getApiResource from 'utils/network';

const PersonPage = (): JSX.Element => {
  const [errorApi, setErrorApi] = useState(false);
  const [personInfo, setPersonInfo] = useState<Res[] | null>(null);
  const [personName, setPersonName] = useState<string>('');
  const [personPhoto, setPersonPhoto] = useState<string>('');

  const match = useRouteMatch<MatchProps>();

  useEffect(() => {
    (async () => {
      const { id } = match.params;
      const res = await getApiResource(`${API_PERSON}/${id}/`);
      if (res) {
        setPersonInfo([
          { title: 'Height', data: (res as PersonInfoApi).height },
          { title: 'Mass', data: (res as PersonInfoApi).mass },
          { title: 'Skin Color', data: (res as PersonInfoApi).skin_color },
          { title: 'Hair Color', data: (res as PersonInfoApi).hair_color },
          { title: 'Eye Color', data: (res as PersonInfoApi).eye_color },
          { title: 'Birth Year', data: (res as PersonInfoApi).birth_year },
          { title: 'Gender', data: (res as PersonInfoApi).gender },
        ]);
        setPersonName((res as PersonInfoApi).name);
        setPersonPhoto(getPeopleImages(id));

        setErrorApi(false);
      } else {
        setErrorApi(true);
      }
    })();
  }, []);

  return (
    <>
      <div className="person__wrapper">
        <span className="person__name">{personName}</span>
        <div className="person__container">
          <PersonPhotoComponent personPhoto={personPhoto} personName={personName} />
          {personInfo && <PersonInfoComponent personInfo={personInfo} />}
        </div>
      </div>
    </>
  );
};

export default PersonPage;
