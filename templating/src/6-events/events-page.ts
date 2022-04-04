import { IInputElement } from "@aurelia/runtime-html";

export class EventsPage {
    public rectangle: HTMLElement;
    public nameTag: HTMLElement;

    public buttonClicked() {
        if (this.rectangle.style.backgroundColor === "red") {
            this.rectangle.style.backgroundColor = 'green';
        }
        else {
            this.rectangle.style.backgroundColor = 'red';
        }
    }

    public keyPressed(event: KeyboardEvent) {
        if (event.key === 'Enter') {
            this.nameTag.innerHTML = `Hello ${(<IInputElement>(event.target)).value}!`;
        }
        return true;
    }
}