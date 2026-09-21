import styled from "styled-components";

export const Feature = styled.article`
  position: relative;
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(320px, 0.92fr);
  gap: 72px;
  align-items: center;
  &::before { content: "Project " counter(project, decimal-leading-zero); counter-increment: project; position: absolute; top: -34px; right: 0; color: #f05a3c; font-family: "Space Grotesk", sans-serif; font-size: 0.8rem; font-weight: 700; }
  ${({ $reverse }) => $reverse && `& > div:first-child { order: 2; } & > div:last-child { order: 1; }`}
  @media (max-width: 900px) { grid-template-columns: 1fr; gap: 36px; & > div { order: initial !important; } }
  @media (max-width: 700px) { &::before { top: -24px; } }
`;
export const Visual = styled.div`
  min-height: 470px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: clamp(22px, 4vw, 52px);
  overflow: hidden;
  border: 1px solid rgba(23, 23, 23, 0.08);
  border-radius: 18px;
  background: linear-gradient(145deg, rgba(240, 90, 60, 0.18), rgba(255, 255, 255, 0.35)), #e9e5da;
  ${Feature}:nth-child(2) & { background: #e8e0d7; }
  @media (max-width: 900px) { min-height: 380px; }
  @media (max-width: 700px) { min-height: 300px; padding: 18px; border-radius: 22px; }
`;
export const ImageVisual = styled(Visual)`
  min-height: 480px;
  padding: clamp(18px, 2.6vw, 34px);
  background: #e6ebe3;
  @media (max-width: 900px) { min-height: 410px; }
  @media (max-width: 700px) { min-height: auto; padding: 14px; }
`;
export const ImageStack = styled.div`
  width: min(100%, 760px);
  display: grid;
  gap: 14px;
`;
export const Preview = styled.figure`
  overflow: hidden;
  border: 1px solid rgba(23, 23, 23, 0.12);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 16px 42px rgba(28, 25, 20, 0.12);
  &:first-child img { max-height: 390px; }
  &:nth-child(2) { width: 72%; justify-self: end; margin-top: -54px; }
  &:nth-child(2) img { max-height: 230px; }
  img { width: 100%; height: auto; display: block; object-fit: cover; object-position: top left; }
  @media (max-width: 900px) { &:first-child img { max-height: 340px; } }
  @media (max-width: 700px) { &:nth-child(2) { width: 86%; margin-top: -28px; } img { max-height: none !important; } }
`;
export const Window = styled.div`
  width: min(100%, 620px);
  overflow: hidden;
  border: 1px solid rgba(23, 23, 23, 0.12);
  border-radius: 18px;
  background: #fff;
  box-shadow: 0 24px 60px rgba(29, 36, 33, 0.12);
  transform: rotate(-1.4deg);
`;
export const WindowBar = styled.div`
  height: 42px; display: flex; align-items: center; gap: 7px; padding: 0 16px; border-bottom: 1px solid #ece9e2; background: #f7f6f2;
  span { width: 8px; height: 8px; border-radius: 50%; background: #c7c2b8; }
`;
export const VisualContent = styled.div`
  min-height: 280px; padding: 38px; display: flex; flex-direction: column; justify-content: flex-end;
  p { margin-bottom: 8px; color: #f05a3c; font-size: 0.77rem; font-weight: 700; letter-spacing: 0.1em; text-transform: uppercase; }
  strong { max-width: 420px; font-family: "Space Grotesk", sans-serif; font-size: clamp(1.7rem, 3vw, 2.65rem); line-height: 1.02; letter-spacing: -0.045em; }
`;
export const VisualItems = styled.div`
  margin-top: 28px; display: grid; grid-template-columns: repeat(3, 1fr); gap: 8px;
  span { padding: 12px 10px; border: 1px solid #e6e2da; border-radius: 11px; background: #faf9f6; color: #67625a; font-size: 0.78rem; font-weight: 600; text-align: center; }
  @media (max-width: 700px) { grid-template-columns: 1fr; }
`;
export const Details = styled.div``;
export const Kicker = styled.div`display: flex; align-items: center; gap: 12px; p { margin-bottom: 0; }`;
export const Number = styled.span`color: #1d2421; font-family: "Space Grotesk", sans-serif; font-size: 0.78rem; font-weight: 700;`;
export const Title = styled.h3`font-family: "Space Grotesk", sans-serif; font-size: clamp(1.9rem, 3.2vw, 2.9rem); line-height: 1.05; letter-spacing: -0.05em;`;
export const Summary = styled.p`margin-top: 20px; color: #1d2421; font-size: 1.05rem;`;
export const Contribution = styled.p`max-width: 520px; margin-top: 14px; color: #66706b; line-height: 1.55;`;
export const CardTags = styled.div`margin-top: 25px;`;
export const ProjectLink = styled.a`display: inline-block; margin-top: 25px; color: #f05a3c; font-weight: 700; &:hover { color: #c8422a; }`;
export const Note = styled.p`margin-top: 25px; color: #87827b; font-size: 0.88rem; font-weight: 600;`;
