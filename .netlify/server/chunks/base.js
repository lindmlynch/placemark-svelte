import { c as create_ssr_component, o as onDestroy, b as add_attribute } from "./index2.js";
import "frappe-charts";
const Base = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data = {
    labels: [],
    datasets: [{ values: [] }],
    yMarkers: {},
    yRegions: []
  } } = $$props;
  let { title = "" } = $$props;
  let { type = "line" } = $$props;
  let { height = 300 } = $$props;
  let { animate = true } = $$props;
  let { axisOptions = {} } = $$props;
  let { barOptions = {} } = $$props;
  let { lineOptions = {} } = $$props;
  let { tooltipOptions = {} } = $$props;
  let { colors = [] } = $$props;
  let { valuesOverPoints = 0 } = $$props;
  let { isNavigable = false } = $$props;
  let { maxSlices = 3 } = $$props;
  let chart = null;
  let chartRef;
  function ifChartThen(fn) {
    return function ifChart(...args) {
      if (chart) {
        return fn(...args);
      }
    };
  }
  const addDataPoint = ifChartThen((label, valueFromEachDataset, index) => chart.addDataPoint(label, valueFromEachDataset, index));
  const removeDataPoint = ifChartThen((index) => chart.removeDataPoint(index));
  const exportChart = ifChartThen(() => chart.export());
  const updateChart = ifChartThen((newData) => chart.update(newData));
  onDestroy(() => {
    chart = null;
  });
  if ($$props.data === void 0 && $$bindings.data && data !== void 0)
    $$bindings.data(data);
  if ($$props.title === void 0 && $$bindings.title && title !== void 0)
    $$bindings.title(title);
  if ($$props.type === void 0 && $$bindings.type && type !== void 0)
    $$bindings.type(type);
  if ($$props.height === void 0 && $$bindings.height && height !== void 0)
    $$bindings.height(height);
  if ($$props.animate === void 0 && $$bindings.animate && animate !== void 0)
    $$bindings.animate(animate);
  if ($$props.axisOptions === void 0 && $$bindings.axisOptions && axisOptions !== void 0)
    $$bindings.axisOptions(axisOptions);
  if ($$props.barOptions === void 0 && $$bindings.barOptions && barOptions !== void 0)
    $$bindings.barOptions(barOptions);
  if ($$props.lineOptions === void 0 && $$bindings.lineOptions && lineOptions !== void 0)
    $$bindings.lineOptions(lineOptions);
  if ($$props.tooltipOptions === void 0 && $$bindings.tooltipOptions && tooltipOptions !== void 0)
    $$bindings.tooltipOptions(tooltipOptions);
  if ($$props.colors === void 0 && $$bindings.colors && colors !== void 0)
    $$bindings.colors(colors);
  if ($$props.valuesOverPoints === void 0 && $$bindings.valuesOverPoints && valuesOverPoints !== void 0)
    $$bindings.valuesOverPoints(valuesOverPoints);
  if ($$props.isNavigable === void 0 && $$bindings.isNavigable && isNavigable !== void 0)
    $$bindings.isNavigable(isNavigable);
  if ($$props.maxSlices === void 0 && $$bindings.maxSlices && maxSlices !== void 0)
    $$bindings.maxSlices(maxSlices);
  if ($$props.addDataPoint === void 0 && $$bindings.addDataPoint && addDataPoint !== void 0)
    $$bindings.addDataPoint(addDataPoint);
  if ($$props.removeDataPoint === void 0 && $$bindings.removeDataPoint && removeDataPoint !== void 0)
    $$bindings.removeDataPoint(removeDataPoint);
  if ($$props.exportChart === void 0 && $$bindings.exportChart && exportChart !== void 0)
    $$bindings.exportChart(exportChart);
  {
    updateChart(data);
  }
  return `<div${add_attribute("this", chartRef, 0)}></div>`;
});
const Base$1 = Base;
export {
  Base$1 as B
};
