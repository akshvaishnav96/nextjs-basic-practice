import User from "@/models/user";
import nodemailer from "nodemailer";
import { v4 as uuidv4 } from "uuid";

export const sendMail = async ({email, emailType, userId}) => {
  try {
    const token = uuidv4();
    const verifyMailHtml = `
    <p>
      Click <a href="${process.env.BASE_URL}/api/verifyToken?token=${token}" target="_blank" rel="noopener noreferrer">here</a> to verify your email,
      or copy this link into your browser: <br>
      ${process.env.BASE_URL}/api/verifyToken?token=${token}
    </p>
  `;
  
  const resetPasswordMailHtml = `
    <p>
      Click <a href="${process.env.BASE_URL}/api/resetpassword?token=${token}" target="_blank" rel="noopener noreferrer">here</a> to reset your password,
      or copy this link into your browser: <br>
      ${process.env.BASE_URL}/api/resetpassword?token=${token}
    </p>
  `;
  
    if (emailType === "VERIFY") {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            verifyToken: token,
            verifyTokenExpire: Date.now() + parseInt(process.env.VERIFY_TOKEN_EXPIRE)
          }
        },
        { new: true } 
      );
      await user.save();
    } else if (emailType === "RESET") {
      const user = await User.findByIdAndUpdate(
        userId,
        {
          $set: {
            forgotPasswordToken: token,
            forgotPasswordTokenExpire: Date.now() + parseInt(process.env.FORGOT_PASSWORD_TOKEN_EXPIRE)
          }
        },
        { new: true } 
      );
      await user.save();
    }
    const transporter = nodemailer.createTransport({
      host: "smtp.gmail.com",
      port: 587,
      secure: false, // Use `true` for port 465, `false` for all other ports
      auth: {
        user: process.env.MAIL_FROM,
        pass: process.env.MAIL_PASS,
      },
    });

    const mailoption = {
      from: process.env.MAIL_FROM,
      to: email,
      subject:
        emailType === "VERIFY" ? "verify your email" : "reset password mail",
        html: emailType === "VERIFY" ? verifyMailHtml : resetPasswordMailHtml,
    };

    const mailresponse = await transporter.sendMail(mailoption);
    return mailresponse;
  } catch (error) {
    console.error("Error sending email:", error);
    throw new Error(error.message);
  }
};
