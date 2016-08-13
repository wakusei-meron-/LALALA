import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { ViewerService } from './viewer.service';
import { ChannelInfo } from './channel-info';
// import { ChannelSortPipe, ExtractCountPipe } from './channel-sort-pipe';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

@Component({
  selector: 'my-viewer-list',
  templateUrl: 'viewer.component.html',
  styleUrls: ['viewer.component.scss'],
  // changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    ViewerService
  ]
})
export class ViewerComponent {

  // channels: ChannelInfo[] = [];
  @Input()
  selectedChannels: ChannelInfo[] = [];
  constructor(private viewerService: ViewerService, private sanitizer: DomSanitizationService) {
    this.sanitizer = sanitizer;
  }

  srcUrl(c: ChannelInfo): SafeResourceUrl {
    let url: string = 'http://live.fc2.com/embedPlayer/?id=' + c.id + '&lang=ja&suggest=1&thumbnail=1&adultaccess=1';
    let surl = this.sanitizer.bypassSecurityTrustUrl(url);
    console.log(surl);
    return surl;
    // return 'hoge'; // this.sanitizer.bypassSecurityTrustUrl('hoge');
  }
}
