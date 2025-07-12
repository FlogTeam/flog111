"use client";
import styled, { css } from "styled-components";
import { FaPlaneDeparture, FaHome, FaCog, FaPlus, FaAngleRight } from "react-icons/fa";
import { useState } from "react";
import { useRouter } from "next/navigation";

const Wrapper = styled.div`
  max-width: 320px;
  min-height: 100vh;
  margin: 0 auto;
  background: #fff;
  font-family: 'Poppins', 'Plus Jakarta Sans', sans-serif;
  position: relative;
  box-shadow: 0 0 16px rgba(0,0,0,0.04);
`;

const StatusBar = styled.div`
  height: 44px;
  background: #202226;
  border-radius: 8px 8px 0 0;
`;

const TopSection = styled.div`
  position: relative;
  background: #202226;
  padding-top: 10px;
  padding-bottom: 24px;
  overflow: hidden;
  min-height: 260px;
`;

const BlurShadow = styled.div`
  width: 320px;
  height: 16px;
  margin: -6px auto 0 auto;
  background: linear-gradient(180deg, rgba(35,36,39,0.85) 60%, rgba(35,36,39,0.01) 100%);
  box-shadow: 0 6px 18px 0 rgba(0,0,0,0.13);
  z-index: 2;
`;

const Bubble1 = styled.div`
  position: absolute;
  left: -80px;
  top: 10px;
  width: 260px;
  height: 180px;
  background: rgba(255,255,255,0.10);
  border-radius: 50%;
  z-index: 0;
`;

const Bubble2 = styled.div`
  position: absolute;
  right: -40px;
  top: 40px;
  width: 120px;
  height: 90px;
  background: rgba(255,255,255,0.18);
  border-radius: 50%;
  z-index: 0;
`;

const Greeting = styled.div`
  padding: 0 20px 0 20px;
  color: #fff;
  font-size: 12px;
  line-height: 20px;
  font-weight: 400;
`;

const CardList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin: 24px 0 0 0;
  padding: 0 12px;
`;

const TicketCard = styled.div<{bg: string}>`
  background: ${p => p.bg};
  border-radius: 15px;
  color: #fff;
  padding: 16px 18px 12px 18px;
  min-height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 700;
`;

const CardTimes = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 8px 0 0 0;
  font-size: 16px;
  font-weight: 700;
`;

const CardInfo = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-top: 8px;
`;

const DateLabel = styled.span`
  font-size: 9px;
  font-weight: 400;
  margin-right: 4px;
`;
const DateValue = styled.span`
  font-size: 9px;
  font-weight: 700;
`;
const MoreButton = styled.button`
  background: transparent;
  border: 1px solid #fff;
  border-radius: 13px;
  color: #fff;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 18px;
  cursor: pointer;
`;

const StatsSection = styled.div`
  margin: 24px 0 0 0;
  padding: 0 20px;
`;
const StatsTitle = styled.div`
  font-size: 16px;
  font-weight: 700;
  color: #fff;
  margin-bottom: 8px;
`;
const StatsCard = styled.div`
  background: #23242a;
  border-radius: 15px;
  box-shadow: 0 2px 8px rgba(32,34,38,0.04);
  padding: 16px 18px;
  margin-bottom: 12px;
`;
const StatsLabel = styled.div`
  font-size: 12px;
  color: #9db2ce;
  font-weight: 500;
`;
const StatsValue = styled.div`
  font-size: 14px;
  color: #388deb;
  font-weight: 600;
`;

const BottomBar = styled.div`
  position: fixed;
  left: 50%;
  bottom: 24px;
  transform: translateX(-50%);
  width: 290px;
  height: 54px;
  background: #202226;
  border-radius: 360px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  z-index: 10;
  box-shadow: 0 2px 8px rgba(32,34,38,0.08);
`;
const BarButton = styled.button<{active?: boolean}>`
  background: none;
  border: none;
  color: ${p => p.active ? '#388deb' : '#fff'};
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
`;

const FlightLogCard = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px rgba(32,34,38,0.08);
  margin: 24px 12px 0 12px;
  padding: 22px 20px 18px 20px;
  display: flex;
  flex-direction: column;
  align-items: stretch;
`;

const FlightLogTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  color: #202226;
  margin-bottom: 18px;
`;

const StatTable = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  margin-bottom: 18px;
`;

const StatRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const StatLabel = styled.div`
  font-size: 14px;
  color: #bfc9d8;
  font-weight: 500;
`;

const StatValue = styled.div`
  font-size: 18px;
  color: #388deb;
  font-weight: 600;
`;

const AllFlightStatusBtn = styled.button`
  margin-top: 8px;
  width: 100%;
  background: #fff;
  border: 1px solid #e3e8f0;
  border-radius: 20px;
  color: #b0bdd0;
  font-size: 14px;
  font-weight: 700;
  letter-spacing: 1px;
  padding: 8px 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  box-shadow: 0 1.5px 4px rgba(176,189,208,0.04);
  cursor: pointer;
  transition: none;
  outline: none;
  border-width: 1.5px;
`;

