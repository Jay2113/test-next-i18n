import { Auth } from "aws-amplify";
import { AuthStatus } from "../../../src/contexts/auth/types";

const handler = async (req, res) => {
  try {
    await Auth.signOut();
    res.status(200).json({
      authenticated: false,
    } as AuthStatus);
  } catch (error) {
    console.log("error signing out: ", error);
  }
};

export default handler;
