import * as React from "react";

interface ProducerProps {
    name: string;
}

export const Producer: React.FC<ProducerProps> = (props) => {
    return <div
        style={{ display: 'flex', alignItems: 'center', fontSize: "14pt", justifyContent: 'flex-end' }}
        title={props.name}
    >
        <img style={{ paddingRight: '4px' }} src={require(`../icons/20px-${props.name}.png`)} alt={props.name} /> {props.name}
    </div>
}
