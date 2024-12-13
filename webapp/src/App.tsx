import { AppRoutes } from './routes';
import { BrowserRouter } from 'react-router-dom';
import {SessionWrapper} from "@/modules/authentication/session/wrapper";

function App() {
  return (
    <SessionWrapper>
    <BrowserRouter>
      <AppRoutes />
    </BrowserRouter>
    </SessionWrapper>
  );
}

export default App;
