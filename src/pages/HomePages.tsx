import { useForm } from "react-hook-form";
import "./styles/HomePages.css";
import { Toaster, toast } from "sonner";

interface Password {
  password: string;
}

const HomePages = () => {
  const { handleSubmit, reset, register } = useForm<Password>();

  const submit = (data: Password) => {
    console.log(data);
    const toasId = toast.loading("loading...");
    if (data.password !== "123456") {
      setTimeout(() => {
        toast.error("Contraseña Incorrecta", {
          id: toasId,
        });
      }, 1000);
    } else {
      localStorage.setItem("password", data.password);
      setTimeout(() => {
        toast.success("Bienvenida Princesa", {
          id: toasId,
        });
        setTimeout(() => {
          window.location.reload();
        }, 1000);
      }, 1000);
    }
    reset();
  };

  const handleClose = () => {
    const toasId = toast.loading("loading...");
    localStorage.removeItem("password");
    setTimeout(() => {
      toast.success("Vuelve pronto", {
        id: toasId,
      });
    }, 1000);
    setTimeout(() => {
      window.location.reload();
    }, 2000);
  };

  const verifyPassword = localStorage.getItem("password");

  return (
    <>
      <div className="img__container">
        <img className="img__home" src="/img-1.jpg" alt="" />
      </div>
      {!verifyPassword ? (
        <form className="form__container" onSubmit={handleSubmit(submit)}>
          <label className="form__label">
            <span className="form__span"> Ingresa tu contraseña </span>
            <input
              className="form__input"
              {...register("password")}
              type="password"
            />
          </label>
          <button className="form__btn">Entrar</button>
        </form>
      ) : (
        <div className="form__container" >
          <button onClick={handleClose} className="form__btn">
            Salir
          </button>
        </div>
      )}
      <Toaster 
        richColors
        theme="dark"
      />
    </>
  );
};

export default HomePages;
