/**
 * @format
 */

import 'react-native';
import React from 'react';
import { ThemeProvider } from 'styled-components';
import NumPad from './';
import theme from '../theme';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

describe("<Numpad />", () => {
  it('renders correctly', () => {
    renderer.create(
      <ThemeProvider theme={theme}>
        <NumPad currentMode="ADD" onButtonPress={() => {}}/>
      </ThemeProvider>
    );
  });
});
