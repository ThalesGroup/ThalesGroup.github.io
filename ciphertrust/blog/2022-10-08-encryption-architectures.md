---
slug: a-guide-to-encryption-architectures
title: A Guide to Data Security Architectures
authors: pranav
tags: [data-encryption, data-protection-gateway]
---

# A Guide to Data Security Architectures — Encryption at Rest and in-Transit

Building and deploying applications and services is super exciting. Still, when your security team prevents your application from going into production due to a lack of data encryption — this can be very annoying.

Let’s take a look at the different data encryption methods that are most commonly used and how we can implement some of them.

Data encrypted at-rest vs in-transit?
=====================================

Well, it’s often hard to choose between encrypting a complete Postgres database or encrypting only specific fields of data in the database right before it gets written to a table.

The key difference between the two is that encrypting a database **after** data is written to it is called **data encryption at rest** and encrypting data **before** data is written to a database is called data encryption **in-transit**.

The illustration below should give you a good high-level understanding of the difference. Although data encryption at-rest was a standard encryption practice followed for many years, it involves developers writing and maintaining various different scripts or applications to ensure that the encryption is up to company standards. It is still useful while encrypting file systems and storage. On the other hand, data encryption in-transit is a lot more beneficial at times when you want to make your infrastructure database agnostic and provide high-security standards with significantly low developer effort.

![Data Encryption at REST Architecture](https://miro.medium.com/max/720/1*7sOyc7n62Mxsq0cfKsLL0Q.png)

Note that from the above diagram we can see that the method of encrypting data in-transit uses a **side-car container** which is a proxy used to intercept every request with sensitive fields or encrypted data and encrypt or decrypt the same respectively.

![Data Encryption in-transit Architecture](https://miro.medium.com/max/720/1*9PC9Nv4j_L2LIoWsR4ZIeg.png)

Advantages of Data Encryption in-Transit
----------------------------------------

**✅ No change to applications**

The beauty of doing data-encryption in transit is that you don’t need to worry about changing any of your frontend apps, APIs, or databases. Since the side-car container does field-level encryption, you can granularly control all the data that needs to be encrypted and decrypted by remotely setting access policies from your key manager.

**✅ Easy to deploy**

Deploying a [Data Protection Gateway](https://cpl.thalesgroup.com/encryption/ciphertrust-data-protection-gateway) side-car container is as easy to deploy as logging agents such as DataDog or Prometheus. You can just update your docker-compose, Kubernetes config files or just use Helm to install it.

**✅ Developers can stop implementing data security policies**

Now you can shift the responsibility of setting and implementing data security policies from developers over to InfoSec teams. This significantly helps prevent data breaches or unauthorized data access.

Disadvantages of Data Encryption in-Transit
-------------------------------------------

❌ **Data encryption is only as strong as policies set**

This applies to any method of data encryption. However, when we perform field-level encryption and decryption, InfoSec teams need to be aware of all data flowing through various API routes to prevent data breaches and unauthorized access to unencrypted data.

---

How Do I Implement Data Encryption in-Transit?
----------------------------------------------

You’re in luck 🙌 because I have a tutorial showing you how to easily implement data encryption in-transit with any of your containerized applications.

In this tutorial, I have used [CipherTrust Manager](https://ciphertrust.io/)’s Data Protection Gateway product which is extremely easy to set up and free to start using👇

import YoutubeEmbed from '@site/src/components/YoutubeEmbed';
import GroupButtons from '@site/src/components/VideoButtons/GroupButtons';

<YoutubeEmbed embedId="EJun5McPRGY" />
<GroupButtons href="https://github.com/snpranav/data-encryption-in-transit-demo" demourl="https://main-yak.sneakpeak.dev/" />

---

Now go ahead and encrypt data in-transit from all your applications using side-car containers.

If you have any issues with implementation or questions about data encryption in-transit, feel free to leave a comment, tweet [@snpranav](https://twitter.com/snpranav), or raise a [GitHub issue](https://github.com/snpranav/data-encryption-in-transit-demo/issues/new) :)