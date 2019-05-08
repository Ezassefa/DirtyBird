// eslint-disable-next-line
import React, { Component } from "react";
import "./PlaylistChoices.css";




const PlaylistChoices = props => {
    return (
        <button type="button" class="playlistChoice btn peach-gradient btn-lg" onClick={props.onClick} center>
            {props.children}
            <p>{props.name}</p>
        </button>
    )
}


export default PlaylistChoices;
