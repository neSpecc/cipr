export default {
  title: `
    <span class="intro-logo"></span>
    <br/>
    — ДЕШИФРОВКА —
  `,
  task: 'Select correct answer',
  intro: `
    К выходу <b>Battlefield V</b> мы подготовили квест, в котором вы примерите на себя роль криптографа времён Второй мировой. Ваша задача — расшифровать все сообщения нацистов и принять правильное решение, чтобы помочь выиграть войну.
    <div class="intro-prizes">
      <div class="intro-prizes__image">
        <img src="https://leonardo.osnova.io/b31cbabd-7a1e-a48d-6b62-6dc1e4bded00" alt="">
      </div>
      <div class="intro-prizes__text">
        Криптографы, правильно ответившие на все семь вопросов, получат возможность поучаствовать в розыгрыше главного приза, <span class="clickable" data-click="showPrize">кастомного игрового ПК Battlefield™ V</span> на базе NVIDIA GEFORCE RTX 2080 Ti.
      </div>
    </div>
  `,
  introduction: `Вы – офицер британской разведки, но не из тех, что учиняют диверсии во вражеском тылу или внедряются в высшие эшелоны власти. Ваш отдел ежедневно изучает десятки и сотни перехваченных сообщений, среди которых как рутинные доклады о снабжении, так и детали судьбоносных операций. Конечно же, всё это зашифровано, и ваша задача — раскусить коды противника, чтобы добраться до сути.`,
  tabs: [
    {
      tab: 'main',
      label: 'Конкурс',
    },
    {
      tab: 'aboutGame',
      label: 'Battlefield V',
      content: `
        <div class="about-game">
          <p>
            <b>Battlefield V</b> – Вторая мировая в совершенно новом свете. Примитие участие в мультиплеерных боях в новых и классических режимах. Сюжетная кампания рассказывает про людей, чьи судьбы были втянуты в величайший военный конфликт в истории человечества. 
          </p>
          <p>
            <b>Battlefield V</b> отказывается от сезонных пропусков. «Ход войны» – новый сервис, снабжающий игроков бесплатным контентом в течение нескольких лет.
          </p>
          <h2>
            ТРЕЙЛЕРЫ И ВИДЕО ПО ИГРЕ
          </h2>
          <div class="about-game__videos">
            <div class="about-game__videos-left">
              <div class="about-game__videos-wrapper" data-click="showVideo" data-url="https://www.youtube.com/embed/A_LsjERkTvo">
                <img src="https://img.youtube.com/vi/A_LsjERkTvo/maxresdefault.jpg" alt="">
              </div>
            </div>
            <div class="about-game__videos-right">
              <div class="about-game__videos-wrapper" data-click="showVideo" data-url="https://www.youtube.com/embed/icnuPKY-M-E">
                <img src="https://img.youtube.com/vi/icnuPKY-M-E/maxresdefault.jpg" alt="">
              </div>
              <div class="about-game__videos-wrapper" data-click="showVideo" data-url="https://www.youtube.com/embed/nrnpp5nAgtg">
                <img src="https://img.youtube.com/vi/nrnpp5nAgtg/maxresdefault.jpg" alt="">
              </div>
              <div class="about-game__videos-wrapper" data-click="showVideo" data-url="https://www.youtube.com/embed/_fOXh_9_-_c">
                <img src="https://img.youtube.com/vi/_fOXh_9_-_c/maxresdefault.jpg" alt="">
              </div>  
            </div>
          </div>
          <div class="about-game__buttons">
            <a class="bf-special__button" href="https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one" target="_blank">
              УЗНАТЬ БОЛЬШЕ О&nbsp;BATTLEFIELD&nbsp;V
            </a>
          </div>
        </div>
      `,
    },
    {
      tab: 'aboutPrize',
      label: 'NVIDIA RTX',
      content: `
        <div class="about-nvidia">
          <img class="about-nvidia__cover" src="https://leonardo.osnova.io/05d01e0b-9a77-ea0f-dbbd-6694570218df">
          <img class="about-nvidia__logo" src="https://leonardo.osnova.io/21a6011a-788a-1955-ba9e-a6746a44e614">
          <p>
            <b>GEFORCE RTX</b> — новый уровень реализма графики на PC. 
            Видеокарты RTX совмещают в себе технологии трассировки лучей в реальном времени, искусственный интеллект и программируемые шейдеры. Это иной игровой опыт.
          </p>
          <p>
            Приз этого конкурса — кастомный игровой PC Battlefield V на базе <b>NVIDIA GEFORCE RTX 2080 Ti</b>.
          </p>
          <br clear="all">
          <div class="about-game__buttons">
            <a class="bf-special__button" href="https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one" target="_blank">
              УЗНАТЬ БОЛЬШЕ О NVIDIA RTX
            </a>
          </div>
        </div> 
      `,
    }
  ],
  conclusion: 'Война продлится ещё целый год как в Европе, так и в Азии, и вас ждёт масса работы. Но ставки уже не столь высоки. Все знают, что нацизм обречён, и его уничтожение – лишь дело времени. Пускай в своей агонии Третий Рейх и будет выдумывать одно чудо-оружие за другим, это ему уже не поможет, и неважно, узнают об этом Союзники или нет.',
  outro: `
    <div class="outro-prizes">
      <div class="outro-prizes__image">
        <img src="https://leonardo.osnova.io/b31cbabd-7a1e-a48d-6b62-6dc1e4bded00" alt="">
      </div>
      <div class="outro-prizes__text">
        28 ноября 15:00 мы проведём стрим, на котором расскажем о Battlefield V, а также разыграем призы среди тех, кто успешно прошёл квест. Не пропустите! Смотреть трансляцию можно на <a href="//twitch.tv/dtfru" target="_blank">Twitch</a>.
      </div>
    </div>
  `,
  prizePopup: `
    <div class="about-prize">
      <div class="about-prize__image">
        <img src="https://leonardo.osnova.io/b273f4e8-22ea-658f-0928-e4a24bb10c84" alt="">
      </div>
      <div class="about-prize__text">
        <h2>КОНФИГУРАЦИЯ</h2>
        <p>
          <b>Видеокарта:</b> NVIDIA GEFORCE RTX 2080 Ti
        </p>
        <p>
          <b>Процессор:</b> Intel Core i7-9700K (8 ядер/8 потоков)
          </p>
        <p>
          <b>Модуль памяти:</b> 32 Гб DDR4 Corsair Vengance RGB Pro, 3000 МГц
        </p>
        <p>
          <b>Материнская плата:</b> ASUS ROG STRIX Z390-H GAMING
        </p>
        <p>
          <b>Звук:</b> Интегрированная карта с системой 7.1
        </p>
        <p>
          <b>SSD:</b> 500 Гб, Samsung 970 EVO
        </p>
        <p>
          <b>Жесткий диск:</b> 2 Тб <br>
          <b>Блок питания:</b> 750W, Corsair HX750i
        </p>
        
        <p>
          <b>Кулер:</b> NZXT KRAKEN WATER COOLER X52 <br>
          <b>Корпус:</b> Invasion Rush с системой охлаждения и шумоизоляции
        </p>
        <p>
          <b>Сборка:</b> Индивидуальный проект от INVASION Labs
        </p>
      </div>
    </div>
  `,
  logoUrl: 'href="https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one" target="_blank"',
  promoUrl: 'href="https://www.ea.com/ru-ru/games/battlefield/battlefield-5/buy?utm_campaign=bf5-launch_hd_ru_scm_fixd_dtf_bfv-eaa-c3&utm_source=dtf&utm_medium=display&utm_content=BFV-Launch-Dis#battlefield-xbox-one" target="_blank"',
  CTAText: 'УЗНАТЬ БОЛЬШЕ О BATTLEFIELD V',
  questions: [
    {
      id: 1,
      text: 'Вас направили на помощь команде математиков под началом Алана Тьюринга, чтобы раскрыть тайну немецкого шифра «Энигма». Чтобы найти закономерность в россыпи случайных букв и цифр, нужно опираться хоть на какие-то известные слова. Однажды эксперты из Блетчли-парка всё же нашли два слова, от которых можно отталкиваться при расшифровке: TZYPQ GAOPXE. Что это за слова?',
      image: 'https://leonardo.osnova.io/ff9556d8-f752-b78e-80b2-8d2940e854d5',
      options: [
        {
          id: 1,
          text: 'Отряд утерян',
        },
        {
          id: 2,
          text: 'Хайль Гитлер',
        },
        {
          id: 3,
          text: 'Слышу конвой',
        },
        {
          id: 4,
          text: 'Взять живыми',
        }
      ]
    },
    {
      id: 2,
      text: 'После успеха с шифровальными машинами вас отправляют туда, где гораздо важнее человеческий фактор — в поместье «Трент-парк», где британская разведка размещала высокопоставленных пленных немецких офицеров. В комфортных условиях, пусть и взаперти, генералы разболтали немало фактов о немецкой военной машине — а их прослушивали на каждом шагу. Один такой офицер сильно запаниковал, когда узнал о точном месте своего заключения. В разговорах с другими немцами он упоминал некоего Виктора Второго как причину беспокойства. Что это за Виктор и почему Второй?',
      options: [
        {
          id: 1,
          text: 'Первый итальянский авианосец «Витторио Эмануэле»',
        },
        {
          id: 2,
          text: 'Завод «Фольксваген» в Вольфсбурге',
        },
        {
          id: 3,
          text: 'Второй этап операции «Вундерланд»',
        },
        {
          id: 4,
          text: 'Баллистическая ракета «Фау-2»',
        }
      ]
    },
    {
      id: 3,
      text: `Несмотря на ваши успехи, Вермахт продолжает наступать. Вот уже пала Франция, и немецкие самолёты испытывают на прочность оборону Британии. В 1941 году Лондон терпит массовые бомбардировки «Люфтваффе». По пути на работу вы ежедневно проходите и мимо руин, и рядом с домами, которые ещё можно починить. Среди шума особенно звонко слышится стук молотка жестянщика, латающего одну из крыш. Он ежедневно звякал то в одном, то в другом районе Лондона, пока вы не приказываете арестовать жестянщика, потому что в его стуке есть закономерность.
            <p>Что вы посоветуете сделать властям на основе расшифрованного сообщения?</p>`,
      image: 'https://leonardo.osnova.io/cfffb78d-320e-9356-ed56-2e34f7ecda4e',
      options: [
        {
          id: 1,
          text: 'Улучшить светомаскировку вокзала',
        },
        {
          id: 2,
          text: 'Изучить систему ПВО в Вестминстере и перенести опыт на другие защитные комплексы',
        },
        {
          id: 3,
          text: 'Усилить воздушное прикрытие авиабазы',
        },
        {
          id: 4,
          text: 'Отменить режим повышенной боеготовности в пригородах',
        }
      ]
    },
    {
      id: 4,
      text: `Уже три года вы наблюдаете, как в захваченной Европе ведётся подрывная работа по всем возможным фронтам, но очередные донесения резко поднимают ставки. В Норвегии всё активнее работает завод, производящий оксид дейтерия, который остро необходим немецким физикам-ядерщикам для строительства будущей атомной бомбы. К счастью, на заводе оказался свой человек, учёный из СССР под прикрытием, тайно ведущий подрывную деятельность. Он собрал ценные сведения, только передать их непросто, ведь за учёными пристально следят. 
          <p>Физик оставил на меловой доске в одном из кабинетов ряд цифр, который получилось сфотографировать через окно. Что вы посоветуете командованию, если опираться на сведения от учёного?</p>`,
      image: 'https://leonardo.osnova.io/5abd74ac-2113-eb7b-a5d1-3ac42b35da00',
      options: [
        {
          id: 1,
          text: 'Отменить запланированный авианалёт на завод и придумать план наземной диверсии',
        },
        {
          id: 2,
          text: 'Перехватить и потопить судно с оборудованием',
        },
        {
          id: 3,
          text: 'Взорвать дамбу, питающую завод',
        },
        {
          id: 4,
          text: 'Завербовать учёных на заводе и устроить саботаж',
        }
      ]
    },
    {
      id: 5,
      text: `Только что вы читали донесение из ледяной Скандинавии, а вот уже изучаете сведения из Северной Африки. Саботажники из SBS готовили дерзкую диверсию против армейского корпуса Эрвина Роммеля, который только что высадился в Триполи, но приостановили подготовку, когда увидели целую армаду готовых к бою танков. Тем временем в ваш штаб попала шифровка, отправленная двойным агентом в Вермахте. 
          <p>Сообщение закодировано книжным шифром, который опирается на первые строки романа Эриха Марии Ремарка «Возлюби ближнего своего».  Как же быть дальше диверсантам из лодочной службы?</p>`,
      image: 'https://leonardo.osnova.io/ec8a1c57-e3a2-f401-2e0f-6ba638274cc6',
      options: [
        {
          id: 1,
          text: 'Нужно заминировать аэродром и лишить немцев воздушной поддержки',
        },
        {
          id: 2,
          text: 'Пусть лодочники нападут на десантные корабли, а войска Союзников могут бить в лоб, пока есть время',
        },
        {
          id: 3,
          text: 'Прокрасться в штаб и ликвидировать самого Роммеля!',
        },
        {
          id: 4,
          text: 'Подняться вверх по реке и оттуда наблюдать за силами нацистов',
        }
      ]
    },
    {
      id: 6,
      text: `К середине войны вы всё чаще сотрудничаете с разведкой США, которая активно помогает британской. В июле 1943 года, когда янки высадились на Сицилии, внимание агентуры было приковано к событиям в Риме. Особенно вас удивил текст письма одного итальянского сенатора, обнаруженное в его кабинете полевым агентом. В записной книжке сенатора было указано, что смещение равно трём.
          <p>Что вы предложите римской ячейке сопротивления, основываясь на этих данных?</p>`,
      image: 'https://leonardo.osnova.io/a1f61eb9-e30c-6836-1c83-be72a999acfc ',
      options: [
        {
          id: 1,
          text: 'Отступить к горной базе неподалёку от Рима',
        },
        {
          id: 2,
          text: 'Направить оперативную группу к двум часам к зданию тюрьмы',
        },
        {
          id: 3,
          text: 'Проследить за покушением и довершить начатое, если понадобится',
        },
        {
          id: 4,
          text: 'Обеспечить безопасность короля Италии',
        }
      ]
    },
    {
      id: 7,
      text: `Летом и осенью 1944-го года на вас обрушилась настоящая лавина работы, ведь армиям на недавно открытом западном фронте необходима поддержка дешифровщиков. В августе к Парижу приближались войска Союзников, и не оставалось сомнений, что нацисты скоро покинут город. Однако французское Сопротивление порядком встревожилось, когда получило шифровку от одного из своих агентов в комендатуре.
          <p>Как должно ответить Сопротивление на угрозу, о которой вы узнали из шифровки?</p>`,
      image: 'https://leonardo.osnova.io/5f3729cd-a59e-4651-440a-13b499cf1004',
      options: [
        {
          id: 1,
          text: 'Предупредить всех сочувствующих о скорых репрессиях',
        },
        {
          id: 2,
          text: 'Угнать цистерны и спрятать на брошенной железнодорожной ветке',
        },
        {
          id: 3,
          text: 'Бросить всё и бежать в леса!',
        },
        {
          id: 4,
          text: 'Саботировать закладку взрывчатки под основание Эйфелевой башни',
        }
      ]
    },
  ],
  results: [
    {
      range: [0, 4],
      title: 'Начинающий криптограф',
    },
    {
      range: [5, 7],
      title: 'Знаток дела',
    },
    {
      range: [7, 9999],
      title: 'Почти Тьюринг',
    },
  ]
};