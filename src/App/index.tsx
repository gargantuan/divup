import React, {Component} from 'react';
import AppWrapper from '../AppWrapper';
import {SafeAreaView, StatusBar} from 'react-native';
import nanoid from 'nanoid/non-secure';
import { ThemeProvider } from 'styled-components';
import theme from '../theme';
import { Label } from '../Typography';
import Tally from '../Tally';
import NumPad from '../NumPad';
import { NumPadMode, ILineItem } from '../types';

interface IProps {}
interface IState {
  billTotal: number,
  activePayee: string,
  payees: string[],
  lineItems: ILineItem[];
  mode: NumPadMode;
  value: string;
}

export default class App extends Component<IProps, IState> {
  state = {
    billTotal: 100,
    activePayee: 'A',
    payees: ['A', 'B', 'C'],
    lineItems: [],
    mode: 'ADD',
    value: '',
  }

  handleModeChange = (mode: NumPadMode) => {
    this.setState({ mode });
  }

  handleButtonPress = (value: string) => {
    const hasPoint = this.state.value.indexOf('.') > -1;
    if(value === '.' && hasPoint) { return; }
    this.setState({ value: this.state.value + value });
  }

  handleCancel = () => { this.setState({ value: '' }) }

  handleEnter = () => {
    const newLinteItem: ILineItem = {
      id: nanoid(),
      payee: this.state.activePayee,
      action: this.state.mode,
      value: parseFloat(this.state.value),
    }

    this.setState({
      lineItems: [...this.state.lineItems, newLinteItem],
      mode: 'ADD',
      value: ''
    })
  }

  render() {
    return (
      <ThemeProvider theme={theme}>
        <>
        <SafeAreaView style={{flex: 0, backgroundColor: theme.namedColors.bgColorFrame}} />
        <AppWrapper>
          <StatusBar backgroundColor={theme.namedColors.bgColorFrame} barStyle="light-content" />
          <Label light bold>Value: {this.state.value}</Label>
          <Tally lineItems={this.state.lineItems}/>
          <NumPad
            currentMode={this.state.mode}
            onButtonPress={this.handleButtonPress}
            onModeChange={this.handleModeChange}
            onCancel={this.handleCancel}
            onEnter={this.handleEnter}
          />
        </AppWrapper>
        </>
      </ThemeProvider>
    );
  }
}


