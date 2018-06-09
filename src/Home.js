import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import TrangChu from './components/TrangChu';
import Login from './components/Login';
import SignUp from './components/SignUp';
import App from './App';

class Home extends Component {


    render() {
        return (
            <Router>
               <div>
                   <nav id="menu" className="navbar">
                       <div className="container">
                           <div className="navbar-header"><span id="heading" className="visible-xs">Categories</span>
                               <button type="button" className="btn btn-navbar navbar-toggle" data-toggle="collapse"
                                       data-target=".navbar-ex1-collapse"><i className="fa fa-bars"></i></button>
                           </div>
                           <div className="collapse navbar-collapse navbar-ex1-collapse">
                               <ul className="nav navbar-nav">
                                   <li class="dropdown"><Link to={'/TrangChu'}>Trang Chủ</Link></li>
                                   <li class="dropdown"><Link to={'/Login'}>Đăng nhập </Link></li>
                                   <li class="dropdown"><Link to={'/SignUp'}>Đăng Ký</Link></li>
                                   <li className="dropdown"><Link to={'/Admin'}>Admin</Link></li>
                               </ul>
                           </div>
                       </div>
                   </nav>
                   <Switch>
                    <Route exact path='/TrangChu' component={TrangChu} />
                    <Route exact path='/Login' component={Login} />
                    <Route exact path="/SignUp" component={SignUp} />
                       <Route exact path="/Admin" component={App} />
                </Switch>
               </div>

            </Router>

            );
        }
    }
export default Home;