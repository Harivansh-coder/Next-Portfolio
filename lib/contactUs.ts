import axios from "axios";

const contactUs = async (contactObj: any) => {
  try {
    const res = await axios.post(
      `https://express-api-gules.vercel.app/api/contact`,
      contactObj
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default contactUs;
