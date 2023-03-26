import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContent from "../components/cardContent";
import { listContent } from "../redux/actions/content";

const Home = () => {
  const { data } = useSelector((state) => state.Content);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(
      listContent({
        token:
          "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoyLCJlbWFpbCI6ImFkbWluQGdtYWlsLmNvbSIsImlhdCI6MTY3OTc4MzM1OX0.0FIOZIjaAxfXRaKHXi5yUr_sAu1JdqX_gEU8pXUgbKE",
      })
    );
  }, [dispatch]);

  return (
    <div>
      <p className="text-lg font-semibold m-5">Content</p>
      {data?.map((e) => (
        <CardContent
          key={e?.content_id}
          id={e?.content_id}
          title={e?.title}
          desc={e?.description}
        />
      ))}
    </div>
  );
};

export default Home;
