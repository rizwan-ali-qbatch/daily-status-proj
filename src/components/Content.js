import React from 'react';
import '../Styles/ContentStyles.css';
import '@fontsource/lato';
import DashboardCard from './DashboardCard';
import CreateNewTeam from './CreateNewTeam';
import TeamMemberComponent from './TeamMemberComponent';
import EditTeam from './EditTeam';
import DeletePopUp from './DeletePopUp';

export default function Content() {
  return (
    <>
      <div id="blur">
        <div id="demo1">
          <CreateNewTeam />
        </div>
        <div id="demo2">
          <TeamMemberComponent />
        </div>
        <div id="demo3">
          <EditTeam />
        </div>
        <div id="demo">
          <DeletePopUp team={'team'} />
        </div>
      </div>
      <div className="content DashboardProp">
        <div className="DashboardHead">Dashboard</div>
        <div
          onClick={() => {
            document.getElementById('blur').classList.add('overlay');
            document.getElementById('demo1').style.display = 'initial';
          }}
          className="CreateNewTeamBtn"
        >
          <svg
            width="162"
            height="40"
            viewBox="0 0 162 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <rect
              x="0.5"
              y="0.5"
              width="161"
              height="39"
              rx="4.5"
              fill="white"
              stroke="#0054A6"
            />
            <path
              d="M44.078 22.613C44.1807 22.613 44.2717 22.6527 44.351 22.732L45.093 23.537C44.6823 24.0457 44.176 24.4353 43.574 24.706C42.9767 24.9767 42.258 25.112 41.418 25.112C40.6667 25.112 39.99 24.9837 39.388 24.727C38.7907 24.4703 38.2797 24.1133 37.855 23.656C37.4303 23.1987 37.1037 22.6527 36.875 22.018C36.651 21.3833 36.539 20.6903 36.539 19.939C36.539 19.1783 36.6603 18.483 36.903 17.853C37.1457 17.2183 37.4863 16.6723 37.925 16.215C38.3683 15.7577 38.8957 15.403 39.507 15.151C40.1183 14.8943 40.795 14.766 41.537 14.766C42.2743 14.766 42.9277 14.8873 43.497 15.13C44.071 15.3727 44.5587 15.69 44.96 16.082L44.33 16.957C44.2927 17.013 44.2437 17.062 44.183 17.104C44.127 17.146 44.0477 17.167 43.945 17.167C43.875 17.167 43.8027 17.1483 43.728 17.111C43.6533 17.069 43.5717 17.02 43.483 16.964C43.3943 16.9033 43.2917 16.838 43.175 16.768C43.0583 16.698 42.923 16.635 42.769 16.579C42.615 16.5183 42.4353 16.4693 42.23 16.432C42.0293 16.39 41.796 16.369 41.53 16.369C41.0773 16.369 40.662 16.4507 40.284 16.614C39.9107 16.7727 39.5887 17.006 39.318 17.314C39.0473 17.6173 38.8373 17.9907 38.688 18.434C38.5387 18.8727 38.464 19.3743 38.464 19.939C38.464 20.5083 38.5433 21.0147 38.702 21.458C38.8653 21.9013 39.0847 22.2747 39.36 22.578C39.6353 22.8813 39.9597 23.1147 40.333 23.278C40.7063 23.4367 41.1077 23.516 41.537 23.516C41.7937 23.516 42.0247 23.502 42.23 23.474C42.44 23.446 42.6313 23.4017 42.804 23.341C42.9813 23.2803 43.147 23.2033 43.301 23.11C43.4597 23.012 43.616 22.893 43.77 22.753C43.8167 22.711 43.8657 22.6783 43.917 22.655C43.9683 22.627 44.022 22.613 44.078 22.613ZM47.7135 19.064C47.9375 18.6347 48.2035 18.2987 48.5115 18.056C48.8195 17.8087 49.1835 17.685 49.6035 17.685C49.9348 17.685 50.2008 17.7573 50.4015 17.902L50.2895 19.197C50.2662 19.281 50.2312 19.3417 50.1845 19.379C50.1425 19.4117 50.0842 19.428 50.0095 19.428C49.9395 19.428 49.8345 19.4163 49.6945 19.393C49.5592 19.3697 49.4262 19.358 49.2955 19.358C49.1042 19.358 48.9338 19.386 48.7845 19.442C48.6352 19.498 48.4998 19.5797 48.3785 19.687C48.2618 19.7897 48.1568 19.9157 48.0635 20.065C47.9748 20.2143 47.8908 20.3847 47.8115 20.576V25H46.0825V17.818H47.0975C47.2748 17.818 47.3985 17.8507 47.4685 17.916C47.5385 17.9767 47.5852 18.0887 47.6085 18.252L47.7135 19.064ZM55.7271 20.583C55.7271 20.359 55.6944 20.149 55.6291 19.953C55.5684 19.7523 55.4751 19.5773 55.3491 19.428C55.2231 19.2787 55.0621 19.162 54.8661 19.078C54.6748 18.9893 54.4508 18.945 54.1941 18.945C53.6948 18.945 53.3004 19.0873 53.0111 19.372C52.7264 19.6567 52.5444 20.0603 52.4651 20.583H55.7271ZM52.4301 21.626C52.4581 21.9947 52.5234 22.3143 52.6261 22.585C52.7288 22.851 52.8641 23.0727 53.0321 23.25C53.2001 23.4227 53.3984 23.5533 53.6271 23.642C53.8604 23.726 54.1171 23.768 54.3971 23.768C54.6771 23.768 54.9174 23.7353 55.1181 23.67C55.3234 23.6047 55.5008 23.5323 55.6501 23.453C55.8041 23.3737 55.9371 23.3013 56.0491 23.236C56.1658 23.1707 56.2778 23.138 56.3851 23.138C56.5298 23.138 56.6371 23.1917 56.7071 23.299L57.2041 23.929C57.0128 24.153 56.7981 24.342 56.5601 24.496C56.3221 24.6453 56.0724 24.7667 55.8111 24.86C55.5544 24.9487 55.2908 25.0117 55.0201 25.049C54.7541 25.0863 54.4951 25.105 54.2431 25.105C53.7438 25.105 53.2794 25.0233 52.8501 24.86C52.4208 24.692 52.0474 24.447 51.7301 24.125C51.4128 23.7983 51.1631 23.397 50.9811 22.921C50.7991 22.4403 50.7081 21.885 50.7081 21.255C50.7081 20.765 50.7874 20.3053 50.9461 19.876C51.1048 19.442 51.3311 19.0663 51.6251 18.749C51.9238 18.427 52.2854 18.1727 52.7101 17.986C53.1394 17.7993 53.6224 17.706 54.1591 17.706C54.6118 17.706 55.0294 17.7783 55.4121 17.923C55.7948 18.0677 56.1238 18.28 56.3991 18.56C56.6744 18.8353 56.8891 19.176 57.0431 19.582C57.2018 19.9833 57.2811 20.443 57.2811 20.961C57.2811 21.2223 57.2531 21.3997 57.1971 21.493C57.1411 21.5817 57.0338 21.626 56.8751 21.626H52.4301ZM62.3726 21.934C61.8733 21.9573 61.4533 22.0017 61.1126 22.067C60.7719 22.1277 60.4989 22.207 60.2936 22.305C60.0883 22.403 59.9413 22.5173 59.8526 22.648C59.7639 22.7787 59.7196 22.921 59.7196 23.075C59.7196 23.3783 59.8083 23.5953 59.9856 23.726C60.1676 23.8567 60.4033 23.922 60.6926 23.922C61.0473 23.922 61.3529 23.859 61.6096 23.733C61.8709 23.6023 62.1253 23.4063 62.3726 23.145V21.934ZM58.4106 18.819C59.2366 18.063 60.2306 17.685 61.3926 17.685C61.8126 17.685 62.1883 17.755 62.5196 17.895C62.8509 18.0303 63.1309 18.2217 63.3596 18.469C63.5883 18.7117 63.7609 19.0033 63.8776 19.344C63.9989 19.6847 64.0596 20.058 64.0596 20.464V25H63.2756C63.1123 25 62.9863 24.9767 62.8976 24.93C62.8089 24.8787 62.7389 24.7783 62.6876 24.629L62.5336 24.111C62.3516 24.2743 62.1743 24.419 62.0016 24.545C61.8289 24.6663 61.6493 24.769 61.4626 24.853C61.2759 24.937 61.0753 25 60.8606 25.042C60.6506 25.0887 60.4173 25.112 60.1606 25.112C59.8573 25.112 59.5773 25.0723 59.3206 24.993C59.0639 24.909 58.8423 24.7853 58.6556 24.622C58.4689 24.4587 58.3243 24.2557 58.2216 24.013C58.1189 23.7703 58.0676 23.488 58.0676 23.166C58.0676 22.984 58.0979 22.8043 58.1586 22.627C58.2193 22.445 58.3173 22.2723 58.4526 22.109C58.5926 21.9457 58.7723 21.7917 58.9916 21.647C59.2109 21.5023 59.4793 21.3763 59.7966 21.269C60.1186 21.1617 60.4919 21.0753 60.9166 21.01C61.3413 20.94 61.8266 20.898 62.3726 20.884V20.464C62.3726 19.9833 62.2699 19.6287 62.0646 19.4C61.8593 19.1667 61.5629 19.05 61.1756 19.05C60.8956 19.05 60.6623 19.0827 60.4756 19.148C60.2936 19.2133 60.1326 19.288 59.9926 19.372C59.8526 19.4513 59.7243 19.5237 59.6076 19.589C59.4956 19.6543 59.3696 19.687 59.2296 19.687C59.1083 19.687 59.0056 19.6567 58.9216 19.596C58.8376 19.5307 58.7699 19.456 58.7186 19.372L58.4106 18.819ZM67.9863 25.112C67.3609 25.112 66.8803 24.937 66.5443 24.587C66.2129 24.2323 66.0473 23.7447 66.0473 23.124V19.113H65.3123C65.2189 19.113 65.1396 19.0827 65.0743 19.022C65.0089 18.9613 64.9763 18.8703 64.9763 18.749V18.063L66.1313 17.874L66.4953 15.914C66.5186 15.8207 66.5629 15.7483 66.6283 15.697C66.6936 15.6457 66.7776 15.62 66.8803 15.62H67.7763V17.881H69.6943V19.113H67.7763V23.005C67.7763 23.229 67.8299 23.404 67.9373 23.53C68.0493 23.656 68.2009 23.719 68.3923 23.719C68.4996 23.719 68.5883 23.7073 68.6583 23.684C68.7329 23.656 68.7959 23.628 68.8473 23.6C68.9033 23.572 68.9523 23.5463 68.9943 23.523C69.0363 23.495 69.0783 23.481 69.1203 23.481C69.1716 23.481 69.2136 23.495 69.2463 23.523C69.2789 23.5463 69.3139 23.5837 69.3513 23.635L69.8693 24.475C69.6173 24.685 69.3279 24.8437 69.0013 24.951C68.6746 25.0583 68.3363 25.112 67.9863 25.112ZM75.3736 20.583C75.3736 20.359 75.3409 20.149 75.2756 19.953C75.2149 19.7523 75.1216 19.5773 74.9956 19.428C74.8696 19.2787 74.7086 19.162 74.5126 19.078C74.3212 18.9893 74.0972 18.945 73.8406 18.945C73.3412 18.945 72.9469 19.0873 72.6576 19.372C72.3729 19.6567 72.1909 20.0603 72.1116 20.583H75.3736ZM72.0766 21.626C72.1046 21.9947 72.1699 22.3143 72.2726 22.585C72.3752 22.851 72.5106 23.0727 72.6786 23.25C72.8466 23.4227 73.0449 23.5533 73.2736 23.642C73.5069 23.726 73.7636 23.768 74.0436 23.768C74.3236 23.768 74.5639 23.7353 74.7646 23.67C74.9699 23.6047 75.1472 23.5323 75.2966 23.453C75.4506 23.3737 75.5836 23.3013 75.6956 23.236C75.8122 23.1707 75.9242 23.138 76.0316 23.138C76.1762 23.138 76.2836 23.1917 76.3536 23.299L76.8506 23.929C76.6592 24.153 76.4446 24.342 76.2066 24.496C75.9686 24.6453 75.7189 24.7667 75.4576 24.86C75.2009 24.9487 74.9372 25.0117 74.6666 25.049C74.4006 25.0863 74.1416 25.105 73.8896 25.105C73.3902 25.105 72.9259 25.0233 72.4966 24.86C72.0672 24.692 71.6939 24.447 71.3766 24.125C71.0592 23.7983 70.8096 23.397 70.6276 22.921C70.4456 22.4403 70.3546 21.885 70.3546 21.255C70.3546 20.765 70.4339 20.3053 70.5926 19.876C70.7512 19.442 70.9776 19.0663 71.2716 18.749C71.5702 18.427 71.9319 18.1727 72.3566 17.986C72.7859 17.7993 73.2689 17.706 73.8056 17.706C74.2582 17.706 74.6759 17.7783 75.0586 17.923C75.4412 18.0677 75.7702 18.28 76.0456 18.56C76.3209 18.8353 76.5356 19.176 76.6896 19.582C76.8482 19.9833 76.9276 20.443 76.9276 20.961C76.9276 21.2223 76.8996 21.3997 76.8436 21.493C76.7876 21.5817 76.6802 21.626 76.5216 21.626H72.0766ZM90.4354 14.878V25H89.4694C89.3201 25 89.1941 24.9767 89.0914 24.93C88.9934 24.8787 88.8977 24.7947 88.8044 24.678L83.5194 17.93C83.5474 18.238 83.5614 18.5227 83.5614 18.784V25H81.9024V14.878H82.8894C82.9687 14.878 83.0364 14.8827 83.0924 14.892C83.1531 14.8967 83.2044 14.9107 83.2464 14.934C83.2931 14.9527 83.3374 14.983 83.3794 15.025C83.4214 15.0623 83.4681 15.1137 83.5194 15.179L88.8254 21.955C88.8114 21.7917 88.7997 21.6307 88.7904 21.472C88.7811 21.3133 88.7764 21.1663 88.7764 21.031V14.878H90.4354ZM96.8248 20.583C96.8248 20.359 96.7921 20.149 96.7268 19.953C96.6661 19.7523 96.5728 19.5773 96.4468 19.428C96.3208 19.2787 96.1598 19.162 95.9638 19.078C95.7724 18.9893 95.5484 18.945 95.2918 18.945C94.7924 18.945 94.3981 19.0873 94.1088 19.372C93.8241 19.6567 93.6421 20.0603 93.5628 20.583H96.8248ZM93.5278 21.626C93.5558 21.9947 93.6211 22.3143 93.7238 22.585C93.8264 22.851 93.9618 23.0727 94.1298 23.25C94.2978 23.4227 94.4961 23.5533 94.7248 23.642C94.9581 23.726 95.2148 23.768 95.4948 23.768C95.7748 23.768 96.0151 23.7353 96.2158 23.67C96.4211 23.6047 96.5984 23.5323 96.7478 23.453C96.9018 23.3737 97.0348 23.3013 97.1468 23.236C97.2634 23.1707 97.3754 23.138 97.4828 23.138C97.6274 23.138 97.7348 23.1917 97.8048 23.299L98.3018 23.929C98.1104 24.153 97.8958 24.342 97.6578 24.496C97.4198 24.6453 97.1701 24.7667 96.9088 24.86C96.6521 24.9487 96.3884 25.0117 96.1178 25.049C95.8518 25.0863 95.5928 25.105 95.3408 25.105C94.8414 25.105 94.3771 25.0233 93.9478 24.86C93.5184 24.692 93.1451 24.447 92.8278 24.125C92.5104 23.7983 92.2608 23.397 92.0788 22.921C91.8968 22.4403 91.8057 21.885 91.8057 21.255C91.8057 20.765 91.8851 20.3053 92.0438 19.876C92.2024 19.442 92.4288 19.0663 92.7228 18.749C93.0214 18.427 93.3831 18.1727 93.8078 17.986C94.2371 17.7993 94.7201 17.706 95.2568 17.706C95.7094 17.706 96.1271 17.7783 96.5098 17.923C96.8924 18.0677 97.2214 18.28 97.4968 18.56C97.7721 18.8353 97.9868 19.176 98.1408 19.582C98.2994 19.9833 98.3787 20.443 98.3787 20.961C98.3787 21.2223 98.3508 21.3997 98.2948 21.493C98.2388 21.5817 98.1314 21.626 97.9728 21.626H93.5278ZM109.836 17.818L107.554 25H106.168C106.009 25 105.899 24.8973 105.839 24.692L104.551 20.541C104.509 20.401 104.469 20.2633 104.432 20.128C104.399 19.988 104.371 19.848 104.348 19.708C104.32 19.848 104.287 19.9903 104.25 20.135C104.217 20.275 104.18 20.415 104.138 20.555L102.829 24.692C102.773 24.8973 102.649 25 102.458 25H101.128L98.8526 17.818H100.232C100.358 17.818 100.465 17.8483 100.554 17.909C100.642 17.9697 100.701 18.0467 100.729 18.14L101.758 21.976C101.809 22.186 101.853 22.3913 101.891 22.592C101.933 22.7927 101.968 22.9933 101.996 23.194C102.047 22.9933 102.101 22.7927 102.157 22.592C102.217 22.3913 102.28 22.186 102.346 21.976L103.536 18.126C103.564 18.0327 103.617 17.9557 103.697 17.895C103.781 17.8343 103.881 17.804 103.998 17.804H104.761C104.882 17.804 104.985 17.8343 105.069 17.895C105.157 17.9557 105.216 18.0327 105.244 18.126L106.399 21.976C106.459 22.186 106.515 22.3937 106.567 22.599C106.623 22.7997 106.676 23.0003 106.728 23.201C106.788 22.8043 106.875 22.396 106.987 21.976L108.044 18.14C108.076 18.0467 108.135 17.9697 108.219 17.909C108.303 17.8483 108.403 17.818 108.52 17.818H109.836ZM120.855 16.425H117.803V25H115.92V16.425H112.868V14.878H120.855V16.425ZM124.852 20.583C124.852 20.359 124.819 20.149 124.754 19.953C124.693 19.7523 124.6 19.5773 124.474 19.428C124.348 19.2787 124.187 19.162 123.991 19.078C123.8 18.9893 123.576 18.945 123.319 18.945C122.82 18.945 122.425 19.0873 122.136 19.372C121.851 19.6567 121.669 20.0603 121.59 20.583H124.852ZM121.555 21.626C121.583 21.9947 121.648 22.3143 121.751 22.585C121.854 22.851 121.989 23.0727 122.157 23.25C122.325 23.4227 122.523 23.5533 122.752 23.642C122.985 23.726 123.242 23.768 123.522 23.768C123.802 23.768 124.042 23.7353 124.243 23.67C124.448 23.6047 124.626 23.5323 124.775 23.453C124.929 23.3737 125.062 23.3013 125.174 23.236C125.291 23.1707 125.403 23.138 125.51 23.138C125.655 23.138 125.762 23.1917 125.832 23.299L126.329 23.929C126.138 24.153 125.923 24.342 125.685 24.496C125.447 24.6453 125.197 24.7667 124.936 24.86C124.679 24.9487 124.416 25.0117 124.145 25.049C123.879 25.0863 123.62 25.105 123.368 25.105C122.869 25.105 122.404 25.0233 121.975 24.86C121.546 24.692 121.172 24.447 120.855 24.125C120.538 23.7983 120.288 23.397 120.106 22.921C119.924 22.4403 119.833 21.885 119.833 21.255C119.833 20.765 119.912 20.3053 120.071 19.876C120.23 19.442 120.456 19.0663 120.75 18.749C121.049 18.427 121.41 18.1727 121.835 17.986C122.264 17.7993 122.747 17.706 123.284 17.706C123.737 17.706 124.154 17.7783 124.537 17.923C124.92 18.0677 125.249 18.28 125.524 18.56C125.799 18.8353 126.014 19.176 126.168 19.582C126.327 19.9833 126.406 20.443 126.406 20.961C126.406 21.2223 126.378 21.3997 126.322 21.493C126.266 21.5817 126.159 21.626 126 21.626H121.555ZM131.498 21.934C130.998 21.9573 130.578 22.0017 130.238 22.067C129.897 22.1277 129.624 22.207 129.419 22.305C129.213 22.403 129.066 22.5173 128.978 22.648C128.889 22.7787 128.845 22.921 128.845 23.075C128.845 23.3783 128.933 23.5953 129.111 23.726C129.293 23.8567 129.528 23.922 129.818 23.922C130.172 23.922 130.478 23.859 130.735 23.733C130.996 23.6023 131.25 23.4063 131.498 23.145V21.934ZM127.536 18.819C128.362 18.063 129.356 17.685 130.518 17.685C130.938 17.685 131.313 17.755 131.645 17.895C131.976 18.0303 132.256 18.2217 132.485 18.469C132.713 18.7117 132.886 19.0033 133.003 19.344C133.124 19.6847 133.185 20.058 133.185 20.464V25H132.401C132.237 25 132.111 24.9767 132.023 24.93C131.934 24.8787 131.864 24.7783 131.813 24.629L131.659 24.111C131.477 24.2743 131.299 24.419 131.127 24.545C130.954 24.6663 130.774 24.769 130.588 24.853C130.401 24.937 130.2 25 129.986 25.042C129.776 25.0887 129.542 25.112 129.286 25.112C128.982 25.112 128.702 25.0723 128.446 24.993C128.189 24.909 127.967 24.7853 127.781 24.622C127.594 24.4587 127.449 24.2557 127.347 24.013C127.244 23.7703 127.193 23.488 127.193 23.166C127.193 22.984 127.223 22.8043 127.284 22.627C127.344 22.445 127.442 22.2723 127.578 22.109C127.718 21.9457 127.897 21.7917 128.117 21.647C128.336 21.5023 128.604 21.3763 128.922 21.269C129.244 21.1617 129.617 21.0753 130.042 21.01C130.466 20.94 130.952 20.898 131.498 20.884V20.464C131.498 19.9833 131.395 19.6287 131.19 19.4C130.984 19.1667 130.688 19.05 130.301 19.05C130.021 19.05 129.787 19.0827 129.601 19.148C129.419 19.2133 129.258 19.288 129.118 19.372C128.978 19.4513 128.849 19.5237 128.733 19.589C128.621 19.6543 128.495 19.687 128.355 19.687C128.233 19.687 128.131 19.6567 128.047 19.596C127.963 19.5307 127.895 19.456 127.844 19.372L127.536 18.819ZM134.813 25V17.818H135.87C136.094 17.818 136.241 17.923 136.311 18.133L136.423 18.665C136.549 18.525 136.68 18.3967 136.815 18.28C136.955 18.1633 137.102 18.063 137.256 17.979C137.415 17.895 137.583 17.8297 137.76 17.783C137.942 17.7317 138.14 17.706 138.355 17.706C138.808 17.706 139.179 17.8297 139.468 18.077C139.762 18.3197 139.981 18.644 140.126 19.05C140.238 18.812 140.378 18.609 140.546 18.441C140.714 18.2683 140.898 18.1283 141.099 18.021C141.3 17.9137 141.512 17.8343 141.736 17.783C141.965 17.7317 142.193 17.706 142.422 17.706C142.819 17.706 143.171 17.7667 143.479 17.888C143.787 18.0093 144.046 18.1867 144.256 18.42C144.466 18.6533 144.625 18.938 144.732 19.274C144.844 19.61 144.9 19.995 144.9 20.429V25H143.171V20.429C143.171 19.9717 143.071 19.6287 142.87 19.4C142.669 19.1667 142.375 19.05 141.988 19.05C141.811 19.05 141.645 19.0803 141.491 19.141C141.342 19.2017 141.209 19.2903 141.092 19.407C140.98 19.519 140.891 19.6613 140.826 19.834C140.761 20.0067 140.728 20.205 140.728 20.429V25H138.992V20.429C138.992 19.9483 138.894 19.5983 138.698 19.379C138.507 19.1597 138.224 19.05 137.851 19.05C137.599 19.05 137.363 19.113 137.144 19.239C136.929 19.3603 136.729 19.5283 136.542 19.743V25H134.813Z"
              fill="#0054A6"
            />
            <path
              d="M28.6668 19.3333H24.6668V15.3333H23.3335V19.3333H19.3335V20.6667H23.3335V24.6667H24.6668V20.6667H28.6668V19.3333Z"
              fill="#0054A6"
            />
          </svg>
        </div>
        <br />

        <div className="TotalTeams">
          <p className="TeamTxt">Total Teams</p>
          <p className="NumberOfTeams">50</p>
          <div className="TeamsIcons">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
                fill="#5F63F2"
                fillOpacity="0.05"
              />
              <path
                d="M23.7869 14.958C23.3523 15.0312 22.781 15.2363 22.3513 15.4756C21.7996 15.7832 21.0525 16.5254 20.7547 17.0527C19.7732 18.7959 20.0515 20.9004 21.4529 22.2969C22.283 23.1318 23.3181 23.5566 24.4998 23.5566C25.6814 23.5566 26.7166 23.1318 27.5467 22.2969C28.948 20.9004 29.2263 18.7959 28.2449 17.0527C27.947 16.5254 27.2 15.7832 26.6482 15.4756C25.7791 14.9922 24.7293 14.8018 23.7869 14.958Z"
                fill="#5F63F2"
              />
              <path
                d="M16.0625 19.0547C15.1006 19.3086 14.2705 20.0361 13.8896 20.959C13.709 21.3984 13.6553 21.6914 13.6553 22.209C13.6553 22.7314 13.748 23.1465 13.9775 23.6201C14.3779 24.4502 15.1885 25.1045 16.1016 25.334C16.5166 25.4414 17.249 25.4365 17.6641 25.3291C18.3867 25.1436 19.1484 24.6064 19.5635 23.9912C20.2227 23.0146 20.2861 21.7207 19.7295 20.6514C19.4805 20.1728 18.8896 19.582 18.4111 19.333C17.6982 18.9619 16.8193 18.8594 16.0625 19.0547Z"
                fill="#5F63F2"
              />
              <path
                d="M31.2968 19.0547C30.4716 19.2744 29.6562 19.9141 29.2704 20.6514C28.8261 21.5059 28.7675 22.5068 29.1191 23.3906C29.4902 24.3135 30.3593 25.0752 31.3359 25.3291C31.7509 25.4365 32.4833 25.4414 32.8984 25.334C34.0507 25.041 34.9687 24.123 35.2665 22.9658C35.3593 22.6094 35.374 21.8818 35.2958 21.5205C35.037 20.334 34.0898 19.3525 32.9179 19.0547C32.4296 18.9277 31.7802 18.9277 31.2968 19.0547Z"
                fill="#5F63F2"
              />
              <path
                d="M21.5461 24.5479C20.8039 24.7139 20.3157 24.9873 19.759 25.5439C19.2951 26.0078 19.0461 26.4033 18.841 27.0039L18.7141 27.3799L18.6994 31.4814C18.6897 35.5146 18.6897 35.5879 18.7873 35.7441C18.841 35.832 18.9533 35.9443 19.0412 35.998C19.1975 36.0957 19.3 36.0957 24.5002 36.0957C29.7004 36.0957 29.803 36.0957 29.9592 35.998C30.0471 35.9443 30.1594 35.832 30.2131 35.7441C30.3108 35.5879 30.3108 35.5146 30.301 31.4814L30.2864 27.3799L30.1594 27.0039C29.9543 26.4033 29.7053 26.0078 29.2414 25.5439C28.7776 25.0801 28.3821 24.8311 27.7815 24.626L27.4055 24.499L24.6223 24.4893C22.4201 24.4844 21.7756 24.4941 21.5461 24.5479Z"
                fill="#5F63F2"
              />
              <path
                d="M15.1348 26.3838C13.7334 26.5645 12.5811 27.5605 12.1367 28.9668C12.0244 29.333 12.0244 29.3428 12.0244 31.8721V34.4111L12.1367 34.6895C12.3662 35.2607 12.8398 35.7295 13.4062 35.959C13.6748 36.0664 13.7334 36.0713 15.5254 36.0859L17.3662 36.1006L17.3076 35.9395C17.2344 35.7246 17.1953 28.2637 17.2686 27.5996C17.2979 27.3457 17.3564 27.0039 17.4004 26.8428C17.4443 26.6816 17.4932 26.501 17.5029 26.4375L17.5273 26.3301L16.4873 26.335C15.9111 26.3398 15.3008 26.3594 15.1348 26.3838Z"
                fill="#5F63F2"
              />
              <path
                d="M31.4971 26.4375C31.5068 26.501 31.5557 26.6816 31.5996 26.8428C31.6436 27.0039 31.7021 27.3457 31.7314 27.5996C31.8047 28.2637 31.7656 35.7246 31.6924 35.9395L31.6338 36.1006L33.4746 36.0859C35.2666 36.0713 35.3252 36.0664 35.5937 35.959C36.1602 35.7295 36.6338 35.2607 36.8633 34.6895L36.9756 34.4111V31.8721C36.9756 29.3379 36.9756 29.333 36.8584 28.9668C36.4922 27.7949 35.667 26.9258 34.5586 26.5498C34.0654 26.3838 33.5674 26.3301 32.4443 26.3301H31.4727L31.4971 26.4375Z"
                fill="#5F63F2"
              />
            </svg>
          </div>
        </div>

        <div className="TotalTeamsLeads">
          <p className="TeamTxt">Total Team Leads</p>
          <p className="NumberOfTeams">50</p>
          <div className="TeamsIcons">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
                fill="#FF69A5"
                fillOpacity="0.05"
              />
              <path
                d="M21.8867 13.1709C18.542 13.6982 16.3936 17.0576 17.3262 20.3096C17.4775 20.8418 17.8047 21.54 18.127 22.0039C18.415 22.4238 19.1572 23.1611 19.5674 23.4346C21.3008 24.6016 23.4834 24.7334 25.3535 23.791C26.584 23.1709 27.624 21.9746 28.1025 20.6416C28.3223 20.0215 28.4004 19.5283 28.4004 18.7617C28.4004 17.9951 28.3223 17.502 28.1025 16.8818C27.6192 15.5293 26.584 14.3525 25.3145 13.7129C24.2647 13.1855 23.0391 12.9902 21.8867 13.1709Z"
                fill="#FF69A5"
              />
              <path
                d="M30.8123 24.499C30.5779 24.5381 30.1824 24.6357 29.9383 24.7187C25.6512 26.1543 24.4353 31.5352 27.6922 34.6455C28.5125 35.4268 29.533 35.9541 30.6609 36.1787C31.1687 36.2764 32.2918 36.291 32.7752 36.1982C33.991 35.9736 35.0652 35.4121 35.9246 34.5576C36.784 33.7031 37.326 32.6973 37.5896 31.4814C37.6873 31.0078 37.7068 29.8311 37.614 29.3574C37.1502 26.916 35.368 25.0703 32.9607 24.543C32.4676 24.4355 31.3445 24.4111 30.8123 24.499ZM32.1404 26.7451C32.243 26.8428 32.3406 27.0869 32.5799 27.8437L32.8875 28.8105L33.9715 28.8301C34.9187 28.8447 35.0652 28.8545 35.1873 28.9326C35.3631 29.0498 35.4754 29.3232 35.4363 29.5332C35.4021 29.7285 35.2996 29.8164 34.3572 30.5L33.6199 31.0273L33.9324 31.9844C34.0984 32.5117 34.24 33.0195 34.24 33.1172C34.24 33.3271 34.1424 33.4834 33.9373 33.5859C33.6736 33.7227 33.5125 33.6543 32.6629 33.0342C32.2283 32.7119 31.8474 32.4385 31.8133 32.4189C31.7742 32.3945 31.4471 32.6045 30.9588 32.9609C30.5193 33.2783 30.1092 33.5664 30.0457 33.6006C29.7771 33.7471 29.3426 33.5127 29.2791 33.1904C29.2596 33.0732 29.3279 32.7949 29.5428 32.1357C29.7039 31.6426 29.8504 31.1885 29.865 31.1348C29.8943 31.042 29.7918 30.9541 29.1033 30.4561C28.6639 30.1387 28.2586 29.8213 28.2 29.7529C28.0047 29.5283 28.0682 29.1035 28.3269 28.9326C28.4392 28.8545 28.6004 28.8447 29.5379 28.8301L30.6219 28.8105L30.9392 27.8242C31.3152 26.6621 31.3933 26.5547 31.8182 26.5937C31.9353 26.6084 32.0525 26.6621 32.1404 26.7451Z"
                fill="#FF69A5"
              />
              <path
                d="M19.5283 24.9873C19.3428 25.0508 18.9717 25.2119 18.6982 25.3438C16.2275 26.5254 14.3721 28.7324 13.6543 31.3496C13.3467 32.4727 13.3271 32.6875 13.3076 35.4268L13.2832 37.9023H22.7607H32.2383V37.6387V37.3799L31.5693 37.3506C29.6992 37.2773 28.0732 36.5645 26.7842 35.2559C25.8467 34.3086 25.2363 33.2051 24.9287 31.8867C24.8115 31.3887 24.7969 31.2373 24.792 30.3828C24.792 29.3184 24.8408 28.9814 25.1387 28.0879C25.3096 27.5801 25.666 26.8477 25.9492 26.4375C26.0322 26.3154 26.2617 26.0225 26.4619 25.7832C26.6621 25.5439 26.8184 25.3389 26.8086 25.3291C26.7842 25.3047 25.9785 24.9775 25.7881 24.9189C25.6318 24.8701 25.5732 24.8799 25.2314 25.0166C24.2891 25.3926 23.1562 25.5586 22.1895 25.4609C21.5303 25.3975 20.8516 25.2363 20.3047 25.0166C20.0947 24.9336 19.9092 24.8652 19.8945 24.8701C19.875 24.8701 19.709 24.9238 19.5283 24.9873Z"
                fill="#FF69A5"
              />
            </svg>
          </div>
        </div>

        <div className="TotalMembers">
          <p className="TeamTxt">Total Members</p>
          <p className="NumberOfTeams">200</p>
          <div className="TeamsIcons">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="25"
                cy="25"
                r="25"
                fill="#20C997"
                fillOpacity="0.05"
              />
              <path
                d="M23.7869 14.958C23.3523 15.0312 22.781 15.2363 22.3513 15.4756C21.7996 15.7832 21.0525 16.5254 20.7547 17.0527C19.7732 18.7959 20.0515 20.9004 21.4529 22.2969C22.283 23.1318 23.3181 23.5566 24.4998 23.5566C25.6814 23.5566 26.7166 23.1318 27.5467 22.2969C28.948 20.9004 29.2263 18.7959 28.2449 17.0527C27.947 16.5254 27.2 15.7832 26.6482 15.4756C25.7791 14.9922 24.7293 14.8018 23.7869 14.958Z"
                fill="#20C997"
              />
              <path
                d="M16.0625 19.0547C15.1006 19.3086 14.2705 20.0361 13.8896 20.959C13.709 21.3984 13.6553 21.6914 13.6553 22.209C13.6553 22.7314 13.748 23.1465 13.9775 23.6201C14.3779 24.4502 15.1885 25.1045 16.1016 25.334C16.5166 25.4414 17.249 25.4365 17.6641 25.3291C18.3867 25.1436 19.1484 24.6064 19.5635 23.9912C20.2227 23.0146 20.2861 21.7207 19.7295 20.6514C19.4805 20.1728 18.8896 19.582 18.4111 19.333C17.6982 18.9619 16.8193 18.8594 16.0625 19.0547Z"
                fill="#20C997"
              />
              <path
                d="M31.2973 19.0547C30.4721 19.2744 29.6567 19.9141 29.2709 20.6514C28.8266 21.5059 28.768 22.5068 29.1196 23.3906C29.4907 24.3135 30.3598 25.0752 31.3364 25.3291C31.7514 25.4365 32.4838 25.4414 32.8989 25.334C34.0512 25.041 34.9692 24.123 35.267 22.9658C35.3598 22.6094 35.3744 21.8818 35.2963 21.5205C35.0375 20.334 34.0903 19.3525 32.9184 19.0547C32.4301 18.9277 31.7807 18.9277 31.2973 19.0547Z"
                fill="#20C997"
              />
              <path
                d="M21.5461 24.5479C20.8039 24.7139 20.3157 24.9873 19.759 25.5439C19.2951 26.0078 19.0461 26.4033 18.841 27.0039L18.7141 27.3799L18.6994 31.4814C18.6897 35.5146 18.6897 35.5879 18.7873 35.7441C18.841 35.832 18.9533 35.9443 19.0412 35.998C19.1975 36.0957 19.3 36.0957 24.5002 36.0957C29.7004 36.0957 29.803 36.0957 29.9592 35.998C30.0471 35.9443 30.1594 35.832 30.2131 35.7441C30.3108 35.5879 30.3108 35.5146 30.301 31.4814L30.2864 27.3799L30.1594 27.0039C29.9543 26.4033 29.7053 26.0078 29.2414 25.5439C28.7776 25.0801 28.3821 24.8311 27.7815 24.626L27.4055 24.499L24.6223 24.4893C22.4201 24.4844 21.7756 24.4941 21.5461 24.5479Z"
                fill="#20C997"
              />
              <path
                d="M15.1348 26.3838C13.7334 26.5645 12.5811 27.5605 12.1367 28.9668C12.0244 29.333 12.0244 29.3428 12.0244 31.8721V34.4111L12.1367 34.6895C12.3662 35.2607 12.8398 35.7295 13.4062 35.959C13.6748 36.0664 13.7334 36.0713 15.5254 36.0859L17.3662 36.1006L17.3076 35.9395C17.2344 35.7246 17.1953 28.2637 17.2686 27.5996C17.2979 27.3457 17.3564 27.0039 17.4004 26.8428C17.4443 26.6816 17.4932 26.501 17.5029 26.4375L17.5273 26.3301L16.4873 26.335C15.9111 26.3398 15.3008 26.3594 15.1348 26.3838Z"
                fill="#20C997"
              />
              <path
                d="M31.4971 26.4375C31.5068 26.501 31.5557 26.6816 31.5996 26.8428C31.6436 27.0039 31.7021 27.3457 31.7314 27.5996C31.8047 28.2637 31.7656 35.7246 31.6924 35.9395L31.6338 36.1006L33.4746 36.0859C35.2666 36.0713 35.3252 36.0664 35.5937 35.959C36.1602 35.7295 36.6338 35.2607 36.8633 34.6895L36.9756 34.4111V31.8721C36.9756 29.3379 36.9756 29.333 36.8584 28.9668C36.4922 27.7949 35.667 26.9258 34.5586 26.5498C34.0654 26.3838 33.5674 26.3301 32.4443 26.3301H31.4727L31.4971 26.4375Z"
                fill="#20C997"
              />
            </svg>
          </div>
        </div>
        <DashboardCard />
      </div>
    </>
  );
}
