'use client';

import styled from 'styled-components';
import { useState } from 'react';

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2rem;
  max-width: 800px;
`;

const Title = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: #1e293b;
`;

const Section = styled.div`
  background: white;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);
  border: 1px solid #e2e8f0;
`;

const SectionTitle = styled.h2`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1e293b;
  margin-bottom: 1.5rem;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
`;

const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const Label = styled.label`
  font-weight: 600;
  color: #374151;
`;

const Input = styled.input`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const Select = styled.select`
  padding: 0.75rem;
  border: 1px solid #d1d5db;
  border-radius: 0.5rem;
  font-size: 1rem;
  background-color: white;
  transition: border-color 0.2s;

  &:focus {
    outline: none;
    border-color: #3b82f6;
    box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1);
  }
`;

const ToggleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

const Toggle = styled.label`
  position: relative;
  display: inline-block;
  width: 60px;
  height: 34px;
`;

const ToggleInput = styled.input`
  opacity: 0;
  width: 0;
  height: 0;

  &:checked + span {
    background-color: #3b82f6;
  }

  &:checked + span:before {
    transform: translateX(26px);
  }
`;

const ToggleSlider = styled.span`
  position: absolute;
  cursor: pointer;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #ccc;
  transition: 0.4s;
  border-radius: 34px;

  &:before {
    position: absolute;
    content: "";
    height: 26px;
    width: 26px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    transition: 0.4s;
    border-radius: 50%;
  }
`;

const Button = styled.button`
  padding: 0.75rem 1.5rem;
  background-color: #3b82f6;
  color: white;
  border: none;
  border-radius: 0.5rem;
  font-weight: 600;
  cursor: pointer;
  transition: background-color 0.2s;
  align-self: flex-start;

  &:hover {
    background-color: #2563eb;
  }

  &:disabled {
    background-color: #9ca3af;
    cursor: not-allowed;
  }
`;

const DangerButton = styled(Button)`
  background-color: #ef4444;

  &:hover {
    background-color: #dc2626;
  }
`;

export default function Settings() {
  const [settings, setSettings] = useState({
    name: '김비행',
    email: 'pilot@example.com',
    timezone: 'Asia/Seoul',
    language: 'ko',
    notifications: true,
    emailNotifications: false,
    darkMode: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Settings saved:', settings);
  };

  const handleChange = (field: string, value: any) => {
    setSettings(prev => ({ ...prev, [field]: value }));
  };

  return (
    <Container>
      <Title>설정</Title>

      <Section>
        <SectionTitle>프로필 정보</SectionTitle>
        <Form onSubmit={handleSubmit}>
          <FormGroup>
            <Label>이름</Label>
            <Input
              type="text"
              value={settings.name}
              onChange={(e) => handleChange('name', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>이메일</Label>
            <Input
              type="email"
              value={settings.email}
              onChange={(e) => handleChange('email', e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Label>시간대</Label>
            <Select
              value={settings.timezone}
              onChange={(e) => handleChange('timezone', e.target.value)}
            >
              <option value="Asia/Seoul">Asia/Seoul (UTC+9)</option>
              <option value="America/New_York">America/New_York (UTC-5)</option>
              <option value="Europe/London">Europe/London (UTC+0)</option>
            </Select>
          </FormGroup>
          <FormGroup>
            <Label>언어</Label>
            <Select
              value={settings.language}
              onChange={(e) => handleChange('language', e.target.value)}
            >
              <option value="ko">한국어</option>
              <option value="en">English</option>
            </Select>
          </FormGroup>
          <Button type="submit">저장</Button>
        </Form>
      </Section>

      <Section>
        <SectionTitle>알림 설정</SectionTitle>
        <Form>
          <ToggleContainer>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.notifications}
                onChange={(e) => handleChange('notifications', e.target.checked)}
              />
              <ToggleSlider />
            </Toggle>
            <span>앱 내 알림</span>
          </ToggleContainer>
          <ToggleContainer>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.emailNotifications}
                onChange={(e) => handleChange('emailNotifications', e.target.checked)}
              />
              <ToggleSlider />
            </Toggle>
            <span>이메일 알림</span>
          </ToggleContainer>
          <ToggleContainer>
            <Toggle>
              <ToggleInput
                type="checkbox"
                checked={settings.darkMode}
                onChange={(e) => handleChange('darkMode', e.target.checked)}
              />
              <ToggleSlider />
            </Toggle>
            <span>다크 모드</span>
          </ToggleContainer>
        </Form>
      </Section>

      <Section>
        <SectionTitle>계정 관리</SectionTitle>
        <Form>
          <Button type="button">비밀번호 변경</Button>
          <DangerButton type="button">계정 삭제</DangerButton>
        </Form>
      </Section>
    </Container>
  );
} 