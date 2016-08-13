import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { ViewerService } from './viewer.service';
import { ChannelInfo } from './channel-info';
// import { ChannelSortPipe, ExtractCountPipe } from './channel-sort-pipe';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

@Component({
  selector: 'app-sidebar',
  templateUrl: 'sidebar.component.html',
  styleUrls: ['sidebar.component.scss', 'viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    ViewerService
  ]
})
export class SidebarComponent implements OnInit {

  channels: ChannelInfo[] = [];
  selectedChannels: ChannelInfo[] = [];
  selectedChannel: ChannelInfo;
  constructor(private viewerService: ViewerService, private sanitizer: DomSanitizationService) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
    this.getFc2LiveInfo();
  }

  onSelect(channel: ChannelInfo) {
    // console.log(channel);
    this.selectedChannel = channel;
    this.selectedChannels.push(channel);
  }

  getFc2LiveInfo() {
    this.viewerService.getFc2LiveInfo()
      .subscribe( channels => {
        this.channels = channels;
        this.selectedChannels = channels.slice(0, 8);
      });
  }

  srcUrl(c: ChannelInfo): SafeResourceUrl {
    let url: string = 'http://live.fc2.com/embedPlayer/?id=' + c.id + '&lang=ja&suggest=1&thumbnail=1&adultaccess=1';
    let surl = this.sanitizer.bypassSecurityTrustUrl(url);
    console.log(surl);
    return surl;
    // return 'hoge'; // this.sanitizer.bypassSecurityTrustUrl('hoge');
  }
}
