import React from 'react';
import './Product.css';
import logo from './logo.svg';
import './App.css';

class Product extends React.Component {
    render() {
        return (

                <div className="col m6 s6">
                    <div className="card">
                        <div className="card-image">
                            <img src={logo} className="App-logo" alt="logo"/>
                            <br></br>
                            <span class="card-title activator grey-text"> {this.props.judul}</span>
                            <a class="btn-floating halfway-fab waves-effect waves-light red"><i class="material-icons">add</i></a>
                        </div>
                            
                        <div className="card-content black-text">
                            <p>{this.props.keterangan}</p>
                        </div>
                        <div className="card-action">
                            <a onClick={this.props.hapusKartu} className="waves-effect waves-light">HAPUS
                                <i className="material-icons left">delete</i>
                            </a>
                        </div>
                    </div>
                </div>


        );
    }
}

export default Product;