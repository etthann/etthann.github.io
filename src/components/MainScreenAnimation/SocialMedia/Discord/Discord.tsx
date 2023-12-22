import axios from "axios";
import { useEffect, useState } from "react";
import "./Discord.css";
import CopyFromClipboard from "../../../../images/MainImages/png/copy.png";
import observer from "../../Obeserver";

const Discord: React.FC = () => {
  const [discordData, setDiscordData] = useState<any>(null);

  useEffect(() => {
    const hiddenElements = document.querySelectorAll(".DiscordHide");
    hiddenElements.forEach((el) => observer.observe(el));

    // Clean up the observer when the component unmounts
    return () => {
      hiddenElements.forEach((el) => observer.unobserve(el));
    };
  }, []);

  useEffect(() => {
    axios
      .get(`https://api.lanyard.rest/v1/users/274729406944247810`)
      .then((response) => {
        setDiscordData(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  });

  const getStatus = () => {
    switch (discordData.discord_status) {
      case "online":
        return (
          <div className="circle">
            <div className={"status online"}></div>
          </div>
        );
      case "dnd":
        return (
          <div className="circle">
            <div className={"status dnd"}></div>
          </div>
        );
      case "idle":
        return (
          <div className="circle">
            <div className={"status idle"}></div>
          </div>
        );
      case "offline":
        return (
          <div className="circle">
            <div className={"status offline"}></div>
          </div>
        );
      default:
        return (
          <div className="circle">
            <div className="status offline"></div>
          </div>
        );
    }
  };

  const getSpotify = () => {
    if (discordData.listening_to_spotify) {
      return (
        <div className="SpotifyContainer">
          Listening to{" "}
          <span className="SongText">{discordData.spotify.song}</span> by{" "}
          <span className="SongText">
            {discordData.spotify.artist.replace(/;/g, ", ")}
          </span>
        </div>
      );
    }
  };

  const getSpotifyImage = () => {
    if (discordData.listening_to_spotify) {
      return (
        <div>
          <img
            src={discordData.spotify.album_art_url}
            alt="Song Album "
            className="AlbumCover"
          />
        </div>
      );
    }
  };

  async function copyTextToClipboard(text: string) {
    if ("clipboard" in navigator) {
      return await navigator.clipboard.writeText(text);
    } else {
      return document.execCommand("copy", true, text);
    }
  }

  const handleCopyClick = () => {
    copyTextToClipboard(discordData.discord_user.username);
  };

  return (
    <div className="DiscordContainer DiscordHide">
      {discordData && (
        <div className="DiscordBackground">
          <div className="DiscordInfoContainer">
            <img
              src={`https://cdn.discordapp.com/avatars/${discordData.discord_user.id}/${discordData.discord_user.avatar}.png`}
              alt="Discord pfp"
              className="DiscordPfp"
            />
            <span className="GlobalName">
              {discordData.discord_user.global_name}
            </span>
            <span className="UserName">
              {"@" + discordData.discord_user.username}
              <button
                className="CopyDiscordTag"
                onClick={() => handleCopyClick()}
              >
                <img src={CopyFromClipboard} alt="Copy Clipboard Icon" />
              </button>
            </span>
            <br />
            {getStatus()}
            {getSpotify()}
            {getSpotifyImage()}
          </div>
        </div>
      )}
    </div>
  );
};

export default Discord;
