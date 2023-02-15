import axios from "axios";

const getLatestRepos = async (data: any) => {
  // console.log("data", data);
  try {
    const username = data.githubUsername;

    
      const res = await axios.get(
        `https://api.github.com/users/${username}/repos?sort=created&direction=desc`
      );
      let repos = res.data;
      let latestSixRepos = repos.splice(0, 6);
      return latestSixRepos;
  } catch (err) {
    console.log(err);
  }
};

export default getLatestRepos;
