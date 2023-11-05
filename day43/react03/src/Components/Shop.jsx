import { Component } from 'react'
import CheckGmail from "../assets/Js/checkemail";
import { client } from "../assets/Js/Client";
import "../assets/Style.css";

export default class Shop extends Component {
  constructor() {
    super();
    this.state = {
      products: [], // Initialize an empty array to store the products
    };
  }
  componentDidMount() {
    this.getTask(); // Call the getTask method when the component is mounted
  }
  async getTask() {
    const limit = 10;
    const apiKey = localStorage.getItem("apiKey");
    const { data } = await client.get(`/products?limit=${limit}`, apiKey);
    if (data.status_code === 401) {
      CheckGmail();
    } else {
      //   this.setState({ tasks: data.data.listTodo });
      //   console.log(this.state);
      this.setState({ products: data.data }); // Assuming `data.data` contains the products
      console.log(data.data);
      //   console.log(this.state.tasks);
    }
    // if (data.code === 200) {
    //   console.log(`ok`);
    //   renderAfterLogin();
    //   titleEL.value = "";
    //   contentEL.value = "";
    // } else if (data.status === 401) {
    //   const refreshToken = localStorage.getItem("refresh_token");
    //   const dataBlog = await refreshToken(refreshToken);
    //   console.log(dataBlog);
    //   showErrorPopup(`${tokens.message}`);
    // }

    // console.log(data.data);
    // console.log(response);
  }
  

  render() {
    return (
      <div>
        <h1>Welcome to Shop</h1>
        <div className="product-list">
          {this.state.products.map((product) => (
            <div className="product" key={product.id}>
              <img src={product.image} alt={`Image of ${product.name}`} />
              <h2>{product.name}</h2>
              <span>${product.price}</span>{" "}
              {/* Assuming the price is in dollars */}
              <button className='add-cart'> Add to Cart</button>
            </div>
          ))}
        </div>
      </div>
    );
  }
}
