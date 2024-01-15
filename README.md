
# Blocks

This is a simple project to explore my own curiosity for Golang, Python, TypeScript, Vue, and AWS web services. Since projects like this only get delayed by trying to come up with a unique idea, instead I simply thought of a practical idea. Keeping track of blocks.

The web app being developed for this project simply keeps track of a user's blocks. The app will compute various properties of the user's set of blocks. The user can create new blocks, remove blocks, update block properties, and read off block information. It's basically a CRUD app for blocks.

The tech stack for this idea is what interests me the most.

AWS: Used for keeping track of blocks through MongoDB Atlas. A CRUD API, using AWS API Gateway and Lambda, manages operations involving the document db. Each CRUD operation must be federated through JWT using AWS Cognito. So the web app will involve auth. Furthermore, the web app itself could be hosted on EKS using Kubernetes, Docker, and the AWS ECR, but this may come later.

The CRUD API will be written in Go. The AWS infrastructure will be provisioned with the AWS CDK in Python or Go. The web app will be written in TypeScript with Vue. 






## Authors

- [@judahhigh](https://www.github.com/judahhigh)

