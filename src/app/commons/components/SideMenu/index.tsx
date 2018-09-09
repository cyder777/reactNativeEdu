import * as React from "react";
import { StyleSheet, View } from "react-native";

// styles
const styles = StyleSheet.create({
  root: {
    alignItems: "center",
    alignSelf: "center",
  },
  buttons: {
    flexDirection: "row",
  },
  button: {
    flex: 1,
    paddingVertical: 0,
  },
  greeting: {
    color: "#999",
    fontWeight: "bold",
  },
});

export interface IProps {
  name: string;
  enthusiasmLevel?: number;
}

export interface IState {
  enthusiasmLevel: number;
}

class SideMenu extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      enthusiasmLevel: props.enthusiasmLevel || 1,
    };
  }

  public render() {
    return (
      <View style={styles.root}>

      </View>
    );
  }
}

export default SideMenu;
