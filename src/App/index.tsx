/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/emin93/react-native-template-typescript
 *
 * @format
 */

import React, {Component} from 'react';
import AppWrapper from '../AppWrapper';
import {SafeAreaView, StatusBar} from 'react-native';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Label } from '../Typography';
import Tally from '../Tally';
import NumPad from '../NumPad';

interface ILineItem {
  key: string,
  payee: string,
  action: string,
  value: number,
}

interface IProps {}
interface IState {
  billTotal: number,
  activePayee: string,
  payees: string[],
  lineItems: ILineItem[];
}

export default class App extends Component<IProps, IState> {
  state = {
    billTotal: 100,
    activePayee: 'A',
    payees: ['A', 'B', 'C'],
    lineItems: [],
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
        <SafeAreaView style={{flex: 0, backgroundColor: theme.namedColors.bgColorFrame}} />
        <AppWrapper>
          <StatusBar backgroundColor={theme.namedColors.bgColorFrame} barStyle="light-content" />
          <Tally />
          <NumPad currentMode="ADD"/>
        </AppWrapper>
        </>
      </ThemeProvider>
    );
  }
}


