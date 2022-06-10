import React from 'react';
import { shallow, render, mount } from 'enzyme';
import purchaseList from './purchaseList';

describe('purchaseList', () => {
  let props;
  let shallowpurchaseList;
  let renderedpurchaseList;
  let mountedpurchaseList;

  const shallowTestComponent = () => {
    if (!shallowpurchaseList) {
      shallowpurchaseList = shallow(<purchaseList {...props} />);
    }
    return shallowpurchaseList;
  };

  const renderTestComponent = () => {
    if (!renderedpurchaseList) {
      renderedpurchaseList = render(<purchaseList {...props} />);
    }
    return renderedpurchaseList;
  };

  const mountTestComponent = () => {
    if (!mountedpurchaseList) {
      mountedpurchaseList = mount(<purchaseList {...props} />);
    }
    return mountedpurchaseList;
  };  

  beforeEach(() => {
    props = {};
    shallowpurchaseList = undefined;
    renderedpurchaseList = undefined;
    mountedpurchaseList = undefined;
  });

  // Shallow / unit tests begin here
 
  // Render / mount / integration tests begin here
  
});
