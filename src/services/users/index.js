import request from "../index";

export const login = async function (user) {
  return request({
    method: "POST",
    body: JSON.stringify(user) ,
    url: `/login`,
    getHeaders: true,
  });
};

