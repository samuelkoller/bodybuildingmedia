import React from 'react'

import './PersonalInfo.css'
import {savePersonalInfo} from '../../../../redux/actions/userActions'
import Title from '../../../Title/Title'
import Input from '../../../RegInput/RegInput'
import { connect } from 'react-redux'

function PersonalInfo(props) {
        var ids = ['firstName', 'lastName', 'email', 'password', 'level', 'location', 'birthday']
        var inputs = ids.map((id, i) => {
            return (
                <Input key={id + i} id={id}
                    saveInputValue={props.saveInputValue}
                    name={props.user[i]}
                    class="register-inputs"
                />)
        })
        return (
            <div className="personal-info ">
                <Title title="personal info" />
                <div>
                    {inputs}
                </div>
            </div>
        )
}

function mapStateToProps(state) {
    return {
        userRegistered: state.userRegistered
    }
}

function mapDispatchToProps(dispatch) {
    return {
        savePersonalInfo: (data) => dispatch(savePersonalInfo(data))
    }
}

export default connect(mapStateToProps,mapDispatchToProps)(PersonalInfo)