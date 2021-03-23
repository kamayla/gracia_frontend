serve:
	yarn start
deploy:
	yarn install
	yarn build
	export AWS_PROFILE=ecsmaster
	aws s3 sync ./build s3://tanp-test
	aws cloudfront create-invalidation --distribution-id E3JEZROEZF1PY1 --paths "/*"