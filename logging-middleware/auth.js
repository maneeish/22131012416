const axios = require("axios");

const payload = {
  email: "manish.22scse1012598@galgotiasuniversity.edu.in",
  name: "Manish Mandal",
  rollNo: "22131012416",
  accessCode: "Muagvq",
  clientID: "f96e7d8b-3e32-4851-8d80-37c152f3307b",
  clientSecret: "FBEhYKybSRHyByGs"
};

const getToken = async () => {
  try {
    const response = await axios.post(
      "http://20.244.56.144/evaluation-service/auth",
      payload
    );

    console.log("✅ Your Bearer Token is:\n", response.data.access_token);
  } catch (err) {
    console.error("❌ Error fetching token:", err.response?.data || err.message);
  }
};

getToken();
