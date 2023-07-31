import styled from '@emotion/styled';
import { TextField } from '@mui/material';

export const SearchHeading = styled.h1`
  color: black;
  font-size: 2.5vmax;
`;

export const SearchDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;
  background: #f2f6f4;
  border-radius: 10px;
  margin: 3rem auto;
`;
export const ListDiv = styled.div`
  height: 70vh;
  width: 80%;
  overflow-y: auto;
`;

export const MainBox = styled(TextField)`
  width: 80%;
  margin-top: 2rem;
  padding-bottom: 2vmax;
  .MuiFormHelperText-root {
    color: black;
  }
  #standard-helperText {
    color: black;
  }
  .MuiFormLabel-root {
    color: black;
  }
`;
