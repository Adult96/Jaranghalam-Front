import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import styled from 'styled-components';

import BoardList from '../components/BoardList';
import BoardSort from '../components/BoardSort';
import Error from '../components/Error';
import MyCommentList from '../components/MyCommentList';
import { __getMy } from '../utils/redux/modules/my/getMy';
import {
  initMyComnt,
  __getMyComment,
} from '../utils/redux/modules/my/getMyComment';

export default function My() {
  const dispatch = useDispatch();
  const [myTapClick, setMyTapClick] = useState(true);
  const { getMy, isMyLoading, isMyError } = useSelector(state => state.getMy);
  const { getMyComment, isMyComntLoading, isMyComntError } = useSelector(
    state => state.getMyComment,
  );

  useEffect(() => {
    dispatch(__getMy());
  }, [dispatch]);

  const handleSortClick = async e => {
    const innerText = e.target.innerText;
    if (innerText === 'My') {
      await dispatch(__getMy());
      dispatch(initMyComnt());
      setMyTapClick(true);
    } else if (innerText === 'MyComment') {
      await dispatch(__getMyComment());
      setMyTapClick(false);
    }
  };

  if (isMyLoading || isMyComntLoading) return <p>로딩</p>;
  if (isMyError || isMyComntError) return <Error>에러가 발생 했습니다.</Error>;
  return (
    <HomeWrapper>
      <BoardSort click={handleSortClick}>
        {{ content: { first: 'My', second: 'MyComment' } }}
      </BoardSort>
      {myTapClick && !!Number(getMy.length) && <BoardList boards={getMy} />}
      {myTapClick && !!!Number(getMy.length) && (
        <Comment>등록된 개인 게시글이 없습니다.</Comment>
      )}
      {!myTapClick && !!Number(getMyComment.length) && (
        <MyCommentList myComment={getMyComment} />
      )}
      {!myTapClick && !!!Number(getMyComment.length) && (
        <Comment>등록된 개인 댓글이 없습니다.</Comment>
      )}
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

const Comment = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: ${props => props.theme.fontSize.small};
`;
