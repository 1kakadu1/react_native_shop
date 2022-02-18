import { Dimensions } from 'react-native';
import {} from 'react-native';

export const windowWidth = Dimensions.get('window').width;
export const windowHeight = Dimensions.get('window').height;
export const datetimeSplit = (date?: Date) => {
    const a = date ? new Date(date) : new Date();
    return {
        day: a.getDate(),
        min: a.getMinutes(),
        s: a.getSeconds(),
        ms: a.getMilliseconds(),
        month: a.getMonth(),
        year: a.getFullYear(),
        UTCHours: a.getUTCHours(),
        hours: a.getHours(),
        time: a.getTime(),
        timezoneOffset: a.getTimezoneOffset()
    };
};
export function timeConverterUNIX(UNIX_timestamp: number, months?: string[]) {
    const a = new Date(UNIX_timestamp * 1000);
    const monthsArr = months || [
        '01',
        '02',
        '03',
        '04',
        '05',
        '06',
        '07',
        '08',
        '09',
        '10',
        '11',
        '12'
    ];
    return {
        year: a.getFullYear(),
        month: monthsArr[a.getMonth()],
        date: a.getDate(),
        hour: a.getHours(),
        min: a.getMinutes(),
        sec: a.getSeconds(),
        dateTime:
            a.getDate() +
            '.' +
            monthsArr[a.getMonth()] +
            '.' +
            a.getFullYear() +
            ' ' +
            a.getHours() +
            ':' +
            a.getMinutes()
    };
}
export const dataHeight = (h: number, key: string = 'key') => {
    const windowHeight = Dimensions.get('window').height;
    let arr = [],
        i = 0;
    const count = Math.ceil(windowHeight / h);
    while (i < count) {
        arr.push(key + '-' + i);
        i++;
    }

    return arr;
};

export const dd = (val: any, name: string = 'val') => {
    console.log(`===========OPEN:${name}===============`);
    console.log(val);
    console.log(`===========CLOSE:${name}===============`);
};

export const debug = (value: unknown) => {
    const a = {
        debugger: value,
        time: 0
    };
    debugger;
    a.time = Date.now();
};

export const dataCount = (count: number, key: string = 'key') => {
    let arr = [],
        i = 0;

    while (i < count) {
        arr.push(key + '-' + i);
        i++;
    }

    return arr;
};

export const sub = (a: number, b: number) => {
    return a - b;
};

export const getWidth = (offset: number = 0) => {
    return windowWidth - offset;
};

export const wait = (timeout: number) => {
    return new Promise((resolve) => {
        setTimeout(resolve, timeout);
    });
};

export const createDataSlide = (data: any[], countItem: number): any[][] => {
    let newData: any[][] = [];
    let i = 0;

    while (i < data.length) {
        let dataBuf: any[] = [];
        dataBuf.push(data[i]);

        if (data[i + 1]) {
            dataBuf.push(data[i + 1]);
        }

        newData.push(dataBuf);
        i += 2;

        if (i >= countItem * 2 || i > data.length) {
            break;
        }
    }

    return newData;
};

export const getUriFileInfo = (uri: string) => {
    const filename = uri.split('/').pop();
    const match = /\.(\w+)$/.exec(filename || '');
    const type = match ? `image/${match[1]}` : `image`;

    return {
        filename,
        type
    };
};
