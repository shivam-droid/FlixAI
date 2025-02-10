import { useDispatch } from "react-redux";
import { account } from "../appwrite/appwriteConfig";
import { addUser } from "../utils/userSlice";
import { v4 as uuidv4 } from "uuid";

const useSignup = () => {
  const dispatch = useDispatch();

  const signupUser = async (email, password, name) => {
    try {
      // Step 1: Create user account
      await account.create(uuidv4(), email, password, name);

      // Step 2: Create a session (IMPORTANT)
      await account.createEmailPasswordSession(email, password);

      // Step 3: Update user preferences (ONLY after session is active)
      await account.updatePrefs({
        profilePic: `https://avatar.iran.liara.run/public/boy?username=${name}`,
      });

      // Step 4: Fetch user details to verify session
      const res = await account.get();

      // Step 5: Dispatch user details to Redux
      const { email: userEmail, name: userName, prefs } = res;
      dispatch(
        addUser({
          email: userEmail,
          name: userName,
          pic: prefs?.profilePic || "",
        })
      );
      localStorage.setItem("user",JSON.stringify({email, name, pic: prefs?.profilePic || ""}));
      
    } catch (error) {
      console.error("Signup Error:", error.message);
    }
  };

  return { signupUser };
};

export default useSignup;
