import "./product.css"
function product(props) {
    return (
        <div className="product">
            <h2>Product Name</h2>
            <div className="card">
                <img src="./logo192.png" alt="Pic" />
                <h1> Samsung A51</h1>
                <h2> {props.name}</h2>
                <p className="price">25$</p>
                <p>this is smart phone 2025 !! this is smart phone 2025 !! </p>
                <p>
                    <button>Add to Carrd</button>
                </p>
            </div>
        </div>
    );
}

export default product;