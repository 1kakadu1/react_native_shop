//TODO: Use Formik and yup
export interface IError {
    valid: boolean;
    key: string;
    error?: string;
}
interface IReturnError {
    [0]: any;
    [1]: boolean;
}

export class Validator {
    private errorName = {
        len: 'Длина должна быть ',
        email: 'Некорректный email',
        req: 'Необходимо заполнить это поле',
        phone: 'Некорректный телефон',
        img_type: 'Некорректный формат фото',
        max: 'Максимальное значение для ввода',
        min: 'Минимальное значение для ввода',
        count_img: 'Достигнуто макс. кол. изображений'
    };

    isEmail = (email: string): boolean => {
        var regexp = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return regexp.test(email);
    };

    validateLeng = (len: number, val: string): boolean => {
        var ln = val;
        return ln.length < len ? false : true;
    };

    validatePhone = (phone: string): boolean => {
        var re = /^\d{1}\(\d{3}\) \d{3}-\d{4}$/;
        return re.test(phone);
    };

    validatePhoneMask = (len: number, val: string) => {
        var ln = val;
        return ln.length < len ? false : true;
    };

    validateNumber = (num: number) => {
        return Number.isInteger(num);
    };

    validateNumberOperation = (
        value: string,
        num: number,
        operation: string,
        parse: string
    ): boolean => {
        var rez = null,
            value_buf = parse === 'int' ? parseInt(value) : value;

        switch (operation) {
            case 'more':
                rez = value_buf > num ? true : false;
                break;
            case 'smaller':
                rez = value_buf < num ? true : false;
                break;
            case 'equally':
                rez = value_buf == num ? true : false;
                break;
            case 'more_equally':
                rez = value_buf >= num ? true : false;
                break;
            case 'smaller_equally':
                rez = value_buf <= num ? true : false;
                break;
            case 'equally_equally':
                rez = value_buf === num ? true : false;
                break;
            default:
                rez = true;
                break;
        }

        return rez;
    };

    isRequired = (value: any) => {
        let val = value.name !== undefined ? value.name : value;
        if (val.trim().length > 0) {
            return true;
        }
        return false;
    };

    isImg(file: any): boolean {
        if (
            file.type === 'image/png' ||
            file.type === 'image/jpg' ||
            file.type === 'image/jpeg'
        ) {
            return true;
        }

        return false;
    }

    validTypeInput(value: any, type: any) {
        let valid = false;
        if (typeof value == type) {
            valid = true;
        }

        return valid;
    }

    validSize(file: any, size: number) {
        if (file.size < size * 1000000) {
            return true;
        }
        return false;
    }

    mathValid(value: string, num: number, operation: string) {
        switch (operation) {
            case 'max':
                return value.length > num ? false : true;
            case 'min':
                return value.length < num ? false : true;
        }
    }

    check_valid_input = (opertions: Array<string>, value: string): IError[] => {
        let valid = [];
        let errorFlag: boolean = false;

        for (let i = 0; i < opertions.length; i++) {
            let buf_op = opertions[i].split(':');

            switch (buf_op[0]) {
                case 'email':
                    errorFlag = this.isEmail(value);
                    valid.push({
                        valid: errorFlag,
                        key: 'email',
                        error: this.errorName.email
                    });
                    break;
                case 'len':
                    errorFlag = this.validateLeng(parseInt(buf_op[1]), value);
                    valid.push({
                        valid: errorFlag,
                        key: 'len',
                        error: this.errorName.len + buf_op[1]
                    });
                    break;
                case 'req':
                    errorFlag = this.isRequired(value);
                    valid.push({
                        valid: errorFlag,
                        key: 'req',
                        error: this.errorName.req
                    });
                    break;
                case 'phone':
                    errorFlag = this.validatePhone(value);
                    valid.push({
                        valid: errorFlag,
                        key: 'phone',
                        error: this.errorName.phone
                    });
                    break;
                case 'phone_mask':
                    errorFlag = this.validatePhoneMask(
                        parseInt(buf_op[1]),
                        value
                    );
                    valid.push({
                        valid: errorFlag,
                        key: 'phone_mask',
                        error: this.errorName.phone
                    });
                    break;
                case 'img_type':
                    errorFlag = this.isImg(value);
                    valid.push({ valid: errorFlag, key: 'img_type' });
                    break;
                case 'size':
                    errorFlag = this.validSize(value, parseInt(buf_op[1]));
                    valid.push({ valid: errorFlag, key: 'size' });
                    break;
                case 'type_input':
                    errorFlag = this.validTypeInput(value, parseInt(buf_op[1]));
                    valid.push({ valid: errorFlag, key: 'type_input' });
                    break;
                case 'max':
                    errorFlag =
                        this.mathValid(value, parseInt(buf_op[1]), buf_op[0]) ||
                        true;
                    valid.push({
                        valid: errorFlag,
                        key: 'max',
                        error: this.errorName.max + buf_op[1]
                    });
                    break;
                case 'min':
                    errorFlag =
                        this.mathValid(value, parseInt(buf_op[1]), buf_op[0]) ||
                        true;
                    valid.push({
                        valid: errorFlag,
                        key: 'min',
                        error: this.errorName.min + buf_op[1]
                    });
                    break;
                default:
                    errorFlag = false;
                    valid.push({
                        valid: false,
                        key: 'def',
                        error: 'def error'
                    });
            }
        }

        return valid;
    };

    checkError = (inputs: any, eTarget: any): IReturnError => {
        let bufInpusts: any = { ...inputs };
        const validP = this.check_valid_input(
            inputs[eTarget.name].validType,
            eTarget.value
        );
        let flagError = false;

        validP.forEach((item: IError) => {
            if (item.valid === false) {
                bufInpusts[eTarget.name].value = eTarget.value;
                bufInpusts[eTarget.name].valid = false;
                bufInpusts[eTarget.name].error = item.error || 'not key error';
                flagError = true;
            } else {
                bufInpusts[eTarget.name].value = eTarget.value;
                bufInpusts[eTarget.name].error = '';
            }
        });

        return [bufInpusts, flagError];
    };
}
