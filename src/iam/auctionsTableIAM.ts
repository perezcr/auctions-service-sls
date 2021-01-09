export const AuctionsTableIAM = {
  Effect: 'Allow',
  Action: ['dynamodb:PutItem', 'dynamodb:Scan', 'dynamodb:GetItem'],
  Resource: '${self:custom.AuctionsTable.arn}',
};
