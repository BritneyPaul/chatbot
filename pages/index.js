// import styles from '../styles/Home.module.css'
import { useState } from "react";
import axios from "axios";
import AIChatBox from "../components/AIChatBox";
// import styles from "../styles/globals.css";
// import ai from './api/ai'

const Home = () => {
  const [response, setResponse] = useState("Hallo! Ik ben Bob, uw digitale hulp voor het rekenmodel. Hoe kan ik u helpen?");
  const [value, setValue] = useState("");
  const onChange = (e) => setValue(e.target.value);

  const handleSubmit = async () => {
    try {
      // Make sure the API endpoint and method are correct
      const res = await axios.post("/api/ai", {
        question: value, 
      }, {
        headers: {
          'Content-Type': 'application/json',
        }
      });
  
      // Assuming the response follows the OpenAI API format with choices
      const responseMessage = res.data.choices[0].message.content;
  
      // Set the chatbot response
      setResponse(responseMessage);
    } catch (error) {
      console.error("Error fetching the AI response:", error);
      setResponse("Sorry, something went wrong.");
    }
  };
  

  return (
    <div className="container">
      <AIChatBox 
        value={value} 
        onChange={onChange} 
        handleSubmit={handleSubmit} 
        response={response}
      />
    </div>
  );
};

export default Home;
