import React from 'react';
import '../Styles/TeamMemberComponentStyles.css';
import '@fontsource/lato';
import ShowMember from './ShowMember';

export default function TeamMemberComponent() {
  return (
    <>
      <form className="NewMemberForminner">
        <div className="CreateNewTeamHead">Add Team Members</div>
        <div className="headboarder"></div>
        <div
          className="closeBtn"
          onClick={() => {
            if (document.getElementById('blur')) {
              document.getElementById('blur').classList.remove('overlay');
              document.getElementById('demo2').style.display = 'none';
            } else {
              document.getElementById('Blur').classList.remove('overlay2');
              document.getElementById('Demo1').style.display = 'none';
            }
          }}
        >
          <svg
            width="34"
            height="34"
            viewBox="0 0 34 34"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 34C26.3888 34 34 26.3888 34 17C34 7.61116 26.3888 0 17 0C7.61116 0 0 7.61116 0 17C0 26.3888 7.61116 34 17 34Z"
              fill="#FAFAFA"
            />
            <path
              d="M21.0479 13L12.9989 21.049"
              stroke="#F04B4B"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
            <path
              d="M21.0479 21.049L12.9989 13"
              stroke="#F04B4B"
              strokeWidth="1.7"
              strokeLinecap="round"
            />
          </svg>
        </div>
        <label className="AddTeamMembersTxt2">Add Team Members</label>
        <input
          className="AddTeamMembersField2 form-control"
          type="text"
          placeholder="Search Members"
        />
        <ShowMember />

        <button className="confirmMemberBtn">Confirm</button>
        {/* <button className="cancelMemberBtn">Cancel</button> */}
        <div
          className="cancelMemberBtn"
          onClick={() => {
            if (document.getElementById('blur')) {
              document.getElementById('blur').classList.remove('overlay');
              document.getElementById('demo2').style.display = 'none';
            } else {
              document.getElementById('Blur').classList.remove('overlay2');
              document.getElementById('Demo1').style.display = 'none';
            }
          }}
        >
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
