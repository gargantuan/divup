import React from 'react';
import { View, Text, ViewProps, TextProps, GestureResponderEvent } from 'react-native';
import styled from 'styled-components/native';
import { Theme } from '../theme';
import props from 'ramda/es/props';

type ButtonSize = 'WIDE' | 'TALL';

interface INPBTextProps extends TextProps {
  theme: Theme;
  light?: boolean;
}

const NPBText = styled.Text<INPBTextProps>`
  color: ${ props => props.light
    ? props.theme.namedColors.white
    : props.theme.namedColors.black
  };
`;

interface INPBBezelProps extends ViewProps {
  theme: Theme;
  size?: ButtonSize;
  isActive?: boolean;
}

const NPBBezel = styled.TouchableOpacity<INPBBezelProps>`
  flex: 1;
  ${ props => {
    switch(props.size) {
      case 'WIDE':
        return 'flex-basis: 45%';
      case 'TALL':
        return 'flex-basis: 80%';
      default:
        return 'flex-basis: 20%';
    }
  }};

  flex-direction: column;
  text-align: center;
  justify-content: center;
  min-height: 41px;
  margin: 2px;
  border-radius: 2px;

  /* background-image: linear-gradient(-180deg, #EEEEEE 0%, #D8D8D8 100%); */
  background-color: ${ props => props.isActive
    ? props.theme.namedColors.active
    : props.theme.namedColors.bgColorPad
  };

  border: ${ props => props.isActive
    ? 'none'
    : '1px solid #838383'
  };

`;

export interface INumpadButtonProps {
  title: string;
  size?: ButtonSize;
  isActive?: boolean;
  onPress: (event: GestureResponderEvent) => void;
}

export default class NumPadButton extends React.Component<INumpadButtonProps, {}> {
  render() {
    const {title, ...bezelProps} = this.props;
    return (
      <NPBBezel {...bezelProps} disabled={this.props.isActive}>
        <NPBText light={this.props.isActive} style={{ textAlign: 'center'}}>{title || 'Click Me'}</NPBText>
      </NPBBezel>
    );
  }
}
