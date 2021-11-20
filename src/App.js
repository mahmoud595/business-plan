import "./App.css";
import { Routes, Route } from "react-router-dom";
import { Provider } from "react-redux";

import store from "./store/store";
import { HomePage } from "./Components/Pages/HomePage/HomePage";
import { QuestionnairePage } from "./Components/Pages/Questionnaire/QuestionnairePage";
import { SummaryPage } from "./Components/Pages/SummaryPage/SummaryPage";
function App() {
  return (
    <Provider store={store}>
      <div className="app vh-100 w-100">
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/questionnaire" element={<QuestionnairePage />} />

          <Route path="/summary" element={<SummaryPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
