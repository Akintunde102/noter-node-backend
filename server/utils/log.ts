const checkType = (o: any) => Object.prototype
                    .toString
                    .call(o)
                    .replace(/\[|object\s|\]/g, '')
                    .toLowerCase();

const ri = {
    show: (data: string)=> {
        return console.log(data);
    },
    stringify: (data: object) => {
        return console.log(JSON.stringify(data));
    }
}

export default ri;
