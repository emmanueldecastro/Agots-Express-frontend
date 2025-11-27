import axios from "axios";

const roles = ["admin", "customer", "staff", "rider"];

export const loginAllRoles = async (username, password) => {
  for (let role of roles) {
    try {
      const res = await axios.post(
        `http://localhost:5000/${role}/login`,
        { username, password },
        { headers: { "Content-Type": "application/json" } }
      );

      // If login is successful, return token and role
      if (res.data.token) {
        return { ...res.data, role };
      }
    } catch (err) {
      // If server is unreachable, throw immediately
      if (!err.response) {
        throw new Error(`Cannot connect to ${role} server`);
      }

      // If server responded but login failed, continue to next role
      if (err.response.status === 401 || err.response.status === 400) {
        continue;
      }

      // Any other error, throw
      throw new Error(err.response.data?.message || `Login failed for ${role}`);
    }
  }

  throw new Error("Invalid username or password for any role");
};
