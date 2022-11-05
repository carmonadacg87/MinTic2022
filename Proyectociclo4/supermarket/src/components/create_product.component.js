import React,{Component} from "react";
import Form from "react-bootstrap/Form";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import axios from "axios";

export default class CreatedProduct extends Component{
    constructor(props){
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

    onChangeProductName(e){
        this.setState({name:e.target.value})
    }

    onChangeProductCodigo(e){
        this.setState({codigo:e.target.value})
    }

    onChangeProductCant(e){
        this.setState({cant:e.target.value})
    }

    onSubmit(e){
        e.PreventDefault();
        const productObject={
            name:this.state.name,
            codigo:this.state.codigo,
            cant:this.state.cant,
        };
        axios
            .post("http://localhost:4000/product/created-product",productObject)
            .then((res) => console.log(res.data));
        this.setState({name:"",codigo:"",cant:""});
    }

    render(){
        return(
        <div class="form-wrapper">
            <Form onSubmit={this.onSubmit}>
                <Form.Group controlId="Codigo">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control
                    type="text"
                    value={this.state.codigo}
                    onChange={this.onChangeProductCodigo}
                    />
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control 
                    type="text"
                    value={this.state.name}
                    onChange={this.onChangeProductName}
                    />
                </Form.Group>
                <ListGroup controlId="Categoria">
                <ListGroup.Label>Categoria</ListGroup.Label>
                <ListGroup.Item>Aseo</ListGroup.Item>
                <ListGroup.Item>Aromaticos y Condimentos</ListGroup.Item>
                <ListGroup.Item>Bebidas</ListGroup.Item>
                <ListGroup.Item>Carnicos y Embutidos</ListGroup.Item>
                <ListGroup.Item>Granos y Abarrotes</ListGroup.Item>
                <ListGroup.Item>Lacteos</ListGroup.Item>
                <ListGroup.Item>Licores</ListGroup.Item>
                <ListGroup.Control type="text"/>
                </ListGroup>
                <Form.Group controlId="Cantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control
                    type="number"
                    value={this.state.cant}
                    onChange={this.onChangeProductCant}
                    />
                </Form.Group>
                
                <Button variant="danger" size="lg" block="block" type="submit" className="mt-4">Crear Producto</Button>
            </Form>
        </div>
        );
    }
}