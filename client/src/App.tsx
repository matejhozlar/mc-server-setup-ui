import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "./context/ConfigProvider.tsx";
import Layout from "./layout/Layout.tsx";
import GenericConfigPage from "./pages/GenericConfigPage.tsx";
import SummaryPage from "./pages/SummaryPage.tsx";

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/:sectionKey" element={<GenericConfigPage />} />
            <Route path="/summary" element={<SummaryPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
