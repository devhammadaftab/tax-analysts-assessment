import { Typography } from "@mui/material";
interface Data{
  message:string
}
const RecordNotFound: React.FC<Data>  = ({message='Record not Found'}:Data) => {
  
  return <Typography sx={{color:'black', textAlign:'center' }} >{message}</Typography>;
};

export default RecordNotFound;
