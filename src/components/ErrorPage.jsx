import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div>
      <h1>Error 404, this page does not exist.</h1>
      <Link to="/">Return to home.</Link>
    </div>
  );
};

export default ErrorPage;
