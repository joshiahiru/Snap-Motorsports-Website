# Snap Motorsports Website

Static website for [Snap Motorsports](https://snapmotorsports.com), hosted on AWS and deployed automatically via GitHub Actions.

## Repository structure

```
.
├── site/                  # Static site files (HTML, CSS, JS, assets)
├── infra/                 # Terraform infrastructure (S3, CloudFront, Route 53, ACM, IAM)
├── .github/workflows/     # CI/CD deploy workflow
├── README.md
└── ARCHITECTURE.md        # Detailed AWS architecture documentation
```

## Quick links

| Resource | Value |
|---|---|
| Production domain | `snapmotorsports.com` |
| CloudFront URL (pre-DNS) | `https://dv6ow0540rgx4.cloudfront.net` |
| GitHub repo | [joshiahiru/Snap-Motorsports-Website](https://github.com/joshiahiru/Snap-Motorsports-Website) |
| AWS region (S3) | `eu-central-1` (Frankfurt) |

## Local development

Edit files in the `site/` directory. There is no build step — the site is plain static HTML.

To preview locally, open `site/index.html` in a browser or serve the folder with any static file server:

```bash
cd site
python3 -m http.server 8080
```

## Deployment

Pushes to `main` that change files under `site/` trigger the **Deploy Site** GitHub Actions workflow. It:

1. Assumes an AWS IAM role via GitHub OIDC (no long-lived credentials)
2. Syncs `site/` to the S3 bucket `snap-motorsports-site`
3. Invalidates the CloudFront cache

You can also trigger a deploy manually from the **Actions** tab in GitHub.

## Infrastructure

All AWS resources are defined in Terraform under `infra/`. See [ARCHITECTURE.md](ARCHITECTURE.md) for the full system design, resource list, and setup instructions.

### First-time setup

```bash
cd infra
terraform init
terraform apply
```

### Enable custom domain (after DNS delegation)

After updating your domain registrar's nameservers to the Route 53 values from `terraform output route53_nameservers`, run:

```bash
cd infra
terraform apply -var="enable_custom_domain=true"
```

This validates the ACM certificate, attaches `snapmotorsports.com` and `www.snapmotorsports.com` to CloudFront, and creates the DNS alias records.

## Prerequisites

- [Terraform](https://developer.hashicorp.com/terraform/install) >= 1.0
- [AWS CLI](https://docs.aws.amazon.com/cli/latest/userguide/getting-started-install.html) configured with appropriate credentials
- GitHub repo variable `AWS_DEPLOY_ROLE_ARN` set to the deploy role ARN (output by Terraform)
