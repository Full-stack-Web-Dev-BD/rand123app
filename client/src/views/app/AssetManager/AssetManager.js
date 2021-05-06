import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  CardText,
  CardSubtitle,
  Row,
  Card,
  CardBody,
  CardTitle,
  CardImg,
  Badge,
  
} from 'reactstrap';
import IntlMessages from '../../../helpers/IntlMessages';

const AssetManager = ({ match }) => {
  return (
    <> 
      <div className="row">
        {
        [3,1234,15,13,,3,1].map(el=>(
          <div className=" col-xs-12 col-sm-6  col-md-4 col-lg-3  mb-3">
            <Card className="mb-4">
              <div className="position-relative">
                <CardImg
                  top
                  src="/image.png"
                  alt="Card image cap"
                />
                <Badge
                  color="primary"
                  pill
                  className="position-absolute badge-top-left"
                >
                  File Type
                </Badge>
                <Badge
                  color="secondary"
                  pill
                  className="position-absolute badge-top-left-2"
                >
                  Preview
                </Badge>
              </div>
              <CardBody>
                <CardSubtitle className="mb-4">
                    Pinterest Beautiful Hill Station Natural Scene HD wallpapers
                </CardSubtitle>
                <CardText className="text-muted text-small mb-0 font-weight-light">Used Right </CardText>
                <CardText className="text-muted text-small mb-0 font-weight-light">Available</CardText>
              </CardBody>
            </Card>
          </div>
        ))
        } 
      </div>
    </>
  );
};

export default AssetManager;
