# @joelek/certhero

```
certhero \
	--acme=https://api.acme-provider.com/directory \
	--email=user@domain.com \
	--dns=<string> \
	--domain=domain.com \
	--domain=*.domain.com \
	--account=account_key.pem \
	--key=certificate_key.pem \
	--cert=full_chain.pem \
	--root=/certs/domain.com/
```

## Roadmap

* Investigate using createPrivateKey({ key, format, type }) and export({ format }) from crypto module.
