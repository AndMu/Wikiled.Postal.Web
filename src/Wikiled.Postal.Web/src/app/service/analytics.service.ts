import { Injectable } from "@angular/core";

@Injectable()
export class GoogleAnalyticsEventsService {

    ga: Function;

    public emitEvent(eventCategory: string,
        eventAction: string,
        eventLabel: string = null,
        eventValue: number = null) {
        this.ga('send', 'event', {
            eventCategory: eventCategory,
            eventLabel: eventLabel,
            eventAction: eventAction,
            eventValue: eventValue
        });
    }
}