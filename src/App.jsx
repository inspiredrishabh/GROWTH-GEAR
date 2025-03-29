import { useState } from "react";
import Header from "./components/Header";
import QueryInput from "./components/QueryInput";
import QueryHistory from "./components/QueryHistory";
import ResultsDisplay from "./components/ResultsDisplay";

function App() {
  const [userQuery, setUserQuery] = useState("");
  const [pastQueries, setPastQueries] = useState([]);
  const [analysisResults, setAnalysisResults] = useState(null);
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState(null);

  // Generate mock data for the chart
  const generateVisualizationData = () => {
    return {
      labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
      data: Array.from({ length: 6 }, () => Math.floor(Math.random() * 100)),
    };
  };

  // Process query function
  const analyzeUserQuery = async (inputQuery) => {
    if (!inputQuery.trim()) return;

    setIsProcessing(true);
    setErrorMessage(null);

    try {
      // Simulate API call delay
      await new Promise((resolve) => setTimeout(resolve, 1500));

      // Generate mock results
      const newInsights = {
        chart: generateVisualizationData(),
        summary: `Analysis based on "${inputQuery}" shows positive trends with an average growth of ${
          Math.floor(Math.random() * 20) + 5
        }%.`,
        timestamp: new Date().toLocaleString(),
      };

      setAnalysisResults(newInsights);
      setPastQueries([
        {
          queryId: Date.now(),
          queryText: inputQuery,
          queryTime: new Date().toLocaleString(),
        },
        ...pastQueries,
      ]);
      setUserQuery("");
    } catch (err) {
      setErrorMessage("Failed to process your query. Please try again.");
    } finally {
      setIsProcessing(false);
    }
  };

  const handleNewQuery = (inputQuery) => {
    setUserQuery(inputQuery);
    analyzeUserQuery(inputQuery);
  };

  const handlePastQuerySelection = (selectedQuery) => {
    setUserQuery(selectedQuery);
    analyzeUserQuery(selectedQuery);
  };

  return (
    <div className="max-w-6xl mx-auto p-5">
      <Header />

      <main className="flex flex-col space-y-6">
        <QueryInput onSubmit={handleNewQuery} loading={isProcessing} />

        <div className="flex flex-col md:flex-row gap-6">
          <QueryHistory
            queries={pastQueries}
            onSelectQuery={handlePastQuerySelection}
          />

          <ResultsDisplay
            isLoading={isProcessing}
            errorMsg={errorMessage}
            analysisData={analysisResults}
            onRetry={() => analyzeUserQuery(userQuery)}
          />
        </div>
      </main>
    </div>
  );
}

export default App;
