import React, { useContext, useState } from 'react';
import styled from 'styled-components';
import { AuthStateContext } from '../../../Context/AuthContext';
import { IssueStateContext, IssueDispatchContext } from '../../../Context/IssueContext';
import { request } from '../../../Api';

const ModalRow = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  font-size: 13px;
  color: ${(props) => props.theme.darkgrayColor};
  cursor: pointer;
  background-color: ${(props) =>
    props.selected ? props.theme.skyblueColor : props.theme.whiteColor};
  &:hover {
    background-color: ${(props) => props.theme.skyblueColor};
  }
`;

const UserAvater = styled.img`
  width: 20px;
  height: 20px;
  margin-right: 15px;
  border-radius: 100%;
`;

const Label = styled.span`
  width: 10px;
  height: 10px;
  border-radius: 100%;
  background-color: ${(props) => props.labelColor};
`;

const LabelTextWrapper = styled.span`
  display: flex;
  flex-direction: column;
  margin-left: 5px;
`;

export const renderUsers = ({ users, type }) => {
  const authState = useContext(AuthStateContext);
  const state = useContext(IssueStateContext);
  const dispatch = useContext(IssueDispatchContext);
  const [selectedUser, setSelectedUser] = useState(state.filter[type]);

  const fetchIssues = async ({ id }) => {
    const config = {
      url: '/api/issue',
      method: 'get',
      params: {
        ...state.filter,
        [type]: id,
      },
      token: authState.token,
    };
    const { data = null } = await request(config);
    return data;
  };

  const onClickUser = async (id) => {
    const actionSetType = type === 'author' ? 'SET_AUTHOR' : 'SET_ASSIGNEE';
    const actionRemoveType = type === 'author' ? 'REMOVE_AUTHOR' : 'REMOVE_ASSIGNEE';
    const passedId = selectedUser === id ? null : id;

    const data = await fetchIssues({ id: passedId });
    if (data) {
      if (selectedUser === id) {
        dispatch({ type: actionRemoveType, payload: data });
      } else dispatch({ type: actionSetType, id, payload: data });
      setSelectedUser(passedId);
    }
  };

  return users.map((user) => {
    const { id, username, avatar } = user;
    return (
      <ModalRow key={id} onClick={() => onClickUser(id)} selected={selectedUser === id}>
        <UserAvater src={avatar} alt={`${username} profile`} />
        {username}
      </ModalRow>
    );
  });
};

export const renderLabels = (labels) => {
  return labels.map((label) => (
    <ModalRow key={label.id}>
      <Label labelColor={label.color} />
      <LabelTextWrapper>{label.title}</LabelTextWrapper>
    </ModalRow>
  ));
};

export const renderMilestones = (milestones) => {
  return milestones.map((milestone) => <ModalRow key={milestone.id}>{milestone.title}</ModalRow>);
};

export const renderMark = () => {
  const authState = useContext(AuthStateContext);
  const state = useContext(IssueStateContext);
  const dispatch = useContext(IssueDispatchContext);
  const type = { closed: 0, open: 1 };

  const putState = async (typeString) => {
    const config = {
      url: '/api/issue/state',
      method: 'put',
      data: {
        state: type[typeString],
        issueIds: state.checkedIds,
      },
      token: authState.token,
    };
    const result = await request(config);
    return result;
  };

  const onClickMark = async (typeString) => {
    const result = await putState(typeString);
    if (result) {
      dispatch({ type: 'RESET_FILTER' });
    }
  };

  return (
    <>
      <ModalRow onClick={() => onClickMark('open')}>open</ModalRow>
      <ModalRow onClick={() => onClickMark('closed')}>closed</ModalRow>
    </>
  );
};