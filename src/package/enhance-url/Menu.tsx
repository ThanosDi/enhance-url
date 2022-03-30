import IconButton from '@mui/material/IconButton';
import { OpenInNew, Preview } from '@mui/icons-material';
import { MenuProps } from './types';
import { openInNewTab } from './tools';

const menuIconStyle = { p: 0, ':hover': { opacity: '0.7' } };

const Menu = ({ enableNewWindow, enableIframe, handleClickOpenDialog, url }: MenuProps) => (
    <>
        {enableNewWindow && (
            <IconButton
                color="primary"
                data-testid="new-window-button"
                aria-label="upload picture"
                component="span"
                onClick={() => openInNewTab(url)}
                title="Open in new window"
                sx={menuIconStyle}
            >
                <OpenInNew fontSize="small" />
            </IconButton>
        )}
        {enableIframe && (
            <IconButton
                color="primary"
                data-testid="iframe-button"
                aria-label="upload picture"
                component="span"
                onClick={handleClickOpenDialog}
                title="Preview url"
                sx={menuIconStyle}
            >
                <Preview fontSize="small" />
            </IconButton>
        )}
    </>
);

export default Menu;
