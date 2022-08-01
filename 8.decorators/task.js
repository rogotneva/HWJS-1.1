//Задание 1
function cachingDecoratorNew(func) {
let cache = [];

  function wrapper(...args) {
      const hash = args.join(','); // получаем правильный хэш
      let objectInCache = cache.find((item) => item['hash'] === hash); // ищем элемент, хэш которого равен нашему хэшу
      if (objectInCache) {
          console.log("Из кэша: " + objectInCache['value']); // индекс нам известен, по индексу в массиве лежит объект, как получить нужное значение?
          return "Из кэша: " + objectInCache['value'];
      }

      let result = func(...args); // в кэше результата нет - придётся считать
      cache.push({'hash': hash, 'value': result}) ; // добавляем элемент с правильной структурой
      if (cache.length > 5) {
        cache.shift(); // если слишком много элементов в кэше надо удалить самый старый (первый)
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
  }

  return wrapper;
}

//Задание 2
const debounceDecoratorNew = (f, ms) => {
  let timerId;
  let firstCall = true;
  return function(...args) {
    if (firstCall) {
      timerId = setTimeout(() => {f.apply(this, args)}, 0);
      firstCall = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {f.apply(this, args)}, ms);
    }
  }
}

//Задание 3
const debounceDecorator2 = (f, ms) => {
  let timerId;
  let firstCall = true;
  wrapper.count = 0;
    function wrapper(...args) {
    if (firstCall) {
      timerId = setTimeout(() => {f.apply(this, args)}, 0);
      firstCall = false;
    } else {
      clearTimeout(timerId);
      timerId = setTimeout(() => {f.apply(this, args)}, ms);
    }
    wrapper.count++;
  }

  return wrapper;
}
