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
            document.getElementById('blur').classList.remove('overlay');
            document.getElementById('demo').style.display = 'none';
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
        <button className="cancelMemberBtn">Cancel</button>
      </form>
    </>
  );
}
