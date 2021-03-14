import React from "react";
import "./WorkoutCard.scss";
import { MdPlaylistPlay, MdTimer } from "react-icons/md/index";
import { FaRunning } from "react-icons/fa/index";

export const WorkoutCard = (props) => {
  const totalWorkouts = props.totalWorkouts;

  const multipleWorkoutDisplay = () => {
    if (totalWorkouts > 0) {
      return (
        <div className="workout-overlay">
          <div className="total-workouts">{totalWorkouts}</div>
          <div className="sub-text">Workouts</div>
          <MdPlaylistPlay className="playlist" />
        </div>
      );
    }
  };

  const activeStyles = () => {
    if (props.className === "card active") {
      return <span className="details">VIEW DETAILS</span>;
    }
  };

  return (
    <div className={props.className} onClick={props.onClick}>
      <div className="wrapper">
        {multipleWorkoutDisplay()}
        <img src={props.thumbnail} alt="nice"></img>
      </div>
      <div className="sub-card">
        <div className="title-row">
          <h2 className="title">{props.title}</h2>
          <div className="wrapper">
            <img
              className="trainer"
              src={props.trainer}
              alt="card splash image"
            ></img>
          </div>
        </div>

        {props.distance ? (
          <div className="flex">
            <MdTimer className="icon" />
            <div className="info-text" style={{ marginRight: "10px" }}>
              {props.runTime}
            </div>

            <FaRunning className="icon" />
            <div className="info-text">{props.distance}</div>
          </div>
        ) : null}
        {activeStyles()}
      </div>
    </div>
  );
};
