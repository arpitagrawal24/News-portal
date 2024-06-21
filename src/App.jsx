import store from "./redux/store"
import { Provider } from "react-redux"
import { Outlet } from 'react-router-dom'

const App = () => {
  return (
    <Provider store={store}>
      <Outlet />
    </Provider>
  );
};

export default App;
