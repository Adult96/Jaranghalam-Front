import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import BoardList from '../components/BoardList';
import BoardSort from '../components/BoardSort';
import Error from '../components/Error';
import { __getMy } from '../utils/redux/modules/my/getMy';

export default function My() {
  const dispatch = useDispatch();
  const { getMy, isLoading, isError } = useSelector(state => state.getMy);

  useEffect(() => {
    dispatch(__getMy());
  }, [dispatch]);

  const handleSortClick = e => {
    const innerText = e.target.innerText;
    if (innerText === 'My') {
      // dispatch(__getMy({ page: 1, query: '' }));
    } else if (innerText === 'MyComment') {
      // dispatch(__getMyComment({ page: 1, query: '&sortBy=postLikeCount' }));
    }
  };

  if (isLoading) return <p>로딩</p>;
  if (isError) return <Error>게시글이 존재하지 않습니다.</Error>;
  return (
    <HomeWrapper>
      <BoardSort click={handleSortClick}>
        {{ content: { first: 'My', second: 'MyComment' } }}
      </BoardSort>
      <BoardList boards={getMy} />
    </HomeWrapper>
  );
}

const HomeWrapper = styled.main`
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  &::-webkit-scrollbar {
    width: 8px;
    height: 8px;
    border-radius: 6px;
    background: transparent;
  }
  &::-webkit-scrollbar-thumb {
    background: linear-gradient(
      0deg,
      rgba(88, 81, 216, 1) 0%,
      rgba(131, 58, 180, 1) 10%,
      rgba(193, 53, 132, 1) 20%,
      rgba(225, 48, 108, 1) 30%,
      rgba(253, 36, 76, 1) 40%,
      #f56040 50%,
      rgba(247, 119, 55, 1) 60%,
      #fcaf45 70%,
      #ffdc80 80%
    );
    border-radius: 6px;
  }

  @media (max-width: ${props => props.theme.screen.tablet_v}) {
    border-top: 1px solid ${props => props.theme.bgBorderColor};
  }
  @media (min-width: ${props => props.theme.screen.tablet_v}) {
    border-left: 1px solid ${props => props.theme.bgBorderColor};
  }
`;
