import axiosInstance from "./axiosInstance";

export const getData = async (endpoint, params = {}) => {
  try {
    const response = await axiosInstance.get(endpoint, { params });
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const postData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.post(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

const updateUserData = async () => {
  const userData = {
    cnic: '12345',
    name: 'John Doe',
    contactDetails: '123-456-7890',
    address: '123 Main St',
    purpose: 'Financial Assistance',
    token: 'XYZ123',
    count: 1,
    remarks: 'Follow-up required',
    assistanceStatus: 'In Progress'
  };

  try {
    const response = await putData('/api/user/update', userData);
    console.log('Updated user:', response);
  } catch (error) {
    console.error('Error updating user:', error);
  }
};


export const patchData = async (endpoint, data) => {
  try {
    const response = await axiosInstance.patch(endpoint, data);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const deleteData = async (endpoint) => {
  try {
    const response = await axiosInstance.delete(endpoint);
    return response.data;
  } catch (error) {
    throw error.response?.data || error.message;
  }
};

export const getUserByTokenFronend = async (token) => {
    try {
      const response = await axiosInstance.get(`receptionist/user/token/${token}`);
      return response.data;
    } catch (error) {
      console.error("Error:", error.response?.data || error.message);
    }
  };