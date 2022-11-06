import barChartData from './bar-chart/barChartData';
import BarChart from './bar-chart/BarChart';
import BarChartInfo from './bar-chart/BarChartInfo';
import lineChartData from './line-chart/lineChartData';
import LineChart from './line-chart/LineChart';
import LineChartInfo from './line-chart/LineChartInfo';
import ZoomPhylo from './zoom-phylo/ZoomPhylo';

export const isPortrait = 'IS_PORTRAIT';
export const isLandscape = 'IS_LANDSCAPE';
export const isFillParent = 'IS_FILL_PARENT';

export default [
  {
    Visualization: BarChart,
    Info: BarChartInfo,
    data: barChartData,
    visualOrientation: isPortrait,
  },
  {
    Visualization: LineChart,
    Info: LineChartInfo,
    data: lineChartData,
    visualOrientation: isLandscape,
  },
  {
    Visualization: ZoomPhylo,
    visualOrientation: isFillParent,
  }
];
