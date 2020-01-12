import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default class Gift extends Component {
  constructor() {
    super();
    this.state = {
      person: "",
      present: ""
    };
  }
  render() {
    const { removeGift, gift } = this.props;
    return (
      <div className="gift">
        <Form>
          <Form.Group controlId="person" bsSize="small">
            <Form.Label>Person</Form.Label>
            <Form.Control
              type="input"
              className="input-person"
              value={this.state.person}
              onChange={event => this.setState({ person: event.target.value })}
            ></Form.Control>
          </Form.Group>
          <Form.Group controlId="present" bsSize="small">
            <Form.Label>Present</Form.Label>
            <Form.Control
              type="input"
              className="input-present"
              value={this.state.present}
              onChange={event => this.setState({ present: event.target.value })}
            ></Form.Control>
          </Form.Group>
        </Form>
        <Button className="btn-remove" onClick={() => removeGift(gift.id)}>
          Remove Gift
        </Button>
      </div>
    );
  }
}
