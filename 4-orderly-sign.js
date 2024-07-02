import { signAsync } from '@noble/ed25519';
import { config } from './config/index.js';

async function generateOrderlySignature(url, privateKey, method) {
	const timestamp = Date.now();
	const encoder = new TextEncoder();
	let message = `${String(timestamp)}${method}${url}`;
	const orderlySignature = await signAsync(encoder.encode(message), privateKey);

	const signature = Buffer.from(orderlySignature).toString('base64');
	return signature;
}

const requestURL = '/v1/volume/broker/daily'; // The endpoint you want to access
const requestMethod = 'GET'; // The request method you want to use
generateOrderlySignature(requestURL, config.PRIVATE_KEY, requestMethod).then(
	(orderlySignature) => {
		console.log(
			`🚀 -> file: 4-orderly-signature.ts:17 -> orderlySignature:`,
			orderlySignature
		);
	}
);
