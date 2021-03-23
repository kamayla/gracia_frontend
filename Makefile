serve:
	yarn start
deploy:
	yarn build
	export AWS_PROFILE=ecsmaster
	aws s3 cp ./build s3://tanp-test --recursive