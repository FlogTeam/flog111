'use client';

import styled from 'styled-components';

const DashboardContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
`;

const Card = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1rem;
`;

const StatValue = styled.div`
  font-size: 2.5rem;
  font-weight: 700;
  color: #3b82f6;
  margin-bottom: 0.5rem;
`;

const StatLabel = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const RecentFlights = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const FlightItem = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f8fafc;
  border-radius: 0.5rem;
`;

const FlightInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const FlightDate = styled.div`
  font-weight: 600;
  color: #1e293b;
`;

const FlightRoute = styled.div`
  color: #6b7280;
  font-size: 0.875rem;
`;

const FlightDuration = styled.div`
  color: #3b82f6;
  font-weight: 600;
`;

export default function Dashboard() {
  // 임시 데이터
  const stats = {
    totalFlights: 127,
    totalHours: 89.5,
    thisMonth: 12,
    totalAircraft: 3,
  };

  const recentFlights = [
    { date: '2024-01-15', route: 'RKSI → RKSS', duration: '1h 25m' },
    { date: '2024-01-12', route: 'RKSS → RKPC', duration: '2h 10m' },
    { date: '2024-01-08', route: 'RKPC → RKSI', duration: '1h 45m' },
  ];

  return (
    <DashboardContainer>
      <Card>
        <CardTitle>총 비행 횟수</CardTitle>
        <StatValue>{stats.totalFlights}</StatValue>
        <StatLabel>전체 비행 기록</StatLabel>
      </Card>

      <Card>
        <CardTitle>총 비행 시간</CardTitle>
        <StatValue>{stats.totalHours}h</StatValue>
        <StatLabel>누적 비행 시간</StatLabel>
      </Card>

      <Card>
        <CardTitle>이번 달 비행</CardTitle>
        <StatValue>{stats.thisMonth}</StatValue>
        <StatLabel>이번 달 비행 횟수</StatLabel>
      </Card>

      <Card>
        <CardTitle>등록된 비행기</CardTitle>
        <StatValue>{stats.totalAircraft}</StatValue>
        <StatLabel>총 비행기 수</StatLabel>
      </Card>

      <Card style={{ gridColumn: 'span 2' }}>
        <CardTitle>최근 비행 기록</CardTitle>
        <RecentFlights>
          {recentFlights.map((flight, index) => (
            <FlightItem key={index}>
              <FlightInfo>
                <FlightDate>{flight.date}</FlightDate>
                <FlightRoute>{flight.route}</FlightRoute>
              </FlightInfo>
              <FlightDuration>{flight.duration}</FlightDuration>
            </FlightItem>
          ))}
        </RecentFlights>
      </Card>
    </DashboardContainer>
  );
} 