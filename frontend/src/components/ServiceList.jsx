import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { fetchServicesRequest } from '../actions/actionCreators.js';
import Spinner from './Spinner.jsx';
import ServiceItem from './ServiceItem.jsx';

function ServiceList(props) {
  const { items, loading, error } = useSelector(state => state.serviceList);
  const dispatch = useDispatch();

  const fetchList = () => {
    dispatch(fetchServicesRequest());
  };

  const handleRepeat = () => {
    fetchList();
  };

  useEffect(() => {
    fetchList();
  }, []);

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

  return (
    <div className="service-list">
      {!items.length && <span className="empty-list-message">No services</span>}
      <ul className="list-group">
        {items.map((item) => (
          <Link
            key={item.id}
            to={`/${item.id}/details`}
            className="list-group-item list-group-item-action"
          >
            <ServiceItem {...item} />
          </Link>
        ))}
      </ul>
    </div>
  );
}

export default ServiceList;
