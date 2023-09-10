import { Module } from '@nestjs/common';
import { BoilerpartsController } from './boiler-parts.controller';
import { BoilerpartsService } from './boiler-parts.service';
import { SequelizeModule } from '@nestjs/sequelize';
import { BoilerParts } from './boiler-parts.model';

@Module({
  imports: [SequelizeModule.forFeature([BoilerParts])],
  controllers: [BoilerpartsController],
  providers: [BoilerpartsService],
  exports: [BoilerpartsService],
})
export class BoilerpartsModule {}
