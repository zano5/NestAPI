
import {

    Controller,
    Get
  } from '@nestjs/common';


  


@Controller('message')
export class MyApi {






    @Get()
    getMessage(){
        return {status: 'My Status Message is 200'}
        }



}
