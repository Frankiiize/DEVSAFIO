import request from "../index";

export const login = async function (user) {
  return request({
    method: "POST",
    body: JSON.stringify(user) ,
    url: `/auth/login`,
  });
};

export const register = async function (user) {
  return request({
    method: "POST",
    body: JSON.stringify(user) ,
    url: `/auth/register`,
  });
};
export const workProfile = async function (user) {
  return request({
    method: "POST",
    body: JSON.stringify(user) ,
    url: `/work-profiles`,
  });
};
export const logout = async function () {
  return request({
    method: "DELETE",
    url: `/auth/logout`,
  });
};



