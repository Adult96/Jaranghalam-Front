import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import BoardList from '../components/BoardList';
import { __getHome } from '../utils/redux/modules/home/getHome';

export default function Home() {
  const dispatch = useDispatch();
  const { getHome, isLoading, isError } = useSelector(state => state.getHome);

  useEffect(() => {
    dispatch(__getHome());
  }, [dispatch]);

  if (isLoading) return <p>로딩</p>;
  if (isError) return <p>에러</p>;
  console.log(getHome);
  return (
    <HomeWrapper>
      <BoardList boards={getHome} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    border-top: 1px solid ${props => props.theme.bgBorderColor};
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    border-left: 1px solid ${props => props.theme.bgBorderColor};
  }
`;
