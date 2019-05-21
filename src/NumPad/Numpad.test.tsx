import 'react-native';
import React from 'react';
import * as Sinon from 'sinon';
import { ThemeProvider } from 'styled-components';
import NumPad, { Pad, INumpadProps } from './';
import theme from '../theme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

const defaultProps: INumpadProps = {
  currentMode: 'ADD',
  onModeChange: Sinon.spy(),
  onButtonPress: Sinon.spy(),
  onCancel: Sinon.spy(),
  onEnter: Sinon.spy(),
}

// Raised the issue with these tests here...
// https://spectrum.chat/styled-components/help/strange-error-with-jest-react-native-and-themes~560a447b-aabc-4fa6-ab39-ed8fdacd4d77
describe("<Pad />", () => {
  it('renders correctly', () => {
    renderer.create(
      <Pad />
    );
  });
});

describe("<Numpad />", () => {
  it('renders correctly', () => {
    console.log(theme);
    const subject = renderer.create(
      <NumPad {...defaultProps} />
    );
  });
});
