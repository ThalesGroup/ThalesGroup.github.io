---
sidebar_position: 3
---

# Google Cloud Platform

Deploy CipherTrust Manager CE on Google Cloud Platform in under 5 mins

Get started with CipherTrust Manager Community Edition on Azure you must first deploy the server from the GCP cloud marketplace using [Terraform](##using-terraform)

## Using Terraform

import YoutubeEmbed from '@site/src/components/YoutubeEmbed';

<YoutubeEmbed embedId="q6jNmuq1ZUY" github="https://github.com/thalescpl-io/CipherTrust_Manager/" />

### Pre-requisite Installations
You need to install the following packages to follow along with this tutorial.
* [Git](https://gitscm.org)
* [Terraform CLI](https://terraform.io/downloads)
* [GCloud CLI](https://cloud.google.com/sdk/docs/install-sdk#installing_the_latest_version)

```bash title="Terminal"
git clone https://github.com/thalescpl-io/CipherTrust_Manager.git
cd CipherTrust_Manager/orchestrators/terraform/gcp/
```

### 2. Login to GCloud CLI
```bash title="Terminal"
gcloud init
```

### 3. Initialize Terraform Modules
```bash title="Terminal"
terraform init
```

### 4. Plan and Apply Terraform Configurations
```bash title="Terminal"
terraform apply
```