/// <reference types="node" />

declare function queryVSMarketplace(
  query: string
): Promise<marketplaceResponse>;

interface marketplaceResponse {
  results: result[];
}

interface result {
  extensions: extension[];
  resultMetadata: resultMetadataObject[];
}

interface resultMetadataObject {
  metadataType: string;
  metadataItems: metadataItem[];
}

interface metadataItem {
  name: string;
  count: number;
}

interface extension {
  publisher: publisherObject;
  extensionId: string;
  extensionName: string;
  displayName: string;
  flags: string;
  lastUpdated: string;
  publishedDate: string;
  releaseDate: string;
  shortDescription: string;
  versions: version[];
  statistics: statisticsObject[];
  deploymentType: number;
}

interface publisherObject {
  publisherId: string;
  publisherName: string;
  displayName: string;
  flags: string;
}

interface version {
  version: string;
  flags;
  string;
  lastUpdated: string;
  files: fileObject[];
  properties: propObject[];
  assetUri: string;
  fallbackAssetUri: string;
}

interface fileObject {
  assetType: string;
  source: string;
}

interface propObject {
  key: string;
  value: string;
}

interface statisticsObject {
  statisticName: string;
  value: number;
}

export = queryVSMarketplace;
