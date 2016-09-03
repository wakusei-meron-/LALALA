import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { HTTP_PROVIDERS, JSONP_PROVIDERS } from '@angular/http';
import { ViewerService } from './viewer.service';
import { ChannelInfo } from './channel-info';
import { ChannelSortPipe } from './channel-sort.pipe';
import { MdIcon, MdIconRegistry } from '@angular2-material/icon';

@Component({
  selector: 'my-viewer-list',
  templateUrl: 'viewer.component.html',
  styleUrls: ['viewer.component.scss'],
  changeDetection: ChangeDetectionStrategy.Default,
  providers: [
    HTTP_PROVIDERS,
    JSONP_PROVIDERS,
    ViewerService,
    MdIconRegistry
  ]
  // pipes[ChannelSortPipe]
})
export class ViewerComponent implements OnInit {
  now: number = Date.now();
  channels: ChannelInfo[] = [];
  selectedChannels: ChannelInfo[] = [];
  constructor(private viewerService: ViewerService) {}

  ngOnInit() {
    this.getFc2LiveInfo();
  }

  onSelect(channel: ChannelInfo) {
    // すでに選択している場合
    if (this.selectedChannels.map(sc =>sc.id).indexOf(channel.id) > -1) {
      this.selectedChannels = this.selectedChannels.filter(c =>
        c.id !== channel.id
      );
      return;
    }
    this.selectedChannels.push(channel);
    this.setUndesplayChannel();
  }

  getFc2LiveInfo() {
    this.viewerService.getFc2LiveInfo()
      .subscribe( channels => {
        let pipe = new ChannelSortPipe;
        this.channels = pipe.transform(channels);
        this.selectedChannels = channels.slice(0, 9);
        this.setUndesplayChannel();
        setInterval(() => this.updateFc2LiveInfo(), 1000 * 60);
      });
  }
  updateFc2LiveInfo() {
    this.viewerService.getFc2LiveInfo()
      .subscribe( channels => {
        this.now = Date.now();
        let pipe = new ChannelSortPipe;
        this.channels = pipe.transform(channels);
        this.setUndesplayChannel();
      });
  }

  hideChannel(channel: ChannelInfo) {
    this.selectedChannels = this.selectedChannels.filter(c => c.id !== channel.id);
    this.setUndesplayChannel();
  }

  setUndesplayChannel() {
    this.channels = this.channels.filter(c =>
      this.selectedChannels.map(sc => sc.id).indexOf(c.id) === -1
    );
  }
}
