import {ChangeEvent, ReactNode, useState} from 'react';
import {SlowComponent} from './slowComponent/SlowComponent';
import {Input} from "./Input";


//find the problem and fix it as part of composition optimization, memo, children

type Task_3PropsType = {
    children: ReactNode
}
export const Task_3 = (props: Task_3PropsType) => {
    const [value, setValue] = useState('');

    const onChange = (event: ChangeEvent<HTMLInputElement>) => setValue(event.currentTarget.value);

    return (
        <div>
            <div>Lags when change value</div>
            <input type="text" value={value} onChange={onChange} />
            {/*<Input/>*/}
            {props.children}
        </div>
    );
};
