import { Link } from "react-router-dom";

const Error = () => {
  return (
    <>
      <section id="error-page" className="flex items-center justify-center">
        <div className=" content max-w-[70rem] text-center">
          <h2 className="header relative text-[18vw] text-accent ">404</h2>
          <h4 className="mb-[20px] text-[2rem] text-primary">Sorry! Page not found</h4>
          <p>Oops! It seems like the page you're trying to access doesn't exist. If you believe there's an issue, feel free to report it, and we'll look into it.
          </p>
          <div className="btns my-[25px] p-6 inline-flex justify-center">
            <Link to="/" className="inline-block rounded-md bg-accent text-textPrimary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-secondry hover:text-primary hover:bg-secondry focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Return Home</Link>
            <Link to="/contact" className="ml-6 rounded-md bg-secondry text-primary px-3 py-2 text-sm font-semibold shadow-sm hover:bg-accent hover:text-textPrimary focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black">Report Problem</Link>
          </div>
        </div>
      </section>
    </>
  );
};

export default Error;
