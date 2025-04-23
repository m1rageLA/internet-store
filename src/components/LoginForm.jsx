import React from 'react';

function LoginForm() {
  return (
    <div>
      <h2>Login</h2>
      <form>
        <input type="text" placeholder="Username" />
        <input type="password" placeholder="Password" />
        <button type="submit">Log In</button>
      </form>
    </div>
  );
}

export default LoginForm;
