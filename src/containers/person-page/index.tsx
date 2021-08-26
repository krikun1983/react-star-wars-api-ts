import PersonInfoComponent from 'components/person-page/person-info';
import PersonLinkBack from 'components/person-page/person-link-back';
import PersonPhotoComponent from 'components/person-page/person-photo';
import UiLoading from 'components/UI/UILoading';
import { API_PERSON } from 'constants/api';
import React, { Suspense, useEffect, useState } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { getPeopleImages } from 'services/getPeopleData';
import { MatchProps, PersonInfoApi, Res } from 'types/person-list';
import getApiResource from 'utils/network';

const PersonFilmsComponent = React.lazy(() => import('components/person-page/person-films'));

const PersonPage = (): JSX.Element => {
  const [errorApi, setErrorApi] = useState(false);
  const [personInfo, setPersonInfo] = useState<Res[] | null>(null);
  const [personName, setPersonName] = useState<string>('');
  const [personPhoto, setPersonPhoto] = useState<string>('');
  const [personFilms, setPersonFilms] = useState<string[]>([]);

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
        setPersonFilms((res as PersonInfoApi).films);
      } else {
        setErrorApi(!errorApi);
      }
    })();
  }, []);

  return (
    <>
      <PersonLinkBack />
      <div className="person__wrapper">
        <span className="person__name">{personName}</span>
        <div className="person__container">
          <PersonPhotoComponent personPhoto={personPhoto} personName={personName} />
          {personInfo && <PersonInfoComponent personInfo={personInfo} />}
          {personFilms && (
            <Suspense fallback={<UiLoading theme="blue" isShadow />}>
              <PersonFilmsComponent personFilms={personFilms} />
            </Suspense>
          )}
        </div>
      </div>
    </>
  );
};

export default PersonPage;
