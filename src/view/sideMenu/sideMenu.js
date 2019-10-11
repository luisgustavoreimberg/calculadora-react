import React, { Component } from 'react';
import './styles.css';
import '../history/history';

export default class SideMenu extends Component {
    state = {
        menuAberto: false,
        temaClaro: false,
        temaEscuro: false,
        historico: false
    };

    mudaStatusMenu = () => {
        const { menuAberto } = this.state;
        var parametro;
        parametro = menuAberto ? document.querySelector(".menuItens").classList.remove("menuVisivel") : document.querySelector(".menuItens").classList.add("menuVisivel");
        this.setState({ menuAberto: !menuAberto });
    };

    habilitaHistorico = () => {
        const { historico } = this.state;
        if(!historico){
            document.querySelector("history-bar").classList.add("history-bar-appear");
        }
    }

    render() {
        const { menuAberto, temaClaro, temaEscuro } = this.state;
        return (
            
            <aside className="menu">
                {/* <button className="hide-menu"></button> */}
                <div className="dropTemas">
                    <span>CALCULADORA V1.0</span>
                    <button className="actionTemas" onClick={this.mudaStatusMenu}>TEMAS</button>
                    <div className="menuItens">
                        <button className="tClaro" onClick={this.mudaTemaClaro}>CLARO</button>
                        <button className="tEscuro" onClick={this.mudaTemaEscuro}>ESCURO</button>
                    </div>
                    <button className="history-action">HISTÓRICO</button>
                </div>
                <span className="copyright">@2019 - Developed by Luis Gustavo G. Reimberg</span>
            </aside>
        )
    }
}