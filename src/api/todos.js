
import api from "./axios";

export const getTodos = async (date) => {
  
  try {
    
    const response = await api.get("/posts/todo", {
      params: { date: date },
      
    });
    
    return response.data;

  } catch (error) {
    console.log(error);
  }
 
};

export const communitygetTodos = async (category) => {
  try {
    if(category === undefined){
      const response = await api.get("/posts/communities", {
      });
      console.log(response.data);
      return response.data;
      
    }  
    else{
      const response = await api.get("/posts/communities/category", {
        params: { category: category },
      });
      console.log(response.data);
      return response.data;
    }
  
  } 
  catch (error) {
    console.log(error);
  }
};
  
 

//todo list 작성
export  const addTodo = async (newTodo) => {
      await api.post("/posts/todo", newTodo);
    };
    

// export  const getHeartCount = async (count) => {
//     await api.get("/posts/communities/todo/like/",{
//       params: { count: count },
//     });
//   };

export  const removeTodo = async (id) => {
    try{
      await api.delete(`/posts/todo/${id}`);
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
  

  export const Likeswitch = async (payload) => {
    try{
      await api.put(`/posts/communities/like/${payload.postId}`, {
        likeStatus:payload.likeStatus,        
      });
      
    }
    catch{
      console.log(payload);
      return null;
    }
  };

  
  export const publicSwitchTodo = async (payload) => {
    try{
      await api.put(`/posts/open`, {
        date:payload.date,
        open: payload.open,
        
      });
      console.log(payload.open);
    }
    catch{
      console.log(payload);
      return null;
    }
  };
  
  //-----------------------------

  export const postSignup = async (payload) => {
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
  localStorage.removeItem('access_token');
  const response = await api.get(
  "/users/logout",
  );
  return response;
  } catch (error) {
  console.error(error);
  
  }
  };




