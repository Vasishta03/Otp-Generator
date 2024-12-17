export class UI {
    constructor() {
        this.otpBoxes = document.querySelectorAll('.otp-box');
        this.copyBtn = document.getElementById('copyBtn');
        this.generateBtn = document.getElementById('generateBtn');
    }

    displayOTP(otp) {
        const digits = otp.split('');
        this.otpBoxes.forEach((box, index) => {
            box.textContent = digits[index];
            
            // Add animation
            box.style.animation = 'none';
            box.offsetHeight; // Trigger reflow
            box.style.animation = 'fadeIn 0.3s ease forwards';
        });
    }

    showCopySuccess() {
        const originalText = this.copyBtn.innerHTML;
        this.copyBtn.classList.add('copied');
        this.copyBtn.innerHTML = `
            <svg class="icon" viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" stroke-width="2" fill="none" stroke-linecap="round" stroke-linejoin="round">
                <path d="M20 6L9 17l-5-5"></path>
            </svg>
            Copied!
        `;

        setTimeout(() => {
            this.copyBtn.classList.remove('copied');
            this.copyBtn.innerHTML = originalText;
        }, 2000);
    }
}
