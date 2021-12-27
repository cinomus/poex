import React, { Component, FC, useEffect, useState } from 'react';
import { ICountry } from '../../../shared/types/types';
import ListBox from './listBox';

type SelectBoxProps = {};
type SelectBoxState = {
  selectedCountry: ICountry;
  selectBoxOpen: boolean;
  countries: ICountry[];
};

class SelectBox extends Component<SelectBoxProps, SelectBoxState> {
  constructor(props: SelectBoxProps) {
    super(props);
    this.state = {
      selectedCountry: { lang: null, countryName: null },
      selectBoxOpen: false,
      countries: [
        { lang: 'ru-RU', countryName: 'Russia' },
        { lang: 'en-US', countryName: 'United States' },
      ],
    };
    this.handlerFocusSelectbox = this.handlerFocusSelectbox.bind(this);
    this.changeSelectedCountry = this.changeSelectedCountry.bind(this);
    this.handlerBlurSelectbox = this.handlerBlurSelectbox.bind(this);
  }

  componentDidMount() {
    console.log(navigator);
    const defaultCountryArr = this.state.countries.filter(
      (country: ICountry) => {
        if (country.lang === navigator.language) return country;
      },
    );

    this.setState(({}) => ({
      selectedCountry: defaultCountryArr[0],
    }));
    //
  }

  changeSelectedCountry(country: ICountry) {
    console.log(country);
    this.setState(({}) => ({
      selectedCountry: country,
      selectBoxOpen: false,
    }));
  }

  handlerFocusSelectbox(e) {
    console.log('hui');
    this.setState(({ selectBoxOpen }) => ({
      selectBoxOpen: !selectBoxOpen,
    }));
    // this.setState(({ selectBoxOpen }) => ({
    //   selectBoxOpen: !selectBoxOpen,
    // }));
  }
  handlerBlurSelectbox(e) {
    console.log('hui');
    if (this.state.selectBoxOpen !== false) {
      this.setState(({ selectBoxOpen }) => ({
        selectBoxOpen: !selectBoxOpen,
      }));
    }
    // this.setState(({ selectBoxOpen }) => ({
    //   selectBoxOpen: !selectBoxOpen,
    // }));
  }
  render() {
    return (
      <div
        data-v-d4cf6a2a=""
        data-v-70c03fa5=""
        className="mb24 field-wrap input-undefined"
        data-v-75842485=""
      >
        <div data-v-d4cf6a2a="">
          <label data-v-d4cf6a2a="" className="mb8">
            Выберите вашу страну
          </label>
        </div>
        <div
          onFocus={this.handlerFocusSelectbox}
          onBlur={this.handlerBlurSelectbox}
          tabIndex={0}
          data-v-5760e22c=""
          data-v-70c03fa5=""
          className={this.state.selectBoxOpen ? 'selectbox open' : 'selectbox'}
          data-v-d4cf6a2a=""
        >
          <div data-v-5760e22c="" aria-haspopup="true" className="field">
            <div data-v-5760e22c="" className="arrows">
              <i data-v-5760e22c="" className="fa fa-caret-up" />
              <i data-v-5760e22c="" className="fa fa-caret-down" />
            </div>
            {this.state?.selectedCountry?.countryName}
          </div>
          <ListBox
            countries={this.state.countries}
            selectedCountry={this.state.selectedCountry}
            changeSelectedCountry={this.changeSelectedCountry}
          />
        </div>
      </div>
    );
  }
}

// const SelectBox: FC = () => {
//   const [selectBox, setSelectBox] = useState<boolean>(false);
//
//   function handlerClickSelectbox(e) {
//     setSelectBox(!selectBox);
//   }
//   useEffect(() => {
//     console.log('effect');
//   });
//
// };

export default SelectBox;
