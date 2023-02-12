import ContainerBlock from "../components/ContainerBlock";
import LatestCode from "../components/LatestCode";
import Hero from "../components/Hero";
import getLatestRepos from "../lib/getLatestRepos";
import userData from "../constants/data";

export default function Home({ repositories }: any) {
  return (
    <ContainerBlock
      title="Harivansh Thakur - Developer, Writer, Programmer"
      description="I've been developing software such as mobile apps, web apps, RESTAPI and lot more for more than 4 years and this is my personal website where I write about my experiences and share my knowledge with the world."
    >
      <Hero />
      {/* <FavouriteProjects /> */}
      <LatestCode repositories={repositories} />
    </ContainerBlock>
  );
}

export const getServerSideProps = async () => {
  const token = process.env.GITHUB_AUTH_TOKEN;

  const repositories = await getLatestRepos(userData, token);

  return {
    props: {
      repositories,
    },
  };
};
