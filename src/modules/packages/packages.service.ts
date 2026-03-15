import { Injectable } from '@nestjs/common';

@Injectable()
export class PackagesService {
  private readonly data = [
    {
      id: '@angular/core',
      weeklyDownloads: 1234567,
      dependencyCount: 2,
      dependencies: ['rxjs', 'tslib'],
    },
    {
      id: '@angular/common',
      weeklyDownloads: 987654,
      dependencyCount: 1,
      dependencies: ['tslib'],
    },
    {
      id: 'rxjs',
      weeklyDownloads: 876543,
      dependencyCount: 1,
      dependencies: ['tslib'],
    },
    {
      id: 'tslib',
      weeklyDownloads: 2345678,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'express',
      weeklyDownloads: 345,
      dependencyCount: 1,
      dependencies: ['body-parser'],
    },
    {
      id: 'body-parser',
      weeklyDownloads: 737,
      dependencyCount: 0,
      dependencies: [],
    },
  ];

  getAll() {
    return this.data.map((pkg) => ({
      id: pkg.id,
      weeklyDownloads: pkg.weeklyDownloads,
      dependencyCount: pkg.dependencyCount,
    }));
  }

  getDependencies(id: string) {
    const pkg = this.data.find((p) => p.id === id);
    return pkg ? pkg.dependencies : [];
  }
}
