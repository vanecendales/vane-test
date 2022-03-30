import React from "react";


function CardImage(props) {
    return (
      <div >
        <img
          src={props.image}
          alt="vane cendales"
        />
      </div>
    );
}

function CardContent(props) {
  return (
    <div className="styleCardContent">
      <p className="styleCardTitle">{props.title}</p>
      <p className="styleDescription">{props.description}</p>
    </div>
  );
}

export default class Card extends React.Component {



  render() {
    return (
      <div style={{ width: this.props.width + "px" }}>
        <div className="styleCard" id={this.props.id}>
          <CardImage
            image={this.props.image}
            
          />
          <CardContent
            title={this.props.title}
          
            description={this.props.description}
          />
        </div>
      </div>
    );
  }
}