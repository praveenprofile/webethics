'use client'

import PM from "../../assets/images/accounts-outline-rounded.svg";
import Marketing from "../../assets/images/Marketing.svg";
import material from "../../assets/images/material.png";
import letslight from "../../assets/images/letslight.svg";
import Frame from "../../assets/images/Frame.png";
import user from "../../assets/images/user.png";
import Image from "next/image";
import React from "react";
import Dropdown from 'react-bootstrap/Dropdown';
import Col from 'react-bootstrap/Col';
import Nav from 'react-bootstrap/Nav';
import Row from 'react-bootstrap/Row';
import Tab from 'react-bootstrap/Tab';
import Button from 'react-bootstrap/Dropdown';
export default function header() {
  return (
    <>
      {/* <Sidebar></Sidebar> */}
      <div className="main_header">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <ul>
                <li>
                  <a href="#">
                    <Image src={PM} alt="" width={50} height={50} /> PM
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={Marketing} alt="" width={50} height={50} />
                    HR
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={material} alt="" width={50} height={50} />
                    Sales
                  </a>
                </li>
                <li>
                  <a href="#">
                    <Image src={letslight} alt="" width={50} height={50} />
                    Config
                  </a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 text-end profile">
              <ul>
                <li>
                <Dropdown autoClose="outside">
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <Image src={Frame} alt="" width={50} height={50} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item>
                    <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                        <Row>
                          <Col sm={12}>
                            <Nav variant="pills" className="d-flex tabs_menu">
                              <Nav.Item>
                                <Nav.Link eventKey="first"><Image src={material} alt="" width={50} height={50} /><p>Sales</p></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="second"><Image src={PM} alt="" width={50} height={50} /><p>PM</p></Nav.Link>
                              </Nav.Item>
                              <Nav.Item>
                                <Nav.Link eventKey="third"><Image src={Marketing} alt="" width={50} height={50} /><p>HR</p></Nav.Link>
                              </Nav.Item>
                            </Nav>
                          </Col>
                          <Col sm={12}>
                            <Tab.Content>
                              <Tab.Pane eventKey="first">
                                <ul className="notification">
                                  <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                </ul>
                              </Tab.Pane>
                              <Tab.Pane eventKey="second">
                              <ul className="notification">
                                  <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                </ul>
                              </Tab.Pane>
                              <Tab.Pane eventKey="third"> <ul className="notification">
                                  <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                    <li className="d-flex">
                                    <div className="img">
                                      <Image src={user} alt="" width={50} height={50} />
                                    </div>
                                    <div className="text">
                                      <p>New Lead Updated by <span>Kamal Kant</span></p>
                                      <small>Today 10:30PM</small>
                                    </div>
                                    </li>
                                </ul></Tab.Pane>
                            </Tab.Content>
                          </Col>
                        </Row>
                      </Tab.Container>
                    </Dropdown.Item>
                    {/* <Dropdown.Item >Another action</Dropdown.Item>
                    <Dropdown.Item>Something else</Dropdown.Item> */}
                  </Dropdown.Menu>
                </Dropdown>
                  {/* <a href="#">
                    <Image src={Frame} alt="" width={50} height={50} />
                    Sanjay Midha
                  </a> */}
                </li>
                <li className="profile_btn">
                <Dropdown>
                  <Dropdown.Toggle variant="success" id="dropdown-basic">
                  <span> Sanjay Midha</span> <Image src={user} alt="" width={50} height={50} />
                  </Dropdown.Toggle>

                  <Dropdown.Menu>
                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
                
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
