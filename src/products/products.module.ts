import { Module } from '@nestjs/common';
import { ProductsService } from './products.service';
import { ProductsController } from './products.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Product } from './entities/product.entity';

@Module({
  controllers: [ProductsController],
  providers: [ProductsService],
  imports: [
    // forRoot conexion 
    // forFecture intrraccion a la base de datos
    TypeOrmModule.forFeature([Product])
  ]
})




export class ProductsModule {}
