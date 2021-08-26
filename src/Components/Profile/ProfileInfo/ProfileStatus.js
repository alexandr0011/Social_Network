import React from "react";

export class ProfileStatus extends React.Component{

    state = {
        editMode: false,
        status: this.props.status
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
        this.props.updateStatus(this.state.status);
    };

    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }
    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            });
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div onDoubleClick={this.activateEditMode}>{this.props.status || '_______'}</div>
                }
                {this.state.editMode &&
                    <div>
                        <input onChange={this.onStatusChange}
                               autoFocus={true}
                               onBlur={this.deactivateMode}
                               value={this.state.status}/>
                    </div>
                }
            </div>
        )
    }
}