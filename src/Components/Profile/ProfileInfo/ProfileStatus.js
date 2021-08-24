import React from "react";

export class ProfileStatus extends React.Component{
    state = {
        editMode: false
    };

    activateEditMode = () => {
        this.setState({
            editMode: true
        })
    };

    deactivateMode = () => {
        this.setState({
            editMode: false
        })
    };

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>{this.props.status}</div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true}
                               onBlur={this.deactivateMode}
                               value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}