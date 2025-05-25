import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class GlobalService {
  public lastTargetId: string = '';
  constructor() { }

  getProjects() {
    return [
      {
        name: 'Join',
        transName: 'join',
        duration: 5,
        keyPrefix: 'project.join',
        technologies: ['firebase', 'html', 'css', 'javascript'],
        technologiesName: ['FireBase', 'HTML', 'CSS', 'JavaScript'],
        url: 'join-pc-combine.png',
        giturl: 'https://github.com/bobyang08250772/Join.git',
        weburl: 'https://join.yangxin.de/',
      },
      {
        name: 'El Pollo Loco',
        transName: 'pollo',
        duration: 3,
        keyPrefix: 'project.pollo',
        technologies: ['html', 'css', 'javascript'],
        technologiesName: ['HTML', 'CSS', 'JavaScript'],
        url: 'pollo.png',
        giturl: 'https://github.com/bobyang08250772/EL_POLLO_LOCO.git',
        weburl: 'https://el-pollo-loco.yangxin.de/',
      }
    ];
  }
}
