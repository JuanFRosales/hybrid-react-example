import { useForm } from "../hooks/FormHooks";
import { useUser } from "../hooks/apiHooks";
import { User } from "../types/DBTypes";

const RegisterForm = () => {

  const {postUser} = useUser();

  const initValues = {username: '', email: '', password: ''};

  const doRegister = async () => {
    try {
      console.log('doRegister', inputs);
      await postUser(inputs);
    }
    catch (error) {
      console.error(( error as Error).message);
    }
  };
  const {handleSubmit, handleInputChange, inputs} = useForm(

    doRegister,
    initValues,
  );


  return (
    <>
      <h3>Register</h3>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            name="username"
            type="text"
            id="username"
            onChange={handleInputChange}
            autoComplete="username"
          />
        </div>
        <div>
          <label htmlFor="email">Email</label>
          <input
            name="email"
            type="email"
            id="email"
            onChange={handleInputChange}
            autoComplete="email"
          />
        </div>

        <div>
          <label htmlFor="password">Password</label>
          <input
            name="password"
            type="password"
            id="password"
            onChange={handleInputChange}
            autoComplete="current-password"
          />
        </div>
        <button type="submit">Register</button>
      </form>
    </>
  );
};


export default RegisterForm;
