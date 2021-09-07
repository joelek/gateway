import * as jwk from "../jwk";
import * as pkcs8 from "./";

const RSA_PUBLIC_KEY_PKCS8 = Buffer.from(`
`, "base64");

const RSA_PUBLIC_KEY_JWK: jwk.RSAPublicKey = {
	kty: "RSA",
	n: "AL5jMP7Ar8oYXLar9-fDUjMVToISGDOM4OWE45VSxXuaLEdD2SVD1W77KN3Dm9wI5RdVW7ky1ydZlhNranb-qJU",
	e: "AQAB"
};

const RSA_PRIVATE_KEY_PKCS8 = Buffer.from(`
	MIIBUwIBADANBgkqhkiG9w0BAQEFAASCAT0wggE5AgEAAkEAvmMw/sCvyhhctqv3
	58NSMxVOghIYM4zg5YTjlVLFe5osR0PZJUPVbvso3cOb3AjlF1VbuTLXJ1mWE2tq
	dv6olQIDAQABAkAyo0FJ0MgwsXAfaffi3dGEIruh3twvAd5jTYgWlFBQQkgpTM2T
	dBaqac8TbrL8fYUlDhBu6rSDY/x7BRY9P+ohAiEA9z3/Tlio0/vECyhEDuW4bdLV
	uXiHSQZkDuJOz8NNlWkCIQDFIaIVCg8DLPpDRgB2Xx/QoFhAjvYzQxkKuU5I7DP4
	TQIgCfacoDqgaxJ9PvnbbEJDoWFarYO25/Fy/MqP5H15VekCIConPP9+vSMStRk5
	mNO3F5iHERgM+fyQNoSih2j0iVBpAiAZqtOXK/aqYFnsM1pixxUVHfzNZBRZekqH
	j0rDlYa3rg==
`, "base64");

const RSA_PRIVATE_KEY_JWK: jwk.RSAPrivateKey = {
	kty: "RSA",
	n: "AL5jMP7Ar8oYXLar9-fDUjMVToISGDOM4OWE45VSxXuaLEdD2SVD1W77KN3Dm9wI5RdVW7ky1ydZlhNranb-qJU",
	e: "AQAB",
	d: "MqNBSdDIMLFwH2n34t3RhCK7od7cLwHeY02IFpRQUEJIKUzNk3QWqmnPE26y_H2FJQ4Qbuq0g2P8ewUWPT_qIQ",
	p: "APc9_05YqNP7xAsoRA7luG3S1bl4h0kGZA7iTs_DTZVp",
	q: "AMUhohUKDwMs-kNGAHZfH9CgWECO9jNDGQq5TkjsM_hN",
	dp: "CfacoDqgaxJ9PvnbbEJDoWFarYO25_Fy_MqP5H15Vek",
	dq: "Kic8_369IxK1GTmY07cXmIcRGAz5_JA2hKKHaPSJUGk",
	qi: "GarTlyv2qmBZ7DNaYscVFR38zWQUWXpKh49Kw5WGt64"
};

(async () => {
	let observed = pkcs8.parseRSAPrivateKey(RSA_PRIVATE_KEY_PKCS8);
	console.assert(true, `It should parse RSA private keys properly.`);
})();
