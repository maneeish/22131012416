const axios = require("axios");

// ✅ Insert your token here
const AUTH_TOKEN = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJNYXBDbGFpbXMiOnsiYXVkIjoiaHR0cDovLzIwLjI0NC41Ni4xNDQvZXZhbHVhdGlvbi1zZXJ2aWNlIiwiZW1haWwiOiJtYW5pc2guMjJzY3NlMTAxMjU5OEBnYWxnb3RpYXN1bml2ZXJzaXR5LmVkdS5pbiIsImV4cCI6MTc1MTAxNDYyMCwiaWF0IjoxNzUxMDEzNzIwLCJpc3MiOiJBZmZvcmQgTWVkaWNhbCBUZWNobm9sb2dpZXMgUHJpdmF0ZSBMaW1pdGVkIiwianRpIjoiNTI1MjU2ZTItMDQ0YS00M2Y0LTliYmUtOWZiMjY3OWQ1ZTJlIiwibG9jYWxlIjoiZW4tSU4iLCJuYW1lIjoibWFuaXNoIG1hbmRhbCIsInN1YiI6ImY5NmU3ZDhiLTNlMzItNDg1MS04ZDgwLTM3YzE1MmYzMzA3YiJ9LCJlbWFpbCI6Im1hbmlzaC4yMnNjc2UxMDEyNTk4QGdhbGdvdGlhc3VuaXZlcnNpdHkuZWR1LmluIiwibmFtZSI6Im1hbmlzaCBtYW5kYWwiLCJyb2xsTm8iOiIyMjEzMTAxMjQxNiIsImFjY2Vzc0NvZGUiOiJNdWFndnEiLCJjbGllbnRJRCI6ImY5NmU3ZDhiLTNlMzItNDg1MS04ZDgwLTM3YzE1MmYzMzA3YiIsImNsaWVudFNlY3JldCI6IkZCRWhZS3liU1JIeUJ5R3MifQ.HFi79GU9bF9xQygPu5w9RcIbPzAeT2u8aQrOQYfcWdo";

const Log = async (stack, level, logPackage, message) => {
  const logEndpoint = "http://20.244.56.144/evaluation-service/logs";

  try {
    const response = await axios.post(
      logEndpoint,
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

    console.log("✅ Log created:", response.data.logID);
  } catch (error) {
    console.error("❌ Failed to log:", error.message);
  }
};

module.exports = Log;
