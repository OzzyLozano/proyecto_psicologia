import React from 'react';
import { StyleSheet, Text, View, useWindowDimensions } from 'react-native';

type Props = {
  item: {
    id: number;
    title: string;
    questions: {
        question: string;
        answers: string[];
    }[];
  }
}

function SlideItem({item}: Props): React.JSX.Element {
  const {width, height} = useWindowDimensions()
  const questions = () => {
    return Object.values(item.questions).map((questions) => {
      if (!item || !questions) return null
      return (
        <React.Fragment key={item.id}>
        <View style={[styles.section, {width: width.valueOf(), height: height*.25}]}>
          <Text style={styles.question}>{questions.question}</Text>
          {questions.answers.map((answer) => {
            return (
              <React.Fragment key={item.id}>
                {answer.length == 2 && <View style={styles.answerSection}>
                  <View style={styles.option} />
                  <Text style={styles.answer}>{answer}</Text>
                </View>}
                {answer.length > 2 && <View style={styles.fourAnswerSection}>
                  <View style={{flexDirection: 'row'}}>
                    <View style={styles.option} />
                    <Text style={styles.answer}>{answer}</Text>
                  </View>
                </View>}
              </React.Fragment>
            )
          })}
        </View>
        </React.Fragment>
      )
    })
  }

  return (
    <View style={styles.container}>
      {item.id == 1 && <View style={[styles.section, {width: width}]}>
        <Text style={styles.title}>{item.title}</Text>
      </View>}
      {questions()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'space-around',
  },
  title: {
    color: '#122383',
    fontSize: 20,
  },
  question: {
    width: '100%',
    color: '#fff',
    backgroundColor: '#0071bc',
    textAlign: 'center',
    height: '40%',
    textAlignVertical: 'center',
  },
  fourAnswerSection: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    width: '80%',
  },
  answerSection: {
    flexDirection: 'row',
    width: '40%',
  },
  option: {
    width: 20,
    height: 20,
    backgroundColor: '#0071bc',
    borderRadius: 10,
  },
  answer: {
    color: '#122383',
    marginHorizontal: 30,
  },
});

export default SlideItem;
