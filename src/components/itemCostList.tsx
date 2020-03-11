import * as React from "react";
import { CustomPopover } from "./popover";
import { Item } from "./item";
import { ItemCount } from "../utils/interfaces/generalInterfaces";

interface ItemProps {
    itemObject: ItemCount;
}

export const ItemCostList: React.FC<ItemProps> = (props) => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    let itemObject = props.itemObject;
    let keys = Object.keys(props.itemObject);

    return <div
        style={{ display: 'flex' }}
        onClick={(e) => {
            console.log(anchorEl);
            !anchorEl && setAnchorEl(e.currentTarget)
        }}
        aria-describedby={id}
    >
        {props.itemObject && (
            [...keys].splice(0, 4).map(name => {
                return itemObject[name] && <Item name={name} count={itemObject[name]} key={name + '|' + itemObject[name]} isCompact={keys.length>=4}/>;
            })
        )}
        <div style={{ fontSize: keys.length>4?"12py":"14pt", paddingLeft:"4px" }}>{keys.length > 4 ? `(+${keys.length - 4})` : null}</div>
        {keys.length > 4 && <CustomPopover
            id={id}
            open={open}
            onClose={() => setAnchorEl(null)}
            anchorEl={anchorEl}
        >
            <div style={{ display: 'flex', flexDirection: 'column', padding: '10px' }}>
                {props.itemObject && (
                    keys.map(name => {
                        return itemObject[name] && <Item name={name} count={itemObject[name]} key={name + '|' + itemObject[name]} />;
                    })
                )}
            </div>
        </CustomPopover>}
    </div>
}
