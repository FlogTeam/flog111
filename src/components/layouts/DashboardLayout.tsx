'use client';

import styled from 'styled-components';
import Sidebar from '@/components/navigation/Sidebar';
import Header from '@/components/navigation/Header';

const DashboardContainer = styled.div`
  min-height: 100vh;
  display: flex;
`;

const MainContent = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`;

const ContentArea = styled.div`
  flex: 1;
  padding: 2rem;
  background-color: #f8fafc;
`;

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <DashboardContainer>
      <Sidebar />
      <MainContent>
        <Header />
        <ContentArea>{children}</ContentArea>
      </MainContent>
    </DashboardContainer>
  );
} 