import React, { Component } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import Button from "react-bootstrap/Button";

export default class ProductTableRow extends Component {
  constructor(props) {
    super(props);
    this.deleteProduct = this.deleteProduct.bind(this);
  }

  deleteProduct() {
    axios
      .delete(
        "http://localhost:4000/products/delete-product/" + this.props.obj._id
      )
      .then((res) => {
        console.log("Product successfully deleted!");
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <tr>
        <td>{this.props.obj.name}</td>
        <td>{this.props.obj.codigo}</td>
        <td>{this.props.obj.cant}</td>
        <td>
          <Link
            className="edit-link"
            path={"product/:id"}
            to={"/edit-product/" + this.props.obj._id}
          >
            Editar
          </Link>
          <Button onClick={this.deleteProduct} size="sm" variant="danger">
            Borrar
          </Button>
        </td>
      </tr>
    );
  }
}
