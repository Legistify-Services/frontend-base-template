// ** React Imports
import { useContext } from "react";

// ** Custom Hooks
import { useSkin } from "@hooks/useSkin";

// ** Context
import { ThemeColors } from "@src/utility/context/ThemeColors";

// ** Reactstrap Imports
import { Row, Col } from "reactstrap";

// ** Styles
import "@styles/react/libs/charts/apex-charts.scss";

// Components Import For Merge
import DoughnutChart from "./charts/doughnutChart";
import BarGraphChart from "./charts/barGraphChart";
import PieChart from "./charts/pieChart";
import HalfDoughnut from "./charts/halfDoughnut";
import LineChart from "./charts/lineChart";
import MultiLineChart from "./charts/multiLineChart";
import HorizontalBarGraph from "./charts/horizontalBarGraph";
import { doughNutData } from "./charts/data";
import MultiTypeChart from "./charts/multiTypeChart";

const ExternalDashboard = () => {
  // ** Context, Hooks & Vars
  const { colors } = useContext(ThemeColors),
    { skin } = useSkin(),
    labelColor = skin === "dark" ? "#b4b7bd" : "#6e6b7b",
    tooltipShadow = "rgba(0, 0, 0, 0.25)",
    gridLineColor = "rgba(200, 200, 200, 0.2)",
    lineChartPrimary = "#666ee8",
    lineChartDanger = "#ff4961",
    warningColorShade = "#ffbd1f",
    warningLightColor = "#FDAC34",
    successColorShade = "#28dac6",
    infoColorShade = "#299AFF",
    yellowColor = "#ffe800",
    greyColor = "#4F5D70";

  return (
    <div id="dashboard-analytics">
      <p className="page_main_title mb-3">Welcome To Dummy Dashboard</p>
      <Row
      // className="match-height"
      >
        <Col lg="6" sm="12">
          <DoughnutChart
          // data={doughNutData}
          // tooltipShadow={tooltipShadow}
          // successColorShade={successColorShade}
          // warningLightColor={warningLightColor}
          // primary={colors.primary.main}
          />
        </Col>

        <Col lg="6" sm="12">
          <BarGraphChart
            success={lineChartPrimary}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
          />
        </Col>
        <Col lg="6" sm="12">
          <PieChart />
        </Col>
        <Col lg="6" sm="12">
          <HalfDoughnut />
        </Col>
        <Col lg="6" sm="12">
          <LineChart
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            lineChartPrimary={lineChartPrimary}
          />
        </Col>
        <Col lg="6" sm="12">
          <MultiLineChart
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            warningColorShade={warningColorShade}
            lineChartDanger={lineChartDanger}
            lineChartPrimary={lineChartPrimary}
          />
        </Col>
        <Col lg="6" sm="12">
          <HorizontalBarGraph
            warning={colors.warning.main}
            info={colors.info.main}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            indexAxis="y"
          />
        </Col>
        <Col lg="6" sm="12">
          <HorizontalBarGraph
            warning={colors.warning.main}
            info={colors.info.main}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
            indexAxis="x"
          />
        </Col>
        <Col lg="6" sm="12">
          <MultiTypeChart
            success={lineChartPrimary}
            labelColor={labelColor}
            gridLineColor={gridLineColor}
          />
        </Col>
      </Row>
    </div>
  );
};

export default ExternalDashboard;
