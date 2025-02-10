import { useDispatch } from "react-redux";
import { account } from "../appwrite/appwriteConfig";
import { addUser } from "../utils/userSlice";

const useSignin = () => {
  const dispatch = useDispatch();

  const signinUser = (email, password) => {
    try {
      // Correct method: Create session
      account
        .createEmailPasswordSession(email, password)
        .then(() => {
          return account.get();
        })
        .then((res) => {
          const { email, name, prefs } = res;
          dispatch(addUser({ email, name, pic: prefs?.profilePic || "" }));
          localStorage.setItem("user",JSON.stringify({email, name, pic: prefs?.profilePic || ""}));
        })
      

      // Get user details
    } catch (error) {
      console.error("Sign-in error:", error.message);
    }
  };

  return { signinUser };
};

export default useSignin;
