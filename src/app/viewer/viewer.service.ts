import { Injectable } from '@angular/core';
import { Response, Jsonp} from '@angular/http';
import { Observable }     from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import { ChannelInfo } from './channel-info';

@Injectable()
export class ViewerService {
  private channelsUrl = 'https://live.fc2.com/adult/contents/allchannellist.php?callback=JSONP_CALLBACK';
    // private channelsUrl = 'http://live.fc2.com/contents/allchannellist.php?callback=JSONP_CALLBACK';

    constructor(private jsonp: Jsonp) {}

    getFc2LiveInfo (): Observable<ChannelInfo[]> {
      return this.jsonp.request(this.channelsUrl)
        .map(res =>
          this.extractData(res)
        );
    }

    private extractData(res: Response): ChannelInfo[] {
      if (res.status < 200 || res.status >= 300) {
        throw new Error('Bad responsee status' + res.status);
      }
      let body = res.json();
      return body.channel;
    }

    private handleError (error: any) {
      let errMsg = error.message || 'server error';
      console.log(errMsg);
      return Observable.throw(errMsg);
    }
}
