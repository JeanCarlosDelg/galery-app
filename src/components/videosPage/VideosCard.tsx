
interface Props {
  video: {
    id: number;
    url: string;
  };
}

const VideosCard = ({ video }: Props) => {

  return (
    <div>
      <video width="320" height="240" controls>
        <source src={video.url} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default VideosCard;
