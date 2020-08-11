function evaluate(name, rightAnswers, wrongAnswers, totalQuestions=100){
    rightAnswersPercentage = (rightAnswers/totalQuestions)*100;
    wrongAnswersPercentage = (wrongAnswers/totalQuestions)*100;
    notAnsweredPercentage = ((totalQuestions-rightAnswers-wrongAnswers)/totalQuestions)*100;
    var grade;
    if(rightAnswersPercentage>90){
        grade = 'A';
    }
    else if (rightAnswersPercentage>=70 && rightAnswersPercentage<=89){
        grade = 'B';
    }
    else if (rightAnswersPercentage>=45 && rightAnswersPercentage<=69){
        grade = 'C';
    }
    else if (rightAnswersPercentage<45){
        grade = 'D';
    }
    else{
        grade = 'incorrect value';
    }
    return `${name}: 
        ${rightAnswersPercentage}% right answers
        ${wrongAnswersPercentage}% wrong answers 
        ${notAnsweredPercentage}% not answered
        Grade: ${grade}`
}
console.log(evaluate('John',60,32));