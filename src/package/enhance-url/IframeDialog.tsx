import Iframe from 'react-iframe';
import { Dialog } from '@mui/material';
import { IframeDialogProps } from './types';

const IframeDialog = ({
    text,
    url,
    openDialog,
    handleCloseDialog,
    handleCloseMenu,
}: IframeDialogProps) => (
    <Dialog
        open={openDialog}
        data-testid="iframe-container"
        onClose={() => {
            handleCloseDialog();
            handleCloseMenu();
        }}
        aria-labelledby={text}
        aria-describedby={text}
        maxWidth="xl"
        fullWidth
        sx={{ height: '90vh', '& .MuiPaper-root': { height: '90vh' } }}
    >
        <Iframe url={url} width="100%" height="100%" id="enhance-url-iframe-id" />
    </Dialog>
);

export default IframeDialog;
