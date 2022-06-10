import React from 'react';
import { shallow, render, mount } from 'enzyme';
import pricesList from './pricesList';

describe('pricesList', () => {
  let props;
  let shallowpricesList;
  let renderedpricesList;
  let mountedpricesList;

  const shallowTestComponent = () => {
    if (!shallowpricesList) {
      shallowpricesList = shallow(<pricesList {...props} />);
    }
    return shallowpricesList;
  };

  const renderTestComponent = () => {
    if (!renderedpricesList) {
      renderedpricesList = render(<pricesList {...props} />);
    }
    return renderedpricesList;
  };

  const mountTestComponent = () => {
    if (!mountedpricesList) {
      mountedpricesList = mount(<pricesList {...props} />);
    }
    return mountedpricesList;
  };  

  beforeEach(() => {
    props = {};
    shallowpricesList = undefined;
    renderedpricesList = undefined;
    mountedpricesList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
