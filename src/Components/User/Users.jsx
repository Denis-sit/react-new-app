import React, { useState } from 'react';
import style from './style.module.css';
import Button from '../Button/Button';

const Users = ({ name, secondName, age, gender, rank }) => {
  const [rankUser, setRankUser] = useState(rank);

  function hadlerClickIncrease() {
    setRankUser((prev) => prev + 1);
  }

  function hadlerClickReduce() {
    setRankUser((prev) => prev - 1);
  }
  return (
    <div className={style.UserCard}>
      <div>
        <div className={style.Title}>Пользователь:</div>
        <div>
          {name} {secondName}
        </div>
      </div>
      <div>
        <div className={style.Title}>Информация:</div>
        <div>Возраст: {age}</div>
        <div>Пол: {gender}</div>
      </div>
      <div>
        <span className={style.Title}>Рейтинг: </span>
        <span>{rankUser}</span>
        <Button onClick={hadlerClickReduce}>-</Button>
        <Button onClick={hadlerClickIncrease}>+</Button>
      </div>
    </div>
  );
};

export default Users;
