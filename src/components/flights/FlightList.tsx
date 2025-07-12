'use client';

import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
`;

const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
`;

const AddButton = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #2563eb;
  }
`;

const FlightGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  gap: 1.5rem;
`;

const FlightCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const FlightHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const FlightDate = styled.div`
  font-weight: 600;
  color: #1e293b;
`;

const FlightDuration = styled.div`
  color: #3b82f6;
  font-weight: 600;
`;

const FlightRoute = styled.div`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
  margin-bottom: 0.5rem;
`;

const FlightDetails = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 1rem;
  margin-top: 1rem;
`;

const DetailItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.25rem;
`;

const DetailLabel = styled.div`
  font-size: 0.875rem;
  color: #6b7280;
`;

const DetailValue = styled.div`
  font-weight: 600;
  color: #1e293b;
`;

export default function FlightList() {
  const [flights] = useState([
    {
      id: 1,
      date: '2024-01-15',
      route: 'RKSI → RKSS',
      duration: '1h 25m',
      aircraft: 'Cessna 172',
      pilot: '김비행',
      notes: '좋은 날씨였습니다.',
    },
    {
      id: 2,
      date: '2024-01-12',
      route: 'RKSS → RKPC',
      duration: '2h 10m',
      aircraft: 'Piper PA-28',
      pilot: '김비행',
      notes: '강풍으로 인한 지연',
    },
    {
      id: 3,
      date: '2024-01-08',
      route: 'RKPC → RKSI',
      duration: '1h 45m',
      aircraft: 'Cessna 172',
      pilot: '김비행',
      notes: '',
    },
  ]);

  return (
    <Container>
      <Header>
        <Title>비행 기록</Title>
        <AddButton>새 비행 기록 추가</AddButton>
      </Header>

      <FlightGrid>
        {flights.map((flight) => (
          <FlightCard key={flight.id}>
            <FlightHeader>
              <FlightDate>{flight.date}</FlightDate>
              <FlightDuration>{flight.duration}</FlightDuration>
            </FlightHeader>
            <FlightRoute>{flight.route}</FlightRoute>
            <FlightDetails>
              <DetailItem>
                <DetailLabel>비행기</DetailLabel>
                <DetailValue>{flight.aircraft}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>조종사</DetailLabel>
                <DetailValue>{flight.pilot}</DetailValue>
              </DetailItem>
              {flight.notes && (
                <DetailItem style={{ gridColumn: 'span 2' }}>
                  <DetailLabel>메모</DetailLabel>
                  <DetailValue>{flight.notes}</DetailValue>
                </DetailItem>
              )}
            </FlightDetails>
          </FlightCard>
        ))}
      </FlightGrid>
    </Container>
  );
} 