import React from 'react';
import {
    getCoreCommitteeMembers,
    getFacultyMembers
} from '../../Api/teamsApi';

const Teams = () => {

    const committeMembers = getCoreCommitteeMembers();
    const facultyMembers = getFacultyMembers();

    return (
        <div className='teams__container'>
            <div className='about_bmsce_acm'>
                <h1>About BMSCE ACM</h1>
                <div className='acm__desc'>
                    The chapter strives to broaden its members' practical knowledge by organising a plethora of events including expert talks, reading sessions, useful hands-on workshops, industrial visits, and coding competitions. Our goal is to improve students' computer and scientific knowledge and have them be literate in up-and-coming fields so that they have a competitive advantage in the industry or at research when they graduate. Here at the BMSCE ACM student chapter, we see a world where computing helps solve tomorrow’s problems, where we use our knowledge and skills to advance the profession and make a positive impact
                </div>
                <div className='mission_vision'>
                    <h3>Mission:</h3>
                    <ul>
                        <li>
                            Create a strong network that connects students with professionals in industry and researchers in academia and provide the required resources be it knowledge, experience or scientific materials thereby collectively bridging the gap between research and practice.
                        </li>
                        <li>
                            Provide a platform for collaborative research to develop the interests of the students.
                        </li>
                        <li>
                            Create interest, develop a logical thinking ability and spread awareness about technology and computing.
                        </li>
                        <li>
                            Broaden our horizons by embarking on mutually beneficial knowledge sharing and long-term passion.
                        </li>
                        <li>
                            Create an environment that caters to an individual's personal interests while also providing opportunities for professional development and learning.
                        </li>
                    </ul>
                    <h3>Vision:</h3>
                    <ul>
                        <li>
                            Provide its students with excellent opportunities and instill ethical and moral values.
                        </li>
                        <li>
                            Push the limits as we expand and establish a community of programmers, problem solvers, researchers and team players.
                        </li>
                    </ul>
                </div>
            </div>

            <div className='faculty__members'>
                <h2>Faculty Members</h2>
                <div className='team_members'>
                    {
                        facultyMembers.map((facultyMember) => {
                            return (
                                <div class="team_card">
                                    <div class="team_circle">
                                        <div class="team_imgBox">
                                            <img src={`${facultyMember.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div class="team_content">
                                        <h3>{facultyMember.name}</h3>
                                        <div class="team_textIcon">
                                            <h4>{facultyMember.designation}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>

            <div className='committee_members'>
                <h2>Core Committee</h2>
                <div className='team_members'>
                    {
                        committeMembers.map((committeeMember) => {
                            return (
                                <div class="team_card">
                                    <div class="team_circle">
                                        <div class="team_imgBox">
                                            <img src={`${committeeMember.image}`} alt="" />
                                        </div>
                                    </div>
                                    <div class="team_content">
                                        <a href="#">
                                            <i class="fa fa-linkedin" aria-hidden="true"></i>
                                        </a>
                                        <h3>{committeeMember.name}</h3>
                                        <div class="team_textIcon">
                                            <h4>{committeeMember.designation}</h4>
                                        </div>
                                    </div>
                                </div>
                            )
                        })
                    }
                </div>
            </div>
        </div>
    )
}

export default Teams;