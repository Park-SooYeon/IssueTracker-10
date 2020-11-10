import React from 'react';
import styled from 'styled-components';
import BoldText from '../../Common/BoldText';
import Button from '../../Common/Button';
import Input from '../../Common/Input';
import LabelBadge from '../LabelBadge';
import { CycleIcon } from '../../static/svgIcons';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

const Container = styled.div`
  padding: 20px;
  background-color: ${(props) => props.theme.brightColor};
  border-radius: ${(props) => props.theme.radiusSmall};
`;
const LabelRow = styled.div`
  width: 100px;
  margin-bottom: 10px;
`;

const InputRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 50%;
`;

const InputColumn = styled.div`
  display: inline-flex;
  flex-direction: column;
  justify-content: center;
  margin: 10px 0;
`;

const ColorButton = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.color};
  border-radius: ${(props) => props.theme.radiusSmall};
  width: 30px;
  height: 30px;
  margin-right: 10px;
  cursor: pointer;
  svg {
    fill: ${(props) => props.fontColor};
  }
`;

const InnerWrapper = styled.div`
  display: flex;
  align-items: center;
`;

const InputBoldText = styled(BoldText)`
  margin-bottom: 10px;
`;

const LabelInput = styled(Input)`
  border-radius: ${(props) => props.theme.radiusSmall};
  height: 30px;
  width: 100%;
  background: ${(props) => props.theme.skyblueColor};
`;

const EditButton = styled(Button)`
  margin-top: 25px;
  width: 100px;
  font-size: 10px;
`;

const CancelButton = styled(Button)`
  margin-top: 25px;
  margin-right: 10px;
  width: 70px;
  font-size: 10px;
`;

export default ({
  color,
  title,
  fontColor,
  description,
  cancelButtonColor,
  createLabelButtonColor,
  clickUpdateLabelButton,
  onChangeColor,
  onChangeDescription,
  onChangeTitle,
  changeColor,
  toggleDisplay,
}) => (
  <Wrapper>
    <Container>
      <LabelRow>
        <LabelBadge color={color} title={title || 'Label preview'} fontColor={fontColor} />
      </LabelRow>
      <InputRow>
        <InputColumn>
          <InputBoldText text="Label name" />
          <LabelInput
            name="title"
            placeholder="Label name"
            value={title || ''}
            required
            onChange={onChangeTitle}
          />
        </InputColumn>
        <InputColumn>
          <InputBoldText text="Description" />
          <LabelInput
            name="description"
            placeholder="Description (optional)"
            value={description || ''}
            onChange={onChangeDescription}
          />
        </InputColumn>
        <InputColumn>
          <InputBoldText text="Color" />
          <InnerWrapper>
            <ColorButton fontColor={fontColor} onClick={changeColor} color={color}>
              <CycleIcon size={20} />
            </ColorButton>
            <LabelInput
              name="color"
              placeholder="Color(Hex)"
              value={color || ''}
              required
              onChange={onChangeColor}
            />
          </InnerWrapper>
        </InputColumn>
        <InputColumn>
          <InnerWrapper>
            <CancelButton
              text="Cancel"
              fontColor="black"
              color={cancelButtonColor}
              onClick={toggleDisplay}
            />
            <EditButton
              text="Save Changes"
              color={createLabelButtonColor}
              onClick={clickUpdateLabelButton}
            />
          </InnerWrapper>
        </InputColumn>
      </InputRow>
    </Container>
  </Wrapper>
);