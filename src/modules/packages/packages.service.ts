import { Injectable } from '@nestjs/common';

export interface PackageInfo {
  id: string;
  weeklyDownloads: number;
  dependencyCount: number;
  dependencies: string[];
}

@Injectable()
export class PackagesService {
  private readonly dataShort: PackageInfo[] = [
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

  private readonly dataLong: PackageInfo[] = [
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

    {
      id: '@nestjs/common',
      weeklyDownloads: 543210,
      dependencyCount: 2,
      dependencies: ['rxjs', 'reflect-metadata'],
    },
    {
      id: '@nestjs/core',
      weeklyDownloads: 512340,
      dependencyCount: 3,
      dependencies: ['rxjs', 'reflect-metadata', 'tslib'],
    },
    {
      id: '@nestjs/platform-express',
      weeklyDownloads: 402300,
      dependencyCount: 1,
      dependencies: ['express'],
    },
    {
      id: 'reflect-metadata',
      weeklyDownloads: 654321,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'lodash',
      weeklyDownloads: 1500000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'dayjs',
      weeklyDownloads: 900000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'uuid',
      weeklyDownloads: 800000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'axios',
      weeklyDownloads: 1200000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: '@types/node',
      weeklyDownloads: 2000000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: '@types/express',
      weeklyDownloads: 300000,
      dependencyCount: 1,
      dependencies: ['@types/node'],
    },
    {
      id: '@types/lodash',
      weeklyDownloads: 250000,
      dependencyCount: 1,
      dependencies: ['@types/node'],
    },

    {
      id: 'chalk',
      weeklyDownloads: 700000,
      dependencyCount: 1,
      dependencies: ['ansi-styles'],
    },
    {
      id: 'ansi-styles',
      weeklyDownloads: 500000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'mongoose',
      weeklyDownloads: 600000,
      dependencyCount: 1,
      dependencies: ['mongodb'],
    },
    {
      id: 'mongodb',
      weeklyDownloads: 550000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'jsonwebtoken',
      weeklyDownloads: 450000,
      dependencyCount: 1,
      dependencies: ['jws'],
    },
    {
      id: 'jws',
      weeklyDownloads: 300000,
      dependencyCount: 1,
      dependencies: ['jwa'],
    },
    {
      id: 'jwa',
      weeklyDownloads: 280000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'bcrypt',
      weeklyDownloads: 350000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'bcryptjs',
      weeklyDownloads: 320000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'dotenv',
      weeklyDownloads: 900000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'cors',
      weeklyDownloads: 850000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'helmet',
      weeklyDownloads: 500000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'prettier',
      weeklyDownloads: 1100000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'eslint',
      weeklyDownloads: 1000000,
      dependencyCount: 1,
      dependencies: ['@eslint/js'],
    },
    {
      id: '@eslint/js',
      weeklyDownloads: 950000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'webpack',
      weeklyDownloads: 700000,
      dependencyCount: 2,
      dependencies: ['webpack-cli', 'tapable'],
    },
    {
      id: 'webpack-cli',
      weeklyDownloads: 650000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'tapable',
      weeklyDownloads: 600000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'vite',
      weeklyDownloads: 800000,
      dependencyCount: 1,
      dependencies: ['esbuild'],
    },
    {
      id: 'esbuild',
      weeklyDownloads: 750000,
      dependencyCount: 0,
      dependencies: [],
    },

    {
      id: 'sass',
      weeklyDownloads: 500000,
      dependencyCount: 0,
      dependencies: [],
    },
    {
      id: 'postcss',
      weeklyDownloads: 400000,
      dependencyCount: 1,
      dependencies: ['nanoid'],
    },
    {
      id: 'nanoid',
      weeklyDownloads: 380000,
      dependencyCount: 0,
      dependencies: [],
    },
  ];

  private readonly data: PackageInfo[] = [];

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
