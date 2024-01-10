import ReactPlayer from 'react-player'
import {formatDistanceToNow} from 'date-fns'
import {AiOutlineLike, AiOutlineDislike} from 'react-icons/ai'
import {CgPlayListAdd} from 'react-icons/cg' /*  saved videos */

import {
  VideoBgCard,
  VideoTitle,
  VideoDetailsContainer,
  VideoCountDetail,
  VideoButtonsContainer,
  VideoBtn,
  VideoDetailsCard,
  VideoLogo,
  VideoDetailsCon,
  VideoChannelTitle,
  VideoDescription,
} from './styledComponents'
import Nxtwatch from '../../context/Nxtwatch'

const VideoItemDetailsCard = props => {
  const {
    videoItemDetails,
    isLiked,
    isDisLiked,
    likeBtnClicked,
    dislikeBtnClicked,
  } = props
  const {
    title,
    videoUrl,
    channel,
    viewCount,
    publishedAt,
    description,
  } = videoItemDetails

  const publishedTime = formatDistanceToNow(new Date(publishedAt))

  const onClickLikeBtn = () => {
    likeBtnClicked()
  }

  const onClickDislikeBtn = () => {
    dislikeBtnClicked()
  }

  const likeIconColor = isLiked ? '#2563eb' : '#64748b'
  const dislikeIconColor = isDisLiked ? '#2563eb' : '#64748b'

  return (
    <Nxtwatch.Consumer>
      {value => {
        const {darkMode, addVideo, savedVideos} = value

        let isSaved
        const index = savedVideos.findIndex(
          each => each.id === videoItemDetails.id,
        )

        if (index === -1) {
          isSaved = false
        } else {
          isSaved = true
        }

        const saveIconColor = isSaved ? '#2563eb' : '#64748b'
        const saveBtnText = isSaved ? 'Saved' : 'Save'

        const onClickSaveBtn = () => {
          addVideo(videoItemDetails)
        }

        return (
          <VideoBgCard darkMode={darkMode}>
            <ReactPlayer url={videoUrl} controls width="100%" height="410px" />
            <VideoTitle darkMode={darkMode}>{title}</VideoTitle>
            <VideoDetailsContainer>
              <VideoCountDetail>
                {viewCount} views . {publishedTime}
              </VideoCountDetail>
              <VideoButtonsContainer>
                <VideoBtn
                  type="button"
                  onClick={onClickLikeBtn}
                  color={likeIconColor}
                >
                  <AiOutlineLike size={20} /> Like
                </VideoBtn>
                <VideoBtn
                  type="button"
                  onClick={onClickDislikeBtn}
                  color={dislikeIconColor}
                >
                  <AiOutlineDislike size={20} /> Dislike
                </VideoBtn>
                <VideoBtn
                  type="button"
                  onClick={onClickSaveBtn}
                  color={saveIconColor}
                >
                  <CgPlayListAdd size={20} /> {saveBtnText}
                </VideoBtn>
              </VideoButtonsContainer>
            </VideoDetailsContainer>
            <hr width="100%" border="1px solid #909090" />
            <VideoDetailsCard>
              <VideoLogo src={channel.profileImageUrl} alt="channel logo" />
              <VideoDetailsCon>
                <VideoChannelTitle darkMode={darkMode}>
                  {channel.name}
                </VideoChannelTitle>
                <VideoCountDetail>
                  {channel.subscriberCount} subscribers
                </VideoCountDetail>
                <VideoDescription>{description}</VideoDescription>
              </VideoDetailsCon>
            </VideoDetailsCard>
          </VideoBgCard>
        )
      }}
    </Nxtwatch.Consumer>
  )
}

export default VideoItemDetailsCard
