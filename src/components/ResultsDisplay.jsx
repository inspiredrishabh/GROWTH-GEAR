import SimpleChart from "./SimpleChart";

function ResultsDisplay({ isLoading, errorMsg, analysisData, onRetry }) {
  if (isLoading) {
    return (
      <section className="flex-1 bg-white rounded-lg shadow min-h-[400px] flex flex-col items-center justify-center p-8">
        <div className="w-10 h-10 border-4 border-gray-200 border-t-blue-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-500">Processing your query...</p>
      </section>
    );
  }

  if (errorMsg) {
    return (
      <section className="flex-1 bg-white rounded-lg shadow min-h-[400px] flex flex-col items-center justify-center p-8">
        <p className="text-red-500 mb-4">{errorMsg}</p>
        <button
          onClick={onRetry}
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition-colors"
        >
          Retry
        </button>
      </section>
    );
  }

  if (!analysisData) {
    return (
      <section className="flex-1 bg-white rounded-lg shadow min-h-[400px] flex flex-col items-center justify-center p-8">
        <p className="text-gray-500">Enter a query to see analytics results</p>
      </section>
    );
  }

  return (
    <section className="flex-1 bg-white rounded-lg shadow p-6">
      <h2 className="text-xl font-semibold text-gray-800 mb-4">
        Analysis Results
      </h2>
      <p className="text-gray-700 mb-6 leading-relaxed">
        {analysisData.summary}
      </p>

      <div className="my-6">
        <h3 className="text-lg font-medium mb-4">Visualization</h3>
        <SimpleChart visualizationData={analysisData.chart} />
      </div>

      <p className="text-xs text-gray-500 text-right mt-6">
        Generated at: {analysisData.timestamp}
      </p>
    </section>
  );
}

export default ResultsDisplay;
