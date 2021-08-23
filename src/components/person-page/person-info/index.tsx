import React from 'react';
import { Res } from 'types/person-list';

type PersonInfoPageProps = {
  personInfo: Res[];
};

const PersonInfoComponent = ({ personInfo }: PersonInfoPageProps): JSX.Element => {
  return (
    <div className="person__container_info">
      <ul className="person__info__list">
        {personInfo.map(({ title, data }) => {
          return (
            data && (
              <li className="person__info__list__item" key={title}>
                <span className="person__info__list__item_title">
                  {title}: {data}{' '}
                </span>
              </li>
            )
          );
        })}
      </ul>
    </div>
  );
};

export default PersonInfoComponent;
