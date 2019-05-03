import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path="/dialogs/" + props.id;

    return (
        <div className={s.dialog + ' ' + s.active}>
            <NavLink to={path}>
                {props.name}
            </NavLink>
        </div>
    )
}

const Message= (props) => {

    return (
        <div className={s.dialog}>
            {props.message}
        </div>
    )

}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name="Viktoria" id="1"/>
                <DialogItem name="Kirill" id="2"/>
                <DialogItem name="Roma" id="3"/>
                <DialogItem name="Katya" id="4"/>
                <DialogItem name="Anya" id="5"/>
                <DialogItem name="Tanya" id="6"/>
            </div>
            <div className={s.messages}>
                <Message  message="Hi" />
                <Message  message="How are you" />
                <Message  message="Wow" />
                <Message  message="How do u do?" />
                <Message  message="Lets go" />
                <Message  message="What are u doing now?" />
            </div>
        </div>
    )
}

export default Dialogs;