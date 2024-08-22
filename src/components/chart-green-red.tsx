import React, { useEffect, useRef } from 'react';
import { createChart, IChartApi, BaselineSeriesOptions } from 'lightweight-charts';

interface BaselineChartProps {
  data: { value: number; time: number }[];
  width?: string;
  height?: string;
}

const BaselineChart: React.FC<BaselineChartProps> = ({ data, width, height }) => {
  const chartContainerRef = useRef<HTMLDivElement | null>(null);
  const chartRef = useRef<IChartApi | null>(null);
  const baselineSeriesRef = useRef<BaselineSeriesOptions | null>(null);

  useEffect(() => {
    if (chartContainerRef.current) {
      const chartOptions = {
        layout: {
          textColor: 'black',
          background: { type: 'solid', color: 'transparent' },
        },
      };

      const chart = createChart(chartContainerRef.current, chartOptions);
      const baselineSeries = chart.addBaselineSeries({
        baseValue: { type: 'price', price: 25 },
        topLineColor: 'rgba( 38, 166, 154, 1)',
        topFillColor1: 'rgba( 38, 166, 154, 0.28)',
        topFillColor2: 'rgba( 38, 166, 154, 0.05)',
        bottomLineColor: 'rgba( 239, 83, 80, 1)',
        bottomFillColor1: 'rgba( 239, 83, 80, 0.05)',
        bottomFillColor2: 'rgba( 239, 83, 80, 0.28)',
      });

      baselineSeries.setData(data);
      chart.timeScale().fitContent();

      chartRef.current = chart;
      baselineSeriesRef.current = baselineSeries;
    }

    // Cleanup chart on component unmount
    return () => {
      if (chartRef.current) {
        chartRef.current.remove();
      }
    };
  }, [data]);

  return <div ref={chartContainerRef} style={{ width: width || '100%', height: height || '400px' }} />;
};

export default BaselineChart;
