import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class EditProduct extends Component {
  constructor(props) {
    super(props);
    this.onChangeProductName=this.onChangeProductName.bind(this);
    this.onChangeProductCodigo=this.onChangeProductCodigo.bind(this);
    this.onChangeProductCant=this.onChangeProductCant.bind(this);
    this.onSubmit=this.onSubmit.bind(this);
    this.state={
        name:"",
        codigo:"",
        cant:"",
    };
  }

  componentDidMount(){
    axios
      .get(
        "http://localhost:4000/products/edit-product/" + this.props.match.params.id)
      .then((res) => {
        this.setState({
          name: res.data.name,
          codigo: res.data.codigo,
          cant: res.data.cant,
        });
      })
      .catch((error) => {
        console.log(error);
      });
  }

onChangeProductName(e){
    this.setState({name:e.target.value})
}

onChangeProductCodigo(e){
    this.setState({codigo:e.target.value})
}

onChangeProductCant(e){
    this.setState({cant:e.target.value})
}

onSubmit(){
    //e.PreventDefault();
    const productObject={
        name:this.state.name,
        codigo:this.state.codigo,
        cant:this.state.cant,
    };
    axios
      .put(
        "http://localhost:4000/products/update-product/" + this.props.match.params.id,productObject)
      .then((res) => {
        console.log(res.data);
        console.log("Product successfully updated");
      })
      .catch((error) => {
        console.log(error);
      });

    // Redirect to Student List
    this.props.history.push("/product-list");
  }

  render() {
    return (
      <div className="form-wrapper">
        <Form onSubmit={this.onSubmit}>
        <Form.Group controlId="Codigo">
            <Form.Label>Codigo</Form.Label>
            <Form.Control type="text" value={this.state.codigo} onChange={this.onChangeProductCodigo}/>
        </Form.Group>

        <Form.Group controlId="Name">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" value={this.state.name} onChange={this.onChangeProductName}/>
        </Form.Group>
                
        <Form.Group controlId="Cantidad">
            <Form.Label>Cantidad</Form.Label>
            <Form.Control type="text" value={this.state.cant} onChange={this.onChangeProductCant}/>
        </Form.Group>

          <Button variant="danger" size="lg" block="block" type="submit">
            Actualizar Producto
          </Button>
        </Form>
      </div>
    );
  }
}