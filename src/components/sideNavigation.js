import React from 'react';
//import logo from ;
import { MDBListGroup, MDBListGroupItem, MDBIcon } from 'mdbreact';
import { NavLink } from 'react-router-dom';

const TopNavigation = () => {
    return (
        <div className="sidebar-fixed position-fixed">
            <a href="#!" className="logo-wrapper waves-effect">
                <img alt="DataMaster Logo" className="img-fluid" src={'https://www.datamasterusa.com/wp-content/uploads/2017/05/web-logo.png'}/>
            </a>
            <MDBListGroup className="list-group-flush">
                <NavLink exact={true} to="/" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="chart-pie" className="mr-3"/>
                        Dashboard
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/profile" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="user" className="mr-3"/>
                        Profile
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/tables" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="table" className="mr-3"/>
                        Tables
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/sensitivity" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="map" className="mr-3"/>
                        Sensitivity Analysis
                    </MDBListGroupItem>
                </NavLink>
                <NavLink to="/404" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        404
                    </MDBListGroupItem>
                </NavLink>

                <NavLink to="/adjustmentcosts" activeClassName="activeClass">
                    <MDBListGroupItem>
                        <MDBIcon icon="exclamation" className="mr-3"/>
                        Adjustment from Cost
                    </MDBListGroupItem>
                </NavLink>
            </MDBListGroup>
        </div>
    );
}

export default TopNavigation;