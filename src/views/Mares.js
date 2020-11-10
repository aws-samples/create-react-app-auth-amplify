import React from 'react';
import {
  Card, CardImg, CardText, CardBody, CardDeck,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const style = { width: "18rem" };

class Mares extends React.Component {

  render() {
    return (
      <>
        <div className="content">
            <CardDeck>
                <Card style={style}>
                    <CardImg top width="100%" src="https://scontent-iad3-1.xx.fbcdn.net/v/t31.0-8/17505132_10101716442692277_1192316473197671617_o.jpg?_nc_cat=103&_nc_sid=730e14&_nc_ohc=5my4YWBGLDwAX-PvRvw&_nc_ht=scontent-iad3-1.xx&oh=b2f35586a28ae73952c35b739188a00b&oe=5FB06C52"/>
                    <CardBody>
                        <CardTitle>Raven</CardTitle>
                        <CardText>

                        </CardText>
                        <Button>Update Info</Button>
                    </CardBody>
                </Card>
                <Card style={style}>
                    <CardImg top width="100%" src="https://scontent-iad3-1.xx.fbcdn.net/v/t1.0-9/57083804_10102513317912947_2008791908402331648_o.jpg?_nc_cat=105&_nc_sid=730e14&_nc_ohc=xC7r_QWC46IAX_0lWEX&_nc_ht=scontent-iad3-1.xx&oh=fdd1396455177f288382e4c3105e7ca9&oe=5FB11624" alt="Card image cap" />
                    <CardBody>
                        <CardTitle>Rachel</CardTitle>
                        <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
                        <Button>Update Info</Button>
                    </CardBody>
                </Card>
            </CardDeck>
        </div>
      </>
    );
  }
}

export default Mares;