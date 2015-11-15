start:
	node api && node index.js

test-server: 
	cd api && nodemon --debug --harmony lib/koa-index.js

test-runner:
	cd api && grunt


.PHONY: start test-runner


 
