import { createContext, useEffect, useState } from 'react'
import { client } from "../Js/Client";
export const AppContext = createContext({})

export const AppProvider = ({ children }) => {
  const [itemData, setItemData] = useState({});

  useEffect(() => {
    // ... Your data fetching logic

    // This function creates an order with the provided items
    const createOrder = async (items, apiKey) => {
      const apiUrl = "https://api-todo-ebon.vercel.app/api/v1/orders";
      const headers = {
        "X-Api-Key": apiKey,
        "Content-Type": "application/json",
      };

      try {
        const response = await client.post(apiUrl, items, { headers });
        if (response.status === 200) {
          console.log("Order created successfully.");
          // Handle the order creation success
        } else {
          console.error("Failed to create the order.");
          // Handle the order creation failure
        }
      } catch (error) {
        console.error("Error creating the order:", error);
        // Handle API request errors
      }
    };

    // Usage of the createOrder function
    // You can call this function when a user wants to create an order
    // For example, when they complete a purchase in your application
    // createOrder(body, 'your_api_key_here');
  }, []); // The empty dependency array ensures that this effect runs only once, similar to componentDidMount

  return (
    <AppContext.Provider value={{ itemData }}>{children}</AppContext.Provider>
  );
};