import { ViewProps, TextProps } from 'react-native';
import styled from 'styled-components/native';
import { Theme } from '../theme';

export interface IAppWrapperProps extends ViewProps {
  theme: Theme;
}

export default styled.SafeAreaView`
  background-color: ${ (props: IAppWrapperProps) => props.theme.namedColors.bgColorFrame };
  flex: 1;
`;
