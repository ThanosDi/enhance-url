import React from 'react';
import { Popper, Link, Box, ClickAwayListener } from '@mui/material';
import { EnhanceUrlProps } from './types';
import Menu from './Menu';
import IframeDialog from './IframeDialog';

const EnhanceUrl = ({
    url,
    text,
    target = '_self',
    enableIframe = true,
    enableNewWindow = true,
    sx = {},
}: EnhanceUrlProps) => {
    const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
    const [openDialog, setOpenDialog] = React.useState(false);

    const open = Boolean(anchorEl);
    const id = open ? 'simple-popper' : undefined;

    const handleMouseOver = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    const handleClickOpenDialog = () => {
        setOpenDialog(true);
    };
    const handleCloseDialog = () => {
        setOpenDialog(false);
    };

    return (
        <ClickAwayListener onClickAway={handleClose}>
            <Box
                component="span"
                sx={{ display: 'inline-block', ...sx }}
                onMouseOver={(e: React.MouseEvent<HTMLButtonElement>) => handleMouseOver(e)}
                onMouseLeave={handleClose}
            >
                <Popper
                    id={id}
                    data-testid="menu-container"
                    open={open}
                    anchorEl={anchorEl}
                    placement="right"
                    sx={{ background: 'white' }}
                    disablePortal
                >
                    <Menu
                        enableNewWindow={enableNewWindow}
                        enableIframe={enableIframe}
                        url={url}
                        handleClickOpenDialog={handleClickOpenDialog}
                        handleClose={handleClose}
                    />
                </Popper>
                <Link rel="nofollow" data-testid="link-url" href={url} target={target}>
                    {text}
                </Link>
                <IframeDialog
                    openDialog={openDialog}
                    handleCloseDialog={handleCloseDialog}
                    handleCloseMenu={handleClose}
                    text={text}
                    url={url}
                />
            </Box>
        </ClickAwayListener>
    );
};
export default EnhanceUrl;
