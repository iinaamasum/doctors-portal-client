import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';
import loginImg from '../../../assets/images/login.png';
import Navbar from '../../Shared/Navbar';
import Social from '../Social/Social';

const Login = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();
  const onSubmit = (data) => console.log(data);
  return (
    <section>
      <Navbar />

      <div
        style={{ maxWidth: '1024px' }}
        className="container mx-auto px-4 my-10 md:my-16"
      >
        <div className="md:flex md:flex-row-reverse">
          <div className="w-full md:w-1/2 hidden md:block">
            <img src={loginImg} alt="" />
          </div>

          <div class="card w-full md:w-1/2 bg-base-100 shadow-lg mr-2">
            <div class="card-body mt-6">
              <h2 class="card-title mx-auto text-4xl md:my-5">LogIn</h2>
              <form className="w-full" onSubmit={handleSubmit(onSubmit)}>
                <div class="form-control w-full">
                  <label class="">
                    <span class="text-secondary font-semibold text-lg">
                      Email
                    </span>
                  </label>
                  <input
                    type="text"
                    placeholder="example@email.com"
                    class="input input-bordered w-full"
                    {...register('email', {
                      required: {
                        value: true,
                        message: 'Email Required !!!',
                      },
                      pattern: {
                        value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/i,
                        message: 'Invalid Email Provided !!!',
                      },
                    })}
                  />
                  <label class="level font-bold">
                    {errors.email?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                    {errors.email?.type === 'pattern' && (
                      <span className="label-text-alt text-red-500">
                        {errors.email.message}
                      </span>
                    )}
                  </label>
                </div>
                <div class="form-control w-full">
                  <label class="">
                    <span class="text-secondary font-semibold text-lg">
                      Password
                    </span>
                  </label>
                  <input
                    type="password"
                    placeholder="abcd123$"
                    class="input input-bordered w-full"
                    {...register('password', {
                      required: {
                        value: true,
                        message: 'Password Required !!!',
                      },
                      pattern: {
                        value: /(?=.*[!#$%&?^*@~() "])(?=.{8,})/,
                        message:
                          'Password Must be 8 char including a special char !!!',
                      },
                    })}
                  />
                  <label class="level font-bold">
                    {errors.password?.type === 'required' && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                    {errors.password?.type === 'pattern' && (
                      <span className="label-text-alt text-red-500">
                        {errors.password.message}
                      </span>
                    )}
                  </label>
                </div>
                <p className="mt-10">
                  Don't have an account?{' '}
                  <Link
                    className="btn-link text-purple-500 font-semibold"
                    to="/signup"
                  >
                    Create Account Now
                  </Link>
                </p>
                <p>
                  Forgot Password?{' '}
                  <Link
                    className="btn-link text-purple-500 font-semibold"
                    to="/signup"
                  >
                    Click Here To Reset
                  </Link>
                </p>

                <input
                  className="btn my-3 w-full tracking-wider capitalize text-xl"
                  value="LogIn"
                  type="submit"
                />
                <div class="divider">Social LogIn</div>
                <Social />
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
