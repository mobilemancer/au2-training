import { bindable } from "aurelia";

export class AvengerInfo {
    @bindable name;
    @bindable death1;
    @bindable death2;
    @bindable death3;
    @bindable death4;
    @bindable death5;
    @bindable url;
    @bindable info;

    public deaths = 0;

    public bound(): void {
        this.deaths = this.deathNoticeToNumber(this.death1) + this.deathNoticeToNumber(this.death2) + this.deathNoticeToNumber(this.death3) + this.deathNoticeToNumber(this.death4) + this.deathNoticeToNumber(this.death5);
    }

    private deathNoticeToNumber(deathNotice: string): number {
        if (deathNotice === "yes") return 1;
        else return 0;
    }
}