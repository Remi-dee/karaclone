const getTokenFromLocalStorage = () => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const token = localStorage.getItem("auth_token");
    return token;
  } catch (error) {
    console.error("Error fetching token from local storage:", error);
    return null;
  }
};

export default getTokenFromLocalStorage;
