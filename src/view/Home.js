import React, { Component } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import NumberFormat from 'react-number-format';
import { Link } from 'react-router-dom';
 
class Home extends Component {
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

    DeleteFilm() {
        fetch(
            'http://localhost:3001/del/:id',
            {
                method : 'DELETE',
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
                <Table striped bordered hover>
                    <thead>
                        <tr className="bg-info text-light text-center">
                            <th>Film Title</th>
                            <th>Released</th>
                            <th>Studio</th>
                            <th>Wordwide Gross</th>
                            <th>Domestic Gross</th>
                            <th colspan="2">#</th>
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
                                <td><NumberFormat value={item.domgross} displayType={'text'} thousandSeparator={true} prefix={'$'} /></td>
                                <td><Button variant="primary btn-sm btn-block" as={Link} to={`/edit/${item.id}`}>
                                        Edit
                                    </Button>
                                </td>
                                <td>
                                    <Button variant="danger btn-sm btn-block" onClick={this.DeleteFilm.bind(this)}>
                                        Delete
                                    </Button>
                                </td>
                            </tr>
                        ))
                    }
                    </tbody>
                </Table>
            </Container>
        )
    }
}

export default Home;