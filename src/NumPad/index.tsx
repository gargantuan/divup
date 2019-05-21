import React from 'react';
import { View, Button, ButtonProps } from 'react-native';
import styled from 'styled-components/native';
import { theme, IThemeable } from '../theme';
import NumPadButton from '../NumPadButton';
import { NumPadMode } from '../types'

export const Pad = styled.SafeAreaView`
  background-color: ${ props => props.theme.namedColors.bgColorPad };
`
Pad.defaultProps = {
  theme,
}

Pad.defaultProps = { theme: { ...theme } };

const PadInner = styled.View`
  display: flex;
  flex-direction: row;
  padding: 10px;
  height: 200px;
`

const NumbersWrapper = styled.View`
  flex: 1;
  flex-direction: row;
  flex-wrap: wrap;
  margin-right: 3%;
`;

const ActionsWrapper = styled.View`
  display: flex;
  flex-direction: column;
  width: 20%;
`

export interface INumpadProps {
  currentMode: NumPadMode;
  onModeChange: (mode: NumPadMode) => void;
  onButtonPress: (value: string) => void;
  onCancel: () => void;
  onEnter: () => void;
}

export default class NumPad extends React.Component<INumpadProps, {}>{

  handleModeChange = (mode: NumPadMode) => () => {
    console.log('mode', mode);
    this.props.onModeChange(mode);
  }

  handleButtonPress = (value: string) => () => {
    this.props.onButtonPress(value);
  }

  render() {
    return (
      <Pad>
        <PadInner>
        <NumbersWrapper>
          <NumPadButton title="7" onPress={this.handleButtonPress('7')} />
          <NumPadButton title="8" onPress={this.handleButtonPress('8')} />
          <NumPadButton title="9" onPress={this.handleButtonPress('9')} />

          <NumPadButton title="÷" onPress={this.handleModeChange('DIV')} isActive={this.props.currentMode === 'DIV'} />

          <NumPadButton title="4" onPress={this.handleButtonPress('4')} />
          <NumPadButton title="5" onPress={this.handleButtonPress('5')} />
          <NumPadButton title="6" onPress={this.handleButtonPress('6')} />

          <NumPadButton title="✕" onPress={this.handleModeChange('MULT')} isActive={this.props.currentMode === 'MULT'} />

          <NumPadButton title="1" onPress={this.handleButtonPress('1')} />
          <NumPadButton title="2" onPress={this.handleButtonPress('2')} />
          <NumPadButton title="3" onPress={this.handleButtonPress('3')} />

          <NumPadButton title="-" onPress={this.handleModeChange('SUB')} isActive={this.props.currentMode === 'SUB'} />

          <NumPadButton title="0" size="WIDE" onPress={this.handleButtonPress('0')} />
          <NumPadButton title="." onPress={this.handleButtonPress('.')} />

          <NumPadButton title="+" onPress={this.handleModeChange('ADD')} isActive={this.props.currentMode === 'ADD'}/>
        </NumbersWrapper>
        <ActionsWrapper>
          <NumPadButton title="C" onPress={this.props.onCancel} />
          <NumPadButton title="⏎" size="TALL" onPress={this.props.onEnter} />
        </ActionsWrapper>
        </PadInner>
      </Pad>
    );
  }
};
