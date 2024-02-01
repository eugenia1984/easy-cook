import { LoginSection } from "../components/sections";
import { NoAuthLayout } from "../layouts";

const Login = () => {
  return (
    <NoAuthLayout>
      <LoginSection />
    </NoAuthLayout>
  )
};

export default Login;