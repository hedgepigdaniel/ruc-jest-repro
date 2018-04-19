// setup file
import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-15';

configure({ adapter: new Adapter() });


import React from 'react';
import { shallow } from 'enzyme';

import TestLoadableComponent from './testloadable.jsx';


describe('<TestLoadableComponent />', () => {
  it('renders', () => {
    const r = shallow(
      <TestLoadableComponent />
    );
    expect({
      nodes: r.getElements(),
      state: r.state(),
    }).toMatchSnapshot();
  });
});
