// app entry
import { AppRegistry, Platform } from "react-native";
import Config from "./app/commons/Config";
import App from "./app/containers/App";
import AppWeb from "./app/containers/Web";

if (Platform.OS === Config.os.web) {
  AppRegistry.registerComponent(Config.app.name, () => App);
  AppRegistry.runApplication(Config.app.name, {
    rootTag: document.getElementById(Config.web.root),
  });
} else {
  AppRegistry.registerComponent(Config.app.name, () => AppWeb);
}
