import React from "react";

class ProductList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            error: null,
            isLoaded: false,
            items: [],
        };
    }

    componentDidMount() {
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
        const {error, isLoaded, items} = this.state;
        if (error) {
            return <div>Error: {error.message}</div>;
        } else if (!isLoaded) {
            return <div>Loading...</div>;
        } else {
            return (
                <div>
                    {items.map(item => (
                        <div className="col-lg-3 col-md-3 col-sm-6 col-xs-12">
                        <div className="product">
                            <div className="image"><img src={item.image_url}/></div>
                            <div className="buttons">
                                <a className="btn cart" href="#"><span
                                    className="glyphicon glyphicon-shopping-cart"></span></a>
                                <a className="btn wishlist" href="#"><span className="glyphicon glyphicon-heart"></span></a>
                                <a className="btn compare" href="#"><span
                                    className="glyphicon glyphicon-transfer"></span></a>
                            </div>
                            <div className="caption">
                                <div className="name"><h3><a href="#">{item.name}</a></h3></div>
                                <div className="price"><p>{item.gia} VND</p></div>
                            </div>
                        </div>
                        </div>
                        ))
                    }
                    <div>
                    </div>
                </div>


        );

        }

    }


}
export default ProductList;