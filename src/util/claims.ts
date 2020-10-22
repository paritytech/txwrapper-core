import { StatementKind } from '@polkadot/types/interfaces';
import { u8aToHex, u8aToString } from '@polkadot/util';
import { decodeAddress } from '@polkadot/util-crypto';

import { createDecorated } from './metadata';
import { OptionsWithMeta } from './types';

/**
 * Object representing a Polkadot statement.
 */
export interface PolkadotStatement {
  /**
   * The statement's SHA-256 multihash.
   */
  hash: string;
  /**
   * The English human-readable sentence to sign.
   */
  sentence: string;
  /**
   * The url at which the statement is hosted.
   */
  url: string;
}

/**
 * Retrieve the statements to sign with `claims.claimAttest` and
 * `claims.attest`. These statements are hardcoded in txwrapper.
 *
 * @param statementKind - The statement kind, can be 'Regular' or 'Saft'.
 */
export function getPolkadotStatement(
  statementKind: StatementKind | 'Regular' | 'Saft'
): PolkadotStatement {
  // Same as https://github.com/polkadot-js/apps/blob/tbaut-attest/packages/page-claims/src/util.ts#L118
  return statementKind.toString() === 'Regular'
    ? {
        hash: 'Qmc1XYqT6S39WNp2UeiRUrZichUWUPpGEThDE6dAb3f6Ny',
        sentence:
          'I hereby agree to the terms of the statement whose SHA-256 multihash is Qmc1XYqT6S39WNp2UeiRUrZichUWUPpGEThDE6dAb3f6Ny. (This may be found at the URL: https://statement.polkadot.network/regular.html)',
        url: 'https://statement.polkadot.network/regular.html',
      }
    : {
        hash: 'QmXEkMahfhHJPzT3RjkXiZVFi77ZeVeuxtAjhojGRNYckz',
        sentence:
          'I hereby agree to the terms of the statement whose SHA-256 multihash is QmXEkMahfhHJPzT3RjkXiZVFi77ZeVeuxtAjhojGRNYckz. (This may be found at the URL: https://statement.polkadot.network/saft.html)',
        url: 'https://statement.polkadot.network/saft.html',
      };
}

/**
 * Generate the payload that needs to be signed with the Ethereum key that made
 * a claim. The returned signature is needed as argument for
 * `claims.claimAttest`.
 *
 * @param dest - The destination account to which to pay out the claim.
 * @param statement - The identity of the statement that is being attested to
 * in the signature.
 * @param options - Registry and metadata used for constructing the payload.
 */
export function getEthereumPayload(
  dest: string,
  statement: PolkadotStatement,
  options: OptionsWithMeta
): string {
  const decorated = createDecorated(options.registry, options.metadataRpc);
  const prefix = u8aToString(decorated.consts.claims.prefix.toU8a(true));

  return `${prefix}${u8aToHex(decodeAddress(dest), -1, false)}${
    statement.sentence
  }`;
}
