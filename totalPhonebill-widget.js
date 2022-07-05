document.addEventListener('alpine:init', () => {

    Alpine.data('totalPhoneBillWidget', function () {

        return {
            tarrifCharged: '',
            usageMessage: '',
            showMessage : false,
            calculateTarrif() {
                this.usageMessage = totalPhoneBill(this.tarrifCharged)
                setTimeout(() => {
                    this.usageMessage = '';
                    this.showMessage = false;
                }, 3000);
            }
        }

    });

})