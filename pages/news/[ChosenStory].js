import { useRouter } from "next/router";
const ChosenStory = () => {
  const router = useRouter();
  console.log(router.query.ChosenStory);

  return <div>ChosenStory</div>;
};

export default ChosenStory;
