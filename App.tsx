import React, {useState} from 'react';
import logo from './logo.svg';
import './App.css';


import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

import JsonData from './gamelib-36478-default-rtdb-export.json';

function JsonDataDisplay() {
    const DisplayData = JsonData.map((info) => {
        return (
            <tr key={info.id}>
                <td>{info.name}</td>
                <td>{info.fname}</td>
                <td>{info.gen}</td>
                <td>{info.engine}</td>
                <td>{info.rate}</td>
            </tr>
        );
    });

    return (
        <div>
            <Table striped bordered hover variant="dark">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Real Name</th>
                        <th>Gen</th>
                        <th>Engine</th>
                        <th>Rate</th>
                    </tr>
                </thead>
                <tbody>
                    {DisplayData}
                </tbody>
            </Table>
        </div>
    );
}

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <div className='fr-h'>
                    <h1>GameLib JSON</h1>
                </div>

                <div className="fr">
                    <Form>
                        <Form.Group className="mb-3" controlId="formGridId">
                            <Form.Label>Id</Form.Label>
                            <Form.Control type="number" />
                        </Form.Group>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridName">
                                <Form.Label>Name</Form.Label>
                                <Form.Control type="text" placeholder="Enter name" />
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRealName">
                                <Form.Label>Real Name</Form.Label>
                                <Form.Control type="text" placeholder="Real name" />
                            </Form.Group>
                        </Row>

                        <Row className="mb-3">
                            <Form.Group as={Col} controlId="formGridGen">
                                <Form.Label>Gen</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>1</option>
                                    <option>2</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridEngine">
                                <Form.Label>Engine</Form.Label>
                                <Form.Select defaultValue="Choose...">
                                    <option>Choose...</option>
                                    <option>...</option>
                                </Form.Select>
                            </Form.Group>

                            <Form.Group as={Col} controlId="formGridRating">
                                <Form.Label>Rating</Form.Label>
                                <Form.Control type="number" />
                            </Form.Group>
                        </Row>

                        <Button variant="primary" type="submit">
                            Submit
                        </Button>
                    </Form>
                </div>

                <div className='fr'>
                    <JsonDataDisplay />
                </div>
            </header>
        </div>
    );
}

export default App;
