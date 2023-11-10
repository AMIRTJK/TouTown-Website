import { useState } from "react";
import "./App.css";
import { Card } from "./components/Card";
import { CardNews } from "./components/CardNews";

function App() {
  return (
    <>
      {/* Section 1 */}
      <header className="fullscreen pb-[61px]">
        <nav className="nav bg-[#212121CC] py-[20px]">
          <div className="container">
            <ul className="menu flex items-center justify-between">
              <div className="panel-control flex items-center gap-[24px]">
                <li>
                  <a href="">
                    <img src="src/assets/Group 22.svg" alt="" />
                  </a>
                </li>
                {/* Mobile */}
                <li className="block sm:hidden">
                  <a href="">
                    <img src="src/assets/phone-mobile.svg" alt="" />
                  </a>
                </li>
                <li className="hidden sm:block">
                  <a href="">
                    <img src="src/assets/map pin.svg" alt="" />
                  </a>
                </li>
                {/* Mobile */}
                <li className="block sm:hidden">
                  <a href="">
                    <img src="src/assets/buy-mobile.svg" alt="" />
                  </a>
                </li>
                <li className="hidden sm:block font-[500] text-[20px] leading-[24.38px] text-[#fff]">
                  <a href="">8 981 120-11-17</a>
                </li>
              </div>
              <div className="logo">
                <li>
                  <a href="">
                    <img src="src/assets/logo.svg" alt="" />
                  </a>
                </li>
              </div>
              <div className="panel-search flex items-center gap-[24px]">
                <li className="hidden sm:block">
                  <a href="">
                    <img src="src/assets/Group.svg" alt="" />
                  </a>
                </li>
                <li className="hidden sm:block">
                  <a href="">
                    <img src="src/assets/mail.svg" alt="" />
                  </a>
                </li>
                <li className="hidden sm:block">
                  <a href="">
                    <img src="src/assets/search.svg" alt="" />
                  </a>
                </li>
              </div>
            </ul>
          </div>
        </nav>
        {/* Section 2 */}
        <div className="wrapper-header-content mt-[20px] sm:mt-[77px]">
          <div className="container">
            <div className="wrapper-text w-[100%] sm:w-[45%]">
              <h1 className="text-[24px] font-[500] leading-[28px] sm:font-[400] sm:text-[41px] sm:leading-[48px]">
                Исключительное качество без компромиссов
              </h1>
              <p className="mt-[24px] text-[19px] leading-[23px]">
                Ножи «Tuotown» – это главный инструмент поваров и секрет
                кулинарного мастерства
              </p>
              <button className="hidden sm:block border-[#C80000] border-[2px] w-[165px] h-[55px] rounded-[27px] mt-[39px] hover:bg-[#fff] hover:text-[#C80000] hover:border-[#fff] transition-all duration-100">
                ПОДРОБНЕЕ
              </button>
              <button className="bg-[#C80000] font-[500] sm:hidden sm:bg-[transparent] sm:font-[400]  border-[#C80000] border-[2px] w-[165px] h-[55px] rounded-[27px] mt-[39px] hover:bg-[#fff] hover:text-[#C80000] hover:border-[#fff] transition-all duration-100">
                Купить
              </button>
              <span className="ml-[30px] sm:hidden">48 тыс.р.</span>
            </div>
            <div className="wrapper-slide-header flex justify-between items-center mt-[72px]">
              <div className="hidden arrow-left  cursor-pointer border-[#ffffff10] border-[1px] h-[48px] w-[48px] rounded-[24px] sm:flex justify-center items-center hover:border-[#ffffff50] transition-all duration-100">
                <img src="src/assets/arrow-left.svg" alt="" />
              </div>
              <div className="hidden slide-lines sm:flex items-center gap-[26px] text-[#fff]">
                <div className="line w-[19px] h-[19px] rounded-[9.5px] bg-[#fff] cursor-pointer"></div>
                <div className="line font-[600] text-[15px] leading-[18.29px] cursor-pointer">
                  2
                </div>
                <div className="line line font-[600] text-[15px] leading-[18.29px] cursor-pointer">
                  3
                </div>
                <div className="line line font-[600] text-[15px] leading-[18.29px] cursor-pointer">
                  4
                </div>
              </div>
              <div className="hidden arrow-right  cursor-pointer border-[#ffffff10] border-[1px] h-[48px] w-[48px] rounded-[24px] sm:flex justify-center items-center hover:border-[#ffffff50] transition-all duration-100">
                <img src="src/assets/arrow-right.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* Section 3 */}
      <div className="wrapper-content-knife pt-[60px]">
        <div className="container">
          {/* Mobile */}
          <div className="mobile-knifes block sm:hidden">
            <div className="post">
              <div className="wrapper-image">
                <img src="src/assets/Rectangle 77 - moblie.png" alt="" />
              </div>
              <div className="wrapper-text mt-[20px] ">
                <p className="font-[500] leading-[21.29px] text-[18px] mb-[10px]">
                  Исключительное качество без компромиссов
                </p>
                <p className="text-[13px] leading-[15.85px]">
                  Ножи «Tuotown» — это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
              </div>
            </div>
            {/* Mobile */}
            <div className="post mt-[72px]">
              <div className="wrapper-image">
                <img src="src/assets/Rectangle 78 - mobile.png" alt="" />
              </div>
              <div className="wrapper-text mt-[20px] ">
                <p className="font-[500] leading-[21.29px] text-[18px] mb-[10px]">
                  Исключительное качество без компромиссов
                </p>
                <p className="text-[13px] leading-[15.85px]">
                  Ножи «Tuotown» — это главный инструмент поваров и секрет
                  кулинарного мастерства
                </p>
              </div>
            </div>
          </div>
          {/* Mobile */}
          <div className="wrapper-scroll-mobile-knifes w-[100%] mt-[50px] flex  justify-center gap-[10px] items-center overflow-auto sm:hidden">
            <img src="src/assets/scroll-mobile.png" alt="" />
            <img src="src/assets/scroll-mobile.png" alt="" />
            <img src="src/assets/scroll-mobile.png" alt="" />
          </div>
          {/* Mobile */}
          <div className="wrapper-video-knifes mt-[50px] sm:hidden">
            <img src="src/assets/video-mobile.png" alt="" />
          </div>
          {/* Mobile */}
          <div className="sm:hidden wrapper-properties-knife-mobile flex flex-col items-center  gap-[20px] justify-center mt-[30px] ">
            <span className="font-[500] text-[18px] leading-[21.29px] border-b-[2px] py-[5px] border-[#C80000]">
              Характеристики
            </span>
            <img src="src/assets/mobile-properties-knife.png" alt="" />
            <ul className="wrapper-price flex flex-col gap-[15px] mt-[15px]">
              <li className="flex justify-between items-center w-[100%] gap-[100px] pb-[5px] border-b-[1px] border-[#4F4F4F] ">
                <p>Длина лезвия</p>
                <p>24 см</p>
              </li>
              <li className="flex justify-between items-center w-[100%] gap-[100px] pb-[5px] border-b-[1px] border-[#4F4F4F] ">
                <p>Длина лезвия</p>
                <p>24 см</p>
              </li>
              <li className="flex justify-between items-center w-[100%] gap-[100px] pb-[5px] border-b-[1px] border-[#4F4F4F] ">
                <p>Длина лезвия</p>
                <p>24 см</p>
              </li>
              <li className="flex justify-between items-center w-[100%] gap-[100px] pb-[5px] border-b-[1px] border-[#4F4F4F] ">
                <p>Длина лезвия</p>
                <p>24 см</p>
              </li>
            </ul>
            <div className="more-properties flex items-center gap-[20px] cursor-pointer">
              <p className="text-[40px] font-[200] text-[#ADACAC]">+</p>
              <p className="uppercase text-[#ADACAC] font-[600]">
                больше характеристик
              </p>
            </div>
          </div>
          <div className="hidden wrapper-knifes sm:flex justify-between mx-[auto] w-[100%] sm:w-[80%]">
            <div className="post flex justify-center items-center flex-col gap-[31px] cursor-pointer">
              <div className="wrapper-img w-[50px] h-[50px]">
                <img
                  src="src/assets/content-knife-1.svg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="wrapper-text">
                <p className="font-[500] text-[17px] leading-[20.72px] opacity-[40%]">
                  Кухонные ножи
                </p>
              </div>
            </div>
            <div className="post flex justify-center items-center flex-col gap-[31px] cursor-pointer">
              <div className="wrapper-img w-[50px] h-[50px]">
                <img
                  src="src/assets/content-knife-2.svg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="wrapper-text">
                <p className="font-[500] text-[17px] leading-[20.72px] opacity-[40%]">
                  Складные ножи
                </p>
              </div>
            </div>
            <div className="post flex justify-center items-center flex-col gap-[31px] cursor-pointer">
              <div className="wrapper-img w-[50px] h-[50px]">
                <img
                  src="src/assets/content-knife-3.svg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="wrapper-text">
                <p className="font-[500] text-[17px] leading-[20.72px] text-[#FF0000]">
                  Точилки для ножей
                </p>
              </div>
            </div>
            <div className="post flex justify-center items-center flex-col gap-[31px] cursor-pointer">
              <div className="wrapper-img w-[50px] h-[50px]">
                <img
                  src="src/assets/content-knife-4.svg"
                  alt=""
                  className="w-[100%]"
                />
              </div>
              <div className="wrapper-text">
                <p className="font-[500] text-[17px] leading-[20.72px] opacity-[40%]">
                  Кухонные ножи
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Section 4 */}
      <div className="wrapper-collection-knifes py-[60px]">
        <div className="container">
          <div className="wrapper-post flex flex-wrap justify-start items-center mt-[50px] gap-y-[25px] gap-x-[18px]">
            <div className="news-card h-[481px] w-[590px] p-[26px] flex items-end">
              <div className="wrapper-arrow flex  items-center justify-between w-[100%] cursor-pointer">
                <p className="font-[600] text-[17px] leading-[28px]">
                  Познакомьтесь с коллекцией ножей TUOTOWN
                </p>
                <img src="src/assets/arrow-right.svg" alt="" />
              </div>
            </div>
            <Card
              title="Складной нож SQ01-B"
              image="src/assets/image 14.svg"
              price="850 р."
              news="Новинка"
            />
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
            />
            <Card
              title="Складной нож SQ01-B"
              image="src/assets/image 14.svg"
              price="850 р."
            />
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
            />
            <div className="hidden post post-news h-[481px] w-[23.5%] sm:flex flex-col gap-[12px] rounded-[18.5px] ">
              <a href="https://www.instagram.com/" target="_blank">
                <div className="content rounded-[14px] h-[412px] "></div>
              </a>
            </div>
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
            />
          </div>
        </div>
      </div>
      {/* Section 5 */}
      <div className="wrapper-know-first">
        <div className="container">
          <h2 className="text-center text-[27px] font-[500] mb-[17px]">
            Узнавайте первым о новинках и новостях
          </h2>
          <div className="wrapper-input flex justify-between items-center px-[20px] w-[276px] h-[59px] rounded-[6px] bg-[#272727] text-[#fff] mx-[auto]">
            <input
              type="text"
              placeholder="Ваш e-mail"
              className="bg-[transparent] outline-none w-[100%] h-[100%]"
            />
            <img src="src/assets/chevron-right.svg" alt="" />
          </div>
          <div className="flex flex-wrap justify-start items-center mt-[50px] gap-y-[25px] gap-x-[17px]">
            <Card
              title="Складной нож SQ01-B"
              image="src/assets/image 14.svg"
              price="850 р."
            />
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
            />
            <Card
              title="Складной нож SQ01-B"
              image="src/assets/image 14.svg"
              price="850 р."
              news="Новинка"
            />
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
            />
          </div>
        </div>
      </div>
      {/* Section 6 */}
      <div className="wrapper-news-popular mt-[60px] border-t-[1px] border-[#ffffff10] pb-[60px]">
        <div className="container">
          <div className="wrapper-text flex items-start justify-center gap-[53px] mt-[60px]">
            <span className="border-b-[2px] border-[#C80000] text-[17px] font-[600] leading-[30px] uppercase cursor-pointer transition-all duration-100">
              Новинки
            </span>
            <span className="text-[17px] font-[600] leading-[30px] uppercase hover:border-b-[2px] :hover border-[#C80000] cursor-pointer transition-all duration-100">
              Популярное
            </span>
          </div>
          <div className="flex flex-wrap justify-start items-center mt-[50px] gap-y-[25px] gap-x-[17px]">
            <Card
              title="Складной нож SQ01-B"
              image="src/assets/image 14.svg"
              price="850 р."
              news="Новинка"
            />
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
              news="Новинка"
            />
            <Card
              title="Складной нож SQ01-B"
              image="src/assets/image 14.svg"
              price="850 р."
              news="Новинка"
            />
            <Card
              title="Складной нож JJ001-TUO-B"
              image="src/assets/image 15.svg"
              price="12 850 р."
              news="Новинка"
            />
          </div>
        </div>
      </div>
      {/* Section 7 */}
      <div className="hidden sm:block wrapper-legend-knifes border-[#ffffff10] border-y-[1px] pb-[60px]">
        <div className="container">
          <div className="wrapper-content mt-[60px] flex justify-between items-start flex-wrap gap-y-[39px]">
            <aside className="left">
              <div className="wrapper-image">
                <img src="src/assets/Rectangle 36.png" alt="" />
              </div>
            </aside>
            <aside className="right w-[65%]">
              <div className="wrapper-text w-[87%]">
                <h3 className="font-[500] text-[35px] leading-[42px]">
                  «Tuotown» – легендарные ножи, создающие шедевры
                </h3>
                <p className="mt-[51px] text-[16px] leading-[22px]">
                  Компания «Tuotown» – эксклюзивный представитель
                  профессиональных кухонных ножей, изготовленных лучшими
                  мастерами Восточной Азии с применением передового европейского
                  оборудования и современных материалов. Они отличаются
                  идеальным балансом и фантастической остротой. Сочетают в себе
                  вековые традиции и новейшие разработки. Также предлагаем
                  широкий ассортимент сопутствующих товаров.
                </p>
              </div>
            </aside>
            <aside className="left w-[65%]">
              <div className="wrapper-text w-[100%]">
                <p>
                  Истинная красота ножа — совершённая функциональность
                  и визуальная гармония. Этот предмет издревле сопутствовал
                  человеку: от зари цивилизации до сегодняшних дней.
                  На протяжении всей истории человечества он был верным
                  помощником, незаменимым инструментом и грозным оружием.
                  Предлагаем изделия Hi-end качества по доступным ценам
                  настоящим ценителям японских ножей.
                </p>
                <p className="mt-[27px] text-[16px] leading-[22px]">
                  Отличительной чертой нашего интернет-магазина являются
                  уникальные торговые предложения, эксклюзивность продукции,
                  неизменно высокое качество и выгодные цены. Осуществляем
                  продажи элитных японских кухонных ножей для профессионалов
                  и любителей. В обширной ассортиментной линейке представлены
                  изделия для различных потребностей и любого бюджета —
                  от столовых приборов до шеф-ножей.
                </p>
                <h4 className="font-[500] text-[35px] leading-[42px] mt-[43px]">
                  Ножи «Tuotown» – это главный инструмент поваров и секрет
                  кулинарного мастерства
                </h4>
              </div>
            </aside>
            <aside className="right">
              <div className="wrapper-image">
                <img src="src/assets/Rectangle 39.png" alt="" />
              </div>
            </aside>
          </div>
        </div>
      </div>
      {/* Section 8 */}
      <div className="hidden sm:block wrapping-interesing-knifes mt-[60px] mb-[60px]">
        <div className="container">
          <h5 className="font-[500] text-[35px] leading-[42px] mb-[37px]">
            Всё самое интересное о ножах
          </h5>
          <div className="wrapper-post flex justify-between items-center flex-wrap gap-[28px]">
            <CardNews
              date="4 августа 2021 19:24"
              title="Традиционные виды японских кухонных ножей"
              image="src/assets/Rectangle-41.png"
            />
            <CardNews
              date="13 сентября 2021 11:04"
              title="Всемирная история режущих клинков — взгляд в прошлое"
              image="src/assets/Rectangle-40.png"
            />
            <CardNews
              date="17 декабря 2021 13:14"
              title="Как ухаживать за японскими кухонными ножами?"
              image="src/assets/Rectangle-42.png"
            />
          </div>
        </div>
      </div>
      {/* Section 9 */}
      <footer className="footer">
        <div className="footer-top bg-[#272727] py-[44px]">
          <div className="container">
            <div className="wrapper-content flex flex-col sm:flex-row justify-between items-start gap-x-[64px]">
              <div className="post w-[100%] sm:w-[48%]">
                <div className="wrapper-logo flex gap-[5px] items-center sm:gap-[26px]">
                  <img src="src/assets/logo.svg" alt="" />
                  <p className="text-[12px] leading-[12px] font-[400] sm:text-[13px] sm:leading-[17px] sm:font-[600]">
                    легендарные ножи, создающие шедевры
                  </p>
                </div>
                <div className="wrapper-text mt-[30px]">
                  <p className="text-[13px] font-[400] leading-[20px]">
                    Компания «Tuotown» – эксклюзивный представитель
                    профессиональных кухонных ножей, изготовленных лучшими
                    мастерами Восточной Азии с применением передового
                    европейского оборудования и современных материалов.
                  </p>
                  <p className="mt-[30px] text-[13px] font-[400] leading-[20px] sm:w-[85%]">
                    Они отличаются идеальным балансом и фантастической остротой.
                    Сочетают в себе вековые традиции и новейшие разработки.
                    Также предлагаем широкий ассортимент сопутствующих товаров.
                  </p>
                </div>
              </div>
              <div className="post w-[100%] mt-[30px] sm:w-[55%]">
                <p className="font-[600] text-[16px] leading-[28px]">
                  Информация
                </p>
                <ul className="list flex flex-wrap items-center gap-x-[20px] gap-y-[5px] mt-[14px]">
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Главная</a>
                  </li>
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Новости</a>
                  </li>
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">О компании</a>
                  </li>
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Контакты</a>
                  </li>
                </ul>
                <p className="font-[600] text-[16px] leading-[28px] mt-[14px]">
                  Каталог
                </p>
                <ul className="list flex flex-wrap items-center gap-x-[20px] gap-y-[5px] mt-[14px]">
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Кухонные ножи</a>
                  </li>
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Складные ножи</a>
                  </li>
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Точилки для ножей</a>
                  </li>
                  <li className="font-[500] text-[14px] opacity-[50%]">
                    <a href="">Аксессуары</a>
                  </li>
                </ul>
                <div className="wrapper-social flex flex-col items-start gap-[5pxx] sm:flex-row sm:items-center sm:gap-[23px] mt-[14px]">
                  <p className="font-[600] text-[16px] leading-[28px]">
                    Мы в соцсетях
                  </p>
                  <div className="wrapper-icon flex items-center gap-[8px]">
                    <div className="icon flex justify-center items-center w-[32px] h-[32px] rounded-[16px] bg-[#2E2E2E]">
                      <a href="https://www.facebook.com" target="_blank">
                        <img src="src/assets/facebook.svg" alt="" />
                      </a>
                    </div>
                    <div className="icon flex justify-center items-center w-[32px] h-[32px] rounded-[16px] bg-[#2E2E2E]">
                      <a href="https://vk.com/" target="_blank">
                        <img src="src/assets/vk.svg" alt="" />
                      </a>
                    </div>
                    <div className="icon flex justify-center items-center w-[32px] h-[32px] rounded-[16px] bg-[#2E2E2E]">
                      <a href="https://www.instagram.com/" target="_blank">
                        <img src="src/assets/instagram.svg" alt="" />
                      </a>
                    </div>
                    <div className="icon flex justify-center items-center w-[32px] h-[32px] rounded-[16px] bg-[#2E2E2E]">
                      <a href="https://www.youtube.com/" target="_blank">
                        <img src="src/assets/youtube.svg" alt="" />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <div className="post mt-[30px] sm:mt-[0px]">
                <p className="font-[600] text-[16px] leading-[28px] mb-[23px]">
                  Контактная информация
                </p>
                <p className="text-[20px] leading-[28px] font-[600] mb-[9px]">
                  +7 (981) 120-11-17
                </p>
                <p className="text-[14px] mb-[30px]">tuotown@mail.ru</p>
                <p className="text-[14px] mb-[30px]">
                  08:00 — 18:00, ежедневно
                </p>
                <p className="text-[14px] mb-[30px]">
                  Россия, Москва, МКАД, 19-й километр, вл20с1, вход Ф, 22-68-70
                </p>
                <img src="src/assets/image-9.svg" alt="" />
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="footer-bottom py-[35px] flex flex-col gap-[25px] sm:flex-row justify-between items-center sm:gap-[0px]">
            <div className="wrapper-text">
              <p className="text-[12px] font-[400] opacity-[50%]">
                TUOTOWN © 2021 Торговая марка TUOTOWN зарегистрирована. Все
                права защищены и принадлежат правообладателям.
              </p>
            </div>
            <a href="">
              <div className="wrapper-logo flex items-center gap-[26px]">
                <img src="src/assets/logo.svg" alt="" />
                <p className="text-[13px] leading-[17px] font-[600]">
                  Разработка и поддержка
                </p>
              </div>
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}

export default App;
