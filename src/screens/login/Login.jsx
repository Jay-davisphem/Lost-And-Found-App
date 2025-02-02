import React from "react";
import { Link } from "react-router-dom";
import { Container } from "react-bootstrap";
import Layout from "../../layouts/Layout";

function Login() {
  return (
    <Layout>
      <Container>
        <form>
          <h3>Login</h3>

          <div className="form-group">
            <label>Email address</label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email"
            />
          </div>

          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              className="form-control"
              placeholder="Enter password"
            />
          </div>

          <div className="form-group">
            <div className="custom-control custom-checkbox">
              <input
                type="checkbox"
                className="custom-control-input"
                id="customCheck1"
              />
              <label className="custom-control-label" htmlFor="customCheck1">
                Remember me
              </label>
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-block">
            Submit
          </button>
          <p className="forgot-password text-right">
            Forgot <Link to="/forgot">password?</Link>
          </p>
        </form>
      </Container>
    </Layout>
  );
}

export default Login;
