
import api from "./axios";

// 모든 todos를 가져오는 api
// const getTodos = async (date) => {
//   const response = await api.get(`/posts/todo?date="${date}"`);
//   return response;
// };

export const getTodos = async (date) => {
  
  try {
    console.log(date);
    const response = await api.get("/posts/todo", {
      params: { date: date },
      
    });
    console.log(response.data);
    return response;
  } catch (error) {
    console.log(error);
  }
 
};

const communitygetTodos = async (category) => {
  const response = await api.get(`/posts/communities?category="${category}"`);
  response.data.map((item)=>item.count)
  return response;

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
      open: payload.open,
    });
  };
  
  //-----------------------------

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
    const response = await api.get("/users/email-check", {
      params: { email: payload },
    });
    console.log(response.data);
    return response.data.success;
  } catch (error) {
    console.log(error);
  }
};

export const requestLogin = async (payload) => {
  try {
    const response = await api.post(
      "/users/login",
      {
        email: payload.email,
        password: payload.password
      },
      { withCredentials: true }
    );

    // 로컬 스토리지에 access_token과 refresh_token 저장
    localStorage.setItem("access_token", response.data.token);
    // localStorage.setItem("refresh_token", response.data.refresh_token);

    //axios 인스턴스의 default header에 access_token 설정
    api.defaults.headers.common[
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
    const response = await api.get(
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

export { publicSwitchTodo,postSignup, addTodo, removeTodo, checkSwitchTodo,communitygetTodos,getHeartCount, switchTodo};

