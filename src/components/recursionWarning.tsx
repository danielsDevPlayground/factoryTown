import * as React from "react";

export class RecursionWarningDialog extends React.Component<{ showError: boolean }> {
    render() {
        return this.props.showError
            ? <div style={{ border: "2px solid red", borderRadius: '4px', padding: '12px' }}>
                It looks like you have created some items, that depend on each other in a circular way!<br />
                The calculation has been stopped.<br />
                (Bad) Example: WOOD needs PAPER to be crafted, but PAPER also needs WOOD<br />
                Look into the console for more details!
            </div>
            : null;
    }
}
