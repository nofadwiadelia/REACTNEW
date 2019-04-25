import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Product from './Product';

class App extends Component {
  constructor(){
    super();
    this.state = {
      products : [
        {judul : 'Charger HP', keterangan : 'Lorem ipsum sit dolor amet'},
        {judul : 'Charger Laptop', keterangan : 'Lorem ipsum sit dolor amet'},
        {judul : 'Charger Powerbank', keterangan : 'Lorem ipsum sit dolor amet'},
        {judul : 'Charger Mobil', keterangan : 'Lorem ipsum sit dolor amet'},
      ]
    }
  }

  handleSubmit = (e) =>{
    e.preventDefault();
    let judul = this.refs.judul.value;
    let keterangan = this.refs.keterangan.value;

    // console.log("keterangan = "+keterangan+"judul = "+judul);
    this.state.products.push({judul,keterangan});
    this.setState({produts: this.state.products});

    this.refs.form.reset();
  }

  handleDelete = (key) => {
    this.state.products.splice(key,1);
    this.setState({products : this.state.products});
  }

  render() {
    return (

      <div className="row">
        <div className="col m4">
        <h3 className="card-title grey-text"><b>Tambah Produk</b></h3>
          <div className="card">
            <form action="#" ref="form" onSubmit={this.handleSubmit}>
              <div className="card-content">
                <div className="row">
                  <div class="input-field col s12">
                    <input ref="judul" type="text" class="validate"/>
                    <label >Judul</label>
                  </div>
                  <div class="input-field col s12">
                    <input ref="keterangan" type="text" class="validate"/>
                    <label for="keterangan">Keterangan </label>
                  </div>
                </div>
              </div>
              <div className="card-action">
                <button href="#">Submit</button>
              </div>
            </form>

          </div>
        </div>

        <div className="col m8">
          <div className="row">
            {this.state.products.map((data,key) =>{
              return (
                <Product hapusKartu={()=>this.handleDelete(key)} key={key} judul={data.judul} keterangan={data.keterangan} />
              )
            })}  

          </div>
        </div>

      </div>

    );
  }
}

export default App;
