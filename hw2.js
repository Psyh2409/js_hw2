function she() {
    let user = {};
    outputer(user);
    user.name = "Pylyp";
    outputer(user);
    user.surname = "Shevchenko";
    outputer(user);
    user.name = "Serhii";
    outputer(user);
    delete user.name;
    outputer(user);
}
function outputer(object) {
    if (object != undefined && object != null) {
        let strng = ``;
        for (let key in object) {
            strng += `${key}: ${object[key]}\n`;
        }
        console.log(strng);
        alert(strng);
    }
}

function employeeSalaries() {
    let emplSal = {};
    let sum = 0;
    outputer(emplSal);
    console.log("Sum of salaries of employee is: " + sum);
    alert("Sum of salaries of employee is: " + sum);
    emplSal.ivanov5 = 51;
    emplSal.ivanov4 = 52;
    emplSal.ivanov3 = 53;
    emplSal.ivanov2 = 54;
    emplSal.ivanov1 = 55;
    for (const key in emplSal) {
        sum += emplSal[key];
    }
    outputer(emplSal);
    console.log("Sum of salaries of employee is: " + sum);
    alert("Sum of salaries of employee is: " + sum);
}

function validator(strng, bln) {
    do {
        let prm = prompt(strng);
        if (prm === "stop") {
            return prm;
        }
        if (_NaNNullEmpty(prm)) {
            console.log(`'${prm}\' is not a number. Let\'s try again. Or put \'stop\'`);
            alert(`'${prm}\' is not a number. Let\'s try again. Or put \'stop\'`);
        } else {
            return prm;
        }
    } while (bln);
}
function _NaNNullEmpty(x) {
    return isNaN(x) || x == null || x == '';
}
function solution() {
    let a, b, operation, answer, result;
    a = validator(
        "Put the first number. Or put \'stop\'",
        _NaNNullEmpty(a));
    if (a === "stop") {
        return;
    }
    b = validator(
        "Put the second number, please. Or put \'stop\'",
        _NaNNullEmpty(b));
    if (b === "stop") {
        return;
    }
    oper: while (true) {
        operation = prompt(
            'Which Math operation do you want to do from \'+\', \'-\', \'*\', \'/\'. Or put \'stop\'');
        switch (operation) {
            case "stop":
                return;
            case "+":
                result = parseInt(a) + parseInt(b);
                break oper;
            case "-":
                result = parseInt(a) - parseInt(b);
                break oper;
            case "*":
                result = parseInt(a) * parseInt(b);
                break oper;
            case "/":
                if (parseInt(b) === 0) {
                    alert("You can\'t devide on zero!");
                    continue oper;
                } else {
                    result = parseInt(a) / parseInt(b);
                    break oper;
                }
            default:
                console.log(
                    `${operation} is not Math operation from \'+\', \'-\', \'*\', \'/\'. Be more attention. Or put \'stop\'`);
                alert(`${operation} is not Math operation from \'+\', \'-\', \'*\', \'/\'. Be more attention. Or put \'stop\'`);
                continue oper;
        }
    }
    do {
        answer = validator(
            `So it\'s solution time! ${a}${operation}${b} = ... Or put \'stop\'`,
            _NaNNullEmpty(answer));
        if (answer === "stop") { return; }
    } while (answer != result);
    alert(answer);
}