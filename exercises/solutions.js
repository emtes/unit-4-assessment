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
    if (contact.name.length <= 0 || !contact.phoneNumber.test(/^\d{10}/g)) {
      return "Invalid";
    }
    this.contacts.push(contact);
    return `${contact.name} added.`;
  },
  removeContact(name) {
    if (this.contacts.some(contact => contact.name === name)) {
      this.contacts.splice(this.contacts.indexOf(this.contacts.filter(c => c.name === name)[0]), 1);
      return `${name} removed.`;
    } else {
      return "Contact not found.";
    }
  },
  call(number) {
    if (!number.test(/^\d{10}/g) || this.contacts.some(contact => contact.number === number)) {
      return "Invalid";
    }

    if (this.contacts.some(contact => contact.number === number)) {
      const contactIndex = this.contacts.indexOf(this.contacts.filter(c => c.number === number)[0]);
      const contactName = this.contacts[contactIndex].name;
      return `Calling ${contactName}...`;
    }
  },
};

module.exports = {
  makeAccount,
  SavingsAccount,
  Phone,
  // AppleiPhone,
  // Person,
  // Student,
  // GraduateStudent,
  // Professor,
  // Doctor,
};
