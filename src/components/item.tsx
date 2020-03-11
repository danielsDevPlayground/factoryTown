import * as React from "react";

interface ItemProps {
    name: string;
    count?: number;
    label?: string;
    isCompact?: boolean;
    alignment?: string
}

export class Item extends React.Component<ItemProps, {}> {
    render() {
        return <div style={{ display: 'flex', alignItems: 'center', fontSize: this.props.isCompact ? '12pt' : '14pt', justifyContent: this.props.alignment || 'flex-end' }} title={this.props.name}>
            <div style={{ paddingLeft: '4px', paddingRight: '4px' }}>
                {this.props.count > 0 && `${this.props.count}x`}
            </div>
            <img
                width={this.props.isCompact ? '16px' : '20px'}
                src={require(`../icons/20px-${this.props.name}.png`)}
                alt={this.props.name} />
            {this.props.label && <div style={{ paddingLeft: '4px' }}>
                {this.props.label}
                </div>}
        </div>
    }
}
