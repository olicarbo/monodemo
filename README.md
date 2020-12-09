# Monorepo Demo

## Requirements

- Node 14
- yarn

## Usage

- Build service-a: `yarn workspace @monodemo/service-a build`
- Start service-a: `yarn workspace @monodemo/service-a start`
- Build service-a docker: `docker image build --tag test -f packages/service-a/Dockerfile .`

# References

- https://medium.com/@NiGhTTraX/how-to-set-up-a-typescript-monorepo-with-lerna-c6acda7d4559
- https://kulshekhar.github.io/ts-jest/user/install
- https://dev.to/t7yang/typescript-yarn-workspace-monorepo-1pao
- https://stackoverflow.com/questions/24537340/docker-adding-a-file-from-a-parent-directory
