document.addEventListener('alpine:init', () => {
    Alpine.data('shiftWidget', function() {
        return {
            TimeofDay : '',
            messages : '',
            whichshift(){
              this.messages = transportFee(this.TimeofDay);
            }
            }
    });
})