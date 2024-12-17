export class OTPGenerator {
    constructor(length = 6) {
        this.length = length;
    }

    generate() {
        const digits = '0123456789';
        let otp = '';
        
        for (let i = 0; i < this.length; i++) {
            otp += digits[Math.floor(Math.random() * digits.length)];
        }
        
        return otp;
    }
}
