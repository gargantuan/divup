import React from 'react';
import { View, Button, ButtonProps } from 'react-native';
import styled from 'styled-components/native';
import { Theme } from '../theme';
import NumPadButton from '../NumPadButton';

type NumpadMode = 'ADD' | 'SUB' | 'MULT' | 'DIV';

const Pad = styled.SafeAreaView`
  background: ${ props => (props.theme as Theme).namedColors.bgColorPad };
`

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

interface INumpadProps {
  currentMode: NumpadMode;
  onButtonPress: () => void;
}

export default class NumPad extends React.Component<INumpadProps, {}>{
  render() {
    return (
      <Pad>
        <PadInner>
        <NumbersWrapper>
          <NumPadButton title="7" onPress={this.props.onButtonPress} />
          <NumPadButton title="8" onPress={this.props.onButtonPress} />
          <NumPadButton title="9" onPress={this.props.onButtonPress} />
          <NumPadButton title="÷" onPress={this.props.onButtonPress} isActive={this.props.currentMode === 'DIV'} />

          <NumPadButton title="4" onPress={this.props.onButtonPress} />
          <NumPadButton title="5" onPress={this.props.onButtonPress} />
          <NumPadButton title="6" onPress={this.props.onButtonPress} />
          <NumPadButton title="✕" onPress={this.props.onButtonPress} isActive={this.props.currentMode === 'MULT'} />

          <NumPadButton title="1" onPress={this.props.onButtonPress} />
          <NumPadButton title="2" onPress={this.props.onButtonPress} />
          <NumPadButton title="3" onPress={this.props.onButtonPress} />
          <NumPadButton title="-" onPress={this.props.onButtonPress} isActive={this.props.currentMode === 'SUB'} />

          <NumPadButton title="0" size="WIDE" onPress={this.props.onButtonPress} />
          <NumPadButton title="." onPress={this.props.onButtonPress} />
          <NumPadButton title="+" onPress={this.props.onButtonPress} isActive={this.props.currentMode === 'ADD'}/>
        </NumbersWrapper>
        <ActionsWrapper>
          <NumPadButton title="C" onPress={this.props.onButtonPress} />
          <NumPadButton title="⏎" size="TALL" onPress={this.props.onButtonPress} />
        </ActionsWrapper>
        </PadInner>
      </Pad>
    );
  }
};
