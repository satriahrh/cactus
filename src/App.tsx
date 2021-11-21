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
  homeOutline,
  mapOutline,
  chatboxOutline,
  personOutline,
} from "ionicons/icons";
import Home from "./pages/Home";
import Map from "./pages/Map";
import Forum from "./pages/Forum";
import Profile from "./pages/Profile";

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
import DisasterLocationDetail from "./pages/DisasterLocationDetail";
import ThreadDetail from "./pages/ThreadDetail";
import ThreadCreationPage from "./pages/ThreadCreation";
import ProfileSettingsPage from "./pages/ProfileSettings";

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/">
          <Redirect to="/t/home" />
        </Route>
        <Route path="/t" component={PageTabs} />
        <Route path="/disaster-location/" component={DisasterLocationDetail} />
        <Route path="/thread-detail/:id" component={ThreadDetail} />
        <Route path="/thread-creation" component={ThreadCreationPage} />
        <Route exact path="/profile/settings" component={ProfileSettingsPage} />
      </IonRouterOutlet>
    </IonReactRouter>
  </IonApp>
);

const PageTabs: React.FC = () => (
  <IonTabs>
    <IonRouterOutlet>
      <Route exact path="/t/home">
        <Home />
      </Route>
      <Route exact path="/t/map">
        <Map />
      </Route>
      <Route path="/t/forum">
        <Forum />
      </Route>
      <Route exact path="/t/profile">
        <Profile />
      </Route>
    </IonRouterOutlet>
    <IonTabBar slot="bottom">
      <IonTabButton tab="home" href="/t/home">
        <IonIcon icon={homeOutline} />
        <IonLabel>Beranda</IonLabel>
      </IonTabButton>
      <IonTabButton tab="map" href="/t/map">
        <IonIcon icon={mapOutline} />
        <IonLabel>Peta</IonLabel>
      </IonTabButton>
      <IonTabButton tab="forum" href="/t/forum">
        <IonIcon icon={chatboxOutline} />
        <IonLabel>Forum</IonLabel>
      </IonTabButton>
      <IonTabButton tab="profile" href="/t/profile">
        <IonIcon icon={personOutline} />
        <IonLabel>Profil</IonLabel>
      </IonTabButton>
    </IonTabBar>
  </IonTabs>
);

export default App;
