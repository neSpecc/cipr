export default {
    title: 'Кто быстрее из этих двух',
    intro: 'Скоростной тест на скорость',
    outro: `<p>Неважно, кто быстрее из этих двух. Важно, чтобы быстрым был мобильный интернет.</p> 
            <p>Мегафон — самый быстрый 4G+ интернет в России. Победитель премии Speedtest Awards 2017.</p>
    `,
    promoUrl: 'https://reg.cipr.ru/?utm_source=VC&utm_medium=banner&utm_campaign=test',
    CTAText: 'Подключить',
    questions: [
        {
            text: '',
            options: [
                {
                    id: 0,
                    img: 'sokol.png',
                    imgWrong: 'sokol-red.png',
                    imgCorrect: 'sokol-green.png',
                    imgDisabled: 'sokol-disabled.png',
                    text: 'Сокол сапсан',
                    message: '322 км/ч',
                    isCorrect: true
                },
                {
                    id: 1,
                    img: 'train.png',
                    imgWrong: 'train-red.png',
                    imgCorrect: 'train-green.png',
                    imgDisabled: 'train-disabled.png',
                    text: 'Поезд «Сапсан»',
                    message: '250 км/ч'
                }
            ]
        },
      {
        text: '',
        options: [
          {
            id: 0,
            img: 'sokol.png',
            imgWrong: 'sokol-red.png',
            imgCorrect: 'sokol-green.png',
            imgDisabled: 'sokol-disabled.png',
            text: 'Сокол сапсан',
            message: '322 км/ч',
            isCorrect: true
          },
          {
            id: 1,
            img: 'train.png',
            imgWrong: 'train-red.png',
            imgCorrect: 'train-green.png',
            imgDisabled: 'train-disabled.png',
            text: 'Поезд «Сапсан»',
            message: '250 км/ч'
          }
        ]
      },
    ],
    results: [
        {
            range: [0, 15],
            title: 'Быстрее, чем улитка проползает один сантиметр пути',
            cover: '/src/assets/result-1.png'
        },
        {
            range: [15, 20],
            title: 'Свет преодолел бы несколько миллионов километров',
            cover: '/src/assets/result-1.png'
        },
        {
            range: [20, 30],
            title: 'Комар успел бы 10 000 раз взмахнуть крыльями',
            cover: '/src/assets/result-1.png'
        },
        {
            range: [30, 99999],
            title: 'Сын маминой подруги успел бы прославиться',
            cover: '/src/assets/result-1.png'
        }
    ]
};