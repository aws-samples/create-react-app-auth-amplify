import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardDeck,
  CardTitle, CardSubtitle, Button, CardFooter
} from 'reactstrap';

const style = { width: "18rem" };

class Mares extends React.Component {

  render() {
    return (
      <>
        <div className="content">
            <CardDeck>
                <Card style={style}>
                    <CardImg top width="100%" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/105942206_2947812388674579_8800215465849698207_n.jpg?_nc_cat=102&ccb=2&_nc_sid=0debeb&_nc_ohc=3SHehgaMh4wAX9Tslsr&_nc_ht=scontent-iad3-1.xx&oh=b948a9e0ff6a4c21d25fc3effc04f516&oe=5FD5F4B4"/>
                    <CardBody>
                        <CardTitle>Allison Schieber</CardTitle>
                        <CardSubtitle>
                        Foal watch shift: 9pm - 2am
                        </CardSubtitle>
                        <CardText>
                          Contact: schiebera@appstate.edu
                        </CardText>
                    </CardBody>
                </Card>
                <Card style={style}>
                    <CardImg top width="100%" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/13701207_911661138944633_2111176807843618678_o.jpg?_nc_cat=111&ccb=2&_nc_sid=174925&_nc_ohc=zjPn8GKoNFkAX8Z-0KH&_nc_oc=AQnx5BvzeBYnQFEWX6ptxxw5rAw1y16pQXTAhaROgpqYFyP6pAjWIUk-oPb-RD2gJ6M&_nc_ht=scontent-iad3-1.xx&oh=d96f9b9eb70281a607513fa95e2476cd&oe=5FD63750" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Juliana Luczynski</CardTitle>
                        <CardSubtitle>
                          Foal watch shift: 2am - 7am
                        </CardSubtitle>
                        <CardText>
                          Contact: luczynskij@appstate.edu
                        </CardText>
                        <CardFooter>
                          Currently on foal watch
                        </CardFooter>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
      </>
    );
  }
}

export default Mares;