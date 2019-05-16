import { TextProps } from 'react-native';
import styled from 'styled-components/native';
import { Theme } from '../theme';

export interface ILabelProps extends TextProps {
  theme: Theme;
  bold?: boolean;
  light?: boolean;
  small?: boolean;
}

export const Label = styled.Text<ILabelProps>`
  font-size: ${ (props: ILabelProps) => props.small
    ? '14px'
    : '22px'
  };

  color: ${ (props: ILabelProps) => props.light
    ? props.theme.namedColors.fontColorLight
    : props.theme.namedColors.fontColorDark
  };

  font-weight: ${ (props: ILabelProps) => props.bold
    ? 'bold'
    : 'normal'
  };
`;
