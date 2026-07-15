variable "domain_name" {
  description = "Primary domain name for the static website."
  type        = string
  default     = "snapmotorsports.com"
}

variable "github_repo" {
  description = "GitHub repository allowed to assume the deploy role via OIDC."
  type        = string
  default     = "joshiahiru/Snap-Motorsports-Website"
}

variable "aws_region" {
  description = "AWS region for regional resources."
  type        = string
  default     = "eu-central-1"
}

variable "env" {
  description = "Deployment environment (e.g. dev, prod)."
  type        = string
  default     = "prod"

  validation {
    condition     = can(regex("^[a-z0-9-]+$", var.env))
    error_message = "env must contain only lowercase letters, digits and hyphens."
  }
}

variable "project_prefix" {
  description = "Prefix used for named AWS resources."
  type        = string
  default     = "snap-motorsports"
}

variable "site_bucket_name" {
  description = "Globally unique S3 bucket name for static site files."
  type        = string
  default     = "snap-motorsports-site"
}

variable "enable_custom_domain" {
  description = "Enable custom domain aliases after ACM validation completes (set true on second apply)."
  type        = bool
  default     = false
}
