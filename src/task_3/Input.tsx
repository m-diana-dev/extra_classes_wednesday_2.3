//1. fixed problem with help of children component (composition optimization)

import React, {ChangeEvent, useState} from 'react';

type InputPropsType = {}
export const Input = (props: InputPropsType) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);
    return (
        <input type="text" value={value} onChange={onChange}/>
    );
};
