import User from "@/models/user";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";
import dbConn from "@/database/dbconn";
dbConn()
export const sendMail = async ({email, emailType, userId}) => {
  try {
    const token = uuidv4();
    const verifyMailHtml = `
      <p>
        Click <a href="${process.env.BASE_URL}/verifyEmail?token=${token}" target="_blank" rel="noopener noreferrer">here</a> to verify your email,
        or copy this link into your browser: <br>
        ${process.env.BASE_URL}/verifyEmail?token=${token}
      </p>
    `;
  
    const resetPasswordMailHtml = `
      <p>
        Click <a href="${process.env.BASE_URL}/resetpassword?token=${token}" target="_blank" rel="noopener noreferrer">here</a> to reset your password,
        or copy this link into your browser: <br>
        ${process.env.BASE_URL}/resetpassword?token=${token}
      </p>
    `;
    
    let user;
    if (emailType === "VERIFY") {
      user = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            verifyToken: token,
            verifyTokenExpire: Date.now() + parseInt(process.env.VERIFY_TOKEN_EXPIRE)
          }
        },
        { new: true } 
      );
    } else if (emailType === "RESET") {
      user = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            forgotPasswordToken: token,
            forgotPasswordTokenExpire: Date.now() + parseInt(process.env.FORGOT_PASSWORD_TOKEN_EXPIRE)
          }
        },
        { new: true } 
      );
    }

    console.log(user);
    
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false,
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailoption = {
      from: process.env.MAIL_FROM,
      to: email,
      subject: emailType === "VERIFY" ? "Verify Your Email" : "Reset Password",
      html: emailType === "VERIFY" ? verifyMailHtml : resetPasswordMailHtml,
    };

    if (user) {
      await user.save(); // Make sure the save completes
      const mailresponse = await transporter.sendMail(mailoption);
      return mailresponse;
    } else {
      throw new Error('User not found');
    }

  } catch (error) {
    console.error("Error sending email:", error);
   return (error.message);
  }
};
