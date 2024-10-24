const setCookie = (name,value) => {
    const maxAge = 30 * 24 * 60 * 60;
    document.cookie = `${name} = ${value}; max-age=${maxAge} path=/`
};
const getCookie = () => {};
export { setCookie, getCookie };
