import axios from "axios";

const getLatestRepos = async (username: string) => {
  try {
    const res = await axios.get(
      `https://api.github.com/users/${username}/repos?sort=created&direction=desc&per_page=6`
    );

    return res.data;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
