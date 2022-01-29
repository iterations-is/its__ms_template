# Iterations / Microservice Template

## Development
```shell
yarn
# First run may fail due to missing build files.
yarn dev
```

## Docker
```shell
# Create an .env file with the appropriate environment variables.
cp .env.example .env
# Build the Docker image.
yarn docker:build
# Start the Docker container.
docker run -d --name its_1 -p 10000:10000 its__ms_template
```
