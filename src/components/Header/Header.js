import React from "react";
import "./Header.css";

const Header = props => {
  return <div className="header">
    <div className="title">{props.children}</div>
        <div className="scores">
            Score: {props.score} High Score: {props.highScore}
        </div>
        <div className="iconCredit">Icons made by <a href="https://www.freepik.com/?__hstc=57440181.ccb472445e3bd28d9dbe655762a86353.1556486139350.1556486139350.1556486139350.1&__hssc=57440181.7.1556486139351&__hsfp=1185220213" title="Freepik">Freepik</a> from <a href="https://www.flaticon.com/" 			    title="Flaticon">www.flaticon.com</a> is licensed by <a href="http://creativecommons.org/licenses/by/3.0/" 			    title="Creative Commons BY 3.0" target="_blank">CC 3.0 BY</a></div>
    </div>
}

export default Header;
