import React, { Component, RefObject } from 'react';
import { connect } from 'react-redux';
import { store } from '../../redux';
import './add-name.scss';
import { onAddName } from '../../redux/actions/names';

const mapStateToProps = (state: any) => ({
    store: state
});

const mapDispatchToProps = (dispatch: any) => ({
    dispatch: () => {
    }
});

export class AddName extends Component<any, any> {
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
        const allNames = this.props.store.nameList.names.length
            ? <p>All names from props: {this.props.store.nameList.names.join('; ')}</p>
            : '';

        return (
            <div className='add-name'>
                <input type='text' ref={this.inputName} onKeyPress={this.enter.bind(this)}/>
                <button onClick={this.addName.bind(this)}>Add new name</button>
                {allNames}
            </div>
        );
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddName);