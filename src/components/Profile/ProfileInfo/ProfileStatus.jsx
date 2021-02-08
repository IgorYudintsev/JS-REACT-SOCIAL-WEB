import React from 'react';


export class ProfileStatus extends React.Component {
    state = {
        editMode: false
    }

    activateEditeMode=()=>{
        this.setState({
            editMode:true
            }
        )
    }
    deActivateEditeMode=()=>{
        this.setState({
                editMode:false
            }
        )
    }
    render() {
        return (
            <div>
                <div>
                    {!this.state.editMode
                        ? <span onDoubleClick={this.activateEditeMode}>{this.props.status}</span>
                        : <input onBlur={this.deActivateEditeMode} autoFocus={true} value={this.props.status}/>
                    }
                </div>
            </div>
        )
    }
}