document.addEventListener('alpine:init', () => {
    Alpine.data('greetWidget', function() {
        return {
            enterName : '',
            message : '',
            showMessage : false,
            greeting(){
                setTimeout(()=>{
                    this.disappear();
                }, 3000)
                this.message = greet(this.enterName);
            },
            disappear(){
                this.message = '';
                this.showMessage = false;
            }
        }
    });
})
