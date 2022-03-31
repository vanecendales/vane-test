import React from "react";


function CardImage(props) {
    return (
        <img
          src={props.image}
          alt="vane cendales"
        />
    );
}

function CardContent(props) {
  return (
      <p className="styleDescription"><strong>{props.title} </strong>{props.description}</p>
  );
}

export default class Card extends React.Component {



  render() {
    return (
      
        <div className="styleCard border-left border-bottom hover-green" id={this.props.id}>
          <CardImage
            image={this.props.image}
          />
          <CardContent
            title={this.props.title}
          
            description={this.props.description}
          />    
      </div>
    );
  }
}