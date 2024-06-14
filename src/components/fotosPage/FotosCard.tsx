import './style/FotosCard.css'

interface Props {
  fotos: {
    id: number
    url: string
  }
}

const FotosCard = ({ fotos }: Props) => {
  return (
    <div className="fotocard__container">
      <picture className="fotocard__picture">
        <img className="fotocard__img" src={fotos.url}  alt="fotos" />
      </picture>
    </div>
  )
}

export default FotosCard