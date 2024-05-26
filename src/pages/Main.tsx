import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "../hooks";
import { fetchServices } from "../redux/slices/servicesList";
import { NavLink } from "react-router-dom";

const Main = () => {
  const dispatch = useAppDispatch();
  const servicesList = useAppSelector((state) => state.servicesList);

  useEffect(() => {
    dispatch(fetchServices());
  }, []);

  return (
    <div className='mainCont'>
      {servicesList.loading && <div>Loading...</div>}
      {servicesList.error && <div>Возникла ошибка: {servicesList.error}</div>}
      {servicesList.services?.length ? servicesList.services.map(e => 
        <NavLink to={`/RA_SAGA_workspace-front/item/${e.id}`} className="serviceCont" key={e.id}>
          <div className="serviceHeader">{e.name}</div>
          <div className="servicePrice">{e.price} денег</div>
        </NavLink>
      ) : ''}
    </div>
  )
}

export default Main
