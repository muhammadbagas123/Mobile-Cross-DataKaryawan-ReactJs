import React from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonLabel,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import {
  newspaperOutline,
  searchOutline,
  personCircleOutline,
  createOutline,
  trendingUpOutline,
  peopleOutline,
  personAddOutline,
} from "ionicons/icons";
import News from "./pages/Tabs/News";
import Trending from "./pages/Tabs/Trending";
import Submit from "./pages/Tabs/Submit";
import Search from "./pages/Tabs/Search";
import Profile from "./pages/Tabs/Profile";
import EditProfile from "./pages/Auth/EditProfile";
import Link from "./pages/Link";
import Login from "./pages/Auth/Login";
import Signup from "./pages/Auth/Signup";
import Forgot from "./pages/Auth/Forgot";
import useAuth from "./hooks/useAuth";
import UserContext from "./contexts/UserContext";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
import "./theme/variables.css";

const App = () => {
  const [user, setUser] = useAuth();
  return (
    <IonApp>
      <IonReactRouter>
        <UserContext.Provider value={{ user, setUser }}>
          <IonTabs>
            <IonRouterOutlet>
              <Route
                path="/"
                render={() => <Redirect to="/news" />}
                exact={true}
              />
              <Route path="/news" component={News} />
              <Route path="/trending" component={Trending} />
              <Route path="/submit" component={Submit} />
              <Route path="/search" component={Search} />
              <Route path="/profile" component={Profile} />
              <Route path="/edit-profile" component={EditProfile} />
              <Route path="/register" component={Signup} />
              <Route path="/login" component={Login} />
              <Route path="/forgot" component={Forgot} />
              <Route path="/link/:linkId" component={Link} />
              <Route component={() => <Redirect to="/news" />} />
            </IonRouterOutlet>
            <IonTabBar slot="bottom">
              <IonTabButton tab="news" href="/news">
              <IonIcon icon={peopleOutline} />
                <IonLabel>Karyawan</IonLabel>
              </IonTabButton>
              <IonTabButton tab="submit" href="/submit">
                <IonIcon icon={personAddOutline} />
                <IonLabel>Add Karyawan</IonLabel>
              </IonTabButton>
              <IonTabButton tab="profile" href="/profile">
                <IonIcon icon={personCircleOutline} />
                <IonLabel>Profile</IonLabel>
              </IonTabButton>
            </IonTabBar>
          </IonTabs>
        </UserContext.Provider>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;