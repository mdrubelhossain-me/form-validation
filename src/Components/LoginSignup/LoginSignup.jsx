import React from "react";
import "./LoginSignup.css";
import { useForm } from "react-hook-form";

const LoginSignup = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    watch
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <div className="overflow-hidden">
      <div className="row justify-content-center mt-5">
        <div className="col-lg-4 col-md-5 col-sm-12">
          <div className="card p-4">
            <form onSubmit={handleSubmit(onSubmit)} action="">
              <div className="mb-3">
                <label for="name" className="form-label">
                  Enter Name
                </label>
                <input
                  {...register("name", {
                    required: "This field is required",
                    minLength: { value: 3, message: "Minimum 3 Character" },
                  })}
                  type="text"
                  className={
                    errors.name ? "form-control is-invalid" : "form-control"
                  }
                  id="name"
                />
                <span className="d-block text-danger">
                  {errors.name?.message}
                </span>
              </div>
              <div className="mb-3">
                <label for="email" className="form-label">
                  Email address
                </label>
                <input
                  {...register("email", {
                    pattern: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  })}
                  type="email"
                  className={
                    errors.email ? "form-control is-invalid" : "form-control"
                  }
                  id="email"
                />
                {errors?.email?.type === "pattern" && (
                  <span className="d-block text-danger">Invalid Pattern</span>
                )}
              </div>
              <select
                {...register("gender")}
                className="form-select mb-3"
                aria-label="gender"
              >
                <option selected>Gender</option>
                <option value="male">Male</option>
                <option value="female">Female</option>
              </select>
              <div className="mb-3">
                <label for="age" className="form-label">
                  Age
                </label>
                <input
                  {...register("age", {
                    min: { value: 10, message: "Age must be 18+" },
                  })}
                  type="text"
                  className={
                    errors.age ? "form-control is-invalid" : "form-control"
                  }
                  id="age"
                />
                <span className="d-block text-danger">
                  {errors.age?.message}
                </span>
              </div>
              <div className="mb-3">
                <label for="password" className="form-label">
                  Enter Password
                </label>
                 <input
                  {...register("password", {
                    pattern: /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/
                  })}
                  type="password"
                  className={
                    errors.password ? "form-control is-invalid" : "form-control"
                  }
                  id="password"
                />
                {errors?.password?.type === "pattern" && (
                  <span className="d-block text-danger">Must be Lowercase, Uppercase, Number and Special Character</span>
                )}
              </div>
              <div className="mb-3">
                <label for="repassword" className="form-label">
                  Re-Enter Password
                </label>
                <input
                  {...register("repass", {validate: data =>{
                    if(watch('password') !== data){
                        return "Password doesn't match"
                    }
                  }})}
                  type="password"
                  className="form-control"
                  id="repassword"
                />
                  <span className="d-block text-danger">
                  {errors.repass?.message}
                </span>
              </div>
              <div className="mb-3">
                <input type="submit" className="btn btn-primary" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
