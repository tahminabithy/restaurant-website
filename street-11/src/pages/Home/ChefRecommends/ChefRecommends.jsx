import RecommendedCard from "../../../components/SecTitle/RecommendedCard/RecommendedCard";
import SecTitle from "../../../components/SecTitle/SecTitle";

const ChefRecommends = () => {
  return (
    <div className="mb-12">
      <SecTitle heading={"Should Try"} subHeading={"CHEF RECOMMENDS"} />
      {/* ------------------- */}

      <RecommendedCard />
    </div>
  );
};

export default ChefRecommends;
