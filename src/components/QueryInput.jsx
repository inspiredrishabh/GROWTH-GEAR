import { useState, useEffect } from "react";

function QueryInput({ onSubmit, loading }) {
  const [inputText, setInputText] = useState("");
  const [availableSuggestions, setAvailableSuggestions] = useState([]);

  // AI suggestion simulation
  const exampleQueries = [
    "Show monthly user growth",
    "Compare Q1 vs Q2 revenue",
    "Analyze customer retention rate",
    "Predict next month sales",
    "Show product engagement metrics",
  ];

  // Simulate AI suggestions based on user input
  useEffect(() => {
    if (inputText.trim().length > 2) {
      const matchingSuggestions = exampleQueries.filter((suggestion) =>
        suggestion.toLowerCase().includes(inputText.toLowerCase())
      );
      setAvailableSuggestions(
        matchingSuggestions.length > 0 ? matchingSuggestions : []
      );
    } else {
      setAvailableSuggestions([]);
    }
  }, [inputText]);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    onSubmit(inputText);
    setInputText("");
  };

  const selectQuerySuggestion = (suggestion) => {
    setInputText(suggestion);
    setAvailableSuggestions([]);
  };

  return (
    <section className="w-full">
      <form onSubmit={handleFormSubmit} className="relative">
        <div className="flex w-full">
          <input
            type="text"
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            placeholder="Ask anything about your data..."
            className="flex-1 px-4 py-3 text-base border-2 border-gray-200 rounded-l-md focus:outline-none focus:border-blue-500 transition-colors"
          />
          <button
            type="submit"
            disabled={loading}
            className="px-6 py-3 bg-blue-500 text-white font-semibold rounded-r-md hover:bg-blue-600 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
          >
            {loading ? "Processing..." : "Analyze"}
          </button>
        </div>

        {availableSuggestions.length > 0 && (
          <ul className="absolute z-10 w-full mt-1 bg-white border border-gray-200 rounded-md shadow-lg max-h-48 overflow-y-auto">
            {availableSuggestions.map((suggestion, idx) => (
              <li
                key={`suggestion-${idx}`}
                onClick={() => selectQuerySuggestion(suggestion)}
                className="px-4 py-2 hover:bg-gray-100 cursor-pointer"
              >
                {suggestion}
              </li>
            ))}
          </ul>
        )}
      </form>
    </section>
  );
}

export default QueryInput;
