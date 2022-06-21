import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();
  return (
    <div className="clearfix mb-0">
      <div className="d-block text-center mt-25">
        {/* COPYRIGHT © {new Date().getFullYear()}{' '} LEGISTIFY SERVICES PRIVATE LIMITED */}
        <small> COPYRIGHT © 2022 LEGISTIFY SERVICES PRIVATE LIMITED</small>
      </div>
      <div className="d-block text-center mt-25">
        <small>
          <span
            style={{ color: "#2667FF" }}
            className="cursor-pointer"
            onClick={() => navigate("/terms-and-condition")}
          >
            Terms of Use
          </span>
          &nbsp; | &nbsp;
          <span
            style={{ color: "#2667FF" }}
            className="cursor-pointer"
            onClick={() => navigate("/privacy-policy")}
          >
            Privacy Policy
          </span>
        </small>
      </div>
    </div>
  );
};

export default Footer;
