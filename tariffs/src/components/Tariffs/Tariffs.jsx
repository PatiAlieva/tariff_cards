import React from 'react';
import CSSModules from 'react-css-modules';
import style from './tariffs.module.scss';

function Tariffs(props) {
  const colors =props.color
  console.log(colors)
  const sel = props.isSelected ? "selected" : ""
  return (
    <div className={[style.tariff, style[sel]].join(' ')} styleName={colors}>
      <div styleName='tariff_name'><p>{props.name}</p></div>
      <div styleName='tariff_price'><p>руб <span>{props.price}</span> /мес</p></div>
      <div styleName='tariff_speed'><p>до {props.speed} Мбит/сек</p></div>
      <div styleName='tariff_limit'><p>Объём включённого трафика не ограничен</p></div>
    </div>
  )
}
export default CSSModules(Tariffs, style)