

export const getUser = async (token, next = (f) => f) => {
  
  const headers = {
    Authorization: `Bearer ${token}`,
  };
  return {
    payload: {
      url: "/user",
      options: {
        method: "GET",
        headers,
      },
      next,
    },
  };
};

export const actionLogin = async (payload = {}, next = (f) => f) => {
  let headers = {};
  payload.type == "multipart"
    ? (headers = {
        "Content-Type": "multipart/form-data",
        'Access-Control-Allow-Origin': 'http://localhost:5173'
      })
    : (headers = {});

  return {
    payload: {
      url: "auth/login",
      options: {
        method: "POST",
        headers,
      },
      payload: payload.values,
      successType: "LOGIN_SUCCESS",
      next: async (err, response = {}) => {
        next(err, response);
      },
    },
  };
};

export const actionLogout = async (next = (f) => f) => {
  return {
    payload: {
      url: "/auth",
      options: { method: "POST" },
      successType: "LOGOUT_SUCCESS",
      next: async () => {
        AuthStorage.destroy();
        next();
      },
    },
  };
};
