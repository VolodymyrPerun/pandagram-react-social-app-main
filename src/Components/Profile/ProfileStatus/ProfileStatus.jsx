import React from "react";
import style from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {

    state = {
        editMode: true,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
        this.props.updateUserStatus(this.state.status);
    }

    onStatusChange = e => {
        this.setState({
            status: e.currentTarget.value
        })
    }

    render() {
        return (
            <div className={style.statusBlock}>
                {!this.state.editMode &&
                <div className={style.contentInfo}>
                    <span onClick={this.activateEditMode}>{this.props.status}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input onChange={this.onStatusChange} autoFocus={true} onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )

    }
}

export default ProfileStatus;
