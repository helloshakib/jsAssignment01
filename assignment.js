//================== Problem 1: Kilometer To Meter Conversion

function kilometerToMeter(kilometer){
    var meter = kilometer * 1000;
    if(meter<0){
        return 'Please enter positive value';
    }
    else if (typeof kilometer === 'string'){
        return "Its string. please enter poitive number";
    }
    else{
        return meter;
    }
}
// var result = kilometerToMeter(12);
// console.log(result);



//================== Problem 2: Budget Calculator

function budgetCalculator(watch, phone, laptop){
    if (watch<0 || phone<0 || laptop<0){
        return "Please enter positive value";
    }
    if (typeof watch === 'string' || typeof phone === 'string' || typeof laptop === 'string'){
        return "Its string. please enter poitive number";
    }
    else{
        var watchBudget = watch * 50;
        var phoneBudget = phone * 100;
        var laptopBudget = laptop * 500;
        
        var totalBudget = watchBudget + phoneBudget + laptopBudget;
        return totalBudget;
    }
}
// var result = budgetCalculator(2,5,3);
// console.log(result);


//============== Problem 3: Hotel Cost

function hotelCost(days){
    if(days<0){
        return "please enter positive value";
    }
    else if(typeof days === 'string'){
        return "Its string. please enter poitive number";
    }
    else if(days<=10){
        var cost = days * 100;
        return cost;
    }
    else if(days<=20){
        cost = ((days-10) * 80) + (10 * 100);
        return cost;
    }
    else{
        cost = ((days-20) * 50) + (10 * 100) + (10 * 80);
        return cost;
    }
}

// var result = hotelCost(12);
// console.log(result);



//================== Problem 4: Mega Friend

function megaFriend(friends){
    var largestName = "";
    for(i=0; i<friends.length; i++){
        if(friends[i].length > largestName.length){
            largestName = friends[i];
        }
    }
    return largestName;
}
// var result = megaFriend(['sumon','fahim','shah md mahbub khan','salman','murshalin', 'md shakib hasan']);
// console.log(result);