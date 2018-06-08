import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import QuanLySanPham from './components/QuanLySanPham';

class Admin extends Component {


    render() {
        return (
            <Router>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-dark fixed-top" id="mainNav">
                        <div className="navbar-brand"><h1> Menu </h1></div>
                        <button className="navbar-toggler navbar-toggler-right" type="button" data-toggle="collapse"
                                data-target="#navbarResponsive" aria-controls="navbarResponsive"
                                aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarResponsive">
                            <ul className="navbar-nav navbar-sidenav" id="exampleAccordion">
                                <li className="nav-item" data-toggle="tooltip" data-placement="right"
                                    title="Dashboard">
                                    <div className="nav-link">
                                        <i className="fa fa-fw fa-table"></i>
                                        <span className="nav-link-text"><Link to={'/QuanLySanPham'}>Quản lý sản phẩm</Link></span>
                                    </div>
                                </li>
                                <li className="nav-item" data-toggle="tooltip" data-placement="right"
                                    title="Tables">
                                    <div className="nav-link">
                                        <i className="fa fa-fw fa-dashboard"></i>
                                        <span className="nav-link-text"><Link to={'/QuanLyLoaiSanPham'}>Quản lý  loai sản phẩm</Link></span>
                                    </div>
                                </li>
                                <li className="nav-item" data-toggle="tooltip" data-placement="right"
                                    title="Tables">
                                    <div className="nav-link">
                                        <i className="fa fa-fw fa-area-chart"></i>
                                        <span className="nav-link-text"><Link to={'/QuanLyNhaSanXuat'}>Quản lý nhà sản xuất</Link></span>
                                    </div>

                                </li>
                            </ul>
                        </div>
                    </nav>
                </div>
            <Switch>
                <Route exact path='/QuanLySanPham' component={QuanLySanPham} />
                <Route exact path='/QuanLyLoaiSanPham' component={QuanLyLoaiSanPham} />
                <Route exact path='/QuanLyNhaSanXuat' component={QuanLyNhaSanXuat} />
            </Switch>
            </Router>
        );

    }
}
export default Admin;