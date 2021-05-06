import React, { useState } from 'react';
import {
  Row,
  Card,
  CardTitle,
  Form,
  FormGroup,
  Label,
  Input,
  Button,
} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { registerUser } from '../../redux/actions';

import IntlMessages from '../../helpers/IntlMessages';
import { Colxx } from '../../components/common/CustomBootstrap';
import axios from 'axios'
import AppBarOuter from '../app/AppBar';


const Register = ({ history }) => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [company, setCompany] = useState('')
  const [role, setRole] = useState('')
  const onUserRegister = (e) => {
    e.preventDefault();
    const obj={
      firstName,
      lastName,
      email,
      password,
      company,
      user_role:role
    }
    console.log(obj)
    axios.post('/api/user/register',obj)
    .then(res=>{

      return history.push('/login')
    })
    .catch(err=>{
      console.log(err);
    })
  };
  return (
    <div>
      <AppBarOuter/>
    <Row className="h-100" style={{overflow:'hidden'}} className="mt-5">
      <div className="col-md-6 offset-md-3">
        <Card className="auth-card">  
          <div className="form-side">
            <CardTitle className="mb-4 text-center">
              <IntlMessages id="Register Here " />
            </CardTitle>
            <form onSubmit={e=>{onUserRegister(e)}}>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="First Name" />
                </Label>
                <Input   onChange={e=>setFirstName(e.target.value)} required type="name" placeholder="First Name" />
              </FormGroup>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Last Name" />
                </Label>
                <Input   onChange={e=>setLastName(e.target.value)} required type="name" placeholder="Last Name" />
              </FormGroup>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Company (Optoinal) " />
                </Label>
                <Input   onChange={e=>setCompany(e.target.value)}  type="name" placeholder="Company (Optoinal)" />
              </FormGroup>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Email " />
                </Label>
                <Input   onChange={e=>setEmail(e.target.value)} required type="email"  placeholder="Email" />
              </FormGroup>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Select Role " />
                </Label>
                <select onChange={e=>{setRole(e.target.value)}} required className="form-control">
                  <option value="">Select Role</option>
                  <option value="designer">Designer</option>
                  <option value="client">client</option>
                </select>
              </FormGroup>
              <FormGroup className="form-group has-float-label  mb-4">
                <Label>
                  <IntlMessages id="Password"  />
                </Label>
                <Input   onChange={e=>setPassword(e.target.value)} required type="password" placeholder="Password" />
              </FormGroup>
              <div className="text-center">
                <Button
                  color="primary"
                  className="btn-shadow"
                  size="lg"
                  type="submit"
                >
                  <IntlMessages id="Register" />
                </Button>
                <br/>
              </div>
              <div className="text-center mt-4">
              <a href="/login"  className="mt-4">Allready  Registered ? Go to Login Page</a>
              </div>
            </form>
          </div>
        </Card>
      </div>
    </Row>  
    </div>);
};
const mapStateToProps = () => {};

export default connect(mapStateToProps, {
  registerUserAction: registerUser,
})(Register);
