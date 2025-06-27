const axios = require("axios");

const payload = {
  email: "manish.22scse1012598@galgotiasuniversity.edu.in",
  name: "Manish Mandal",
  mobileNo: "8799730332",
  githubUsername: "maneeish",
  rollNo: "22131012416",
  accessCode: "Muagvq"
};

const register = async () => {
  try {
    const res = await axios.post("http://20.244.56.144/evaluation-service/register", payload);
    console.log("✅ Registration Successful");
    console.log("clientID:", res.data.clientID);
    console.log("clientSecret:", res.data.clientSecret);
  } catch (err) {
    console.error("❌ Registration Failed:", err.response?.data || err.message);
  }
};

register();
