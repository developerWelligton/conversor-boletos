import { Module } from "@nestjs/common"; 
import { ConversorService } from "./services/conversor.service";
import { ConversorController } from "./conversor.controller";


@Module({
  imports: [],
  controllers: [ConversorController],
  providers: [ConversorService],
})
export class ConversorModule {}