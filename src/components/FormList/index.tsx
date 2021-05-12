import React, { ChangeEvent } from 'react';
import { Col, Container, Row, Card, CardGroup } from 'react-bootstrap';
import MyApi from '../MyApi';
import SerachApi from '../SearchApi';


interface Props {
    listaProps: string[];
};

export const FormList = ({ listaProps }: Props) => {

    //setto l'onChange della checkbok
    const clickCkd = (e: ChangeEvent<HTMLInputElement>): void => {
        const elementSelected = document.getElementById(e.target.value);
        if (elementSelected) {
            //e.target bottone premuto
            //e.target.value è il valore del bottone premuto
            elementSelected.style.display = e.target.checked ? "block" : "none";
        }
    };

    return (
        <Container>
            <Row>
                <CardGroup>
                    <Card>

                        <Card.Header>Lista: </Card.Header>
                        {listaProps.map((item) => (
                            <p key={item} id={item}>
                                {item}
                            </p>
                        ))}
                        <Col>
                            {listaProps.map((items) => (<input type="checkbox" value={items} onChange={clickCkd} />))}
                        </Col>

                    </Card>
                    <Card>
                        <Card.Header>My Api </Card.Header>
                        <MyApi />
                    </Card>
                    <Card>
                        <Card.Header>Search Form </Card.Header>
                        <SerachApi />
                    </Card>
                </CardGroup>
            </Row>
        </Container>
    )
}


export default FormList;