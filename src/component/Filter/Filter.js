import React from 'react';
import s from './filter.module.css'

const Filter = ({ value, onChangeFilter }) => (
    <div className={s.container}>
        <label>
            what do you search <input type="text" value={value} onChange={onChangeFilter} name="filter" />
        </label>
    </div>
);

export default Filter;