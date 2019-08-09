import React, { Component } from 'react';
import { connect } from 'react-redux';
import lifecycle from './assets/img/lifecycle.png';
import './App.css';
import List from './components/list/list';

class App extends Component<any, any> {
    render() {
        return (
            <div className="App">
                <header className="App-header">
                    Redux - это ценный инструмент для управлением вашем состоянием
                    <hr/>
                    <p>Установка:</p>
                    npm install --save redux
                    <p>Дополнительные пакеты:</p>
                    npm install --save react-redux
                    <br/>
                    npm install --save-dev redux-devtools
                    <br/>
                    <p>Life cycle</p>
                    <img src={lifecycle} alt=''/>
                    <br/>
                    <p>Действия (Actions) - это структуры, которые передают данные из вашего приложения в хранилище. Они являются
                        единственными
                        источниками информации для хранилища. Действия (Actions) описывают тот факт, что что-то совершилось, но не
                        определяют,
                        как в ответ изменяется состояние (state) приложения. Вы отправляете их в хранилище, используя метод
                        store.dispatch().</p>
                    <p>Редюсеры (Reducers) - определяют, как в ответ изменяется состояние (state) приложения</p>
                    <p>Хранилище (Store) - это объект, который соединяет эти части вместе. Хранилище берет на себя следующие задачи:</p>
                    <ul>
                        <li>содержит состояние приложения (application state);</li>
                        <li>предоставляет доступ к состоянию с помощью getState();</li>
                        <li>предоставляет возможность обновления состояния с помощью dispatch(action);</li>
                        <li>регистрирует слушателей (listeners) c помощью subscribe(listener).</li>
                    </ul>
                </header>
                <List/>
            </div>
        );
    }
}

export default connect(
    state => ({
        store: state
    }),
    dispatch => ({})
)(App);
