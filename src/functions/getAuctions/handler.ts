import 'source-map-support/register';

import { DynamoDB } from 'aws-sdk';
import { APIGatewayProxyHandler } from 'aws-lambda';
import { successResponse, errorResponse } from '@libs/apiGateway';
import { middyfy } from '@libs/lambda';
import { Auction } from 'src/models/auction.model';

const dynamodb = new DynamoDB.DocumentClient();

const getAuctions: APIGatewayProxyHandler = async () => {
  let auctions: Auction[];

  try {
    const result = await dynamodb
      .scan({
        TableName: process.env.AUCTIONS_TABLE_NAME,
      })
      .promise();

    auctions = result.Items as Auction[];
  } catch (error) {
    console.error(error);
    return errorResponse({ message: error });
  }

  return successResponse({ data: { auctions } });
};

export const main = middyfy(getAuctions);
