import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../../shared/yup/validationSchemas";
import { useLogin } from "./hooks/useLogin";

const Login = () => {
  const { loginUser, loginWithGoogleAccount, loading, error } = useLogin();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    await loginUser(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Login</h2>
      <div>
        <label>Email</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>
      <div>
        <label>Password</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>
      {error && <p style={{ color: "red" }}>{error}</p>}
      <button type="submit" disabled={loading}>
        {loading ? "Logging in..." : "Login"}
      </button>
      <button
        type="button"
        onClick={loginWithGoogleAccount}
        disabled={loading}
        style={{
          marginTop: "10px",
          backgroundColor: "#4285F4",
          color: "white",
        }}
      >
        {loading ? "Logging in with Google..." : "Login with Google"}
      </button>
    </form>
  );
};

export default Login;
