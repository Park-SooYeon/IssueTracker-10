import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import IssueFilterModal from './IssueFilterModal';

const ListHeaderWraaper = styled.div`
  display: flex;
  align-items: center;
  padding: 20px 15px;
  border-radius: 5px 5px 0 0;
  background-color: ${(props) => props.theme.skyblueColor};
  color: ${(props) => props.theme.whiteColor};
`;

export const IssueCheckbox = styled.input`
  margin-right: 15px;
`;

const SelectedText = styled.span`
  font-size: 14px;
`;

const FilterWrapper = styled.span`
  position: relative;
`;
const FilterWrapperLeft = styled(FilterWrapper)`
  margin-left: auto;
`;

const FillterButton = styled.button`
  margin: 0 12px;
  background-color: transparent;
  color: ${(props) => props.theme.whiteColor};
  cursor: pointer;
`;

const IssueListHeader = (props) => {
  const [modal, setModal] = useState(0);
  const { labels, milestones, users, openCount, closedCount } = props;
  const handleModal = (num) => {
    if (modal === num) setModal(0);
    else setModal(num);
  };
  return (
    <ListHeaderWraaper>
      <IssueCheckbox type="checkbox" />
      <SelectedText>
        {openCount} open {closedCount} closed
      </SelectedText>
      <FilterWrapperLeft>
        <FillterButton onClick={() => handleModal(1)}>Author ▾</FillterButton>
        {modal === 1 && <IssueFilterModal id="author" data={users} />}
      </FilterWrapperLeft>
      <FilterWrapper>
        <FillterButton onClick={() => handleModal(2)}>Label ▾</FillterButton>
        {modal === 2 && <IssueFilterModal id="label" data={labels} />}
      </FilterWrapper>
      <FilterWrapper>
        <FillterButton onClick={() => handleModal(3)}>Milestones ▾</FillterButton>
        {modal === 3 && <IssueFilterModal id="milestone" data={milestones} />}
      </FilterWrapper>
      <FilterWrapper>
        <FillterButton onClick={() => handleModal(4)}>Assignees ▾</FillterButton>
        {modal === 4 && <IssueFilterModal id="assignee" data={users} />}
      </FilterWrapper>
    </ListHeaderWraaper>
  );
};

export default IssueListHeader;