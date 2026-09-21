import styled from "styled-components";
import { Section, Heading } from "./SectionStyles";

export { Section, Heading };
export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 18px;
  min-width: 0;
  @media (max-width: 900px) { grid-template-columns: 1fr; }
`;
export const Group = styled.div`
  min-width: 0;
  min-height: 180px;
  padding: 26px;
  border: 1px solid #d7ddd7;
  border-radius: 8px;
  background: ${({ $index }) => ($index === 1 ? "#e8ebe4" : $index === 2 ? "#f4e7df" : "#fffdf8")};
  h3 { margin-bottom: 26px; font-family: "Space Grotesk", sans-serif; font-size: 1.2rem; letter-spacing: -0.035em; }
  @media (max-width: 900px) { min-height: auto; }
`;
