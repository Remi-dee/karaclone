const getTokenFromLocalStorage = (token = "auth_token"): string | null => {
  if (typeof window === "undefined") {
    return null;
  }

  try {
    const storedToken = localStorage.getItem(token);
    return storedToken;
  } catch (error) {
    console.error("Error fetching  from local storage");
    return null;
  }
};

export default getTokenFromLocalStorage;
