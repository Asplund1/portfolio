import styled from "styled-components";
import { Section } from "./SectionStyles";

export { Section };
export const Layout = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 72px;
  align-items: start;
  border-top: 2px solid #1d2421;
  padding: 128px 0;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 26px; }
  @media (max-width: 700px) { padding: 82px 0; }
`;
export const Heading = styled.div`max-width: 500px;`;
export const Title = styled.h2`max-width: 440px; font-family: "Space Grotesk", sans-serif; font-size: clamp(2.4rem, 4.5vw, 4.2rem); line-height: 1.03; letter-spacing: -0.075em;`;
export const Copy = styled.div`max-width: 500px; padding-top: 34px; color: #66706b; font-size: 1rem; line-height: 1.6; p + p { margin-top: 18px; } @media (max-width: 900px) { padding-top: 0; max-width: 680px; }`;
