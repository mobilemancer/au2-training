import { bindable } from "aurelia";

export class AvengerInfo {
    @bindable name;
    @bindable death1;
    @bindable death2;
    @bindable death3;
    @bindable death4;
    @bindable death5;
    @bindable url;

    public deaths = 0;

    public dump(): void {
        console.log(this.name, this.deaths, this.url);
    }

    public bound(): void {
        if (this.death1) {
            this.deaths++;
        }
        if (this.death2) {
            this.deaths++;
        }
        if (this.death3) {
            this.deaths++;
        }
        if (this.death4) {
            this.deaths++;
        }
        if (this.death5) {
            this.deaths++;
        }
    }
}