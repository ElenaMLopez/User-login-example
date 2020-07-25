import axios from "axios";

const login = async (userEmail, userPassword) => {
  return await axios.get("/API/user.json").then(res => {
    const user = res.data.find(
      user => user.userEmail === userEmail && user.userPassword === userPassword
    );
    if (user !== undefined) {
      return user.token;
    }

    return new Error("Error: User don´t exist");
  });
};

export default login;
