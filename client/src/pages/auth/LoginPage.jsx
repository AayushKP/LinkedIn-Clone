import { Link } from "react-router-dom";
import LoginForm from "../../components/auth/LoginForm";

const LoginPage = () => {
  return (
    <div className="h-[80vh] w-full max-w-lg mx-auto flex flex-col justify-center py-5 px-4 sm:px-5 lg:px-7">
      <div className="sm:mx-auto sm:w-full sm:max-w-md">
        <img className="mx-auto h-40 w-auto" src="/logo.svg" alt="LinkedIn" />
        <h2 className="text-center text-3xl font-extrabold text-gray-900">
          Sign in to your account
        </h2>
      </div>

      <div className="mt-8 sm:mx-auto mx-auto sm:w-full max-w-sm sm:max-w-sm shadow-md">
        <div className="bg-white py-8 px-10 shadow rounded-lg sm:rounded-lg sm:px-10">
          <LoginForm />
          <div className="mt-6">
            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">
                  New to LinkedIn?
                </span>
              </div>
            </div>
            <div className="mt-6">
              <Link
                to="/signup"
                className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-blue-600 bg-white hover:bg-gray-50"
              >
                Join now
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
