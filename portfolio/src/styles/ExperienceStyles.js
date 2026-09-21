import styled from "styled-components";
import { Section, Heading } from "./SectionStyles";

export { Section, Heading };
export const List = styled.div`border-top: 1px solid #d7ddd7;`;
export const Item = styled.article`
  padding: 34px 0;
  display: grid;
  grid-template-columns: 0.85fr 1.15fr;
  gap: 54px;
  border-bottom: 1px solid #d7ddd7;
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 18px; }
`;
export const Period = styled.p`color: #66706b; font-size: 0.88rem;`;
export const Role = styled.h3`margin-top: 7px; font-family: "Space Grotesk", sans-serif; font-size: 1.35rem; letter-spacing: -0.035em;`;
export const Company = styled.p`margin-top: 4px; color: #66706b; font-size: 0.88rem;`;
export const Description = styled.p`color: #66706b; font-size: 1rem;`;
