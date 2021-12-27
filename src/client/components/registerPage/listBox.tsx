import React, { FC, useState } from 'react';
import { Simulate } from 'react-dom/test-utils';
import { ICountry } from '../../../shared/types/types';

type Props = {
  countries: ICountry[];
  selectedCountry: ICountry;
  changeSelectedCountry: (c: ICountry) => void;
};

const ListBox: FC<Props> = ({
  countries,
  selectedCountry,
  changeSelectedCountry,
}) => {
  return (
    <div data-v-5760e22c="" className="dropdown flex flex--no-wrap">
      <div data-v-5760e22c="" role="listbox" className="options">
        {countries.map((country, key) => {
          return (
            <div
              data-v-5760e22c=""
              role="option"
              className={
                selectedCountry.countryName === country.countryName
                  ? 'option selected'
                  : 'option'
              }
              onClick={() => changeSelectedCountry(country)}
              key={key}
            >
              {country.countryName}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default ListBox;
