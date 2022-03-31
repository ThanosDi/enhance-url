import { SxProps } from '@mui/system';
export type EnhanceUrlProps = {
    url: string;
    text: string;
    target?: string;
    enableIframe?: boolean;
    enableNewWindow?: boolean;
    sx?: SxProps;
};
export type IframeDialogProps = {
    url: string;
    text: string;
    openDialog: boolean;
    handleCloseDialog: () => void;
    handleCloseMenu: () => void;
};
export type MenuProps = Omit<EnhanceUrlProps, 'text' | 'target'> & {
    handleClickOpenDialog: () => void;
    handleClose: () => void;
};
