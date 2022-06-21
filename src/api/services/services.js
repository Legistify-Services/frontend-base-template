import axios from "../axios";

const token = localStorage.getItem("token");

// Global Function For Get Api requests
// Call this function to fetch the data from GET method Api
export const getApiResponse = async (apiEndPoint, params) => {
  const url = params ? `${apiEndPoint}?${params}` : apiEndPoint;
  try {
    const response = await axios.get(url, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    console.error("something went wrong");
  }
};

// Global Function For Post Api requests
// Call this function to create/update the data from POST method Api
export const postApiResponse = async (apiEndPoint, data) => {
  try {
    const response = await axios.post(apiEndPoint, data, {
      headers: {
        "x-auth-token": token,
      },
    });
    return response.data;
  } catch (error) {
    console.log(error);
    console.error("something went wrong");
  }
};

// Global Function For Delete Api requests
// Call this function to delete the data from DELETE method Api
export const deleteApiResponse = async (apiEndPoint, id, deleteParam) => {
  try {
    const response = await axios.post(
      apiEndPoint,
      {
        deleteParam: id,
      },
      {
        headers: {
          "x-auth-token": token,
        },
      }
    );
    return response.data;
  } catch (error) {
    console.log(error);
    console.error("something went wrong");
  }
};
