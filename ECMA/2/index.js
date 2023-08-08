// Задание 1: ""Управление библиотекой книг""

// Реализуйте класс Book, представляющий книгу, со следующими свойствами и методами:

// Свойство title (название) - строка, название книги.
// Свойство author (автор) - строка, имя автора книги.
// Свойство pages (количество страниц) - число, количество страниц в книге.
// Метод displayInfo() - выводит информацию о книге (название, автор и количество страниц).

class Book {
  constructor(title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
  }
  displayInfo() {
    console.log(
      `Название книги: ${this.title}, Автор: ${this.author}, Количество страниц: ${this.pages}`
    );
  }
}

const book1 = new Book("Война и мир", "Л.Н. Толстой", 1300);
book1.displayInfo();

// Задание 2: ""Управление списком студентов""
// Реализуйте класс Student, представляющий студента, со следующими свойствами и методами:

// Свойство name (имя) - строка, имя студента.
// Свойство age (возраст) - число, возраст студента.
// Свойство grade (класс) - строка, класс, в котором учится студент.
// Метод displayInfo() - выводит информацию о студенте (имя, возраст и класс).
// javascript

// // Пример использования класса
// const student1 = new Student(""John Smith"", 16, ""10th grade"");
// student1.displayInfo();
// // Вывод:
// // Name: John Smith
// // Age: 16
// // Grade: 10th grade

// const student2 = new Student(""Jane Doe"", 17, ""11th grade"");
// student2.displayInfo();
// // Вывод:
// // Name: Jane Doe
// // Age: 17
// // Grade: 11th grade"

class Student {
  constructor(name, age, grade) {
    this.name = name;
    this.age = age;
    this.grade = grade;
  }
  displayInfo() {
    console.log(`Name: ${this.name}`);
    console.log(`Age: ${this.age}`);
    console.log(`Grade: ${this.grade}`);
    console.log("");
  }
}
const student1 = new Student("John Smith", 16, "10th grade");
student1.displayInfo();
const student2 = new Student("Jane Doe", 17, "11th grade");
student2.displayInfo();

// ****** Задача необязательная для выполнения:
// Это расширенная версия задачи с банком, которую мы решлали на семинаре:
// Создайте класс "Банк", который будет иметь следующие свойства: название банка, список клиентов и список счетов. Класс должен иметь методы для добавления нового клиента, открытия нового счета для клиента, пополнения счета, снятия денег со счета и проверки баланса.
// Пример работы:

// const bank = new Bank("Мой Банк");

// const client1 = new Client("Иван", 25);
// const client2 = new Client("Мария", 30);

// bank.addClient(client1);
// bank.addClient(client2);

// bank.openAccount(client1, 1000);
// bank.openAccount(client2, 500);

// bank.deposit(123456789, 200);
// bank.withdraw(987654321, 100);
// bank.checkBalance(123456789);
// bank.checkBalance(987654321);

// Будет доделано после прояснения задания.

class Bank {
  constructor(bankName) {
    this.bankName = bankName;
  }
  clients = [];
  accounts = [123456789, 987654321];

  addClient(client) {
    this.clients.push(client);
  }
}

class Client {
  constructor(clientName, clientAge) {
    this.clientName = clientName;
    this.clientAge = clientAge;
  }
  clientAccounts = [];
}

const tinkoff = new Bank("Tinkoff");
const client1 = new Client("Иван", 25);
tinkoff.addClient(client1);
console.log(tinkoff.clients);
