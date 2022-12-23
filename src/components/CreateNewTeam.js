import React from 'react';
import '../Styles/CreateNewTeamStyles.css';
import '@fontsource/lato';

export default function CreateNewTeam() {
  return (
    <>
      <form className="NewTeamForminner">
        <div className="CreateNewTeamHead">Create New Team</div>
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
        <label className="TeamName">Team Name</label>
        <input
          className="TeamNameField form-control"
          placeholder="Team Name Here"
        />
        <label className="TeamLeadName">Team Lead Name</label>
        <input
          className="TeamLeadNameField form-control"
          placeholder="Team Lead Name Here"
        />
        <label className="EmailOfTeamLead">Email of Team Lead</label>
        <input
          className="EmailOfTeamLeadField form-control"
          placeholder="name@qbatch.com"
        />
        <label className="AddTeamMembersTxt">Add Team Members</label>
        <input
          className="AddTeamMembersField form-control"
          type="text"
          placeholder="Search Members"
        />

        <button className="createTeamBtn">Create Team</button>
        <button className="cancelTeamBtn">Cancel</button>
      </form>
    </>
  );
}
