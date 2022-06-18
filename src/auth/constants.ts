import { generateKeyPairSync } from 'crypto';

const { privateKey, publicKey } = generateKeyPairSync('rsa', {
  modulusLength: 4096,
  publicKeyEncoding: {
    type: 'spki',
    format: 'pem',
  },
  privateKeyEncoding: {
    type: 'pkcs8',
    format: 'pem',
    // cipher: 'aes-256-cbc',
    // passphrase: 'top secret',
  },
});

export const jwtConstants = {
  privateKey: privateKey,
  publicKey: publicKey,
};
