import { createContext } from 'react';

export const initIssueInfo = {
  title: null,
  content: undefined,
  labels: [],
  assignees: [],
  milestone: undefined,
  comments: [],
};

export const issueInfoReducer = (state, action) => {
  switch (action.type) {
    case 'SET_TITLE': {
      const title = action.data;
      return {
        ...state,
        title,
      };
    }
    case 'SET_CONTENT': {
      const content = action.data;
      return {
        ...state,
        content,
      };
    }
    case 'SELECT_ASSIGNEES': {
      const assignees = action.data;
      return {
        ...state,
        assignees,
      };
    }
    case 'SELECT_LABELS': {
      const labels = action.data;
      return {
        ...state,
        labels,
      };
    }
    case 'SELECT_MILESTONE': {
      const milestone = action.data;
      return {
        ...state,
        milestone,
      };
    }
    case 'GET_ISSUE_INFO': {
      const { data } = action;
      return {
        ...state,
        ...data,
      };
    }
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
};

export const IssueInfoContext = createContext();
export const IssueInfoDispatchContext = createContext();