const CardStackContainer = styled.div<{ $isStacked: boolean }>`
  position: relative;
  width: 320px;
  height: ${({ $isStacked }) => ($isStacked ? "160px" : "540px")};
  margin: 0 auto 24px auto;
  cursor: pointer;
`;
const StackedTicketCard = styled.div<{
  bg: string;
  $index: number;
  $isStacked: boolean;
}>`
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  width: 100%;
  background: ${({ bg }) => bg};
  border-radius: 15px;
  color: #fff;
  padding: 16px 18px 12px 18px;
  min-height: 176px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  box-shadow: ${({ $isStacked, $index }) =>
    $isStacked
      ? `0 ${8 + 10 * $index}px ${24 + 12 * $index}px 0 rgba(35,36,39,${0.18 - 0.06 * $index})`
      : "0 4px 6px -1px rgba(0,0,0,0.1)"};
  opacity: ${({ $isStacked, $index }) => ($isStacked ? 1 - 0.18 * $index : 1)};
  transition: transform 0.5s cubic-bezier(0.4,0.2,0.2,1), box-shadow 0.5s, z-index 0s, opacity 0.5s;
  z-index: ${({ $isStacked, $index }) => ($isStacked ? 10 - $index : 10 + $index)};
  ${({ $isStacked, $index }) =>
    $isStacked
      ? css`
          transform: translateY(${18 * $index}px) translateX(${12 * $index}px) scale(1);
        `
      : css`
          transform: translateY(${($index * 200) - 20 * $index}px) scale(1);
        `}
`;

const StackedCardInfo = styled(CardInfo)<{ $isStacked: boolean; $index: number }>`
  ${({ $isStacked, $index }) =>
    $isStacked && $index !== 0 &&
    css`
      display: none;
    `}
`;

const FlightPath = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 12px 0 8px 0;
`;
const FlightTime = styled.div`
  color: #fff;
  font-size: 13px;
  font-weight: 500;
  margin-bottom: 2px;
`;
const FlightArrow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
const FlightNumber = styled.div`
  color: #fff;
  font-size: 11px;
  margin-top: 2px;
`;
const CardDivider = styled.div`
  width: 100%;
  height: 2px;
  background: #fff;
  opacity: 0.8;
  margin: 8px 0 0 0;
`;

export default function Home() {
  const [isStacked, setIsStacked] = useState(true);
  const router = useRouter();

  const handleAllFlightStatus = () => {
    router.push("/flights");
  };

  const handleToggleStack = () => {
    setIsStacked((prev) => !prev);
  };

  // 카드 데이터 예시
  const cards = [
    { bg: "#352f44", date: "2025.01.01" },
    { bg: "#5c5470", date: "2025.01.01" },
    { bg: "#b9b4c7", date: "2025.01.01" },
  ];

  return (
    <Wrapper>
      <TopSection>
        <Bubble1 />
        <Bubble2 />
        <Greeting>
          user3341 님,<br />Have a good day!
        </Greeting>
        <FlightLogCard>
          <FlightLogTitle>FLIGHT LOG</FlightLogTitle>
          <StatTable>
            <StatRow>
              <StatLabel>FLIGHTS</StatLabel>
              <StatValue>0,00,000</StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>FLIGHT TIMES</StatLabel>
              <StatValue>0H 00M</StatValue>
            </StatRow>
            <StatRow>
              <StatLabel>DISTANCE</StatLabel>
              <StatValue>0,000,000 KM</StatValue>
            </StatRow>
          </StatTable>
          <AllFlightStatusBtn onClick={handleAllFlightStatus}>
            ALL FLIGHT STATUS <FaAngleRight size={18} color="#b0bdd0" />
          </AllFlightStatusBtn>
        </FlightLogCard>
      </TopSection>
      <BlurShadow />
      <CardStackContainer onClick={handleToggleStack} $isStacked={isStacked}>
        {cards.map((card, idx) => (
          <StackedTicketCard key={idx} bg={card.bg} $index={idx} $isStacked={isStacked}>
            <CardTitle>
              <FaPlaneDeparture /> SKY AIRLINES
            </CardTitle>
            <CardTimes>
              <span>23:00 SCL</span>
              <span>07:25 NY</span>
            </CardTimes>
            <FlightPath>
              <FlightTime>08H 25M</FlightTime>
              <FlightArrow>
                <svg width="90" height="24" viewBox="0 0 90 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="6" cy="12" r="3" fill="#fff"/>
                  <rect x="9" y="11" width="65" height="2" rx="1" fill="#fff"/>
                  <polygon points="80,12 70,7 70,17" fill="#fff"/>
                </svg>
                <FlightNumber>LJ712</FlightNumber>
              </FlightArrow>
            </FlightPath>
            <CardDivider />
            <StackedCardInfo $isStacked={isStacked} $index={idx}>
              <div>
                <DateLabel>DATE :</DateLabel>
                <DateValue>{card.date}</DateValue>
              </div>
              <MoreButton>MORE</MoreButton>
            </StackedCardInfo>
          </StackedTicketCard>
        ))}
      </CardStackContainer>
      <BottomBar>
        <BarButton><FaPlaneDeparture /></BarButton>
        <BarButton><FaPlus /></BarButton>
        <BarButton active><FaHome /></BarButton>
        <BarButton><FaCog /></BarButton>
      </BottomBar>
    </Wrapper>
  );
}
