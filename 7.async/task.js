class AlarmClock {
  constructor() {
    this.alarmCollection = [],
    this.timerId = null
  }

  addClock(time, callback, id) {
    if (!id) {
      throw new Error('Не передан параметр id');
    } else if (this.alarmCollection.find(element => element['id'] === id)) {
      return console.error('Будильник с таким id уже существует');
    } else {
      this.alarmCollection.push({
        'id': id,
        'time': time,
        'callback': callback,
      });
    }
  }

  removeClock(id) {
    let newArr = this.alarmCollection.filter((element) => {
      return (element['id'] !== id);
    });
    if (this.alarmCollection.length > newArr.length) {
      this.alarmCollection = newArr;
      return true;
    } else {
      return false;
    }
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();
    const hours = currentDate.getHours() < 10 ? `0${currentDate.getHours()}` : `${currentDate.getHours()}`;
    const minutes = currentDate.getMinutes() < 10 ? `0${currentDate.getMinutes()}` : `${currentDate.getMinutes()}`;
    return (`${hours}:${minutes}`);
  }

  start() {
    const checkClock = (alarm, callback) => {
      if (alarm === this.getCurrentFormattedTime()) {
        callback();
      } else if (this.timerId === null) {
        this.timerId = setInterval(this.alarmCollection.forEach(alarm => checkClock(alarm)), 1000);
      }
    }
  }

  stop() {
    if (this.timerId) {
      clearTimeout(this.timerId);
      this.timerId = null;
    }
  }

  printAlarms() {
    console.log(`Печать всех будильников в количестве ${this.alarmCollection.length}`);
    this.alarmCollection.forEach(alarm => console.log(`Будильник № ${alarm.id} заведен на ${alarm.time}`));
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }
}

function testCase() {
  let alarm = new AlarmClock();
  alarm.addClock('15:11', () => console.log('Пора вставать!'), 1);
  alarm.addClock('15:12', () => console.log('Вставай уже!'), 2);
  alarm.addClock('15:13', () => console.log('Солнце встало, а ты еще лежишь!'), 2);
  alarm.addClock('15:14', () => {
    console.log('Последнее преупреждение!');
    alarm.clearAlarms();
    alarm.printAlarms();
  },3);
  alarm.addClock('15:09', () => console.log('Иди умываться!'));
  alarm.printAlarms();
  alarm.getCurrentFormattedTime();
  alarm.start();
}

testCase();
