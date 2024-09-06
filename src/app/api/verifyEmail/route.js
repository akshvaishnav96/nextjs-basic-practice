import { NextResponse } from "next/server";
import User from "../../../models/user";

import connection from "@/database/dbconn";
connection();

export async function POST(request) {
  try {
    const { token } = await request.json();


    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpire: { $gt: Date.now() }
    }).select('-password -verifyToken');


    if (!user) {
      return NextResponse.json(
        { msg: "invalid user token",flag:false },
        { status: 400 }
      );
    }

    user.isVarified = true;
    user.verifyToken = undefined;
    user.verifyTokenExpire = undefined;
    const updatedUser = await user.save();

    return NextResponse.json(
      { msg: "user successfully verified",flag:true},
      { status: 201 }
    );
  } catch (error) {

      return NextResponse.json(
        { msg: error.message,flag:false},
        { status: 400 }
    );
  }
}
