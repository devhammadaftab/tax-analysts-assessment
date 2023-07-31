import { MainHeaderDiv, HeaderSpan, HeaderDiv, Heading3, ProfileDiv } from '../../styles';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';

const Header = () => {
  return (
    <MainHeaderDiv>
      <Heading3>TaxNotes</Heading3>
      <HeaderDiv>
        <HeaderSpan>Home</HeaderSpan>
        <HeaderSpan>Search</HeaderSpan>
      </HeaderDiv>
      <ProfileDiv>
        <HeaderSpan>User</HeaderSpan>
        <PersonOutlinedIcon style={{ fontSize: '38px', color: 'black', cursor: 'pointer' }} />
      </ProfileDiv>
    </MainHeaderDiv>
  );
};

export default Header;
