import api from "./axios";
import axios from "axios";

// 모든 todos를 가져오는 api
const getTodos = async () => {
  const response = await api.get("/todos");
  return response;
};


const addTodo = async (newTodo) => {
    await api.post("/todos", newTodo);
  };

  const removeTodo = async (id) => {
    await api.delete(`/todos/${id}`);
  };
  
  const switchTodo = async (payload) => {
    await api.patch(`/todos/${payload.id}`, {
      isDone: payload.isDone,
    });
  };

const postSignup = async (payload) => {
  try {
    const response = await api.post("/users/signup",   {
      email: payload.email,
      nickname: payload.nickname,
      password: payload.password,
      passwordCheck: payload.passwordCheck,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCheckId = async (payload) => {
  try {
    const response = await api.get("/users/email-check");
    console.log(response.data);
    return response.data.success;
  } catch (error) {
    console.log(error);
  }
};

export const requestLogin = async (email, password) => {
  try {
    const response = await api.post(
      "/users/login",
      {
        email,
        password,
      },
      { withCredentials: true }
    );

    // 로컬 스토리지에 access_token과 refresh_token 저장
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);

    //axios 인스턴스의 default header에 access_token 설정
    axios.defaults.headers.common[
      "Authorization"
    ] = `Bearer ${response.data.access_token}`;

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return "이메일 혹은 비밀번호를 확인하세요.";
  }
};

export const requestLogout = async () => {
  try {
    const access_token = localStorage.getItem('access_token');
    const response = await api.post(
      "/users/logout",
      {},
      {
        headers: {
          Authorization: `Bearer ${access_token}`,
        },
      },
    );
    localStorage.removeItem('access_token');
    return response;
  } catch (error) {
    console.error(error);
    throw new Error('로그아웃 실패');
  }
};

  export const requestAccessToken = async (refresh_token) => {
    return await api
      .post("/users", {
        refresh: refresh_token,
      })
      .then((response) => {
        return response.data.access;
      })
      .catch((e) => {
        console.log(e.response.data);
      });
  };

  // export const checkAccessToken = async (refresh_token) => {
  //   if (axios.defaults.headers.common["Authorization"] === undefined) {
  //     return await requestAccessToken(refresh_token).then((response) => {
  //       return response;
  //     });
  //   } else {
  //     return axios.defaults.headers.common["Authorization"].split(" ")[1];
  //   }
  // };

  export const checkAccessToken = async (refresh_token) => {
    if (api.defaults.headers.common["Authorization"] === undefined) {
      const access_token = await requestAccessToken(refresh_token);
      api.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${access_token}`;
      return access_token;
    } else {
      return api.defaults.headers.common["Authorization"].split(" ")[1];
    }
  };


export { getTodos, addTodo, removeTodo, switchTodo, postSignup };
