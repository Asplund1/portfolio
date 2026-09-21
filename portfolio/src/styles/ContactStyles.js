import styled from "styled-components";

export const ContactSection = styled.section`
  margin: 112px 0 48px;
  padding: clamp(38px, 7vw, 74px);
  border-radius: 8px;
  background: #1d2421;
  color: white;
  h2 { font-family: "Space Grotesk", sans-serif; font-size: clamp(2.4rem, 4.5vw, 4.2rem); line-height: 1.03; letter-spacing: -0.075em; }
  & > p { max-width: 560px; margin-top: 20px; color: #b7b7b7; line-height: 1.55; }
  @media (max-width: 700px) { margin-top: 82px; }
`;
export const Eyebrow = styled.p`margin-bottom: 18px; color: #91adff; font-size: 0.7rem; font-weight: 700; letter-spacing: 0.16em; text-transform: uppercase;`;
export const Links = styled.div`margin-top: 34px; display: flex; align-items: center; flex-wrap: wrap; gap: 12px;`;
export const LightButton = styled.a`min-height: 48px; display: inline-flex; align-items: center; justify-content: center; padding: 0 20px; border-radius: 5px; background: white; color: #1d2421; font-size: 0.94rem; font-weight: 600; &:hover { background: #e8e4dd; }`;
export const DarkButton = styled.a`min-height: 48px; display: inline-flex; align-items: center; justify-content: center; padding: 0 20px; border: 1px solid #4a4a4a; border-radius: 5px; color: white; font-size: 0.94rem; font-weight: 600;`;
export const Link = styled.a`color: #b7b7b7; font-weight: 600; &:hover { color: white; }`;
