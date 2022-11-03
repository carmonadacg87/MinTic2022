import React,{Component} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default class CreatedProduct extends Component{
    render(){
        return(
        <div class="form-wrapper">
            <Form>
                <Form.Group controlId="Codigo">
                    <Form.Label>Codigo</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="Name">
                    <Form.Label>Nombre</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="Categoria">
                    <Form.Label>Categoria</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                <Form.Group controlId="Cantidad">
                    <Form.Label>Cantidad</Form.Label>
                    <Form.Control type="text"/>
                </Form.Group>
                
                <Button variant="danger" size="lg" block="block" type="submit">Crear Producto</Button>
            </Form>
        </div>
        );
    }
}