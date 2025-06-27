import axios from "axios";

const AUTH_TOKEN = import.meta.env.VITE_AUTH_TOKEN;
 

export const log = async (stack, level, logPackage, message) => {
  try {
    const res = await axios.post(
      "http://20.244.56.144/evaluation-service/logs",
      {
        stack,
        level,
        package: logPackage,
        message,
      },
      {
        headers: {
          Authorization: `Bearer ${AUTH_TOKEN}`,
        },
      }
    );
   
  } catch (err) {
    console.error("❌ Frontend log failed:", err.message);
  }
};
