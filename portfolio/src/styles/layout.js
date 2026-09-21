import styled from "styled-components";

export const Shell = styled.div`
  width: min(1160px, calc(100% - 56px));
  margin: 0 auto;

  @media (max-width: 700px) {
    width: min(100% - 30px, 1160px);
  }
`;

export const Footer = styled.footer`
  min-height: 90px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
  border-top: 1px solid #d7ddd7;
  color: #66706b;
  font-size: 0.84rem;

  @media (max-width: 700px) {
    align-items: flex-start;
    flex-direction: column;
    justify-content: center;
  }
`;

export const Eyebrow = styled.p`
  margin-bottom: 18px;
  color: #f05a3c;
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.16em;
  text-transform: uppercase;
`;

export const Button = styled.a`
  min-height: 48px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 0 20px;
  border: 1px solid transparent;
  border-radius: 5px;
  font-size: 0.94rem;
  font-weight: 600;
  transition: transform 160ms ease, background-color 160ms ease, border-color 160ms ease;

  &:hover { transform: translateY(-2px); }
`;

export const PrimaryButton = styled(Button)`
  background: #1d2421;
  color: white;
  &:hover { background: #c8422a; }
`;

export const SecondaryButton = styled(Button)`
  border-color: #d7ddd7;
  background: rgba(255, 255, 255, 0.45);
  &:hover { border-color: #aaa59c; }
`;

export const TextLink = styled.a`
  margin-left: 8px;
  color: #66706b;
  font-weight: 600;
  &:hover { color: #f05a3c; }
`;

export const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;

  span {
    padding: 7px 11px;
    border: 1px solid #d7ddd7;
    border-radius: 4px;
    background: rgba(255, 255, 255, 0.4);
    color: #4e4b46;
    font-size: 0.78rem;
    font-weight: 600;
  }
`;
