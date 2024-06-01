import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useParams } from 'react-router-dom';
import { fetchServiceDetailsRequest } from '../actions/actionCreators.js';
import Spinner from './Spinner.jsx';
import Card from './Card.jsx';

const formatPrice = (value, currency = '₽') => {
  if (value === null) {
    return null;
  }

  const num = Number(value);
  if (Number.isNaN(num)) {
    return null;
  }

  const ls = num.toLocaleString();
  return `${ls} ${currency}`;
}

function ServiceDetails() {
  const { id } = useParams();
  const { item, loading, error } = useSelector((state) => state.serviceDetails);
  const dispatch = useDispatch();

  const fetchDetails = () => {
    if (id) {
      dispatch(fetchServiceDetailsRequest(id));
    }
  };

  const handleRepeat = () => {
    fetchDetails();
  }

  useEffect(() => {
    fetchDetails();
  }, [id]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return (
      <div className="error-message">
        <span>Произошла ошибка</span>
        <button className="btn btn-dark ml-2" onClick={handleRepeat}>Повторить запрос</button>
      </div>
    );
  }

  if (!item) {
    return null;
  }

  return (
    <Card
      title={item.name}
      subtitle={formatPrice(item.price)}
      content={item.content}
    />
  )
}

export default ServiceDetails;
