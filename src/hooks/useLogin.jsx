import { useMutation } from "@tanstack/react-query";
import { loginRequest } from "@/services/auth";

export const useLogin = ({ onSuccess, onError }) => {
  return useMutation({
    mutationFn: ({ email, password }) => loginRequest(email, password),
    onSuccess,
    onError,
  });
};
