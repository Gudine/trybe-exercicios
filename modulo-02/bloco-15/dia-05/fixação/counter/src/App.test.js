import React from 'react'
import { Provider } from 'react-redux'
import { render, screen, cleanup } from '@testing-library/react';
import App from './App';
import { createStore, combineReducers } from 'redux';
import clickReducer from './reducers';
import userEvent from '@testing-library/user-event';

const renderWithRedux = (
  component,
  { initialState, store = createStore(combineReducers({ clickReducer }), initialState) } = {}
) => {
  return {
    ...render(<Provider store={store}>{component}</Provider>),
    store,
  }
}

describe('testing clicks', () => {
  beforeEach(cleanup);

  test('the page should has a button and a text 0', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');

    expect(buttonAdicionar).toBeInTheDocument();
    expect(screen.getByText('0')).toBeInTheDocument();
  });

  test('a click in a button in the initial state should increment the value of clicks', () => {
    renderWithRedux(<App />);
    const buttonAdicionar = screen.getByText('Clique aqui');
  
    expect(screen.getByText('0')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('1')).toBeInTheDocument();
  });

  test('a click in a button not in the initial state should increment the value of clicks', () => {
    renderWithRedux(<App />, { initialState: { clickReducer: { counter: 10 }}});
    const buttonAdicionar = screen.getByText('Clique aqui');
  
    expect(screen.getByText('10')).toBeInTheDocument();

    userEvent.click(buttonAdicionar);
    expect(screen.getByText('11')).toBeInTheDocument();
  });
});