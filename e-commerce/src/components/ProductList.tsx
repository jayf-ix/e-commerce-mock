import React from 'react'
import ProductCard from './ProductCard';
import products from '../Products.json';


const ProductList = () => {
    return (
        <div className="offset-md-3">
            <div className='py-3 px-3 justify-content-between d-flex'>
            <div className="dropdown">
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton2" data-bs-toggle="dropdown" aria-expanded="false">
                    Sort
                </button>
                <ul className="dropdown-menu dropdown-menu-dark" aria-labelledby="dropdownMenuButton2">
                    <li><a className="dropdown-item active" href="/sort=prize-low">Prize low to high</a></li>
                    <li><a className="dropdown-item" href="#/sort=prize-high">Prize high to low</a></li>
                </ul>
            </div>
            <nav aria-label="Page navigation example">
                <ul className="pagination">
                    <li className="page-item"><a className="page-link text-dark" href="#">Previous</a></li>
                    <li className="page-item"><a className="page-link text-dark" href="#">1</a></li>
                    <li className="page-item"><a className="page-link text-dark" href="#">2</a></li>
                    <li className="page-item"><a className="page-link text-dark" href="#">3</a></li>
                    <li className="page-item"><a className="page-link text-dark" href="#">Next</a></li>
                </ul>
            </nav>
            </div>
            
            <div className="row pr-0 col-12 m-0">
                {products.map((product, index) => (
                    <div className="col-md-4 col-6 mb-4 p-2" key={index}>
                        <ProductCard
                            imageUrl={product.imageUrl}
                            title={product.title}
                            price={product.price}
                            sku={product.sku}
                            viewProductLink={product.viewProductLink}
                        />
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductList
