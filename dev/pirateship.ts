/// <reference path="ship.ts" />

class PirateShip extends Ship implements Observer {
    // Fields
    private captain: Captain
    private status: Boolean
    private subject: Subject

    constructor(subject: Subject) {
        super()

        this.captain = new Captain(this)
        this.addEventListener('click', this.changeActivity)
        
        this.draw()

        this.subject = subject
        this.status = false
    }

    public notify(): void {
        this.captain.style.backgroundImage = `url(images/emote_alert.png)`
    }

    public changeActivity() {
        this.status = !this.status
        this.style.backgroundImage = `url(images/ship9.png)`
        this.changeStatus()
    }

    public changeStatus() {
            this.subject.register(this)
    }

}

window.customElements.define("ship-component", PirateShip as any)