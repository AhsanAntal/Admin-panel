import React from "react";
import Charts from "../../Charts/Charts";
import FeaturedInfo from "../../FeaturedInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../../dummyData";
import WidgetSm from "../../WidgetSm/WidgetSm";
import WidgetLg from "../../WidgetLg/WidgetLg";

function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      <Charts
        data={userData}
        title="User Analytics"
        grid
        dataKey="Active User"
      />
      <div className="homeWidget">
        <WidgetSm />
        <WidgetLg />
      </div>
    </div>
  );
}

export default Home;
