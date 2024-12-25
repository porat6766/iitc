const getAuthTokenFromCookie = () => {
  const cookies = document.cookie.split("; ");
  console.log(cookies);

  const tokenCookie = cookies.find((cookie) => cookie.startsWith("token"));
  console.log(tokenCookie);
  return tokenCookie ? tokenCookie.split("=")[1] : null;
};

export default getAuthTokenFromCookie;
