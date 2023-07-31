import styled from '@emotion/styled';

export const MainHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  position: sticky;
  top: 0;
  left: 0;
  border-bottom: 1px solid grey;
  margin: auto;
  background: white;
  z-index: 10;
`;
export const Heading3 = styled.h3`
  font-weight: bold;
  color: black;
`;

export const HeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  width: 20%;
`;

export const ProfileDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: vmax;
  text-wrap: wrap;
`;

export const HeaderSpan = styled.span`
  color: black;
  cursor: pointer;
  margin: 0.2vmax;
`;
