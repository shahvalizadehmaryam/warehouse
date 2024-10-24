const setCookie = (name, value) => {
  const maxAge = 30 * 24 * 60 * 60;
  document.cookie = `${name} = ${value}; max-age=${maxAge} path=/`;
};
function getCookie() {
//   const value = `; ${document?.cookie}`;
//   console.log("1", value);
//   const parts = value?.split(`; ${name}=`);
//   console.log("2", parts);
//   console.log("3", parts?.pop()?.split(";")?.shift());
//   if (parts?.length === 2) return parts?.pop()?.split(";")?.shift();
}
export { setCookie, getCookie };
