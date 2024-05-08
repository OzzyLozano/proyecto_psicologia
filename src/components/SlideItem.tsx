import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, useWindowDimensions } from 'react-native';
import NextButton from './NextButton';
import { useNavigation } from '@react-navigation/native';

type Props = {
  item: {
    id: number;
    questions: {
        question: string;
        answers: string[];
    }[];
  }
}

function SlideItem({item}: Props): React.JSX.Element {
  const navigation = useNavigation()
  const {width, height} = useWindowDimensions()
  const questions = () => {
    return Object.values(item.questions).map((questions, index) => {
      if (!item || !questions) return null
      return (
        <React.Fragment key={index}>
        <View style={[styles.section, {width: width.valueOf(), height: height*.25}]}>
          <Text style={styles.question}>{questions.question}</Text>
          {questions.answers.map((answer, index) => {
            return (
              <React.Fragment key={index}>
                {answer.length == 2 && <TouchableOpacity style={styles.answerSection} onPress={() => {}}>
                  <View style={[styles.option, {width: 30, height: 30}]} />
                  <Text style={styles.answer}>{answer}</Text>
                </TouchableOpacity>}
                {answer.length > 2 && <View style={styles.fourAnswerSection}>
                  <TouchableOpacity style={{flexDirection: 'row'}} onPress={() => {}}>
                    <View style={styles.option} />
                    <Text style={styles.answer}>{answer}</Text>
                  </TouchableOpacity>
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
      {item.id == 1 && <View style={[styles.section]}>
        <Text style={styles.title}>En Nahualli queremos conocerte...</Text>
      </View>}
      {questions()}
      {item.id == 4 && <TouchableOpacity style={[styles.button]}>
        <Text style={[styles.btntxt]} onPress={() => {navigation.navigate('Avatars' as never)}} >Siguiente</Text>
      </TouchableOpacity>}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems:'center',
  },
  section: {
    alignItems: 'center',
    justifyContent: 'space-around',
    height: '5%',
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
    alignItems: 'center',
    width: '40%',
  },
  option: {
    width: 20,
    height: 20,
    backgroundColor: '#0071bc',
    borderRadius: 20,
    borderWidth: 0,
  },
  answer: {
    color: '#122383',
    marginHorizontal: 30,
  },
  button: {
    backgroundColor: '#122383',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 8,
    marginTop: 24,
    marginBottom: -24,
  },
  btntxt: {
    color: '#fff',
    fontSize: 16,
  },
});

export default SlideItem;
