import axios from "axios";
import { storage } from "../Storage";
import { store } from "../../Store/Config";
import { redirect } from "../History";
import {
  ACCESS_TOKEN,
  AUTH_STORE,
  REFRESH_TOKEN,
  AUTH_BEARER,
  AUTH_HEADER
} from "../../Constant/index";

import {
  actionUserLogin,
  actionShowNotification,
  actionLogOut
} from "../../Store/Action/index";

const API_BASE = process.env.REACT_APP_API_BASE;

const http = axios.create({
  baseURL: API_BASE,
  headers: {
    "Content-Type": "application/json"
  }
});

http.interceptors.response.use(
  res => res,
  error =>
    isLogged() && error.response.status === 401
      ? handlerRefreshSession(error)
      : prepareError(error)
);

class APIRequest {
  async tryRestoreSession() {
    try {
      let res = await http.get("/user/me");
      store.dispatch(actionUserLogin(res.data));
    } catch (e) {
      if (isLogged()) {
        alert("Session Expired");
      }
    }
  }

  async login(email, password) {
    let result = {};

    try {
      let res = await http.post("/auth/login", { email, password });
      result.status = res.status;
      result.body = res.data;

      saveSession(res.data.token);
    } catch (e) {
      result.status = e.response.status;
      result.body = e.response.data;
    }

    return result;
  }

  async singUp(user) {
    let result = {};
    try {
      let res = await http.post("/auth/sign-up", user);
      saveSession(res.data.token);
      store.dispatch(
        actionShowNotification("Registration completed successfully")
      );
      result.status = res.status;
      result.body = res.data;
    } catch (e) {
      result.status = e.response.status;
      result.body = e.response.data;
    }
    return result;
  }

  logOut() {
    deleteSession();
    redirect("/");
    store.dispatch(actionShowNotification("Log Out completed successfully"));
  }

  async getProductsList(size, page) {
    let url = `/product/list?size=${size}&page=${page}`;

    let response = await http.get(url);
    return {
      status: response.status,
      body: response.data
    };
  }

  async getCategoryList() {
    let url = `/category`;

    let response = await http.get(url);
    return {
      status: response.status,
      body: response.data
    };
  }

  async getProduct(id) {
    let response = await http.get("/product/" + id);

    return {
      status: response.status,
      body: response.data
    };
  }

  async addProduct(product) {
    let response = await http.post("/product/", product);

    return {
      status: response.status,
      body: response.data
    };
  }

  async deleteProduct(id) {
    return await http.delete("/product/" + id);
  }

  async editProduct(id, product) {
    let response = await http.put("/product/" + id, product);

    return {
      status: response.status,
      body: response.data
    };
  }

  async addComment(id, text, parentId) {
    let result = {};
    try {
      let response = await http.post("/comment/product", {
        parent: {
          id: parentId
        },
        product: {
          id
        },
        text
      });
      result.status = response.status;
      result.body = response.data;
    } catch (e) {
      result.status = e.response.status;
      result.body = e.response.data;
    }
    return result;
  }

  async editComment(id, parentId, productId, text) {
    let result = {};
    try {
      let response = await http.put("/comment/product", {
        id: id,
        parent: {
          id: parentId
        },
        product: {
          id: productId
        },
        text
      });
      result.status = response.status;
      result.body = response.data;
    } catch (e) {
      result.status = e.response.status;
      result.body = e.response.data;
    }
    return result;
  }

  async showComment(id, size, page) {
    let result = {};
    try {
      let url = `/comment/product/${id}?size=${size}&page=${page}`;

      let response = await http.get(url);

      result.status = response.status;
      result.body = response.data;
      console.log(result.body);
    } catch (e) {
      result.status = e.response.status;
      result.body = e.response.data;
    }
    return result;
  }
}

function saveSession({ accessToken, refreshToken }) {
  storage.set(AUTH_STORE, {
    [ACCESS_TOKEN]: accessToken,
    [REFRESH_TOKEN]: refreshToken
  });

  http.defaults.headers[AUTH_HEADER] = AUTH_BEARER + accessToken;
}

function deleteSession() {
  storage.delete(AUTH_STORE);
  delete http.defaults.headers[AUTH_HEADER];
  store.dispatch(actionLogOut());
}

function getSession() {
  return storage.get(AUTH_STORE);
}

function isLogged() {
  return getSession() !== null;
}

async function refreshSession() {
  let refreshToken = getSession()[REFRESH_TOKEN];

  delete http.defaults.headers[AUTH_HEADER];
  let res = await http.post("/auth/refresh-token", { refreshToken });

  saveSession(res.data.token);

  return res;
}

async function handlerRefreshSession(error) {
  try {
    let res = await refreshSession();

    error.config.headers[AUTH_HEADER] =
      AUTH_BEARER + res.data.token[ACCESS_TOKEN];

    return await http(error.config);
  } catch (e) {
    return prepareError(error);
  }
}

function prepareError(error) {
  return Promise.reject(error);
}

export const API = new APIRequest();
