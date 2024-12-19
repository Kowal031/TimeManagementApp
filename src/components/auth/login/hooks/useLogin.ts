import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  loginWithEmailAndPassword,
  loginWithGoogle,
} from "../../../../firebase/auth";

export const useLogin = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const loginUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      await loginWithEmailAndPassword(email, password);

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  const loginWithGoogleAccount = async () => {
    try {
      setLoading(true);
      setError(null);
      await loginWithGoogle();

      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { loginUser, loginWithGoogleAccount, loading, error };
};
