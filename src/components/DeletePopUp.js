import React from 'react';
import '../Styles/DeletePopupStyles.css';
import '@fontsource/lato';

export default function DeletePopUp() {
  return (
    <>
      <form className="DeletePopupinner">
        <div className="DltIcon">
          <svg
            width="58"
            height="62"
            viewBox="0 0 58 62"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M55.4683 11.3798H43.4181V8.24806C43.4181 6.06322 42.5197 3.96764 40.9202 2.42128C39.3207 0.87491 37.1507 0.00410684 34.8865 0H23.1255C20.8627 0.00615648 18.6948 0.877863 17.097 2.42401C15.4992 3.97015 14.602 6.06456 14.602 8.24806V11.3798H2.55181C1.86604 11.4056 1.21724 11.6866 0.741493 12.1639C0.265742 12.6412 0 13.2777 0 13.9399C0 14.6022 0.265742 15.2387 0.741493 15.716C1.21724 16.1933 1.86604 16.4742 2.55181 16.5H5.7652V53.7481C5.76413 55.9329 6.66145 58.0289 8.26021 59.576C9.85897 61.1231 12.0285 61.9949 14.2927 62H43.6912C44.8137 61.9995 45.9251 61.7856 46.9619 61.3707C47.9988 60.9557 48.9408 60.3477 49.7341 59.5815C50.5275 58.8152 51.1566 57.9057 51.5857 56.9048C52.0148 55.9039 52.2353 54.8312 52.2348 53.7481V16.5H55.4482C56.134 16.4742 56.7828 16.1933 57.2585 15.716C57.7343 15.2387 58 14.6022 58 13.9399C58 13.2777 57.7343 12.6412 57.2585 12.1639C56.7828 11.6866 56.134 11.4056 55.4482 11.3798H55.4683ZM19.8921 8.24806C19.8921 7.41983 20.2325 6.62541 20.8386 6.03903C21.4448 5.45266 22.2672 5.12221 23.1255 5.12016H34.8865C35.7448 5.12221 36.5673 5.45266 37.1734 6.03903C37.7796 6.62541 38.12 7.41983 38.12 8.24806V11.3798H19.8921V8.24806ZM46.9407 53.7481C46.9418 54.577 46.6019 55.3724 45.9956 55.9596C45.3893 56.5468 44.5663 56.8778 43.7073 56.8798H14.3088C13.4501 56.8768 12.6277 56.5455 12.0216 55.9585C11.4156 55.3715 11.0753 54.5766 11.0753 53.7481V16.5H46.9448L46.9407 53.7481Z"
              fill="#FF4D4F"
            />
            <path
              d="M23.1294 47.7669C23.8311 47.7659 24.5038 47.4965 25 47.0177C25.4961 46.5389 25.7754 45.8898 25.7764 45.2127V28.1933C25.7903 27.8498 25.7322 27.507 25.6055 27.1857C25.4788 26.8644 25.2862 26.571 25.0392 26.3232C24.7923 26.0754 24.496 25.8783 24.1681 25.7436C23.8403 25.609 23.4877 25.5396 23.1314 25.5396C22.7751 25.5396 22.4225 25.609 22.0947 25.7436C21.7668 25.8783 21.4706 26.0754 21.2236 26.3232C20.9766 26.571 20.784 26.8644 20.6573 27.1857C20.5306 27.507 20.4725 27.8498 20.4864 28.1933V45.2166C20.4874 45.8926 20.7662 46.5407 21.2617 47.0188C21.7571 47.4969 22.4288 47.7659 23.1294 47.7669Z"
              fill="#FF4D4F"
            />
            <path
              d="M34.8853 47.7669C35.587 47.7659 36.2596 47.4965 36.7558 47.0177C37.252 46.5389 37.5312 45.8898 37.5323 45.2127V28.1933C37.5462 27.8498 37.488 27.507 37.3613 27.1857C37.2347 26.8644 37.0421 26.571 36.7951 26.3232C36.5481 26.0754 36.2518 25.8783 35.924 25.7436C35.5962 25.609 35.2436 25.5396 34.8873 25.5396C34.531 25.5396 34.1783 25.609 33.8505 25.7436C33.5227 25.8783 33.2264 26.0754 32.9794 26.3232C32.7324 26.571 32.5399 26.8644 32.4132 27.1857C32.2865 27.507 32.2284 27.8498 32.2422 28.1933V45.2166C32.2444 45.8923 32.5235 46.5398 33.0187 47.0177C33.5139 47.4955 34.1849 47.7649 34.8853 47.7669Z"
              fill="#FF4D4F"
            />
          </svg>
        </div>
        <div className="DltHead">
          Are you sure you want to delete this team?
        </div>
        <div className="DltTxt">This member will be deleted from the team.</div>
        <div className="DltBtn">
          <svg
            width="77"
            height="40"
            viewBox="0 0 77 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M74.4671 0H2.53289C1.13402 0 0 2.03507 0 4.54545V35.4545C0 37.9649 1.13402 40 2.53289 40H74.4671C75.866 40 77 37.9649 77 35.4545V4.54545C77 2.03507 75.866 0 74.4671 0Z"
              fill="#0054A6"
            />
            <path
              d="M26.115 19.939C26.115 20.681 25.9913 21.3623 25.744 21.983C25.4967 22.6037 25.149 23.138 24.701 23.586C24.253 24.034 23.714 24.3817 23.084 24.629C22.454 24.8763 21.754 25 20.984 25H17.127V14.878H20.984C21.754 14.878 22.454 15.004 23.084 15.256C23.714 15.5033 24.253 15.851 24.701 16.299C25.149 16.7423 25.4967 17.2743 25.744 17.895C25.9913 18.5157 26.115 19.197 26.115 19.939ZM24.183 19.939C24.183 19.3837 24.1083 18.8867 23.959 18.448C23.8143 18.0047 23.602 17.6313 23.322 17.328C23.0467 17.02 22.7107 16.7843 22.314 16.621C21.922 16.4577 21.4787 16.376 20.984 16.376H19.017V23.502H20.984C21.4787 23.502 21.922 23.4203 22.314 23.257C22.7107 23.0937 23.0467 22.8603 23.322 22.557C23.602 22.249 23.8143 21.8757 23.959 21.437C24.1083 20.9937 24.183 20.4943 24.183 19.939ZM32.0357 20.583C32.0357 20.359 32.003 20.149 31.9377 19.953C31.877 19.7523 31.7837 19.5773 31.6577 19.428C31.5317 19.2787 31.3707 19.162 31.1747 19.078C30.9834 18.9893 30.7594 18.945 30.5027 18.945C30.0034 18.945 29.609 19.0873 29.3197 19.372C29.035 19.6567 28.853 20.0603 28.7737 20.583H32.0357ZM28.7387 21.626C28.7667 21.9947 28.832 22.3143 28.9347 22.585C29.0374 22.851 29.1727 23.0727 29.3407 23.25C29.5087 23.4227 29.707 23.5533 29.9357 23.642C30.169 23.726 30.4257 23.768 30.7057 23.768C30.9857 23.768 31.226 23.7353 31.4267 23.67C31.632 23.6047 31.8094 23.5323 31.9587 23.453C32.1127 23.3737 32.2457 23.3013 32.3577 23.236C32.4744 23.1707 32.5864 23.138 32.6937 23.138C32.8384 23.138 32.9457 23.1917 33.0157 23.299L33.5127 23.929C33.3214 24.153 33.1067 24.342 32.8687 24.496C32.6307 24.6453 32.381 24.7667 32.1197 24.86C31.863 24.9487 31.5994 25.0117 31.3287 25.049C31.0627 25.0863 30.8037 25.105 30.5517 25.105C30.0524 25.105 29.588 25.0233 29.1587 24.86C28.7294 24.692 28.356 24.447 28.0387 24.125C27.7214 23.7983 27.4717 23.397 27.2897 22.921C27.1077 22.4403 27.0167 21.885 27.0167 21.255C27.0167 20.765 27.096 20.3053 27.2547 19.876C27.4134 19.442 27.6397 19.0663 27.9337 18.749C28.2324 18.427 28.594 18.1727 29.0187 17.986C29.448 17.7993 29.931 17.706 30.4677 17.706C30.9204 17.706 31.338 17.7783 31.7207 17.923C32.1034 18.0677 32.4324 18.28 32.7077 18.56C32.983 18.8353 33.1977 19.176 33.3517 19.582C33.5104 19.9833 33.5897 20.443 33.5897 20.961C33.5897 21.2223 33.5617 21.3997 33.5057 21.493C33.4497 21.5817 33.3424 21.626 33.1837 21.626H28.7387ZM36.6372 14.598V25H34.9082V14.598H36.6372ZM42.9869 20.583C42.9869 20.359 42.9542 20.149 42.8889 19.953C42.8282 19.7523 42.7349 19.5773 42.6089 19.428C42.4829 19.2787 42.3219 19.162 42.1259 19.078C41.9345 18.9893 41.7105 18.945 41.4539 18.945C40.9545 18.945 40.5602 19.0873 40.2709 19.372C39.9862 19.6567 39.8042 20.0603 39.7249 20.583H42.9869ZM39.6899 21.626C39.7179 21.9947 39.7832 22.3143 39.8859 22.585C39.9885 22.851 40.1239 23.0727 40.2919 23.25C40.4599 23.4227 40.6582 23.5533 40.8869 23.642C41.1202 23.726 41.3769 23.768 41.6569 23.768C41.9369 23.768 42.1772 23.7353 42.3779 23.67C42.5832 23.6047 42.7605 23.5323 42.9099 23.453C43.0639 23.3737 43.1969 23.3013 43.3089 23.236C43.4255 23.1707 43.5375 23.138 43.6449 23.138C43.7895 23.138 43.8969 23.1917 43.9669 23.299L44.4639 23.929C44.2725 24.153 44.0579 24.342 43.8199 24.496C43.5819 24.6453 43.3322 24.7667 43.0709 24.86C42.8142 24.9487 42.5505 25.0117 42.2799 25.049C42.0139 25.0863 41.7549 25.105 41.5029 25.105C41.0035 25.105 40.5392 25.0233 40.1099 24.86C39.6805 24.692 39.3072 24.447 38.9899 24.125C38.6725 23.7983 38.4229 23.397 38.2409 22.921C38.0589 22.4403 37.9679 21.885 37.9679 21.255C37.9679 20.765 38.0472 20.3053 38.2059 19.876C38.3645 19.442 38.5909 19.0663 38.8849 18.749C39.1835 18.427 39.5452 18.1727 39.9699 17.986C40.3992 17.7993 40.8822 17.706 41.4189 17.706C41.8715 17.706 42.2892 17.7783 42.6719 17.923C43.0545 18.0677 43.3835 18.28 43.6589 18.56C43.9342 18.8353 44.1489 19.176 44.3029 19.582C44.4615 19.9833 44.5409 20.443 44.5409 20.961C44.5409 21.2223 44.5129 21.3997 44.4569 21.493C44.4009 21.5817 44.2935 21.626 44.1349 21.626H39.6899ZM48.164 25.112C47.5387 25.112 47.058 24.937 46.722 24.587C46.3907 24.2323 46.225 23.7447 46.225 23.124V19.113H45.49C45.3967 19.113 45.3173 19.0827 45.252 19.022C45.1867 18.9613 45.154 18.8703 45.154 18.749V18.063L46.309 17.874L46.673 15.914C46.6963 15.8207 46.7407 15.7483 46.806 15.697C46.8713 15.6457 46.9553 15.62 47.058 15.62H47.954V17.881H49.872V19.113H47.954V23.005C47.954 23.229 48.0077 23.404 48.115 23.53C48.227 23.656 48.3787 23.719 48.57 23.719C48.6773 23.719 48.766 23.7073 48.836 23.684C48.9107 23.656 48.9737 23.628 49.025 23.6C49.081 23.572 49.13 23.5463 49.172 23.523C49.214 23.495 49.256 23.481 49.298 23.481C49.3493 23.481 49.3913 23.495 49.424 23.523C49.4567 23.5463 49.4917 23.5837 49.529 23.635L50.047 24.475C49.795 24.685 49.5057 24.8437 49.179 24.951C48.8523 25.0583 48.514 25.112 48.164 25.112ZM55.5513 20.583C55.5513 20.359 55.5186 20.149 55.4533 19.953C55.3926 19.7523 55.2993 19.5773 55.1733 19.428C55.0473 19.2787 54.8863 19.162 54.6903 19.078C54.499 18.9893 54.275 18.945 54.0183 18.945C53.519 18.945 53.1246 19.0873 52.8353 19.372C52.5506 19.6567 52.3686 20.0603 52.2893 20.583H55.5513ZM52.2543 21.626C52.2823 21.9947 52.3476 22.3143 52.4503 22.585C52.553 22.851 52.6883 23.0727 52.8563 23.25C53.0243 23.4227 53.2226 23.5533 53.4513 23.642C53.6846 23.726 53.9413 23.768 54.2213 23.768C54.5013 23.768 54.7416 23.7353 54.9423 23.67C55.1476 23.6047 55.325 23.5323 55.4743 23.453C55.6283 23.3737 55.7613 23.3013 55.8733 23.236C55.99 23.1707 56.102 23.138 56.2093 23.138C56.354 23.138 56.4613 23.1917 56.5313 23.299L57.0283 23.929C56.837 24.153 56.6223 24.342 56.3843 24.496C56.1463 24.6453 55.8966 24.7667 55.6353 24.86C55.3786 24.9487 55.115 25.0117 54.8443 25.049C54.5783 25.0863 54.3193 25.105 54.0673 25.105C53.568 25.105 53.1036 25.0233 52.6743 24.86C52.245 24.692 51.8716 24.447 51.5543 24.125C51.237 23.7983 50.9873 23.397 50.8053 22.921C50.6233 22.4403 50.5323 21.885 50.5323 21.255C50.5323 20.765 50.6116 20.3053 50.7703 19.876C50.929 19.442 51.1553 19.0663 51.4493 18.749C51.748 18.427 52.1096 18.1727 52.5343 17.986C52.9636 17.7993 53.4466 17.706 53.9833 17.706C54.436 17.706 54.8536 17.7783 55.2363 17.923C55.619 18.0677 55.948 18.28 56.2233 18.56C56.4986 18.8353 56.7133 19.176 56.8673 19.582C57.026 19.9833 57.1053 20.443 57.1053 20.961C57.1053 21.2223 57.0773 21.3997 57.0213 21.493C56.9653 21.5817 56.858 21.626 56.6993 21.626H52.2543Z"
              fill="white"
            />
          </svg>
        </div>

        <div className="cancelDltBtn">
          <svg
            width="76"
            height="42"
            viewBox="0 0 76 42"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M71.0824 1H4.91765C2.75399 1 1 2.87416 1 5.18605V36.814C1 39.1258 2.75399 41 4.91765 41H71.0824C73.246 41 75 39.1258 75 36.814V5.18605C75 2.87416 73.246 1 71.0824 1Z"
              stroke="#E3E6EF"
            />
            <path
              d="M25.078 23.613C25.1807 23.613 25.2717 23.6527 25.351 23.732L26.093 24.537C25.6823 25.0457 25.176 25.4353 24.574 25.706C23.9767 25.9767 23.258 26.112 22.418 26.112C21.6667 26.112 20.99 25.9837 20.388 25.727C19.7907 25.4703 19.2797 25.1133 18.855 24.656C18.4303 24.1987 18.1037 23.6527 17.875 23.018C17.651 22.3833 17.539 21.6903 17.539 20.939C17.539 20.1783 17.6603 19.483 17.903 18.853C18.1457 18.2183 18.4863 17.6723 18.925 17.215C19.3683 16.7577 19.8957 16.403 20.507 16.151C21.1183 15.8943 21.795 15.766 22.537 15.766C23.2743 15.766 23.9277 15.8873 24.497 16.13C25.071 16.3727 25.5587 16.69 25.96 17.082L25.33 17.957C25.2927 18.013 25.2437 18.062 25.183 18.104C25.127 18.146 25.0477 18.167 24.945 18.167C24.875 18.167 24.8027 18.1483 24.728 18.111C24.6533 18.069 24.5717 18.02 24.483 17.964C24.3943 17.9033 24.2917 17.838 24.175 17.768C24.0583 17.698 23.923 17.635 23.769 17.579C23.615 17.5183 23.4353 17.4693 23.23 17.432C23.0293 17.39 22.796 17.369 22.53 17.369C22.0773 17.369 21.662 17.4507 21.284 17.614C20.9107 17.7727 20.5887 18.006 20.318 18.314C20.0473 18.6173 19.8373 18.9907 19.688 19.434C19.5387 19.8727 19.464 20.3743 19.464 20.939C19.464 21.5083 19.5433 22.0147 19.702 22.458C19.8653 22.9013 20.0847 23.2747 20.36 23.578C20.6353 23.8813 20.9597 24.1147 21.333 24.278C21.7063 24.4367 22.1077 24.516 22.537 24.516C22.7937 24.516 23.0247 24.502 23.23 24.474C23.44 24.446 23.6313 24.4017 23.804 24.341C23.9813 24.2803 24.147 24.2033 24.301 24.11C24.4597 24.012 24.616 23.893 24.77 23.753C24.8167 23.711 24.8657 23.6783 24.917 23.655C24.9683 23.627 25.022 23.613 25.078 23.613ZM30.9039 22.934C30.4045 22.9573 29.9845 23.0017 29.6439 23.067C29.3032 23.1277 29.0302 23.207 28.8249 23.305C28.6195 23.403 28.4725 23.5173 28.3839 23.648C28.2952 23.7787 28.2509 23.921 28.2509 24.075C28.2509 24.3783 28.3395 24.5953 28.5169 24.726C28.6989 24.8567 28.9345 24.922 29.2239 24.922C29.5785 24.922 29.8842 24.859 30.1409 24.733C30.4022 24.6023 30.6565 24.4063 30.9039 24.145V22.934ZM26.9419 19.819C27.7679 19.063 28.7619 18.685 29.9239 18.685C30.3439 18.685 30.7195 18.755 31.0509 18.895C31.3822 19.0303 31.6622 19.2217 31.8909 19.469C32.1195 19.7117 32.2922 20.0033 32.4089 20.344C32.5302 20.6847 32.5909 21.058 32.5909 21.464V26H31.8069C31.6435 26 31.5175 25.9767 31.4289 25.93C31.3402 25.8787 31.2702 25.7783 31.2189 25.629L31.0649 25.111C30.8829 25.2743 30.7055 25.419 30.5329 25.545C30.3602 25.6663 30.1805 25.769 29.9939 25.853C29.8072 25.937 29.6065 26 29.3919 26.042C29.1819 26.0887 28.9485 26.112 28.6919 26.112C28.3885 26.112 28.1085 26.0723 27.8519 25.993C27.5952 25.909 27.3735 25.7853 27.1869 25.622C27.0002 25.4587 26.8555 25.2557 26.7529 25.013C26.6502 24.7703 26.5989 24.488 26.5989 24.166C26.5989 23.984 26.6292 23.8043 26.6899 23.627C26.7505 23.445 26.8485 23.2723 26.9839 23.109C27.1239 22.9457 27.3035 22.7917 27.5229 22.647C27.7422 22.5023 28.0105 22.3763 28.3279 22.269C28.6499 22.1617 29.0232 22.0753 29.4479 22.01C29.8725 21.94 30.3579 21.898 30.9039 21.884V21.464C30.9039 20.9833 30.8012 20.6287 30.5959 20.4C30.3905 20.1667 30.0942 20.05 29.7069 20.05C29.4269 20.05 29.1935 20.0827 29.0069 20.148C28.8249 20.2133 28.6639 20.288 28.5239 20.372C28.3839 20.4513 28.2555 20.5237 28.1389 20.589C28.0269 20.6543 27.9009 20.687 27.7609 20.687C27.6395 20.687 27.5369 20.6567 27.4529 20.596C27.3689 20.5307 27.3012 20.456 27.2499 20.372L26.9419 19.819ZM35.8362 19.7C35.9809 19.5553 36.1326 19.4223 36.2912 19.301C36.4546 19.175 36.6249 19.07 36.8022 18.986C36.9842 18.8973 37.1779 18.8297 37.3832 18.783C37.5886 18.7317 37.8126 18.706 38.0552 18.706C38.4472 18.706 38.7949 18.7737 39.0982 18.909C39.4016 19.0397 39.6536 19.2263 39.8542 19.469C40.0596 19.707 40.2136 19.994 40.3162 20.33C40.4236 20.6613 40.4772 21.0277 40.4772 21.429V26H38.7482V21.429C38.7482 20.9903 38.6479 20.652 38.4472 20.414C38.2466 20.1713 37.9409 20.05 37.5302 20.05C37.2316 20.05 36.9516 20.1177 36.6902 20.253C36.4289 20.3883 36.1816 20.5727 35.9482 20.806V26H34.2192V18.818H35.2762C35.5002 18.818 35.6472 18.923 35.7172 19.133L35.8362 19.7ZM47.2666 20.337C47.2152 20.4023 47.1639 20.4537 47.1126 20.491C47.0659 20.5283 46.9959 20.547 46.9026 20.547C46.8139 20.547 46.7276 20.5213 46.6436 20.47C46.5596 20.414 46.4592 20.3533 46.3426 20.288C46.2259 20.218 46.0859 20.1573 45.9226 20.106C45.7639 20.05 45.5656 20.022 45.3276 20.022C45.0242 20.022 44.7582 20.078 44.5296 20.19C44.3009 20.2973 44.1096 20.4537 43.9556 20.659C43.8062 20.8643 43.6942 21.114 43.6196 21.408C43.5449 21.6973 43.5076 22.0263 43.5076 22.395C43.5076 22.7777 43.5472 23.1183 43.6266 23.417C43.7106 23.7157 43.8296 23.9677 43.9836 24.173C44.1376 24.3737 44.3242 24.5277 44.5436 24.635C44.7629 24.7377 45.0102 24.789 45.2856 24.789C45.5609 24.789 45.7826 24.7563 45.9506 24.691C46.1232 24.621 46.2679 24.5463 46.3846 24.467C46.5012 24.383 46.6016 24.3083 46.6856 24.243C46.7742 24.173 46.8722 24.138 46.9796 24.138C47.1196 24.138 47.2246 24.1917 47.2946 24.299L47.7916 24.929C47.6002 25.153 47.3926 25.342 47.1686 25.496C46.9446 25.6453 46.7112 25.7667 46.4686 25.86C46.2306 25.9487 45.9832 26.0117 45.7266 26.049C45.4746 26.0863 45.2226 26.105 44.9706 26.105C44.5272 26.105 44.1096 26.0233 43.7176 25.86C43.3256 25.692 42.9826 25.4493 42.6886 25.132C42.3946 24.8147 42.1612 24.4273 41.9886 23.97C41.8206 23.508 41.7366 22.983 41.7366 22.395C41.7366 21.8677 41.8112 21.38 41.9606 20.932C42.1146 20.4793 42.3386 20.0897 42.6326 19.763C42.9266 19.4317 43.2906 19.1727 43.7246 18.986C44.1586 18.7993 44.6579 18.706 45.2226 18.706C45.7592 18.706 46.2282 18.7923 46.6296 18.965C47.0356 19.1377 47.3996 19.385 47.7216 19.707L47.2666 20.337ZM53.3794 21.583C53.3794 21.359 53.3468 21.149 53.2814 20.953C53.2208 20.7523 53.1274 20.5773 53.0014 20.428C52.8754 20.2787 52.7144 20.162 52.5184 20.078C52.3271 19.9893 52.1031 19.945 51.8464 19.945C51.3471 19.945 50.9528 20.0873 50.6634 20.372C50.3788 20.6567 50.1968 21.0603 50.1174 21.583H53.3794ZM50.0824 22.626C50.1104 22.9947 50.1758 23.3143 50.2784 23.585C50.3811 23.851 50.5164 24.0727 50.6844 24.25C50.8524 24.4227 51.0508 24.5533 51.2794 24.642C51.5128 24.726 51.7694 24.768 52.0494 24.768C52.3294 24.768 52.5698 24.7353 52.7704 24.67C52.9758 24.6047 53.1531 24.5323 53.3024 24.453C53.4564 24.3737 53.5894 24.3013 53.7014 24.236C53.8181 24.1707 53.9301 24.138 54.0374 24.138C54.1821 24.138 54.2894 24.1917 54.3594 24.299L54.8564 24.929C54.6651 25.153 54.4504 25.342 54.2124 25.496C53.9744 25.6453 53.7248 25.7667 53.4634 25.86C53.2068 25.9487 52.9431 26.0117 52.6724 26.049C52.4064 26.0863 52.1474 26.105 51.8954 26.105C51.3961 26.105 50.9318 26.0233 50.5024 25.86C50.0731 25.692 49.6998 25.447 49.3824 25.125C49.0651 24.7983 48.8154 24.397 48.6334 23.921C48.4514 23.4403 48.3604 22.885 48.3604 22.255C48.3604 21.765 48.4398 21.3053 48.5984 20.876C48.7571 20.442 48.9834 20.0663 49.2774 19.749C49.5761 19.427 49.9378 19.1727 50.3624 18.986C50.7918 18.7993 51.2748 18.706 51.8114 18.706C52.2641 18.706 52.6818 18.7783 53.0644 18.923C53.4471 19.0677 53.7761 19.28 54.0514 19.56C54.3268 19.8353 54.5414 20.176 54.6954 20.582C54.8541 20.9833 54.9334 21.443 54.9334 21.961C54.9334 22.2223 54.9054 22.3997 54.8494 22.493C54.7934 22.5817 54.6861 22.626 54.5274 22.626H50.0824ZM57.981 15.598V26H56.252V15.598H57.981Z"
              fill="#9299B8"
            />
          </svg>
        </div>
      </form>
    </>
  );
}
