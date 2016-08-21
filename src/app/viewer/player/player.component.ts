import { Component, OnInit, ChangeDetectionStrategy, Input, Output, EventEmitter } from '@angular/core';
import { ChannelInfo } from '../channel-info';
import { SafeResourceUrl, DomSanitizationService } from '@angular/platform-browser';

@Component({
  selector: 'app-player',
  templateUrl: 'player.component.html',
  styleUrls: ['player.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PlayerComponent implements OnInit {

  @Input()
  channel: ChannelInfo;
  @Output()
  hideChannel = new EventEmitter<ChannelInfo>();
  
  constructor(private sanitizer: DomSanitizationService) {
    this.sanitizer = sanitizer;
  }

  ngOnInit() {
  }

  srcUrl(c: ChannelInfo): SafeResourceUrl {
    let url: string = 'http://live.fc2.com/embedPlayer/?id=' + c.id + '&lang=ja&suggest=1&thumbnail=1&adultaccess=1';
    let surl = this.sanitizer.bypassSecurityTrustUrl(url);
    console.log(surl);
    return surl;
  }

  onSelect(channel: ChannelInfo) {
    this.hideChannel.emit(channel);
  }
}
