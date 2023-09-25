import React from 'react';
import Card from 'react-bootstrap/Card';
import Accordion from 'react-bootstrap/Accordion';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function BeerCard({ beer }) {
    return (
        <div>
            <Card bg={'info'} key={'Info'} text={'white'}>
                <Card.Header style={{ fontSize: "5vh", padding: "2%" }}>{beer.name}</Card.Header>

            </Card>
            <Card bg={'info'} key={'Info'} text={'white'} style={{ width: '18rem' }} style={{ display: 'flex', flexDirection: 'row', alignItems: 'center', marginBottom: '20px' }}>

                <div style={{ flex: '1' }}>
                    <Card.Img src={beer.image_url} alt={beer.name} style={{ maxWidth: '60%' }} />
                </div>
                <div style={{ flex: '2' }}>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">{beer.tagline}</Card.Subtitle>
                        <Card.Text>{beer.description}</Card.Text>
                        <Card.Text>ABV: {beer.abv}%</Card.Text>
                        <Card.Text>IBU: {beer.ibu}</Card.Text>
                        <Card.Text>TARGET FG: {beer.target_fg}</Card.Text>
                        <Card.Text>TARGET OG: {beer.target_og}</Card.Text>
                        <Card.Text>EBC: {beer.ebc}</Card.Text>
                        <Card.Text>SRM: {beer.srm}</Card.Text>
                        <Card.Text>PH: {beer.ph}</Card.Text>
                        <Card.Text>ATTENUATION LEVEL: {beer.attenuation_level}</Card.Text>
                        <Card.Text>VOLUME: {beer.volume.value} {beer.volume.unit}</Card.Text>
                        <Card.Text>BOIL VOLUME: {beer.boil_volume.value} {beer.boil_volume.unit}</Card.Text>
                        <Card.Text>CONTRIBUTED BY: {beer.contributed_by}</Card.Text>
                    </Card.Body>
                </div>
            </Card>
            <div>
                <Accordion defaultActiveKey={['0']} alwaysOpen>
                    <Accordion.Item eventKey="0">
                        <Accordion.Header>Methods</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col><b>MASH TEMPERATURE </b></Col>
                                </Row>
                                <br></br>
                                {beer.method.mash_temp.map((item, index) => (
                                    <Row>
                                        <Col sm={2}><b>{index + 1}</b></Col>
                                        <Col>Temperature: {item.temp.value} {item.temp.unit}</Col>
                                        <Col>Duration: {item.duration}</Col>
                                    </Row>
                                ))}
                                <hr></hr>
                                <Row>
                                    <Col><b>FERMENTATION </b></Col>
                                </Row>
                                <Row>
                                    <Col>Temperature: {beer.method.fermentation.temp.value} {beer.method.fermentation.temp.unit}</Col>
                                </Row>
                                <hr></hr>
                                <Row>
                                    <Col><b>Twist:</b> {beer.method.twist}</Col>
                                </Row>


                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="1">
                        <Accordion.Header>Ingredients</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col><b>MALT </b></Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col sm={2}><b>Sr.no</b></Col>
                                    <Col><b>Name</b></Col>
                                    <Col><b>Amount</b></Col>
                                </Row>
                                {beer.ingredients.malt.map((item, index) => (
                                    <Row>
                                        <Col sm={2}><b>{index + 1}</b></Col>
                                        <Col>{item.name}</Col>
                                        <Col>{item.amount.value} {item.amount.unit}</Col>
                                    </Row>
                                ))}
                                <hr></hr>
                                <Row>
                                    <Col><b>HOPS </b></Col>
                                </Row>
                                <br></br>
                                <Row>
                                    <Col sm={2}><b>Sr.no</b></Col>
                                    <Col><b>Name</b></Col>
                                    <Col><b>Amount</b></Col>
                                    <Col><b>Add</b></Col>
                                    <Col><b>Attribute</b></Col>
                                </Row>
                                {beer.ingredients.hops.map((item, index) => (
                                    <Row>
                                        <Col sm={2}><b>{index + 1}</b></Col>
                                        <Col>{item.name}</Col>
                                        <Col>{item.amount.value} {item.amount.unit}</Col>
                                        <Col>{item.add}</Col>
                                        <Col>{item.attribute}</Col>
                                    </Row>
                                ))}
                                <hr>
                                </hr>
                                <Row>
                                    <Col><b>Yeast:</b> {beer.ingredients.yeast}</Col>
                                </Row>

                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="2">
                        <Accordion.Header>Food Pairing</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                <Row>
                                    <Col><b>Some Food Pairings are </b></Col>
                                </Row>
                                <br></br>

                                {beer.food_pairing.map((item, index) => (
                                    <Row>
                                        <Col sm={2}><b>{index + 1}</b></Col>
                                        <Col>{item}</Col>

                                    </Row>
                                ))}
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>

                    <Accordion.Item eventKey="3">
                        <Accordion.Header>Brewers Tips</Accordion.Header>
                        <Accordion.Body>
                            <Container>
                                {beer.brewers_tips}
                            </Container>
                        </Accordion.Body>
                    </Accordion.Item>
                </Accordion>
            </div>
        </div>
    );
}
export default BeerCard;

