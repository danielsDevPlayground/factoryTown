import * as React from "react";
import Popover from '@material-ui/core/Popover';

interface CustomPopoverProps {
    id: string;
    open:boolean;
    onClose:()=>void;
    anchorEl: HTMLElement;
}

export const CustomPopover: React.FC<CustomPopoverProps> = (props) => {
    return <Popover
        id={props.id}
        open={props.open}
        onClose={props.onClose}
        anchorEl={props.anchorEl}
        anchorOrigin={{
            vertical: 'bottom',
            horizontal: 'right',
        }}
        transformOrigin={{
            vertical: 'top',
            horizontal: 'center',
        }}
    >
        {props.children}
    </Popover>;
}
