import React from 'react';


export class ProfileStatus extends React.Component {
    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditeMode = () => {
        this.setState({
                editMode: true
            }
        )
    }
    deActivateEditeMode  () {
        this.setState({
                editMode: false
            }
        )
        this.props.updateStatus(this.state.status)
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        });
    }

    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode
                        ? <span
                            onDoubleClick={this.activateEditeMode}>
                            {this.props.status || '---'}</span>
                        : <input
                            onChange={this.onStatusChange}
                            onBlur={this.deActivateEditeMode.bind(this)} autoFocus={true}
                            value={this.state.status}/>
                    }
                </div>
            </div>
        )
    }


}
