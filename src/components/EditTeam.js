import React from 'react';
import '../Styles/EditTeamStyles.css';
import '@fontsource/lato';

export default function EditTeam() {
  return (
    <>
      <form className="EditTeaminner">
        <div className="EditTeamHead">Edit Team</div>
        <div className="EditTeamheadboarder"></div>
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
        <label className="TeamNameInEdit">Team Name</label>
        <input
          className="TeamNameFieldInEdit form-control"
          placeholder="Team Name Here"
        />

        <label className="TeamLeadNameInEdit">Team Lead Name</label>
        <input
          className="TeamLeadNameFieldInEdit form-control"
          placeholder="Team Lead Name Here"
        />

        <label className="EmailOfTeamLeadInEdit">Email of Team Lead</label>
        <input
          className="EmailOfTeamLeadFieldInEdit form-control"
          placeholder="name@qbatch.com"
        />

        <label className="statusInEdit">Status</label>
        <div
          className="dropdown"
          style={{
            position: 'absolute',
            left: '52.09%',
            top: '49.5%',
          }}
        >
          <a
            className="btn btn-secondary dropdown-toggle"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Dropdown link
          </a>

          <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
            <li>
              <a className="dropdown-item" href="/dashboard">
                Action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dashboard">
                Another action
              </a>
            </li>
            <li>
              <a className="dropdown-item" href="/dashboard">
                Something else here
              </a>
            </li>
          </ul>
        </div>

        <label className="AddTeamMembersTxtInEdit">Add Team Members</label>
        <input
          className="AddTeamMembersFieldInEdit form-control"
          type="text"
          placeholder="Search Members"
        />

        <button className="confirmBtnInEdit">Create Team</button>
        <button className="cancelBtnInEdit">Cancel</button>
      </form>
    </>
  );
}
