document.addEventListener('alpine:init', () => {

    Alpine.data('enoughAirtimeWidget', function () {

        return {
            airtimeUsage: '',
            availableAmount: '',
            airtimeMessage: '',
            showMessage : false,
            calculate() {
                this.airtimeMessage = enoughAirtime(this.airtimeUsage, this.availableAmount)
                setTimeout(() => {
                    this.airtimeMessage = '';
                    this.showMessage = false;
                }, 3000);
            },
        }

    });

})