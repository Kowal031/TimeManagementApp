import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { registerWithEmailAndPassword } from "../../../../firebase/auth";

export const useRegister = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const registerUser = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      await registerWithEmailAndPassword(email, password);
      navigate("/dashboard");
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return { registerUser, loading, error };
};
