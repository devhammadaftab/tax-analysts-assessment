import { Typography, Modal, Box, List, ListItem, ListItemButton, ListItemText, Grid, Button } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { Item } from '@/pages/home';
import { ModalBox } from '@/styles';


interface Data {
    data: Item,
    open: boolean,
    setOpen: (p: boolean) => void
}
interface ListProps {
    items: []
}
const DetailModal: React.FC<Data> = ({ data, open, setOpen }: Data) => {

    const handleClose = () => setOpen(false);

    return (
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description"
        >
            <ModalBox>
                <Typography sx={{ textAlign: 'right' }} variant="h6" component="div">
                    <Button variant="outlined" startIcon={<CloseIcon />} onClick={handleClose} sx={{
                        border: 'none', padding: 0, minWidth: 'auto', "&:hover": {
                            border: 'none',
                            backgroundColor: 'transparent'
                        }
                    }} />

                </Typography>
                <Typography  variant="h5"  component="h2">
                    Details
                </Typography>
                <Box sx={{ paddingY: 5 }} >

                    <Typography sx={{ textAlign: 'center' }} id="modal-modal-title" variant="h6" component="h4">
                        {data?.title}
                    </Typography>

                </Box>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography id="modal-modal-description" sx={{ mt: 4, fontWeight: 'bold' }} variant="h6" component="p">
                                Abstracts:
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {data?.abstract?.length ? <CheckboxList items={data?.abstract} /> : null}
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box>
                            <Typography id="modal-modal-description" sx={{ mt: 4, fontWeight: 'bold' }} variant="h6" component="p">
                                Products:
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                {data?.product_name?.length ? <CheckboxList items={data?.product_name} /> : null}
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
                <Grid container spacing={2}>
                    <Grid item xs={6}>
                        <Box>
                            <Typography id="modal-modal-description" sx={{ mt: 4, fontWeight: 'bold' }} variant="h6" component="p">
                                Authors:
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="p">
                                {data?.authors?.length ? <CheckboxList items={data?.authors} /> : null}
                            </Typography>

                        </Box>
                    </Grid>
                    <Grid item xs={6}>
                        <Box sx={{ textAlign: 'left' }}>
                            <Typography id="modal-modal-description" sx={{ mt: 4, fontWeight: 'bold' }} variant="h6" component="p">
                                Document types:
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }} component="p">
                                {data?.document_type?.length ? <CheckboxList items={data?.document_type} /> : null}
                            </Typography>

                        </Box>
                    </Grid>
                </Grid>
                <Typography id="modal-modal-description" sx={{ mt: 10, textAlign: 'right' }} variant="h5" component="h5">
                    {data.date}
                </Typography>
            </ModalBox>
        </Modal>
    );
}
export default DetailModal



const CheckboxList = ({ items }: ListProps) => {
    return (
        <List sx={{ width: 'auto', maxWidth: 360, bgcolor: 'background.paper', paddingLeft: 2, textAlign: 'left' }}>
            {items.map((value: string) => {
                return (
                    <ListItem
                        key={value}
                        disablePadding
                    >
                        <ListItemButton role={undefined} dense>
                            <ListItemText primary={value} />
                        </ListItemButton>
                    </ListItem>
                );
            })}
        </List>
    );
}