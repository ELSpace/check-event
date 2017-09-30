import React from 'react';
import {Jumbotron, Button, Container, Card, CardImg, CardText, CardBlock,
  CardTitle, CardSubtitle } from 'reactstrap';

const Main = () => (
 <div>
      <Jumbotron >
        <Container>
          <h1 className="display-3">Welcome !</h1>
          <p className="lead">Thank you for choosing our app to create your custom forms and manage your events ;)</p>
       <Card block inverse style={{ backgroundColor: '#333', borderColor: '#333' }}>
        <CardTitle>Contribute to our Repo !</CardTitle>
        <CardText>if you are interested in adding new features and improvements to our app , join us on Github</CardText>
       <a href="https://github.com/ELSpace/check-event">
        <Button>Github Repo </Button> </a>
        </Card>
        </Container>
      </Jumbotron>
    </div>
);

export default Main;