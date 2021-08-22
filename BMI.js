import React from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  View,
  TouchableOpacity,
  ImageBackground
} from "react-native";


export default class App extends React.Component {
  state = {
    height: 0,
    mass: 0,
    age:0,
    resultNumber: 0,
    resultText: ""
  };

  handleCalculate = () => {
    let imc = ((10*(this.state.mass )) + (6.25 * this.state.height) - (5* this.state.age))*1.85;
    this.setState({
      resultNumber: imc.toFixed(1)
    });

  };

  render() {
    return (
            <View style={styles.container}>
            <Text
                style={{
                color: "#FFCB1F",
                justifyContent: "center",
                alignSelf: "center",
                marginTop: 30,
                fontSize: 45,
                paddingTop:15,
                fontWeight:'700'

                }}
            >
                BMI Calculator
            </Text>
            <View style={styles.intro}>
                <TextInput
                placeholder="قد"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={height => {
                    this.setState({ height });
                }}
                />
                <TextInput
                placeholder="سن"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={age => {
                    this.setState({ age });
                }}
                />
                <TextInput
                placeholder="وزن"
                keyboardType="numeric"
                style={styles.input}
                onChangeText={mass => {
                    this.setState({ mass });
                }}
                />
            </View>

            <TouchableOpacity
                style={styles.button}
                onPress={this.handleCalculate}
            >
                <Text style={styles.buttonText}>محاسبه </Text>
            </TouchableOpacity>
            <Text style={styles.result}>{this.state.resultNumber}</Text>
            <Text style={[styles.result, { fontSize: 35 }]}>
                {this.state.resultText}
            </Text>
            </View>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
    // backgroundColor: "#f5fcff"
  },
  intro: {
    flexDirection: "row"
  },
  input: {
    height: 80,
    textAlign: "center",
    width: "33%",
    fontSize: 50,
    marginTop: 24,
    color: "#FFCB1F"
  },
  button: {
    backgroundColor: "#1D1D1B"
  },
  buttonText: {
    alignSelf: "center",
    padding: 30,
    fontSize: 25,
    color: "#FFCB1F",
    fontWeight: "bold"
  },
  result: {
    alignSelf: "center",
    color: "#FFCB1F",
    fontSize: 65,
    padding: 15
  }
});