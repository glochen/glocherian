import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useLocation,
} from "react-router-dom";
import { HomePage } from "./home";
import { pages } from "./pages";
import { useDocumentTitle } from "./hooks/useDocumentTitle";
import _ from "lodash";

function App() {
  return (
    <Router basename="/glocherian">
      <AppRoutes />
    </Router>
  );
}

function AppRoutes() {
  const location = useLocation();
    if (location.pathname === "/" || location.pathname === "/home") {
    useDocumentTitle("glocherian");
  } else {
    const currentPage = pages.find(page => `/${page.id}` === location.pathname);
    if (currentPage?.title) {
      useDocumentTitle(currentPage.title);
    } else {
      useDocumentTitle("glocherian");
    }
  }

  return (
    <Routes>
      <Route path="/" element={<Navigate to="/home" replace />} />
      <Route path="/home" element={<HomePage />} />
      {_.map(
        pages,
        (page) =>
          page.pageComponent && (
            <Route path={`/${page.id}`} element={page.pageComponent()} />
          )
      )}
    </Routes>
  );
}

export default App;
