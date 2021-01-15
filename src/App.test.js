import React from 'react';
import App from './App';

import { Header } from './components';
import { Home } from './pages';

import { MemoryRouter } from 'react-router-dom';
import { shallow, mount } from 'enzyme';

describe('rendering components', () => {
  it('renders App component without crashing', () => {
    shallow(<App />);
  });

  it('renders Header component without crashing', () => {
    shallow(<Header />);
  });

  it('rendering Home page component without crashing', () => {
    shallow(<Home />);
  });
});

describe('passing valid paths to router', () => {
  it('passig home path', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <App />
      </MemoryRouter>
    );
    expect(wrapper.find(Home)).toHaveLength(1);
  });
});