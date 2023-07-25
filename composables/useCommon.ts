export default function () {
  const getToken = () => {
    return JSON.parse(localStorage.getItem("token") || "");
  };
  return {
    getToken,
  };
}
