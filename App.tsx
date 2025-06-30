import AppRoutes from "./routes";
import Header from "./shared/component/header/Header";
import "./App.scss";
import { useAppSelector } from "./store/hooks";
import ProjectRibbon from "./shared/component/projectRibbon/ProjectRibbon";
import rotateIcon from "@appIcons/rotate-icon.svg";

function App() {
  const isAuthenticated = useAppSelector((state) => state.auth.isAuthenticated);
  return (
    <>
      <div className="app-content">
        {isAuthenticated && <Header />}
        <AppRoutes />
        <ProjectRibbon />
      </div>

      <div className="responsive-hint-layer" id="responsive-hint-layer">
        <img src={rotateIcon} alt="rotate" />
        <p className="">
          For better experience use tablet & rotate to Landscape mode <br />
          لتجربة مستخدم افضل جهاز تابلت وقم بتدوير الشاشة
        </p>
      </div>
    </>
  );
}

export default App;
