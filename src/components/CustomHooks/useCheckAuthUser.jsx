import { useEffect } from "react";
import RemoveAuthUser from "../../Helpers/RemoveAuthUser";
import { jwtDecode } from "jwt-decode";
function useCheckAuthUser() {
  useEffect(() => {
    const checkAuth = () => {
      const user = JSON.parse(localStorage.getItem("user"));
      const validToRaw = user?.validTo;

      if (!validToRaw) {
        console.warn("No validTo found. Removing user.");
        RemoveAuthUser();
        return;
      }

      // Treat the date as local by removing the 'Z'
      const validToLocal = validToRaw.replace(/Z$/, ""); // removes the 'Z' from end
      const expiryTime = new Date(validToLocal).getTime(); // treated as local time
      const currentTime = new Date().getTime(); // local time

      const timeLeftMinutes = (expiryTime - currentTime) / 1000 / 60;

      console.log(
        `⏱ Token expires in: ${timeLeftMinutes.toFixed(2)} minutes`,
        "\n📅 ValidTo (local):",
        validToLocal,
        "\n🕓 Current time (local):",
        new Date(currentTime).toLocaleString()
      );

      if (currentTime > expiryTime) {
        console.warn("🚫 Token has expired. Logging out...");
        //RemoveAuthUser();
      }
    };

    checkAuth(); // Run once immediately
    const interval = setInterval(checkAuth, 60 * 1000); // Run every 1 minute

    return () => clearInterval(interval);
  }, []);
}

export default useCheckAuthUser;
