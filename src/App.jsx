import './App.css';
import Router from './shared/Router';
import { QueryClient, QueryClientProvider } from "react-query";
import store from "./redux/config/configStore";
import { Provider } from "react-redux";

const queryClient = new QueryClient();

function App() {

  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <Router />
      </Provider>
    </QueryClientProvider>
  )
}

export default App;
