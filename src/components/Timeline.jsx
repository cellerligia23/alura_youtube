import { StyledTimeline } from "./styles/StyledTimeline";

export default function Timeline(props) {
  const listNames = Object.keys(props.playlist);
    
  return (
    <StyledTimeline>
      {listNames.map((listName, index) => {
        const videos = props.playlist[listName]
        return (
          <section key={index}>
            <h2>{listName}</h2>
            <div>
              {videos.map((video) => {
                return (
                  <a href={video.url}>
                  <img src={ video.thumb} alt="foto thumb"/>
                  <span>{ video.title }</span>
                </a>
                )
              })}
            </div>
          </section>
        )
      })}
    </StyledTimeline>
  )
}
