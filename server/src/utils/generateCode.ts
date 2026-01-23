
export const generateShortCode = () => {
    const characters = 'ABCDEFGHIJKLMNPQRSTUVWXYZ';
    const numbers = '123456789';

    let code = characters.charAt(Math.floor(Math.random() * characters.length));

    for (let i = 0; i < 3; i ++ ) {
        code += numbers.charAt(Math.floor(Math.random() * numbers.length));
    }

    return code;

}
