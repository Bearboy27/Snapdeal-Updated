import "./App.css";
// this is a function component

function App() {
  return (
    <div>
      <header>
        <div className="a_header_top">
          <div className="container"></div>
        </div>
        <div className="a_header_bottom">
          <div className="container"></div>
        </div>
      </header>
      <div className="a_main pb-5">
        <div className="container a_main1 mt-3"></div>
        <div className="container-fluid a_main2"></div>
      </div>
      <footer>
        <div className="container a_footer1"></div>
        <div className="container a_footer2"></div>
        <div className="container a_footer3"></div>
      </footer>
    </div>
  );
}

export default App;
