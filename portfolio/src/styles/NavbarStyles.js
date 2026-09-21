import styled from "styled-components";

export const Nav = styled.nav`
  min-height: 78px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 32px;
  border-bottom: 2px solid #1d2421;

  @media (max-width: 700px) { min-height: 72px; }
`;

export const Brand = styled.a`
  font-family: "Space Grotesk", sans-serif;
  font-weight: 700;
  letter-spacing: -0.06em;
  font-size: 1.12rem;
`;

export const Links = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  color: #66706b;
  font-size: 0.84rem;
  font-weight: 500;

  a:hover { color: #f05a3c; }
  @media (max-width: 700px) { display: none; }
`;
