import React from "react";
import style from './ProfileStatus.module.scss'

class ProfileStatus extends React.Component {

    state = {
        editMode: true
    }

    activateEditMode = () => {
        debugger
        this.setState({
            editMode: true
        });
    }

    deactivateEditMode = () => {
        this.setState({
            editMode: false
        });
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
                    <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                </div>
                }
            </div>
        )

    }
}

export default ProfileStatus;
