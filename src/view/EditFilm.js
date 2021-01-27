import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';

class EditFilm extends Component {
    constructor() {
        super();
        this.state = {
            data_film : []
        }
    }

    componentDidMount() {
        fetch('http://localhost:3001/film')
        .then(response => response.json())
        .then(res=>{
            this.setState({
                data_film : res
            })
        })
        .catch(err=>{
            console.error(err)
        })
    }

    render(){
        return(
            <Container>
                <Table striped bordered hover>
                    <thead>
                        <tr>
                            <th>Film Title</th>
                            <th>Released</th>
                            <th>Studio</th>
                            <th>Wordwide Gross</th>
                            <th>Domestic Gross</th>
                            <th>#</th>
                        </tr>
                    </thead>
                    <tbody>
                    {
                        this.state.data_film.map((item, index)=>(
                            <tr key={index}>
                                <td>{item.title}</td>
                                <td>{item.released}</td>
                                <td>{item.studio}</td>
                                <td><NumberFormat value={item.wwgross} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td><NumberFormat value={item.domross} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td></td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default EditFilm;