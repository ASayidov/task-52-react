const Card = (props) => {

  const content = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem enim cum debitis consequatur vel optio nisi earum sit quasi nesciunt magni aliquid eos quidem necessitatibus possimus neque accusantium, exercitationem perspiciatis. Quae soluta deserunt quasi assumenda natus, excepturi illo asperiores exercitationem quidem veniam doloribus accusantium nihil ea ut autem cum? Aut."
  const colorStyle = {color:props.color}

  return <div className="Card_border">
    <h2 style={colorStyle}>{props.cardTitle}</h2>
    <p style={colorStyle}>{content}</p>

  </div>

}


export { Card }