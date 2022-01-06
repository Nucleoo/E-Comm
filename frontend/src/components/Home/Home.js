import React, { Fragment, useEffect } from 'react';
import './Home.css';
import ProductCard from './ProductCard';
import MetaData from '../layout/MetaData';
import Loader from '../layout/Loader/Loader'

import { clearErrors, getProduct } from '../../actions/productAction';
import { useSelector, useDispatch } from 'react-redux';
import { useAlert } from 'react-alert';

const Home = () => {

    const alert = useAlert();
    const dispatch = useDispatch();
    const { loading, error, products } = useSelector((state) => state.products);

    useEffect(() => {

        if (error) {
            alert.error(error);
            dispatch(clearErrors);
        }

        dispatch(getProduct());
    }, [alert, dispatch, error]);

    return (
        <Fragment>
            {
                loading ? <Loader /> :
                    <Fragment>
                        <MetaData title="E-Comm" />
                        <div className="banner">
                            <p>Welcome to Ecommerce</p>
                            <h1>FIND AMAZING PRODUCTS BELOW</h1>

                            <a href="#container">
                                <button>
                                    Scroll <i className="fas fa-mouse"></i>
                                </button>
                            </a>
                        </div>

                        <h2 className="homeHeading">Featured Products</h2>

                        <div className='container' id='container' >
                            {products && products.map((product) => <ProductCard product={product} />)}
                        </div>
                    </Fragment>
            }
        </Fragment>
    )
}

export default Home
