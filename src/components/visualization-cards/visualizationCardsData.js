import barChartData from './bar-chart/barChartData';
import BarChart from './bar-chart/BarChart';
import BarChartInfo from './bar-chart/BarChartInfo';
import lineChartData from './line-chart/lineChartData';
import LineChart from './line-chart/LineChart';
import LineChartInfo from './line-chart/LineChartInfo';
import ZoomPhylo from './zoom-phylo/ZoomPhylo';
import { IS_LANDSCAPE, IS_PORTRAIT, IS_FILL_PARENT } from 'hooks/useDimensions';

export default [
  {
    Visualization: BarChart,
    Info: BarChartInfo,
    data: barChartData,
    visualOrientation: IS_PORTRAIT,
  },
  {
    Visualization: LineChart,
    Info: LineChartInfo,
    data: lineChartData,
    visualOrientation: IS_LANDSCAPE,
  },
  {
    Visualization: ZoomPhylo,
    visualOrientation: IS_FILL_PARENT,
  }
];
