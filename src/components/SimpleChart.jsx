function SimpleChart({ visualizationData }) {
  return (
    <div className="h-64 flex items-end space-x-2 pb-8 relative">
      {visualizationData.data.map((dataPoint, dataIndex) => (
        <div
          key={`chart-bar-${dataIndex}`}
          className="flex-1 flex flex-col items-center"
        >
          <div
            className="w-full bg-blue-500 rounded-t-sm transition-all duration-500 ease-in-out"
            style={{ height: `${dataPoint}%` }}
          >
            <span className="absolute -top-6 left-0 right-0 text-center font-semibold text-sm">
              {dataPoint}
            </span>
          </div>
          <span className="absolute -bottom-6 text-xs text-gray-600">
            {visualizationData.labels[dataIndex]}
          </span>
        </div>
      ))}
    </div>
  );
}

export default SimpleChart;
