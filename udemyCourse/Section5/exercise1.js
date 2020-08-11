function retirementYearsAwayCalculator(bornYear, name) {
    var currentAge = 2020 - bornYear;
    var retirement = 65 - currentAge; 
    console.log(name + ", your're " + retirement + " years away from retirement.");
}
retirementYearsAwayCalculator(1987, 'John');
