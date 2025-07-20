import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { ConfigProvider } from "./context/ConfigProvider.tsx";
import Layout from "./layout/Layout.tsx";
import GeneralConfigPage from "./pages/GeneralConfigPage.tsx";
import DesignConfigPage from "./pages/DesignConfigPage.tsx";

function App() {
  return (
    <ConfigProvider>
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Navigate to="/general" />} />
            <Route path="/general" element={<GeneralConfigPage />} />
            <Route path="/design" element={<DesignConfigPage />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </ConfigProvider>
  );
}

export default App;
