import styled from "styled-components";

export const Featured = styled.div`
  display: grid;
  gap: 96px;
`;
export const Other = styled.div`
  margin-top: 96px;
  padding: 32px;
  display: grid;
  grid-template-columns: 1.3fr 0.7fr;
  gap: 32px;
  border: 1px solid #d7ddd7;
  border-radius: 12px;
  background: rgba(255, 255, 255, 0.35);
  h3 { font-family: "Space Grotesk", sans-serif; font-size: 1.6rem; letter-spacing: -0.035em; }
  p:last-child { max-width: 650px; margin-top: 10px; color: #66706b; }
  @media (max-width: 900px) { grid-template-columns: 1fr; }
  @media (max-width: 700px) { margin-top: 72px; padding: 24px; }
`;
export const OtherMeta = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  @media (max-width: 900px) { margin-top: 4px; }
`;
