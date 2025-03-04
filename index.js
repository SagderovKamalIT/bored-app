const NEW_TITLE_MESSAGE = 'Ура, теперь не скучно 🔥';

const startButton = document.querySelector('.js-app__button');
const titleMessage = document.querySelector('.js-app__header');
const textMessage = document.querySelector('.js-app__paragraph');


const addTextMessage = () => {
  fetch('https://api.adviceslip.com/advice')
  .then(data => data.json())
  .then((res) => {
    console.log('Ответ от API:', res);
    const textMsg = res.slip.advice
    titleMessage.innerHTML = `<span class='js-app__header-span' >${NEW_TITLE_MESSAGE}<span>`;
 


    textMessage.textContent = textMsg;

    //изменение заголовка, при изменение параграфа
    

    // Генерация случайных цветов для градиента
    const randomColor1 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    const randomColor2 = `#${Math.floor(Math.random() * 16777215).toString(16)}`;

    // Применение вертикального градиента
    document.body.style.background = `linear-gradient(to bottom, ${randomColor1}, ${randomColor2})`;

  

  })

  //обработчик ошибок, который ввыводит сообщение пользователю,
  // если любой из промисов в цепочке завершился с ошибкой
  .catch(error => {
   console.error('Произошла ошибка:',error);
   textMessage.textContent = 'Не удалось загрузить данные. Попробуйте еще раз.';
  });
};

startButton.addEventListener('click', addTextMessage);
