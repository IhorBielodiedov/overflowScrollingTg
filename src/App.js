function App() {
  return (
    <div className="App">
      <div className="scrollable">
        {Array(100)
          .fill()
          .map((_, index) => (
            <div
              key={index}
              style={{
                height: "50px",
                background:
                  "#" + Math.floor(Math.random() * 16777215).toString(16),
              }}
            >
              {"element: " + index}
            </div>
          ))}
      </div>
    </div>
  );
}

export default App;
