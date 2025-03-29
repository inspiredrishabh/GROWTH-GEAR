function QueryHistory({ queries, onSelectQuery }) {
  return (
    <section className="w-full md:w-72 flex-shrink-0">
      <h2 className="text-lg font-semibold mb-3">Recent Queries</h2>

      {queries.length === 0 ? (
        <div className="bg-white rounded-lg shadow p-5 text-center text-gray-500">
          No queries yet
        </div>
      ) : (
        <ul className="bg-white rounded-lg shadow overflow-hidden">
          {queries.map((queryItem) => (
            <li
              key={queryItem.queryId}
              onClick={() => onSelectQuery(queryItem.queryText)}
              className="p-4 border-b border-gray-100 last:border-0 hover:bg-gray-50 cursor-pointer transition-colors"
            >
              <p className="font-medium mb-1">{queryItem.queryText}</p>
              <small className="text-xs text-gray-500">
                {queryItem.queryTime}
              </small>
            </li>
          ))}
        </ul>
      )}
    </section>
  );
}

export default QueryHistory;
