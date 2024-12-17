import { OTPGenerator } from './otpGenerator.js';
import { Clipboard } from './clipboard.js';
import { UI } from './ui.js';

class App {
    constructor() {
        this.otpGenerator = new OTPGenerator();
        this.ui = new UI();
        this.currentOTP = '';
        
        this.init();
    }

    init() {
        // Generate initial OTP
        this.generateNewOTP();

        // Event listeners
        this.ui.generateBtn.addEventListener('click', () => this.generateNewOTP());
        this.ui.copyBtn.addEventListener('click', () => this.copyOTP());
    }

    generateNewOTP() {
        this.currentOTP = this.otpGenerator.generate();
        this.ui.displayOTP(this.currentOTP);
    }

    async copyOTP() {
        const success = await Clipboard.copy(this.currentOTP);
        if (success) {
            this.ui.showCopySuccess();
        }
    }
}

// Initialize the app
new App();
