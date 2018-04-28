import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import shallow from 'shallow';
import { configure } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
})

describe('<App />', () => {
  const app = shallow(<App />)

  it('wraps everything in a div tag', () => {
    expect(app).toHaveTagName('div')
    expect(app).toHaveClassName('App')
  })

  it('contains a title', () => {
    expect(app.find('h1.title')).toHaveText('New Age Pizza')
  })
})