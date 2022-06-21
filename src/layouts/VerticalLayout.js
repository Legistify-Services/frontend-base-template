// ** React Imports
import { Outlet } from "react-router-dom";

// ** Core Layout Import
// !Do not remove the Layout import
import Layout from "@layouts/VerticalLayout";

// ** Menu Items Array
import navigation from "@src/navigation/vertical";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { userProfileDetails } from "../pages/external_user/account-settings/store/store";

const VerticalLayout = (props) => {
  // const [menuData, setMenuData] = useState([])

  const dispatch = useDispatch();

  // ** For ServerSide navigation
  // useEffect(() => {
  //   axios.get(URL).then(response => setMenuData(response.data))
  // }, [])

  useEffect(() => {
    const userData = JSON.parse(localStorage.getItem("userData"));
    dispatch(userProfileDetails(userData));
  }, []);

  return (
    <Layout menuData={navigation} {...props}>
      <Outlet />
    </Layout>
  );
};

export default VerticalLayout;
