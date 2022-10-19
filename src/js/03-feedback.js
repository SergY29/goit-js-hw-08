import throttle from 'lodash.throttle';

const refs = {
    form: document.querySelector('form'),
    input: document.querySelector('input'),
    textarea: document.querySelector('textarea'),
}

const feedback = {
    // mail: '',
    // message: '',
};


const STORAGE = "feedback-form-state";

refs.form.addEventListener('submit', onFormSubmit);
// refs.input.addEventListener('input', throttle(onInput, 500)),
// refs.textarea.addEventListener('input', throttle(onTextarea, 500));

refs.form.addEventListener('input', throttle(onDataLocal, 500));


messageOutput();

function onDataLocal(e) {
    feedback[e.target.name] = e.target.value;
    localStorage.setItem(STORAGE, JSON.stringify(feedback));
}

function onFormSubmit(e) {
    e.preventDefault();
    console.log('Отправленные данные:', JSON.parse(localStorage.getItem(STORAGE)));
    e.currentTarget.reset();

    localStorage.removeItem(STORAGE);
};

// function onInput(e) {
//     const inputMail = e.target.value;
//     console.log(inputMail);
//     feedback.mail = inputMail;
//     localStorage.setItem(STORAGE, JSON.stringify(feedback));
// };

// function onTextarea(e) {
//     const inputMessage = e.target.value;
//     console.log(inputMessage);
//     feedback.message = inputMessage;
//     localStorage.setItem(STORAGE, JSON.stringify(feedback));

// };

function messageOutput() {
    const savedMessage = localStorage.getItem(STORAGE);

    if (savedMessage) {
        const feedbackParse = JSON.parse(savedMessage);
        // console.log(savedMessage);

        refs.input.value = feedbackParse.email;
        refs.textarea.value = feedbackParse.message;
    };
};


