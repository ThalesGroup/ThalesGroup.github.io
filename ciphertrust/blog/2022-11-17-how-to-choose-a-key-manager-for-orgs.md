---
slug: choosing-a-key-manager
title: A Guide to Picking the Right Key Manager for Your Org
authors: pranav
tags: [data-encryption, key-management]
---

# Key Managers 🔐 — How Do I Pick the Right One for My Org?!

Your company has a ton of daily active users and you have this amazingly efficient architecture to process requests at scale, but your InfoSec team asks you to use a key manager — there are so many out there, which one do you choose?

There are various different types of key managers, but in this post we’ll cover three most common key managers:

* Cloud Key Managers (Ex — AWS KMS, GCP KMS, Azure Key Vault, etc.)

* External Key Managers (Ex — Thales CipherTrust Manager, Hashicorp Vault)

## First, the literal  key to security — HSMs

HSM stands for “[Hardware Security Module](https://en.wikipedia.org/wiki/Hardware_security_module)”. These are physical devices that are usually tamper resistant which store keys and perform encrypt, decrypt and other cryptographic operations.

HSMs are needed in secure environments such as healthcare or financial institutions where you need to pass compliances such as PCI DSS.

## Now Let’s Compare

Let’s look at the pros and cons of each to help you decide what would work best for your organization.

### Cloud Key Managers

✅ **Easy Integration with Cloud Managed Services**

When using cloud key managers like [AWS KMS (Key Management Service)](https://aws.amazon.com/kms/) it can be advantageous as you get the flexibility of AWS managing your keys as well as direct integration into your existing AWS managed services such as [AWS S3](https://aws.amazon.com/s3/), or [AWS RDS (Relational Database Service)](https://aws.amazon.com/rods/), etc.

✅ **HSMs provisioned and managed by a cloud provider (most of the time 🤞)**

Most famous cloud providers have HSMs that they use in their data centers which store your keys, so you don’t have to worry about renting an HSM.

**❌ No Separation of Trust 🕵️‍♀️**

Since your cloud provider now hosts and controls your data and encryption keys. Your user data might not be as safe anymore as the cloud provider with malicious intent could easily decrypt your user data. This does not help in creating a **zero-trust architecture**. While it’s true that your cloud provider has your best interest; there are always hackers lurking around the internet trying to get malicious access to your data, so it’s best to store data in an isolated environment.

### External Key Managers

**✅ Complete Separation of Trust**

When running a product such as CipherTrust Manager or Hashicorp Vault, your architectures are zero-trust by default as 2 different entities have access to either your data or your keys and **NOT both**.

**❌ Build your own custom integrations**

Unless the key manager service has connectors, many-a-times, you would need to build your own connectors which could put a lot of engineering debt on your teams.

⚠️** Need to rent out your own HSM**

You’d need to manage your own HSM, but fortunately, there are service providers that will rent out and manage the HSMs (just like a cloud provider) — so this is neither a pro nor a con. A great example of a hosted HSM is the [Luna HSM](https://cpl.thalesgroup.com/encryption/data-protection-on-demand/services/luna-cloud-hsm).

## **Best of Both Worlds 🤔**

Yes, it’s possible! To implement the best data security practices, you would want the ease of integration with cloud-managed services as well as complete separation of trust to isolate encryption keys from data. This method is also called **BYOK **(bring your own key).

You can do this with products such as CipherTrust Manager [Cloud Key Manager](https://cpl.thalesgroup.com/encryption/key-management/ciphertrust-cloud-key-manager). This offers:

**✅ Direct connection with cloud-managed KMS account**

Once you connect your AWS or GCP or Azure account to CipherTrust Manager as shown in the tutorial linked below, you will be able to manage keys directly from CipherTrust Manager and encrypt data on cloud-managed services.

**✅ Key Lifecycle Management in a few clicks**

In just a few clicks you can setup key rotation which will rotate your keys every few months and provide the best data security standards for your organization.

### How do I implement this?

Luckily, it’s easy to implement in 3 simple steps. Here’s a tutorial I made that demos connecting CipherTrust Manager to my AWS KMS (Key Management Service) account and encrypt my AWS managed services such as S3 and RDS.


Now go ahead and encrypt all your cloud-managed services using this hybrid BYOK approach!

If you have any issues with implementation or questions about data encryption, feel free to leave a comment, tweet [@snpranav](https://twitter.com/snpranav), or raise a [GitHub issue](https://github.com/snpranav/data-encryption-in-transit-demo/issues/new) :)