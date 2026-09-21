import styled from "styled-components";

export const Section = styled.section`
  padding: 128px 0;
  border-top: 2px solid #1d2421;
  @media (max-width: 700px) { padding: 82px 0; }
`;
export const Heading = styled.div`
  max-width: 720px;
  margin-bottom: ${({ compact }) => (compact ? "38px" : "56px")};
`;
export const HeadingTitle = styled.h2`
  font-family: "Space Grotesk", sans-serif;
  font-size: clamp(2.4rem, 4.5vw, 4.2rem);
  line-height: 1.03;
  letter-spacing: -0.075em;
`;
export const HeadingCopy = styled.p`
  max-width: 650px;
  margin-top: 20px;
  color: #66706b;
  font-size: 1.05rem;
`;
