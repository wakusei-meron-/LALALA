import { Pipe, PipeTransform } from '@angular/core';
import { ChannelInfo} from './channel-info';

@Pipe({
  name: 'orderByCount'
})
export class ChannelSortPipe implements PipeTransform {
  transform(info: ChannelInfo[]): ChannelInfo[] {
    info.sort((a: ChannelInfo, b: ChannelInfo) => {
      return b.count - a.count;
    });
    return info;
  }
}
