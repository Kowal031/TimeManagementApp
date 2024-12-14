import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { registerSchema } from "../../../shared/yup/validationSchemas";
import { useRegister } from "./hooks/useRegister";

const Register = () => {
  const { registerUser, loading, error } = useRegister();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(registerSchema),
  });

  const onSubmit = async (data: { email: string; password: string }) => {
    await registerUser(data.email, data.password);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h2>Register</h2>
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
        {loading ? "Registering..." : "Register"}
      </button>
    </form>
  );
};

export default Register;
