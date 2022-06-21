// ** React Imports
import { Link } from "react-router-dom";

// ** Reactstrap Imports
import { Button } from "reactstrap";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Styles
import "@styles/base/pages/page-misc.scss";

const Error = () => {
  // ** Hooks
  const { skin } = useSkin();

  const illustration = skin === "dark" ? "error-dark.svg" : "error.svg",
    source = require(`@src/assets/images/pages/${illustration}`).default;
  return (
    <div className="misc-wrapper">
      <a className="brand-logo" href="/">
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" fill="#223647" />
          <rect
            x="3.5"
            y="3.5"
            width="33"
            height="33"
            fill="#223647"
            stroke="white"
          />
          <path
            d="M28.4854 32H10.6514V31.3486C11.1904 31.3486 11.6696 31.3187 12.0889 31.2588C12.5081 31.1839 12.8525 31.0492 13.1221 30.8545C13.4066 30.6449 13.6237 30.3529 13.7734 29.9785C13.9232 29.6042 13.998 29.11 13.998 28.4961V12.5488C13.998 11.9499 13.9232 11.4632 13.7734 11.0889C13.6237 10.7145 13.4066 10.43 13.1221 10.2354C12.8525 10.0257 12.5081 9.88346 12.0889 9.80859C11.6696 9.73372 11.1904 9.69629 10.6514 9.69629V9.04492H20.624V9.69629C20.07 9.69629 19.5833 9.73372 19.1641 9.80859C18.7448 9.88346 18.3929 10.0257 18.1084 10.2354C17.8239 10.43 17.6068 10.7145 17.457 11.0889C17.3073 11.4632 17.2324 11.9499 17.2324 12.5488V27.665C17.2324 28.234 17.2773 28.7057 17.3672 29.0801C17.457 29.4395 17.6068 29.7314 17.8164 29.9561C18.041 30.1657 18.3405 30.3154 18.7148 30.4053C19.0892 30.4801 19.5609 30.5176 20.1299 30.5176H22.4209C23.529 30.5176 24.4574 30.4577 25.2061 30.3379C25.9548 30.2031 26.5986 29.9635 27.1377 29.6191C27.6917 29.2598 28.1784 28.7656 28.5977 28.1367C29.0169 27.4928 29.4437 26.6618 29.8779 25.6436L30.4619 25.7334L28.4854 32Z"
            fill="white"
          />
        </svg>
        <h2 className="brand-text text-dark ms-1">Legistify</h2>
      </a>
      <div className="misc-inner p-2 p-sm-3">
        <div className="w-100 text-center">
          <h2 className="mb-1">Page Not Found 🕵🏻‍♀️</h2>
          <p className="mb-2">
            Oops! 😖 The requested URL was not found on this server.
          </p>
          <Button
            tag={Link}
            to="/"
            color="primary"
            className="btn-sm-block mb-2"
          >
            Back to home
          </Button>
          <img className="img-fluid" src={source} alt="Not authorized page" />
        </div>
      </div>
    </div>
  );
};
export default Error;
