import React, { Component } from 'react';
import './styles.css';

export default class Screen extends Component {
    state = {
        tela: "00",
        numeroA: 0,
        numeroB: 0,
        operador: false,
    };

    // operador = (caractere, tipo) => {
    //     const { tela, numeroA, numeroB, operador } = this.state;
    //     if(tipo==1){
            
    //     }else if(tipo==2){

    //     }else if(tipo==3){

    //     }else{
    //         alert("REINICIANDO A PÁGINA POR CAUSA DE UM ERRO INESPERADO!");
    //         // location.reload();
    //     }
    // };


    render() {
        const { tela } = this.state;
        return (
            <div className="main-screen">
                <div className="main-work-screen">
                    <div className="operation-and-result">{tela}</div>
                </div>
                <div className="main-buttons">
                    <button className="btn-config" onClick={(e) => this.operador("CLEAR", 3)}>C</button>
                    <button className="btn-config" onClick={(e) => this.operador("DEL", 3)}>DEL</button>
                    <button className="btn-config">M</button>
                    <button className="btn-config" onClick={(e) => this.operador("+", 2)}>+</button>
                    <button className="btn-n1" onClick={(e) => this.operador("1", 1)}>1</button>
                    <button className="btn-n2" onClick={(e) => this.operador("2", 1)}>2</button>
                    <button className="btn-n3" onClick={(e) => this.operador("3", 1)}>3</button>
                    <button className="btn-config" onClick={(e) => this.operador("-", 2)}>-</button>
                    <button className="btn-n4" onClick={(e) => this.operador("4", 1)}>4</button>
                    <button className="btn-n5" onClick={(e) => this.operador("5", 1)}>5</button>
                    <button className="btn-n6" onClick={(e) => this.operador("6", 1)}>6</button>
                    <button className="btn-config" onClick={(e) => this.operador("x", 2)}>X</button>
                    <button className="btn-n7" onClick={(e) => this.operador("7", 1)}>7</button>
                    <button className="btn-n8" onClick={(e) => this.operador("8", 1)}>8</button>
                    <button className="btn-n9" onClick={(e) => this.operador("9", 1)}>9</button>
                    <button className="btn-config" onClick={(e) => this.operador("/", 2)}>/</button>
                    <button className="btn-n0" onClick={(e) => this.operador("0", 1)}>0</button>
                    <button className="btn-result" onClick={(e) => this.operador("EQUALS", 3)}>=</button>
                </div>
            </div>
        )
    }

}
