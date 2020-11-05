import React from 'react';
import styled from 'styled-components';
import { LabelIcon } from './static/svgIcons';

const LabelButton = styled.button`
  display: flex;
  align-items: center;
  height: 60px;
  padding: 10px 20px;
  border: 1px solid ${(props) => props.theme.grayColor};
  border-radius: ${(props) => props.theme.radius} 0 0 ${(props) => props.theme.radius};
  background-color: ${(props) => props.theme.skyblueColor};
  svg {
    fill: ${(props) => props.theme.whiteColor};
  }
`;

const ButtonTitle = styled.span`
  margin-left: 5px;
`;

const Count = styled.span`
  display: inline-block;
  padding: 2px 7px;
  margin-left: 10px;
  border-radius: 15px;
  background-color: ${(props) => props.theme.blueColor};
  color: ${(props) => props.theme.whiteColor};
`;

const LabelMilestoneButton = ({ hasCount }) => {
  return (
    <LabelButton>
      <LabelIcon />
      <ButtonTitle>Labels</ButtonTitle>
      {hasCount && <Count>3</Count>}
    </LabelButton>
  );
};

export default LabelMilestoneButton;