
import api from "./axios";

// 모든 todos를 가져오는 api
const getTodos = async (date) => {
  const response = await api.get(`/posts/todo?date=${date}`);
  return response.data;
};

const communitygetTodos = async (category) => {
  const response = await api.get(`/posts/communities?category=${category}`);
  return response.data;
};

//todo list 작성
  const addTodo = async (newTodo) => {
      await api.post("/posts/todo", newTodo);
    };
    

  const getHeartCount = async (id) => {
    await api.get(`/posts/communities/todo/like/${id}`);
  };

  const removeTodo = async (id) => {
    await api.delete(`/posts/${id}`);
  };
  
  //payload에는 바뀐 done 값이 들어있음.
  const checkSwitchTodo = async (payload) => {
    await api.patch(`/posts/todo/done/{payload.id}`, {
      done: payload.done,
    });
  };

  //Todo List 수정
  const switchTodo = async (payload) => {
    await api.put(`/posts/todo/{payload.id}`, {
      content: payload.content,
      category: payload.category,
    });
  };

  const publicSwitchTodo = async (payload) => {
    await api.patch(`/posts/open/{payload.id}`, {
      done: payload.done,
    });
  };
  

const postSignup = async (payload) => {
  try {
    const response = await api.post("/users",   {
      email: payload.email,
      nickname: payload.nickname,
      password: payload.password,
    });
    return response;
  } catch (error) {
    console.log(error);
  }
};

export const getCheckId = async (payload) => {
  try {
    const response = await api.get("/users");
    console.log(response.data);
    return response.data.success;
  } catch (error) {
    console.log(error);
  }
};

export const requestLogin = async (id, password) => {
  try {
    const response = await api.post(
      "/users",
      {
        id,
        password,
      },
      { withCredentials: true }
    );

    // 로컬 스토리지에 access_token과 refresh_token 저장
    localStorage.setItem("access_token", response.data.access_token);
    localStorage.setItem("refresh_token", response.data.refresh_token);

    // axios 인스턴스의 default header에 access_token 설정
    // axios.defaults.headers.common[
    //   "Authorization"
    // ] = `Bearer ${response.data.access_token}`;

    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return "이메일 혹은 비밀번호를 확인하세요.";
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

export { publicSwitchTodo,postSignup,getTodos, addTodo, removeTodo, checkSwitchTodo,communitygetTodos,getHeartCount, switchTodo};


