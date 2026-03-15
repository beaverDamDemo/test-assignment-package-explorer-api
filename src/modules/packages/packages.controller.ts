import { Controller, Get, Param } from '@nestjs/common';
import { PackagesService } from './packages.service';

@Controller('packages')
export class PackagesController {
  constructor(private readonly service: PackagesService) {}

  @Get()
  getAll() {
    return this.service.getAll();
  }

  @Get(':id/dependencies')
  getDependencies(@Param('id') id: string) {
    return this.service.getDependencies(id);
  }
}
