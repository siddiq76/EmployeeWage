//UC11 Creating class Employee Payroll  


class EmployeePayRollData {
    //property

    //constructor
    constructor(...params) {
        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startDate = params[4];

    }

    //getter and setter method :

    get id() {
        return this._id;
    }
    set id(id) {
        if (id > 0) this._id = id;
        else throw " Invalid id, Employee Id Should be Greater than 0";
    }

    get salary() {
        return this._salary;
    }
    set salary(salary) {
        if (salary > 0) this._salary = salary;
        else throw "  Invalid salary, it Should be Greater than 0";
    }

    get gender() {
        return this._gender;
    }
    set gender(gender) {
        if (gender == "F" || gender == "M" || gender == undefined) this._gender = gender;
        else throw " gender is invalid";
    }
    get startDate() {
        return this._startDate;
    }
    set startDate(startDate) {
        if (startDate <= new Date() || startDate == undefined)
            this._startDate = startDate;
        else throw "Invalid Date , Cant enter a future date";
    }

    get name() { return this._name; }
    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-z]{2,}$');
        if (nameRegex.test(name))
            this._name = name;
        else throw 'Name is Incorrect!';
    }

    //method 
    toString() {
        const options = { year: 'numeric', month: 'long', day: 'numeric' };
        const empDate = !this.startDate ? "undefinedDate" :
            this.startDate.toLocaleDateString("en-US", options);
        return "id =" + this.id + ",name = " + this.name + ",salary = " + this.salary +
            " ,gender = " + this.gender + " ,startDate = " + empDate;
    }
}

let employeePayRollData = new EmployeePayRollData(1, "Jeff", 300000);
console.log(employeePayRollData.toString());
let newemployeePayRollData = new EmployeePayRollData(2, "Terissa", 40000, "M", new Date());
console.log(newemployeePayRollData.toString());
try {
    employeePayRollData.name = "mohit";
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}

//checking for invalid gender
try {
    employeePayRollData.gender = "L";
    console.log(employeePayRollData.toString());
} catch (e) {
    console.error(e);
}