'use client';

import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 1.5rem;
`;

const StatCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const StatTitle = styled.h3`
  font-size: 1rem;
  font-weight: 600;
  color: #6b7280;
  margin-bottom: 0.5rem;
`;

const StatValue = styled.div`
  font-size: 2rem;
  font-weight: 700;
  color: #3b82f6;
`;

const ChartContainer = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const ChartTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
`;

const PlaceholderChart = styled.div`
  height: 300px;
  background: linear-gradient(135deg, #f3f4f6 0%, #e5e7eb 100%);
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #6b7280;
  font-size: 1.125rem;
`;

export default function FlightStatistics() {
  const stats = {
    totalFlights: 127,
    totalHours: 89.5,
    averageDuration: '1h 12m',
    mostUsedAircraft: 'Cessna 172',
    totalDistance: '12,450',
    thisYear: 45,
  };

  return (
    <Container>
      <Title>비행 통계</Title>

      <StatsGrid>
        <StatCard>
          <StatTitle>총 비행 횟수</StatTitle>
          <StatValue>{stats.totalFlights}</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>총 비행 시간</StatTitle>
          <StatValue>{stats.totalHours}h</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>평균 비행 시간</StatTitle>
          <StatValue>{stats.averageDuration}</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>가장 많이 사용한 비행기</StatTitle>
          <StatValue>{stats.mostUsedAircraft}</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>총 비행 거리</StatTitle>
          <StatValue>{stats.totalDistance}km</StatValue>
        </StatCard>

        <StatCard>
          <StatTitle>올해 비행 횟수</StatTitle>
          <StatValue>{stats.thisYear}</StatValue>
        </StatCard>
      </StatsGrid>

      <ChartContainer>
        <ChartTitle>월별 비행 통계</ChartTitle>
        <PlaceholderChart>
          차트가 여기에 표시됩니다 (Chart.js 또는 Recharts 사용 예정)
        </PlaceholderChart>
      </ChartContainer>

      <ChartContainer>
        <ChartTitle>비행기별 사용 통계</ChartTitle>
        <PlaceholderChart>
          비행기별 사용 통계 차트가 여기에 표시됩니다
        </PlaceholderChart>
      </ChartContainer>
    </Container>
  );
} 