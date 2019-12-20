//1
function makeAccount(startingBal) {
  let balance = startingBal;
  return {
    checkBalance() {
      return balance;
    },
    add(amount) {
      balance += amount;
      return `${amount} added`;
    },
    subtract(amount) {
      balance -= amount;
      return `${amount} subtracted`;
    },
  };
}

//2
function SavingsAccount(name) {
  this.name = name;
  this.balance = 0;
}

SavingsAccount.prototype = {
  constructor: SavingsAccount,
  showBalance() {
    return `$${this.balance}`;
  },
  depositFunds(amount) {
    const invalVal = "Please include a deposit amount that is greater than 0";
    if (amount < 0) return invalVal;
    this.balance += amount;
    return `$${amount} Deposited`;
  },
  withdrawFunds(amount) {
    if (amount > this.balance) return "Insufficient Funds";
    this.balance -= amount;
    return `$${amount} withdrawn`;
  },
};

//3
function Phone(number) {
  this.phoneNumber = number;
  this.contacts = [];
}

Phone.prototype = {
  constructor: Phone,
  addContact(contact) {
    const phonePatter = /^\d{10}/g;
    if (contact.name === undefined || !phonePatter.test(contact.phoneNumber)) {
      return "Invalid";
    }
    this.contacts.push(contact);
    return `${contact.name} added.`;
  },
  removeContact(name) {
    if (this.contacts.some(contact => contact.name === name)) {
      this.contacts.splice(this.contacts.indexOf(this.contacts.filter(c => c.name === name)), 1);
      return `${name} removed.`;
    } else {
      return "Contact not found.";
    }
  },
  call(number) {
    const phonePatter = /^\d{10}/g;
    if (!phonePatter.test(number) || this.contacts.some(contact => contact.number === number)) {
      return "Invalid";
    }

    if (this.contacts.some(contact => contact.number === number)) {
      const contactIndex = this.contacts.indexOf(this.contacts.filter(c => c.number === number)[0]);
      const contactName = this.contacts[contactIndex].name;
      return `Calling ${contactName}...`;
    }

    return `Calling ${number}`;
  },
};

//5
class Person {
  constructor(firstName, lastName, age, gender) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.age = age;
    this.gender = gender;
  }

  get fullname() {
    return `${this.firstName} + ${this.lastName}`;
  }

  communicate() {
    return 'Hello world';
  }

  eat() {
    return 'Nom nom nom';
  }

  sleep() {
    return 'Until later, world';
  }
}

class Student extends Person {
  constructor(name, lastname, age, gender, degree) {
    super(name, lastname, age, gender);
    this.degree = degree;
  }

  study() {
    return 'Much knowledge';
  }
}

class GraduateStudent extends Student {
  constructor(name, lastname, age, gender, degree) {
    Person.call(this, name, lastname, age, gender);
    this.graduateDegree = degree;
  }
}

const professionalMixin = {
  invoice() {},
  payTax() {},
};

class Professor extends Person {
  constructor(name, lastname, age, gender, subject) {
    super(name, lastname, age, gender)
    this.subject = subject;
    Object.assign(this, professionalMixin);
  }
  teach() {
    return 'TAKE THIS KNOWLEDGE';
  }
}

class Doctor extends Person {
  constructor(name, lastname, age, gender, specialization) {
    super(name, lastname, age, gender)
    this.specialization = specialization;
    Object.assign(this, professionalMixin);
  }
  diagnose() {
    return 'TAKE THIS!';
  }
}

module.exports = {
  makeAccount,
  SavingsAccount,
  //Phone,
  // AppleiPhone,
  Person,
  // Student,
  // GraduateStudent,
  // Professor,
  // Doctor,
};
