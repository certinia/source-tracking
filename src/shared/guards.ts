/*
 * Copyright (c) 2020, salesforce.com, inc.
 * All rights reserved.
 * Licensed under the BSD 3-Clause license.
 * For full license text, see LICENSE.txt file in the repo root or https://opensource.org/licenses/BSD-3-Clause
 */
import { SourceComponent, MetadataMember } from '@salesforce/source-deploy-retrieve';

export const stringGuard = (input: string | undefined): input is string => {
  return typeof input === 'string';
};

export const sourceComponentGuard = (input: SourceComponent | undefined): input is SourceComponent => {
  return input instanceof SourceComponent;
};

export const metadataMemberGuard = (input: MetadataMember | undefined): input is MetadataMember => {
  return input !== undefined && typeof input.fullName === 'string' && typeof input.type === 'string';
};
