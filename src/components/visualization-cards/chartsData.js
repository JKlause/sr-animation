import barChartData from './bar-chart/barChartData';
import BarChart from './bar-chart/BarChart';
import BarChartInfo from './bar-chart/BarChartInfo';
import lineChartData from './line-chart/lineChartData';
import LineChart from './line-chart/LineChart';
import LineChartInfo from './line-chart/LineChartInfo';
import ZoomPhylo from './zoom-phylo/ZoomPhylo';

export default [
  {
    Visualization: BarChart,
    Info: BarChartInfo,
    data: barChartData,
    isLandscape: false,
  },
  {
    Visualization: LineChart,
    Info: LineChartInfo,
    data: lineChartData,
    isLandscape: true,
  },
  {
    Visualization: ZoomPhylo,
    isLandscape: false,
    isZoom: true,
  }
];
