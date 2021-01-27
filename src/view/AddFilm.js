import React, { Component } from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

class AddFilm extends Component {
    constructor() {
        super();
        this.state = {
            title : '',
            released : '',
            studio : '',
            wwgross : '',
            domgross : ''
        }
    }

    AddFilm() {
        fetch(
            'http://localhost:3001/addfilm',
            {
                method : 'POST',
                headers: {
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                },
                body : JSON.stringify(this.state)
            }
        ).then((response => response.json()))
        .then(res=>{
            this.props.history.goBack()
            })
    }

    render(){
        return(
            <Container className="mt-4">
                <Form>
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Film Title</Form.Label>
                                <Form.Control type="text" placeholder="Insert film title" onChange={ev=>this.setState({title : ev.target.value})} required/>
                            </Form.Group>
                            
                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Released Year</Form.Label>
                                <Form.Control type="number" placeholder="Insert released year (ex: 2020)" value={this.state.released} onChange={event => this.setState({released: event.target.value.replace(/\D/,'')})} required maxLength="4"/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Studio</Form.Label>
                                <Form.Control type="text" placeholder="Insert studio" onChange={ev=>this.setState({studio : ev.target.value})} required/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Worldwide Gross ($)</Form.Label>
                                <Form.Control type="text" placeholder="Insert worldwide gross" value={this.state.wwgross} onChange={event => this.setState({wwgross: event.target.value.replace(/\D/,'')})} required/>
                            </Form.Group>

                            <Form.Group controlId="formGridEmail">
                                <Form.Label>Domestic Gross ($)</Form.Label>
                                <Form.Control type="text" placeholder="Insert domestic gross" value={this.state.domgrossd} onChange={event => this.setState({domgross: event.target.value.replace(/\D/,'')})} required/>
                            </Form.Group>

                            <Form.Group>                        
                                <Button className="btn btn-block" variant="primary" type="submit" onClick={this.AddFilm.bind(this)}>
                                    Add Film
                                </Button>
                            </Form.Group>
                        </Form>
            </Container>
        )
    }
}

export default AddFilm;