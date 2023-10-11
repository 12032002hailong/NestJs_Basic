import { Module } from '@nestjs/common';
import { RoleService } from './role.service';
import { RoleController } from './role.controller';
import { Role, RoleSchema } from './schemas/role.schema';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  controllers: [RoleController],
  providers: [RoleService],
  imports: [MongooseModule.forFeature([{ name: Role.name, schema: RoleSchema }])]

})
export class RoleModule { }
