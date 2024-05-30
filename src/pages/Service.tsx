import { useLocation } from "react-router-dom"
import { useAppDispatch, useAppSelector } from "../hooks";
import { useEffect } from "react";
import { fetchService } from "../redux/slices/service";

const Service = () => {
  const location = useLocation();
  const { state } = location;
  const dispatch = useAppDispatch();
  const service = useAppSelector((state) => state.serviceInfo);

  useEffect(() => {
    dispatch(fetchService(state.id));
  }, []);

  return (
    <div className="serviceInfoCont">
      {service.loading && <div>Loading...</div>}
      {service.error && <div>Возникла ошибка: {service.error}. Обновите страницу.</div>}
      {!service.loading && !service.error &&
        <>
          <div>Название: {service.info.name}</div>
          <div>Цена: {service.info.price}</div>
          <div>Описание: {service.info.content}</div>
        </>
      }
    </div>
  )
}

export default Service
