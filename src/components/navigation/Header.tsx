'use client';

import styled from 'styled-components';

const HeaderContainer = styled.header`
  background-color: white;
  border-bottom: 1px solid #e2e8f0;
  padding: 1rem 2rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 1.5rem;
  font-weight: 600;
  color: #1e293b;
`;

const UserMenu = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
`;

const Avatar = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: #3b82f6;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  font-weight: 600;
`;

const LogoutButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  cursor: pointer;
  font-size: 0.875rem;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;

export default function Header() {
  return (
    <HeaderContainer>
      <Title>Flog - 비행기록 관리</Title>
      <UserMenu>
        <UserInfo>
          <Avatar>U</Avatar>
          <span>사용자</span>
        </UserInfo>
        <LogoutButton>로그아웃</LogoutButton>
      </UserMenu>
    </HeaderContainer>
  );
} 