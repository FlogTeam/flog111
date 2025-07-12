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

const AircraftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 1.5rem;
`;

const AircraftCard = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 1.5rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const AircraftHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;
`;

const AircraftName = styled.h3`
  font-size: 1.25rem;
  font-weight: 700;
  color: #1e293b;
`;

const AircraftType = styled.div`
  color: #3b82f6;
  font-weight: 600;
  font-size: 0.875rem;
`;

const AircraftDetails = styled.div`
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

const ActionButtons = styled.div`
  display: flex;
  gap: 0.5rem;
  margin-top: 1rem;
`;

const EditButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #f59e0b;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #d97706;
  }
`;

const DeleteButton = styled.button`
  padding: 0.5rem 1rem;
  background-color: #ef4444;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-size: 0.875rem;
  cursor: pointer;
  transition: background-color 0.2s;

  &:hover {
    background-color: #dc2626;
  }
`;

export default function AircraftManagement() {
  const [aircrafts] = useState([
    {
      id: 1,
      name: 'N12345',
      type: 'Cessna 172',
      manufacturer: 'Cessna',
      year: '2015',
      totalHours: 1250,
      lastMaintenance: '2024-01-10',
    },
    {
      id: 2,
      name: 'N67890',
      type: 'Piper PA-28',
      manufacturer: 'Piper',
      year: '2018',
      totalHours: 890,
      lastMaintenance: '2024-01-05',
    },
    {
      id: 3,
      name: 'N11111',
      type: 'Diamond DA40',
      manufacturer: 'Diamond',
      year: '2020',
      totalHours: 450,
      lastMaintenance: '2024-01-15',
    },
  ]);

  return (
    <Container>
      <Header>
        <Title>비행기 관리</Title>
        <AddButton>새 비행기 등록</AddButton>
      </Header>

      <AircraftGrid>
        {aircrafts.map((aircraft) => (
          <AircraftCard key={aircraft.id}>
            <AircraftHeader>
              <AircraftName>{aircraft.name}</AircraftName>
              <AircraftType>{aircraft.type}</AircraftType>
            </AircraftHeader>
            <AircraftDetails>
              <DetailItem>
                <DetailLabel>제조사</DetailLabel>
                <DetailValue>{aircraft.manufacturer}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>제조년도</DetailLabel>
                <DetailValue>{aircraft.year}</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>총 비행시간</DetailLabel>
                <DetailValue>{aircraft.totalHours}h</DetailValue>
              </DetailItem>
              <DetailItem>
                <DetailLabel>최근 정비일</DetailLabel>
                <DetailValue>{aircraft.lastMaintenance}</DetailValue>
              </DetailItem>
            </AircraftDetails>
            <ActionButtons>
              <EditButton>수정</EditButton>
              <DeleteButton>삭제</DeleteButton>
            </ActionButtons>
          </AircraftCard>
        ))}
      </AircraftGrid>
    </Container>
  );
} 