import React from 'react';
import { ViewProps } from 'react-native';
import styled from 'styled-components/native';
import { Label } from '../Typography';

const TallyWrapper = styled.View`
  flex: 1;
  background-color: transparent;
`
export const Tally = (props) => {
  return (
    <TallyWrapper>
      { props.lineItems.map(item => {
        return <Label key={item.id} light>{`${item.action} ${item.value}`}</Label>;
      })}
    </TallyWrapper>
  );
}

export default Tally;
