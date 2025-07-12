'use client';

import styled from 'styled-components';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const SidebarContainer = styled.aside`
  width: 250px;
  background-color: #1e293b;
  color: white;
  padding: 1rem;
`;

const Logo = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
  padding: 1rem 0;
  border-bottom: 1px solid #334155;
  margin-bottom: 1rem;
`;

const NavList = styled.nav`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
`;

const NavItem = styled(Link)<{ $active?: boolean }>`
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.75rem 1rem;
  border-radius: 0.5rem;
  text-decoration: none;
  color: ${props => props.$active ? '#1e293b' : '#cbd5e1'};
  background-color: ${props => props.$active ? '#e2e8f0' : 'transparent'};
  transition: all 0.2s;

  &:hover {
    background-color: ${props => props.$active ? '#e2e8f0' : '#334155'};
    color: ${props => props.$active ? '#1e293b' : 'white'};
  }
`;

const menuItems = [
  { href: '/dashboard', label: '홈', icon: '🏠' },
  { href: '/flights', label: '비행기록', icon: '✈️' },
  { href: '/flights/statistics', label: '통계', icon: '📊' },
  { href: '/aircrafts', label: '비행기 관리', icon: '🛩️' },
  { href: '/settings', label: '설정', icon: '⚙️' },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <SidebarContainer>
      <Logo>Flog</Logo>
      <NavList>
        {menuItems.map((item) => (
          <NavItem
            key={item.href}
            href={item.href}
            $active={pathname === item.href}
          >
            <span>{item.icon}</span>
            {item.label}
          </NavItem>
        ))}
      </NavList>
    </SidebarContainer>
  );
} 