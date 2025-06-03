import { useContext, useState, useEffect } from "react";
import loginImg from "../../../assets/images/login.png";
import { loginRequest } from "@/services/auth";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "@/context/authContext";
import Spinner from "@/components/Spinner";
import { Link } from "react-router-dom";
import { validarEmailCompleto } from "@/lib/validations";

export const Login = () => {
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const [recordar, setRecordar] = useState(false);
  const [erroresCampos, setErroresCampos] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();
  const { login, user } = useContext(AuthContext);

  // ✅ Si ya está logueado, redirige automáticamente
  useEffect(() => {
    if (user && user.role) {
      const rutasPorRol = {
        PACIENTE: "/intranet/paciente",
        MEDICO: "/intranet/medico",
        RECEPCIONISTA: "/intranet/recepcionista",
        ADMINISTRADOR: "/intranet/admin/usuarios",
      };
      navigate(rutasPorRol[user.role] || "/404");
    }
  }, [user]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError(false);
    setLoading(true);

    const email = e.target.email.value.trim();
    const password = e.target.password.value.trim();

    const nuevosErrores = {
      email: validarEmailCompleto(email) || "",
      password:
        password.length < 6
          ? "La contraseña debe tener al menos 6 caracteres"
          : "",
    };

    setErroresCampos(nuevosErrores);

    const hayErrores = Object.values(nuevosErrores).some((e) => e !== "");
    if (hayErrores) {
      setLoading(false);
      return;
    }

    try {
      const resLogin = await loginRequest(email, password);
      login(resLogin);

      const storage = recordar ? localStorage : sessionStorage;
      storage.setItem("authUser", JSON.stringify(resLogin));

      const rutasPorRol = {
        PACIENTE: "/intranet/paciente",
        MEDICO: "/intranet/medico",
        RECEPCIONISTA: "/intranet/recepcionista",
        ADMINISTRADOR: "/intranet/admin/usuarios",
      };

      navigate(rutasPorRol[resLogin?.role] || "/404");
    } catch (error) {
      console.error("Error en el inicio de sesión:", error);
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section className="flex flex-col md:flex-row h-screen w-full bg-white">
      <div className="hidden md:flex w-1/2 bg-[#ffffff] items-start justify-center pt-10">
        <div className="bg-[#e4e9f5] rounded-3xl w-[740px] h-[92%] flex items-end justify-center overflow-hidden">
          <img
            src={loginImg}
            alt="Login Illustration"
            className="w-[99%] object-contain mb-0"
          />
        </div>
      </div>

      <div className="flex w-full md:w-[50%] items-center justify-center px-4 sm:px-12 min-h-screen">
        {loading ? (
          <Spinner size={10} />
        ) : (
          <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-6">
            <h1 className="text-4xl font-bold text-center">Inicia sesión</h1>

            <div>
              <p className="font-semibold mb-2">Ingresa tus datos</p>
              <input
                required
                type="email"
                name="email"
                placeholder="Correo Electrónico"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F71A1]"
              />
              {erroresCampos.email && (
                <p className="text-sm text-red-600 mt-1">
                  {erroresCampos.email}
                </p>
              )}
            </div>

            <div>
              <input
                required
                type="password"
                name="password"
                placeholder="Contraseña"
                className="w-full border border-gray-300 rounded-lg py-2 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-[#2F71A1]"
              />
              {erroresCampos.password && (
                <p className="text-sm text-red-600 mt-1">
                  {erroresCampos.password}
                </p>
              )}
            </div>

            {error && (
              <p className="text-red-500 text-sm">* Credenciales incorrectas</p>
            )}

            <div className="flex justify-between items-center text-sm text-gray-700">
              <label className="flex items-center gap-2">
                <input
                  type="checkbox"
                  checked={recordar}
                  onChange={(e) => setRecordar(e.target.checked)}
                />
                Recuérdame
              </label>
              <a href="#" className="text-[#2F71A1] font-medium">
                Olvidé mi contraseña
              </a>
            </div>

            <button
              type="submit"
              className="w-full bg-[#2F71A1] text-white py-2 rounded-full font-semibold hover:bg-[#1B4F73] transition"
            >
              Ingresa
            </button>

            <hr />

            <p className="text-center text-sm">
              ¿No tienes una cuenta?{" "}
              <Link to="/registro" className="text-[#2F71A1] font-semibold">
                Regístrate aquí
              </Link>
            </p>
          </form>
        )}
      </div>
    </section>
  );
};
