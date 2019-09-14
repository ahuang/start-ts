import * as React from "react";

export interface HelloProps { 
    firstName: string; 
    lastName: string; 
};

// // 组件写法2
// // 'HelloProps' describes the shape of props.
// // State is never set so we use the '{}' type.
export class Hello extends React.Component<HelloProps, {}> {
    render() {
        return (
        <h1>
           hello, {this.props.firstName} {this.props.lastName}!
        </h1>
        );
    }
}
