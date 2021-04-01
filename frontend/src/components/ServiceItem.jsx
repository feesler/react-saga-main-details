import React from 'react';
import PropTypes from 'prop-types';

const ServiceItem = (props) => {
  const { id, name, price } = props;

  return (
    <div className="service-item">
      <span className="service-item__name">{name}</span>
      <span className="service-item__price">{price}</span>
    </div>
  );
}

ServiceItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  price: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number,
  ]).isRequired,
};

export default ServiceItem;
