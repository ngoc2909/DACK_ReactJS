import React, {Component} from "react";
import { Modal, Button } from 'react-bootstrap';
import axios from "axios";

class ModalAdd extends Component{
    constructor(props, context) {
        super(props, context);

        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleAdd = this.handleAdd.bind(this);
        this.handleDesChange = this.handleDesChange.bind(this);
        this.handleImg_urlChange = this.handleImg_urlChange.bind(this);
        this.handleAfterAdd = this.handleAfterAdd.bind(this);

        this.state = {
            show: false,
            name: null,
            des: null,
            img_url: null
        };
    }

    handleClose() {
        this.setState({ show: false });
    }

    handleShow() {
        this.setState({ show: true });
    }

    handleAdd() {
        axios.post(`https://doanck-expressjs.herokuapp.com/api/sanpham`,
            {name: this.state.name, des: this.state.des, img_url: this.state.img_url} )
            .then(res => {
                this.setState({show: false});
                this.handleAfterAdd();
            })
    };

    handleNameChange(e) {
        this.setState({name: e.target.value});
    };
    handleDesChange(e) {
        this.setState({des: e.target.value});
    };
    handleImg_urlChange(e) {
        this.setState({img_url: e.target.value});
    };
    handleAfterAdd(){
        fetch("https://doanck-expressjs.herokuapp.com/api/sanpham")
            .then(res => res.json())
            .then(
                (result) => {
                    this.setState({
                        isLoaded: true,
                        items: result
                    });
                },
                // Note: it's important to handle errors here
                // instead of a catch() block so that we don't swallow
                // exceptions from actual bugs in components.
                (error) => {
                    this.setState({
                        isLoaded: true,
                        error
                    });
                }
            )
    }

    render() {
        return (
            <div>

                <Button className="btn btn-primary my-2" bsSize="large" block onClick={this.handleShow}>
                    Add
                </Button>

                <Modal show={this.state.show} onHide={this.handleClose}>
                    <Modal.Header className="alert-primary">
                        <Modal.Title>Add new celebrity</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <form className="form-signin">
                            <label for="input-name" className="sr-only">Name</label>
                            <input id="input-name" className="form-control tooltip-test" title="Celebrity's name" value={this.state.name} onChange={this.handleNameChange} placeholder="Name" required="" autofocus=""/>
                            <label for="input-img_url" className="sr-only">Image url</label>
                            <input id="input-img_url" className="mt-2 form-control" placeholder="Image url" autofocus="" value={this.state.img_url} onChange={this.handleImg_urlChange}/>
                            <label for="input-des" className="sr-only">Description</label>
                            <textarea id="input-des" className="mt-2 form-control" placeholder="Description" type="text" autofocus="" value={this.state.des} onChange={this.handleDesChange}></textarea>
                        </form>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button className="col-2" onClick={this.handleClose}>Close</Button>
                        <Button className="btn-primary col-2" onClick={this.handleAdd}>Add</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ModalAdd;