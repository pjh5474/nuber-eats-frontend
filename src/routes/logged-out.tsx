import { useForm } from "react-hook-form";
import { isLoggedInVar } from "../apollo";

interface IForm {
  email: string;
  password: string;
}

export const LoggedOut = () => {
  const onClick = () => {
    isLoggedInVar(true);
  };

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors },
  } = useForm<IForm>();

  const onSubmit = () => {
    console.log(watch());
  };

  const onInvalid = () => {
    console.log(errors);
  };

  return (
    <div>
      <h1>Logged Out</h1>
      <form onSubmit={handleSubmit(onSubmit, onInvalid)}>
        <div>
          <input
            {...register("email", {
              required: "Email is required",
              pattern: /^[A-Za-z0-9._%+-]+@gmail.com$/,
            })}
            name="email"
            type="email"
            placeholder="Email"
          />
          {errors.email?.message && (
            <span className=" text-red-600 font-bold ">
              {errors.email?.message}
            </span>
          )}
          {errors.email?.type === "pattern" && (
            <span className=" text-red-600 font-bold ">Only gmail allowed</span>
          )}
        </div>
        <div>
          <input
            name="password"
            type="password"
            placeholder="Password"
            required
          />
        </div>

        <button className="bg-yellow-300 text-white">Submit</button>
      </form>
    </div>
  );
};
