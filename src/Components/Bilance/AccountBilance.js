import React from "react";
import ProcreditBank from "../images/pcb-logo.png";
import TebBank from "../images/teb-logo.png";
import OneFor from "../images/onefor-logo.png";
import Paysera from "../images/paysera.png";
import bkt from "../images/LogoStandard.svg";
import raiffeisen from "../images/raiffeisen-logo.png";

import kfc from "../images/KFC_logo.png";
import apple from "../images/apple-logo.png";
import spotify from "../images/spotify-logo.png";
const AccountBilance = () => {
   
      
    const isbank = localStorage.getItem("isbank");
    const storedBankData = JSON.parse(localStorage.getItem('bankData')) || {};

    const bank_img = (() => {
        if (storedBankData.bank === "Paysera") {
          return Paysera; // Assuming Paysera is a variable containing the image URL or component
        } else if (storedBankData.bank === "BKT") {
          return bkt; // Assuming bkt is a variable containing the image URL or component
        } else if (storedBankData.bank === "Raiffeisen Bank") {
          return raiffeisen; // Assuming raiffeisen is a variable containing the image URL or component
        } else {
          return ""; // Default value if no match
        }
      })();
      const storedAmount = storedBankData ? parseFloat(storedBankData.amount) || 0 : 0;
      const bilance_total = (7500 + storedAmount).toFixed(2) || 0;
        return (
    <div className="mx-auto max-w-screen-xl p-4">
        <div className="flex flex-col md:flex-row justify-between">
  <div className="flex flex-col md:flex-row gap-4 mb-4 md:mb-0">
    <div className="p-4 flex flex-row gap-2 border-2 border-solid border-gray-800 rounded-3xl">
      <div>
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <g clip-path="url(#clip0_2_103)">
                  <path
                    d="M48.5852 29.7548C47.9573 29.2717 47.2264 28.9399 46.4494 28.7851C45.6723 28.6304 44.87 28.6569 44.1049 28.8626L35.2793 30.8918C35.4846 30.0244 35.491 29.1218 35.2978 28.2516C35.1047 27.3814 34.7171 26.5662 34.1642 25.8671C33.6112 25.168 32.9071 24.6032 32.1048 24.2149C31.3024 23.8266 30.4226 23.6249 29.5312 23.625H18.9717C18.0849 23.6228 17.2065 23.7963 16.3872 24.1355C15.5678 24.4748 14.8239 24.973 14.1982 25.6015L9.4268 30.375H3.375C2.47989 30.375 1.62145 30.7306 0.988515 31.3635C0.355579 31.9965 0 32.8549 0 33.75L0 42.1875C0 43.0826 0.355579 43.9411 0.988515 44.574C1.62145 45.2069 2.47989 45.5625 3.375 45.5625H25.3125C25.4505 45.5626 25.5879 45.5456 25.7217 45.5119L39.2217 42.1369C39.3078 42.1164 39.3918 42.0882 39.4727 42.0525L47.6719 38.5636L47.7647 38.5214C48.5527 38.1277 49.2275 37.5398 49.7255 36.8132C50.2235 36.0865 50.5283 35.2451 50.6112 34.3681C50.6942 33.4911 50.5525 32.6075 50.1995 31.8004C49.8465 30.9933 49.2939 30.2893 48.5937 29.7548H48.5852ZM3.375 33.75H8.4375V42.1875H3.375V33.75ZM46.286 35.4818L38.2704 38.8948L25.1016 42.1875H11.8125V32.7607L16.586 27.9893C16.8983 27.6745 17.27 27.425 17.6796 27.2552C18.0891 27.0853 18.5283 26.9986 18.9717 27H29.5312C30.2026 27 30.8464 27.2667 31.3211 27.7414C31.7958 28.2161 32.0625 28.8599 32.0625 29.5313C32.0625 30.2026 31.7958 30.8464 31.3211 31.3211C30.8464 31.7958 30.2026 32.0625 29.5312 32.0625H23.625C23.1774 32.0625 22.7482 32.2403 22.4318 32.5568C22.1153 32.8732 21.9375 33.3025 21.9375 33.75C21.9375 34.1976 22.1153 34.6268 22.4318 34.9432C22.7482 35.2597 23.1774 35.4375 23.625 35.4375H30.375C30.502 35.4371 30.6286 35.423 30.7526 35.3953L44.8854 32.1448L44.9508 32.1279C45.3822 32.0081 45.8427 32.0521 46.2436 32.2515C46.6446 32.4508 46.9576 32.7914 47.1225 33.2076C47.2875 33.6239 47.2926 34.0864 47.137 34.5063C46.9814 34.9261 46.6761 35.2736 46.2797 35.4818H46.286ZM34.5937 20.25C35.0107 20.2505 35.4269 20.2166 35.8383 20.1488C36.301 21.5231 37.1475 22.7362 38.2778 23.6447C39.4081 24.5532 40.7749 25.119 42.2166 25.2753C43.6583 25.4316 45.1146 25.1719 46.4134 24.5267C47.7121 23.8816 48.799 22.8781 49.5455 21.6348C50.292 20.3916 50.6669 18.9605 50.6258 17.511C50.5848 16.0614 50.1296 14.6539 49.314 13.4549C48.4983 12.2558 47.3565 11.3154 46.0233 10.7447C44.6902 10.1741 43.2215 9.99709 41.7909 10.2347C41.3454 8.91052 40.5432 7.73493 39.4726 6.83728C38.4021 5.93964 37.1046 5.35474 35.723 5.14696C34.3414 4.93917 32.9293 5.11656 31.6421 5.65959C30.3548 6.20263 29.2423 7.09026 28.427 8.2248C27.6117 9.35935 27.1252 10.6968 27.021 12.09C26.9169 13.4833 27.1991 14.8782 27.8366 16.1214C28.4741 17.3646 29.4422 18.4078 30.6344 19.1362C31.8266 19.8646 33.1966 20.25 34.5937 20.25ZM47.25 17.7188C47.25 18.5531 47.0026 19.3688 46.539 20.0626C46.0754 20.7563 45.4166 21.2971 44.6457 21.6164C43.8748 21.9357 43.0266 22.0192 42.2082 21.8564C41.3899 21.6937 40.6381 21.2919 40.0481 20.7019C39.4581 20.1119 39.0563 19.3601 38.8936 18.5418C38.7308 17.7234 38.8143 16.8752 39.1336 16.1043C39.4529 15.3334 39.9937 14.6746 40.6874 14.211C41.3812 13.7474 42.1969 13.5 43.0312 13.5C44.1501 13.5 45.2232 13.9445 46.0144 14.7356C46.8055 15.5268 47.25 16.5999 47.25 17.7188ZM34.5937 8.4375C35.5141 8.43796 36.409 8.73937 37.1421 9.29576C37.8752 9.85216 38.4063 10.633 38.6543 11.5193C37.79 12.1274 37.0622 12.9092 36.5174 13.8148C35.9725 14.7203 35.6227 15.7295 35.4902 16.778C35.1956 16.8416 34.8951 16.8741 34.5937 16.875C33.4749 16.875 32.4018 16.4305 31.6106 15.6394C30.8195 14.8482 30.375 13.7751 30.375 12.6563C30.375 11.5374 30.8195 10.4643 31.6106 9.67315C32.4018 8.88198 33.4749 8.4375 34.5937 8.4375Z"
                    fill="#0AE360"
                  />
                </g>
                <defs>
                  <clipPath id="clip0_2_103">
                    <rect width="54" height="54" fill="white" />
                  </clipPath>
                </defs>
              </svg>
      </div>
      <div>
        <div className="text-base font-light">Account Balance</div>
        <div className="text-2xl md:text-3xl">€ {bilance_total}</div>
      </div>
    </div>
    <div className="p-4 flex flex-row gap-2 border-2 border-solid border-gray-800 rounded-3xl">
      <div>
      <svg
                xmlns="http://www.w3.org/2000/svg"
                width="54"
                height="54"
                viewBox="0 0 54 54"
                fill="none"
              >
                <path
                  d="M50.625 28.6875V42.1875C50.625 42.6351 50.4472 43.0643 50.1307 43.3807C49.8143 43.6972 49.385 43.875 48.9375 43.875H35.4375C34.9899 43.875 34.5607 43.6972 34.2442 43.3807C33.9278 43.0643 33.75 42.6351 33.75 42.1875C33.75 41.7399 33.9278 41.3107 34.2442 40.9943C34.5607 40.6778 34.9899 40.5 35.4375 40.5H44.8643L28.6875 24.3232L21.4439 31.5689C21.2872 31.7258 21.1011 31.8503 20.8962 31.9352C20.6913 32.0201 20.4718 32.0638 20.25 32.0638C20.0282 32.0638 19.8086 32.0201 19.6038 31.9352C19.3989 31.8503 19.2128 31.7258 19.0561 31.5689L3.86859 16.3814C3.55194 16.0648 3.37405 15.6353 3.37405 15.1875C3.37405 14.7397 3.55194 14.3102 3.86859 13.9936C4.18523 13.6769 4.61469 13.4991 5.06249 13.4991C5.51029 13.4991 5.93975 13.6769 6.2564 13.9936L20.25 27.9893L27.4936 20.7436C27.6503 20.5867 27.8364 20.4622 28.0413 20.3773C28.2461 20.2924 28.4657 20.2487 28.6875 20.2487C28.9093 20.2487 29.1288 20.2924 29.3337 20.3773C29.5386 20.4622 29.7247 20.5867 29.8814 20.7436L47.25 38.1143V28.6875C47.25 28.2399 47.4278 27.8107 47.7443 27.4943C48.0607 27.1778 48.4899 27 48.9375 27C49.385 27 49.8143 27.1778 50.1307 27.4943C50.4472 27.8107 50.625 28.2399 50.625 28.6875Z"
                  fill="#EB5B64"
                />
              </svg>
      </div>
      <div>
        <div className="text-base font-light">Account Loss</div>
        <div className="text-2xl md:text-3xl">- € 1000,00</div>
      </div>
    </div>
  </div>
  <a href="/add-bank">
    <div className="bg-customGreen text-background text-base md:text-lg flex items-center justify-center py-2 px-6 md:px-8 rounded-xl">
    <svg
            xmlns="http://www.w3.org/2000/svg"
            width="28"
            height="28"
            viewBox="0 0 32 32"
            fill="none"
          >
            <path
              d="M28 16C28 16.2652 27.8946 16.5196 27.7071 16.7071C27.5196 16.8946 27.2652 17 27 17H17V27C17 27.2652 16.8946 27.5196 16.7071 27.7071C16.5196 27.8946 16.2652 28 16 28C15.7348 28 15.4804 27.8946 15.2929 27.7071C15.1054 27.5196 15 27.2652 15 27V17H5C4.73478 17 4.48043 16.8946 4.29289 16.7071C4.10536 16.5196 4 16.2652 4 16C4 15.7348 4.10536 15.4804 4.29289 15.2929C4.48043 15.1054 4.73478 15 5 15H15V5C15 4.73478 15.1054 4.48043 15.2929 4.29289C15.4804 4.10536 15.7348 4 16 4C16.2652 4 16.5196 4.10536 16.7071 4.29289C16.8946 4.48043 17 4.73478 17 5V15H27C27.2652 15 27.5196 15.1054 27.7071 15.2929C27.8946 15.4804 28 15.7348 28 16Z"
              fill="#121214"
            />
          </svg>
      Add Bank
    </div>
  </a>
</div>

 
      <div className=" mb-4 mt-16 text-3xl">Bank Balance</div>
      <div>
        <a href="/card/1">
        <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
          <div className="flex flex-row items-center gap-2">
            <img src={ProcreditBank} alt="bank" className="mr-2 w-11 h-11" />{" "}
            Procredit Bank
          </div>
          <span className="text-customGreen">€ 500,00</span>
        </div>
        </a>
        <a href="/card/2">

        <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
          <div className="flex flex-row items-center gap-2">
            <img src={TebBank} alt="bank" className="mr-2 w-11 h-11" />{" "}
                TEB
          </div>
          <span className="text-customGreen">€ 4500,00</span>
        </div>
        </a>
        <a href="/card/3">

        <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
          <div className="flex flex-row items-center gap-2">
            <img src={OneFor} alt="bank" className="mr-2 w-11 h-11" />{" "}
            One For
          </div>
          <span className="text-customGreen">€ 2500,00</span>
        </div>
        </a>
        {isbank === "true" ? (
             <a href="/card/4">

             <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
               <div className="flex flex-row items-center gap-2">
                 <img src={bank_img} className="mr-2 w-11 h-11" alt="bank" />
                 {storedBankData.bank}
               </div>
               <span className="text-customGreen">€ {storedBankData.amount}</span>
             </div>
             </a>
             ) : (
                <div></div>
             )
                }
      </div>
      









      <div className=" mb-4 mt-16 text-3xl">Spending</div>
      <div>
        <a href="/card/1">
        <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
          <div className="flex flex-row items-center gap-2">
            <img src={kfc} alt="bank" className="mr-2 w-11 h-11" />{" "}
            KFC
          </div>
          <span className="text-minus">- € 50,00</span>
        </div>
        </a>
        <a href="/card/2">

        <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
          <div className="flex flex-row items-center gap-2">
            <img src={spotify} alt="bank" className="mr-2 w-11 h-11" />{" "}
                Spotify
          </div>
          <span className="text-minus">- € 5,50</span>
        </div>
        </a>
        <a href="/card/3">

        <div className="flex flex-row justify-between items-center hover:bg-bgSelect hover:cursor-pointer bg-bgInactive p-4 rounded-2xl mb-2">
          <div className="flex flex-row items-center gap-2">
            <img src={apple} alt="bank" className="mr-2 w-10" />{" "}
            Apple.inc
          </div>
          <span className="text-minus">- € 1500,00</span>
        </div>
        </a>
      </div>
    </div>
  );
};

export default AccountBilance;
