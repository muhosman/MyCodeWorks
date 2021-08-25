import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  FlatList,
  SafeAreaView,
} from "react-native";

const dummySurveys: Survey[] = [
  {
    question: "Angular or React",
    choices: [
      { title: "Angular", count: 10, voted: false, percentage: "" },
      { title: "React", count: 19, voted: false, percentage: "" },
    ],
    totalVote: 19,
  },
  {
    question: "Android or iOS",
    choices: [
      { title: "Android", count: 20, voted: false, percentage: "" },
      { title: "iOS", count: 9, voted: false, percentage: "" },
    ],
    totalVote: 29,
  },
  {
    question: "Book or e-book",
    choices: [
      { title: "Book", count: 85, voted: false, percentage: "" },
      { title: "e-book", count: 17, voted: false, percentage: "" },
    ],
    totalVote: 102,
  },
  {
    question: "Coffee or Tea",
    choices: [
      { title: "Coffee", count: 45, voted: false, percentage: "" },
      { title: "Tea", count: 27, voted: false, percentage: "" },
    ],
    totalVote: 102,
  },
];

export default function App() {
  const [surveys, setSurveys] = useState(dummySurveys);

  function onVote(surveyIndex: number, choiceIndex: number) {
    let _alreadyVoted = alreadyVoted(surveyIndex, choiceIndex);

    if (!_alreadyVoted) {
      surveys[surveyIndex].choices[choiceIndex].voted = true;
      surveys[surveyIndex].choices[choiceIndex].count += 1;

      let firstChoiceCount = surveys[surveyIndex].choices[0].count;
      let secondChoiceCount = surveys[surveyIndex].choices[1].count;

      let p1 = "";
      let p2 = "";

      p1 = (
        (firstChoiceCount / (firstChoiceCount + secondChoiceCount)) *
        100
      ).toFixed(2);
      p2 = (
        (secondChoiceCount / (firstChoiceCount + secondChoiceCount)) *
        100
      ).toFixed(2);

      surveys[surveyIndex].choices[0].percentage = p1;
      surveys[surveyIndex].choices[1].percentage = p2;

      setSurveys([...surveys]);
    }
  }

  function alreadyVoted(surveyIndex: number, choiceIndex: number) {
    let alreadyVoted = false;

    surveys[surveyIndex].choices.forEach((choice) => {
      if (choice.voted === true) {
        alreadyVoted = true;
        return;
      }
    });

    return alreadyVoted;
  }

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={surveys}
        keyExtractor={(item) => item.question}
        renderItem={({ item, index }) => (
          <View
            style={{
              alignItems: "center",
              borderBottomWidth: 1,
              borderBottomColor: "grey",
              marginVertical: 5,
            }}
          >
            <Text>{surveys[index].question}</Text>

            <TouchableOpacity
              onPress={() => onVote(index, 0)}
              activeOpacity={0.6}
              style={{
                ...styles.choiceButton,
                borderWidth: 1,
                borderColor: "#e74c3c",
                backgroundColor: surveys[index].choices[0].voted
                  ? "#6ab04c"
                  : "white",
              }}
            >
              <Text>
                {surveys[index].choices[0].title}{" "}
                {surveys[index].choices[0].percentage}
              </Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => onVote(index, 1)}
              activeOpacity={0.8}
              style={{
                ...styles.choiceButton,
                borderWidth: 1,
                borderColor: "#e74c3c",
                backgroundColor: surveys[index].choices[1].voted
                  ? "#6ab04c"
                  : "white",
              }}
            >
              <Text>
                {surveys[index].choices[1].title}{" "}
                {surveys[index].choices[1].percentage}
              </Text>
            </TouchableOpacity>
          </View>
        )}
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  choiceButton: {
    width: "80%",
    height: 45,
    marginVertical: 10,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 7,
  },
});
