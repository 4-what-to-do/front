
import api from "./axios";


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

export const communitygetTodos = async (category) => {
  const response = await api.get("/posts/communities", {

    params: { category: category },
    
  });

  const count = response.data.map((item)=>item.count)
    return [response,count];
}


//todo list 작성

export const addTodo = async (newTodo) => {

  const addTodo = async (newTodo) => {

      await api.post("/posts/todo", newTodo);
    };
    
  }

export const getHeartCount = async (id) => {

    await api.get("/posts/communities/todo/like/",{
      params: { postid: id },
    });
  };

export  const removeTodo = async (id) => {
    try{
      await api.delete(`/posts/${id}`);
    }
    catch{
      return null;
    }
  };
  
  //payload에는 바뀐 done 값이 들어있음.
  export  const checkSwitchTodo = async (payload) => {
    try{
      await api.put(`/posts/todo/done/${payload.id}`, {
        done: payload.done,
      });
    }
    catch{
      return null;
    }
  };

  //Todo List 수정
  export const switchTodo = async (payload) => {
    try{
      await api.put(`/posts/todo/${payload.id}`, {
        content: payload.content,
        category: payload.category,
    });
    }
    catch{
      return null;
    }
  };

  export const publicSwitchTodo = async (payload) => {
    try{
      await api.put(`/posts/open/${payload.id}`, {
        open: payload.open,
      });
    }
    catch{
      return null;
    }
  }


  
  //-----------------------------


  export const postSignup = async (payload) => {

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
  }

export const getCheckId = async (payload) => {

  console.log(payload);

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








