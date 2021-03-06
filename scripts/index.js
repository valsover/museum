import { burgerNav } from "./burgerNav.js";
import { welcome } from "./welcome.js";
import { visitingFill } from "./visiting.js";
import { exploreSlider } from "./exploreSlider.js";
import { customVideoPlayer } from "./customVideoPlayer.js";
import { videoSlider } from "./videoSlider.js";
import { gallery } from "./gallerySection.js";
import { ticketsSlider } from "./ticketsSlider.js";
import { calculator } from "./calculator.js";
import { form } from "./form.js";
import { map } from "./map.js";
import { socials } from "./socials.js";
import { toTopBtn } from "./toTopBtn.js";
import { ripple } from "./ripple.js";

burgerNav();
welcome();
visitingFill();
exploreSlider();
customVideoPlayer();
videoSlider();
gallery();
ticketsSlider();
calculator();
form();
map();
socials();
toTopBtn();
ripple();


console.log(`
Функционал сайта:

    1) Слайдер в секции Welcome
    - есть возможность перелистывания слайдов влево и вправо кликами по стрелкам;
    - есть возможность перелистывания слайдов влево и вправо свайпами мышки;
    - есть возможность перелистывания слайдов влево и вправо свайпами пальца для мобильных устройств;
    - есть возможность перелистывания слайдов кликами по буллетам;
    - слайды перелистываются плавно с анимацией смещения вправо или влево;
    - перелистывание слайдов бесконечное (зацикленное);
    - при перелистывании слайдов буллет активного слайда стилизуется;
    - при перелистывании слайдов кликами или свайпами меняется номер активного слайда;

    2) Слайдер в секции Video
    - при клике по самому слайду или кнопке Play в центре слайда, внутри слайда проигрывается видео. Никакие изменения с основным видео при этом не происходят;
    - если видео проигрывается, клик по кнопке Pause останавливает его проигрывание. Также проигрывание видео останавливается, если кликнуть по другому слайду или кнопке Play в центре другого слайда. В указанной ситуации другое видео должно запуститься, а текущее остановиться. Невозможно проигрывание нескольких видео одновременно;
    - если внутри слайда проигрывается видео, клик по стрелке перелистывания слайдов останавливает проигрывание видео;
    - есть возможность перелистывания слайдов влево и вправо кликами по стрелкам. Слайды перелистываются по одному, при этом также меняется основное видео;
    - слайды перелистываются плавно с анимацией смещения вправо или влево;
    - перелистывание слайдов бесконечное (зацикленное);
    - при перелистывании слайдов буллет активного слайда стилизуется;
    - если основное видео проигрывалось при перелистывании слайдера, проигрывание видео останавливается, прогресс бар сдвигается к началу, иконки "Play" на панели управления и по центру видео меняются на первоначальные;

    3) Кастомный видеоплеер
    - при клике по кнопке "Play" слева внизу на панели видео начинается проигрывание видео, иконка кнопки при этом меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Повторный клик на кнопку останавливает проигрывание видео, иконка меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается;
    - при клике по большой кнопке "Play" по центру видео, или при клике по самому видео, начинается проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на "Pause", большая кнопка "Play" по центру видео исчезает. Клик на видео, которое проигрывается, останавливает проигрывание видео, иконка кнопки "Play" слева внизу на панели видео меняется на первоначальную, большая кнопка "Play" по центру видео снова отображается;
    - прогресс-бар отображает прогресс проигрывания видео;
    - перетягивание ползунка прогресс-бара позволяет изменить время с которого проигрывается видео;
    - если прогресс-бар перетянуть до конца, видео останавливается, соответственно, меняется внешний вид кнопок "Play";
    - при клике на иконку динамика исчезает звук видео и меняется сама иконка (и обратно);
    - при перемещении ползунка громкости звука изменяется громкость видео;
    - если ползунок громкости звука перетянуть до 0, звук выключается, иконка динамика становится зачеркнутой;
    - если при выключенном динамике перетянуть ползунок громкости звука от 0, звук включается, иконка громкости перестаёт быть зачёркнутой;
    - при нажатии на кнопку fullscreen видео переходит в полноэкранный режим, при этом видео и панель управления разворачиваются во весь экран. При нажатии на кнопку fullscreen повторно видео выходит из полноэкранного режима;
    - панель управления в полноэкранном режиме визуально выглядит так же, как на макете - кнопки равномерно распределены по всей ширине страницы, относительные размеры между кнопками и ползунками, а также относительные размеры самих кнопок остались прежними;
    - управление плеером с клавиатуры. Клавиши и группы клавиш работают в русской и английской раскладке клавиатуры. При изменении скорости воспроизведения поверх видео появляется и исчезает число с текущим коэффициентом воспроизведения;
        -- клавиша Пробел — пауза, при повторном нажатии - play;
        -- Клавиша M (англ) — отключение/включение звука;
        -- Клавиша F — включение/выключение полноэкранного режима;
        -- Клавиши SHIFT+, (англ) — ускорение воспроизведения ролика;
        -- Клавиши SHIFT+. (англ) — замедление воспроизведения ролика;
        -- Клавиша Стрелка вправо — перемотка видео на 10сек вперёд;
        -- Клавиша Стрелка слево — перемотка видео на 10сек назад;

    4) Слайдер сравнения изображений в секции Explore
    - ползунок можно перетягивать мышкой по горизонтали;
    - ползунок никогда не выходит за границы картины;
    - при перемещении ползунка справа налево плавно появляется нижняя картина;
    - при перемещении ползунка слева направо плавно появляется верхняя картина;
    - при обновлении страницы ползунок возвращается в исходное положение;

    5) Анимация при прокрутке изображений в секции Galery
    - при прокрутке страницы вниз появление картин секции Galery сопровождается анимацией: изображения плавно поднимаются снизу вверх, увеличиваясь и создавая эффект выплывания;
    - если прокрутить страницу вверх и затем снова прокручивать вниз, анимация появления картин повторяется;
    - при обновлении страницы, если она к тому моменту была прокручена до секции Galery, анимация картин повторяется;

    6) Калькулятор продажи билетов в секции Tiskets
    - при изменении количества билетов Basic и Senior пересчитывается общая цена за них;
    - у каждого типа билетов своя цена (20 €, 25 €, 40 € для Basic и половина этой стоимости для Senior). При изменении типа билета пересчитывается общая цена за них;

    7) Калькулятор продажи билетов в форме продажи билетов
    - когда при клике по кнопке Buy now открывается форма, она уже содержит данные, указанные на странице сайта - количество билетов, их тип, общая цена за них;
    - когда пользователь выбирает дату в форме слева, она отображается в билете справа;
    - когда пользователь выбирает время в форме слева, оно отображается в билете справа;
    - время можно выбирать с 9:00 до 18:00 с интервалом в 30 минут;
    - можно изменить тип билета в поле Ticket type слева при этом меняется тип билета, цена билета и общая стоимость билетов справа;
    - можно изменить количество билетов каждого типа в поле слева при этом меняется количество билетов и общая стоимость билетов справа;

    8) Валидация формы
    - валидация имени пользователя. Имя пользователя млжет содержать от 3 до 15 символов, в качестве символов могут быть использованы буквы английского или русского алфавита в нижнем или верхнем регистре и пробелы;
    - валидация e-mail должна пропускать только адреса вида username@example.com, где: username - имя пользователя, должно содержать от 3 до 15 символов (буквы, цифры, знак подчёркивания, дефис), не должно содержать пробелов; @ - символ собачки; example - домен первого уровня состоит минимум из 4 латинских букв; com - домен верхнего уровня, отделяется от домена первого уровня точкой и состоит минимум из 2 латинских букв;
    - валидация номера телефона: номер содержит только цифры; без разделения или с разделением на две или три цифры; разделение цифр может быть через дефис или пробел; с ограничением по количеству цифр не больше 10 цифр;
    - при попытке ввода в input невалидного значения, его граница подсвечивается красным, выводится текстовое предупреждение в человекочитаемом формате;

    9) Интерактивная карта в секции Contacts
    - в секции Contacts добавлена интерактивная карта (mapbox);
    - на карте отображаются маркеры;

    10) Адаптивное бургер меню
    - при нажатии на бургер-иконку меню появляется, плавно выдвигаясь слева, бургер-иконка изменяется на крестик. При нажатии на крестик меню исчезает, плавно возвращаясь назад, иконка крестика превращается в бургер-иконку;
    - ссылки в меню работают, обеспечивая плавную прокрутку по якорям;
    - при клике по ссылке в адаптивном меню, или при клике по любому месту сайта, кроме самого адаптивного меню, меню закрывается;

    11) Слайдер изображений в секции Tickets
    - слайдер автоматический, изображения плавно изменяются каждые 3 секунды;
    - слайдер зациленый (бесконечный);
    - изображения показываютя в полном размере, не обрезаясь;

    12) Дополнительная страница - галерея
    - при нажатии на кнопку "Discover" в секции gallery в нвкладке открыается новая страница  галерея;
    - на странице есть параллакс (как и на главной странице), дополнительная информация о музее и галерея картинок с их подробным описанием;
    - подробное описание появляется при нажатии на картинку во всплывающем окне-блоке;

    13) Кнопка "вверх" кнопка "Ripple"
    - при нажатии на кнопку страница плавно прокручивается наверх;
    - кнопка появляется при прокрутке экрана вниз;
    - кнопка всегда расположена внизу справа на всех рахрешениях экрана;
    - кнопка отправки формы имеет ripple-эффект при клике;

    14) Сайт респонсивный и адаптивный для устройв с шириной: 1024px, 768px, 320-420px

    15) Сайт написан с помощью HTML, CSS, JavaScript без дополнительных библиотек и фреймворков; используется ES6

    16) Вёрстка валидная, семантическая, наименование классов по Bem, pixel-perfect вёрстка, код разбит на модули

    17) Дополнительные инструменты: git, figma, adobe photoshop, trello для организации процесса работы
`);