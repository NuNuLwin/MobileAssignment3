const fetchUserData = async () => {
  try {
    const respnse = await fetch("https://jsonplaceholder.typicode.com/users/");
    const jsonData = await respnse.json();
    console.log("data", jsonData);
    return jsonData;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
};
export { fetchUserData };
