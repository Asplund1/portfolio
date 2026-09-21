import styled from "styled-components";

export const HeroSection = styled.header`
  max-width: 1040px;
  min-height: 520px;
  display: grid;
  grid-template-columns: minmax(0, 1fr) 230px;
  align-items: end;
  gap: 80px;
  padding: 88px 0 108px;

  @media (max-width: 900px) { grid-template-columns: minmax(0, 1fr) 190px; gap: 40px; }
  @media (max-width: 700px) { min-height: auto; grid-template-columns: 1fr; gap: 52px; padding: 70px 0 82px; }
`;

export const Intro = styled.div``;
export const Title = styled.h1`
  max-width: 800px;
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(3.8rem, 7.2vw, 7rem);
  line-height: 0.91;
  letter-spacing: -0.085em;
  @media (max-width: 700px) { font-size: clamp(2.7rem, 12vw, 3.7rem); line-height: 1.03; }
`;
export const Copy = styled.p`
  max-width: 560px;
  margin-top: 32px;
  color: #66706b;
  font-size: 1.12rem;
  line-height: 1.55;
  @media (max-width: 700px) { max-width: 100%; line-height: 1.65; }
`;
export const Actions = styled.div`
  margin-top: 32px;
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 12px;
`;
export const Aside = styled.div`
  align-self: end;
  padding: 18px 0 0 20px;
  border-left: 2px solid #f05a3c;
  color: #66706b;
  font-size: 0.92rem;
  line-height: 1.5;
  @media (max-width: 700px) { max-width: 280px; }
`;
export const AsideLabel = styled.p`
  margin-bottom: 10px;
  color: #1d2421;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.14em;
  text-transform: uppercase;
`;
export const Meta = styled.div`
  margin-top: 26px;
  padding-top: 16px;
  display: flex;
  align-items: center;
  gap: 10px;
  border-top: 1px solid #d7ddd7;
  color: #66706b;
  font-size: 0.84rem;
`;
export const StatusDot = styled.span`
  width: 9px;
  height: 9px;
  display: inline-block;
  flex: 0 0 auto;
  border-radius: 50%;
  background: #2c9a61;
  box-shadow: 0 0 0 5px rgba(44, 154, 97, 0.11);
`;
