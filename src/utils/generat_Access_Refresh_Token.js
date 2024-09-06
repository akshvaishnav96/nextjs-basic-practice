import User from "@/models/user";
import dbConn from "@/database/dbconn";
dbConn();

const generateAccessTokenAndRefreshToken = async function (userID) {
    try {
      const user = await User.findById(userID);

  
      const accessToken = await user.generateAccessToken();
      const refreshToken = await user.generateRefreshToken();
  
      user.refreshToken = refreshToken;
  
      const updateUser = await user.save();
  
      const userId = updateUser._id;
      return { accessToken, refreshToken, userId };
    } catch (error) {
      return  error.message
    }
  };


  export default generateAccessTokenAndRefreshToken
