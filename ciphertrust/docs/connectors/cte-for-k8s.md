---
sidebar_position: 2
---

# Transparent Encryption for Kubernetes

To get started with running CipherTrust's Transparent Encryption connector with Kubernetes, you would need to first have a deployed CipherTrust Manager instance. To learn about how to deploy CipherTrust Manager, check out our [guides](../deploy/azure.mdx).

## Kuberenetes Setup
There are some pre-requisites we need to check. Our VM must have installed versions of:
* KVM
* Docker
* Kubernetes
* helm
* Minikube
* Git
* A Kubernetes cluster health monitoring tool

Note: If you prefer, you could also perform this deployment with microK8s. This would remove the need to install services like MiniKube, KVM, Kubernetes, etc

## Deploy CTE for Kubernetes
Once you have confirmed you have the pre-requisites to deploy CTE for K8s. You can run a test setup with an [open-source demo](https://github.com/thalescpl-io/ciphertrust-transparent-encryption-kubernetes) by Thales. Run,

```bash
git clone https://github.com/thalescpl-io/ciphertrust-transparent-encryption-kubernetes.git
cd ciphertrust-transparent-encryption-kubernetes/
./deploy.sh
```

## Configuring CipherTrust to talk to the Kubernetes Cluster
First, we need to generate a new registration token on the CipherTrust platform. We can do this by going to `Access Management -> Registration Token -> "Add Registration Token"`

We also need to enable the CipherTrust trial license, we can do this by going to `Licensing -> "Add CipherTrust Platform Evaluation"` to enable the evaluation license.

# Setup the K8s Client
* Go to `Clients -> K8s Storage Group`. Create a new K8s storage group.
![Setup K8s Storage Group](./img/setup-k8s-storage-group.png)