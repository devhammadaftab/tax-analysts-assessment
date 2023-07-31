import { useState } from 'react';
import { List, ListItem, Divider, ListItemText, ListItemAvatar, Avatar, Typography } from '@mui/material';
import DetailModal from '@/components/modal';
import { Item } from '.';

export interface Data {
  data:Item
}

const ListItems: React.FC<Data> = ({ data }: Data) => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => setOpen(true);

  return (
    <>
    <DetailModal data={data} open={open} setOpen={setOpen}/>
      <List style={{ width: '100%' }} onClick={handleOpen}>
        <ListItem alignItems='flex-start'>
          <ListItemAvatar>
            <Avatar alt='Remy Sharp' src='/static/images/avatar/1.jpg' />
          </ListItemAvatar>
          <ListItemText
            style={{ color: 'black' }}
            primary={data?.title}
            secondary={
              <>
                <Typography sx={{ display: 'inline' }} component='span' variant='body2' color='black'>
                  {data?.document_type} -
                </Typography>{' '}
              </>
            }
          />
        </ListItem>
        <Divider variant='inset' component='li' />
      </List>
    </>
  );
};
export default ListItems;
