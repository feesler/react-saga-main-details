import React from 'react';
import PropTypes from 'prop-types';

function Card(props) {
  const image = (props.image)
    ? <img src={props.image} className="card-img-top" alt={props.title} />
    : null;

  const title = (props.title)
    ? <h5 className="card-title">{props.title}</h5>
    : null;

  const subtitle = (props.subtitle)
    ? <h6 className="card-subtitle mb-2 text-muted">{props.subtitle}</h6>
    : null;

  const content = (props.content)
    ? <p className="card-text">{props.content}</p>
    : null;

  return (
    <div className="card">
      {image}
      <div className="card-body">
        {title}
        {subtitle}
        {content}
        {props.children}
      </div>
    </div>
  )
}

Card.propTypes = {
  image: PropTypes.string,
  title: PropTypes.string,
  subtitle: PropTypes.string,
  content: PropTypes.string,
};

Card.defaultProps = {
  image: null,
  title: null,
  subtitle: null,
  content: null,
};

export default Card;

