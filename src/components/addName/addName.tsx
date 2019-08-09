import React, { Component, RefObject } from 'react';
import { store } from '../../redux';
import './add-name.scss';
import { onAddName } from '../../redux/actions/names';

export class AddName extends Component {
    inputName: RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.inputName = React.createRef();
    }

    addName() {
        if (this.inputName.current) {
            store.dispatch(onAddName(this.inputName.current.value));
            this.inputName.current.value = '';
        }
    }

    enter(event: any) {
        if (event.key === 'Enter') {
            this.addName();
        }
    }

    render() {
        return (
            <div className='add-name'>
                <input type='text' ref={this.inputName} onKeyPress={this.enter.bind(this)}/>
                <button onClick={this.addName.bind(this)}>Add new name</button>
            </div>
        );
    }
}

export default AddName;