const UncontrolledForm = ({ register }) => {
  const HandleSubmit = (e) => {
    e.preventDefault();

    const username = e.target.elements.username.value;
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    register({ username, email, password });
    e.target.reset();
  };
  return (
    <div>
      <h2>UncontrolledForm</h2>
      <form onSubmit={HandleSubmit}>
        <label>
          <span>Name:</span>
          <input type="text" placeholder="Enter your name:" name="username" />
        </label>
        <label>
          <span>Email:</span>
          <input type="text" placeholder="Enter your email:" name="email" />
        </label>
        <label>
          <span></span>
          <input
            type="password"
            placeholder="Enter your password"
            name="password"
          />
        </label>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default UncontrolledForm;
