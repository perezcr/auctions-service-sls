export const AuctionsTableIAM = {
  Effect: 'Allow',
  Action: ['dynamodb:PutItem'],
  Resource: '${self:custom.AuctionsTable.arn}',
};
