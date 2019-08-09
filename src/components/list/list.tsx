import React, { Component, RefObject } from 'react';
import { store } from '../../redux';
import './list.scss';
import { onDeleteName, onFilterName } from '../../redux/actions/names';
import AddName from '../addName/addName';

export class List extends Component {
    inputName: RefObject<HTMLInputElement>;

    constructor(props: any) {
        super(props);
        this.inputName = React.createRef();
    }

    keyPress(event: any) {
        store.dispatch(onFilterName(event.target.value));
    }

    deleteName(name: string) {
        const names = store.getState().nameList.names,
            newNames = names.filter((i: string) => i !== name);

        store.dispatch(onDeleteName(newNames));
    }

    render() {
        const names = store.getState().nameList.names,
            filter = store.getState().nameList.filter;
        if (names.length) {
            return (
                <div className='list'>
                    <div className="add-name">
                        <AddName/>
                    </div>
                    <label>Filter for names
                        <input type='text' ref={this.inputName} onKeyUp={this.keyPress}/>
                    </label>
                    <ul>
                        {
                            names
                                .filter((name: string) => name.includes(filter))
                                .map((name: string, index: any) =>
                                    <li key={index}>
                                        {name}
                                        <button onClick={() => this.deleteName(name)}>X</button>
                                    </li>
                                )
                        }
                    </ul>
                </div>
            );
        } else {
            return (
                <div className='list'>
                    No data!
                </div>
            );
        }

    }
}

export default List;