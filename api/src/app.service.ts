import { Injectable } from '@nestjs/common';
import { Items } from './entities/items';
import { Message } from './entities/message';
import * as AWS from 'aws-sdk';

@Injectable()
export class CreateOrder {
  async execute(customerId: string, items: Items[]): Promise<void> {
    AWS.config.update({
      region: 'us-east-1',
      accessKeyId: '{access_key}',
      secretAccessKey: '{secret_key}',
    });

    const message: Message = {
      customerId,
      items,
    };

    const params = {
      Message: JSON.stringify(message),
      TopicArn: 'arn:aws:sns:us-east-1:581871075443:ordersTopic',
    };

    await new AWS.SNS({
      apiVersion: '2010-03-31',
    })
      .publish(params)
      .promise();
  }
}
