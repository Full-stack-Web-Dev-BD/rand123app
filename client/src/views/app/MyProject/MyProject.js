import React from 'react';
import { Row } from 'reactstrap';
import { Colxx, Separator } from '../../../components/common/CustomBootstrap';

const MyProject = ({ match }) => {
  return (
    <> 
      <Row>
        <Colxx xxs="12" className="mb-4"> 
        MyProject
        </Colxx>
      </Row>
    </>
  );
};

export default MyProject